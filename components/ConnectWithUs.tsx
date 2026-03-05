const SOCIAL = [
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export default function ConnectWithUs() {
  return (
    <section id="connect" className="section-padding bg-dark">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-2 sm:mb-3">
          Connect With Us
        </h2>
        <p className="font-tagline text-sm sm:text-base text-white/70 mb-8 sm:mb-10 max-w-xl mx-auto italic">
          Follow us on social media for updates and behind-the-scenes
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {SOCIAL.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 sm:gap-3 w-28 sm:w-32 md:w-36 py-4 sm:py-6 rounded-2xl bg-dark-card border border-white/5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all min-h-[44px] min-w-[100px] sm:min-w-[120px]"
            >
              {icon === "instagram" && (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948 2.697 6.78 6.78 9.98 11.948 12.028C23.266 23.986 23.666 24 24 24c3.259 0 3.668-.014 4.948-.072 6.275-2.198 9.98-6.479 12.028-11.948.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-2.197-6.78-6.479-9.98-11.948-12.028C20.334.014 19.926 0 19.667 0H12z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  <path d="M18.406 7.094a1.44 1.44 0 100 2.882 1.44 1.44 0 000-2.882z" />
                </svg>
              )}
              {icon === "facebook" && (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              )}
              {icon === "youtube" && (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              )}
              <span className="text-white font-medium text-xs sm:text-sm">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
