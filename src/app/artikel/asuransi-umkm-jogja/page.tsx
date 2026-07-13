// app/artikel/asuransi-umkm-jogja/page.tsx
// TARGET KEYWORD: "asuransi UMKM Jogja", "asuransi usaha kecil menengah Yogyakarta"
// INTENT: Informational + Commercial — pelaku UMKM yang baru sadar butuh proteksi, belum tahu mulai dari mana
// SILO: Hub lintas klaster — Properti, Kargo, Liability, Kendaraan

import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi untuk UMKM di Jogja – Panduan Lengkap Pelaku Usaha",
  description:
    "Panduan lengkap asuransi untuk UMKM di Yogyakarta: asuransi toko, gudang, kargo pengiriman, kendaraan operasional, dan liability. Mulai dari Rp 300 ribu per tahun. Cocok untuk warung, toko, konveksi, katering, dan usaha rumahan.",
  keywords:
    "asuransi UMKM jogja, asuransi usaha kecil yogyakarta, asuransi toko jogja, asuransi gudang yogyakarta, asuransi pengiriman barang UMKM, proteksi usaha kecil DIY, asuransi konveksi jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-umkm-jogja",
  },
  openGraph: {
    title: "Asuransi untuk UMKM di Jogja – Panduan Lengkap Pelaku Usaha",
    description:
      "Jenis asuransi apa yang dibutuhkan UMKM di Yogyakarta? Dari asuransi toko hingga kargo pengiriman — panduan praktis dengan estimasi biaya.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-umkm-jogja",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi untuk UMKM di Jogja – Panduan Lengkap Pelaku Usaha" }],
  },
};

const schemaArtikel = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransijogja.biz.id" },
        { "@type": "ListItem", position: 2, name: "Artikel", item: "https://asuransijogja.biz.id/artikel" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Asuransi untuk UMKM di Jogja",
          item: "https://asuransijogja.biz.id/artikel/asuransi-umkm-jogja",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Asuransi untuk UMKM di Jogja – Panduan Lengkap Pelaku Usaha",
      description:
        "Panduan lengkap jenis asuransi yang dibutuhkan UMKM di Yogyakarta, estimasi biaya, dan cara memilih yang sesuai anggaran.",
      author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi" },
      publisher: {
        "@type": "Organization",
        name: "Asuransi Jogja",
        url: "https://asuransijogja.biz.id",
      },
      datePublished: "2025-04-10",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Asuransi apa yang paling dibutuhkan UMKM di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prioritas pertama adalah asuransi kebakaran untuk tempat usaha — toko, gudang, atau rumah produksi. Prioritas kedua adalah asuransi kargo jika UMKM mengirimkan produk ke luar kota. Kendaraan operasional juga perlu diasuransikan. Untuk UMKM yang melayani pelanggan langsung, Public Liability melindungi dari tuntutan jika pelanggan mengalami cedera atau kerugian di tempat usaha.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa biaya asuransi untuk toko atau warung di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Asuransi kebakaran untuk toko dengan nilai bangunan dan isi Rp 300 juta di Yogyakarta mulai dari Rp 300–900 ribu per tahun. Biaya naik sesuai nilai pertanggungan dan perluasan yang dipilih (banjir, gempa). Ini setara kurang dari Rp 100 ribu per bulan — jauh lebih terjangkau dibanding kerugian yang bisa terjadi.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah UMKM yang kirim barang lewat ekspedisi perlu asuransi kargo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, sangat dianjurkan. Asuransi standar ekspedisi umumnya sangat terbatas dan tidak menanggung semua jenis kerusakan. Asuransi kargo khusus UMKM menanggung kerusakan, kehilangan, dan keterlambatan kritis selama pengiriman — dengan premi mulai dari Rp 50–150 ribu per pengiriman tergantung nilai dan tujuan.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const jenisProdukUMKM = [
  {
    no: "01",
    icon: "🏪",
    judul: "Asuransi Kebakaran / Properti",
    subJudul: "Untuk toko, gudang, rumah produksi",
    deskripsi:
      "Melindungi bangunan tempat usaha dan seluruh isinya (stok barang, peralatan, mesin) dari risiko kebakaran, petir, ledakan, dan asap. Dengan perluasan, bisa mencakup banjir dan gempa bumi — sangat relevan untuk DIY.",
    cocokUntuk: ["Toko retail dan warung", "Gudang penyimpanan stok", "Workshop dan rumah produksi", "Konveksi, katering, dan dapur usaha"],
    estimasiPremi: "Rp 300 rb – Rp 2 juta / tahun",
    dasarPerhitungan: "0,1–0,3% dari nilai bangunan + isi",
    prioritas: "Sangat Tinggi",
    warnaPrioritas: "bg-red-100 text-red-700 border-red-200",
    warnaCard: "border-red-200 bg-red-50/30",
    href: "/asuransi-properti/kebakaran",
    linkLabel: "Asuransi Kebakaran",
  },
  {
    no: "02",
    icon: "📦",
    judul: "Asuransi Kargo / Pengiriman",
    subJudul: "Untuk UMKM yang kirim produk keluar kota",
    deskripsi:
      "Melindungi produk selama proses pengiriman — dari gudang pengirim hingga tangan pembeli. Menanggung kerusakan, kehilangan, dan pencurian selama transit, baik via darat, udara, maupun laut.",
    cocokUntuk: ["Toko online yang kirim ke seluruh Indonesia", "Produsen kerajinan dan furnitur", "UMKM kuliner (oleh-oleh Jogja)", "Ekspedisi skala kecil"],
    estimasiPremi: "Rp 50 rb – Rp 300 rb / pengiriman",
    dasarPerhitungan: "0,1–0,3% dari nilai barang per pengiriman",
    prioritas: "Tinggi",
    warnaPrioritas: "bg-amber-100 text-amber-700 border-amber-200",
    warnaCard: "border-amber-200 bg-amber-50/30",
    href: "/asuransi-kargo/ekspedisi-umkm",
    linkLabel: "Asuransi Kargo UMKM",
  },
  {
    no: "03",
    icon: "🚗",
    judul: "Asuransi Kendaraan Operasional",
    subJudul: "Untuk motor/mobil yang digunakan usaha",
    deskripsi:
      "Melindungi kendaraan yang digunakan untuk operasional usaha — antar jemput bahan baku, pengiriman produk, atau mobilitas pemilik. Kendaraan yang digunakan usaha memiliki risiko lebih tinggi dari kendaraan pribadi biasa.",
    cocokUntuk: ["Motor untuk ojek atau delivery", "Mobil pick-up pengangkut barang", "Kendaraan operasional katering", "Armada delivery UMKM"],
    estimasiPremi: "Rp 700 rb – Rp 3 juta / tahun",
    dasarPerhitungan: "Tergantung tipe, tahun, dan wilayah operasi",
    prioritas: "Tinggi",
    warnaPrioritas: "bg-amber-100 text-amber-700 border-amber-200",
    warnaCard: "border-blue-200 bg-blue-50/30",
    href: "/asuransi-kendaraan/mobil",
    linkLabel: "Asuransi Kendaraan",
  },
  {
    no: "04",
    icon: "🛡️",
    judul: "Public Liability",
    subJudul: "Untuk usaha yang melayani pelanggan langsung",
    deskripsi:
      "Melindungi pemilik usaha dari tuntutan hukum jika pelanggan atau pihak ketiga mengalami cedera atau kerugian di tempat usaha. Misalnya: pelanggan terpeleset di toko, atau produk menyebabkan alergi.",
    cocokUntuk: ["Restoran, kafe, dan warung makan", "Salon, spa, dan jasa kecantikan", "Studio foto dan event organizer", "Toko dengan banyak pengunjung"],
    estimasiPremi: "Rp 500 rb – Rp 3 juta / tahun",
    dasarPerhitungan: "Tergantung jenis usaha, omzet, dan limit liability",
    prioritas: "Menengah",
    warnaPrioritas: "bg-blue-100 text-blue-700 border-blue-200",
    warnaCard: "border-green-200 bg-green-50/30",
    href: "/asuransi-liability/public-liability",
    linkLabel: "Public Liability",
  },
  {
    no: "05",
    icon: "🔧",
    judul: "Asuransi Mesin & Peralatan",
    subJudul: "Untuk UMKM dengan mesin produksi",
    deskripsi:
      "Melindungi mesin jahit, oven industri, mesin cetak, kompresor, dan peralatan produksi dari kerusakan mendadak akibat kegagalan mekanis — termasuk biaya perbaikan dan sewa mesin pengganti.",
    cocokUntuk: ["Konveksi dan garmen rumahan", "Bakery dan usaha kuliner produksi", "Percetakan dan sablon", "Bengkel kecil dan manufaktur ringan"],
    estimasiPremi: "Rp 500 rb – Rp 5 juta / tahun",
    dasarPerhitungan: "0,3–1% dari nilai mesin",
    prioritas: "Menengah",
    warnaPrioritas: "bg-blue-100 text-blue-700 border-blue-200",
    warnaCard: "border-purple-200 bg-purple-50/30",
    href: "/asuransi-engineering/machinery-breakdown",
    linkLabel: "Machinery Breakdown",
  },
];

const profilUMKM = [
  {
    profil: "Toko Retail / Warung Sembako",
    icon: "🏪",
    omzet: "< Rp 500 juta/tahun",
    prioritasUtama: ["Asuransi Kebakaran (bangunan + stok)"],
    opsional: ["Perluasan Banjir jika dekat sungai", "Public Liability jika ramai pengunjung"],
    estimasiBiaya: "Rp 300 rb – Rp 1,5 juta/tahun",
    warna: "border-red-200 bg-red-50/40",
  },
  {
    profil: "Konveksi / Garmen Rumahan",
    icon: "🧵",
    omzet: "Rp 200 juta – Rp 2 miliar/tahun",
    prioritasUtama: [
      "Asuransi Kebakaran (workshop + mesin + stok bahan)",
      "Asuransi Kargo (pengiriman hasil produksi)",
    ],
    opsional: ["Machinery Breakdown untuk mesin jahit utama", "Kendaraan operasional"],
    estimasiBiaya: "Rp 1 – Rp 5 juta/tahun",
    warna: "border-purple-200 bg-purple-50/40",
  },
  {
    profil: "Toko Online / Reseller",
    icon: "📱",
    omzet: "Rp 100 juta – Rp 1 miliar/tahun",
    prioritasUtama: [
      "Asuransi Kargo per pengiriman (Open Cover lebih efisien)",
      "Asuransi Kebakaran untuk gudang/stok",
    ],
    opsional: ["Kendaraan motor delivery", "Product Liability untuk produk branded sendiri"],
    estimasiBiaya: "Rp 600 rb – Rp 4 juta/tahun",
    warna: "border-amber-200 bg-amber-50/40",
  },
  {
    profil: "Restoran / Kafe / Katering",
    icon: "🍱",
    omzet: "Rp 300 juta – Rp 3 miliar/tahun",
    prioritasUtama: [
      "Asuransi Kebakaran (dapur + peralatan)",
      "Public Liability (risiko pengunjung cedera)",
    ],
    opsional: [
      "Machinery Breakdown (mesin masak, chiller, oven)",
      "Kendaraan delivery",
      "Product Liability jika produk dijual retail",
    ],
    estimasiBiaya: "Rp 1,5 – Rp 8 juta/tahun",
    warna: "border-green-200 bg-green-50/40",
  },
];

const kasusNyata = [
  {
    judul: "Konveksi Rumahan di Bantul Ludes Terbakar",
    nilai: "Rp 280 juta",
    cerita:
      "Kebakaran akibat korsleting listrik menghanguskan workshop konveksi rumahan beserta 40 mesin jahit dan stok kain senilai total Rp 280 juta. Pemilik memiliki asuransi kebakaran dengan nilai pertanggungan Rp 350 juta.",
    hasil: "Klaim cair Rp 270 juta dalam 21 hari. Usaha bisa dibuka kembali dalam 2 bulan.",
    tanpaAsuransi: "Tanpa asuransi, pemilik harus pinjam modal dari awal. Banyak konveksi serupa yang tidak pernah buka lagi setelah insiden seperti ini.",
    badge: "bg-red-50 text-red-700 border-red-100",
  },
  {
    judul: "Paket Kerajinan Perak Kotagede Rusak saat Pengiriman",
    nilai: "Rp 45 juta",
    cerita:
      "Pengiriman kerajinan perak senilai Rp 45 juta ke pembeli di Jakarta mengalami kerusakan parah akibat penanganan kasar ekspedisi. Pemilik toko memiliki asuransi kargo Open Cover.",
    hasil: "Klaim diproses dalam 10 hari. Dana Rp 43 juta cair setelah deductible. Hubungan dengan pembeli tetap terjaga.",
    tanpaAsuransi: "Ekspedisi hanya mengganti maksimal 10× tarif kirim — sekitar Rp 500 ribu. Kerugian Rp 44,5 juta harus ditanggung sendiri.",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    judul: "Pelanggan Terpeleset di Kafe Malioboro",
    nilai: "Tuntutan Rp 75 juta",
    cerita:
      "Pelanggan terpeleset di lantai basah dekat wastafel kafe dan mengalami patah pergelangan tangan. Keluarga menuntut ganti rugi biaya pengobatan dan kehilangan penghasilan senilai Rp 75 juta.",
    hasil: "Public Liability menanggung negosiasi dan penyelesaian sebesar Rp 62 juta. Pemilik kafe tidak perlu menanggung sendiri.",
    tanpaAsuransi: "Pemilik kafe harus membayar sendiri atau menghadapi proses hukum — yang bisa jauh lebih mahal dari tuntutan awal.",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
  },
];

const tipsMemilih = [
  {
    no: "1",
    judul: "Mulai dari risiko terbesar, bukan produk terlengkap",
    detail:
      "UMKM dengan anggaran terbatas tidak harus langsung ambil semua jenis asuransi. Identifikasi satu risiko yang jika terjadi akan membuat usaha kolaps — itu yang diasuransikan pertama. Untuk sebagian besar UMKM, itu adalah kebakaran tempat usaha.",
  },
  {
    no: "2",
    judul: "Hitung nilai pertanggungan dengan jujur",
    detail:
      "Kesalahan umum UMKM adalah meremehkan nilai stok dan peralatan agar premi lebih murah. Akibatnya saat klaim, ganti rugi tidak mencukupi (underinsurance). Lebih baik nilai pertanggungan akurat meski premi sedikit lebih tinggi.",
  },
  {
    no: "3",
    judul: "Tanyakan perluasan Banjir dan Gempa untuk lokasi di DIY",
    detail:
      "Polis kebakaran standar tidak otomatis menanggung banjir dan gempa. Untuk usaha di DIY, perluasan ini sangat dianjurkan mengingat sejarah gempa 2006 dan banjir yang rutin di beberapa kawasan Bantul dan Kulon Progo.",
  },
  {
    no: "4",
    judul: "Open Cover lebih efisien untuk pengiriman rutin",
    detail:
      "Jika mengirim barang lebih dari 2–3 kali per bulan, Open Cover (satu polis untuk semua pengiriman selama setahun) jauh lebih efisien dibanding asuransi per pengiriman. Premi dihitung berdasarkan estimasi volume pengiriman setahun.",
  },
  {
    no: "5",
    judul: "Simpan polis dan nomor klaim di tempat yang mudah diakses",
    detail:
      "Saat musibah terjadi, kondisi panik adalah yang paling buruk untuk mencari dokumen. Simpan soft copy polis di cloud (Google Drive atau WhatsApp), dan catat nomor praktisi serta prosedur klaim di tempat yang mudah diakses semua anggota keluarga atau karyawan.",
  },
];

const faqItems = [
  {
    q: "Apakah usaha rumahan (home industry) bisa diasuransikan?",
    a: "Ya. Usaha rumahan — konveksi di garasi, dapur produksi oleh-oleh, atau studio kerajinan — bisa diasuransikan. Namun ada beberapa hal yang perlu diperhatikan: (1) lokasi usaha yang sama dengan rumah tinggal memerlukan deklarasi yang jelas kepada insurer, (2) nilai stok dan peralatan produksi harus dideklarasikan terpisah dari isi rumah, (3) beberapa insurer membatasi pertanggungan usaha rumahan — konsultasikan kepada kami untuk memastikan cakupan yang tepat.",
  },
  {
    q: "Apakah stok barang di gudang bisa diasuransikan meski bukan milik sendiri (barang titipan)?",
    a: "Ini pertanyaan penting yang sering terlewat. Secara standar, polis kebakaran menanggung stok milik tertanggung. Untuk stok titipan atau barang konsinyasi, diperlukan klausul 'barang milik orang lain dalam penjagaan' (Goods Held in Trust). Jika gudang Anda menyimpan barang pelanggan atau pemasok, pastikan klausul ini ada dalam polis.",
  },
  {
    q: "Berapa lama klaim asuransi UMKM diproses?",
    a: "Untuk klaim kebakaran: pelaporan dalam 24–48 jam, survei loss adjuster 2–5 hari kerja, persetujuan 7–21 hari kerja. Untuk klaim kargo: lebih cepat, umumnya 5–14 hari kerja untuk klaim tanpa sengketa. Yang paling mempengaruhi kecepatan klaim adalah kelengkapan dokumentasi — foto kerusakan, daftar barang, dan laporan kejadian yang disiapkan segera setelah insiden.",
  },
  {
    q: "Apakah UMKM yang baru berdiri (kurang dari 1 tahun) bisa mendapatkan asuransi?",
    a: "Bisa. Tidak ada ketentuan minimum usia usaha untuk asuransi kebakaran, kargo, atau kendaraan. Yang diperlukan adalah bukti kepemilikan atau sewa tempat usaha (untuk kebakaran), dan daftar stok/aset yang ingin diasuransikan. Untuk Public Liability atau Product Liability, beberapa insurer mungkin meminta profil usaha yang lebih detail.",
  },
  {
    q: "Apakah premi asuransi UMKM bisa menjadi biaya deductible pajak?",
    a: "Ya. Berdasarkan UU PPh, premi asuransi yang dibayarkan untuk kepentingan usaha — termasuk asuransi kebakaran tempat usaha, kargo, dan kendaraan operasional — dapat dibebankan sebagai biaya dalam perhitungan PPh Badan atau PPh Final UMKM. Konsultasikan dengan konsultan pajak Anda untuk optimasi biaya asuransi sebagai pengurang penghasilan.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ArtikelAsuransiUMKMJogja() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }}
      />

        {/* ── Breadcrumb ── */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Asuransi untuk UMKM di Jogja</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link
                href="/asuransi-properti"
                className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors"
              >
                🏠 Properti
              </Link>
              <Link
                href="/asuransi-kargo"
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors"
              >
                📦 Kargo
              </Link>
              <Link
                href="/asuransi-liability"
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors"
              >
                🛡️ Liability
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan UMKM</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi untuk UMKM di Jogja —<br />
              <em className="not-italic text-gold">Panduan Praktis<br />Pelaku Usaha</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px] mb-6">
              Banyak UMKM di Yogyakarta baru memikirkan asuransi setelah musibah terjadi.
              Padahal proteksi usaha bisa dimulai dari{" "}
              <strong className="text-gold2">Rp 300 ribu per tahun</strong> — lebih murah dari
              satu kali makan di restoran. Panduan ini membantu Anda memilih yang tepat sesuai
              jenis dan skala usaha.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 8 menit</span>
            </div>
          </div>
        </section>

        {/* ── Konten ── */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead box */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Jawaban Cepat:</strong> UMKM di Yogyakarta
              paling membutuhkan <strong>asuransi kebakaran</strong> untuk tempat usaha,{" "}
              <strong>asuransi kargo</strong> untuk pengiriman produk, dan{" "}
              <strong>asuransi kendaraan</strong> untuk armada operasional. Untuk usaha
              yang melayani pelanggan langsung, tambahkan{" "}
              <strong>Public Liability</strong>. Total biaya bisa dimulai dari{" "}
              <strong>Rp 300 ribu hingga Rp 8 juta per tahun</strong> tergantung skala usaha.
            </p>
          </div>

          {/* Mengapa UMKM perlu asuransi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Mengapa UMKM di Yogyakarta Rentan Tanpa Asuransi?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-4">
            UMKM adalah tulang punggung ekonomi Yogyakarta — dari sentra kerajinan Kotagede,
            konveksi Bantul, kuliner Malioboro, hingga ribuan toko online yang beroperasi dari
            rumah-rumah di Sleman dan Kulon Progo. Namun sebagian besar beroperasi tanpa
            perlindungan asuransi sama sekali.
          </p>
          <p className="text-[#475569] text-base leading-relaxed mb-4">
            Ironisnya, UMKM justru lebih rentan dibanding usaha besar. Perusahaan besar punya
            cadangan modal untuk pulih dari musibah. UMKM tidak. Satu kebakaran yang memusnahkan
            stok dan peralatan — tanpa asuransi — bisa mengakhiri usaha yang dibangun bertahun-tahun.
          </p>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            DIY juga memiliki karakteristik risiko yang spesifik: zona gempa aktif, banjir musiman
            di bantaran Code dan Progo, serta cuaca ekstrem yang makin sering terjadi. Semua ini
            adalah risiko yang bisa dimitigasi dengan asuransi yang tepat — dengan biaya yang
            jauh lebih terjangkau dari yang dibayangkan kebanyakan pelaku UMKM.
          </p>

          {/* 5 Produk Utama */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Jenis Asuransi yang Paling Relevan untuk UMKM Jogja
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Berikut penjelasan setiap produk — diurutkan dari yang paling prioritas bagi
            sebagian besar UMKM:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {jenisProdukUMKM.map((p) => (
              <div key={p.no} className={`rounded-card p-5 border ${p.warnaCard}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/70 border border-black/8 flex items-center justify-center text-xl shadow-sm">
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                      <span className="font-heading font-bold text-navy text-[0.95rem]">{p.judul}</span>
                      <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-full border ${p.warnaPrioritas}`}>
                        {p.prioritas}
                      </span>
                    </div>
                    <p className="text-xs text-[#5A6472] mb-2">{p.subJudul}</p>
                    <p className="text-sm text-[#475569] leading-relaxed mb-3">{p.deskripsi}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1.5">
                          Cocok untuk
                        </p>
                        <ul className="flex flex-col gap-1">
                          {p.cocokUntuk.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-gold flex-shrink-0 font-bold text-xs mt-0.5">✓</span>
                              <span className="text-xs text-navy2">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1.5">
                          Estimasi biaya
                        </p>
                        <div className="bg-white/70 rounded-lg p-3 border border-black/6">
                          <div className="font-heading font-bold text-navy text-sm mb-0.5">
                            {p.estimasiPremi}
                          </div>
                          <div className="text-[0.65rem] text-[#5A6472]">{p.dasarPerhitungan}</div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold2 transition-colors no-underline"
                    >
                      Pelajari {p.linkLabel} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Profil per jenis UMKM */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Rekomendasi Berdasarkan Jenis Usaha Anda
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Setiap jenis UMKM memiliki risiko dan kebutuhan yang berbeda.
            Temukan profil yang paling mendekati usaha Anda:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {profilUMKM.map((p) => (
              <div key={p.profil} className={`rounded-card p-5 border ${p.warna}`}>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <div className="font-heading font-bold text-navy text-sm">{p.profil}</div>
                    <div className="text-xs text-[#5A6472]">{p.omzet}</div>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1.5">
                    Prioritas utama
                  </p>
                  <ul className="flex flex-col gap-1">
                    {p.prioritasUtama.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-navy font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-xs text-navy2 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1.5">
                    Tambahan dianjurkan
                  </p>
                  <ul className="flex flex-col gap-1">
                    {p.opsional.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gold font-bold text-xs flex-shrink-0 mt-0.5">+</span>
                        <span className="text-xs text-[#475569] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/60 rounded-lg px-3 py-2 border border-black/6">
                  <span className="text-[0.65rem] text-[#5A6472] uppercase tracking-wide font-semibold">
                    Estimasi total
                  </span>
                  <div className="font-heading font-bold text-navy text-sm">{p.estimasiBiaya}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Kasus Nyata */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Kasus Nyata dari UMKM di Yogyakarta
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Tiga contoh berikut menggambarkan perbedaan antara UMKM yang memiliki asuransi
            dan yang tidak, ketika musibah benar-benar terjadi:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {kasusNyata.map((k) => (
              <div key={k.judul} className={`rounded-card p-5 border ${k.badge}`}>
                <div className="flex items-start gap-3 mb-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                      <span className="font-heading font-bold text-navy text-sm">{k.judul}</span>
                      <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${k.badge}`}>
                        Nilai: {k.nilai}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Kronologi", val: k.cerita },
                    { label: "✅ Hasil dengan Asuransi", val: k.hasil },
                    { label: "⚠️ Tanpa Asuransi", val: k.tanpaAsuransi },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/60 rounded-lg p-3 border border-black/6">
                      <div className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-1">
                        {item.label}
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips memilih */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            5 Tips Memilih Asuransi yang Tepat untuk UMKM
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-5">
            Agar premi tidak terasa sia-sia dan klaim bisa cair saat dibutuhkan:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {tipsMemilih.map((t) => (
              <div key={t.no} className="flex gap-3.5 bg-cream rounded-xl p-4 border border-black/5">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gold/15 border border-gold/25 flex items-center justify-center text-xs font-bold text-amber-700">
                  {t.no}
                </span>
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">{t.judul}</p>
                  <p className="text-xs text-[#475569] leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">
              Tidak yakin asuransi apa yang dibutuhkan usaha Anda?
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Ceritakan jenis usaha, lokasi, dan aset utama Anda — kami rekomendasikan
              kombinasi perlindungan paling efisien sesuai anggaran. Konsultasi gratis,
              tanpa tekanan.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                💬 Konsultasi via WA — Gratis
              </a>
              <Link
                href="/asuransi-properti/kebakaran"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                🏠 Asuransi Kebakaran →
              </Link>
              <Link
                href="/asuransi-kargo/ekspedisi-umkm"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                📦 Asuransi Kargo UMKM →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan yang Sering Diajukan Pelaku UMKM
          </h2>
          <div className="flex flex-col divide-y divide-black/8 mb-10">
            {faqItems.map((f, i) => (
              <details key={i} className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">
              Produk & Artikel Terkait
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/asuransi-properti/kebakaran",
                  icon: "🔥",
                  judul: "Asuransi Kebakaran",
                  desc: "Proteksi toko, gudang, dan rumah produksi UMKM",
                },
                {
                  href: "/asuransi-kargo/ekspedisi-umkm",
                  icon: "📦",
                  judul: "Asuransi Kargo Ekspedisi UMKM",
                  desc: "Proteksi pengiriman produk ke seluruh Indonesia",
                },
                {
                  href: "/asuransi-liability/public-liability",
                  icon: "🛡️",
                  judul: "Public Liability",
                  desc: "Proteksi dari tuntutan pelanggan atau pihak ketiga",
                },
                {
                  href: "/asuransi-kendaraan/mobil",
                  icon: "🚗",
                  judul: "Asuransi Kendaraan",
                  desc: "Proteksi motor dan mobil operasional usaha",
                },
                {
                  href: "/asuransi-properti/property-all-risk",
                  icon: "🏢",
                  judul: "Property All Risk",
                  desc: "Perlindungan lebih luas untuk usaha menengah ke atas",
                },
                {
                  href: "/artikel/pentingnya-asuransi-dunia-usaha-jogja",
                  icon: "📖",
                  judul: "Pentingnya Asuransi untuk Dunia Usaha Jogja",
                  desc: "Mengapa proteksi usaha bukan sekadar biaya tambahan",
                },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group"
                >
                  <span className="text-xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">
                      {a.judul}
                    </div>
                    <div className="text-xs text-[#475569]">{a.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* ── CTA Bottom ── */}
        <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
              Mulai Proteksi Usaha Anda<br />
              Hari Ini — Mulai dari Rp 300 Ribu
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Konsultasi gratis dengan Rio Mardiansyah — praktisi asuransi UMKM berpengalaman di
              Yogyakarta. Kami bantu pilihkan perlindungan yang tepat, tidak lebih dan tidak kurang.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <Link
                href="/asuransi-properti"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                🏠 Lihat Produk Properti
              </Link>
              <Link
                href="/asuransi-kargo"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                📦 Lihat Produk Kargo
              </Link>
            </div>
          </div>
        </section>

    </>
  );
}
