import type { Metadata } from "next";
import { Inter, Oswald, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thehimklastudio.com"),
  title: {
    default: "The Him कLA Studio | Yamunanagar Acting Classes",
    template: "%s | The Him Kla Studio",
  },
  description:
    "The Him Kla Studio is Yamunanagar's first professional acting studio, offering practical training for TV, web series, films, and theatre with expert mentors.",
  keywords: [
    "acting classes Yamunanagar",
    "acting studio Yamunanagar",
    "acting school Haryana",
    "camera acting course",
    "kids acting classes",
    "The Him Kla Studio",
  ],
  openGraph: {
    type: "website",
    url: "https://thehimklastudio.com",
    title: "The Him Kla Studio | Yamunanagar's First Professional Acting Studio",
    description:
      "Join The Him Kla Studio to learn professional acting, camera confidence, and stage presence from experienced mentors in Yamunanagar.",
    siteName: "The Him Kla Studio",
    images: [
      {
        url: "/images/about_him_kla.avif",
        width: 1200,
        height: 630,
        alt: "The Him Kla Studio acting class",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Him Kla Studio | Yamunanagar Acting Classes",
    description:
      "Professional acting training for TV, web series, films, and theatre in Yamunanagar.",
    images: ["/images/about_him_kla.avif"],
  },
  alternates: {
    canonical: "https://thehimklastudio.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-dark text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
