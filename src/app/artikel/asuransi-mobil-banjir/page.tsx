import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Mobil Kena Banjir di Jogja – Klaim, Cakupan & Cara Mencegah Ditolak",
  description:
    "Panduan klaim asuransi mobil terendam banjir di Yogyakarta. Apakah All Risk otomatis cover banjir? Apa itu hydrolocking? Cara mengajukan klaim agar tidak ditolak.",
  keywords:
    "asuransi mobil banjir, klaim asuransi mobil kena banjir, asuransi banjir kendaraan Jogja, hydrolocking asuransi, perluasan banjir asuransi kendaraan",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-mobil-banjir" },
  openGraph: {
    title: "Asuransi Mobil Kena Banjir: Klaim, Cakupan & Tips Penting",
    description:
      "All Risk tidak otomatis cover banjir. Pelajari cara kerja perluasan banjir, apa itu hydrolocking, dan bagaimana mengklaim dengan benar.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-mobil-banjir",
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Mobil Kena Banjir di Jogja – Klaim, Cakupan & Cara Mencegah Ditolak",
  description:
    "Panduan lengkap asuransi kendaraan bermotor untuk risiko banjir di Yogyakarta.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-mobil-banjir",
  datePublished: "2025-05-01",
  dateModified: "2025-05-01",
  author: { "@type": "Person", name: "Rio MD", url: "https://asuransijogja.biz.id" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Jogja",
    url: "https://asuransijogja.biz.id",
  },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/asuransi-mobil-banjir",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah asuransi All Risk otomatis cover banjir?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Tidak otomatis. Asuransi All Risk standar tidak mencakup risiko banjir. Banjir termasuk dalam kategori bencana alam yang memerlukan klausul perluasan tersendiri (endorsement banjir). Anda perlu secara eksplisit menambahkan perluasan banjir ke dalam polis dan membayar premi tambahan.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu hydrolocking pada mesin mobil akibat banjir?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Hydrolocking (water hammer) terjadi ketika air masuk ke ruang bakar mesin melalui intake dan mesin mencoba mengompresi air tersebut. Karena air tidak dapat dikompresi seperti campuran udara-bahan bakar, tekanan ekstrem ini menyebabkan kerusakan fatal pada connecting rod, piston, dan blok mesin. Ini adalah kerusakan paling mahal akibat banjir pada kendaraan bermotor.",
      },
    },
    {
      "@type": "Question",
      name: "Apa yang harus dilakukan pertama kali jika mobil terendam banjir?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Hal terpenting pertama: JANGAN menghidupkan mesin. Menyalakan mesin yang sudah kemasukan air adalah penyebab utama hydrolocking dan membatalkan klaim asuransi. Segera dokumentasikan kondisi kendaraan dengan foto/video, hubungi konsultan asuransi atau agen Anda, dan tunggu surveyor sebelum memindahkan kendaraan.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa biaya perbaikan mobil yang kena banjir tanpa asuransi?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Biaya perbaikan sangat bervariasi tergantung seberapa dalam air merendam dan apakah mesin dihidupkan. Kerusakan ringan (interior, elektronik) bisa Rp 5–20 juta. Kerusakan sedang (sistem elektrikal, ECU) Rp 20–50 juta. Hydrolocking atau kerusakan mesin total bisa mencapai Rp 50–150 juta atau bahkan total loss.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah klaim banjir bisa ditolak meskipun saya punya perluasan banjir?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ya, klaim tetap bisa ditolak jika: (1) Anda menghidupkan mesin setelah kendaraan terendam, (2) kendaraan diparkir di area yang sudah diketahui rawan banjir berulang dan Anda tidak melaporkan kondisi ini saat pengajuan polis, atau (3) ada indikasi kelalaian yang disengaja. Dokumentasi yang baik dan tidak menyalakan mesin adalah kunci klaim yang berhasil.",
      },
    },
  ],
};

const langkahKlaim = [
  {
    step: "01",
    icon: "📵",
    judul: "JANGAN Nyalakan Mesin",
    desc: "Ini adalah aturan paling kritis. Menyalakan mesin yang tergenang air menyebabkan hydrolocking — kerusakan fatal yang tidak bisa diklaim karena dianggap kelalaian sendiri.",
    warning: true,
  },
  {
    step: "02",
    icon: "📸",
    judul: "Dokumentasi Segera",
    desc: "Foto dan video kondisi kendaraan dari berbagai sudut sebelum air surut. Catat ketinggian air dengan referensi yang terlihat jelas. Simpan semua dokumentasi.",
    warning: false,
  },
  {
    step: "03",
    icon: "📱",
    judul: "Hubungi Konsultan/Agen",
    desc: "Segera WhatsApp kami. Kami akan memandu langkah selanjutnya dan memastikan proses klaim dilakukan dengan benar dari awal.",
    warning: false,
  },
  {
    step: "04",
    icon: "🚗",
    judul: "Tunggu Surveyor",
    desc: "Jangan pindahkan kendaraan sebelum surveyor dari perusahaan asuransi melakukan pemeriksaan. Memindahkan tanpa izin bisa mempersulit klaim.",
    warning: false,
  },
  {
    step: "05",
    icon: "📋",
    judul: "Siapkan Dokumen",
    desc: "STNK, fotokopi polis asuransi, surat keterangan banjir dari kelurahan/kecamatan (jika tersedia), dan foto dokumentasi yang sudah diambil.",
    warning: false,
  },
  {
    step: "06",
    icon: "🔧",
    judul: "Bengkel Rekanan",
    desc: "Kendaraan dibawa ke bengkel rekanan yang ditunjuk asuransi. Jangan bawa ke bengkel lain tanpa persetujuan asuransi — biaya tidak akan diganti.",
    warning: false,
  },
];

const areaBanjirJogja = [
  { area: "Sleman bagian selatan", sungai: "Kali Code, Kali Kuning", tingkat: "Sedang–Tinggi" },
  { area: "Bantul barat (Jetis, Kasihan)", sungai: "Kali Progo, Kali Winongo", tingkat: "Sedang–Tinggi" },
  { area: "Kota Jogja (Gondokusuman)", sungai: "Kali Code", tingkat: "Sedang" },
  { area: "Piyungan, Berbah (Sleman timur)", sungai: "Kali Opak", tingkat: "Sedang" },
  { area: "Imogiri, Dlingo (Bantul timur)", sungai: "Kali Oya", tingkat: "Rendah–Sedang" },
];

export default function AsuransiMobilBanjirPage() {
  const wa = `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(
    "Halo Pak Rio, saya ingin tanya soal perluasan banjir untuk asuransi mobil saya di Jogja."
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-sm text-[#475569]">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Asuransi Mobil Kena Banjir</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🌊</div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[2px] uppercase text-gold2 bg-gold/10 border border-gold/25 px-3 py-1 rounded-full">
              Panduan Klaim · Banjir & Asuransi Kendaraan
            </span>
          </div>
          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-4">
            Mobil Kena Banjir di Jogja?<br />
            <em className="not-italic text-gold">Ini yang Harus Anda Tahu</em><br />
            tentang Asuransi dan Klaim
          </h1>
          <p className="text-white/80 text-base leading-[1.85] max-w-[580px] mb-5">
            Banjir adalah salah satu risiko yang paling sering diabaikan pemilik kendaraan di
            Yogyakarta. Yang lebih mengejutkan: asuransi All Risk standar{" "}
            <strong className="text-gold">tidak otomatis menanggung banjir</strong>. Panduan ini
            menjelaskan cara kerja perluasan banjir, langkah klaim yang benar, dan area rawan banjir
            di DIY yang perlu Anda waspadai.
          </p>
          <div className="bg-red-600/15 border border-red-500/30 rounded-lg px-4 py-3 text-sm text-white/85 mb-5">
            ⚠️ <strong>Peringatan penting:</strong> Jika mobil Anda baru saja terendam banjir,{" "}
            <strong className="text-red-300">jangan nyalakan mesin</strong> sebelum membaca panduan ini.
          </div>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>Oleh <strong className="text-white/75">Rio MD</strong> — Praktisi Asuransi Independen</span>
            <span>·</span>
            <span>Yogyakarta</span>
          </div>
        </div>
      </section>

      <article className="px-[5vw] max-w-[900px] mx-auto">

        {/* MITOS ALL RISK */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Mitos yang Berbahaya: "All Risk Pasti Cover Banjir"
          </h2>
          <p className="text-[#475569] leading-relaxed text-sm mb-6">
            Ini adalah kesalahpahaman yang paling umum dan paling mahal. Dalam dunia asuransi
            kendaraan Indonesia, banjir termasuk dalam kategori{" "}
            <strong className="text-navy">Natural Catastrophe</strong> yang memerlukan klausul
            perluasan tersendiri — terpisah dari perlindungan All Risk standar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-red-600/7 border border-red-600/15 rounded-card p-5">
              <div className="font-semibold text-red-700 text-sm mb-3">✗ All Risk STANDAR (tanpa perluasan)</div>
              <ul className="flex flex-col gap-2 text-sm text-[#475569]">
                {[
                  "Kecelakaan, benturan, terguling — ✓",
                  "Pencurian — ✓",
                  "Kebakaran — ✓",
                  "Banjir, genangan air — ✗ TIDAK DITANGGUNG",
                  "Gempa bumi, letusan gunung — ✗ TIDAK DITANGGUNG",
                  "Angin topan, badai — ✗ TIDAK DITANGGUNG",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-700/7 border border-green-700/15 rounded-card p-5">
              <div className="font-semibold text-green-700 text-sm mb-3">✓ All Risk + PERLUASAN BANJIR</div>
              <ul className="flex flex-col gap-2 text-sm text-[#475569]">
                {[
                  "Kecelakaan, benturan, terguling — ✓",
                  "Pencurian — ✓",
                  "Kebakaran — ✓",
                  "Banjir, genangan air — ✓ DITANGGUNG",
                  "Angin topan, badai — ✓ DITANGGUNG",
                  "(Gempa bumi perlu perluasan terpisah)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 bg-gold/5 border border-gold/20 rounded-lg p-4 text-sm text-[#475569]">
            <strong className="text-navy">Biaya perluasan banjir:</strong> Premi tambahan untuk perluasan
            banjir umumnya berkisar antara 0,05%–0,20% dari nilai kendaraan per tahun. Untuk mobil
            Rp 300 juta, artinya tambahan Rp 150.000–600.000/tahun. Sangat terjangkau dibanding
            risiko perbaikan kerusakan banjir yang bisa mencapai puluhan juta rupiah.
          </div>
        </section>

        {/* HYDROLOCKING */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Apa Itu Hydrolocking? Mengapa Ini Sangat Berbahaya
          </h2>
          <p className="text-[#475569] leading-relaxed text-sm mb-6">
            Hydrolocking adalah penyebab kerusakan terbesar sekaligus alasan paling umum klaim
            banjir ditolak. Memahami mekanismenya bisa menyelamatkan Anda dari kerugian ratusan juta.
          </p>
          <div className="bg-white border border-black/8 rounded-card p-6 mb-5">
            <h3 className="font-heading text-navy font-bold mb-3">Bagaimana Hydrolocking Terjadi</h3>
            <div className="flex flex-col gap-3">
              {[
                { n: "1", t: "Mobil terendam banjir", d: "Air masuk ke ruang mesin melalui air intake (saluran udara masuk)." },
                { n: "2", t: "Pemilik menghidupkan mesin", d: "Ini adalah kesalahan fatal. Mesin mencoba bekerja normal dengan menarik 'udara' — tapi yang masuk adalah air." },
                { n: "3", t: "Mesin mencoba mengompresi air", d: "Air tidak bisa dikompresi seperti udara. Tekanan ekstrem terjadi di ruang bakar." },
                { n: "4", t: "Kerusakan fatal", d: "Connecting rod bengkok atau patah, piston rusak, blok mesin retak. Kerusakan ini tidak bisa diperbaiki parsial — mesin harus di-overhaul total atau diganti." },
              ].map((s) => (
                <div key={s.n} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-red-700">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{s.t}</div>
                    <p className="text-xs text-[#475569] mt-0.5">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-red-600/8 border border-red-600/15 rounded-lg p-4">
            <p className="text-sm text-red-800 font-semibold">
              ⚠️ Mengapa klaim bisa ditolak: Jika surveyor menemukan bukti bahwa mesin dihidupkan
              setelah terendam (connecting rod bengkok adalah tanda khasnya), perusahaan asuransi
              dapat menolak klaim dengan alasan{" "}
              <em>kerusakan yang diakibatkan oleh tindakan pemilik sendiri</em>.
            </p>
          </div>
        </section>

        {/* LANGKAH KLAIM */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Langkah Klaim yang Benar Jika Mobil Terkena Banjir
          </h2>
          <p className="text-[#475569] text-sm mb-8 leading-relaxed">
            Urutan langkah ini krusial. Kesalahan di langkah pertama bisa membuat seluruh klaim
            dibatalkan meskipun Anda memiliki perluasan banjir yang sah.
          </p>
          <div className="flex flex-col gap-4">
            {langkahKlaim.map((l) => (
              <div
                key={l.step}
                className={`flex gap-4 rounded-card p-5 border ${
                  l.warning
                    ? "bg-red-600/7 border-red-600/20"
                    : "bg-white border-black/8"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-sm ${
                    l.warning
                      ? "bg-red-600/15 text-red-700"
                      : "bg-navy/8 text-navy"
                  }`}
                >
                  {l.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{l.icon}</span>
                    <span
                      className={`font-heading font-bold text-sm ${
                        l.warning ? "text-red-700" : "text-navy"
                      }`}
                    >
                      {l.judul}
                    </span>
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AREA RAWAN BANJIR JOGJA */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Area Rawan Banjir di Yogyakarta yang Perlu Diwaspadai
          </h2>
          <p className="text-[#475569] text-sm mb-6 leading-relaxed">
            Yogyakarta memiliki beberapa sungai besar yang melewati kawasan permukiman padat. Jika
            Anda tinggal atau sering memarkir kendaraan di area berikut, perluasan banjir sangat
            dianjurkan:
          </p>
          <div className="overflow-x-auto rounded-card border border-black/8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy/5 border-b border-black/8">
                  <th className="text-left py-3 px-4 font-semibold text-navy">Area / Kecamatan</th>
                  <th className="text-left py-3 px-4 font-semibold text-navy">Sungai Terkait</th>
                  <th className="text-center py-3 px-4 font-semibold text-navy">Tingkat Risiko</th>
                </tr>
              </thead>
              <tbody>
                {areaBanjirJogja.map((a, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream/40"}>
                    <td className="py-3 px-4 font-semibold text-navy text-xs">{a.area}</td>
                    <td className="py-3 px-4 text-xs text-[#475569]">{a.sungai}</td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          a.tingkat.includes("Tinggi")
                            ? "bg-red-600/10 text-red-700"
                            : "bg-gold/10 text-gold"
                        }`}
                      >
                        {a.tingkat}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#475569] mt-3">
            * Tingkat risiko bersifat umum dan dapat berbeda tergantung musim dan intensitas hujan.
            Lokasi di lereng Merapi juga berisiko banjir lahar dingin pada musim hujan.
          </p>
        </section>

        {/* BERAPA BIAYA PERLUASAN */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Berapa Biaya Tambahan Perluasan Banjir?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { harga: "Rp 200 juta", tambahan: "Rp 100–400 rb/thn", vs: "Rp 5–20 jt biaya perbaikan" },
              { harga: "Rp 300 juta", tambahan: "Rp 150–600 rb/thn", vs: "Rp 20–80 jt biaya perbaikan" },
              { harga: "Rp 500 juta", tambahan: "Rp 250–1 jt/thn", vs: "Rp 50–150 jt biaya perbaikan" },
            ].map((b, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-5">
                <div className="text-xs font-bold text-gold tracking-wide mb-2">NILAI KENDARAAN</div>
                <div className="font-heading text-navy text-xl font-bold mb-3">{b.harga}</div>
                <div className="flex flex-col gap-2 text-xs">
                  <div>
                    <div className="text-[#475569] mb-0.5">Tambahan premi perluasan:</div>
                    <div className="text-green-700 font-bold">{b.tambahan}</div>
                  </div>
                  <div>
                    <div className="text-[#475569] mb-0.5">vs biaya perbaikan banjir:</div>
                    <div className="text-red-700 font-bold">{b.vs}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-gold/5 border border-gold/20 rounded-lg p-4 text-sm text-[#475569]">
            <strong className="text-navy">Kesimpulan:</strong> Dengan biaya tambahan yang sangat kecil,
            perluasan banjir memberikan perlindungan terhadap risiko kerugian yang bisa puluhan kali
            lebih besar. Untuk kendaraan yang diparkir di area rawan banjir Yogyakarta, ini bukan
            pilihan — ini adalah keharusan.
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-8">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="flex flex-col divide-y divide-black/8">
            {schemaFAQ.mainEntity.map((faq, i) => (
              <div key={i} className="py-5">
                <h3 className="font-semibold text-navy text-[0.95rem] mb-2">{faq.name}</h3>
                <p className="text-sm text-[#475569] leading-[1.78]">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-10 border-b border-black/8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">
            Artikel & Halaman Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/asuransi-kendaraan/mobil"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🚗 Asuransi Mobil Jogja →
            </Link>
            <Link
              href="/artikel/perbedaan-all-risk-tlo"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              ⚖️ All Risk vs TLO →
            </Link>
            <Link
              href="/asuransi-properti/banjir-gempa"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🏠 Asuransi Properti Banjir & Gempa →
            </Link>
            <Link
              href="/artikel/cara-klaim-asuransi-mobil"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              ⚠️ Kenapa Klaim Bisa Ditolak? →
            </Link>
            <Link
              href="/asuransi-kendaraan"
              className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🧮 Kalkulator Premi OJK →
            </Link>
          </div>
        </section>

        {/* AUTHOR BOX */}
        <section className="py-10">
          <div className="bg-navy rounded-card p-6 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 font-heading font-bold text-gold text-lg">
              R
            </div>
            <div>
              <div className="font-heading text-white font-bold mb-1">Rio MD</div>
              <div className="text-gold2 text-xs mb-3">Praktisi Asuransi Independen · Yogyakarta · 8 Tahun Pengalaman</div>
              <p className="text-white/65 text-sm leading-relaxed">
                Saya sering mendampingi proses klaim banjir di Yogyakarta, dan kesalahan paling umum
                yang saya lihat adalah pemilik yang menghidupkan mesin setelah terendam. Artikel ini
                ditulis untuk memastikan Anda tidak melakukan kesalahan yang sama.
              </p>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="pb-8 text-xs text-[#5A6472] leading-relaxed border-t border-black/5 pt-6">
          Artikel ini disajikan sebagai panduan edukatif umum. Cakupan polis aktual bergantung pada
          ketentuan masing-masing perusahaan asuransi dan polis yang Anda miliki. Untuk kepastian
          cakupan, selalu konsultasikan dengan konsultan atau baca polis Anda secara lengkap.
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Cek Apakah Polis Anda<br />Sudah Include Perluasan Banjir
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Banyak pemilik kendaraan baru menyadari polis mereka tidak cover banjir setelah kejadian
            terjadi. Konsultasi gratis untuk audit polis Anda sekarang.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={wa}
              className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 Konsultasi & Cek Perluasan Banjir
            </a>
            <Link
              href="/asuransi-kendaraan/mobil"
              className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all"
            >
              🚗 Lihat Panduan Asuransi Mobil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
