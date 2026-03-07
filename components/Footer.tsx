import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const QUICK_LINKS = [
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f0f0f]">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-1.5 sm:mb-2">
              <Image
                src="/images/logo1.jpg"
                alt="The Him Kla Studio"
                width={40}
                height={40}
                className="rounded-full object-cover shrink-0"
              />
              <h3 className="font-heading text-base sm:text-lg font-bold uppercase text-accent tracking-tight">
                The Him कLA Studio
              </h3>
            </Link>
            <p className="text-white/70 text-xs sm:text-sm">
              {siteConfig.contact.city}&apos;s First Professional Acting Studio
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/70 hover:text-accent transition text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Contact Info</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-accent transition">{siteConfig.contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent transition">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-3">
              <a href={siteConfig.social.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition p-1 rounded min-w-[28px] min-h-[28px] flex items-center justify-center" aria-label="Instagram">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm5.5-11.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
              </a>
              <a href={siteConfig.social.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition p-1 rounded min-w-[28px] min-h-[28px] flex items-center justify-center" aria-label="Facebook">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href={siteConfig.social.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition p-1 rounded min-w-[28px] min-h-[28px] flex items-center justify-center" aria-label="YouTube">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 sm:pt-6 border-t border-white/10 text-center text-white/60 text-xs sm:text-sm">
          ©{new Date().getFullYear()} The Him कLA Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
