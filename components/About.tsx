import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-8 sm:mb-12 text-center md:text-left">
          About The Him Kla Studio
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div className="space-y-4 text-white/90 text-sm sm:text-base">
            <p>
              The Him Kla Studio is the first professional acting studio in Yamunanagar dedicated to developing talented actors. The studio focuses on practical acting techniques, camera performance, and stage confidence.
            </p>
            <p>
              Students learn real industry skills required for films, television, web series, and theatre performances.
            </p>
            <p className="text-accent font-medium">
              Our mission is to build confidence, creativity, and strong acting fundamentals for aspiring performers.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-dark-card">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="The Him Kla Studio - students and mentor"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
