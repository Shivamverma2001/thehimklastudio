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
      <div className="container-narrow max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white text-center mb-3">
          Register Now
        </h2>
        <p className="text-white/70 text-center mb-8">
          Start your acting journey with us
        </p>
        <div className="bg-dark-card rounded-2xl p-6 md:p-8 border border-white/5">
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white/90 mb-2">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px]"
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
                className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px]"
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
                className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px]"
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
                className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px]"
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
                className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px]"
              >
                <option value="">Select a course</option>
                {COURSE_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
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
                className="w-full py-3 rounded-xl bg-accent text-white font-bold hover:bg-accent/90 disabled:opacity-60 transition min-h-[48px]"
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
