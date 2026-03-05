"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#gallery", label: "Gallery" },
  { href: "#founder", label: "Founder" },
  { href: "#register", label: "Register" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/70 backdrop-blur-md border-b border-white/10">
      <div className="container-narrow px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide text-white hover:text-accent transition">
          The Him Kla Studio
        </Link>
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs sm:text-sm text-white/90 hover:text-accent transition"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark py-4 px-4 flex flex-col gap-3">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/90 hover:text-accent py-2"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
