import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 max-w-3xl mx-auto py-16 sm:py-20">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-3 sm:mb-4">
          The Him <span className="text-accent">कLA</span> Studio
        </h1>
        <p className="font-tagline text-base sm:text-lg md:text-xl font-semibold text-accent mb-2 sm:mb-3 italic">
          Yamunanagar&apos;s First Professional Acting Studio
        </p>
        <p className="text-white/95 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto font-sans">
          Learn professional acting skills and prepare for TV shows, web series, films, and theatre with expert acting training.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="#register"
            className="px-8 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition min-h-[44px] inline-flex items-center justify-center"
          >
            Join Now
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition min-h-[44px] inline-flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Link
        href="#about"
        aria-label="Scroll down to see more"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/90 hover:text-accent transition-colors duration-300 group mb-6 sm:mb-8"
      >
        <span className="animate-bounce inline-block">
          <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </span>
      </Link>
    </section>
  );
}
