import type { Metadata } from "next";
import Link from "next/link";
import LiabilityLayout from "@/components/liability/LiabilityLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Product Liability Jogja – Perlindungan Cacat Produk",
  description:
    "Asuransi Product Liability di Yogyakarta. Perlindungan hukum produsen, UMKM, dan importir dari gugatan konsumen atas produk cacat atau berbahaya. Konsultasi gratis.",
  keywords:
    "product liability jogja, asuransi cacat produk yogyakarta, tanggung jawab produk indonesia, asuransi produsen jogja, product liability umkm, asuransi makanan minuman jogja, perlindungan konsumen asuransi, recall asuransi produk",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-liability/product-liability" },
  openGraph: {
    title: "Asuransi Product Liability Jogja – Perlindungan Cacat Produk",
    description:
      "Asuransi Product Liability di Yogyakarta. Perlindungan hukum produsen, UMKM, dan importir dari gugatan konsumen atas produk cacat atau berbahaya. Konsultasi gratis.",
    url: "https://asuransijogja.biz.id/asuransi-liability/product-liability",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Product Liability Jogja – Perlindungan Cacat Produk" }],
  },
};

const definisiCacatProduk = [
  {
    icon: "🏭",
    label: "Cacat Desain (Design Defect)",
    desc: "Produk berbahaya bukan karena kesalahan produksi, melainkan karena desain dasarnya yang tidak aman — seluruh batch produk berpotensi bermasalah",
  },
  {
    icon: "⚙️",
    label: "Cacat Manufaktur (Manufacturing Defect)",
    desc: "Kesalahan terjadi dalam proses produksi — produk menyimpang dari desain yang semestinya, hanya unit tertentu yang bermasalah",
  },
  {
    icon: "📋",
    label: "Cacat Informasi (Warning Defect)",
    desc: "Produk tidak dilengkapi peringatan atau instruksi penggunaan yang memadai, sehingga konsumen menggunakannya dengan cara yang membahayakan",
  },
];

const cakupanJaminan = [
  {
    icon: "🏥",
    label: "Biaya Medis Konsumen",
    desc: "Penggantian biaya pengobatan, rawat inap, dan pemulihan konsumen yang mengalami cedera akibat produk Anda",
  },
  {
    icon: "⚖️",
    label: "Ganti Rugi & Kompensasi",
    desc: "Pembayaran ganti rugi kepada konsumen atas kerusakan properti atau kerugian finansial akibat produk cacat",
  },
  {
    icon: "👨‍💼",
    label: "Biaya Pembelaan Hukum",
    desc: "Honorarium pengacara, biaya pengadilan, dan biaya investigasi insiden yang timbul dari gugatan konsumen",
  },
  {
    icon: "📢",
    label: "Biaya Product Recall",
    desc: "Biaya penarikan kembali (recall) produk dari pasaran jika ditemukan cacat yang berpotensi membahayakan konsumen secara massal",
  },
  {
    icon: "🌐",
    label: "Klaim dari Luar Negeri",
    desc: "Perlindungan untuk ekspor produk — jika konsumen di luar negeri mengajukan gugatan atas produk impor dari bisnis Anda",
  },
  {
    icon: "💰",
    label: "Kerugian Finansial Murni",
    desc: "Menanggung kerugian ekonomi konsumen yang tidak bersifat cedera fisik, misalnya kerusakan bisnis akibat menggunakan produk cacat Anda",
  },
];

const kasusNyata = [
  {
    icon: "🍱",
    kategori: "Industri F&B",
    kasus: "Catering perusahaan menyebabkan 30+ karyawan klien keracunan makanan massal",
    dampak: "Gugatan kolektif Rp 800 juta + denda BPOM + pencabutan izin sementara",
    covered: true,
  },
  {
    icon: "🔌",
    kategori: "Elektronik & Gadget",
    kasus: "Charger produksi lokal meledak dan menyebabkan kebakaran di rumah konsumen",
    dampak: "Tuntutan ganti rugi properti Rp 1,2 miliar + biaya medis luka bakar penghuni",
    covered: true,
  },
  {
    icon: "💄",
    kategori: "Kosmetik & Skincare",
    kasus: "Produk skincare UMKM menyebabkan reaksi alergi parah pada ratusan konsumen",
    dampak: "Gugatan class action + biaya recall nasional + rugi omset selama investigasi",
    covered: true,
  },
  {
    icon: "🧸",
    kategori: "Mainan Anak",
    kasus: "Komponen mainan terlepas dan tertelan anak, menyebabkan cedera serius",
    dampak: "Tuntutan ganti rugi orang tua + biaya operasi + proses pidana pengusaha",
    covered: true,
  },
];

const industriTarget = [
  {
    icon: "🍽️",
    label: "F&B & Kuliner",
    desc: "Produsen makanan, katering, toko kue, minuman kemasan — risiko keracunan dan kontaminasi",
  },
  {
    icon: "💄",
    label: "Kosmetik & Perawatan",
    desc: "Produk skincare, sabun, parfum buatan lokal/UMKM — risiko alergi dan iritasi konsumen",
  },
  {
    icon: "🔧",
    label: "Elektronik & Alat Rumah Tangga",
    desc: "Produsen dan importir alat listrik, gadget, dan peralatan rumah tangga",
  },
  {
    icon: "🧸",
    label: "Mainan & Perlengkapan Anak",
    desc: "Potensi cedera anak akibat bahan berbahaya atau komponen yang terlepas",
  },
  {
    icon: "🏗️",
    label: "Material Bangunan",
    desc: "Produsen cat, lem, genteng, dan material konstruksi yang berdampak pada pengguna",
  },
  {
    icon: "🌿",
    label: "Herbal & Suplemen",
    desc: "Produsen jamu, suplemen, dan produk wellness — regulasi BPOM dan risiko efek samping",
  },
];

const regulasi = [
  {
    kode: "UU No.8/1999",
    nama: "Perlindungan Konsumen",
    poin: "Pelaku usaha wajib memberikan jaminan keamanan produk dan bertanggung jawab atas kerugian yang dialami konsumen akibat produk cacat",
  },
  {
    kode: "PP No.69/1999",
    nama: "Label dan Iklan Pangan",
    poin: "Produsen wajib mencantumkan informasi produk yang akurat — pelanggaran bisa berujung sanksi dan tuntutan ganti rugi konsumen",
  },
  {
    kode: "UU No.36/2009",
    nama: "Kesehatan",
    poin: "Produsen produk kesehatan dan pangan bertanggung jawab penuh atas keamanan produk yang dipasarkan kepada masyarakat",
  },
];

const faqItems = [
  {
    q: "Apakah product liability wajib untuk UMKM di Indonesia?",
    a: "Belum ada kewajiban hukum nasional, namun UU Perlindungan Konsumen No.8/1999 memberikan hak kepada konsumen untuk menggugat produsen atas produk cacat. UMKM justru lebih rentan karena tidak memiliki cadangan finansial untuk menghadapi gugatan besar.",
  },
  {
    q: "Apa bedanya product liability dengan public liability?",
    a: "Public liability menanggung cedera atau kerugian yang terjadi DI LOKASI bisnis Anda. Product liability menanggung kerugian yang terjadi AKIBAT PRODUK Anda — di mana pun konsumen menggunakannya, termasuk di rumah mereka.",
  },
  {
    q: "Apakah reseller atau toko yang menjual produk orang lain perlu product liability?",
    a: "Ya. Dalam hukum perlindungan konsumen Indonesia, rantai distribusi bisa ikut terkena gugatan — produsen, distributor, hingga pengecer. Meski terbatas, reseller tetap disarankan memiliki perlindungan, terutama jika menjual produk impor tanpa merek lokal yang jelas.",
  },
  {
    q: "Bagaimana jika produk saya sudah bersertifikasi BPOM atau SNI, apakah tetap perlu asuransi?",
    a: "Ya, tetap perlu. Sertifikasi BPOM/SNI membuktikan produk Anda memenuhi standar saat diproduksi, namun tidak menghilangkan risiko gugatan hukum dari konsumen yang mengklaim dirugikan. Asuransi menanggung biaya pembelaan dan ganti rugi bahkan jika gugatan tidak terbukti di pengadilan.",
  },
  {
    q: "Apakah product recall (penarikan produk) termasuk dalam coverage?",
    a: "Tergantung polis. Beberapa polis product liability mencakup recall expense sebagai perluasan jaminan. Ini sangat penting untuk produsen makanan, obat, dan produk dengan potensi kontaminasi massal. Tanyakan ke kami untuk memastikan perluasan ini masuk dalam penawaran.",
  },
];

export default function ProductLiabilityPage() {
  return (
    <LiabilityLayout
      breadcrumbs={[
        { label: "Asuransi Liability", href: "/asuransi-liability" },
        { label: "Product Liability" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Beranda\", \"item\": \"https://asuransijogja.biz.id\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Asuransi Liability\", \"item\": \"https://asuransijogja.biz.id/asuransi-liability\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Product Liability\", \"item\": \"https://asuransijogja.biz.id/asuransi-liability/product-liability\"}]}" }}
      />

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)" }} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">📦</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-liability" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Liability</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Product Liability · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Product Liability<br /><em className="not-italic text-gold">Perlindungan Produsen</em><br />dari Gugatan Konsumen
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-8">
            Setiap produk yang Anda jual membawa tanggung jawab hukum. Jika produk Anda menyebabkan cedera atau kerugian konsumen — baik karena cacat desain, kesalahan produksi, atau informasi yang tidak memadai — bisnis Anda bisa digugat ratusan juta hingga miliaran rupiah.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#kasus" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Contoh Kasus →</a>
          </div>
        </div>
      </section>

      {/* DEFINISI CACAT PRODUK */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Jenis Cacat Produk</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">3 Jenis Cacat Produk<br />yang Bisa Berujung Gugatan</h2>
          <p className="text-base text-[#475569] max-w-[500px] mx-auto mt-3">Sesuai UU Perlindungan Konsumen No.8/1999, produsen bertanggung jawab atas tiga jenis cacat produk berikut</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {definisiCacatProduk.map(d => (
            <div key={d.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{d.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{d.label}</div>
              <p className="text-base leading-relaxed text-[#475569]">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAKUPAN JAMINAN */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa yang Dijamin<br />Product Liability?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {cakupanJaminan.map(c => (
            <div key={c.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{c.label}</div>
              <p className="text-base leading-relaxed text-[#475569]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KASUS NYATA */}
      <section id="kasus" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Contoh Kasus</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Kasus Nyata Product Liability<br />yang Menimpa Bisnis Lokal</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {kasusNyata.map(k => (
            <div key={k.kasus} className="bg-white rounded-card p-6 border border-black/6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{k.icon}</span>
                <span className="text-xs font-bold tracking-widest uppercase text-gold">{k.kategori}</span>
              </div>
              <div className="font-heading text-navy font-semibold text-[0.95rem] mb-3">{k.kasus}</div>
              <div className="bg-red-50 border border-red-100 rounded-lg px-3 py-2.5 text-xs text-red-700 leading-relaxed mb-3">⚠️ {k.dampak}</div>
              <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-xs text-green-700">✅ Dengan Product Liability: semua biaya di atas ditanggung polis</div>
            </div>
          ))}
        </div>
      </section>

      {/* REGULASI */}
      <section className="py-14 px-[5vw] bg-white">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Landasan Hukum</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Dasar Hukum Tanggung Jawab<br />Produk di Indonesia</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {regulasi.map(r => (
            <div key={r.kode} className="bg-cream rounded-card p-6 border border-black/6 grid grid-cols-[90px_1fr] gap-4 items-start">
              <div className="bg-navy rounded-lg p-2 text-center"><div className="font-heading text-gold text-[0.78rem] font-bold leading-tight">{r.kode}</div></div>
              <div><div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{r.nama}</div><p className="text-base leading-relaxed text-[#475569]">{r.poin}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRI TARGET */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Industri Sasaran</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Bisnis yang Paling<br />Membutuhkan Product Liability</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {industriTarget.map(i => (
            <div key={i.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{i.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{i.label}</div>
              <p className="text-base leading-relaxed text-[#475569]">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-[5vw] bg-white">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Pertanyaan Seputar<br />Product Liability</h2>
        </div>
        <div className="max-w-[700px] mx-auto">
          {faqItems.map((f, i) => (
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}<span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-base leading-[1.78] text-[#475569] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-liability/public-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
            <Link href="/asuransi-liability/employer-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
            <Link href="/asuransi-liability/limbah-b3" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚗️ Liability Limbah B3 →</Link>
            <Link href="/artikel/contoh-kasus-gugatan-liability-bisnis" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📖 Studi Kasus Gugatan →</Link>
            <Link href="/asuransi-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Liability</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Produk Anda Ada di Tangan<br />Konsumen — Pastikan Anda Terlindungi</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis Product Liability — kami bantu analisis risiko produk Anda dan rekomendasikan limit yang tepat.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Product Liability</a>
        </div>
      </section>

      {/* PENJELASAN LENGKAP, STUDI KASUS & ESTIMASI PREMI */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Lengkap</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.6vw,2.2rem)] text-navy leading-[1.25] mb-5">Asuransi Product Liability: Lindungi Bisnis dari Klaim Cacat Produk</h2>
          <div className="text-base leading-[1.85] text-[#475569] space-y-4">
            <p>Pelaku usaha manufaktur, makanan-minuman kemasan, dan kerajinan ekspor di Yogyakarta menghadapi risiko tuntutan hukum jika produk yang mereka jual menyebabkan kerugian, cedera, atau kerusakan kepada konsumen — baik akibat cacat produksi, kontaminasi, maupun kesalahan label/instruksi penggunaan.</p>
            <p>Product Liability menanggung biaya kompensasi konsumen yang dirugikan serta biaya hukum pembelaan, termasuk dalam kasus product recall (penarikan produk dari pasar) yang bisa sangat mahal jika ditanggung sendiri oleh perusahaan.</p>
            <p>Bagi UMKM yang mulai mengekspor produk ke pasar internasional, banyak buyer luar negeri mensyaratkan bukti polis product liability sebagai bagian dari due diligence sebelum kontrak distribusi ditandatangani.</p>
          </div>

          <div className="bg-white border border-black/8 rounded-card p-6 mt-8">
            <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Kontaminasi Produk Makanan Kemasan Memicu Klaim Konsumen</div>
            <p className="text-sm leading-relaxed text-[#475569]">Sebuah produsen makanan ringan kemasan di Bantul menerima keluhan dari beberapa konsumen yang mengalami gangguan pencernaan setelah mengonsumsi produknya akibat masalah pada satu batch produksi. Konsumen mengajukan klaim kompensasi biaya pengobatan dan kerugian. Karena produsen memiliki polis Product Liability, biaya kompensasi dan penanganan hukum ditanggung polis, sehingga reputasi dan keuangan perusahaan tetap terjaga selama proses investigasi dan perbaikan proses produksi berlangsung.</p>
          </div>

          <div className="mt-8">
            <div className="font-heading text-navy font-bold text-[1.05rem] mb-3">🧮 Estimasi Premi Product Liability (Ilustrasi, per Tahun)</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden bg-white">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Jenis Usaha</th><th className="p-3 text-left font-semibold">Limit Liability</th><th className="p-3 text-left font-semibold">Estimasi Premi/Tahun</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">UMKM makanan kemasan</td><td className="p-3 border-t border-black/8">Rp 500.000.000</td><td className="p-3 border-t border-black/8">Rp 3.000.000 – Rp 6.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Manufaktur skala menengah</td><td className="p-3 border-t border-black/8">Rp 2.000.000.000</td><td className="p-3 border-t border-black/8">Rp 12.000.000 – Rp 20.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Eksportir kerajinan/produk</td><td className="p-3 border-t border-black/8">Rp 1.000.000.000</td><td className="p-3 border-t border-black/8">Rp 6.000.000 – Rp 10.000.000</td></tr>
                  
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#5A6472] mt-2">*Estimasi premi bersifat indikatif berdasarkan pola tarif acuan OJK dan komponen risiko umum untuk ilustrasi — bukan penawaran resmi. Premi final ditentukan setelah survei dan underwriting oleh perusahaan asuransi.</p>
          </div>

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-black/8">
            <div className="w-11 h-11 rounded-full bg-navy text-gold flex items-center justify-center font-heading font-bold flex-shrink-0">RM</div>
            <div>
              <div className="text-sm font-semibold text-navy">Ditinjau oleh Rio Mardiansyah</div>
              <div className="text-xs text-[#475569]">Praktisi Asuransi Independen · 9+ Tahun Pengalaman · Berbasis di Yogyakarta</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/asuransi-liability" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Semua Produk Liability →</Link>
            <Link href="/asuransi-liability/limbah-b3" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏭 Liability Limbah B3 →</Link>
            <Link href="/artikel/contoh-kasus-gugatan-liability-bisnis" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📖 Studi Kasus Gugatan Liability →</Link>
          </div>
        </div>
      </section>

    </LiabilityLayout>
  );
}
