import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

const REQUIRED = ["fullName", "email", "phone", "age", "city", "courseInterestedIn"] as const;

type Body = {
  fullName?: string;
  email?: string;
  phone?: string;
  age?: string;
  city?: string;
  courseInterestedIn?: string;
  message?: string;
  instagramId?: string;
  youtubeId?: string;
};

function validate(body: Body): string | null {
  for (const key of REQUIRED) {
    const v = body[key];
    if (v == null || String(v).trim() === "") return `Missing or empty: ${key}`;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) return "Invalid email";
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Body;
    const err = validate(body);
    if (err) {
      return NextResponse.json({ error: err }, { status: 400 });
    }

    const doc = {
      fullName: String(body.fullName).trim(),
      email: String(body.email).trim(),
      phone: String(body.phone).trim(),
      age: String(body.age).trim(),
      city: String(body.city).trim(),
      courseInterestedIn: String(body.courseInterestedIn).trim(),
      message: body.message ? String(body.message).trim() : "",
      instagramId: body.instagramId ? String(body.instagramId).trim() : "",
      youtubeId: body.youtubeId ? String(body.youtubeId).trim() : "",
      submittedAt: new Date(),
    };

    const uri = process.env.MONGODB_URI;
    if (uri) {
      const client = new MongoClient(uri);
      try {
        await client.connect();
        const db = client.db();
        const col = db.collection("registrations");
        await col.insertOne(doc);
      } finally {
        await client.close();
      }
    }

    const emailTo = process.env.EMAIL_TO || "thehimklastudio@gmail.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: smtpUser, pass: smtpPass },
      });

      // Notify founder / studio
      await transporter.sendMail({
        from: smtpUser,
        to: emailTo,
        subject: "New registration — The Him कLA Studio",
        text: [
          `Name: ${doc.fullName}`,
          `Email: ${doc.email}`,
          `Phone: ${doc.phone}`,
          `Age: ${doc.age}`,
          `City: ${doc.city}`,
          `Course: ${doc.courseInterestedIn}`,
          doc.instagramId ? `Instagram: ${doc.instagramId}` : "",
          doc.youtubeId ? `YouTube: ${doc.youtubeId}` : "",
          doc.message ? `Message: ${doc.message}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
        html: [
          "<p><strong>New registration</strong></p>",
          `<p>Name: ${doc.fullName}</p>`,
          `<p>Email: ${doc.email}</p>`,
          `<p>Phone: ${doc.phone}</p>`,
          `<p>Age: ${doc.age}</p>`,
          `<p>City: ${doc.city}</p>`,
          `<p>Course: ${doc.courseInterestedIn}</p>`,
          doc.instagramId ? `<p>Instagram: ${doc.instagramId}</p>` : "",
          doc.youtubeId ? `<p>YouTube: ${doc.youtubeId}</p>` : "",
          doc.message ? `<p>Message: ${doc.message}</p>` : "",
        ].join(""),
      });

      // Thank-you / confirmation email to student
      await transporter.sendMail({
        from: `"The Him कLA Studio" <${smtpUser}>`,
        to: doc.email,
        subject: "Thank you for registering with The Him कLA Studio",
        text: [
          `Hi ${doc.fullName},`,
          "",
          "Thank you for registering with The Him कLA Studio.",
          `We have received your interest in: ${doc.courseInterestedIn}.`,
          "",
          "Our team will review your details and contact you soon on your phone or email.",
          "",
          "If you have any questions, you can reply directly to this email.",
          "",
          "Best regards,",
          "The Him कLA Studio",
          "Yamunanagar",
        ].join("\n"),
        html: [
          `<p>Hi ${doc.fullName},</p>`,
          "<p>Thank you for registering with <strong>The Him कLA Studio</strong>.</p>",
          `<p>We have received your interest in: <strong>${doc.courseInterestedIn}</strong>.</p>`,
          "<p>Our team will review your details and contact you soon on your phone or email.</p>",
          "<p>If you have any questions, you can reply directly to this email.</p>",
          "<p>Best regards,<br/>The Him कLA Studio<br/>Yamunanagar</p>",
        ].join(""),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Register API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
