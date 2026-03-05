import Link from "next/link";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold uppercase text-accent mb-2">
              The Him Kla Studio
            </h3>
            <p className="text-white/70 text-sm">
              Yamunanagar&apos;s First Professional Acting Studio
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
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
            <h3 className="text-lg font-bold text-white mb-3">Contact Info</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:9897017702" className="hover:text-accent transition">9897017702</a>
              </li>
              <li>
                <a href="mailto:thehimklastudio@gmail.com" className="hover:text-accent transition">
                  thehimklastudio@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 text-center text-white/60 text-sm">
          ©{new Date().getFullYear()} The Him Kla Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
