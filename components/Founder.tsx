import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Founder() {
  const founder = siteConfig.founder;
  return (
    <section id="founder" className="section-padding bg-dark">
      <div className="container-narrow">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white text-center mb-8 sm:mb-12">
          Meet the Founder
        </h2>
        <div className="bg-dark-card rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-center max-w-4xl mx-auto min-h-[260px] sm:min-h-[320px]">
          <div className="relative shrink-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-accent/80 ring-offset-2 sm:ring-offset-4 ring-offset-dark-card">
              <Image
                src="/images/founder.jpg"
                alt={`${founder.name} - Founder, The Him Kla Studio`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 10rem, 12rem"
              />
            </div>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase">
              Founder
            </span>
          </div>
          <div className="text-center md:text-left space-y-3 sm:space-y-4 w-full">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-accent tracking-tight">{founder.name}</h3>
            <p className="font-sans text-white/90 text-xs sm:text-sm leading-relaxed">
              {founder.bio}
            </p>
            <p className="font-tagline text-white/90 text-xs sm:text-sm italic flex gap-2">
              <span className="text-accent text-2xl font-serif">&ldquo;</span>
              {founder.vision}
            </p>
            <div className="flex justify-center md:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={founder.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition p-1.5 rounded-full border border-white/10 hover:border-accent/60"
                aria-label="Founder on Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM18.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </a>
              <a
                href={founder.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition p-1.5 rounded-full border border-white/10 hover:border-accent/60"
                aria-label="Founder on Facebook"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.093 10.125 24v-8.437H7.078v-3.49h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.492 0-1.956.927-1.956 1.877v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.1 24 12.073z" />
                </svg>
              </a>
              <a
                href={founder.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition p-1.5 rounded-full border border-white/10 hover:border-accent/60"
                aria-label="Founder on YouTube"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href={founder.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition px-3 py-1.5 rounded-full border border-white/10 hover:border-accent/60 text-xs sm:text-sm font-sans"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
