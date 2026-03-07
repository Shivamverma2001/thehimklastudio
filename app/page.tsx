import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import StudioMoments from "@/components/StudioMoments";
import Founder from "@/components/Founder";
import RegisterForm from "@/components/RegisterForm";
import Contact from "@/components/Contact";
import ConnectWithUs from "@/components/ConnectWithUs";
import StartYourActing from "@/components/StartYourActing";

export default function Home() {
  const { contact, social } = siteConfig;
  const telephone = contact.phone.startsWith("+") ? contact.phone : `+91-${contact.phone}`;
  return (
    <>
      <Script
        id="the-him-kla-studio-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://thehimklastudio.com/#studio",
              name: "The Him Kla Studio",
              url: "https://thehimklastudio.com",
              description: `The Him Kla Studio is ${contact.city}'s first professional acting studio, offering practical training for TV, web series, films, and theatre with expert mentors.`,
              telephone,
              email: contact.email,
              image: "https://thehimklastudio.com/images/about_him_kla.avif",
              logo: "https://thehimklastudio.com/images/about_him_kla.avif",
              address: {
                "@type": "PostalAddress",
                streetAddress: contact.address,
                addressLocality: contact.city,
                addressRegion: contact.region,
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.129,
                longitude: 77.255,
              },
              sameAs: [social.facebookUrl, social.instagramUrl, social.youtubeUrl].filter(Boolean),
              areaServed: {
                "@type": "City",
                name: contact.city,
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "Professional Acting Training",
                  category: "Acting classes",
                  url: "https://thehimklastudio.com/#courses",
                },
              ],
            },
            null,
            2
          ),
        }}
      />
      <Hero />
      <About />
      <Courses />
      <StudioMoments />
      <Founder />
      <RegisterForm />
      <Contact />
      <ConnectWithUs />
      <StartYourActing />
    </>
  );
}
