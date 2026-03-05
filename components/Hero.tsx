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
      <div className="relative z-10 px-4 max-w-3xl mx-auto py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider text-white mb-4">
          The Him Kla Studio
        </h1>
        <p className="text-lg sm:text-xl font-semibold text-accent mb-3">
          Yamunanagar&apos;s First Professional Acting Studio
        </p>
        <p className="text-white/95 text-base sm:text-lg mb-8 max-w-xl mx-auto">
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
    </section>
  );
}
