import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=600&q=80", alt: "Acting workshop moment", label: "Workshop Moment" },
  { src: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80", alt: "Studio session", label: "Studio Session" },
  { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80", alt: "Workshop moment", label: "Workshop Moment" },
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80", alt: "Stage and curtains", label: "Stage Moment" },
  { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", alt: "Spotlight on stage", label: "Performance" },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80", alt: "Camera and equipment", label: "Behind the Scenes" },
];

export default function StudioMoments() {
  return (
    <section id="gallery" className="section-padding bg-dark">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white text-center mb-2 sm:mb-3">
          Studio Moments
        </h2>
        <p className="text-sm sm:text-base text-white/70 text-center mb-8 sm:mb-12">
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
