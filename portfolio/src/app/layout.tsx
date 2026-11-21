import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";
import ThemeProvider from "../components/ThemeProvider";

export const metadata = {
  metadataBase: new URL( "https://www.ankitmall.co.in" ),
  title: {
    default: "Ankit Mall | Best MERN Stack & Next.js Full-Stack Developer",
    template: "%s | Ankit Mall",
  },
  description: "Ankit Mall is a Best MERN Stack Developer in Gorakhpur and freelance React & Next.js developer serving clients across India.",
  keywords: [ "Ankit Mall", "Best MERN Stack Developer in Gorakhpur", "Full-Stack Web Developer in India", "Next.js Developer India", "Freelance React & Next.js Developer", "Custom Web Application Development", "MERN Stack Freelancer", "Frontend & Backend Developer Gorakhpur", "SEO-Optimized Next.js Websites", "E-commerce & SaaS MVP Developer", "Node.js & MongoDB Developer", "Website Developer Near Me Gorakhpur Uttar Pradesh" ],
  authors: [ { name: "Ankit Mall", url: "https://www.ankitmall.co.in" } ],
  creator: "Ankit Mall",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ankitmall.co.in",
    siteName: "Ankit Mall",
    title: "Ankit Mall | MERN Stack & Next.js Developer in Gorakhpur",
    description: "Full-stack web developer in Gorakhpur building React, Next.js, MERN Stack and SEO-focused digital products.",
    images: [ { url: "/ankit-mall.jpeg", width: 800, height: 1000, alt: "Ankit Mall - Best MERN Stack and Next.js Full-Stack Developer in Gorakhpur, India" } ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Mall | MERN Stack & Next.js Developer",
    description: "Freelance React & Next.js development and custom web applications.",
    images: [ "/ankit-mall.jpeg" ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.ankitmall.co.in/#person",
      name: "Ankit Mall",
      url: "https://www.ankitmall.co.in",
      image: "https://www.ankitmall.co.in/ankit-mall.jpeg",
      jobTitle: "Full-Stack MERN & Next.js Web Developer",
      email: "mailto:ankitmall932@gmail.com",
      worksFor: { "@type": "Organization", name: "Acyuta Digital Studio", url: "https://acyutadigitalstudio.website" },
      address: { "@type": "PostalAddress", addressLocality: "Gorakhpur", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      knowsAbout: [ "MERN Stack", "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS", "Full-Stack Web Development", "Technical SEO" ],
      sameAs: [ "https://github.com/ankitmall932", "https://www.linkedin.com/in/ankit-mall/", "https://www.instagram.com/ankit_mall_932" ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.ankitmall.co.in/#business",
      name: "Ankit Mall Web Development",
      url: "https://www.ankitmall.co.in",
      image: "https://www.ankitmall.co.in/ankit-mall.jpeg",
      founder: { "@id": "https://www.ankitmall.co.in/#person" },
      areaServed: [ "Gorakhpur", "Uttar Pradesh", "India" ],
      address: { "@type": "PostalAddress", addressLocality: "Gorakhpur", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      email: "mailto:ankitmall932@gmail.com",
    },
  ],
};

export default function RootLayout ( { children }: { children: ReactNode; } )
{
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } } />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen">
            <Navbar />
            <main className="site-main text-[#f4f0e8]">{ children }</main>
            <div className="border-t border-white/10 bg-[#171615] px-[clamp(1rem,5vw,5rem)] text-[#a9a29a]">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
