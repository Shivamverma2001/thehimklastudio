import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="section-padding bg-dark">
      <div className="container-narrow">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white text-center mb-8 sm:mb-12">
          Meet the Founder
        </h2>
        <div className="bg-dark-card rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-center max-w-4xl mx-auto">
          <div className="relative shrink-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-accent/80 ring-offset-2 sm:ring-offset-4 ring-offset-dark-card">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Shivam Verma - Founder"
                fill
                className="object-cover"
              />
            </div>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase">
              Founder
            </span>
          </div>
          <div className="text-center md:text-left space-y-3 sm:space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-accent tracking-tight">Shivam Verma</h3>
            <p className="font-sans text-white/90 text-xs sm:text-sm leading-relaxed">
              Himanshu Verma is an actor, performer, and creative mentor with experience in drama, acting, dance, and digital content creation. With a strong passion for storytelling and performance, he founded The Him कLA Studio to provide professional acting training to aspiring actors in Yamunanagar.
            </p>
            <p className="font-tagline text-white/90 text-xs sm:text-sm italic flex gap-2">
              <span className="text-accent text-2xl font-serif">&ldquo;</span>
              His vision is to help students develop real confidence, stage presence, and camera performance skills required for the entertainment industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
