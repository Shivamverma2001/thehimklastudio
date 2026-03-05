"use client";

import { useState } from "react";

const COURSE_OPTIONS = [
  "Professional Acting Training",
  "Acting Fundamentals",
  "TV & Web Series Auditions",
  "Camera Confidence",
  "Dialogue Delivery",
  "Stage Presence",
  "Personality Development",
];

export default function RegisterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      age: data.get("age"),
      city: data.get("city"),
      courseInterestedIn: data.get("courseInterestedIn"),
      message: data.get("message") || "",
      instagramId: data.get("instagramId") || "",
      youtubeId: data.get("youtubeId") || "",
    };
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setMessage("Registration submitted successfully! We'll get in touch soon.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="register" className="section-padding bg-dark">
      <div className="container-narrow">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white text-center mb-2 sm:mb-3">
          Register Now
        </h2>
        <p className="font-tagline text-sm sm:text-base text-white/70 text-center mb-4 sm:mb-6 italic">
          Start your acting journey with us
        </p>
        <div className="bg-dark-card rounded-2xl p-4 sm:p-5 md:p-6 border border-white/5 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white/90 mb-2">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full px-3 py-2.5 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[40px]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2.5 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[40px]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full px-3 py-2.5 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[40px]"
                placeholder="9897017702"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-white/90 mb-2">
                Age *
              </label>
              <input
                id="age"
                name="age"
                type="number"
                required
                min={5}
                max={99}
                className="w-full px-3 py-2.5 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[40px]"
                placeholder="18"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-white/90 mb-2">
                City *
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px]"
                placeholder="Yamunanagar"
              />
            </div>
            <div>
              <label htmlFor="courseInterestedIn" className="block text-sm font-medium text-white/90 mb-2">
                Course Interested In *
              </label>
              <select
                id="courseInterestedIn"
                name="courseInterestedIn"
                required
                className="w-full px-3 py-2.5 rounded-lg bg-dark border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent min-h-[40px] cursor-pointer"
              >
                <option value="">Choose your course</option>
                {COURSE_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="instagramId" className="block text-sm font-medium text-white/90 mb-2">
                Instagram ID (Optional)
              </label>
              <input
                id="instagramId"
                name="instagramId"
                type="text"
                className="w-full px-3 py-2.5 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[40px]"
                placeholder="@username"
              />
            </div>
            <div>
              <label htmlFor="youtubeId" className="block text-sm font-medium text-white/90 mb-2">
                YouTube ID / Channel (Optional)
              </label>
              <input
                id="youtubeId"
                name="youtubeId"
                type="text"
                className="w-full px-3 py-2.5 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[40px]"
                placeholder="Channel name or @handle"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                className="w-full px-3 py-2.5 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Tell us about your goals..."
              />
            </div>
            <div className="sm:col-span-2">
              {message && (
                <p className={`mb-4 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                  {message}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-2.5 rounded-xl bg-accent text-white font-bold hover:bg-accent/90 disabled:opacity-60 transition min-h-[44px]"
              >
                {status === "loading" ? "Submitting..." : "Submit Registration"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
