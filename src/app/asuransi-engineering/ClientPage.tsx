"use client";
// app/asuransi-engineering/ClientPage.tsx
// ─── CLIENT COMPONENT ────────────────────────────────────────────────────────
// Semua UI + interaktivitas (tab produk, accordion FAQ) ada di sini

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

// ─── DATA ────────────────────────────────────────────────────────────────────

const produkUtama = [
  {
    id: "car",
    icon: "🏗️",
    nama: "Contractor All Risk",
    singkatan: "CAR",
    tagline: "Untuk proyek konstruksi sipil",
    href: "/asuransi-engineering/contractor-all-risk",
    warnaBadge: "bg-blue-50 text-blue-700 border-blue-200",
    warnaAksen: "border-blue-400",
    deskripsi:
      "Melindungi proyek konstruksi gedung, jalan, jembatan, dan infrastruktur dari kerusakan fisik selama masa pembangunan hingga serah terima — termasuk tanggung jawab terhadap pihak ketiga.",
    cocokUntuk: [
      "Pembangunan gedung bertingkat (rumah, ruko, hotel, kampus, RS)",
      "Proyek jalan, jembatan, dan drainase",
      "Infrastruktur air (embung, bendungan, irigasi)",
      "Proyek APBN/APBD yang mensyaratkan CoI",
      "Kontraktor yang mengerjakan pekerjaan sipil campuran",
    ],
    jaminan: [
      "Kerusakan pekerjaan & material di lokasi proyek",
      "Kerusakan akibat banjir, badai, dan bencana alam (standar)",
      "Tanggung jawab terhadap pihak ketiga (TPL)",
      "Masa pemeliharaan hingga 12 bulan setelah PHO",
      "Perluasan: Gempa Bumi, RSMD, Principal Clause",
    ],
    estimasiPremi: "0,15 – 0,50% / nilai kontrak",
    wajibTender: true,
    prosesKlaim: "1–3 hari lapor, 7–14 hari proses",
    highlight: "Wajib tender pemerintah DIY",
    highlightWarna: "bg-navy text-white",
  },
  {
    id: "ear",
    icon: "⚙️",
    nama: "Erection All Risk",
    singkatan: "EAR",
    tagline: "Untuk instalasi mesin & struktur baja",
    href: "/asuransi-engineering/erection-all-risk",
    warnaBadge: "bg-amber-50 text-amber-700 border-amber-200",
    warnaAksen: "border-amber-400",
    deskripsi:
      "Melindungi pekerjaan pemasangan mesin, struktur baja, panel listrik, dan instalasi industri dari proses erection hingga selesai commissioning — termasuk risiko kegagalan saat uji coba pertama.",
    cocokUntuk: [
      "Instalasi mesin produksi pabrik (Bantul, Kulon Progo, Sleman)",
      "Pemasangan struktur baja gudang & fasilitas industri",
      "Instalasi panel HV/LV dan trafo",
      "Pemasangan sistem pendingin (chiller, cooling tower)",
      "Proyek EPC yang mencakup pekerjaan mekanikal",
    ],
    jaminan: [
      "Kerusakan mesin & komponen saat proses erection",
      "Risiko lifting, rigging, dan assembly",
      "Kerusakan saat cold & hot commissioning",
      "Tanggung jawab terhadap pihak ketiga",
      "Perluasan: DSU (Delay in Start-Up), Marine Cargo",
    ],
    estimasiPremi: "0,20 – 0,60% / nilai kontrak",
    wajibTender: false,
    prosesKlaim: "1–3 hari lapor, 7–21 hari proses",
    highlight: "Untuk proyek industri & manufaktur",
    highlightWarna: "bg-amber-600 text-white",
  },
  {
    id: "mb",
    icon: "🔧",
    nama: "Machinery Breakdown",
    singkatan: "MB",
    tagline: "Untuk mesin yang sudah beroperasi",
    href: "/asuransi-engineering/machinery-breakdown",
    warnaBadge: "bg-green-50 text-green-700 border-green-200",
    warnaAksen: "border-green-400",
    deskripsi:
      "Melindungi mesin dan peralatan industri yang sudah beroperasi dari kerusakan mendadak akibat kegagalan mekanis — termasuk biaya perbaikan, sewa mesin pengganti, dan kerugian usaha akibat mesin berhenti.",
    cocokUntuk: [
      "Pabrik manufaktur dan pengolahan (garmen, makanan, plastik)",
      "Mesin cetak, CNC, dan peralatan presisi",
      "Generator dan sistem UPS",
      "Sistem HVAC industri dan chiller sentral",
      "Pompa, kompresor, dan pressure vessel",
    ],
    jaminan: [
      "Kerusakan mekanis mendadak & tak terduga",
      "Kerusakan akibat kesalahan operasi & korsleting",
      "Overpressure & kegagalan sistem kontrol",
      "Biaya perbaikan termasuk ongkos tenaga ahli",
      "Perluasan: MLOP (kerugian akibat mesin berhenti)",
    ],
    estimasiPremi: "0,30 – 1,00% / nilai mesin",
    wajibTender: false,
    prosesKlaim: "1–2 hari lapor, 5–14 hari proses",
    highlight: "Perlindungan pasca-konstruksi",
    highlightWarna: "bg-green-700 text-white",
  },
];

const tabelPerbandingan = [
  {
    aspek: "Objek yang Dilindungi",
    car: "Pekerjaan konstruksi & material di lokasi",
    ear: "Mesin & komponen saat proses instalasi",
    mb: "Mesin & peralatan yang sudah beroperasi",
  },
  {
    aspek: "Fase Proyek",
    car: "Dari groundbreaking hingga serah terima (PHO)",
    ear: "Dari erection hingga selesai commissioning",
    mb: "Selama mesin beroperasi (ongoing)",
  },
  {
    aspek: "Risiko Utama",
    car: "Banjir, gempa, keruntuhan bekisting",
    ear: "Jatuh saat lifting, gagal commissioning",
    mb: "Korsleting, overpressure, keausan mendadak",
  },
  {
    aspek: "Estimasi Rate",
    car: "0,15 – 0,50%",
    ear: "0,20 – 0,60%",
    mb: "0,30 – 1,00%",
  },
  {
    aspek: "Masa Berlaku",
    car: "Sesuai durasi proyek + maintenance period",
    ear: "Sesuai durasi erection + commissioning",
    mb: "Tahunan, dapat diperpanjang",
  },
  {
    aspek: "Wajib Tender?",
    car: "Ya — hampir semua tender pemerintah",
    ear: "Kondisional (kontrak EPC/industri)",
    mb: "Tidak — kebutuhan internal perusahaan",
  },
  {
    aspek: "Combined Policy",
    car: "Bisa digabung dengan EAR (Combined CAR/EAR)",
    ear: "Bisa digabung dengan CAR (Combined CAR/EAR)",
    mb: "Berdiri sendiri, atau bundel dengan PAR/IAR",
  },
];

const prosesLangkah = [
  {
    no: "01",
    judul: "Konsultasi Gratis",
    detail:
      "Ceritakan jenis proyek, nilai kontrak, lokasi, dan durasi kepada kami via WhatsApp. Kami analisis dan rekomendasikan produk yang paling tepat.",
    durasi: "Hari yang sama",
  },
  {
    no: "02",
    judul: "Siapkan Dokumen",
    detail:
      "Kami kirimkan checklist dokumen yang dibutuhkan — umumnya KTP, akta, SIUJK, RAB, dan kontrak. Semua bisa dikirim via WhatsApp atau email.",
    durasi: "1 hari kerja",
  },
  {
    no: "03",
    judul: "Penawaran Premi",
    detail:
      "Kami ajukan ke beberapa underwriter dan bandingkan penawaran terbaik dari sisi cakupan dan premi. Anda pilih yang paling sesuai.",
    durasi: "1–2 hari kerja",
  },
  {
    no: "04",
    judul: "Terbitkan Polis",
    detail:
      "Setelah premi dibayar, polis diterbitkan dan dikirimkan dalam bentuk digital (PDF) maupun fisik sesuai kebutuhan. CoI untuk tender bisa dicetak terpisah.",
    durasi: "1 hari setelah pembayaran",
  },
];

const artikelTerkait = [
  {
    href: "/artikel/perbedaan-car-ear-asuransi-engineering",
    icon: "📊",
    judul: "Perbedaan CAR dan EAR — Mana yang Tepat?",
    desc: "Tabel perbandingan lengkap dan contoh proyek nyata di Yogyakarta",
    badge: "Perbandingan Produk",
  },
  {
    href: "/artikel/premi-asuransi-car-jogja",
    icon: "💰",
    judul: "Berapa Premi CAR di Jogja?",
    desc: "Tabel estimasi premi dari Rp 500 juta hingga Rp 50 miliar",
    badge: "Panduan Biaya",
  },
  {
    href: "/artikel/syarat-asuransi-tender-pemerintah-diy",
    icon: "📋",
    judul: "Syarat Asuransi Tender Pemerintah DIY",
    desc: "5 jaminan wajib kontraktor dari penawaran hingga PHO",
    badge: "Panduan Tender",
  },
  {
    href: "/artikel/asuransi-kontraktor-proyek-jogja",
    icon: "🔨",
    judul: "Panduan Asuransi Kontraktor Jogja",
    desc: "Semua jenis asuransi yang dibutuhkan kontraktor dari A–Z",
    badge: "Panduan Lengkap",
  },
];

const faqItems = [
  {
    q: "Apa perbedaan utama antara CAR, EAR, dan Machinery Breakdown?",
    a: "CAR untuk pekerjaan konstruksi sipil yang sedang dibangun. EAR untuk pemasangan mesin dan instalasi yang sedang dikerjakan. Machinery Breakdown untuk mesin yang sudah selesai dipasang dan sedang beroperasi. Ketiganya melindungi objek yang berbeda di fase yang berbeda — itulah mengapa proyek pabrik baru idealnya memiliki CAR/EAR saat konstruksi, lalu beralih ke Machinery Breakdown setelah beroperasi.",
  },
  {
    q: "Kapan sebaiknya menggunakan Combined CAR/EAR?",
    a: "Gunakan Combined CAR/EAR ketika proyek mencakup pekerjaan sipil dan pemasangan mesin dalam satu kontrak — misalnya pembangunan pabrik baru yang dikerjakan kontraktor EPC. Satu polis lebih efisien, tidak ada celah perlindungan antara fase sipil dan fase erection, dan certificate of insurance lebih mudah dikelola.",
  },
  {
    q: "Apakah polis engineering mencakup kerugian akibat desain yang salah?",
    a: "Tidak secara standar. Polis CAR dan EAR mengecualikan biaya perbaikan bagian yang cacat desain itu sendiri (faulty design exclusion). Namun kerusakan pada bagian lain yang timbul akibat cacat desain tersebut umumnya ditanggung. Untuk proyek berisiko tinggi, tersedia perluasan Design Defect (DE3) yang bisa menanggung konsekuensi dari cacat desain.",
  },
  {
    q: "Apakah alat berat (excavator, crane) tercakup dalam polis CAR?",
    a: "Polis CAR standar mencakup Plant & Equipment kontraktor yang digunakan di lokasi — namun umumnya dengan sub-limit. Untuk alat berat bernilai tinggi atau alat sewa, disarankan menambah endorsement Plant & Equipment atau polis Contractor's Plant & Equipment (CPE) terpisah agar perlindungannya lebih optimal.",
  },
  {
    q: "Berapa lama klaim asuransi engineering diproses?",
    a: "Pelaporan klaim harus dilakukan dalam 24–48 jam setelah kejadian — ini syarat mutlak. Setelah pelaporan, loss adjuster akan ditunjuk untuk survei (biasanya 2–5 hari kerja). Proses persetujuan klaim standar memakan waktu 7–21 hari kerja tergantung kompleksitas kerusakan. Kami mendampingi klien dari pelaporan hingga dana klaim cair.",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ClientPage() {
  const [activeTab, setActiveTab] = useState<"car" | "ear" | "mb">("car");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const produkAktif = produkUtama.find((p) => p.id === activeTab)!;

  return (
    <>
      <Header />
      <div className="pt-[68px]">

        {/* ── Breadcrumb ── */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Asuransi Engineering</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 75% at 85% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)",
            }}
          />
          {/* Dekoratif grid teknis */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 max-w-[640px]">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold3 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              ⚙️ Asuransi Engineering — Yogyakarta & DIY
            </div>
            <h1 className="font-heading text-[clamp(2rem,3.8vw,3.2rem)] text-white leading-[1.18] mb-5">
              Proteksi Proyek Konstruksi<br />
              & Industri di{" "}
              <em className="not-italic text-gold">Yogyakarta</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] mb-7 max-w-[520px]">
              CAR untuk proyek gedung dan infrastruktur. EAR untuk instalasi mesin dan struktur baja.
              Machinery Breakdown untuk mesin yang sudah beroperasi. Satu praktisi untuk semua kebutuhan
              engineering insurance Anda di DIY.
            </p>
            {/* Stat strip */}
            <div className="flex flex-wrap gap-x-7 gap-y-3 mb-8">
              {[
                { angka: "11+", label: "Tahun pengalaman" },
                { angka: "1–3", label: "Hari polis terbit" },
                { angka: "3", label: "Produk engineering" },
                { angka: "Gratis", label: "Konsultasi awal" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-gold font-bold text-xl leading-none">{s.angka}</div>
                  <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-gold text-navy px-6 py-3 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all hover:-translate-y-px inline-flex items-center gap-2"
              >
                💬 Konsultasi Gratis
              </a>
              <a
                href="#produk"
                className="border border-white/25 text-white/80 px-6 py-3 rounded-lg text-sm no-underline hover:border-gold/50 hover:text-gold transition-all inline-flex items-center gap-2"
              >
                ⚙️ Lihat Produk ↓
              </a>
            </div>
          </div>
        </section>

        {/* ── Intro Singkat ── */}
        <section className="py-12 px-[5vw] max-w-[860px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🏗️",
                judul: "Konstruksi Sipil",
                teks: "CAR melindungi gedung, jalan, jembatan, dan infrastruktur selama masa pembangunan. Wajib untuk semua tender pemerintah DIY.",
                href: "/asuransi-engineering/contractor-all-risk",
              },
              {
                icon: "⚙️",
                judul: "Instalasi & Erection",
                teks: "EAR melindungi pemasangan mesin, struktur baja, dan panel listrik — dari proses lifting hingga commissioning selesai.",
                href: "/asuransi-engineering/erection-all-risk",
              },
              {
                icon: "🔧",
                judul: "Mesin Beroperasi",
                teks: "Machinery Breakdown melindungi mesin pabrik dari kerusakan mendadak akibat kegagalan mekanis selama beroperasi.",
                href: "/asuransi-engineering/machinery-breakdown",
              },
            ].map((k) => (
              <Link
                key={k.href}
                href={k.href}
                className="bg-white border border-black/8 rounded-card p-5 no-underline hover:border-gold/40 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="text-2xl mb-3">{k.icon}</div>
                <div className="font-heading font-bold text-navy text-[0.95rem] mb-2 group-hover:text-gold transition-colors">
                  {k.judul}
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">{k.teks}</p>
                <div className="text-gold text-xs font-semibold mt-3 group-hover:underline">
                  Pelajari →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Tab Produk Interaktif ── */}
        <section id="produk" className="py-12 px-[5vw] bg-cream">
          <div className="max-w-[860px] mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
                Produk Engineering
              </p>
              <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy">
                Pilih Produk Sesuai Kebutuhan Anda
              </h2>
            </div>

            {/* Tab Selector */}
            <div className="flex gap-2 mb-6 bg-white p-1.5 rounded-xl border border-black/8 w-fit mx-auto">
              {produkUtama.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id as "car" | "ear" | "mb")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border ${
                    activeTab === p.id
                      ? "bg-navy text-white border-navy shadow-sm"
                      : "bg-transparent text-[#475569] border-transparent hover:text-navy hover:bg-navy/4"
                  }`}
                >
                  <span>{p.icon}</span>
                  <span className="hidden sm:inline">{p.singkatan}</span>
                  <span className="sm:hidden text-xs">{p.singkatan}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-card border border-black/8 overflow-hidden shadow-sm">
              {/* Header produk aktif */}
              <div className={`border-l-4 ${produkAktif.warnaAksen} p-6 border-b border-black/6`}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-2xl">{produkAktif.icon}</span>
                      <span className="font-heading font-bold text-navy text-xl">
                        {produkAktif.nama}
                      </span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${produkAktif.warnaBadge}`}>
                        {produkAktif.singkatan}
                      </span>
                      {produkAktif.wajibTender && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-navy text-white">
                          ⚠️ Wajib Tender
                        </span>
                      )}
                    </div>
                    <p className="text-[#475569] text-sm leading-relaxed max-w-[520px]">
                      {produkAktif.deskripsi}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs text-[#5A6472] uppercase tracking-wide font-semibold mb-0.5">
                      Estimasi Rate
                    </div>
                    <div className="font-heading font-bold text-navy text-lg">
                      {produkAktif.estimasiPremi}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detail dua kolom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-black/6">
                {/* Cocok untuk */}
                <div className="p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-3">
                    Cocok untuk
                  </p>
                  <ul className="flex flex-col gap-2">
                    {produkAktif.cocokUntuk.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-gold flex-shrink-0 mt-0.5 font-bold text-xs">✓</span>
                        <span className="text-sm text-navy2 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Jaminan */}
                <div className="p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-3">
                    Yang dijaminkan
                  </p>
                  <ul className="flex flex-col gap-2">
                    {produkAktif.jaminan.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-navy flex-shrink-0 mt-0.5 font-bold text-xs">→</span>
                        <span className="text-sm text-[#475569] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer CTA produk */}
              <div className="px-6 py-4 bg-cream/60 border-t border-black/6 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#475569]">⏱️ Proses klaim:</span>
                  <span className="text-xs font-semibold text-navy">{produkAktif.prosesKlaim}</span>
                </div>
                <div className="flex gap-2.5">
                  <a
                    href={`https://wa.me/${KONTAK.wa}`}
                    className="bg-gold text-navy px-4 py-2 rounded-lg font-bold text-xs no-underline hover:bg-gold2 transition-all"
                  >
                    💬 Minta Penawaran
                  </a>
                  <Link
                    href={produkAktif.href}
                    className="border border-navy/20 text-navy px-4 py-2 rounded-lg text-xs no-underline hover:border-gold hover:text-gold transition-all"
                  >
                    Halaman Lengkap →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tabel Perbandingan ── */}
        <section className="py-14 px-[5vw] max-w-[860px] mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
              Perbandingan Produk
            </p>
            <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-3">
              CAR vs EAR vs Machinery Breakdown
            </h2>
            <p className="text-[#475569] text-base leading-relaxed max-w-[560px]">
              Ketiga produk sering membingungkan karena sama-sama disebut "asuransi engineering".
              Berikut perbandingan langsung untuk membantu Anda memilih:
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[22%]">
                    Aspek
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[26%]">
                    🏗️ CAR
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold2 w-[26%]">
                    ⚙️ EAR
                  </th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold3 rounded-tr-xl w-[26%]">
                    🔧 Machinery Breakdown
                  </th>
                </tr>
              </thead>
              <tbody>
                {tabelPerbandingan.map((row, i) => (
                  <tr key={row.aspek} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                    <td className="p-3.5 text-[#475569] text-sm leading-relaxed align-top">{row.car}</td>
                    <td className="p-3.5 text-navy2 text-sm leading-relaxed align-top">{row.ear}</td>
                    <td className="p-3.5 text-[#475569] text-sm leading-relaxed align-top">{row.mb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Link
              href="/artikel/perbedaan-car-ear-asuransi-engineering"
              className="text-sm text-gold font-semibold no-underline hover:text-gold2 transition-colors"
            >
              Baca perbandingan CAR vs EAR lebih lengkap →
            </Link>
          </div>
        </section>

        {/* ── Proses 4 Langkah ── */}
        <section className="py-14 px-[5vw] bg-cream">
          <div className="max-w-[860px] mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
                Cara Kerja
              </p>
              <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy">
                Dari Konsultasi hingga Polis Terbit — 4 Langkah
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {prosesLangkah.map((l, i) => (
                <div key={l.no} className="relative">
                  {/* Konektor horizontal (desktop) */}
                  {i < prosesLangkah.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(100%-8px)] w-4 h-0.5 bg-gold/30 z-10" />
                  )}
                  <div className="bg-white rounded-card border border-black/8 p-5 h-full hover:border-gold/30 transition-colors">
                    <div className="font-heading text-gold font-bold text-2xl mb-1">{l.no}</div>
                    <div className="font-semibold text-navy text-sm mb-2">{l.judul}</div>
                    <p className="text-xs text-[#475569] leading-relaxed mb-3">{l.detail}</p>
                    <div className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold text-[#5A6472] bg-cream rounded-full px-2.5 py-1 border border-black/6">
                      ⏱️ {l.durasi}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mengapa Kami ── */}
        <section className="py-14 px-[5vw] max-w-[860px] mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">
              Keunggulan Kami
            </p>
            <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy">
              Mengapa Kontraktor DIY Memilih Kami?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                icon: "🎯",
                judul: "Spesialis Engineering Insurance",
                detail:
                  "Kami fokus pada asuransi properti, engineering, dan surety bond — bukan generalis. Pengalaman 11+ tahun mengurus CAR, EAR, dan MB di Yogyakarta membuat kami memahami kebutuhan spesifik kontraktor dan pelaku industri di DIY.",
              },
              {
                icon: "⚡",
                judul: "Negosiasi Langsung ke Underwriter",
                detail:
                  "Kami tidak hanya meneruskan penawaran dari sistem. Kami bernegosiasi langsung dengan underwriter atas nama klien — hasilnya rate lebih kompetitif dan cakupan yang bisa dikustomisasi sesuai kebutuhan kontrak.",
              },
              {
                icon: "📋",
                judul: "Pendampingan Dokumen Tender",
                detail:
                  "Kami memahami persyaratan dokumen asuransi untuk tender pemerintah DIY — format CoI, klausul Principal, dan ketentuan Perpres 12/2021. Polis yang kami terbitkan tidak pernah ditolak panitia karena masalah format.",
              },
              {
                icon: "🛡️",
                judul: "Pendampingan Klaim Hingga Selesai",
                detail:
                  "Jika terjadi musibah, kami tidak menghilang. Kami mendampingi seluruh proses klaim — dari pelaporan, koordinasi loss adjuster, hingga dana klaim diterima. Klaim yang didampingi praktisi berpengalaman terbukti lebih cepat dan lebih adil.",
              },
              {
                icon: "📍",
                judul: "Berbasis di Yogyakarta",
                detail:
                  "Kami berdomisili dan beroperasi di Yogyakarta — memahami karakteristik risiko lokal seperti zona gempa, peta banjir, dan kondisi tanah di berbagai kecamatan. Bukan kantor pusat Jakarta yang tidak tahu kondisi lapangan.",
              },
              {
                icon: "🔄",
                judul: "Monitoring Masa Berlaku Aktif",
                detail:
                  "Kami memantau masa berlaku seluruh polis aktif klien dan mengingatkan 30 hari sebelum jatuh tempo — termasuk jaminan-jaminan surety yang sering terlupakan saat proyek berjalan.",
              },
            ].map((k) => (
              <div
                key={k.judul}
                className="flex gap-4 bg-cream rounded-card p-5 border border-black/5 hover:border-gold/25 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{k.icon}</span>
                <div>
                  <div className="font-semibold text-navy text-sm mb-1.5">{k.judul}</div>
                  <p className="text-xs text-[#475569] leading-relaxed">{k.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Tengah ── */}
        <section className="py-10 px-[5vw]">
          <div className="max-w-[860px] mx-auto bg-gold/8 border border-gold/25 rounded-card p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <div className="font-heading font-bold text-navy text-base mb-1">
                Tidak yakin harus pakai CAR, EAR, atau Combined?
              </div>
              <p className="text-[#475569] text-sm">
                Ceritakan jenis proyek Anda — kami analisis dan rekomendasikan produk yang tepat secara gratis.
              </p>
            </div>
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-gold text-navy px-6 py-3 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all whitespace-nowrap flex-shrink-0"
            >
              💬 Tanya Gratis via WA
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 px-[5vw] max-w-[780px] mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">FAQ</p>
            <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-black/8">
            {faqItems.map((f, i) => (
              <div key={i} className="py-1">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-3 text-left font-semibold text-[0.9rem] text-navy flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer"
                >
                  <span>{f.q}</span>
                  <span
                    className={`text-gold text-xl flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="text-sm leading-[1.78] text-[#475569] pb-4 pr-8">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Artikel Terkait ── */}
        <section className="py-12 px-[5vw] bg-cream">
          <div className="max-w-[860px] mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-5">
              Artikel & Panduan
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {artikelTerkait.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-white border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group"
                >
                  <span className="text-xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <div className="text-[0.65rem] font-bold text-[#5A6472] uppercase tracking-wide mb-0.5">
                      {a.badge}
                    </div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">
                      {a.judul}
                    </div>
                    <div className="text-xs text-[#475569]">{a.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sub-produk Cards ── */}
        <section className="py-14 px-[5vw] max-w-[860px] mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-5">
            Halaman Produk Lengkap
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {produkUtama.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-cream border border-black/8 rounded-card p-5 no-underline hover:border-gold/40 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="font-heading font-bold text-navy text-sm group-hover:text-gold transition-colors mb-1">
                  {p.nama}
                </div>
                <div className="text-xs text-[#475569] mb-3 leading-relaxed">{p.tagline}</div>
                <div className="text-xs text-[#5A6472] mb-0.5 uppercase tracking-wide font-semibold">
                  Estimasi rate
                </div>
                <div className="text-sm font-bold text-navy">{p.estimasiPremi}</div>
                <div className="text-gold text-xs font-semibold mt-3 group-hover:underline">
                  Lihat detail & kalkulator →
                </div>
              </Link>
            ))}
          </div>
        </section>

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
              Proyek Anda Butuh Perlindungan —<br />
              Kami Siap Bantu Hari Ini
            </h2>
            <p className="text-white/75 text-sm max-w-[420px] mx-auto mb-8">
              Konsultasi gratis dengan Rio MD, praktisi asuransi engineering berpengalaman 11+ tahun
              di Yogyakarta. Estimasi premi siap dalam 1 hari kerja.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <Link
                href="/asuransi-surety-bond"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                📋 Butuh Surety Bond juga?
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
