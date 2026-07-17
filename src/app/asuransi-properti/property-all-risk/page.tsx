import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Property All Risk (PAR) Jogja – Proteksi Komprehensif Properti Komersial",
  description:
    "Asuransi Property All Risk (PAR) di Yogyakarta untuk gedung kantor, hotel, pabrik, ruko, dan fasilitas komersial. Proteksi all-perils termasuk kebakaran, banjir, gempa Merapi, kerusuhan. Konsultasi gratis.",
  keywords:
    "property all risk jogja, PAR asuransi yogyakarta, asuransi gedung komersial jogja, asuransi pabrik yogyakarta, asuransi hotel jogja, asuransi all risk properti, polis PAR OJK yogyakarta, asuransi gedung bertingkat jogja, asuransi ruko komersial yogyakarta",
  alternates: {
    canonical: "https://asuransijogja.biz.id/asuransi-properti/property-all-risk",
  },
  openGraph: {
    title: "Asuransi Property All Risk (PAR) Jogja – Proteksi Komprehensif",
    description:
      "Proteksi all-perils untuk properti komersial di Yogyakarta. Kebakaran, banjir, gempa, kerusuhan — semua dalam satu polis.",
    url: "https://asuransijogja.biz.id/asuransi-properti/property-all-risk",
    type: "website",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og/og-properti.png", width: 1200, height: 630, alt: "Asuransi Property All Risk (PAR) Jogja – Proteksi Komprehensif" }],
  },
};

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa perbedaan utama Property All Risk (PAR) dengan asuransi kebakaran biasa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asuransi kebakaran hanya menjamin risiko yang disebutkan secara eksplisit (named perils): kebakaran, petir, ledakan, pesawat jatuh, dan asap (FLEXAS). PAR menggunakan prinsip sebaliknya — semua kerugian fisik dijamin kecuali yang secara eksplisit dikecualikan dalam polis. Artinya, PAR memberikan cakupan yang jauh lebih luas dan cocok untuk properti komersial dengan nilai tinggi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah PAR mencakup risiko banjir dan gempa bumi secara otomatis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak secara otomatis. Banjir dan gempa bumi adalah risiko katastrofe yang pada umumnya perlu ditambahkan sebagai endorsement (perluasan) dalam polis PAR. Untuk properti di Yogyakarta yang berada di zona aktif Merapi dan seismik, kedua perluasan ini sangat direkomendasikan.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa estimasi premi Property All Risk untuk gedung kantor di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premi PAR dihitung berdasarkan nilai pertanggungan, jenis konstruksi, lokasi, dan perluasan yang dipilih. Sebagai gambaran, gedung kantor beton dengan nilai bangunan Rp 2 miliar bisa memiliki estimasi premi Rp 1,5–3 juta per tahun sebelum perluasan bencana alam. Hubungi kami untuk kalkulasi yang akurat.",
      },
    },
    {
      "@type": "Question",
      name: "Apa saja yang dikecualikan dalam polis PAR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pengecualian umum PAR meliputi: keausan dan penyusutan normal, cacat bawaan atau kesalahan desain bangunan, kerugian akibat perang dan nuklir, kerugian non-fisik seperti kehilangan profit (kecuali ada Business Interruption), dan risiko yang secara eksplisit dikecualikan di dalam polis. Praktisi kami akan menjelaskan seluruh pengecualian secara transparan sebelum polis diterbitkan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah PAR bisa dikombinasikan dengan asuransi Business Interruption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Business Interruption (BI) adalah perluasan yang bisa ditambahkan pada polis PAR untuk menjamin kehilangan pendapatan usaha selama properti tidak bisa beroperasi akibat klaim. Ini sangat relevan untuk hotel, restoran, atau pabrik yang mengandalkan kontinuitas operasional.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menentukan nilai pertanggungan yang tepat untuk polis PAR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nilai pertanggungan PAR harus berdasarkan replacement cost (biaya penggantian) — yaitu biaya membangun ulang atau mengganti properti dengan spesifikasi setara di harga saat ini, bukan harga pasar atau harga beli. Underinsurance (nilai terlalu rendah) akan berakibat pada ganti rugi yang proporsional, bukan penuh. Praktisi kami membantu menghitung nilai yang benar.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses penerbitan polis PAR untuk properti komersial di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Properti komersial standar biasanya memerlukan survei lokasi terlebih dahulu. Proses umumnya 3–7 hari kerja setelah dokumen lengkap dan survei selesai. Untuk properti dengan nilai di atas Rp 5 miliar, proses bisa lebih panjang karena memerlukan persetujuan underwriting dari perusahaan asuransi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah polis PAR berlaku untuk properti yang sedang dalam proses renovasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sebagian besar polis PAR memiliki klausul terkait pekerjaan konstruksi atau renovasi. Jika renovasi berskala besar, ada kemungkinan polis perlu diendorse atau diganti sementara dengan Contractor All Risk (CAR) selama masa konstruksi. Konsultasikan kondisi ini sebelum memulai renovasi agar proteksi tidak terputus.",
      },
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const coverageItems = [
  {
    icon: "🔥",
    label: "Kebakaran & FLEXAS",
    desc: "Menjamin semua risiko FLEXAS: kebakaran, petir, ledakan, pesawat jatuh, dan asap. Termasuk kebakaran akibat korsleting listrik, kompor, atau sumber api lainnya.",
  },
  {
    icon: "🌊",
    label: "Banjir & Genangan Air",
    desc: "Kerusakan akibat banjir, meluapnya sungai atau saluran air, dan genangan berkepanjangan yang merusak struktur atau isi bangunan.",
  },
  {
    icon: "🌋",
    label: "Gempa Bumi & Erupsi Vulkanik",
    desc: "Risiko gempa tektonik, letusan gunung berapi, dan tsunami. Sangat relevan untuk properti di Yogyakarta yang berdekatan dengan Merapi dan jalur patahan Opak.",
  },
  {
    icon: "💨",
    label: "Angin Topan & Badai",
    desc: "Kerusakan akibat angin kencang, puting beliung, badai, dan hujan es yang merusak bangunan, atap, atau fasad.",
  },
  {
    icon: "🚧",
    label: "Kerusuhan & Huru-hara",
    desc: "Kerusakan akibat kerusuhan massa, demonstrasi, sabotase, dan vandalisasi yang dapat dicakup sebagai perluasan dalam polis PAR.",
  },
  {
    icon: "🔧",
    label: "Kerusakan Fisik Lainnya",
    desc: "Berbagai kerusakan fisik tak terduga pada bangunan yang tidak termasuk dalam daftar pengecualian polis — inilah keunggulan prinsip all-risk.",
  },
];

const targetPasar = [
  {
    icon: "🏢",
    label: "Gedung Perkantoran",
    desc: "Gedung kantor bertingkat, ruko kantor, co-working space, dan kompleks perkantoran di kawasan bisnis Yogyakarta.",
  },
  {
    icon: "🏨",
    label: "Hotel & Penginapan",
    desc: "Hotel bintang, guest house, vila, resort butik, dan homestay — seluruh sektor pariwisata yang menjadi tulang punggung ekonomi DIY.",
  },
  {
    icon: "🏭",
    label: "Pabrik & Manufaktur",
    desc: "Fasilitas produksi, gudang bahan baku, area operasional mesin, dan kawasan industri di sekitar Yogyakarta.",
  },
  {
    icon: "🏫",
    label: "Sekolah & Kampus",
    desc: "Gedung pendidikan, asrama mahasiswa, laboratorium kampus, dan fasilitas pendidikan lainnya.",
  },
  {
    icon: "🏥",
    label: "Klinik & Fasilitas Kesehatan",
    desc: "Klinik pratama, rumah sakit, apotek, dan pusat kesehatan dari skala kecil hingga besar.",
  },
  {
    icon: "🛍️",
    label: "Ritel & Pusat Perbelanjaan",
    desc: "Mal, supermarket, pasar modern, toko ritel, dan pusat perdagangan dengan nilai aset komersial tinggi.",
  },
];

const parVsKebakaran = [
  {
    aspek: "Prinsip Jaminan",
    kebakaran: "Named perils — hanya risiko yang disebutkan",
    par: "All-perils — semua kecuali yang dikecualikan",
  },
  {
    aspek: "Cakupan Risiko",
    kebakaran: "Hanya 5 risiko FLEXAS dasar",
    par: "Puluhan risiko fisik dalam satu polis",
  },
  {
    aspek: "Banjir & Gempa",
    kebakaran: "Harus ditambahkan sebagai add-on terpisah",
    par: "Bisa dimasukkan dalam satu paket endorsement",
  },
  {
    aspek: "Kerusuhan & Sabotase",
    kebakaran: "Tidak dijamin",
    par: "Dapat dimasukkan sebagai klausul perluasan",
  },
  {
    aspek: "Business Interruption",
    kebakaran: "Tidak tersedia standar",
    par: "Tersedia sebagai perluasan BI",
  },
  {
    aspek: "Cocok untuk",
    kebakaran: "Properti residensial dan usaha kecil",
    par: "Properti komersial, industri, dan nilai tinggi",
  },
  {
    aspek: "Premi",
    kebakaran: "Lebih rendah",
    par: "Lebih tinggi, coverage jauh lebih luas",
  },
];

const prosesItems = [
  {
    step: "01",
    icon: "💬",
    label: "Konsultasi Awal",
    desc: "Ceritakan jenis properti, lokasi, nilai aset, dan kebutuhan bisnis Anda. Pak Rio akan menilai apakah PAR atau produk lain yang lebih sesuai.",
  },
  {
    step: "02",
    icon: "🔍",
    label: "Survei & Risk Assessment",
    desc: "Tim kami atau surveyor perusahaan asuransi akan menilai kondisi fisik bangunan, sistem keamanan, dan profil risiko lokasi secara menyeluruh.",
  },
  {
    step: "03",
    icon: "📋",
    label: "Penawaran & Perbandingan",
    desc: "Kami siapkan penawaran dari beberapa perusahaan asuransi OJK, lengkap dengan perbandingan cakupan, pengecualian, dan premi.",
  },
  {
    step: "04",
    icon: "✅",
    label: "Polis Aktif & Pendampingan",
    desc: "Polis resmi terbit dalam 3–7 hari kerja. Kami dampingi hingga klaim selesai jika suatu saat diperlukan.",
  },
];

const kelebihanPAR = [
  {
    icon: "🛡️",
    judul: "Satu Polis, Perlindungan Menyeluruh",
    isi: "Daripada membeli beberapa polis terpisah untuk kebakaran, banjir, dan gempa, PAR mengkonsolidasi semua risiko dalam satu dokumen polis yang lebih mudah dikelola dan diklaim.",
  },
  {
    icon: "⚖️",
    judul: "Beban Pembuktian Lebih Ringan",
    isi: "Pada named-perils policy, Anda harus membuktikan bahwa kerugian disebabkan oleh risiko yang disebutkan. Pada PAR, perusahaan asuransi yang harus membuktikan bahwa kerugian masuk dalam pengecualian.",
  },
  {
    icon: "📈",
    judul: "Fleksibel Sesuai Nilai Aset",
    isi: "PAR tersedia untuk properti dengan nilai pertanggungan mulai dari ratusan juta hingga triliunan rupiah. Cocok untuk bisnis yang terus berkembang dengan nilai aset yang meningkat.",
  },
  {
    icon: "🤝",
    judul: "Diakui dalam Kontrak Bisnis",
    isi: "Banyak perjanjian sewa, kontrak konstruksi, atau perjanjian kredit bank mensyaratkan adanya polis PAR sebagai syarat pencairan atau penandatanganan kontrak.",
  },
];

const exclusionItems = [
  "Keausan, korosi, dan penyusutan normal bangunan akibat usia",
  "Cacat bawaan, kesalahan desain, atau konstruksi yang tidak standar",
  "Kerusakan yang disengaja oleh pemilik atau tertanggung",
  "Kerugian akibat perang, invasi, dan senjata nuklir",
  "Kerugian non-fisik seperti kehilangan profit (kecuali ada BI add-on)",
  "Pencurian tanpa kekerasan atau penerobosan paksa (kecuali ada rider)",
  "Fluktuasi harga dan kerugian finansial murni",
  "Polusi lingkungan (kecuali dengan perluasan khusus)",
];

const faqItems = [
  {
    q: "Apa perbedaan utama Property All Risk (PAR) dengan asuransi kebakaran biasa?",
    a: "Asuransi kebakaran hanya menjamin risiko yang disebutkan secara eksplisit (named perils): FLEXAS — kebakaran, petir, ledakan, pesawat jatuh, dan asap. PAR menggunakan prinsip sebaliknya: semua kerugian fisik dijamin kecuali yang secara eksplisit dikecualikan dalam polis. Cakupan PAR jauh lebih luas dan memberikan ketenangan pikiran lebih besar untuk properti komersial.",
  },
  {
    q: "Apakah PAR mencakup risiko banjir dan gempa bumi secara otomatis?",
    a: "Tidak secara otomatis. Banjir dan gempa bumi umumnya perlu ditambahkan sebagai endorsement (perluasan klausul) dalam polis PAR. Namun justru di sinilah keunggulan PAR — Anda bisa mengonsolidasi semua perluasan dalam satu polis, berbeda dengan asuransi kebakaran yang memerlukan polis gempa terpisah.",
  },
  {
    q: "Berapa estimasi premi PAR untuk gedung komersial di Yogyakarta?",
    a: "Premi PAR dihitung berdasarkan nilai pertanggungan, jenis konstruksi, lokasi, dan perluasan yang dipilih. Gedung kantor beton dengan nilai Rp 2 miliar bisa memiliki estimasi premi Rp 1,5–3 juta per tahun sebelum perluasan bencana alam. Hubungi kami untuk kalkulasi akurat berdasarkan properti Anda.",
  },
  {
    q: "Apa saja yang dikecualikan dalam polis PAR?",
    a: "Pengecualian umum PAR meliputi keausan normal, cacat bawaan, kerugian akibat perang dan nuklir, kerugian non-fisik (kecuali ada BI), dan kerusakan yang disengaja. Kami selalu menjelaskan seluruh klausul pengecualian secara transparan sebelum Anda memutuskan membeli.",
  },
  {
    q: "Apakah PAR bisa dikombinasikan dengan Business Interruption?",
    a: "Ya. Business Interruption (BI) adalah perluasan yang menjamin kehilangan pendapatan usaha selama properti tidak bisa beroperasi akibat klaim. Sangat relevan untuk hotel, restoran, pabrik, atau bisnis lain yang tidak bisa berhenti lama.",
  },
  {
    q: "Bagaimana cara menentukan nilai pertanggungan yang tepat untuk PAR?",
    a: "Nilai pertanggungan harus berdasarkan replacement cost — biaya membangun ulang atau mengganti properti dengan spesifikasi setara di harga material dan upah saat ini, bukan harga pasar atau harga beli yang sudah termasuk nilai tanah. Underinsurance akan berakibat ganti rugi yang proporsional, bukan penuh. Praktisi kami membantu menghitung nilai yang tepat.",
  },
  {
    q: "Berapa lama proses penerbitan polis PAR?",
    a: "Properti komersial umumnya memerlukan survei lokasi terlebih dahulu. Prosesnya 3–7 hari kerja setelah dokumen lengkap dan survei selesai. Untuk properti dengan nilai di atas Rp 5 miliar, mungkin lebih panjang karena memerlukan persetujuan underwriting khusus.",
  },
  {
    q: "Apakah bank mensyaratkan PAR untuk kredit investasi properti?",
    a: "Ya, banyak bank mewajibkan adanya polis PAR sebagai syarat pencairan kredit investasi atau KPR komersial. Kami berpengalaman membantu klien menyiapkan polis yang sesuai dengan persyaratan bank dan memastikan klausul banker's clause tercantum dengan benar dalam polis.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function PropertyAllRiskPage() {
  return (
    <PropertyLayout
      breadcrumbs={[
        { label: "Asuransi Properti", href: "/asuransi-properti" },
        { label: "Property All Risk (PAR)" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)",
          }}
        />
        <div className="absolute top-10 right-[5vw] text-gold/5 font-heading text-[7rem] leading-none select-none hidden lg:block">
          ◆◆◆
        </div>
        <div className="relative z-10 max-w-3xl">
          <Link
            href="/asuransi-properti"
            className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline"
          >
            ← Asuransi Properti
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Property All Risk · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Property All Risk (PAR)
            <br />
            <em className="not-italic text-gold">Perlindungan Menyeluruh</em>
            <br />
            untuk Properti Komersial
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">
            PAR adalah standar tertinggi perlindungan properti komersial dan industri. Satu
            polis, semua risiko fisik terlindungi — dari kebakaran hingga gempa Merapi —
            kecuali yang secara eksplisit dikecualikan. Bukan sekadar asuransi kebakaran
            yang diperluas, tapi filosofi perlindungan yang berbeda sama sekali.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline"
            >
              💬 Konsultasi PAR Sekarang
            </a>
            <a
              href="#coverage"
              className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline"
            >
              Lihat Cakupan Jaminan →
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
            {[
              { num: "All-Perils", lbl: "Prinsip Jaminan" },
              { num: "Komersial", lbl: "Target Properti" },
              { num: "Gratis", lbl: "Konsultasi & Analisis" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-heading text-gold text-lg font-bold">{s.num}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APA ITU PAR ──────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
              Tentang PAR
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-4">
              Mengapa PAR Berbeda dari
              <br />
              Asuransi Kebakaran Biasa?
            </h2>
            <p className="text-sm leading-relaxed text-[#475569] mb-4">
              Asuransi kebakaran bekerja dengan prinsip{" "}
              <strong className="text-navy">named perils</strong> — hanya risiko yang
              disebutkan dalam polis yang dijamin. Jika terjadi kerusakan akibat risiko
              yang tidak tercantum, klaim bisa ditolak.
            </p>
            <p className="text-sm leading-relaxed text-[#475569] mb-4">
              Property All Risk bekerja sebaliknya:{" "}
              <strong className="text-navy">
                semua kerugian fisik dijamin kecuali yang secara eksplisit dikecualikan
              </strong>
              . Ini berarti cakupan PAR mencakup kejadian yang tidak terpikirkan sekalipun
              — selama tidak ada dalam daftar pengecualian polis.
            </p>
            <p className="text-sm leading-relaxed text-[#475569] mb-6">
              Dalam praktiknya, perbedaan ini terasa paling besar saat klaim terjadi. Pada
              named-perils policy, Anda harus membuktikan risiko penyebab kerugian. Pada
              PAR, perusahaan asuransi yang harus membuktikan bahwa kerugian masuk dalam
              pengecualian.
            </p>
            <div className="bg-navy rounded-xl p-5 text-white">
              <div className="font-heading text-gold text-sm font-semibold mb-2">
                🏛️ Catatan Khusus untuk Yogyakarta
              </div>
              <p className="text-xs leading-relaxed text-white/75">
                Yogyakarta berada di zona aktif gempa dan sekitar 30 km dari Gunung Merapi
                yang paling aktif di Indonesia. Untuk properti komersial dengan nilai investasi
                tinggi, PAR dengan perluasan gempa dan vulkanik adalah pilihan yang paling
                prudent untuk melindungi aset bisnis jangka panjang Anda.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-card p-6 border border-black/6">
            <div className="font-heading text-navy font-bold text-base mb-4 pb-3 border-b border-black/8">
              PAR vs Asuransi Kebakaran Biasa
            </div>
            <div className="flex flex-col gap-0">
              {parVsKebakaran.map((r, i) => (
                <div
                  key={r.aspek}
                  className={`grid grid-cols-[110px_1fr_1fr] gap-2 py-2.5 text-xs ${
                    i < parVsKebakaran.length - 1 ? "border-b border-black/5" : ""
                  }`}
                >
                  <span className="font-semibold text-navy">{r.aspek}</span>
                  <span className="text-red-500/80">{r.kebakaran}</span>
                  <span className="text-green-700 font-medium">{r.par}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-[110px_1fr_1fr] gap-2 mt-4 pt-3 border-t border-black/8 text-[0.7rem]">
              <span className="text-[#475569]">Aspek</span>
              <span className="text-red-500 font-semibold">Kebakaran</span>
              <span className="text-green-700 font-semibold">PAR ✓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE ─────────────────────────────────────────────────────── */}
      <section id="coverage" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Cakupan Jaminan
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Apa Saja yang Bisa
            <br />
            Dijamin dalam Polis PAR?
          </h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">
            Cakupan berikut umumnya tersedia dalam polis PAR standar — detail perluasan
            dan pengecualian tergantung perusahaan asuransi yang dipilih
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {coverageItems.map((c) => (
            <div
              key={c.label}
              className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {c.label}
              </div>
              <p className="text-base leading-relaxed text-[#475569]">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Pengecualian */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="bg-gold/8 border border-gold/20 rounded-xl p-6">
            <div className="font-heading text-navy font-bold text-base mb-4">
              ⚠️ Pengecualian Umum yang Perlu Dipahami
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {exclusionItems.map((exc) => (
                <div key={exc} className="flex gap-2 text-sm text-[#475569]">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                  {exc}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#475569] mt-4 leading-relaxed">
              Kami selalu menjelaskan seluruh klausul pengecualian secara rinci dan transparan
              sebelum Anda memutuskan membeli polis. Tidak ada "kejutan" saat klaim.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEUNGGULAN PAR ───────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Keunggulan Produk
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            4 Alasan PAR Lebih Unggul
            <br />
            untuk Properti Komersial
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {kelebihanPAR.map((k) => (
            <div
              key={k.judul}
              className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-3">{k.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {k.judul}
              </div>
              <p className="text-sm leading-[1.75] text-[#475569]">{k.isi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TARGET PASAR ─────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Untuk Siapa?
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            PAR Adalah Pilihan Tepat
            <br />
            untuk Properti Ini
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {targetPasar.map((t) => (
            <div
              key={t.label}
              className="bg-cream rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-3">{t.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {t.label}
              </div>
              <p className="text-base leading-relaxed text-[#475569]">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Bank Syarat CTA */}
        <div className="mt-8 max-w-4xl mx-auto bg-navy rounded-xl p-6 text-white grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="font-heading text-gold text-base font-semibold mb-2">
              🏦 Syarat Kredit Bank?
            </div>
            <p className="text-xs leading-relaxed text-white/75">
              Banyak bank mensyaratkan polis PAR dengan banker&apos;s clause sebagai
              syarat pencairan kredit investasi properti atau KPR komersial. Kami
              berpengalaman menyiapkan polis yang sesuai persyaratan bank dengan
              klausul yang benar.
            </p>
          </div>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-gold text-navy px-6 py-3 rounded-lg font-bold text-sm text-center no-underline hover:bg-gold2 transition-all"
          >
            💬 Tanya Soal Banker&apos;s Clause
          </a>
        </div>
      </section>

      {/* ── PROSES ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            Alur Konsultasi
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Dari Analisis Risiko
            <br />
            hingga Polis Aktif
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {prosesItems.map((p) => (
            <div
              key={p.step}
              className="bg-white rounded-card p-6 text-center border border-black/5 relative"
            >
              <div className="absolute top-4 right-5 font-heading text-[2rem] font-bold text-navy/8">
                {p.step}
              </div>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">
                {p.label}
              </div>
              <p className="text-base leading-relaxed text-[#475569]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">
            FAQ
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">
            Pertanyaan Seputar
            <br />
            Property All Risk (PAR)
          </h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">
            Jawaban lengkap untuk pertanyaan yang paling sering diajukan pemilik
            properti komersial di Yogyakarta
          </p>
        </div>
        <div className="max-w-[740px] mx-auto">
          {faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-base leading-[1.78] text-[#475569] pb-4">{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA inline */}
        <div className="max-w-[740px] mx-auto mt-8 bg-navy rounded-xl p-6 text-center">
          <div className="font-heading text-white text-base font-semibold mb-2">
            Masih Ada Pertanyaan?
          </div>
          <p className="text-white/70 text-sm mb-4">
            Konsultasikan langsung dengan Pak Rio — gratis, tanpa tekanan.
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all"
          >
            💬 Tanya via WhatsApp
          </a>
        </div>
      </section>

      {/* ── INTERNAL LINKS ───────────────────────────────────────────────── */}
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">
            Produk &amp; Artikel Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/asuransi-properti/kebakaran"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🔥 Asuransi Kebakaran →
            </Link>
            <Link
              href="/asuransi-properti/banjir-gempa"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🌊 Perluasan Banjir &amp; Gempa →
            </Link>
            <Link
              href="/asuransi-properti/hotel-vila"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🏨 Hotel &amp; Vila Wisata →
            </Link>
            <Link
              href="/asuransi-properti/vila-homestay"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🌿 Vila &amp; Homestay →
            </Link>
            <Link
              href="/asuransi-liability/public-liability"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🤝 Public Liability →
            </Link>
            <Link
              href="/asuransi-engineering/contractor-all-risk"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              ⚙️ Contractor All Risk →
            </Link>
            <Link
              href="/artikel/asuransi-vila-homestay-jogja"
              className="bg-gold/10 border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-colors no-underline"
            >
              📖 Panduan Asuransi Properti Wisata →
            </Link>
            <Link
              href="/artikel/cara-menghitung-nilai-asuransi"
              className="bg-gold/10 border border-gold/30 text-gold font-semibold text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-colors no-underline"
            >
              📊 Cara Menghitung Nilai Pertanggungan →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-5xl mb-4">◆</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Properti Komersial Anda
            <br />
            Layak Mendapat Perlindungan Terbaik
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Konsultasi gratis soal Property All Risk — kami bantu analisis risiko, hitung
            nilai pertanggungan yang tepat, dan carikan penawaran terbaik dari perusahaan
            asuransi berlisensi OJK.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 Konsultasi PAR via WhatsApp
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
