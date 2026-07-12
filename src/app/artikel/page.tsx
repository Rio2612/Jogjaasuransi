import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Artikel Edukasi Asuransi – Tips & Panduan untuk Anda",
  description: "Artikel dan panduan asuransi dari praktisi Yogyakarta. Pelajari cara klaim, asuransi kendaraan, properti, engineering, liability, surety bond, dan tips asuransi bisnis.",
  keywords: "artikel asuransi jogja, edukasi asuransi yogyakarta, tips asuransi, cara klaim asuransi mobil, asuransi kendaraan jogja, asuransi properti jogja, asuransi engineering, surety bond jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel" },
  openGraph: {
    title: "Artikel Edukasi Asuransi – Asuransi Jogja",
    description: "Panduan dan tips asuransi dari praktisi berpengalaman di Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel",
  },
};

const ARTIKEL = [
  // ── Kendaraan ──────────────────────────────────────────────────────────────
  {
    slug: "cara-klaim-asuransi-mobil",
    icon: "🚗",
    kategori: "Kendaraan",
    judul: "Cara Klaim Asuransi Mobil: Panduan Lengkap Step-by-Step",
    ringkasan: "Kecelakaan atau kerusakan mobil bisa sangat stres. Tapi dengan mengetahui prosedur klaim yang benar, proses ganti rugi bisa berjalan lancar dan cepat. Simak panduan lengkapnya.",
    menit: "8 menit",
  },
  {
    slug: "perbedaan-all-risk-tlo",
    icon: "⚖️",
    kategori: "Kendaraan",
    judul: "Perbedaan All Risk dan TLO: Mana yang Tepat untuk Mobil Anda?",
    ringkasan: "All Risk menanggung kerusakan ringan hingga berat, TLO hanya menanggung kehilangan atau kerusakan parah. Pahami perbedaannya sebelum memilih produk asuransi kendaraan.",
    menit: "7 menit",
  },
  {
    slug: "cara-menghitung-premi-asuransi-mobil",
    icon: "🧮",
    kategori: "Kendaraan",
    judul: "Cara Menghitung Premi Asuransi Mobil Berdasarkan Tarif OJK",
    ringkasan: "Premi asuransi mobil dihitung berdasarkan tarif referensi OJK, wilayah plat, dan harga kendaraan. Pelajari cara menghitungnya sendiri agar tidak kaget saat membeli polis.",
    menit: "8 menit",
  },
  {
    slug: "asuransi-kendaraan-jogja",
    icon: "🏙️",
    kategori: "Kendaraan",
    judul: "Panduan Asuransi Kendaraan di Jogja: Pilihan, Tarif, dan Tips",
    ringkasan: "Memilih asuransi kendaraan di Yogyakarta perlu mempertimbangkan wilayah, jenis kendaraan, dan produk yang tersedia. Panduan lengkap khusus untuk warga Jogja.",
    menit: "9 menit",
  },
  {
    slug: "asuransi-mobil-listrik",
    icon: "⚡",
    kategori: "Kendaraan",
    judul: "Asuransi Mobil Listrik: Apa Bedanya dengan Mobil Konvensional?",
    ringkasan: "Mobil listrik memiliki risiko yang berbeda dari mobil BBM — baterai, charging port, dan komponen elektronik perlu perlindungan khusus. Ketahui cara asuransinya.",
    menit: "7 menit",
  },
  {
    slug: "asuransi-mobil-bekas",
    icon: "🔑",
    kategori: "Kendaraan",
    judul: "Asuransi Mobil Bekas: Apakah Layak dan Bagaimana Caranya?",
    ringkasan: "Banyak yang ragu mengasuransikan mobil bekas. Padahal mobil second justru lebih berisiko. Pelajari syarat, tips, dan produk yang tepat untuk kendaraan bekas Anda.",
    menit: "6 menit",
  },
  {
    slug: "asuransi-mobil-banjir",
    icon: "🌊",
    kategori: "Kendaraan",
    judul: "Asuransi Mobil Banjir: Ditanggung atau Tidak? Ini Faktanya",
    ringkasan: "Tidak semua polis asuransi otomatis menanggung kerusakan akibat banjir. Pahami klausul perluasan banjir dan cara memastikan kendaraan Anda terlindungi dari risiko ini.",
    menit: "6 menit",
  },
  {
    slug: "bengkel-rekanan-asuransi-jogja",
    icon: "🔧",
    kategori: "Kendaraan",
    judul: "Bengkel Rekanan Asuransi di Jogja: Panduan Memilih & Daftar Lengkap",
    ringkasan: "Salah satu penentu kepuasan klaim kendaraan adalah bengkel rekanan. Pelajari cara memilih bengkel rekanan yang tepat dan apa yang perlu diketahui sebelum membawa kendaraan.",
    menit: "6 menit",
  },
  {
    slug: "asuransi-rental-mobil-jogja",
    icon: "🚌",
    kategori: "Kendaraan",
    judul: "Asuransi Kendaraan untuk Rental & Wisata: Panduan Pemilik Armada",
    ringkasan: "Pemilik usaha rental mobil dan kendaraan wisata di Jogja wajib memiliki proteksi yang tepat. Pelajari jenis asuransi yang sesuai untuk armada komersial Anda.",
    menit: "7 menit",
  },
  {
    slug: "asuransi-armada-fleet-jogja",
    icon: "🚐",
    kategori: "Kendaraan",
    judul: "Asuransi Armada/Fleet Perusahaan di Jogja: Panduan Konsolidasi Polis",
    ringkasan: "Perusahaan dengan 5+ kendaraan operasional bisa hemat signifikan dengan konsolidasi ke polis fleet. Pelajari kapan saatnya beralih dan cara menghitung penghematannya.",
    menit: "7 menit",
  },
  {
    slug: "asuransi-truk-niaga-jogja",
    icon: "🚛",
    kategori: "Kendaraan",
    judul: "Asuransi Dump Truk & Truk Niaga di Jogja: Panduan untuk Kontraktor",
    ringkasan: "Dump truk dan tronton proyek punya profil risiko berbeda dari mobil pribadi. Pelajari cakupan yang tepat untuk kendaraan niaga berat di proyek dan tambang DIY.",
    menit: "7 menit",
  },

  // ── Properti ───────────────────────────────────────────────────────────────
  {
    slug: "asuransi-rumah-tinggal-jogja",
    icon: "🏡",
    kategori: "Properti",
    judul: "Asuransi Rumah Tinggal di Jogja: Panduan Lengkap untuk Pemilik Hunian",
    ringkasan: "Rumah adalah aset terbesar bagi kebanyakan orang. Ketahui cara melindungi hunian Anda di Yogyakarta dari kebakaran, banjir, gempa bumi, dan risiko lainnya.",
    menit: "8 menit",
  },
  {
    slug: "asuransi-kos-jogja",
    icon: "🏘️",
    kategori: "Properti",
    judul: "Asuransi Kos-kosan Jogja: Proteksi Aset Investasi Properti Anda",
    ringkasan: "Kos-kosan adalah investasi populer di Yogyakarta. Namun banyak pemilik kos belum mengasuransikan bangunannya. Pelajari cara melindungi aset properti Anda.",
    menit: "7 menit",
  },
  {
    slug: "asuransi-vila-homestay-jogja",
    icon: "🏖️",
    kategori: "Properti",
    judul: "Asuransi Vila & Homestay di Jogja: Proteksi untuk Bisnis Hospitality",
    ringkasan: "Vila dan homestay di sekitar Yogyakarta membutuhkan perlindungan khusus. Pelajari jenis risiko dan produk asuransi yang tepat untuk bisnis penginapan Anda.",
    menit: "8 menit",
  },

  // ── Engineering ────────────────────────────────────────────────────────────
  {
    slug: "perbedaan-car-ear-asuransi-engineering",
    icon: "🏗️",
    kategori: "Engineering",
    judul: "Perbedaan CAR dan EAR: Panduan Memilih Asuransi Engineering yang Tepat",
    ringkasan: "Contractor All Risk (CAR) dan Erection All Risk (EAR) seringkali tertukar. Padahal keduanya punya cakupan berbeda. Pahami perbedaannya sebelum mengajukan polis proyek.",
    menit: "9 menit",
  },
  {
    slug: "asuransi-mesin-pabrik-jogja",
    icon: "⚙️",
    kategori: "Engineering",
    judul: "Asuransi Mesin & Peralatan Pabrik di Jogja: Panduan Machinery Breakdown",
    ringkasan: "Kerusakan mesin bisa menghentikan seluruh operasional pabrik. Machinery Breakdown Insurance hadir untuk melindungi aset produksi dari kerusakan mendadak yang tidak terduga.",
    menit: "8 menit",
  },
  {
    slug: "asuransi-kontraktor-proyek-jogja",
    icon: "👷",
    kategori: "Engineering",
    judul: "Asuransi Kontraktor & Proyek di Jogja: Apa Saja yang Perlu Dilindungi?",
    ringkasan: "Proyek konstruksi penuh dengan risiko — dari kecelakaan kerja hingga kerusakan material. Pelajari jenis asuransi yang wajib dimiliki kontraktor di Yogyakarta.",
    menit: "10 menit",
  },
  {
    slug: "premi-asuransi-car-jogja",
    icon: "💰",
    kategori: "Engineering",
    judul: "Berapa Premi Asuransi CAR di Jogja? Panduan Estimasi Biaya Proyek",
    ringkasan: "Premi Contractor All Risk dipengaruhi oleh nilai kontrak, durasi proyek, dan jenis pekerjaan. Pelajari cara mengestimasi biaya asuransi CAR untuk proyek konstruksi Anda.",
    menit: "8 menit",
  },

  // ── Liability ──────────────────────────────────────────────────────────────
  {
    slug: "perbedaan-jenis-asuransi-liability",
    icon: "🛡️",
    kategori: "Liability",
    judul: "Jenis-Jenis Asuransi Liability: Public, Product, Employer, dan Limbah B3",
    ringkasan: "Asuransi liability punya banyak varian. Masing-masing menanggung risiko yang berbeda. Pahami perbedaannya agar bisnis Anda terlindungi dari tuntutan hukum yang tepat.",
    menit: "9 menit",
  },
  {
    slug: "cara-klaim-asuransi-liability",
    icon: "📋",
    kategori: "Liability",
    judul: "Cara Klaim Asuransi Liability: Langkah-Langkah saat Menghadapi Gugatan",
    ringkasan: "Menghadapi gugatan pihak ketiga bisa sangat menegangkan. Ketahui langkah-langkah yang harus dilakukan saat terjadi insiden dan bagaimana mengajukan klaim liability.",
    menit: "8 menit",
  },
  {
    slug: "contoh-kasus-gugatan-liability-bisnis",
    icon: "⚖️",
    kategori: "Liability",
    judul: "Contoh Kasus Gugatan Liability Bisnis dan Bagaimana Asuransi Membantu",
    ringkasan: "Dari toko yang menyebabkan cedera pengunjung hingga produk cacat yang merugikan konsumen — inilah contoh nyata kasus liability dan bagaimana asuransi menyelamatkan bisnis.",
    menit: "9 menit",
  },
  {
    slug: "employer-liability-panduan-jogja",
    icon: "🤝",
    kategori: "Liability",
    judul: "Asuransi Employer's Liability: Tanggung Jawab kepada Karyawan",
    ringkasan: "BPJS Ketenagakerjaan saja tidak cukup melindungi perusahaan dari gugatan perdata karyawan. Pahami kapan Employer's Liability dibutuhkan dan bagaimana keduanya saling melengkapi.",
    menit: "6 menit",
  },
  {
    slug: "limbah-b3-liability-jogja",
    icon: "🏭",
    kategori: "Liability",
    judul: "Asuransi Liability Limbah B3: Proteksi dari Gugatan Pencemaran",
    ringkasan: "Industri yang menghasilkan limbah B3 menghadapi risiko gugatan pencemaran lingkungan. Pelajari apa yang ditanggung polis ini dan siapa yang membutuhkannya.",
    menit: "6 menit",
  },

  // ── Surety Bond ────────────────────────────────────────────────────────────
  {
    slug: "cara-mengurus-jaminan-penawaran-jogja",
    icon: "📄",
    kategori: "Surety Bond",
    judul: "Cara Mengurus Jaminan Penawaran (Bid Bond) untuk Tender di Jogja",
    ringkasan: "Jaminan penawaran wajib untuk mengikuti lelang proyek pemerintah maupun swasta. Pelajari syarat, dokumen, dan proses pengurusannya agar tender Anda berjalan lancar.",
    menit: "7 menit",
  },
  {
    slug: "syarat-asuransi-tender-pemerintah-diy",
    icon: "🏛️",
    kategori: "Surety Bond",
    judul: "Syarat Asuransi & Surety Bond untuk Tender Pemerintah DIY",
    ringkasan: "Proyek pemerintah di Daerah Istimewa Yogyakarta memiliki persyaratan jaminan yang ketat. Ketahui jenis-jenis bond yang diperlukan dan cara mengurusnya dengan benar.",
    menit: "8 menit",
  },
  {
    slug: "jaminan-pelaksanaan-pemeliharaan-uang-muka",
    icon: "📄",
    kategori: "Surety Bond",
    judul: "Siklus Jaminan Proyek: Pelaksanaan, Uang Muka & Pemeliharaan",
    ringkasan: "Setelah menang tender, kontraktor masih harus melewati 3 fase jaminan. Pahami kapan masing-masing dibutuhkan dari mulai proyek hingga serah terima akhir.",
    menit: "8 menit",
  },

  // ── Bisnis & Panduan Umum ──────────────────────────────────────────────────
  {
    slug: "asuransi-umkm-jogja",
    icon: "🏪",
    kategori: "Bisnis",
    judul: "Panduan Asuransi untuk UMKM di Jogja: Proteksi Tepat, Premi Efisien",
    ringkasan: "UMKM Yogyakarta punya risiko yang unik — dari kebakaran toko hingga kerusakan stok barang. Pelajari produk asuransi yang tepat dan terjangkau untuk usaha kecil menengah.",
    menit: "9 menit",
  },
  {
    slug: "asuransi-kargo-umkm-jogja",
    icon: "📦",
    kategori: "Kargo",
    judul: "Asuransi Kargo untuk UMKM di Jogja: Proteksi Pengiriman Barang",
    ringkasan: "Pelaku UMKM dan penjual online di Yogyakarta rentan kehilangan barang saat pengiriman. Pelajari produk asuransi kargo yang terjangkau khusus untuk skala usaha kecil.",
    menit: "7 menit",
  },
  {
    slug: "cara-klaim-asuransi-kargo",
    icon: "📋",
    kategori: "Kargo",
    judul: "Cara Klaim Asuransi Kargo: Panduan Agar Dana Ganti Rugi Cair",
    ringkasan: "Klaim kargo punya prosedur dan dokumen yang berbeda dari klaim kendaraan. Pelajari langkah-langkah lengkap agar klaim Anda tidak ditolak dan dana cair tepat waktu.",
    menit: "8 menit",
  },
  {
    slug: "asuransi-kargo-ekspor-impor-jogja",
    icon: "📦",
    kategori: "Kargo",
    judul: "Asuransi Kargo Ekspor-Impor Udara & Laut: Panduan Klausul ICC",
    ringkasan: "Eksportir kerajinan dan furnitur di Jogja perlu memahami perbedaan klausul ICC A, B, dan C. Pelajari mana yang tepat untuk jalur laut maupun udara.",
    menit: "7 menit",
  },
  {
    slug: "pentingnya-asuransi-dunia-usaha-jogja",
    icon: "🏢",
    kategori: "Bisnis",
    judul: "Pentingnya Asuransi di Dunia Usaha Yogyakarta",
    ringkasan: "Yogyakarta adalah kota dengan ekosistem bisnis yang dinamis. Namun banyak pelaku usaha UMKM dan korporasi belum memiliki proteksi yang memadai. Mengapa asuransi bisnis itu penting?",
    menit: "7 menit",
  },
  {
    slug: "cara-menghitung-nilai-asuransi",
    icon: "🧮",
    kategori: "Panduan",
    judul: "Cara Menghitung Nilai Asuransi yang Tepat (Avoid Underinsurance)",
    ringkasan: "Banyak pemegang polis rugi besar bukan karena tidak punya asuransi, tapi karena nilai pertanggungannya terlalu kecil. Pelajari cara menghitung nilai asuransi yang benar.",
    menit: "9 menit",
  },
];

const KATEGORI_LIST = ["Semua", "Kendaraan", "Properti", "Engineering", "Liability", "Surety Bond", "Bisnis", "Panduan"];

const schemaArtikelList = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Artikel Edukasi Asuransi – Asuransi Jogja",
  "url": "https://asuransijogja.biz.id/artikel",
  "description": "Kumpulan artikel dan panduan asuransi dari praktisi asuransi kerugian di Yogyakarta.",
  "publisher": { "@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id" },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": ARTIKEL.map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://asuransijogja.biz.id/artikel/${a.slug}`,
      "name": a.judul,
    })),
  },
};

// Internal links per kategori produk (untuk SEO internal linking)
const INTERNAL_LINKS: Record<string, { href: string; label: string }[]> = {
  Kendaraan:   [{ href: "/asuransi-kendaraan", label: "Asuransi Kendaraan" }, { href: "/asuransi-kendaraan/mobil", label: "Asuransi Mobil" }, { href: "/asuransi-kendaraan/armada-fleet", label: "Armada & Fleet" }],
  Properti:    [{ href: "/asuransi-properti", label: "Asuransi Properti" }, { href: "/asuransi-properti/kebakaran", label: "Kebakaran" }, { href: "/asuransi-properti/banjir-gempa", label: "Banjir & Gempa" }],
  Engineering: [{ href: "/asuransi-engineering", label: "Engineering Insurance" }, { href: "/asuransi-engineering/contractor-all-risk", label: "Contractor All Risk" }, { href: "/asuransi-engineering/machinery-breakdown", label: "Machinery Breakdown" }],
  Liability:   [{ href: "/asuransi-liability", label: "Liability Insurance" }, { href: "/asuransi-liability/public-liability", label: "Public Liability" }, { href: "/asuransi-liability/limbah-b3", label: "Limbah B3" }],
  "Surety Bond":[{ href: "/asuransi-surety-bond", label: "Surety Bond" }, { href: "/asuransi-surety-bond/jaminan-penawaran", label: "Jaminan Penawaran" }, { href: "/asuransi-surety-bond/jaminan-pelaksanaan", label: "Jaminan Pelaksanaan" }],
  Bisnis:      [{ href: "/asuransi-properti", label: "Asuransi Properti" }, { href: "/asuransi-kargo", label: "Asuransi Kargo" }, { href: "/asuransi-liability", label: "Liability Insurance" }],
  Panduan:     [{ href: "/asuransi-kendaraan", label: "Asuransi Kendaraan" }, { href: "/asuransi-properti", label: "Asuransi Properti" }, { href: "/asuransi-engineering", label: "Engineering Insurance" }],
};

export default function ArtikelIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikelList) }} />

      {/* HERO */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10 max-w-2xl">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-3">Edukasi Asuransi</div>
          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.2] mb-4">
            Artikel &amp; Panduan<br /><em className="not-italic text-gold">Asuransi untuk Anda</em>
          </h1>
          <p className="text-white/85 text-sm leading-[1.85] max-w-[480px]">
            Pahami asuransi sebelum membeli. Artikel berikut ditulis berdasarkan pengalaman 8 tahun sebagai praktisi asuransi di Yogyakarta.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <span className="bg-gold/15 border border-gold/30 text-gold2 text-xs font-semibold px-3 py-1.5 rounded-full">{ARTIKEL.length} Artikel</span>
            <span className="bg-white/8 border border-white/15 text-white/65 text-xs font-semibold px-3 py-1.5 rounded-full">Kendaraan · Properti · Engineering · Liability · Surety Bond</span>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Artikel</span>
        </div>
      </div>

      {/* KATEGORI TABS — static, rendered server-side untuk SEO */}
      <div className="bg-white border-b border-black/6 px-[5vw] py-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {KATEGORI_LIST.map(k => (
            <span
              key={k}
              className={`px-4 py-1.5 rounded-full border text-[0.82rem] font-semibold whitespace-nowrap ${
                k === "Semua"
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-[#64748B] border-black/10"
              }`}
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* ARTIKEL GRID — grouped by kategori */}
      {KATEGORI_LIST.filter(k => k !== "Semua").map(kat => {
        const items = ARTIKEL.filter(a => a.kategori === kat);
        if (items.length === 0) return null;
        const links = INTERNAL_LINKS[kat] ?? [];
        return (
          <section key={kat} className="py-12 px-[5vw] bg-white border-b border-black/5">
            <div className="max-w-5xl mx-auto">
              {/* Section header */}
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h2 className="font-heading text-navy text-xl font-bold">{kat}</h2>
                {links.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {links.map(l => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="text-[0.75rem] font-semibold text-gold border border-gold/30 bg-gold/5 px-3 py-1 rounded-full hover:bg-gold/15 transition-colors no-underline"
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map(a => (
                  <Link key={a.slug} href={`/artikel/${a.slug}`} className="no-underline group">
                    <article className="border border-black/8 rounded-card p-6 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-2xl">{a.icon}</span>
                        <span className="bg-gold/10 border border-gold/20 text-gold text-[0.72rem] font-bold px-2 py-0.5 rounded-full">{a.kategori}</span>
                      </div>
                      <h3 className="font-heading text-navy font-bold text-[0.98rem] leading-[1.35] mb-2 group-hover:text-gold transition-colors">{a.judul}</h3>
                      <p className="text-[0.82rem] leading-relaxed text-[#64748B] mb-4 line-clamp-3">{a.ringkasan}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs text-[#94A3B8]">⏱ {a.menit} baca</span>
                        <span className="text-gold text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Baca →</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 px-[5vw] bg-cream text-center">
        <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-navy mb-3">Masih Ada Pertanyaan?</h2>
        <p className="text-base text-[#64748B] max-w-[440px] mx-auto mb-6">Konsultasi langsung dengan Pak Rio — gratis, tanpa tekanan, dan mendapat rekomendasi yang benar-benar sesuai kebutuhan Anda.</p>
        <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Gratis via WhatsApp</a>
      </section>
    </>
  );
}
