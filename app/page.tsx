import Script from "next/script";
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
              description:
                "The Him Kla Studio is Yamunanagar's first professional acting studio, offering practical training for TV, web series, films, and theatre with expert mentors.",
              telephone: "+91-9897017702",
              email: "thehimklastudio@gmail.com",
              image: "https://thehimklastudio.com/images/about_him_kla.avif",
              logo: "https://thehimklastudio.com/images/about_him_kla.avif",
              address: {
                "@type": "PostalAddress",
                streetAddress: "26, Vikas Nagar",
                addressLocality: "Yamunanagar",
                addressRegion: "Haryana",
                postalCode: "135001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.129,
                longitude: 77.255,
              },
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.youtube.com/",
              ],
              areaServed: {
                "@type": "City",
                name: "Yamunanagar",
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
