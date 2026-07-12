// app/asuransi-engineering/machinery-breakdown/page.tsx
// ─── SERVER COMPONENT ────────────────────────────────────────────────────────
// Tugas: export metadata + inject schema JSON-LD + render ClientPage
// Tidak ada useState / useEffect di sini → tidak perlu "use client"

import type { Metadata } from "next";
import ClientPage from "./ClientPage";

// ─── METADATA (SEO) ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Asuransi Machinery Breakdown Jogja – Kerusakan Mesin Industri | Asuransi Jogja",
  description:
    "Asuransi Machinery Breakdown di Yogyakarta untuk mesin produksi, kompresor, genset, chiller, dan peralatan industri. Menanggung kerusakan mendadak dari dalam mesin — bukan hanya kebakaran. Estimasi premi 0,3–0,8% nilai mesin/tahun. Konsultasi gratis.",
  keywords:
    "machinery breakdown jogja, asuransi mesin rusak yogyakarta, asuransi kerusakan mesin jogja, machine breakdown insurance DIY, asuransi genset yogyakarta, asuransi mesin pabrik jogja, premi machinery breakdown, asuransi chiller yogyakarta",
  alternates: {
    canonical:
      "https://asuransijogja.biz.id/asuransi-engineering/machinery-breakdown",
  },
  openGraph: {
    title:
      "Asuransi Machinery Breakdown Jogja – Mesin Rusak, Bisnis Jalan Terus",
    description:
      "Proteksi mesin produksi, genset, chiller, dan kompresor dari kerusakan mendadak di Yogyakarta. Estimasi premi gratis, analisis kebutuhan tanpa biaya.",
    url: "https://asuransijogja.biz.id/asuransi-engineering/machinery-breakdown",
    type: "website",
    images: [
      {
        url: "https://asuransijogja.biz.id/og-mb.png",
        width: 1200,
        height: 630,
        alt: "Asuransi Machinery Breakdown Yogyakarta",
      },
    ],
  },
};

// ─── SCHEMA JSON-LD ──────────────────────────────────────────────────────────
const schemaMB = {
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Machinery Breakdown (MB)",
          item: "https://asuransijogja.biz.id/asuransi-engineering/machinery-breakdown",
        },
      ],
    },

    // --- Service ---
    {
      "@type": "Service",
      "@id":
        "https://asuransijogja.biz.id/asuransi-engineering/machinery-breakdown/#service",
      name: "Asuransi Machinery Breakdown Yogyakarta",
      alternateName: "Asuransi MB Jogja",
      description:
        "Layanan konsultasi dan penerbitan polis Machinery Breakdown Insurance di Yogyakarta. Menanggung kerusakan mendadak mesin produksi, genset, kompresor, chiller, dan peralatan industri akibat kegagalan internal — bukan hanya kebakaran.",
      provider: {
        "@type": "InsuranceAgency",
        "@id": "https://asuransijogja.biz.id/#organization",
        name: "Asuransi Jogja",
        telephone: "+6287781658231",
      },
      areaServed: [
        { "@type": "City", name: "Yogyakarta" },
        { "@type": "AdministrativeArea", name: "Daerah Istimewa Yogyakarta" },
        { "@type": "City", name: "Sleman" },
        { "@type": "City", name: "Bantul" },
        { "@type": "City", name: "Kulon Progo" },
      ],
      serviceType: "Machinery Breakdown Insurance",
      offers: {
        "@type": "Offer",
        description:
          "Estimasi premi MB 0,3–0,8% dari nilai mesin per tahun. Tersedia perluasan Business Interruption. Konsultasi gratis.",
        priceCurrency: "IDR",
        eligibleRegion: {
          "@type": "AdministrativeArea",
          name: "Daerah Istimewa Yogyakarta",
        },
      },
    },

    // --- FAQPage ---
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa premi asuransi Machinery Breakdown untuk mesin senilai Rp 500 juta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estimasi premi Machinery Breakdown untuk mesin Rp 500 juta berkisar Rp 1,5–4 juta per tahun (rate 0,3–0,8%). Rate dipengaruhi jenis mesin, usia mesin, kondisi perawatan, dan apakah termasuk perluasan Business Interruption. Hubungi kami untuk penawaran resmi.",
          },
        },
        {
          "@type": "Question",
          name: "Apa perbedaan Machinery Breakdown dengan asuransi kebakaran untuk mesin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Asuransi kebakaran hanya menanggung kerusakan mesin akibat kebakaran dari luar. Machinery Breakdown menanggung kerusakan dari dalam mesin itu sendiri — korsleting internal, bearing aus, piston pecah, overheat — yang tidak disebabkan kebakaran. Lebih dari 90% kerusakan mesin bukan akibat kebakaran.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah mesin yang sudah tua (di atas 10 tahun) bisa diasuransikan MB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bisa, namun perlu survei kondisi mesin terlebih dahulu. Beberapa perusahaan asuransi menetapkan batas usia mesin (biasanya 15–20 tahun) atau mengenakan loading premi untuk mesin yang lebih tua. Kami bantu carikan perusahaan asuransi yang mau menanggung mesin dengan kondisi Anda.",
          },
        },
        {
          "@type": "Question",
          name: "Apa itu perluasan Business Interruption (BI) dalam Machinery Breakdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Business Interruption (BI) adalah perluasan dari polis Machinery Breakdown yang menanggung kerugian finansial akibat berhentinya produksi saat mesin rusak — termasuk kehilangan laba, biaya tetap yang terus berjalan (gaji karyawan, sewa), dan biaya ekstra untuk mengejar keterlambatan produksi.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah genset cadangan bisa diasuransikan dengan Machinery Breakdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Genset, baik yang digunakan sebagai sumber listrik utama maupun cadangan, bisa diasuransikan dengan Machinery Breakdown. Genset adalah salah satu mesin yang paling sering mengalami kerusakan mendadak, terutama akibat kegagalan sistem pendingin, kerusakan alternator, atau masalah pada sistem bahan bakar.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah biaya spare part impor ditanggung dalam klaim MB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, termasuk biaya spare part impor, biaya jasa teknisi authorized, dan biaya pengiriman suku cadang yang diperlukan untuk perbaikan. Ini adalah salah satu keuntungan utama MB — justru untuk mesin dengan spare part mahal yang butuh import lead time panjang.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara mengajukan klaim Machinery Breakdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Segera hubungi praktisi (24–48 jam setelah mesin rusak). Jangan langsung perbaiki mesin sebelum dilaporkan. Dokumentasikan kerusakan dengan foto/video. Siapkan laporan teknisi dan estimasi biaya perbaikan. Kami mendampingi seluruh proses hingga klaim cair.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah ada manfaat pajak dari premi Machinery Breakdown untuk perusahaan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, premi asuransi Machinery Breakdown yang dibayar perusahaan umumnya dapat dibebankan sebagai biaya operasional (deductible expense) dalam perhitungan pajak penghasilan badan, sepanjang aset yang diasuransikan digunakan untuk kegiatan usaha. Konsultasikan dengan akuntan atau konsultan pajak Anda.",
          },
        },
      ],
    },

    // --- HowTo: Cara Klaim MB ---
    {
      "@type": "HowTo",
      name: "Cara Klaim Asuransi Machinery Breakdown",
      description:
        "Panduan langkah demi langkah mengajukan klaim asuransi Machinery Breakdown agar mesin cepat diperbaiki dan bisnis kembali berjalan.",
      totalTime: "P5D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Laporkan dalam 24–48 Jam",
          text: "Hubungi praktisi asuransi segera setelah mesin mengalami kerusakan mendadak. Jangan lakukan perbaikan sebelum mendapat persetujuan dari perusahaan asuransi.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Dokumentasi Kerusakan",
          text: "Ambil foto dan video komponen yang rusak. Catat gejala sebelum kerusakan, jam operasi mesin, dan kondisi terakhir pemeliharaan.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Laporan Teknisi",
          text: "Minta teknisi atau vendor mesin membuat laporan tertulis mengenai penyebab kerusakan dan estimasi biaya perbaikan.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Survei Loss Adjuster",
          text: "Loss adjuster perusahaan asuransi akan memeriksa kerusakan. Kami mendampingi untuk memastikan penilaian yang adil dan akurat.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Perbaikan & Pembayaran Klaim",
          text: "Setelah klaim disetujui, perbaikan dapat dilakukan. Biaya perbaikan atau penggantian suku cadang dibayar oleh asuransi dikurangi deductible.",
        },
      ],
    },
  ],
};

// ─── PAGE (SERVER COMPONENT) ─────────────────────────────────────────────────
export default function MachineryBreakdownPage() {
  return (
    <>
      {/* Inject schema JSON-LD — dilakukan di server, tidak butuh JS client */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMB) }}
      />

      {/* Client component yang berisi semua UI + kalkulator interaktif */}
      <ClientPage />
    </>
  );
}
