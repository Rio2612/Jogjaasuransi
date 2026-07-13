import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import KalkulatorProperti from "@/components/properti/KalkulatorProperti";
import CTAPenawaran from "@/components/ui/CTAPenawaran";
import { KONTAK } from "@/lib/data";


export const metadata: Metadata = {
  title: "Asuransi Properti Jogja – Rumah, Kos, Ruko, Vila & Gedung Komersial",
  description:
    "Praktisi asuransi properti independen di Yogyakarta. Lindungi rumah, kos, ruko, vila, dan gedung komersial dari kebakaran, banjir, gempa Merapi, dan risiko katastrofe. Kalkulator premi gratis. Konsultasi tanpa biaya.",
  keywords:
    "asuransi properti jogja, asuransi kebakaran yogyakarta, asuransi rumah jogja, property all risk jogja, asuransi kos yogyakarta, asuransi vila jogja, asuransi ruko yogyakarta, asuransi gedung komersial jogja, asuransi banjir gempa yogyakarta, nilai pertanggungan properti, kalkulator premi asuransi properti",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-properti" },
  openGraph: {
    title: "Asuransi Properti Jogja – Rumah, Kos, Ruko, Vila & Gedung",
    description:
      "Solusi perlindungan properti lengkap di Yogyakarta. Kebakaran, PAR, banjir, gempa, hingga Business Interruption. Kalkulator premi & konsultasi gratis.",
    url: "https://asuransijogja.biz.id/asuransi-properti",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Properti Jogja – Rumah, Kos, Ruko, Vila & Gedung" }],
  },
};

// ─── FAQ SCHEMA ──────────────────────────────────────────────────────────────
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa saja yang dijamin asuransi properti di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tergantung produk yang dipilih. Asuransi kebakaran menjamin risiko FLEXAS (Fire, Lightning, Explosion, Aircraft impact, Smoke). Property All Risk menjamin semua risiko fisik kecuali yang dikecualikan. Perluasan tersedia untuk banjir, gempa bumi, angin topan, letusan vulkanik, dan Business Interruption.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bangunan kos-kosan dan ruko bisa diasuransikan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Semua jenis properti — rumah tinggal, kos-kosan, ruko, toko, gudang, kantor, vila, hotel, dan properti komersial lainnya — dapat diasuransikan. Premi dihitung berdasarkan kelas konstruksi (Kelas 1/2/3), nilai pertanggungan, lokasi, dan perluasan risiko yang dipilih.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu kelas konstruksi 1, 2, dan 3 dalam asuransi properti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kelas konstruksi menentukan tingkat risiko dan besaran premi. Kelas 1 (konstruksi beton/bata permanen) memiliki premi paling rendah. Kelas 2 (semi permanen, campuran beton dan kayu) berpremi sedang. Kelas 3 (kayu, bambu, atau material mudah terbakar) berpremi paling tinggi karena risiko kebakaran lebih besar.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu underinsurance dan bagaimana cara menghindarinya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Underinsurance terjadi ketika nilai pertanggungan yang ditetapkan lebih rendah dari biaya penggantian nyata bangunan. Akibatnya, ganti rugi klaim dibayarkan secara proporsional — bukan penuh. Cara menghindarinya: tetapkan nilai pertanggungan berdasarkan replacement cost (biaya membangun ulang), bukan harga jual pasar, dan perbarui nilai secara berkala setiap 2–3 tahun.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah perluasan gempa bumi wajib untuk properti di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sangat direkomendasikan, hampir wajib. Yogyakarta berada di zona seismik aktif dan pernah mengalami gempa destruktif pada 2006 yang merusak lebih dari 150.000 bangunan. Perluasan gempa ditambahkan sebagai endorsement pada polis kebakaran atau PAR dengan biaya surcharge sekitar 7–15% dari premi dasar.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses klaim asuransi properti setelah kebakaran atau bencana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klaim sederhana (kerusakan parsial) umumnya selesai dalam 14–30 hari kerja setelah dokumen lengkap dan survei loss adjustor selesai. Klaim besar seperti kebakaran total atau gempa bisa memakan 30–60 hari. Laporan kejadian harus dilakukan maksimal 3×24 jam setelah musibah terjadi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah isi bangunan seperti perabot dan elektronik ikut terlindungi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bisa, dengan menambahkan jaminan isi bangunan (contents) dalam polis Anda. Nilai pertanggungan isi ditetapkan terpisah dari nilai bangunan. Untuk properti komersial seperti hotel atau vila, ini sangat penting karena nilai furnitur dan peralatan bisa mencapai 30–50% dari nilai bangunan.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan praktisi asuransi independen dengan agen perusahaan asuransi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agen perusahaan asuransi hanya menjual produk dari satu perusahaan dan bekerja untuk kepentingan perusahaan tersebut. Praktisi asuransi independen (seperti Asuransi Jogja) tidak terikat pada perusahaan manapun, bisa membandingkan produk dari berbagai insurer berlisensi OJK, dan mendampingi klien saat proses klaim.",
      },
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const clusters = [
  {
    href: "/asuransi-properti/kebakaran",
    icon: "🔥",
    batik: "✦",
    title: "Asuransi Kebakaran",
    subtitle: "Rumah · Kos · Ruko",
    desc: "Perlindungan dari kebakaran, petir, ledakan, dan asap untuk hunian dan bangunan komersial Anda di Yogyakarta.",
    tags: ["Rumah Tinggal", "Kos-kosan Jogja", "Ruko & Toko"],
  },
  {
    href: "/asuransi-properti/property-all-risk",
    icon: "🏢",
    batik: "◆",
    title: "Property All Risk",
    subtitle: "PAR – Proteksi Komprehensif",
    desc: "Perlindungan menyeluruh untuk properti komersial dan industri dari semua risiko fisik yang tidak dikecualikan.",
    tags: ["Gedung Kantor", "Hotel & Vila", "Pabrik & Gudang"],
  },
  {
    href: "/asuransi-properti/vila-homestay",
    icon: "🌿",
    batik: "❁",
    title: "Vila & Homestay",
    subtitle: "Properti Wisata Sewa Harian",
    desc: "Asuransi khusus untuk vila dan homestay yang disewakan via Airbnb, Tiket.com, atau Traveloka. Polis komersial valid, bukan residensial biasa.",
    tags: ["Airbnb & Tiket.com", "Vila Kaliurang", "Homestay Prawirotaman"],
  },
  {
    href: "/asuransi-properti/hotel-vila",
    icon: "🏨",
    batik: "❂",
    title: "Hotel & Vila Wisata",
    subtitle: "Properti Pariwisata Yogyakarta",
    desc: "Solusi asuransi lengkap untuk hotel, vila, guest house, dan homestay di destinasi wisata Yogyakarta.",
    tags: ["Hotel Bintang", "Vila & Resort", "Guest House"],
  },
  {
    href: "/asuransi-properti/banjir-gempa",
    icon: "🌋",
    batik: "❋",
    title: "Perluasan Banjir & Gempa",
    subtitle: "Risiko Katastrofe Yogyakarta",
    desc: "Jaminan tambahan kritis untuk properti di Yogyakarta dari banjir, gempa bumi, dan letusan Gunung Merapi.",
    tags: ["Banjir & Bandang", "Gempa Bumi", "Letusan Merapi"],
  },
];

const whyItems = [
  {
    icon: "🏛️",
    title: "Paham Risiko Lokal Jogja",
    desc: "8 tahun melayani klien di Yogyakarta. Kami memahami betul risiko banjir Kali Code, zona seismik Bantul, dan kondisi bangunan lokal.",
  },
  {
    icon: "🎯",
    title: "Analisis Kebutuhan Tepat",
    desc: "Bukan sekadar jual polis — kami analisis nilai pertanggungan, kelas konstruksi, risiko lokasi, dan kebutuhan spesifik Anda sebelum merekomendasikan produk.",
  },
  {
    icon: "🤝",
    title: "Pendampingan Klaim Penuh",
    desc: "Dari pelaporan kejadian, koordinasi loss adjuster, hingga dana cair — kami dampingi tanpa biaya tambahan. Berpihak 100% pada kepentingan Anda.",
  },
  {
    icon: "📋",
    title: "Produk Berlisensi OJK",
    desc: "Bermitra dengan perusahaan asuransi kerugian berlisensi OJK. Polis resmi, klaim terjamin, proses transparan sesuai regulasi POJK.",
  },
];

// FAQ yang lebih mendalam untuk halaman pilar
const faqItems = [
  {
    q: "Apa saja yang dijamin asuransi properti di Yogyakarta?",
    a: "Tergantung produk yang dipilih. Asuransi kebakaran menjamin risiko FLEXAS — kebakaran (Fire), petir (Lightning), ledakan (Explosion), kejatuhan pesawat (Aircraft impact), dan asap (Smoke). Property All Risk (PAR) menjamin hampir semua risiko fisik kecuali yang dikecualikan secara eksplisit. Perluasan tersedia untuk banjir, gempa bumi, angin topan, letusan vulkanik, dan Business Interruption.",
  },
  {
    q: "Apa itu kelas konstruksi 1, 2, dan 3 dalam polis asuransi properti?",
    a: "Kelas konstruksi menentukan tingkat risiko kebakaran bangunan dan berpengaruh langsung pada premi. Kelas 1 adalah bangunan beton/bata permanen — premi paling rendah. Kelas 2 adalah bangunan semi permanen, campuran beton dan kayu — premi menengah. Kelas 3 adalah bangunan kayu, bambu, atau material mudah terbakar — premi paling tinggi. Bangunan kos-kosan beton umumnya masuk Kelas 1.",
  },
  {
    q: "Apa itu underinsurance dan mengapa berbahaya?",
    a: "Underinsurance terjadi ketika nilai pertanggungan yang ditetapkan lebih rendah dari biaya penggantian nyata bangunan (replacement cost). Dampaknya fatal: jika terjadi klaim, asuransi hanya membayar secara proporsional. Misalnya, rumah bernilai Rp 500 juta tapi diasuransikan Rp 250 juta — saat klaim total, Anda hanya menerima 50% dari kerugian aktual. Selalu tetapkan nilai pertanggungan berdasarkan biaya membangun ulang, bukan harga jual termasuk tanah.",
  },
  {
    q: "Apakah perluasan gempa bumi wajib untuk properti di Yogyakarta?",
    a: "Sangat direkomendasikan — hampir wajib. Yogyakarta berada di zona seismik aktif dan dilintasi patahan Opak yang memicu gempa M5,9 pada 2006, merusak lebih dari 150.000 bangunan. Perluasan gempa ditambahkan sebagai endorsement pada polis kebakaran atau PAR dengan biaya surcharge sekitar 7–15% dari premi dasar. Untuk properti di Bantul (Zona 5) dan kawasan lereng Merapi di Sleman, ini tidak opsional.",
  },
  {
    q: "Apakah isi bangunan (perabot, elektronik) ikut terlindungi?",
    a: "Bisa, dengan menambahkan jaminan isi bangunan (contents) dalam polis Anda. Nilai pertanggungan isi ditetapkan terpisah dari nilai bangunan. Untuk properti komersial seperti hotel, vila, atau kos-kosan furnished, jaminan isi sangat penting — nilai furnitur dan peralatan elektronik bisa mencapai 30–50% dari nilai bangunan.",
  },
  {
    q: "Berapa lama proses penerbitan polis dan klaim asuransi properti?",
    a: "Penerbitan polis: rumah tinggal standar biasanya 1–2 hari kerja setelah dokumen lengkap; properti komersial atau PAR umumnya 3–5 hari kerja setelah survei. Proses klaim: lapor maksimal 3×24 jam setelah kejadian, survei loss adjuster, evaluasi dokumen, lalu pencairan. Klaim sederhana selesai dalam 14–30 hari kerja; klaim besar 30–60 hari.",
  },
  {
    q: "Apa perbedaan praktisi asuransi independen dengan agen asuransi biasa?",
    a: "Agen perusahaan asuransi hanya menjual produk dari satu perusahaan dan bekerja untuk kepentingan perusahaan tersebut — termasuk saat klaim. Praktisi independen seperti Asuransi Jogja tidak terikat pada satu perusahaan, bisa membandingkan penawaran dari berbagai insurer berlisensi OJK, menjelaskan semua klausul pengecualian secara jujur, dan mendampingi klien saat proses klaim.",
  },
  {
    q: "Apakah vila atau properti yang disewakan via Airbnb dan Tiket.com bisa diasuransikan?",
    a: "Ya, tapi Anda perlu produk yang tepat. Polis kebakaran residensial biasa umumnya tidak valid untuk properti yang dioperasikan secara komersial. Anda memerlukan endorsement komersial atau produk khusus properti wisata. Lihat halaman khusus kami tentang asuransi vila dan homestay untuk panduan lengkapnya.",
  },
];

// Langkah klaim — new section
const prosesKlaim = [
  {
    no: "01",
    icon: "📞",
    judul: "Lapor dalam 3×24 Jam",
    desc: "Hubungi praktisi atau perusahaan asuransi maksimal 3 hari setelah kejadian. Keterlambatan pelaporan bisa menjadi alasan klaim ditolak.",
  },
  {
    no: "02",
    icon: "📸",
    judul: "Dokumentasikan Kerusakan",
    desc: "Foto dan video seluruh kerusakan sebelum ada pembersihan atau perbaikan. Ini adalah bukti utama yang diverifikasi loss adjuster.",
  },
  {
    no: "03",
    icon: "📄",
    judul: "Siapkan Dokumen",
    desc: "Polis asuransi, KTP, IMB/PBG, foto kerusakan, surat keterangan kejadian (dari damkar/polisi/BPBD), dan daftar kerugian estimasi nilai.",
  },
  {
    no: "04",
    icon: "🔍",
    judul: "Survei Loss Adjuster",
    desc: "Adjustor dari perusahaan asuransi verifikasi kerusakan di lapangan. Praktisi kami hadir mendampingi untuk memastikan proses berjalan adil.",
  },
  {
    no: "05",
    icon: "✅",
    judul: "Persetujuan & Pencairan",
    desc: "Setelah dokumen lengkap dan survei selesai, surat persetujuan klaim diterbitkan. Dana ganti rugi dicairkan ke rekening Anda.",
  },
];

export default function AsuransiPropertiPage() {
  return (
    <PropertyLayout breadcrumbs={[{ label: "Asuransi Properti" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/8 font-heading text-[8rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>
            Asuransi Properti · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,4vw,3.8rem)] text-white leading-[1.15] mb-5">
            Lindungi Properti Anda<br />
            <em className="not-italic text-gold">dari Segala Risiko</em><br />
            di Yogyakarta
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-8">
            Rumah, kos, ruko, vila, hingga gedung komersial — semua aset properti Anda
            layak mendapat perlindungan yang tepat. Praktisi independen berpengalaman,
            analisis risiko lokasi, dan pendampingan klaim penuh.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 hover:-translate-y-px transition-all no-underline">
              💬 Konsultasi Gratis
            </a>
            <a href="#kalkulator" className="border border-white/25 text-white px-7 py-3 rounded-lg font-medium text-sm hover:border-gold/60 transition-all no-underline">
              🧮 Hitung Estimasi Premi
            </a>
          </div>
          {/* Trust signals */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10 flex-wrap">
            {[
              { num: "10+", lbl: "Tahun Pengalaman" },
              { num: "OJK", lbl: "Insurer Berlisensi" },
              { num: "Gratis", lbl: "Konsultasi & Klaim" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-xl font-bold">{s.num}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.lbl}</div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KENAPA ASURANSI PROPERTI PENTING — diperdalam ────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Penting?</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22] mb-3">
            Yogyakarta: Kota Budaya<br />dengan Risiko yang Nyata
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-[600px] mb-8">
            Di balik keindahan Malioboro dan kemegahan Prambanan, Yogyakarta menyimpan
            risiko geologi dan cuaca yang tidak boleh diabaikan pemilik properti.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "🌋",
                label: "Zona Aktif Merapi",
                stat: "150.000+",
                statLabel: "bangunan rusak di gempa 2006",
                desc: "Yogyakarta berada 30 km dari puncak Merapi, gunungapi paling aktif di Indonesia, dan dilintasi patahan Opak yang pernah memicu gempa destruktif M5,9 pada 27 Mei 2006.",
              },
              {
                icon: "🌊",
                label: "Rawan Banjir & Lahar",
                stat: "5 Sungai",
                statLabel: "berhulu di lereng Merapi",
                desc: "Kali Code, Kali Opak, Sungai Boyong, Gendol, dan Kuning mengalir dari Merapi melewati pemukiman padat. Musim hujan ekstrem dan pasca-erupsi meningkatkan risiko banjir bandang.",
              },
              {
                icon: "🔥",
                label: "Risiko Kebakaran",
                stat: "#1",
                statLabel: "penyebab kerugian properti",
                desc: "Korsleting listrik adalah penyebab kebakaran nomor satu di Indonesia. Bangunan padat, instalasi listrik lama yang belum diaudit, dan aktivitas usaha menciptakan risiko tinggi setiap hari.",
              },
            ].map((r) => (
              <div key={r.label} className="bg-white rounded-card p-6 border border-black/6">
                <div className="text-3xl mb-3">{r.icon}</div>
                <div className="font-heading text-navy font-bold text-[1.1rem] mb-1">{r.label}</div>
                <div className="font-heading text-gold text-[1.4rem] font-bold leading-none mb-0.5">{r.stat}</div>
                <div className="text-[#5A6472] text-xs mb-3">{r.statLabel}</div>
                <p className="text-sm leading-relaxed text-[#475569]">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Alert box underinsurance */}
          <div className="bg-navy rounded-[16px] p-6 flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <div className="font-heading text-gold font-semibold text-[0.95rem] mb-1">
                Bahaya Underinsurance yang Sering Diabaikan
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
                Menetapkan nilai pertanggungan terlalu rendah untuk menghemat premi adalah
                kesalahan yang mahal. Jika nilai bangunan Rp 500 juta tapi diasuransikan
                Rp 250 juta, saat klaim kebakaran total Anda hanya menerima{" "}
                <strong className="text-gold">50% dari kerugian aktual</strong>. Selalu
                gunakan <strong className="text-white">replacement cost</strong> (biaya
                membangun ulang), bukan harga jual properti termasuk tanah.{" "}
                <Link
                  href="/artikel/cara-menghitung-nilai-asuransi"
                  className="text-gold hover:underline"
                >
                  Pelajari cara menghitungnya →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLUSTER CARDS — ditambah vila-homestay ───────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Asuransi Properti</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
            Pilih Perlindungan<br />yang Tepat untuk Anda
          </h2>
          <p className="text-base text-[#475569] max-w-[480px] mx-auto mt-3">
            Setiap jenis properti memiliki profil risiko yang berbeda — kami bantu Anda
            menemukan produk yang paling sesuai
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clusters.map((c) => (
            <Link key={c.href} href={c.href} className="no-underline group">
              <div className="border border-black/8 rounded-card p-7 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                <div className="absolute top-4 right-5 text-gold/10 font-heading text-[3.5rem] leading-none select-none">{c.batik}</div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-[2rem] mb-3">{c.icon}</div>
                <div className="font-heading text-navy font-bold text-[1.15rem] mb-1">{c.title}</div>
                <div className="text-gold text-xs font-semibold mb-3">{c.subtitle}</div>
                <p className="text-sm leading-relaxed text-[#475569] mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className="bg-gold/8 border border-gold/15 text-navy2 text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <div className="mt-4 text-gold text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Pelajari lebih lanjut →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── KALKULATOR ───────────────────────────────────────────────────── */}
      <KalkulatorProperti />

      {/* ── PROSES KLAIM — section baru ──────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Proses Klaim</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
            Bagaimana Cara Klaim<br />Asuransi Properti?
          </h2>
          <p className="text-base text-[#475569] max-w-[480px] mx-auto mt-3">
            Klaim yang lancar dimulai dari persiapan yang baik. Berikut tahapan yang
            perlu Anda ikuti jika terjadi musibah pada properti Anda
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {prosesKlaim.map((step) => (
            <div
              key={step.no}
              className="bg-cream rounded-card p-5 border border-black/5 relative text-center"
            >
              <div className="absolute top-3 right-4 font-heading text-[1.8rem] font-bold text-navy/6">
                {step.no}
              </div>
              <div className="text-2xl mb-3">{step.icon}</div>
              <div className="font-heading text-navy font-bold text-[0.92rem] mb-2 leading-snug">
                {step.judul}
              </div>
              <p className="text-xs leading-[1.65] text-[#475569]">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto mt-6">
          <div className="bg-gold/8 border border-gold/20 rounded-[14px] p-5 flex gap-3 items-start">
            <span className="text-xl flex-shrink-0">🤝</span>
            <div>
              <div className="font-semibold text-navy text-sm mb-1">
                Praktisi Kami Mendampingi Seluruh Proses Klaim
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                Berbeda dengan membeli polis langsung dari agen perusahaan asuransi, klien
                Asuransi Jogja mendapat pendampingan penuh dari tahap pelaporan hingga
                pencairan dana — termasuk koordinasi dengan{" "}
                <strong className="text-navy">loss adjuster</strong> dan negosiasi nilai
                klaim jika diperlukan. Tanpa biaya tambahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Keunggulan Kami</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
            Mengapa Pilih<br />Praktisi Independen?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
          {whyItems.map((w) => (
            <div key={w.title} className="bg-white rounded-card p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all border border-black/5">
              <div className="text-3xl mb-3">{w.icon}</div>
              <div className="font-heading text-navy font-bold text-[1.05rem] mb-2">{w.title}</div>
              <p className="text-sm leading-relaxed text-[#475569]">{w.desc}</p>
            </div>
          ))}
        </div>

        {/* Perbandingan praktisi vs agen */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <div className="font-heading text-navy font-bold text-[0.95rem] mb-3 text-center">
            Praktisi Independen vs Agen Perusahaan Asuransi
          </div>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Aspek</th>
                <th className="text-left px-4 py-3 font-semibold">Agen Perusahaan Asuransi</th>
                <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold text-gold">Praktisi Independen ✓</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pilihan Produk", "Hanya 1 perusahaan", "Komparasi dari banyak insurer OJK"],
                ["Tujuan Utama", "Target penjualan perusahaan", "Kepentingan terbaik klien"],
                ["Penjelasan Klausul", "Fokus pada manfaat produk", "Termasuk semua pengecualian penting"],
                ["Pendampingan Klaim", "Mewakili perusahaan asuransi", "Mendampingi dan membela klien"],
                ["Analisis Risiko Lokasi", "Umumnya tidak tersedia", "Gratis, berdasarkan data lokal Jogja"],
                ["Biaya", "Gratis (komisi dari perusahaan)", "Gratis (komisi dari produk terpilih)"],
              ].map(([a, b, c], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                  <td className="px-4 py-3 font-semibold text-navy">{a}</td>
                  <td className="px-4 py-3 text-[#5A6472]">{b}</td>
                  <td className="px-4 py-3 text-green-700 font-medium">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ — diperluas 8 pertanyaan ─────────────────────────────────── */}
      <section id="faq" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
            Pertanyaan Seputar<br />Asuransi Properti
          </h2>
        </div>
        <div className="max-w-[700px] mx-auto">
          {faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-start list-none gap-4">
                <span>{f.q}</span>
                <span className="text-gold text-xl flex-shrink-0 transition-transform group-open:rotate-45 mt-0.5">+</span>
              </summary>
              <p className="text-base leading-[1.78] text-[#475569] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── SINERGI PRODUK + ARTIKEL EDUKASI — diperluas ─────────────────── */}
      <section className="py-12 px-[5vw] bg-white">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Properti + Liability */}
          <div className="bg-gold/6 border border-gold/25 rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Sinergi Produk</div>
              <h2 className="font-heading text-navy text-[1.5rem] mb-3">
                Properti + Liability =<br />Proteksi Bisnis Lengkap
              </h2>
              <p className="text-sm leading-relaxed text-[#475569]">
                Asuransi properti melindungi bangunan dari kerusakan fisik. Asuransi
                liability melindungi dari tuntutan hukum tamu, karyawan, dan pihak ketiga.
                Keduanya saling melengkapi untuk pemilik hotel, ruko, vila, dan properti
                komersial yang beroperasi setiap hari.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/asuransi-liability/public-liability" className="bg-white border border-black/8 rounded-xl p-4 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
                <span className="text-2xl">🤝</span>
                <div>
                  <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">Public Liability</div>
                  <div className="text-xs text-[#475569]">Perlindungan jika tamu cedera di properti Anda</div>
                </div>
                <span className="ml-auto text-gold text-sm">→</span>
              </Link>
              <Link href="/asuransi-properti/hotel-vila" className="bg-white border border-black/8 rounded-xl p-4 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
                <span className="text-2xl">🏨</span>
                <div>
                  <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">Asuransi Hotel & Vila Wisata</div>
                  <div className="text-xs text-[#475569]">Solusi khusus properti pariwisata Yogyakarta</div>
                </div>
                <span className="ml-auto text-gold text-sm">→</span>
              </Link>
              <Link href="/asuransi-liability" className="bg-white border border-black/8 rounded-xl p-4 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
                <span className="text-2xl">⚖️</span>
                <div>
                  <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">Semua Asuransi Liability</div>
                  <div className="text-xs text-[#475569]">Public, Employer, dan Environmental Liability</div>
                </div>
                <span className="ml-auto text-gold text-sm">→</span>
              </Link>
            </div>
          </div>

          {/* Artikel edukasi terkait */}
          <div className="bg-cream border border-black/6 rounded-[20px] p-8">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Edukasi & Panduan</div>
            <h3 className="font-heading text-navy text-[1.3rem] mb-5">
              Artikel Terkait Asuransi Properti
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/artikel/asuransi-vila-homestay-jogja",
                  icon: "🌿",
                  title: "Panduan Asuransi Vila & Homestay Jogja",
                  desc: "Proteksi properti wisata sewa harian, AirCover vs polis mandiri, estimasi premi",
                },
                {
                  href: "/artikel/asuransi-rumah-tinggal-jogja",
                  icon: "🏡",
                  title: "Panduan Asuransi Rumah Tinggal Jogja",
                  desc: "Risiko nyata hunian di DIY, cara klaim, dan estimasi premi",
                },
                {
                  href: "/artikel/asuransi-kos-jogja",
                  icon: "🏘️",
                  title: "Panduan Asuransi Kos-Kosan Jogja",
                  desc: "Risiko khusus kos mahasiswa, produk yang tepat, dan cara menghitung premi",
                },
                {
                  href: "/artikel/cara-menghitung-nilai-asuransi",
                  icon: "🧮",
                  title: "Cara Menghitung Nilai Pertanggungan",
                  desc: "Hindari underinsurance — panduan replacement cost yang benar",
                },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-white border border-black/6 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:shadow-sm transition-all group"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{a.icon}</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors leading-snug mb-1">
                      {a.title}
                    </div>
                    <div className="text-xs text-[#475569] leading-snug">{a.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-black/5">
              <Link
                href="/artikel"
                className="text-sm text-gold font-semibold hover:underline no-underline"
              >
                📚 Lihat Semua Artikel Edukasi Asuransi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="absolute bottom-4 left-[5vw] text-gold/6 font-heading text-[6rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-3">Mulai Sekarang</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Properti Anda Terlalu Berharga<br />untuk Tidak Dilindungi
          </h2>
          <p className="text-white/85 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">
            Konsultasi gratis, analisis risiko lokasi, dan penawaran dari perusahaan
            asuransi berlisensi OJK — semua tanpa biaya.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <CTAPenawaran produk="properti" variant="gold" />
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 Chat WhatsApp Sekarang
            </a>
            <a
              href={`mailto:${KONTAK.email}`}
              className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all"
            >
              ✉️ Kirim Email
            </a>
          </div>
        </div>
      </section>

    </PropertyLayout>
  );
}
