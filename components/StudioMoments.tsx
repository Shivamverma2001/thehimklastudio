import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=600&q=80", alt: "Acting workshop moment" },
  { src: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80", alt: "Studio session" },
  { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80", alt: "Workshop moment" },
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80", alt: "Stage and curtains" },
  { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", alt: "Spotlight on stage" },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80", alt: "Camera and equipment" },
];

export default function StudioMoments() {
  return (
    <section id="gallery" className="section-padding bg-dark">
      <div className="container-narrow">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white text-center mb-3">
          Studio Moments
        </h2>
        <p className="text-white/70 text-center mb-12">
          Behind the scenes of our acting workshops
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-dark-card">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
