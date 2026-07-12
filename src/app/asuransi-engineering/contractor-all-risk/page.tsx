// app/asuransi-engineering/contractor-all-risk/page.tsx
// ─── SERVER COMPONENT ────────────────────────────────────────────────────────
// Tugas: export metadata + inject schema JSON-LD + render ClientPage
// Tidak ada useState / useEffect di sini → tidak perlu "use client"

import type { Metadata } from "next";
import ClientPage from "./ClientPage";

// ─── METADATA (SEO) ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Asuransi Contractor All Risk (CAR) Jogja – Proyek Konstruksi DIY | Asuransi Jogja",
  description:
    "Asuransi Contractor All Risk (CAR) di Yogyakarta untuk proyek gedung, hotel, kampus, jalan, dan infrastruktur. Estimasi premi 0,15–0,5% nilai kontrak. Wajib tender pemerintah DIY, polis terbit 1–3 hari. Konsultasi gratis.",
  keywords:
    "contractor all risk jogja, asuransi CAR yogyakarta, asuransi konstruksi jogja, premi CAR proyek gedung yogyakarta, asuransi kontraktor DIY, CAR pemerintah yogyakarta, kalkulator premi CAR jogja",
  alternates: {
    canonical:
      "https://asuransijogja.biz.id/asuransi-engineering/contractor-all-risk",
  },
  openGraph: {
    title: "Asuransi Contractor All Risk (CAR) Jogja – Proyek Konstruksi DIY",
    description:
      "Proteksi proyek konstruksi di Yogyakarta: gedung, jalan, kampus, hotel. Estimasi premi gratis, polis terbit 1–3 hari. Wajib tender pemerintah DIY.",
    url: "https://asuransijogja.biz.id/asuransi-engineering/contractor-all-risk",
    type: "website",
    images: [
      {
        url: "https://asuransijogja.biz.id/og-car.png",
        width: 1200,
        height: 630,
        alt: "Asuransi Contractor All Risk Yogyakarta",
      },
    ],
  },
};

// ─── SCHEMA JSON-LD ──────────────────────────────────────────────────────────
const schemaCAR = {
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
          name: "Contractor All Risk (CAR)",
          item: "https://asuransijogja.biz.id/asuransi-engineering/contractor-all-risk",
        },
      ],
    },

    // --- Service ---
    {
      "@type": "Service",
      "@id":
        "https://asuransijogja.biz.id/asuransi-engineering/contractor-all-risk/#service",
      name: "Asuransi Contractor All Risk (CAR) Yogyakarta",
      alternateName: "Asuransi CAR Jogja",
      description:
        "Layanan konsultasi dan penerbitan polis Contractor All Risk (CAR) di Yogyakarta. Melindungi proyek konstruksi gedung, jalan, jembatan, dan infrastruktur dari kerusakan fisik (Section I) dan tanggung jawab pihak ketiga (Section II).",
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
        { "@type": "City", name: "Gunung Kidul" },
      ],
      serviceType: "Contractor All Risk Insurance",
      offers: {
        "@type": "Offer",
        description:
          "Estimasi premi CAR 0,15–0,5% dari nilai kontrak. Konsultasi gratis.",
        priceCurrency: "IDR",
        eligibleRegion: {
          "@type": "AdministrativeArea",
          name: "Daerah Istimewa Yogyakarta",
        },
      },
    },

    // --- HowTo: Cara Klaim CAR ---
    {
      "@type": "HowTo",
      name: "Cara Klaim Asuransi CAR (Contractor All Risk)",
      description:
        "Langkah-langkah mengajukan klaim asuransi Contractor All Risk agar dana ganti rugi cair lebih cepat.",
      totalTime: "P7D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Laporkan Segera (24–48 Jam)",
          text: "Hubungi praktisi asuransi via WhatsApp begitu insiden terjadi. Jangan perbaiki kerusakan sebelum dilaporkan — ini syarat klaim yang sering menyebabkan klaim ditolak.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Dokumentasi Kerusakan",
          text: "Ambil foto dan video kondisi kerusakan dari berbagai sudut. Catat tanggal, jam, dan kondisi cuaca saat kejadian. Simpan semua bukti yang relevan.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Pengisian Form Klaim",
          text: "Isi formulir klaim dengan benar. Lengkapi dengan laporan kejadian, estimasi biaya perbaikan dari kontraktor, dan dokumen pendukung lainnya.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Survei oleh Loss Adjuster",
          text: "Perusahaan asuransi mengirim loss adjuster untuk survei kerusakan. Praktisi mendampingi untuk memastikan klaim dinilai secara adil.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Persetujuan & Pembayaran Klaim",
          text: "Setelah klaim disetujui, dana ganti rugi ditransfer ke rekening tertanggung dikurangi deductible yang berlaku dalam polis.",
        },
      ],
    },

    // --- FAQPage ---
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa premi CAR untuk proyek senilai Rp 500 juta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estimasi premi CAR untuk proyek Rp 500 juta berkisar Rp 750 ribu – Rp 2,5 juta per tahun (rate 0,15–0,5%). Rate dipengaruhi oleh jenis pekerjaan (sipil, MEP, atau infrastruktur), lokasi proyek, limit TPL yang diambil, dan masa pemeliharaan. Hubungi kami untuk penawaran resmi.",
          },
        },
        {
          "@type": "Question",
          name: "Apa perbedaan nilai kontrak dan nilai pertanggungan dalam CAR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nilai kontrak adalah nilai pekerjaan dalam kontrak dengan owner. Nilai pertanggungan (sum insured) dalam CAR umumnya sama atau lebih besar dari nilai kontrak karena harus mencakup material, upah, overhead, dan profit kontraktor.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah alat berat sewa tercakup dalam CAR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tergantung klausul polis. Secara standar, Section I CAR menanggung plant & equipment milik kontraktor. Untuk alat berat sewa, perlu endorsement khusus atau polis terpisah (Contractor's Plant & Equipment/CPE).",
          },
        },
        {
          "@type": "Question",
          name: "Apakah asuransi CAR wajib untuk proyek pemerintah DIY?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Berdasarkan ketentuan kontrak pengadaan barang/jasa pemerintah (Perpres 12/2021), kontraktor wajib menyertakan polis CAR sebagai syarat pencairan termin. Proyek APBN dan APBD DIY umumnya mensyaratkan Certificate of Insurance sebelum pekerjaan dimulai.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama periode pemeliharaan (maintenance period) dalam CAR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Periode pemeliharaan dalam CAR umumnya 12 bulan setelah serah terima proyek (Provisional Handover). Selama periode ini, kerusakan akibat pekerjaan konstruksi yang dilakukan sebelumnya masih ditanggung.",
          },
        },
        {
          "@type": "Question",
          name: "Apa itu Principal Clause dalam polis CAR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Principal Clause adalah endorsement yang memperluas perlindungan CAR sehingga juga melindungi kepentingan pemilik proyek (owner/bouwheer) selain kontraktor. Ini sering disyaratkan dalam kontrak pemerintah dan proyek swasta besar.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara klaim CAR jika terjadi kerusakan akibat banjir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Segera hubungi praktisi (24–48 jam setelah kejadian). Jangan bersihkan kerusakan sebelum dilaporkan. Ambil dokumentasi foto/video. Praktisi akan memandu pengisian form klaim, koordinasi dengan loss adjuster, dan pendampingan hingga klaim cair.",
          },
        },
        {
          "@type": "Question",
          name: "Bisakah satu polis CAR menanggung beberapa proyek sekaligus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ada produk Annual CAR atau Open Cover CAR yang bisa menanggung semua proyek dalam satu periode (biasanya 1 tahun) dengan satu polis. Ini sangat efisien untuk kontraktor yang mengerjakan banyak proyek dalam setahun.",
          },
        },
      ],
    },
  ],
};

// ─── PAGE (SERVER COMPONENT) ─────────────────────────────────────────────────
export default function ContractorAllRiskPage() {
  return (
    <>
      {/* Inject schema JSON-LD — dilakukan di server, tidak butuh JS client */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCAR) }}
      />

      {/* Client component yang berisi semua UI + kalkulator interaktif */}
      <ClientPage />
    </>
  );
}
