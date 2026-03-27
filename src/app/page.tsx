import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Produk from "@/components/sections/Produk";
import Kalkulator from "@/components/sections/Kalkulator";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Why from "@/components/sections/Why";
import About from "@/components/sections/About";
import Testimonial from "@/components/sections/Testimonial";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Asuransi Jogja – Konsultan Asuransi Kerugian Terpercaya di Yogyakarta",
  description: "Konsultan asuransi kerugian independen di Yogyakarta. Kendaraan, properti, engineering, kargo, liability, surety bond. Konsultasi GRATIS, 10+ tahun pengalaman.",
  alternates: { canonical: "https://asuransijogja.biz.id" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Apakah konsultasi asuransi di sini berbayar?", "acceptedAnswer": { "@type": "Answer", "text": "Tidak, konsultasi sepenuhnya gratis. Kami menganalisis kebutuhan dan profil risiko Anda, lalu merekomendasikan produk yang paling sesuai — tanpa biaya apapun dan tanpa tekanan untuk membeli." } },
    { "@type": "Question", "name": "Apa perbedaan asuransi All Risk dan TLO untuk mobil?", "acceptedAnswer": { "@type": "Answer", "text": "All Risk (Comprehensive) menanggung kerusakan ringan hingga berat, kecelakaan, dan kehilangan kendaraan. TLO hanya menanggung kerugian jika kendaraan hilang dicuri atau rusak parah di atas 75% dari nilai kendaraan." } },
    { "@type": "Question", "name": "Asuransi kerugian apa saja yang tersedia?", "acceptedAnswer": { "@type": "Answer", "text": "Kami melayani hampir seluruh lini asuransi kerugian: kendaraan bermotor, properti (kebakaran, PAR, banjir dan gempa), engineering (CAR, EAR, machinery breakdown), kargo, liability, dan surety bond." } },
    { "@type": "Question", "name": "Berapa lama proses penerbitan polis?", "acceptedAnswer": { "@type": "Answer", "text": "Untuk produk standar seperti asuransi kendaraan dan kebakaran rumah tinggal, polis dapat terbit dalam 1–2 hari kerja. Untuk produk korporasi seperti engineering insurance atau liability, prosesnya umumnya 3–7 hari kerja." } },
    { "@type": "Question", "name": "Bagaimana jika saya perlu mengajukan klaim?", "acceptedAnswer": { "@type": "Answer", "text": "Segera hubungi kami via WhatsApp setelah kejadian. Kami akan memandu langkah-langkah yang perlu dilakukan dan mendampingi seluruh proses klaim hingga dana ganti rugi cair." } },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Header />
      <main>
        <Hero />
        <Trust />
        <Produk />
        <Kalkulator />
        <ProblemSolution />
        <Why />
        <About />
        <Testimonial />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
