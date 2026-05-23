import type { Metadata } from "next";
import Link from "next/link";
import EngineeringLayout from "@/components/engineering/EngineeringLayout";
import { KONTAK } from "@/lib/data";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Asuransi Engineering Jogja – CAR, EAR & Machinery Breakdown | Konsultasi Gratis",
  description:
    "Konsultan asuransi engineering Yogyakarta: Contractor All Risk (CAR), Erection All Risk (EAR), dan Machinery Breakdown. Wajib tender pemerintah DIY. Premi bersaing, proses cepat 1-3 hari. Konsultasi gratis.",
  keywords:
    "asuransi engineering jogja, contractor all risk yogyakarta, erection all risk jogja, machinery breakdown yogyakarta, asuransi proyek konstruksi jogja, asuransi kontraktor DIY, premi CAR jogja, asuransi EAR yogyakarta",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-engineering" },
  openGraph: {
    title: "Asuransi Engineering Jogja – CAR, EAR & Machinery Breakdown",
    description:
      "Proteksi proyek konstruksi, pemasangan mesin, dan mesin industri di Yogyakarta. Wajib tender pemerintah DIY. Konsultasi gratis.",
    url: "https://asuransijogja.biz.id/asuransi-engineering",
    type: "website",
    images: [
      {
        url: "https://asuransijogja.biz.id/og-engineering.png",
        width: 1200,
        height: 630,
        alt: "Asuransi Engineering Yogyakarta – CAR EAR Machinery Breakdown",
      },
    ],
  },
};

// ─── SCHEMA MARKUP ─────────────────────────────────────────────────────────────
const schemaService = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://asuransijogja.biz.id/asuransi-engineering/#service",
      name: "Asuransi Engineering Yogyakarta",
      description:
        "Layanan konsultasi dan penerbitan polis asuransi engineering di Yogyakarta, meliputi Contractor All Risk (CAR), Erection All Risk (EAR), dan Machinery Breakdown Insurance.",
      provider: {
        "@type": "InsuranceAgency",
        "@id": "https://asuransijogja.biz.id/#organization",
        name: "Asuransi Jogja",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Daerah Istimewa Yogyakarta",
      },
      serviceType: "Engineering Insurance",
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
              name: "Machinery Breakdown (MB)",
              url: "https://asuransijogja.biz.id/asuransi-engineering/machinery-breakdown",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransijogja.biz.id" },
        { "@type": "ListItem", position: 2, name: "Asuransi Engineering", item: "https://asuransijogja.biz.id/asuransi-engineering" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa perbedaan CAR, EAR, dan Machinery Breakdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CAR (Contractor All Risk) untuk proyek konstruksi sipil seperti gedung, jalan, dan jembatan. EAR (Erection All Risk) untuk proyek pemasangan mesin, struktur baja, dan instalasi MEP. Machinery Breakdown untuk mesin yang sudah beroperasi dan mengalami kerusakan mendadak dari dalam — bukan akibat kebakaran.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah asuransi engineering wajib untuk proyek pemerintah di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Berdasarkan ketentuan kontrak pengadaan barang/jasa pemerintah, kontraktor wajib menyertakan polis CAR sebagai syarat pencairan termin. Proyek APBN dan APBD DIY umumnya mensyaratkan Certificate of Insurance sebelum pekerjaan dimulai.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa estimasi premi asuransi CAR di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Premi CAR berkisar antara 0,15% hingga 0,5% dari nilai kontrak per tahun, tergantung jenis pekerjaan, durasi proyek, dan limit TPL yang diambil. Untuk proyek senilai Rp 1 miliar, estimasi premi sekitar Rp 1,5 – 5 juta per tahun. Hubungi kami untuk penawaran resmi.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama proses penerbitan polis engineering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Untuk proyek standar dengan dokumen lengkap, polis CAR dan EAR dapat terbit dalam 1–3 hari kerja. Untuk proyek besar dengan nilai kontrak di atas Rp 10 miliar, proses memerlukan survei dan bisa memakan 3–7 hari kerja.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah bisa membeli asuransi CAR setelah proyek berjalan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Idealnya, CAR dibeli sebelum proyek dimulai untuk mendapatkan perlindungan penuh sejak mobilisasi. Namun dalam kondisi tertentu, polis bisa diterbitkan setelah proyek berjalan dengan penyesuaian periode jaminan. Hubungi kami untuk konsultasi kasus per kasus.",
          },
        },
        {
          "@type": "Question",
          name: "Perusahaan asuransi mana yang tersedia untuk engineering di Yogyakarta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kami bekerja sama dengan beberapa perusahaan asuransi terkemuka yang memiliki produk engineering, antara lain Asuransi Jasindo, Asuransi Asei, Asuransi Wahana Tata, dan beberapa perusahaan lainnya. Kami membantu membandingkan dan memilih yang paling sesuai dengan kebutuhan proyek Anda.",
          },
        },
        {
          "@type": "Question",
          name: "Apa yang dimaksud dengan deductible dalam polis CAR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deductible adalah bagian kerugian yang menjadi tanggungan tertanggung sendiri sebelum asuransi membayar klaim. Dalam polis CAR, deductible untuk Section I (Material Damage) biasanya Rp 5–25 juta per kejadian, sedangkan untuk Section II (Third Party Liability) bisa berbeda. Besaran deductible mempengaruhi besaran premi.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah kecelakaan pekerja tercakup dalam asuransi engineering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Asuransi CAR Section II (TPL) menanggung cedera pihak ketiga di luar pekerja. Untuk kecelakaan kerja pekerja/karyawan, perlindungannya berasal dari BPJS Ketenagakerjaan atau asuransi Employer Liability (Kecelakaan Kerja) yang terpisah. Kami sarankan mengambil keduanya untuk proteksi penuh.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const clusters = [
  {
    href: "/asuransi-engineering/contractor-all-risk",
    icon: "🏗️",
    batik: "◈",
    title: "Contractor All Risk (CAR)",
    subtitle: "Proyek Konstruksi · Gedung & Infrastruktur",
    desc: "Perlindungan menyeluruh untuk proyek pembangunan gedung, jembatan, jalan, dan infrastruktur dari risiko kerusakan fisik dan tanggung jawab pihak ketiga.",
    tags: ["Hotel & Apartemen", "Kampus & Sekolah", "Jalan & Jembatan", "Proyek Pemerintah DIY"],
    premiBadge: "0,15–0,5% nilai kontrak",
  },
  {
    href: "/asuransi-engineering/erection-all-risk",
    icon: "⚙️",
    batik: "❖",
    title: "Erection All Risk (EAR)",
    subtitle: "Pemasangan Mesin & Struktur Baja",
    desc: "Proteksi komprehensif selama proses pemasangan, pengujian, dan komisioning mesin industri, struktur baja, dan instalasi peralatan berat.",
    tags: ["Mesin Pabrik", "Struktur Baja", "Panel Listrik", "Peralatan Industri"],
    premiBadge: "0,2–0,6% nilai kontrak",
  },
  {
    href: "/asuransi-engineering/machinery-breakdown",
    icon: "🔧",
    batik: "⬡",
    title: "Machinery Breakdown (MB)",
    subtitle: "Kerusakan Mesin Operasional",
    desc: "Perlindungan mesin dan peralatan produksi dari kerusakan mendadak akibat cacat internal, kesalahan operasional, dan kegagalan komponen.",
    tags: ["Mesin Produksi", "Kompresor & Pompa", "Genset", "Peralatan CNC"],
    premiBadge: "0,3–0,8% nilai mesin/tahun",
  },
];

const proyekDIY = [
  { icon: "🏨", label: "Hotel & Akomodasi", desc: "Pembangunan hotel bintang, resort, dan penginapan wisata yang terus berkembang seiring pertumbuhan pariwisata Yogyakarta" },
  { icon: "🏫", label: "Kampus & Pendidikan", desc: "Pembangunan gedung kampus, laboratorium, asrama mahasiswa, dan fasilitas pendidikan di kota pelajar terbesar di Indonesia" },
  { icon: "🏥", label: "Rumah Sakit & Klinik", desc: "Konstruksi fasilitas kesehatan baru dan renovasi gedung rumah sakit dengan standar keamanan bangunan yang sangat ketat" },
  { icon: "🛣️", label: "Infrastruktur Pemerintah", desc: "Proyek jalan, jembatan, irigasi, dan infrastruktur publik yang dibiayai APBN dan APBD DIY" },
  { icon: "🏭", label: "Kawasan Industri", desc: "Pembangunan pabrik, gudang, dan fasilitas industri di kawasan Sleman, Bantul, dan Kulon Progo" },
  { icon: "🏘️", label: "Perumahan & Properti", desc: "Pengembangan perumahan, ruko, dan properti komersial yang terus tumbuh di pinggiran kota Yogyakarta" },
];

const mengapaEngineering = [
  { icon: "💰", title: "Nilai Proyek Sangat Besar", desc: "Satu proyek konstruksi bisa bernilai miliaran hingga ratusan miliar rupiah. Satu insiden tanpa proteksi bisa menghentikan proyek sepenuhnya." },
  { icon: "⚠️", title: "Risiko Tinggi di Lapangan", desc: "Konstruksi melibatkan alat berat, ketinggian, material berbahaya, dan cuaca — kombinasi risiko yang tidak ada di industri lain." },
  { icon: "📋", title: "Wajib Tender & Kontrak", desc: "Banyak tender pemerintah dan proyek swasta mensyaratkan bukti asuransi CAR/EAR sebagai kelengkapan dokumen kontrak." },
  { icon: "🤝", title: "Tanggung Jawab ke Pihak Ketiga", desc: "Kerusakan properti tetangga, cedera pekerja subkon, dan dampak konstruksi ke publik semua masuk dalam cakupan engineering insurance." },
];

const perbandinganProduk = [
  { aspek: "Jenis Pekerjaan", car: "Konstruksi sipil (gedung, jalan, jembatan)", ear: "Erection / pemasangan mesin & instalasi", mb: "Mesin yang sudah beroperasi" },
  { aspek: "Waktu Berlaku", car: "Sejak mobilisasi s.d. serah terima", ear: "Sejak pengangkatan s.d. komisioning", mb: "Sepanjang mesin beroperasi (tahunan)" },
  { aspek: "Risiko Utama", car: "Hujan, banjir, gempa, TPL warga sekitar", ear: "Jatuh saat lifting, gagal uji coba", mb: "Korsleting, bearing aus, overheat" },
  { aspek: "Estimasi Premi", car: "0,15–0,5% nilai kontrak", ear: "0,2–0,6% nilai kontrak", mb: "0,3–0,8% nilai mesin/tahun" },
  { aspek: "Wajib Tender?", car: "Ya (proyek pemerintah)", ear: "Tergantung kontrak", mb: "Tidak (disarankan)" },
];

const prosesBeliSteps = [
  { step: "1", judul: "Konsultasi Kebutuhan", desc: "Ceritakan jenis proyek, nilai kontrak, lokasi, dan durasi. Kami analisis risiko dan rekomendasikan cakupan yang tepat." },
  { step: "2", judul: "Penerimaan Penawaran", desc: "Kami siapkan penawaran dari beberapa perusahaan asuransi terkemuka — Anda pilih yang paling sesuai." },
  { step: "3", judul: "Pengisian & Pengiriman Dokumen", desc: "Isi SPPA (Surat Permohonan Penutupan Asuransi) dan kirim dokumen proyek. Proses bisa dilakukan via WhatsApp." },
  { step: "4", judul: "Polis Terbit", desc: "Polis CAR/EAR terbit dalam 1–3 hari kerja. Anda menerima Certificate of Insurance siap pakai untuk keperluan tender." },
];

const mitraAsuransi = [
  { nama: "Asuransi Jasindo", spesialisasi: "CAR proyek BUMN & pemerintah" },
  { nama: "Asuransi Asei", spesialisasi: "EAR & proyek ekspor" },
  { nama: "Asuransi Wahana Tata", spesialisasi: "Machinery Breakdown industri" },
  { nama: "Asuransi Tugu Pratama", spesialisasi: "Engineering & energy" },
];

const faqItems = [
  {
    q: "Apa perbedaan CAR, EAR, dan Machinery Breakdown?",
    a: "CAR (Contractor All Risk) untuk proyek konstruksi sipil seperti gedung, jalan, dan jembatan. EAR (Erection All Risk) untuk proyek pemasangan mesin, struktur baja, dan instalasi MEP. Machinery Breakdown untuk mesin yang sudah beroperasi dan mengalami kerusakan mendadak dari dalam — bukan akibat kebakaran.",
  },
  {
    q: "Apakah asuransi engineering wajib untuk proyek pemerintah di DIY?",
    a: "Ya. Berdasarkan ketentuan kontrak pengadaan barang/jasa pemerintah (Perpres 12/2021), kontraktor wajib menyertakan polis CAR sebagai syarat pencairan termin. Proyek APBN dan APBD DIY umumnya mensyaratkan Certificate of Insurance sebelum pekerjaan dimulai.",
  },
  {
    q: "Berapa estimasi premi CAR untuk proyek senilai Rp 1 miliar?",
    a: "Estimasi premi CAR untuk proyek Rp 1 miliar berkisar Rp 1,5 – 5 juta per tahun (rate 0,15–0,5%), tergantung jenis pekerjaan, durasi, lokasi, dan limit TPL yang diambil. Untuk proyek di kawasan padat atau proyek infrastruktur, rate bisa lebih tinggi. Hubungi kami untuk penawaran resmi.",
  },
  {
    q: "Berapa lama proses penerbitan polis engineering?",
    a: "Untuk proyek standar dengan dokumen lengkap, polis CAR dan EAR dapat terbit dalam 1–3 hari kerja. Untuk proyek besar (di atas Rp 10 miliar) atau proyek yang memerlukan survei lokasi, prosesnya 3–7 hari kerja.",
  },
  {
    q: "Apakah bisa membeli CAR setelah proyek sudah berjalan?",
    a: "Idealnya CAR dibeli sebelum proyek dimulai untuk mendapatkan perlindungan penuh sejak mobilisasi material. Namun polis bisa diterbitkan setelah proyek berjalan dengan penyesuaian periode jaminan — asalkan belum ada klaim atau insiden yang diketahui.",
  },
  {
    q: "Apakah kecelakaan pekerja tercakup dalam asuransi CAR?",
    a: "CAR Section II (TPL) menanggung cedera pihak ketiga di luar pekerja tetap. Untuk kecelakaan kerja pekerja/subkontraktor, perlindungannya berasal dari BPJS Ketenagakerjaan atau asuransi Employer Liability yang terpisah. Kami sarankan mengambil keduanya untuk proteksi komprehensif.",
  },
  {
    q: "Apa itu deductible dalam polis CAR dan bagaimana pengaruhnya?",
    a: "Deductible adalah bagian kerugian yang menjadi tanggungan tertanggung sendiri per kejadian. Dalam CAR, deductible Section I biasanya Rp 5–25 juta. Deductible yang lebih tinggi berarti premi lebih rendah — pilihan tepat untuk kontraktor yang ingin efisiensi biaya pada proyek besar.",
  },
  {
    q: "Bisakah satu polis CAR menanggung beberapa proyek sekaligus?",
    a: "Ada produk yang disebut 'Annual CAR' atau 'Open Cover CAR' yang bisa menanggung semua proyek dalam satu periode (biasanya 1 tahun) dengan satu polis. Ini sangat efisien untuk kontraktor yang mengerjakan banyak proyek dalam setahun. Hubungi kami untuk detail.",
  },
];

const artikelTerkait = [
  { href: "/artikel/asuransi-kontraktor-proyek-jogja", icon: "📄", judul: "Panduan Lengkap Asuransi Kontraktor di Yogyakarta", desc: "Semua yang perlu diketahui kontraktor DIY tentang kewajiban asuransi proyek" },
  { href: "/artikel/cara-klaim-asuransi-liability", icon: "📄", judul: "Cara Klaim Asuransi Liability yang Efektif", desc: "Langkah-langkah klaim asuransi liability agar dana cair lebih cepat" },
  { href: "/asuransi-liability/public-liability", icon: "🔗", judul: "Asuransi Public Liability untuk Proyek", desc: "Proteksi tanggung jawab terhadap warga dan properti sekitar proyek" },
  { href: "/asuransi-liability/employer-liability", icon: "🔗", judul: "Asuransi Employer Liability Kontraktor", desc: "Wajib untuk kontraktor yang mempekerjakan banyak tenaga kerja" },
];

export default function AsuransiEngineeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <EngineeringLayout breadcrumbs={[{ label: "Asuransi Engineering" }]}>

        {/* ── HERO ────────────────────────────────────────────────────────────── */}
        <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
          <div className="absolute top-8 right-[5vw] text-gold/6 font-heading text-[8rem] leading-none select-none hidden lg:block">꧁꧂</div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              <span className="text-gold text-[0.5rem]">◆</span>Asuransi Engineering · Yogyakarta
            </div>
            <h1 className="font-heading text-[clamp(2.4rem,4vw,3.8rem)] text-white leading-[1.15] mb-5">
              Asuransi Engineering<br /><em className="not-italic text-gold">Proyek & Industri</em><br />Yogyakarta
            </h1>
            <p className="text-white/85 text-base leading-[1.85] max-w-[530px] mb-4">
              Yogyakarta terus bertumbuh — hotel baru, kampus baru, kawasan industri baru. Di balik setiap proyek besar tersimpan risiko besar: hujan, gempa, kecelakaan, dan tuntutan pihak ketiga. Asuransi engineering memastikan proyek dan mesin industri Anda terlindungi dari awal hingga selesai.
            </p>
            <p className="text-white/65 text-sm leading-relaxed max-w-[480px] mb-8">
              Melayani kontraktor, pemilik proyek, dan pabrik di Yogyakarta, Sleman, Bantul, Kulon Progo, dan Gunung Kidul sejak 10+ tahun.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 hover:-translate-y-px transition-all no-underline">💬 Konsultasi Gratis</a>
              <a href="#produk" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Produk →</a>
            </div>
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
              {[
                { num: "CAR · EAR · MB", lbl: "3 Produk Utama" },
                { num: "1–3 Hari", lbl: "Proses Polis" },
                { num: "Gratis", lbl: "Konsultasi & Review" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="font-heading text-gold text-lg font-bold">{s.num}</div>
                  <div className="text-white/45 text-xs mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MENGAPA PENTING ──────────────────────────────────────────────────── */}
        <section className="py-16 px-[5vw] bg-cream">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Penting?</div>
            <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
              Proyek Besar Butuh<br />Proteksi yang Sepadan
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {mengapaEngineering.map((m) => (
              <div key={m.title} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{m.icon}</div>
                <div className="font-heading text-navy font-bold text-[1rem] mb-2">{m.title}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUK CARDS ─────────────────────────────────────────────────────── */}
        <section id="produk" className="py-16 px-[5vw] bg-white">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Engineering</div>
            <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
              Pilih Produk Sesuai<br />Jenis Proyek Anda
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {clusters.map((c) => (
              <Link key={c.href} href={c.href} className="no-underline group">
                <div className="border border-black/8 rounded-card p-7 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                  <div className="absolute top-4 right-5 text-gold/10 font-heading text-[3.5rem] leading-none select-none">{c.batik}</div>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="text-[2rem] mb-3">{c.icon}</div>
                  <div className="font-heading text-navy font-bold text-[1.15rem] mb-1">{c.title}</div>
                  <div className="text-gold text-xs font-semibold mb-1">{c.subtitle}</div>
                  {/* Premi Badge — SEO + conversion */}
                  <div className="inline-flex items-center gap-1.5 bg-gold/8 border border-gold/20 text-navy2 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    💰 Estimasi premi: {c.premiBadge}
                  </div>
                  <p className="text-sm leading-relaxed text-[#64748B] mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.tags.map((t) => (
                      <span key={t} className="bg-gold/8 border border-gold/15 text-navy2 text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>
                    ))}
                  </div>
                  <div className="text-gold text-sm font-semibold">Pelajari & konsultasi →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── PERBANDINGAN PRODUK ───────────────────────────────────────────────── */}
        <section className="py-16 px-[5vw] bg-cream">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Perbandingan Produk</div>
            <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
              CAR vs EAR vs MB —<br />Pilih yang Tepat untuk Anda
            </h2>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-4 font-heading font-semibold text-xs rounded-tl-xl w-[18%]">Aspek</th>
                  <th className="text-left p-4 font-heading font-semibold text-xs w-[27%]">🏗️ CAR</th>
                  <th className="text-left p-4 font-heading font-semibold text-xs w-[27%]">⚙️ EAR</th>
                  <th className="text-left p-4 font-heading font-semibold text-xs rounded-tr-xl text-gold w-[27%]">🔧 MB</th>
                </tr>
              </thead>
              <tbody>
                {perbandinganProduk.map((b, i) => (
                  <tr key={b.aspek} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                    <td className="p-4 font-semibold text-navy text-xs">{b.aspek}</td>
                    <td className="p-4 text-[#64748B] text-sm leading-relaxed">{b.car}</td>
                    <td className="p-4 text-[#64748B] text-sm leading-relaxed">{b.ear}</td>
                    <td className="p-4 text-navy2 text-sm leading-relaxed font-medium">{b.mb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 max-w-5xl mx-auto bg-navy/5 border border-navy/10 rounded-xl p-5">
            <p className="text-sm text-navy2">
              <strong className="text-gold">💡 Kombinasi ideal untuk kontraktor:</strong> CAR + Employer Liability + asuransi kendaraan dump truk. Untuk pabrik baru: EAR (selama pemasangan) + Machinery Breakdown (setelah beroperasi) + Property All Risk.
            </p>
          </div>
        </section>

        {/* ── PROSES BELI ──────────────────────────────────────────────────────── */}
        <section className="py-16 px-[5vw] bg-white">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cara Mendapatkan Polis</div>
            <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
              4 Langkah Mudah<br />Mendapatkan Polis Engineering
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {prosesBeliSteps.map((s) => (
              <div key={s.step} className="bg-cream rounded-card p-6 border border-black/5 relative">
                <div className="absolute top-4 right-4 font-heading text-[2.5rem] font-bold text-navy/6">{s.step}</div>
                <div className="bg-navy text-gold font-heading font-bold text-sm w-9 h-9 rounded-full flex items-center justify-center mb-4">{s.step}</div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-2">{s.judul}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MITRA ASURANSI (EEAT) ────────────────────────────────────────────── */}
        <section className="py-12 px-[5vw] bg-cream">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mitra Perusahaan Asuransi</div>
              <h2 className="font-heading text-[clamp(1.5rem,2vw,2rem)] text-navy">
                Kami Bekerja Sama dengan Perusahaan Asuransi Terpercaya
              </h2>
              <p className="text-sm text-[#64748B] mt-2 max-w-[480px] mx-auto">
                Sebagai konsultan independen, kami tidak terikat satu perusahaan asuransi. Kami membandingkan dan merekomendasikan yang terbaik untuk kebutuhan Anda.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mitraAsuransi.map((m) => (
                <div key={m.nama} className="bg-white rounded-xl p-4 border border-black/6 text-center">
                  <div className="font-heading text-navy font-bold text-sm mb-1">{m.nama}</div>
                  <div className="text-xs text-[#64748B]">{m.spesialisasi}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROYEK DI DIY ────────────────────────────────────────────────────── */}
        <section id="proyek" className="py-16 px-[5vw] bg-white">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Konteks Lokal</div>
            <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
              Sektor Konstruksi & Industri<br />yang Tumbuh di DIY
            </h2>
            <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">
              Yogyakarta mengalami pertumbuhan infrastruktur pesat dalam 10 tahun terakhir — semua sektor ini membutuhkan asuransi engineering yang memadai.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {proyekDIY.map((p) => (
              <div key={p.label} className="bg-cream rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SINERGI PRODUK ───────────────────────────────────────────────────── */}
        <section className="py-12 px-[5vw] bg-cream">
          <div className="max-w-4xl mx-auto bg-gold/6 border border-gold/25 rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Proteksi Berlapis</div>
              <h2 className="font-heading text-navy text-[1.5rem] mb-3">
                Engineering + Liability +<br />Kendaraan = Proyek Aman
              </h2>
              <p className="text-base leading-relaxed text-[#64748B]">
                Kontraktor yang bijak melindungi proyek dari tiga sisi: pekerjaan fisik (CAR/EAR), mesin dan kendaraan proyek, serta tanggung jawab hukum terhadap pekerja dan pihak ketiga.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { href: "/asuransi-liability/public-liability", icon: "🤝", title: "Public Liability", sub: "Tanggung jawab ke warga & properti sekitar proyek" },
                { href: "/asuransi-liability/employer-liability", icon: "👷", title: "Employer Liability", sub: "Kecelakaan kerja pekerja bangunan & subkontraktor" },
                { href: "/asuransi-kendaraan/dump-truk-niaga", icon: "🚛", title: "Asuransi Kendaraan Proyek", sub: "Dump truk, alat berat, dan kendaraan site" },
                { href: "/asuransi-properti/property-all-risk", icon: "🏭", title: "Asuransi Gudang & Pabrik", sub: "Proteksi fasilitas industri setelah selesai dibangun" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="bg-white border border-black/8 rounded-xl p-3.5 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
                  <span className="text-xl">{l.icon}</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">{l.title}</div>
                    <div className="text-xs text-[#64748B]">{l.sub}</div>
                  </div>
                  <span className="ml-auto text-gold text-sm">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
        <section className="py-16 px-[5vw] bg-white">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
            <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">
              Pertanyaan Seputar<br />Asuransi Engineering Yogyakarta
            </h2>
          </div>
          <div className="max-w-[700px] mx-auto">
            {faqItems.map((f, i) => (
              <details key={i} className="border-b border-black/8 group">
                <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── ARTIKEL & INTERNAL LINKS ─────────────────────────────────────────── */}
        <section className="py-12 px-[5vw] bg-cream border-t border-black/5">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-5">Baca Juga</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {artikelTerkait.map((a) => (
                <Link key={a.href} href={a.href} className="bg-white border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-1">{a.judul}</div>
                    <div className="text-xs text-[#64748B]">{a.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="absolute bottom-4 left-[5vw] text-gold/6 font-heading text-[6rem] leading-none select-none hidden lg:block">꧁꧂</div>
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
              Proyek Besar Butuh<br />Perlindungan yang Lebih Besar
            </h2>
            <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-3">
              Konsultasi gratis — kami bantu review kebutuhan asuransi engineering proyek Anda dan siapkan polis sesuai nilai kontrak dalam 1–3 hari kerja.
            </p>
            <p className="text-white/50 text-xs mb-8">Melayani area: Yogyakarta, Sleman, Bantul, Kulon Progo, Gunung Kidul, dan sekitarnya</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">
                💬 Chat WhatsApp Sekarang
              </a>
              <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all">
                ✉️ Kirim Email
              </a>
            </div>
          </div>
        </section>
      </EngineeringLayout>
    </>
  );
}
