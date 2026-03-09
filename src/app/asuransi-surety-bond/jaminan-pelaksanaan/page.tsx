import type { Metadata } from "next";
import Link from "next/link";
import SuretyLayout from "@/components/surety/SuretyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jaminan Pelaksanaan (Performance Bond) Jogja – Garansi Kontrak | Asuransi Jogja",
  description: "Jaminan Pelaksanaan (Performance Bond) di Yogyakarta. Garansi kontraktor menyelesaikan proyek sesuai kontrak. Nilai 5% dari kontrak. Untuk proyek APBN, APBD DIY, dan swasta.",
  keywords: "jaminan pelaksanaan jogja, performance bond yogyakarta, jaminan kontrak konstruksi jogja, performance bond kontraktor DIY, surety bond pelaksanaan proyek yogyakarta",
  openGraph: { title: "Jaminan Pelaksanaan (Performance Bond) Jogja", url: "https://asuransijogja.com/asuransi-surety-bond/jaminan-pelaksanaan" },
};

const fungsiPB = [
  { icon: "🏆", label: "Garansi Penyelesaian Proyek", desc: "Menjamin pemilik proyek bahwa kontraktor akan menyelesaikan seluruh pekerjaan sesuai spesifikasi teknis, mutu, dan tenggat waktu kontrak" },
  { icon: "💰", label: "Kompensasi jika Gagal", desc: "Jika kontraktor wanprestasi atau tidak dapat menyelesaikan proyek, pemilik mendapat kompensasi dari penjamin untuk menutup biaya penyelesaian" },
  { icon: "⚖️", label: "Kepastian Hukum Kontrak", desc: "Keberadaan Performance Bond memberikan kepastian hukum bagi kedua pihak — kontraktor terikat untuk menyelesaikan, pemilik terlindungi dari risiko gagal" },
  { icon: "📊", label: "Syarat Pencairan Termin", desc: "Banyak pemilik proyek mensyaratkan Performance Bond yang aktif sebagai syarat pencairan setiap termin pembayaran pekerjaan" },
];

const kondisiKlaim = [
  { kondisi: "Kontraktor menghentikan pekerjaan tanpa alasan yang sah sebelum kontrak selesai" },
  { kondisi: "Kontraktor dinyatakan pailit dan tidak dapat melanjutkan pekerjaan" },
  { kondisi: "Kontraktor melanggar spesifikasi teknis yang mengakibatkan kerusakan struktural" },
  { kondisi: "Proyek terbengkalai melebihi batas waktu kontrak tanpa penyelesaian" },
  { kondisi: "Kontraktor menyerahkan pekerjaan dengan mutu jauh di bawah standar kontrak" },
];

const nilaiDurasi = [
  { aspek: "Nilai Jaminan", detail: "5% dari nilai kontrak (standar pemerintah) atau sesuai perjanjian kontrak swasta" },
  { aspek: "Masa Berlaku", detail: "Sejak penandatanganan kontrak hingga serah terima pertama (PHO — Provisional Hand Over)" },
  { aspek: "Perpanjangan", detail: "Wajib diperpanjang jika terjadi addendum waktu pelaksanaan — jaminan harus tetap aktif hingga PHO" },
  { aspek: "Pencairan Jaminan", detail: "Dapat dicairkan jika kontraktor terbukti wanprestasi sesuai ketentuan kontrak dan peraturan pengadaan" },
];

export default function JaminanPelaksanaanPage() {
  return (
    <SuretyLayout breadcrumbs={[
      { label: "Surety Bond", href: "/asuransi-surety-bond" },
      { label: "Jaminan Pelaksanaan" }
    ]}>
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🏗️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-surety-bond" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Surety Bond</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Performance Bond · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Jaminan Pelaksanaan<br /><em className="not-italic text-gold">(Performance Bond)</em><br />Garansi Proyek Selesai Tepat Waktu
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Jaminan Pelaksanaan adalah jaminan terpenting dalam siklus pengadaan — aktif sepanjang proyek berjalan dan menjadi pegangan pemilik proyek bahwa investasi mereka akan terlaksana sesuai kontrak.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Proses Performance Bond</a>
            <a href="#nilai" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Nilai & Durasi →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"5%",lbl:"Dari Nilai Kontrak"},{num:"Hingga PHO",lbl:"Masa Berlaku"},{num:"1–2 Hari",lbl:"Proses Penerbitan"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Fungsi Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Mengapa Performance Bond<br />Wajib Ada Sepanjang Proyek?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {fungsiPB.map(f=>(
            <div key={f.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{f.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="nilai" className="py-14 px-[5vw] bg-white">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Detail Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Nilai, Durasi &<br />Ketentuan Pencairan</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {nilaiDurasi.map(n=>(
            <div key={n.aspek} className="bg-cream rounded-card p-5 border border-black/5 grid grid-cols-[130px_1fr] gap-4 items-start">
              <div className="font-heading text-navy font-bold text-sm">{n.aspek}</div>
              <p className="text-sm text-[#64748B] leading-relaxed">{n.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Kondisi Klaim</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Kapan Performance Bond<br />Dapat Dicairkan?</h2>
        </div>
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {kondisiKlaim.map((k, i)=>(
            <div key={i} className="bg-white rounded-card p-4 border border-black/5 flex gap-3 items-start">
              <div className="bg-red-100 text-red-700 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</div>
              <p className="text-sm text-navy2 leading-relaxed">{k.kondisi}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-2xl mx-auto bg-navy rounded-xl p-5 text-white">
          <p className="text-sm text-white/80"><strong className="text-gold">💡 Untuk Kontraktor:</strong> Performance Bond bukan berarti Anda tidak dipercaya — ini adalah standar profesional yang justru meningkatkan kredibilitas Anda di mata pemilik proyek dan membuka akses ke proyek bernilai lebih besar.</p>
        </div>
      </section>

      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Jaminan Lainnya</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-surety-bond/jaminan-penawaran" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📋 Jaminan Penawaran →</Link>
            <Link href="/asuransi-surety-bond/jaminan-uang-muka" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">💰 Jaminan Uang Muka →</Link>
            <Link href="/asuransi-surety-bond/jaminan-pemeliharaan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛡️ Jaminan Pemeliharaan →</Link>
            <Link href="/asuransi-engineering/contractor-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ Contractor All Risk →</Link>
            <Link href="/asuransi-surety-bond" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Surety Bond</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Kontrak Sudah di Tangan —<br />Performance Bond Harus Siap</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Proses penerbitan cepat, dokumen profesional, diterima di semua instansi pemerintah DIY. Hubungi Pak Rio sekarang.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Proses Performance Bond</a>
        </div>
      </section>
    </SuretyLayout>
  );
}
