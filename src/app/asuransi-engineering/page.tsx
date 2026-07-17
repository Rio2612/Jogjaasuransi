// app/asuransi-engineering/page.tsx
// ─── SERVER COMPONENT ────────────────────────────────────────────────────────
// Tugas: export metadata + inject schema JSON-LD + render ClientPage
// Tidak ada useState / useEffect di sini → tidak perlu "use client"

import type { Metadata } from "next";
import ClientPage from "./ClientPage";

// ─── METADATA (SEO) ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Asuransi Engineering Jogja – CAR, EAR, Machinery Breakdown | Asuransi Jogja",
  description:
    "Layanan asuransi engineering di Yogyakarta: Contractor All Risk (CAR), Erection All Risk (EAR), dan Machinery Breakdown. Melindungi proyek konstruksi, instalasi mesin, dan peralatan industri di DIY. Konsultasi gratis, polis terbit 1–3 hari.",
  keywords:
    "asuransi engineering jogja, CAR EAR yogyakarta, asuransi konstruksi DIY, contractor all risk jogja, erection all risk yogyakarta, machinery breakdown jogja, asuransi proyek pemerintah DIY",
  alternates: {
    canonical: "https://asuransijogja.biz.id/asuransi-engineering",
  },
  openGraph: {
    title: "Asuransi Engineering Jogja – CAR, EAR, Machinery Breakdown",
    description:
      "Proteksi menyeluruh untuk proyek konstruksi, instalasi mesin, dan peralatan industri di Yogyakarta. Konsultasi gratis, polis terbit 1–3 hari.",
    url: "https://asuransijogja.biz.id/asuransi-engineering",
    type: "website",
    images: [
      {
        url: "https://asuransijogja.biz.id/og-engineering.png",
        width: 1200,
        height: 630,
        alt: "Asuransi Engineering Yogyakarta",
      },
    ],
  },
};

// ─── SCHEMA JSON-LD ──────────────────────────────────────────────────────────
const schemaEngineering = {
  "@context": "https://schema.org",
  "@graph": [
    // --- BreadcrumbList ---
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: "https://asuransijogja.biz.id",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Asuransi Engineering",
          item: "https://asuransijogja.biz.id/asuransi-engineering",
        },
      ],
    },

    // --- Service (hub) ---
    {
      "@type": "Service",
      "@id": "https://asuransijogja.biz.id/asuransi-engineering/#service",
      name: "Asuransi Engineering Yogyakarta",
      description:
        "Layanan konsultasi dan penerbitan polis asuransi engineering di Yogyakarta, mencakup Contractor All Risk (CAR), Erection All Risk (EAR), dan Machinery Breakdown Insurance.",
      provider: {
        "@type": "InsuranceAgency",
        "@id": "https://asuransijogja.biz.id/#organization",
        name: "Asuransi Jogja",
        telephone: "+628131556592",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Yogyakarta",
          addressRegion: "Daerah Istimewa Yogyakarta",
          addressCountry: "ID",
        },
      },
      areaServed: [
        { "@type": "City", name: "Yogyakarta" },
        { "@type": "AdministrativeArea", name: "Daerah Istimewa Yogyakarta" },
        { "@type": "City", name: "Sleman" },
        { "@type": "City", name: "Bantul" },
        { "@type": "City", name: "Kulon Progo" },
        { "@type": "City", name: "Gunung Kidul" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Produk Asuransi Engineering",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Contractor All Risk (CAR)",
              url: "https://asuransijogja.biz.id/asuransi-engineering/contractor-all-risk",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Erection All Risk (EAR)",
              url: "https://asuransijogja.biz.id/asuransi-engineering/erection-all-risk",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Machinery Breakdown Insurance",
              url: "https://asuransijogja.biz.id/asuransi-engineering/machinery-breakdown",
            },
          },
        ],
      },
    },

    // --- FAQPage ---
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa itu asuransi engineering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Asuransi engineering adalah kelompok produk asuransi yang dirancang khusus untuk melindungi proyek konstruksi, pekerjaan instalasi mesin, dan peralatan industri dari risiko kerusakan fisik maupun tanggung jawab terhadap pihak ketiga. Di Indonesia, produk utamanya adalah Contractor All Risk (CAR), Erection All Risk (EAR), dan Machinery Breakdown.",
          },
        },
        {
          "@type": "Question",
          name: "Apa perbedaan CAR, EAR, dan Machinery Breakdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CAR melindungi pekerjaan konstruksi sipil (gedung, jalan, jembatan) selama masa pembangunan. EAR melindungi pekerjaan pemasangan mesin dan instalasi industri selama proses erection hingga commissioning. Machinery Breakdown melindungi mesin yang sudah beroperasi dari kerusakan mendadak akibat kegagalan mekanis, bukan bencana alam.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah asuransi CAR wajib untuk proyek pemerintah di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Berdasarkan Perpres 12/2021, kontraktor wajib menyertakan polis CAR sebagai syarat pencairan termin pertama. Proyek APBN dan APBD DIY umumnya mensyaratkan Certificate of Insurance (CoI) sebelum pekerjaan dimulai.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama polis engineering bisa diterbitkan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Polis CAR dan EAR untuk proyek standar dapat diterbitkan dalam 1–3 hari kerja setelah dokumen lengkap diterima. Untuk proyek di atas Rp 50 miliar atau dengan risiko khusus, proses underwriting bisa memakan waktu 3–7 hari kerja.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah Machinery Breakdown menanggung mesin yang rusak akibat gempa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tidak secara standar. Machinery Breakdown menanggung kerusakan akibat kegagalan mekanis internal — seperti korsleting, overpressure, atau kesalahan operasi. Kerusakan akibat gempa bumi, kebakaran, atau banjir ditanggung oleh polis terpisah (Property All Risk atau Industrial All Risk dengan perluasan gempa).",
          },
        },
      ],
    },
  ],
};

// ─── PAGE (SERVER COMPONENT) ─────────────────────────────────────────────────
export default function AsuransiEngineeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaEngineering) }}
      />
      <ClientPage />
    </>
  );
}
