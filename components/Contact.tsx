const ADDRESS = "26, Vikas Nagar, Yamunanagar, Haryana";
const PHONE = "9897017702";
const EMAIL = "thehimklastudio@gmail.com";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=26+Vikas+Nagar+Yamunanagar+Haryana";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container-narrow">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white text-center mb-2 sm:mb-3">
          Contact Us
        </h2>
        <p className="font-tagline text-sm sm:text-base text-white/70 text-center mb-8 sm:mb-10 italic">
          Visit our studio or get in touch
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-dark-card rounded-2xl p-6 md:p-8 border border-white/5">
            <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-accent mb-4 sm:mb-6 tracking-tight">
              The Him कLA Studio
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex gap-3 items-start">
                <span className="text-accent shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-white/70">Address</span>
                  <span className="text-white">{ADDRESS}</span>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-white/70">Phone</span>
                  <a href={`tel:${PHONE}`} className="text-white hover:text-accent transition">{PHONE}</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-accent shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-white/70">Email</span>
                  <a href={`mailto:${EMAIL}`} className="text-white hover:text-accent transition">{EMAIL}</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative bg-dark-card rounded-2xl overflow-hidden border border-white/5 h-64 md:h-auto min-h-[256px]">
            <iframe
              title="The Him कLA Studio location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.5876562500003!2d77.255!3d30.129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzQ0LjQiTiA3N8KwMTUnMTguMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[256px] grayscale opacity-90"
            />
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 md:top-4 md:right-4 px-3 py-2 rounded-lg bg-dark/90 text-white text-sm font-medium hover:bg-accent transition"
            >
              Open in Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
