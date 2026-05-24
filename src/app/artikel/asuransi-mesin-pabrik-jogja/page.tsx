// app/artikel/asuransi-mesin-pabrik-jogja/page.tsx
// TARGET KEYWORD: "asuransi mesin pabrik jogja", "asuransi machinery breakdown yogyakarta"
// INTENT: Local + Commercial — pemilik pabrik DIY yang cari proteksi mesin
// SILO: Engineering cluster → mendukung /asuransi-engineering/machinery-breakdown/

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Mesin Pabrik Jogja – Machinery Breakdown untuk Industri DIY | Asuransi Jogja",
  description:
    "Panduan asuransi mesin pabrik dan peralatan industri di Yogyakarta. Machinery Breakdown Insurance untuk mesin produksi, genset, chiller, kompresor di kawasan industri Sleman, Bantul, dan Kulon Progo. Konsultasi gratis.",
  keywords:
    "asuransi mesin pabrik jogja, asuransi machinery breakdown yogyakarta, asuransi mesin industri DIY, asuransi genset jogja, asuransi chiller yogyakarta, proteksi mesin pabrik sleman bantul",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-mesin-pabrik-jogja",
  },
  openGraph: {
    title: "Asuransi Mesin Pabrik Jogja – Machinery Breakdown untuk Industri DIY",
    description: "Proteksi mesin produksi, genset, chiller, dan kompresor di kawasan industri Yogyakarta. Premi mulai 0,3% nilai mesin per tahun.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-mesin-pabrik-jogja",
    type: "article",
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
        { "@type": "ListItem", position: 3, name: "Asuransi Mesin Pabrik Jogja", item: "https://asuransijogja.biz.id/artikel/asuransi-mesin-pabrik-jogja" },
      ],
    },
    {
      "@type": "Article",
      headline: "Asuransi Mesin Pabrik Jogja – Machinery Breakdown untuk Industri DIY",
      description: "Panduan lengkap asuransi Machinery Breakdown untuk pabrik dan industri di Yogyakarta.",
      author: { "@type": "Person", name: "Rio MD", jobTitle: "Konsultan Asuransi Kerugian" },
      publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
      datePublished: "2025-03-01",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa premi asuransi mesin pabrik di Yogyakarta?",
          acceptedAnswer: { "@type": "Answer", text: "Premi Machinery Breakdown untuk mesin pabrik di Yogyakarta berkisar 0,3–0,8% dari nilai mesin per tahun. Untuk mesin produksi senilai Rp 500 juta, premi sekitar Rp 1,5–4 juta per tahun." },
        },
        {
          "@type": "Question",
          name: "Apakah semua jenis mesin pabrik bisa diasuransikan?",
          acceptedAnswer: { "@type": "Answer", text: "Hampir semua mesin yang beroperasi secara elektris atau mekanis bisa diasuransikan Machinery Breakdown — termasuk mesin produksi, kompresor, genset, chiller, pompa, conveyor, dan mesin CNC. Mesin dengan usia di atas 15 tahun perlu survei terlebih dahulu." },
        },
      ],
    },
  ],
};

const sektorIndustriDIY = [
  {
    icon: "👗",
    sektor: "Industri Garmen & Tekstil",
    lokasi: "Sleman, Bantul",
    mesinKritis: "Mesin jahit industri, mesin potong, mesin bordir, mesin finishing",
    risikoUtama: "Kegagalan motor listrik, jarum patah merusak mesin, keausan roller",
    estimasiNilai: "Rp 50 juta – Rp 5 miliar per lini produksi",
  },
  {
    icon: "🍜",
    sektor: "Industri Pengolahan Pangan",
    lokasi: "Sleman, Bantul, Kulon Progo",
    mesinKritis: "Mesin pengemas, mesin penggiling, mesin pasteurisasi, conveyor belt",
    risikoUtama: "Kontaminasi bahan makanan ke mesin, overheat, kerusakan seal",
    estimasiNilai: "Rp 100 juta – Rp 2 miliar per unit",
  },
  {
    icon: "🪑",
    sektor: "Industri Mebel & Furnitur",
    lokasi: "Klaten (dekat DIY), Sleman",
    mesinKritis: "Mesin CNC router, mesin potong, mesin finishing UV, mesin press",
    risikoUtama: "Debu kayu merusak komponen elektronik, getaran berlebih, bit patah",
    estimasiNilai: "Rp 200 juta – Rp 3 miliar per unit CNC",
  },
  {
    icon: "🏨",
    sektor: "Hotel & Properti Komersial",
    lokasi: "Kota Yogyakarta, Sleman",
    mesinKritis: "Chiller, AHU, genset, lift, pompa submersible",
    risikoUtama: "Kegagalan kompresor chiller, kerusakan panel kontrol lift, overheat genset",
    estimasiNilai: "Rp 300 juta – Rp 5 miliar (chiller) per unit",
  },
  {
    icon: "🏥",
    sektor: "Rumah Sakit & Klinik",
    lokasi: "Seluruh DIY",
    mesinKritis: "MRI, CT Scan, sterilisator, chiller medis, UPS medis",
    risikoUtama: "Kerusakan magnet superkonduktor MRI, kegagalan pendingin, gangguan listrik",
    estimasiNilai: "Rp 5 miliar – Rp 50 miliar (MRI) per unit",
  },
  {
    icon: "🖨️",
    sektor: "Percetakan & Penerbitan",
    lokasi: "Kota Yogyakarta, Sleman",
    mesinKritis: "Mesin offset, digital printing, mesin finishing, mesin CTP",
    risikoUtama: "Kerusakan blanket roller, kegagalan sistem tinta, kerusakan laser CTP",
    estimasiNilai: "Rp 500 juta – Rp 10 miliar per mesin offset",
  },
];

const checklist = [
  { item: "Inventarisir semua mesin dan peralatan yang beroperasi secara elektris/mekanis", done: false },
  { item: "Catat nilai penggantian (replacement value) setiap mesin — bukan nilai buku", done: false },
  { item: "Dokumentasikan usia, merek, kapasitas, dan riwayat pemeliharaan mesin", done: false },
  { item: "Identifikasi mesin mana yang paling kritis — jika rusak, produksi berhenti total", done: false },
  { item: "Hitung potensi kerugian finansial jika mesin kritis rusak selama 1–4 minggu", done: false },
  { item: "Tentukan apakah perlu perluasan Business Interruption (BI)", done: false },
  { item: "Hubungi konsultan untuk mendapatkan estimasi premi dan penawaran resmi", done: false },
];

const mithosVsFakta = [
  {
    mitos: "Asuransi kebakaran sudah cukup untuk melindungi mesin pabrik",
    fakta: "Asuransi kebakaran hanya menanggung kerusakan mesin yang disebabkan oleh kebakaran dari luar. Lebih dari 90% kerusakan mesin berasal dari dalam — korsleting internal, bearing aus, overheat — yang tidak ditanggung asuransi kebakaran.",
  },
  {
    mitos: "Mesin baru tidak perlu diasuransikan karena masih dalam garansi",
    fakta: "Garansi pabrikan mencakup cacat produksi, bukan kerusakan operasional. Kesalahan operator, gangguan listrik, dan kerusakan akibat kondisi lingkungan biasanya tidak tercakup garansi. EAR saat pemasangan dan MB setelah beroperasi tetap diperlukan.",
  },
  {
    mitos: "Premi Machinery Breakdown terlalu mahal untuk pabrik kecil",
    fakta: "Premi MB mulai dari 0,3% nilai mesin per tahun. Untuk mesin senilai Rp 200 juta, preminya hanya Rp 600 ribu per tahun — jauh lebih kecil dari biaya perbaikan satu kali jika terjadi kerusakan mendadak.",
  },
  {
    mitos: "Klaim Machinery Breakdown selalu rumit dan lama prosesnya",
    fakta: "Dengan pendampingan konsultan yang berpengalaman, proses klaim MB bisa berjalan lebih lancar. Kunci utamanya adalah melaporkan dalam 24–48 jam dan tidak melakukan perbaikan sebelum loss adjuster survei.",
  },
];

const faqItems = [
  {
    q: "Apakah genset cadangan di pabrik perlu diasuransikan terpisah?",
    a: "Ya, genset sebaiknya diasuransikan terpisah dalam polis Machinery Breakdown. Genset adalah mesin yang relatif sering mengalami kerusakan mendadak — terutama akibat kegagalan sistem pendingin, kerusakan alternator, atau masalah starter. Nilai genset 100–500 kVA bisa mencapai ratusan juta rupiah.",
  },
  {
    q: "Bagaimana jika mesin pabrik kami sudah berusia 12 tahun — masih bisa diasuransikan?",
    a: "Masih bisa, namun perlu survei kondisi mesin terlebih dahulu oleh teknisi yang ditunjuk perusahaan asuransi. Beberapa perusahaan asuransi menetapkan batas usia 15 tahun, sementara yang lain bisa menanggung hingga 20 tahun dengan premium loading. Kami bantu carikan perusahaan asuransi yang tepat.",
  },
  {
    q: "Apakah nilai pertanggungan MB menggunakan nilai buku atau nilai penggantian mesin?",
    a: "Sebaiknya menggunakan nilai penggantian (replacement value) — yaitu biaya membeli mesin baru yang setara jika mesin lama rusak total. Menggunakan nilai buku (nilai akuntansi yang sudah mengalami penyusutan) berisiko menyebabkan under-insurance dan klaim tidak penuh dibayar.",
  },
  {
    q: "Apa itu clause 'pairs & sets' dalam Machinery Breakdown?",
    a: "Pairs & sets clause mengatur penggantian komponen yang berpasangan atau berseri. Jika satu dari dua bearing kembar rusak, misalnya, perusahaan asuransi mungkin hanya mengganti satu, bukan keduanya. Memahami klausul ini penting agar tidak ada kejutan saat klaim.",
  },
  {
    q: "Apakah Business Interruption bisa diklaim jika kerusakan kecil dan mesin hanya berhenti 2–3 hari?",
    a: "Tergantung kebijakan polis. Banyak polis BI memiliki waiting period (periode tunggu) — misalnya 3 hari atau 7 hari — sebelum klaim BI mulai berlaku. Ini untuk menghindari klaim kecil yang sering. Besaran waiting period dan coverage limit bisa disesuaikan saat negosiasi polis.",
  },
];

export default function ArtikelAsuransiMesinPabrik() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }} />
      <Header />
      <div className="pt-[68px]">

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Asuransi Mesin Pabrik Jogja</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-engineering/machinery-breakdown" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🔧 Machinery Breakdown
              </Link>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/40 text-xs">Panduan Industri DIY</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Mesin Pabrik Jogja —<br /><em className="not-italic text-gold">Machinery Breakdown</em><br />untuk Industri DIY
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Kawasan industri di Sleman, Bantul, dan Kulon Progo terus berkembang — namun banyak pemilik pabrik belum menyadari bahwa asuransi kebakaran saja tidak cukup melindungi mesin mereka dari kerusakan mendadak.
            </p>
            <div className="flex gap-3 text-xs text-white/40 flex-wrap">
              <span>✍️ Rio MD — Konsultan Asuransi Kerugian</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 7 menit</span>
            </div>
          </div>
        </section>

        {/* Konten */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Fakta:</strong> Berdasarkan data industri asuransi, lebih dari <strong>90% kerusakan mesin pabrik</strong> disebabkan oleh kegagalan internal — korsleting, bearing aus, overheat, kesalahan operator — bukan kebakaran. Ini yang dimaksud Machinery Breakdown Insurance: proteksi dari dalam mesin itu sendiri.
            </p>
          </div>

          {/* Sektor Industri DIY */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Sektor Industri DIY dan Mesin yang Perlu Dilindungi
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Yogyakarta memiliki ekosistem industri yang beragam. Setiap sektor memiliki jenis mesin kritis dan pola risiko yang berbeda:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {sektorIndustriDIY.map((s) => (
              <div key={s.sektor} className="bg-white rounded-card p-6 border border-black/8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{s.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <div>
                        <div className="font-heading text-navy font-bold text-base">{s.sektor}</div>
                        <div className="text-xs text-gold font-semibold">📍 {s.lokasi}</div>
                      </div>
                      <span className="text-xs bg-navy/5 border border-navy/10 text-navy px-2.5 py-1 rounded-full whitespace-nowrap">{s.estimasiNilai}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      <div className="bg-cream rounded-lg p-3">
                        <div className="text-xs font-semibold text-navy mb-1">⚙️ Mesin Kritis</div>
                        <div className="text-xs text-[#64748B] leading-relaxed">{s.mesinKritis}</div>
                      </div>
                      <div className="bg-cream rounded-lg p-3">
                        <div className="text-xs font-semibold text-navy mb-1">⚠️ Risiko Utama</div>
                        <div className="text-xs text-[#64748B] leading-relaxed">{s.risikoUtama}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mitos vs Fakta */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Mitos vs Fakta: Asuransi Mesin Pabrik
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-6">
            Ada banyak kesalahpahaman tentang proteksi mesin yang membuat pemilik pabrik merasa sudah terlindungi padahal sebenarnya tidak:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {mithosVsFakta.map((m, i) => (
              <div key={i} className="rounded-card border border-black/8 overflow-hidden">
                <div className="bg-red-50 border-b border-red-100 px-5 py-3 flex gap-2 items-start">
                  <span className="text-red-500 font-bold text-sm flex-shrink-0">✗ Mitos:</span>
                  <span className="text-red-700 text-sm leading-relaxed">{m.mitos}</span>
                </div>
                <div className="bg-green-50 px-5 py-3 flex gap-2 items-start">
                  <span className="text-green-600 font-bold text-sm flex-shrink-0">✓ Fakta:</span>
                  <span className="text-[#64748B] text-sm leading-relaxed">{m.fakta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Checklist: Persiapan Sebelum Konsultasi Asuransi Mesin
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed mb-5">
            Siapkan informasi ini sebelum menghubungi kami — semakin lengkap, semakin akurat penawaran premi yang Anda terima:
          </p>
          <div className="flex flex-col gap-2.5 mb-6">
            {checklist.map((c, i) => (
              <div key={i} className="flex gap-3 items-center bg-cream rounded-xl p-4 border border-black/5">
                <div className="w-5 h-5 rounded border-2 border-navy/30 flex-shrink-0" />
                <span className="text-sm text-navy2 leading-relaxed">{c.item}</span>
              </div>
            ))}
          </div>
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">Siap Konsultasi?</div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Hubungi kami via WhatsApp — ceritakan jenis mesin, nilai, dan lokasi pabrik Anda. Kami bantu hitung estimasi premi dan siapkan penawaran resmi.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                💬 Konsultasi Gratis via WA
              </a>
              <Link href="/asuransi-engineering/machinery-breakdown#kalkulator" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                🧮 Kalkulator Premi MB →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan Seputar Asuransi Mesin Pabrik
          </h2>
          <div className="flex flex-col divide-y divide-black/8 mb-10">
            {faqItems.map((f, i) => (
              <details key={i} className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#64748B] pb-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Baca Juga</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/asuransi-engineering/machinery-breakdown", icon: "🔧", judul: "Halaman Produk Machinery Breakdown", desc: "Kalkulator premi, mesin yang dijamin, dan cara klaim" },
                { href: "/asuransi-engineering/erection-all-risk", icon: "⚙️", judul: "Asuransi EAR saat Pasang Mesin Baru", desc: "Proteksi saat proses instalasi sebelum MB berlaku" },
                { href: "/asuransi-properti/property-all-risk", icon: "🏭", judul: "Property All Risk untuk Pabrik", desc: "Proteksi bangunan pabrik dari kebakaran dan risiko lainnya" },
                { href: "/artikel/perbedaan-car-ear-asuransi-engineering", icon: "🔍", judul: "Perbedaan CAR, EAR, dan MB", desc: "Kapan pakai masing-masing produk engineering?" },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">{a.judul}</div>
                    <div className="text-xs text-[#64748B]">{a.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* CTA Bottom */}
        <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
              Lindungi Mesin Pabrik Anda<br />Sebelum Terlambat
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Konsultasi gratis — kami bantu inventarisir mesin, hitung nilai pertanggungan, dan pilih polis Machinery Breakdown yang paling tepat untuk industri Anda di Yogyakarta.
            </p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi Asuransi Mesin via WhatsApp
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
