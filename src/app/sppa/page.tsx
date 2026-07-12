import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SPPAForm from "@/components/sections/SPPAForm";

const BASE_URL = "https://asuransijogja.biz.id";

export const metadata: Metadata = {
  title: "Form Permintaan Penawaran Asuransi (SPPA) | Asuransi Jogja",
  description:
    "Ajukan permintaan penawaran asuransi kerugian secara online. Kendaraan, properti, engineering, kargo, liability, surety bond. Gratis, cepat, tanpa tekanan.",
  alternates: { canonical: `${BASE_URL}/sppa` },
  openGraph: {
    title: "Form Permintaan Penawaran Asuransi (SPPA) – Asuransi Jogja",
    description:
      "Isi form SPPA online untuk mendapatkan penawaran premi yang akurat. Konsultasi gratis dari praktisi asuransi kerugian terpercaya di Yogyakarta.",
    url: `${BASE_URL}/sppa`,
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
  },
};

const schemaSPPA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/sppa`,
  "name": "Form Permintaan Penawaran Asuransi (SPPA)",
  "description":
    "Formulir SPPA online untuk pengajuan penawaran asuransi kerugian: kendaraan, properti, engineering, kargo, liability, dan surety bond.",
  "url": `${BASE_URL}/sppa`,
  "isPartOf": { "@id": `${BASE_URL}/#website` },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Beranda", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Form Penawaran (SPPA)", "item": `${BASE_URL}/sppa` },
    ],
  },
};

export default function SPPAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSPPA) }}
      />
      <Header />
      <main className="pt-[68px]">
        <SPPAForm />
      </main>
      <Footer />
    </>
  );
}

