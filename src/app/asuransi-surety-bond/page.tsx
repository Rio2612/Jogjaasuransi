// app/asuransi-surety-bond/page.tsx
// ─── SERVER COMPONENT ────────────────────────────────────────────────────────
// Tugas: export metadata + inject schema JSON-LD + render ClientPage
// Tidak ada useState / useEffect di sini → tidak perlu "use client"

import type { Metadata } from "next";
import ClientPage from "./ClientPage";

// ─── METADATA (SEO) ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Surety Bond Jogja – Jaminan Penawaran, Pelaksanaan, Uang Muka & Pemeliharaan | Asuransi Jogja",
  description:
    "Layanan surety bond di Yogyakarta untuk kontraktor tender pemerintah DIY: Jaminan Penawaran, Pelaksanaan, Uang Muka, dan Pemeliharaan. Proses 1–2 hari kerja, diterima LKPP, harga terjangkau. Konsultasi gratis.",
  keywords:
    "surety bond jogja, jaminan penawaran yogyakarta, jaminan pelaksanaan tender DIY, surety bond kontraktor pemerintah jogja, jaminan uang muka yogyakarta, jaminan pemeliharaan DIY, surety bond murah jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/asuransi-surety-bond",
  },
  openGraph: {
    title: "Surety Bond Jogja – Jaminan Penawaran, Pelaksanaan, Uang Muka & Pemeliharaan",
    description:
      "Surety bond untuk kontraktor di Yogyakarta. Diterima LKPP, proses 1–2 hari, premi terjangkau. Konsultasi gratis dengan konsultan berpengalaman 11+ tahun.",
    url: "https://asuransijogja.biz.id/asuransi-surety-bond",
    type: "website",
    images: [
      {
        url: "https://asuransijogja.biz.id/og-surety-bond.png",
        width: 1200,
        height: 630,
        alt: "Surety Bond Yogyakarta",
      },
    ],
  },
};

// ─── SCHEMA JSON-LD ──────────────────────────────────────────────────────────
const schemaSuretyBond = {
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
          name: "Surety Bond",
          item: "https://asuransijogja.biz.id/asuransi-surety-bond",
        },
      ],
    },

    // --- Service (hub) ---
    {
      "@type": "Service",
      "@id": "https://asuransijogja.biz.id/asuransi-surety-bond/#service",
      name: "Surety Bond Yogyakarta",
      description:
        "Layanan penerbitan surety bond di Yogyakarta untuk kontraktor tender pemerintah, mencakup Jaminan Penawaran, Jaminan Pelaksanaan, Jaminan Uang Muka, dan Jaminan Pemeliharaan sesuai Perpres 12/2021.",
      provider: {
        "@type": "InsuranceAgency",
        "@id": "https://asuransijogja.biz.id/#organization",
        name: "Asuransi Jogja",
        telephone: "+6287781658231",
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
        name: "Produk Surety Bond",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jaminan Penawaran (Bid Bond)",
              url: "https://asuransijogja.biz.id/asuransi-surety-bond/jaminan-penawaran",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jaminan Pelaksanaan (Performance Bond)",
              url: "https://asuransijogja.biz.id/asuransi-surety-bond/jaminan-pelaksanaan",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jaminan Uang Muka (Advance Payment Bond)",
              url: "https://asuransijogja.biz.id/asuransi-surety-bond/jaminan-uang-muka",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jaminan Pemeliharaan (Maintenance Bond)",
              url: "https://asuransijogja.biz.id/asuransi-surety-bond/jaminan-pemeliharan",
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
          name: "Apa itu surety bond dan apa bedanya dengan bank garansi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Surety bond adalah surat jaminan yang diterbitkan perusahaan asuransi untuk menjamin kewajiban kontraktor kepada pemilik proyek. Secara fungsi setara dengan bank garansi, namun prosesnya lebih cepat, persyaratan lebih ringan, dan premi umumnya lebih terjangkau. Berdasarkan Perpres 12/2021, surety bond dari perusahaan asuransi berizin OJK diterima setara bank garansi untuk semua pengadaan pemerintah.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama proses penerbitan surety bond di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jaminan Penawaran dan Jaminan Pelaksanaan umumnya dapat diterbitkan dalam 1–2 hari kerja setelah dokumen lengkap diterima. Jaminan Uang Muka dan Jaminan Pemeliharaan membutuhkan 1–3 hari kerja karena memerlukan verifikasi kontrak. Untuk kebutuhan mendesak, kami berupaya memproses di hari yang sama.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah surety bond dari asuransi diterima di semua tender pemerintah DIY?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Berdasarkan Perpres 16/2018 jo. Perpres 12/2021 dan PMK No. 45/PMK.06/2020, jaminan dari perusahaan asuransi yang terdaftar di OJK dan masuk daftar Menteri Keuangan diterima setara bank garansi di semua pengadaan pemerintah, termasuk proyek APBN, APBD DIY, dan APBD kabupaten/kota di Yogyakarta.",
          },
        },
        {
          "@type": "Question",
          name: "Apa konsekuensi jika jaminan dicairkan oleh PPK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jika jaminan dicairkan karena wanprestasi kontraktor, perusahaan asuransi membayar klaim kepada pemilik proyek (obligee). Selanjutnya, perusahaan asuransi memiliki hak regres — yaitu hak untuk menuntut kembali nilai yang telah dibayarkan kepada kontraktor (principal). Berbeda dengan asuransi kerugian, surety bond mengandung hak regres penuh.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah kontraktor baru (baru berdiri) bisa mendapatkan surety bond?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bisa, namun dengan batasan. Perusahaan asuransi umumnya menilai kapasitas kontraktor berdasarkan modal disetor, track record, dan kemampuan teknis. Kontraktor baru dengan modal memadai dan SIUJK yang valid tetap bisa mendapatkan surety bond, biasanya dengan nilai jaminan yang disesuaikan dengan kapasitas finansialnya.",
          },
        },
      ],
    },
  ],
};

// ─── PAGE (SERVER COMPONENT) ─────────────────────────────────────────────────
export default function SuretyBondPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaSuretyBond) }}
      />
      <ClientPage />
    </>
  );
}
