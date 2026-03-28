import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bengkel Rekanan Asuransi di Jogja: Panduan Memilih yang Tepat",
  description: "Panduan lengkap memilih bengkel rekanan asuransi di Yogyakarta. Perbedaan bengkel rekanan resmi vs umum, tips memastikan kualitas perbaikan, dan hal yang perlu diketahui saat klaim.",
  keywords: "bengkel rekanan asuransi jogja, bengkel asuransi yogyakarta, bengkel klaim asuransi mobil jogja, bengkel resmi asuransi DIY, klaim asuransi bengkel jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/bengkel-rekanan-asuransi-jogja" },
  openGraph: {
    title: "Bengkel Rekanan Asuransi di Jogja: Panduan Memilih yang Tepat",
    url: "https://asuransijogja.biz.id/artikel/bengkel-rekanan-asuransi-jogja",
  },
};

const bedaBengkel = [
  { aspek: "Status", rekanan: "Terdaftar & disetujui langsung oleh perusahaan asuransi", umum: "Bengkel pilihan pemegang polis — tidak terdaftar di jaringan asuransi" },
  { aspek: "Proses Klaim", rekanan: "Langsung antara bengkel & asuransi — pemegang polis tidak perlu bayar dulu", umum: "Bayar dulu, lalu ajukan reimbursement ke asuransi" },
  { aspek: "Garansi Pengerjaan", rekanan: "Garansi dari bengkel + dijamin oleh asuransi", umum: "Garansi hanya dari bengkel yang bersangkutan" },
  { aspek: "Spare Part", rekanan: "Suku cadang sesuai standar yang disepakati dengan asuransi", umum: "Suku cadang sesuai kesepakatan dengan bengkel — perlu diperiksa sendiri" },
  { aspek: "Waktu Perbaikan", rekanan: "Umumnya lebih terstandar karena ada SLA dengan asuransi", umum: "Bergantung pada kebijakan bengkel masing-masing" },
];

const tipsMemilih = [
  { icon: "📍", tip: "Pilih yang Dekat & Strategis", detail: "Pertimbangkan jarak dari rumah atau kantor — kendaraan di bengkel bisa memakan waktu beberapa hari, Anda perlu bisa memantau progres pengerjaan" },
  { icon: "⭐", tip: "Cek Reputasi & Ulasan", detail: "Tanyakan ke komunitas kendaraan di Yogyakarta atau cari ulasan online. Pengalaman orang lain adalah indikator terbaik kualitas bengkel" },
  { icon: "🔧", tip: "Pastikan Spesialisasi Sesuai", detail: "Bengkel yang spesialis merek kendaraan Anda umumnya lebih andal. Kendaraan Eropa dan Jepang sering membutuhkan spesialisasi berbeda" },
  { icon: "📋", tip: "Minta Estimasi Tertulis", detail: "Sebelum menyetujui perbaikan, minta estimasi biaya tertulis dengan detail suku cadang yang akan diganti — ini penting untuk proses klaim" },
  { icon: "🛡️", tip: "Konfirmasi Garansi Pengerjaan", detail: "Bengkel rekanan yang baik memberikan garansi pengerjaan minimal 30–90 hari. Tanyakan dan minta tertulis di nota serah terima kendaraan" },
  { icon: "💬", tip: "Koordinasi dengan Konsultan", detail: "Sebelum menentukan bengkel, konsultasikan dengan konsultan asuransi Anda — mereka sering tahu bengkel rekanan mana yang paling direkomendasikan" },
];

const prosesKlaimBengkel = [
  { step: "01", label: "Lapor ke asuransi", detail: "Hubungi asuransi/konsultan, dapatkan surat pengantar atau approval untuk masuk bengkel rekanan" },
  { step: "02", label: "Bawa kendaraan ke bengkel", detail: "Tunjukkan surat pengantar dari asuransi — bengkel akan memeriksa dan membuat estimasi kerusakan" },
  { step: "03", label: "Survei oleh adjuster", detail: "Surveyor asuransi mengunjungi bengkel untuk memverifikasi kerusakan dan menyetujui biaya perbaikan" },
  { step: "04", label: "Perbaikan dimulai", detail: "Setelah approval surveyor, bengkel mulai melakukan perbaikan sesuai estimasi yang disetujui" },
  { step: "05", label: "Kendaraan selesai", detail: "Periksa kualitas sebelum menerima. Tanda tangan serah terima kendaraan setelah puas dengan hasil perbaikan" },
];

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Bengkel Rekanan Asuransi di Jogja: Panduan Memilih yang Tepat",
  "description": "Panduan memilih bengkel rekanan asuransi yang tepat di Yogyakarta untuk proses klaim yang lancar.",
  "url": "https://asuransijogja.biz.id/artikel/bengkel-rekanan-asuransi-jogja",
  "author": { "@type": "Person", "name": "Rio Mardiansyah" },
  "publisher": { "@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id" },
  "inLanguage": "id-ID",
};

export default function BengkelRekananPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }} />

      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-xs text-[#64748B] flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Bengkel Rekanan Asuransi Jogja</span>
        </div>
      </div>

      <article className="max-w-[760px] mx-auto px-[5vw] py-14">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">🔧 Kendaraan</span>
            <span className="text-[#94A3B8] text-xs">⏱ 6 menit baca</span>
          </div>
          <h1 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy leading-[1.2] mb-4">
            Bengkel Rekanan Asuransi di Jogja:<br />Panduan Memilih yang Tepat
          </h1>
          <p className="text-[#64748B] text-lg leading-[1.85]">
            Saat kendaraan rusak dan Anda mengajukan klaim, salah satu keputusan penting adalah memilih bengkel untuk perbaikan. Memahami perbedaan bengkel rekanan resmi dan bengkel umum bisa membuat proses klaim jauh lebih mudah dan memuaskan.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">Bengkel Rekanan Resmi vs Bengkel Umum</h2>
          <div className="overflow-x-auto rounded-xl border border-black/8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-4 font-heading font-semibold text-xs">Aspek</th>
                  <th className="text-left p-4 font-heading font-semibold text-xs text-gold">Bengkel Rekanan</th>
                  <th className="text-left p-4 font-heading font-semibold text-xs">Bengkel Umum</th>
                </tr>
              </thead>
              <tbody>
                {bedaBengkel.map((b, i) => (
                  <tr key={b.aspek} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                    <td className="p-4 font-semibold text-navy text-xs">{b.aspek}</td>
                    <td className="p-4 text-navy2 text-sm leading-relaxed font-medium">{b.rekanan}</td>
                    <td className="p-4 text-[#64748B] text-sm leading-relaxed">{b.umum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-gold/8 border-l-4 border-gold rounded-r-xl">
            <p className="text-sm text-navy2"><strong className="text-gold">Rekomendasi:</strong> Untuk kemudahan dan kecepatan proses, gunakan bengkel rekanan resmi asuransi Anda. Ini menghilangkan kerumitan reimbursement dan memberikan kepastian garansi pengerjaan.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">Alur Proses Klaim di Bengkel Rekanan</h2>
          <div className="flex flex-col gap-4">
            {prosesKlaimBengkel.map(p => (
              <div key={p.step} className="flex gap-4 p-4 bg-cream rounded-xl border border-black/5">
                <div className="bg-navy text-gold font-heading font-bold text-xs w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">{p.step}</div>
                <div>
                  <div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{p.label}</div>
                  <p className="text-xs text-[#64748B] leading-relaxed">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">6 Tips Memilih Bengkel Rekanan yang Tepat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tipsMemilih.map(t => (
              <div key={t.tip} className="bg-cream rounded-xl p-5 border border-black/5">
                <div className="text-2xl mb-2">{t.icon}</div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">{t.tip}</div>
                <p className="text-base leading-relaxed text-[#64748B]">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 p-6 bg-cream rounded-xl border border-black/6">
          <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Artikel & Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/artikel/cara-klaim-asuransi-mobil" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📋 Cara Klaim Asuransi Mobil →</Link>
            <Link href="/asuransi-kendaraan/mobil" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Asuransi Mobil Jogja →</Link>
            <Link href="/asuransi-kendaraan" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Semua Asuransi Kendaraan →</Link>
          </div>
        </section>

        <div className="bg-navy rounded-[20px] p-8 text-center">
          <h3 className="font-heading text-white text-[1.4rem] mb-3">Bingung Pilih Bengkel Rekanan?</h3>
          <p className="text-white/85 text-sm mb-6 max-w-[400px] mx-auto">Konsultasikan dengan Pak Rio — kami bisa merekomendasikan bengkel rekanan terbaik sesuai merek dan jenis kendaraan Anda di Yogyakarta.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Tanya via WhatsApp</a>
        </div>
      </article>
    </>
  );
}
