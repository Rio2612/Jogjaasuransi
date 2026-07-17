// app/asuransi-engineering/erection-all-risk/page.tsx
// ─── SERVER COMPONENT ────────────────────────────────────────────────────────
// Tugas: export metadata + inject schema JSON-LD + render ClientPage
// Tidak ada useState / useEffect di sini → tidak perlu "use client"

import type { Metadata } from "next";
import ClientPage from "./ClientPage";

// ─── METADATA (SEO) ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Asuransi Erection All Risk (EAR) Jogja – Pemasangan Mesin & Struktur | Asuransi Jogja",
  description:
    "Asuransi Erection All Risk (EAR) di Yogyakarta untuk pemasangan mesin industri, struktur baja, panel listrik HV, dan instalasi peralatan berat. Estimasi premi 0,2–0,6% nilai kontrak. Commissioning & DSU cover. Konsultasi gratis.",
  keywords:
    "erection all risk jogja, asuransi EAR yogyakarta, asuransi pemasangan mesin jogja, asuransi struktur baja yogyakarta, erection insurance DIY, asuransi instalasi industri jogja, premi EAR yogyakarta, commissioning insurance jogja",
  alternates: {
    canonical:
      "https://asuransijogja.biz.id/asuransi-engineering/erection-all-risk",
  },
  openGraph: {
    title:
      "Asuransi Erection All Risk (EAR) Jogja – Mesin & Struktur Terlindungi",
    description:
      "Proteksi pemasangan mesin industri, struktur baja, dan instalasi di Yogyakarta. Mencakup testing & commissioning. Estimasi premi gratis.",
    url: "https://asuransijogja.biz.id/asuransi-engineering/erection-all-risk",
    type: "website",
    images: [
      {
        url: "https://asuransijogja.biz.id/og-ear.png",
        width: 1200,
        height: 630,
        alt: "Asuransi Erection All Risk Yogyakarta",
      },
    ],
  },
};

// ─── SCHEMA JSON-LD ──────────────────────────────────────────────────────────
const schemaEAR = {
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
          name: "Erection All Risk (EAR)",
          item: "https://asuransijogja.biz.id/asuransi-engineering/erection-all-risk",
        },
      ],
    },

    // --- Service ---
    {
      "@type": "Service",
      "@id":
        "https://asuransijogja.biz.id/asuransi-engineering/erection-all-risk/#service",
      name: "Asuransi Erection All Risk (EAR) Yogyakarta",
      alternateName: "Asuransi EAR Jogja",
      description:
        "Layanan konsultasi dan penerbitan polis Erection All Risk (EAR) di Yogyakarta untuk proyek pemasangan mesin industri, struktur baja, panel listrik HV/LV, sistem HVAC, tangki, dan pressure vessel. Mencakup fase erection hingga testing & commissioning.",
      provider: {
        "@type": "InsuranceAgency",
        "@id": "https://asuransijogja.biz.id/#organization",
        name: "Asuransi Jogja",
        telephone: "+628131556592",
      },
      areaServed: [
        { "@type": "City", name: "Yogyakarta" },
        { "@type": "AdministrativeArea", name: "Daerah Istimewa Yogyakarta" },
        { "@type": "City", name: "Sleman" },
        { "@type": "City", name: "Bantul" },
        { "@type": "City", name: "Kulon Progo" },
      ],
      serviceType: "Erection All Risk Insurance",
      offers: {
        "@type": "Offer",
        description:
          "Estimasi premi EAR 0,2–0,6% dari nilai instalasi. Tersedia perluasan DSU/ALOP. Konsultasi gratis.",
        priceCurrency: "IDR",
        eligibleRegion: {
          "@type": "AdministrativeArea",
          name: "Daerah Istimewa Yogyakarta",
        },
      },
    },

    // --- HowTo: Cara Klaim EAR ---
    {
      "@type": "HowTo",
      name: "Cara Klaim Asuransi EAR (Erection All Risk) Jika Terjadi Insiden",
      description:
        "Langkah-langkah mengajukan klaim asuransi Erection All Risk agar proses klaim berjalan lancar dan dana cair lebih cepat.",
      totalTime: "P7D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Laporkan Segera (24–48 Jam)",
          text: "Hubungi praktisi via WhatsApp begitu insiden terjadi selama proses erection atau commissioning. Jangan lanjutkan pekerjaan di area yang rusak sebelum dilaporkan.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Amankan Bukti & Dokumentasi",
          text: "Ambil foto dan video kerusakan komponen dari berbagai sudut. Simpan log harian proyek yang mencatat kondisi sebelum dan saat insiden terjadi.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Hentikan Kerusakan Lanjutan",
          text: "Lakukan tindakan darurat yang wajar untuk mencegah kerusakan lebih lanjut. Biaya pengamanan darurat umumnya bisa diklaim juga.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Pengisian Form Klaim & Dokumen",
          text: "Siapkan form klaim, estimasi biaya perbaikan dari vendor resmi, dan dokumen teknis yang diperlukan loss adjuster.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Survei & Persetujuan Klaim",
          text: "Loss adjuster survei kerusakan bersama teknisi. Praktisi mendampingi untuk memastikan nilai klaim dinilai secara akurat dan adil.",
        },
      ],
    },

    // --- FAQPage ---
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa estimasi premi EAR untuk pemasangan mesin senilai Rp 2 miliar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estimasi premi EAR untuk instalasi senilai Rp 2 miliar berkisar Rp 4–12 juta (rate 0,2–0,6%), tergantung jenis mesin, kompleksitas pemasangan, durasi erection, dan apakah termasuk testing & commissioning.",
          },
        },
        {
          "@type": "Question",
          name: "Apa itu cold commissioning dan hot commissioning dalam EAR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cold commissioning adalah pengujian instalasi tanpa beban operasional penuh — misalnya mengecek sambungan listrik dan sistem kontrol. Hot commissioning adalah pengujian dengan beban penuh (produksi percobaan). Keduanya adalah fase paling kritis dan tercakup dalam EAR.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah polis EAR mencakup kerusakan kargo saat pengiriman ke lokasi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EAR standar mencakup material yang sudah tiba di lokasi proyek. Untuk kerusakan selama pengiriman dari supplier ke lokasi, diperlukan polis Marine Cargo atau Inland Transit yang terpisah.",
          },
        },
        {
          "@type": "Question",
          name: "Apa perbedaan EAR dan Machinery Breakdown untuk mesin yang sama?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EAR berlaku selama fase pemasangan hingga serah terima (erection & commissioning). Setelah mesin beroperasi normal, perlindungannya beralih ke Machinery Breakdown Insurance. Kami sarankan membeli keduanya untuk proteksi berkelanjutan.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah ada produk yang menanggung kerugian akibat keterlambatan proyek EAR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, ada produk Delay in Start-Up (DSU) atau Advance Loss of Profits (ALOP) sebagai endorsement dari EAR. DSU menanggung kerugian finansial akibat keterlambatan mulainya operasi — misalnya hilangnya pendapatan karena pabrik belum bisa berproduksi.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana penanganan klaim EAR jika mesin jatuh saat proses lifting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Segera hentikan aktivitas erection di area tersebut dan laporkan dalam 24–48 jam. Dokumentasikan kerusakan. Loss adjuster akan datang survei. Polis EAR menanggung biaya perbaikan atau penggantian komponen yang rusak, dikurangi deductible yang berlaku.",
          },
        },
        {
          "@type": "Question",
          name: "Bisakah satu polis EAR menanggung beberapa paket mesin sekaligus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Polis EAR bisa dibuat dengan Schedule of Insurance yang mencantumkan beberapa item mesin atau instalasi sekaligus dengan nilai pertanggungan per item. Lebih efisien secara premi dibanding polis terpisah per item.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah EAR wajib untuk proyek instalasi di kawasan industri DIY?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Untuk proyek EPC yang melibatkan pemasangan mesin atau instalasi listrik bertegangan tinggi di kawasan industri, EAR sangat dianjurkan. Dalam banyak kontrak dengan BUMN atau perusahaan multinasional sudah menjadi persyaratan wajib.",
          },
        },
      ],
    },
  ],
};

// ─── PAGE (SERVER COMPONENT) ─────────────────────────────────────────────────
export default function ErectionAllRiskPage() {
  return (
    <>
      {/* Inject schema JSON-LD — dilakukan di server, tidak butuh JS client */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaEAR) }}
      />

      {/* Client component yang berisi semua UI + kalkulator interaktif */}
      <ClientPage />
    </>
  );
}
