// app/artikel/asuransi-kontraktor-proyek-jogja/page.tsx
// TARGET KEYWORD: "asuransi kontraktor jogja", "asuransi proyek konstruksi yogyakarta"
// INTENT: Informational + Commercial — kontraktor baru atau yang ingin memahami kebutuhan asuransi secara menyeluruh
// SILO: Hub artikel — cross-link ke Engineering, Surety Bond, Liability cluster + semua artikel terkait

import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Panduan Lengkap Asuransi Kontraktor di Jogja – Semua yang Perlu Anda Tahu",
  description:
    "Panduan A–Z asuransi untuk kontraktor di Yogyakarta: CAR, EAR, Surety Bond, Liability, hingga Machinery Breakdown. Kapan dibutuhkan, berapa biayanya, dan konsekuensi jika tidak punya. Berdasarkan Perpres 12/2021 dan pengalaman 11+ tahun di DIY.",
  keywords:
    "asuransi kontraktor jogja, asuransi proyek konstruksi yogyakarta, CAR surety bond kontraktor DIY, jenis asuransi kontraktor indonesia, asuransi wajib kontraktor pemerintah yogyakarta, panduan asuransi proyek jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-kontraktor-proyek-jogja",
  },
  openGraph: {
    title: "Panduan Lengkap Asuransi Kontraktor di Jogja",
    description:
      "Semua jenis asuransi yang dibutuhkan kontraktor di Yogyakarta — dari tender hingga selesai proyek. Berdasarkan Perpres 12/2021 dan pengalaman nyata di DIY.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-kontraktor-proyek-jogja",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Panduan Lengkap Asuransi Kontraktor di Jogja" }],
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
          name: "Panduan Lengkap Asuransi Kontraktor Jogja",
          item: "https://asuransijogja.biz.id/artikel/asuransi-kontraktor-proyek-jogja",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Panduan Lengkap Asuransi Kontraktor di Jogja – Semua yang Perlu Anda Tahu",
      description:
        "Panduan A–Z asuransi untuk kontraktor di Yogyakarta mencakup CAR, EAR, Surety Bond, Employer Liability, hingga Machinery Breakdown.",
      author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi" },
      publisher: {
        "@type": "Organization",
        name: "Asuransi Jogja",
        url: "https://asuransijogja.biz.id",
      },
      datePublished: "2025-04-01",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Asuransi apa saja yang wajib dimiliki kontraktor di Indonesia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Berdasarkan Perpres 12/2021, kontraktor yang mengerjakan proyek pemerintah wajib memiliki: (1) Jaminan Penawaran sebelum memasukkan penawaran, (2) Jaminan Pelaksanaan setelah menang tender, (3) Asuransi CAR sebelum pekerjaan dimulai, dan (4) Jaminan Pemeliharaan saat serah terima. Selain itu, kontraktor yang mempekerjakan tenaga kerja juga wajib mendaftarkan karyawan ke BPJS Ketenagakerjaan.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa total biaya asuransi yang harus disiapkan kontraktor untuk satu proyek?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Total biaya asuransi kontraktor untuk satu proyek berkisar 0,5–2% dari nilai kontrak, mencakup premi CAR, Jaminan Pelaksanaan, dan Jaminan Pemeliharaan. Untuk proyek Rp 5 miliar, estimasinya Rp 25–100 juta. Biaya ini dapat dimasukkan dalam komponen overhead RAB.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah kontraktor swasta (bukan proyek pemerintah) juga perlu asuransi CAR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tidak wajib secara hukum, namun sangat dianjurkan. Proyek swasta — hotel, apartemen, pabrik — yang tidak memiliki CAR menanggung seluruh risiko kerusakan sendiri. Jika terjadi banjir atau gempa yang merusak pekerjaan senilai Rp 2 miliar, biaya perbaikan harus ditanggung penuh tanpa bantuan asuransi.",
          },
        },
        {
          "@type": "Question",
          name: "Apa perbedaan Employer Liability dan BPJS Ketenagakerjaan untuk kontraktor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BPJS Ketenagakerjaan adalah kewajiban hukum yang menanggung kecelakaan kerja karyawan tetap. Employer Liability adalah asuransi tambahan yang menanggung tuntutan hukum dari karyawan atau ahli waris yang merasa ganti rugi BPJS tidak memadai. Untuk proyek konstruksi dengan risiko kecelakaan kerja tinggi, kombinasi keduanya sangat dianjurkan.",
          },
        },
        {
          "@type": "Question",
          name: "Bisakah semua asuransi kontraktor diurus oleh satu praktisi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, dan ini justru yang paling efisien. Menggunakan satu praktisi untuk CAR, Surety Bond, dan Employer Liability memudahkan koordinasi, monitoring masa berlaku, dan penanganan klaim. Kami di Asuransi Jogja menangani semua kebutuhan asuransi kontraktor dalam satu layanan terintegrasi.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const matriksKebutuhan = [
  {
    jenis: "Asuransi CAR",
    proyekPemerintah: true,
    proyekSwastaBesar: true,
    proyekSwastaKecil: false,
    proyekIndustri: true,
    keterangan: "Wajib tender pemerintah. Sangat dianjurkan proyek swasta > Rp 1 M.",
    href: "/asuransi-engineering/contractor-all-risk",
    warnaBadge: "bg-blue-50 text-blue-700",
  },
  {
    jenis: "Jaminan Penawaran",
    proyekPemerintah: true,
    proyekSwastaBesar: false,
    proyekSwastaKecil: false,
    proyekIndustri: false,
    keterangan: "Khusus tender pemerintah. Diserahkan bersama dokumen penawaran.",
    href: "/asuransi-surety-bond/jaminan-penawaran",
    warnaBadge: "bg-purple-50 text-purple-700",
  },
  {
    jenis: "Jaminan Pelaksanaan",
    proyekPemerintah: true,
    proyekSwastaBesar: false,
    proyekSwastaKecil: false,
    proyekIndustri: false,
    keterangan: "Khusus tender pemerintah. Diserahkan setelah ditetapkan pemenang.",
    href: "/asuransi-surety-bond/jaminan-pelaksanaan",
    warnaBadge: "bg-purple-50 text-purple-700",
  },
  {
    jenis: "Jaminan Uang Muka",
    proyekPemerintah: true,
    proyekSwastaBesar: false,
    proyekSwastaKecil: false,
    proyekIndustri: false,
    keterangan: "Jika ada klausul DP dalam kontrak. Nilai = nilai DP yang diterima.",
    href: "/asuransi-surety-bond/jaminan-uang-muka",
    warnaBadge: "bg-purple-50 text-purple-700",
  },
  {
    jenis: "Jaminan Pemeliharaan",
    proyekPemerintah: true,
    proyekSwastaBesar: false,
    proyekSwastaKecil: false,
    proyekIndustri: false,
    keterangan: "Diserahkan saat PHO, menggantikan retensi 5% yang ditahan PPK.",
    href: "/asuransi-surety-bond/jaminan-pemeliharan",
    warnaBadge: "bg-purple-50 text-purple-700",
  },
  {
    jenis: "Asuransi EAR",
    proyekPemerintah: false,
    proyekSwastaBesar: false,
    proyekSwastaKecil: false,
    proyekIndustri: true,
    keterangan: "Untuk pemasangan mesin & instalasi industri. Kondisional di kontrak EPC.",
    href: "/asuransi-engineering/erection-all-risk",
    warnaBadge: "bg-amber-50 text-amber-700",
  },
  {
    jenis: "Employer Liability",
    proyekPemerintah: true,
    proyekSwastaBesar: true,
    proyekSwastaKecil: false,
    proyekIndustri: true,
    keterangan: "Sangat dianjurkan untuk proyek dengan banyak tenaga kerja fisik.",
    href: "/asuransi-liability/employer-liability",
    warnaBadge: "bg-green-50 text-green-700",
  },
  {
    jenis: "Public Liability (TPL)",
    proyekPemerintah: true,
    proyekSwastaBesar: true,
    proyekSwastaKecil: false,
    proyekIndustri: true,
    keterangan: "Umumnya sudah termasuk dalam Section II polis CAR/EAR. Bisa berdiri sendiri.",
    href: "/asuransi-liability/public-liability",
    warnaBadge: "bg-green-50 text-green-700",
  },
  {
    jenis: "Machinery Breakdown",
    proyekPemerintah: false,
    proyekSwastaBesar: false,
    proyekSwastaKecil: false,
    proyekIndustri: true,
    keterangan: "Setelah proyek selesai — melindungi mesin yang sudah beroperasi.",
    href: "/asuransi-engineering/machinery-breakdown",
    warnaBadge: "bg-orange-50 text-orange-700",
  },
];

const profilKontraktor = [
  {
    profil: "Kontraktor Kecil — Proyek APBD Kabupaten",
    icon: "🏠",
    nilaiProyek: "Rp 200 juta – Rp 2 miliar",
    asuransiWajib: [
      "Jaminan Penawaran (surety bond)",
      "Jaminan Pelaksanaan (surety bond)",
      "Asuransi CAR — seksi I & II",
      "Jaminan Pemeliharaan",
    ],
    asuransiDianjurkan: ["Employer Liability jika > 10 pekerja"],
    estimasiBiaya: "0,6 – 1,2% dari nilai kontrak",
    contoh:
      "Kontraktor Sleman mengerjakan rehabilitasi gedung sekolah Rp 800 juta. Total biaya asuransi & jaminan estimasi Rp 5–10 juta.",
    warna: "border-blue-200 bg-blue-50/40",
  },
  {
    profil: "Kontraktor Menengah — Proyek APBN/APBD Provinsi",
    icon: "🏢",
    nilaiProyek: "Rp 2 miliar – Rp 20 miliar",
    asuransiWajib: [
      "Jaminan Penawaran",
      "Jaminan Pelaksanaan",
      "Asuransi CAR (termasuk Principal Clause)",
      "Jaminan Uang Muka (jika ada DP)",
      "Jaminan Pemeliharaan",
    ],
    asuransiDianjurkan: [
      "Employer Liability",
      "Perluasan CAR: Gempa Bumi & Banjir",
      "Annual CAR jika multi-proyek",
    ],
    estimasiBiaya: "0,5 – 1,0% dari nilai kontrak",
    contoh:
      "Kontraktor Bantul mengerjakan pembangunan puskesmas baru Rp 7 miliar. Total estimasi asuransi & jaminan Rp 35–70 juta.",
    warna: "border-gold/30 bg-gold/4",
  },
  {
    profil: "Kontraktor EPC — Proyek Industri & Pabrik",
    icon: "🏭",
    nilaiProyek: "Rp 10 miliar ke atas",
    asuransiWajib: [
      "Combined CAR/EAR (pekerjaan sipil + erection mesin)",
      "Employer Liability",
      "Public Liability (TPL) terpisah jika limit besar",
    ],
    asuransiDianjurkan: [
      "DSU (Delay in Start-Up) jika ada klausul penalti",
      "Marine Cargo untuk komponen impor",
      "Machinery Breakdown setelah commissioning",
      "Waiver of Subrogation jika disyaratkan kontrak",
    ],
    estimasiBiaya: "0,4 – 0,9% dari nilai kontrak",
    contoh:
      "Kontraktor EPC mengerjakan pabrik baru di Kulon Progo senilai Rp 45 miliar. Combined CAR/EAR + Employer Liability estimasi Rp 180–400 juta.",
    warna: "border-green-200 bg-green-50/40",
  },
];

const kasusNyata = [
  {
    judul: "Banjir Merusak Material di Proyek Jalan Bantul",
    jenis: "Klaim CAR — Section I",
    nilai: "Rp 380 juta",
    kronologi:
      "Proyek rehabilitasi jalan di Bantul terdampak banjir besar pada musim hujan. Material timbunan dan lapis pondasi yang sudah terpasang hanyut dan rusak. Kontraktor melaporkan klaim dalam 24 jam.",
    hasil:
      "Klaim disetujui penuh setelah survei loss adjuster. Dana cair dalam 18 hari kerja. Kontraktor bisa melanjutkan pekerjaan tanpa menanggung kerugian sendiri.",
    pelajaran:
      "Tanpa CAR, kontraktor harus menanggung Rp 380 juta dari kantong sendiri — hampir setara margin keuntungan proyek senilai Rp 3 miliar.",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    judul: "Pekerja Jatuh dari Perancah di Proyek Hotel Sleman",
    jenis: "Klaim Employer Liability",
    nilai: "Rp 185 juta (tuntutan Rp 500 juta)",
    kronologi:
      "Seorang pekerja jatuh dari perancah lantai 4 dan mengalami patah tulang serius. Keluarga menuntut ganti rugi Rp 500 juta di luar manfaat BPJS yang dianggap tidak memadai untuk biaya pemulihan jangka panjang.",
    hasil:
      "Employer Liability menanggung negosiasi dan penyelesaian tuntutan senilai Rp 185 juta. Kontraktor terlindungi dari tuntutan hukum lanjutan.",
    pelajaran:
      "BPJS saja tidak cukup jika keluarga korban menuntut melalui jalur hukum. Employer Liability melindungi kontraktor dari exposure liabilitas yang jauh melebihi manfaat BPJS.",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    judul: "Kontraktor Gagal Serahkan Jaminan Pelaksanaan Tepat Waktu",
    jenis: "Konsekuensi tanpa persiapan jaminan",
    nilai: "Kontrak batal + masuk daftar hitam",
    kronologi:
      "Kontraktor kecil di Gunung Kidul ditetapkan sebagai pemenang tender proyek irigasi Rp 1,5 miliar. Karena tidak memiliki praktisi yang membantu, proses pengurusan Jaminan Pelaksanaan terlambat 3 hari dari batas waktu 14 hari kerja.",
    hasil:
      "PPK membatalkan kontrak dan mencairkan Jaminan Penawaran. Kontraktor dimasukkan dalam daftar hitam LKPP selama 2 tahun — tidak bisa mengikuti tender manapun selama periode tersebut.",
    pelajaran:
      "Jaminan Pelaksanaan harus sudah siap sebelum penetapan pemenang diumumkan — bukan baru diurus setelah menang. Praktisi yang berpengalaman akan mempersiapkan ini jauh sebelumnya.",
    badge: "bg-red-50 text-red-700 border-red-100",
  },
];

const timelineProyek = [
  {
    fase: "Pra-Tender",
    ikon: "📋",
    waktu: "H-7 sebelum pemasukan penawaran",
    aksi: "Siapkan Jaminan Penawaran",
    detail: "Hubungi praktisi minimal 3 hari sebelum deadline pemasukan dokumen.",
    produk: "Jaminan Penawaran",
    hrefProduk: "/asuransi-surety-bond/jaminan-penawaran",
    warna: "border-l-purple-400",
  },
  {
    fase: "Penetapan Pemenang",
    ikon: "🏆",
    waktu: "H+1 setelah terima SPPBJ",
    aksi: "Segera siapkan Jaminan Pelaksanaan",
    detail: "Batas waktu 14 hari kerja — mulai proses hari pertama setelah terima SPPBJ.",
    produk: "Jaminan Pelaksanaan",
    hrefProduk: "/asuransi-surety-bond/jaminan-pelaksanaan",
    warna: "border-l-gold",
  },
  {
    fase: "Penandatanganan Kontrak",
    ikon: "✍️",
    waktu: "Bersamaan atau sebelum kontrak ditandatangani",
    aksi: "Siapkan dokumen untuk CAR & Jaminan Uang Muka",
    detail: "Berikan RAB, gambar, dan jadwal kepada praktisi untuk proses underwriting CAR.",
    produk: "Asuransi CAR",
    hrefProduk: "/asuransi-engineering/contractor-all-risk",
    warna: "border-l-blue-400",
  },
  {
    fase: "Sebelum Mulai Pekerjaan",
    ikon: "🏗️",
    waktu: "Sebelum mobilisasi ke lapangan",
    aksi: "Serahkan polis CAR ke PPK",
    detail: "Syarat pencairan termin pertama. Tanpa CoI, termin tidak bisa dicairkan.",
    produk: "Polis CAR aktif",
    hrefProduk: "/asuransi-engineering/contractor-all-risk",
    warna: "border-l-blue-400",
  },
  {
    fase: "Selama Pelaksanaan",
    ikon: "⚙️",
    waktu: "Ongoing — sesuai durasi proyek",
    aksi: "Monitor masa berlaku semua jaminan & polis",
    detail: "Jika proyek terlambat, perpanjang polis dan jaminan sebelum kedaluwarsa.",
    produk: "Semua dokumen aktif",
    hrefProduk: "/artikel/syarat-asuransi-tender-pemerintah-diy",
    warna: "border-l-navy/40",
  },
  {
    fase: "Serah Terima Pertama (PHO)",
    ikon: "🔧",
    waktu: "Saat pengajuan PHO",
    aksi: "Serahkan Jaminan Pemeliharaan",
    detail: "Tukar dengan retensi 5% yang ditahan PPK. Nilai jaminan = 5% nilai kontrak.",
    produk: "Jaminan Pemeliharaan",
    hrefProduk: "/asuransi-surety-bond/jaminan-pemeliharan",
    warna: "border-l-green-400",
  },
  {
    fase: "Serah Terima Akhir (FHO)",
    ikon: "✅",
    waktu: "Setelah masa pemeliharaan selesai",
    aksi: "Semua kewajiban asuransi & jaminan berakhir",
    detail: "Jaminan Pemeliharaan dikembalikan. Proyek selesai secara administratif.",
    produk: null,
    hrefProduk: null,
    warna: "border-l-[#5A6472]",
  },
];

const faqItems = [
  {
    q: "Apakah kontraktor subkontrak perlu asuransi sendiri?",
    a: "Tergantung struktur kontrak. Dalam banyak proyek pemerintah, polis CAR kontraktor utama sudah mencakup pekerjaan subkontraktor selama dikerjakan di lokasi proyek yang sama. Namun jika subkontraktor bekerja di luar site atau memiliki kontrak terpisah dengan owner, mereka perlu polis CAR sendiri. Konfirmasi ke praktisi sebelum memutuskan.",
  },
  {
    q: "Bagaimana jika proyek melebihi batas waktu kontrak — apakah polis CAR masih berlaku?",
    a: "Tidak otomatis. Polis CAR hanya berlaku sesuai periode yang tercantum. Jika proyek diperpanjang, polis harus diperpanjang pula (extension of period) dengan membayar additional premium pro-rata. Perpanjangan harus diajukan sebelum polis kedaluwarsa — bukan setelah. Kami memantau dan mengingatkan klien aktif kami 30 hari sebelum jatuh tempo.",
  },
  {
    q: "Apakah ada asuransi yang bisa menanggung semua risiko kontraktor dalam satu polis?",
    a: "Tidak ada satu polis yang mencakup semua. Namun kontraktor bisa meminimalkan jumlah polis dengan: (1) Combined CAR/EAR untuk proyek EPC, (2) Annual CAR Open Cover untuk multi-proyek dalam setahun, dan (3) memastikan Section II (TPL) sudah termasuk dalam CAR sehingga tidak perlu Public Liability terpisah. Sisanya — Surety Bond dan Employer Liability — tetap perlu polis sendiri.",
  },
  {
    q: "Apa yang harus dilakukan kontraktor jika terjadi kecelakaan kerja di proyek?",
    a: "Langkah pertama: pastikan korban mendapat pertolongan medis segera. Langkah kedua: laporkan ke BPJS Ketenagakerjaan dalam 2x24 jam (kewajiban hukum). Langkah ketiga: jika kontraktor memiliki Employer Liability, laporkan juga ke praktisi asuransi. Jangan membuat pernyataan atau kesepakatan finansial dengan keluarga korban sebelum berkonsultasi dengan praktisi — ini bisa mempengaruhi proses klaim.",
  },
  {
    q: "Bagaimana cara kontraktor mendapatkan premi lebih murah tanpa mengurangi cakupan?",
    a: "Ada beberapa strategi: (1) siapkan dokumen proyek selengkap mungkin — underwriter memberi rate lebih baik untuk proyek yang risikonya terukur, (2) pertimbangkan deductible lebih besar untuk proyek risiko rendah, (3) konsolidasi ke Annual CAR jika mengerjakan banyak proyek dalam setahun, (4) bangun track record klaim bersih — loyalitas multi-tahun biasanya mendapat NCD. Praktisi yang bernegosiasi langsung ke underwriter juga bisa mendapat rate 10–20% lebih baik dibanding beli langsung.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ArtikelAsuransiKontraktorJogja() {
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
            <span className="text-navy font-semibold">Panduan Asuransi Kontraktor Jogja</span>
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
                href="/asuransi-engineering"
                className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors"
              >
                ⚙️ Engineering
              </Link>
              <Link
                href="/asuransi-surety-bond"
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors"
              >
                📋 Surety Bond
              </Link>
              <Link
                href="/asuransi-liability"
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors"
              >
                🛡️ Liability
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan A–Z</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Panduan Lengkap Asuransi<br />
              Kontraktor di Jogja —{" "}
              <em className="not-italic text-gold">Dari Tender<br />hingga Selesai Proyek</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px] mb-6">
              Ada 9 jenis asuransi dan jaminan yang relevan bagi kontraktor di Yogyakarta —
              tidak semuanya wajib, dan tidak semua dibutuhkan di waktu yang sama. Panduan ini
              menjelaskan mana yang wajib, mana yang dianjurkan, kapan dibutuhkan, dan berapa biayanya.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 10 menit</span>
            </div>
          </div>
        </section>

        {/* ── Konten ── */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead box */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Gambaran Cepat:</strong> Kontraktor proyek pemerintah
              wajib menyiapkan <strong>5 jenis jaminan</strong> (Penawaran, Pelaksanaan, Uang Muka,
              CAR, Pemeliharaan). Kontraktor industri/EPC butuh tambahan{" "}
              <strong>EAR dan Employer Liability</strong>. Kontraktor swasta kecil minimal butuh{" "}
              <strong>CAR</strong>. Total biaya asuransi & jaminan umumnya{" "}
              <strong>0,5–1,5% dari nilai kontrak</strong> — bisa dimasukkan dalam RAB.
            </p>
          </div>

          {/* Mengapa penting */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Mengapa Asuransi Bukan Sekadar Formalitas Tender?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-4">
            Banyak kontraktor di Yogyakarta mengurus asuransi hanya karena diwajibkan panitia
            tender — bukan karena benar-benar memahami manfaatnya. Padahal risiko di lapangan
            sangat nyata: banjir yang merusak pekerjaan yang sudah terpasang, pekerja yang jatuh
            dan menuntut ganti rugi, atau material yang dicuri dari lokasi proyek.
          </p>
          <p className="text-[#475569] text-base leading-relaxed mb-4">
            Yogyakarta memiliki karakteristik risiko yang spesifik. Kawasan lereng Merapi di Sleman
            utara rawan lahar hujan. Kawasan pesisir di Bantul dan Kulon Progo rawan banjir rob dan
            gelombang tinggi. Seluruh DIY berada di zona gempa aktif — pengingat Gempa 2006 yang
            merusak ribuan bangunan masih relevan hingga hari ini.
          </p>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Kontraktor yang tidak memiliki asuransi yang tepat menanggung semua risiko ini sendiri.
            Untuk proyek Rp 5 miliar, satu kejadian besar bisa menghapus seluruh margin keuntungan
            bahkan menyebabkan kerugian bersih.
          </p>

          {/* Matriks Kebutuhan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Matriks Kebutuhan: Asuransi Mana untuk Jenis Proyek Apa?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Gunakan tabel ini sebagai referensi cepat. Kolom menunjukkan jenis proyek, baris
            menunjukkan jenis asuransi:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 font-heading font-semibold text-xs rounded-tl-xl w-[28%]">
                    Jenis Asuransi
                  </th>
                  <th className="text-center p-3 font-heading font-semibold text-xs w-[14%]">
                    Proyek<br />Pemerintah
                  </th>
                  <th className="text-center p-3 font-heading font-semibold text-xs w-[14%]">
                    Swasta<br />Besar
                  </th>
                  <th className="text-center p-3 font-heading font-semibold text-xs w-[14%]">
                    Swasta<br />Kecil
                  </th>
                  <th className="text-center p-3 font-heading font-semibold text-xs text-gold rounded-tr-xl w-[14%]">
                    EPC/<br />Industri
                  </th>
                </tr>
              </thead>
              <tbody>
                {matriksKebutuhan.map((row, i) => (
                  <tr key={row.jenis} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3 align-top">
                      <Link
                        href={row.href}
                        className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full no-underline mb-1 ${row.warnaBadge}`}
                      >
                        {row.jenis}
                      </Link>
                      <p className="text-[0.65rem] text-[#5A6472] leading-tight">{row.keterangan}</p>
                    </td>
                    {[row.proyekPemerintah, row.proyekSwastaBesar, row.proyekSwastaKecil, row.proyekIndustri].map(
                      (val, j) => (
                        <td key={j} className="p-3 text-center align-middle">
                          {val ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-navy text-white text-xs font-bold">
                              ✓
                            </span>
                          ) : (
                            <span className="text-black/15 text-lg">—</span>
                          )}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6472] mb-10">
            ✓ = Wajib atau sangat dianjurkan. — = Tidak relevan atau opsional.
            Tabel di atas adalah panduan umum — kondisi kontrak spesifik bisa berbeda.
          </p>

          {/* Timeline per Fase */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Timeline Lengkap: Kapan Mengurus Asuransi Apa?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Kesalahan paling umum kontraktor adalah mengurus asuransi terlambat. Berikut urutan
            kronologis yang harus diikuti — dari sebelum tender hingga FHO:
          </p>
          <div className="relative flex flex-col gap-0 mb-10">
            {timelineProyek.map((t, i) => (
              <div key={i} className="flex gap-4">
                {/* Garis timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-navy border-2 border-gold/40 flex items-center justify-center text-base flex-shrink-0 z-10">
                    {t.ikon}
                  </div>
                  {i < timelineProyek.length - 1 && (
                    <div className="w-0.5 bg-gold/20 flex-1 my-1" style={{ minHeight: "24px" }} />
                  )}
                </div>
                {/* Konten */}
                <div className={`pb-6 flex-1 border-l-2 pl-4 ${t.warna}`} style={{ marginLeft: "-1px" }}>
                  <div className="flex items-start gap-3 flex-wrap mb-1">
                    <span className="font-heading font-bold text-navy text-sm">{t.fase}</span>
                    <span className="text-[0.65rem] text-[#5A6472] bg-cream border border-black/8 px-2 py-0.5 rounded-full">
                      {t.waktu}
                    </span>
                  </div>
                  <p className="font-semibold text-navy2 text-sm mb-1">{t.aksi}</p>
                  <p className="text-xs text-[#475569] leading-relaxed mb-2">{t.detail}</p>
                  {t.produk && t.hrefProduk && (
                    <Link
                      href={t.hrefProduk}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold2 no-underline transition-colors"
                    >
                      → {t.produk}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Profil per jenis kontraktor */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Kebutuhan Asuransi Berdasarkan Profil Kontraktor
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Kebutuhan berbeda signifikan tergantung skala dan jenis pekerjaan.
            Temukan profil yang paling mendekati kondisi Anda:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {profilKontraktor.map((p) => (
              <div key={p.profil} className={`rounded-card p-5 border ${p.warna}`}>
                <div className="flex items-start gap-3 mb-4 flex-wrap">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <div className="font-heading font-bold text-navy text-[0.95rem]">{p.profil}</div>
                    <div className="text-xs text-[#475569] mt-0.5">{p.nilaiProyek}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-2">
                      Wajib / Sangat Dianjurkan
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {p.asuransiWajib.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-navy font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                          <span className="text-xs text-navy2 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-wide text-[#5A6472] mb-2">
                      Dianjurkan / Kondisional
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {p.asuransiDianjurkan.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold font-bold text-xs flex-shrink-0 mt-0.5">+</span>
                          <span className="text-xs text-[#475569] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-start">
                  <div className="bg-white/70 rounded-lg px-3.5 py-2.5 border border-black/6 flex-1 min-w-[200px]">
                    <div className="text-[0.65rem] text-[#5A6472] uppercase tracking-wide font-semibold mb-0.5">
                      Estimasi total biaya asuransi
                    </div>
                    <div className="font-heading font-bold text-navy text-sm">{p.estimasiBiaya}</div>
                  </div>
                  <div className="bg-white/70 rounded-lg px-3.5 py-2.5 border border-black/6 flex-[2] min-w-[200px]">
                    <div className="text-[0.65rem] text-[#5A6472] uppercase tracking-wide font-semibold mb-0.5">
                      Contoh
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">{p.contoh}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kasus Nyata */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Kasus Nyata — Apa yang Terjadi Jika Ada (dan Tidak Ada) Asuransi
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Berikut tiga kasus dari pengalaman kami mendampingi kontraktor di Yogyakarta — dua
            berakhir baik karena asuransi yang tepat, satu berakhir buruk karena tidak siap:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {kasusNyata.map((k) => (
              <div key={k.judul} className={`rounded-card p-5 border ${k.badge}`}>
                <div className="flex items-start gap-3 mb-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                      <span className="font-heading font-bold text-navy text-sm">{k.judul}</span>
                      <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${k.badge}`}>
                        {k.jenis}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-navy2">Nilai: {k.nilai}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Kronologi", val: k.kronologi },
                    { label: "Hasil", val: k.hasil },
                    { label: "💡 Pelajaran", val: k.pelajaran },
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

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">
              Ingin tahu kebutuhan asuransi spesifik untuk proyek Anda?
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Ceritakan jenis proyek, nilai kontrak, dan apakah proyek pemerintah atau swasta —
              kami rekomendasikan kombinasi perlindungan yang paling efisien dan sesuai anggaran.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                💬 Konsultasi via WA — Gratis
              </a>
              <Link
                href="/asuransi-engineering"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                ⚙️ Produk Engineering →
              </Link>
              <Link
                href="/asuransi-surety-bond"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                📋 Produk Surety Bond →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan yang Sering Diajukan Kontraktor
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
              Panduan & Produk Terkait
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/asuransi-engineering/contractor-all-risk",
                  icon: "🏗️",
                  judul: "Asuransi CAR — Halaman Produk",
                  desc: "Cakupan lengkap, kalkulator premi, dan cara klaim CAR",
                },
                {
                  href: "/asuransi-surety-bond/jaminan-pelaksanaan",
                  icon: "🏆",
                  judul: "Jaminan Pelaksanaan",
                  desc: "Panduan lengkap jaminan terpenting setelah menang tender",
                },
                {
                  href: "/artikel/syarat-asuransi-tender-pemerintah-diy",
                  icon: "📋",
                  judul: "Syarat Asuransi Tender Pemerintah DIY",
                  desc: "Timeline dan checklist lengkap semua jaminan tender",
                },
                {
                  href: "/artikel/premi-asuransi-car-jogja",
                  icon: "💰",
                  judul: "Berapa Premi CAR di Jogja?",
                  desc: "Tabel estimasi untuk berbagai skala proyek konstruksi",
                },
                {
                  href: "/artikel/perbedaan-car-ear-asuransi-engineering",
                  icon: "⚙️",
                  judul: "Perbedaan CAR vs EAR",
                  desc: "Panduan memilih produk engineering yang tepat",
                },
                {
                  href: "/asuransi-liability/employer-liability",
                  icon: "🛡️",
                  judul: "Employer Liability",
                  desc: "Perlindungan dari tuntutan hukum tenaga kerja proyek",
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
              Satu Praktisi untuk Semua<br />
              Kebutuhan Asuransi Kontraktor Anda
            </h2>
            <p className="text-white/75 text-sm max-w-[460px] mx-auto mb-8">
              CAR, Surety Bond, Employer Liability — kami tangani semuanya dalam satu koordinasi.
              Kontraktor di Yogyakarta yang bekerja dengan kami tidak pernah gagal tender karena
              masalah dokumen asuransi.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <Link
                href="/asuransi-engineering"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                ⚙️ Produk Engineering
              </Link>
              <Link
                href="/asuransi-surety-bond"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                📋 Produk Surety Bond
              </Link>
            </div>
          </div>
        </section>

    </>
  );
}
