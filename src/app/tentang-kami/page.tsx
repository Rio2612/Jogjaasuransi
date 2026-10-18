import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

const URL = "https://asuransijogja.biz.id/tentang-kami";

export const metadata: Metadata = {
  title: "Tentang Kami – Profil & Karier Rio Mardiansyah, Praktisi Asuransi",
  description:
    "Kenali Rio Mardiansyah, praktisi asuransi kerugian independen di Yogyakarta dengan 8+ tahun pengalaman, dari Account Officer hingga Branch Manager. Lihat profil dan perjalanan kariernya.",
  keywords:
    "tentang asuransi jogja, profil praktisi asuransi, rio mardiansyah, praktisi asuransi yogyakarta, karier asuransi kerugian",
  alternates: { canonical: URL },
  openGraph: {
    title: "Tentang Kami – Rio Mardiansyah, Praktisi Asuransi Yogyakarta",
    description: "Profil dan perjalanan karier praktisi asuransi independen di Yogyakarta. 8+ tahun pengalaman.",
    url: URL,
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "profile",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Tentang Kami – Asuransi Jogja" }],
  },
};

const schemaAbout = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${URL}#aboutpage`,
  url: URL,
  name: "Tentang Kami – Asuransi Jogja",
  inLanguage: "id-ID",
  isPartOf: { "@id": "https://asuransijogja.biz.id/#website" },
  about: { "@id": "https://asuransijogja.biz.id/#organization" },
  mainEntity: {
    "@type": "Person",
    name: "Rio Mardiansyah",
    jobTitle: "Praktisi Asuransi",
    image: "https://asuransijogja.biz.id/rio-mardiansyah.jpg",
    sameAs: ["https://www.linkedin.com/in/riomardiansyah"],
  },
};

export default function TentangKamiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaAbout) }} />
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
