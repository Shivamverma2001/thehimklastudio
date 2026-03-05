import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/images/moment1.avif", alt: "Acting workshop moment", label: "Workshop Moment" },
  { src: "/images/moment2.avif", alt: "Studio session", label: "Studio Session" },
  { src: "/images/moment3.avif", alt: "Acting warm-up", label: "Workshop Moment" },
  { src: "/images/moment4.avif", alt: "Stage and curtains", label: "Stage Moment" },
  { src: "/images/moment5.avif", alt: "Spotlight on stage", label: "Performance" },
  { src: "/images/moment6.avif", alt: "Camera and equipment", label: "Behind the Scenes" },
];

export default function StudioMoments() {
  return (
    <section id="gallery" className="section-padding bg-dark">
      <div className="container-narrow">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white text-center mb-2 sm:mb-3">
          Studio Moments
        </h2>
        <p className="font-tagline text-sm sm:text-base text-white/70 text-center mb-8 sm:mb-12 italic">
          Behind the scenes of our acting workshops
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-dark-card cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              <span className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white font-medium text-sm sm:text-base translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
