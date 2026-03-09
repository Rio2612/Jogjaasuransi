import type { Metadata } from "next";
import Link from "next/link";
import SuretyLayout from "@/components/surety/SuretyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jaminan Uang Muka (Advance Payment Bond) Jogja – Kontraktor DIY | Asuransi Jogja",
  description: "Jaminan Uang Muka (Advance Payment Bond) di Yogyakarta. Syarat pencairan uang muka proyek pemerintah DIY. Nilai sesuai uang muka diterima. Proses cepat. Konsultasi gratis.",
  keywords: "jaminan uang muka jogja, advance payment bond yogyakarta, jaminan UM proyek pemerintah DIY, surety bond uang muka kontraktor jogja, APB tender yogyakarta",
  openGraph: { title: "Jaminan Uang Muka (Advance Payment Bond) Jogja", url: "https://asuransijogja.com/asuransi-surety-bond/jaminan-uang-muka" },
};

const mekanismeUM = [
  { step: "01", icon: "📝", label: "Kontrak Ditandatangani", desc: "Pemilik proyek dan kontraktor menandatangani kontrak — uang muka biasanya 20–30% dari nilai kontrak" },
  { step: "02", icon: "📋", label: "APB Diserahkan", desc: "Kontraktor menyerahkan Jaminan Uang Muka senilai uang muka yang akan diterima kepada pemilik proyek" },
  { step: "03", icon: "💳", label: "Uang Muka Dicairkan", desc: "Setelah APB diterima dan diverifikasi, pemilik proyek mencairkan uang muka kepada kontraktor" },
  { step: "04", icon: "📉", label: "Nilai Berkurang Progresif", desc: "Nilai APB berkurang proporsional seiring uang muka dikembalikan melalui pemotongan termin pembayaran" },
  { step: "05", icon: "✅", label: "APB Berakhir", desc: "APB selesai saat seluruh uang muka telah dikembalikan — biasanya sebelum masa pelaksanaan berakhir" },
];

const infoTambahan = [
  { icon: "💡", label: "Nilai APB", detail: "Senilai 100% uang muka yang diterima — misalnya uang muka Rp 200 juta maka APB juga Rp 200 juta" },
  { icon: "📅", label: "Masa Berlaku", detail: "Hingga seluruh uang muka selesai dikembalikan melalui pemotongan termin atau sampai proyek selesai" },
  { icon: "⬇️", label: "Pengurangan Nilai", detail: "APB dapat berkurang proporsional seiring uang muka yang sudah dikembalikan — sesuai kesepakatan kontrak" },
  { icon: "🔄", label: "Hubungan dengan PB", detail: "APB berjalan beriringan dengan Performance Bond — keduanya aktif sejak awal pelaksanaan proyek" },
];

export default function JaminanUangMukaPage() {
  return (
    <SuretyLayout breadcrumbs={[
      { label: "Surety Bond", href: "/asuransi-surety-bond" },
      { label: "Jaminan Uang Muka" }
    ]}>
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">💰</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-surety-bond" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Surety Bond</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Advance Payment Bond · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Jaminan Uang Muka<br /><em className="not-italic text-gold">(Advance Payment Bond)</em><br />Syarat Cairkan Uang Muka Proyek
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Pemilik proyek tidak akan mencairkan uang muka tanpa Jaminan Uang Muka yang valid. Dokumen ini adalah kunci untuk mendapatkan modal awal yang dibutuhkan kontraktor memulai pekerjaan di lapangan.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Proses APB Sekarang</a>
            <a href="#mekanisme" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Cara Kerja APB →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"100%",lbl:"Nilai Uang Muka"},{num:"Progresif",lbl:"Berkurang Seiring Termin"},{num:"1–2 Hari",lbl:"Proses Penerbitan"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="mekanisme" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cara Kerja</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Alur Jaminan Uang Muka<br />dari Awal hingga Selesai</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {mekanismeUM.map(m=>(
            <div key={m.step} className="bg-white rounded-card p-5 border border-black/5 grid grid-cols-[auto_1fr] gap-4 items-center">
              <div className="bg-navy text-gold font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">{m.step}</div>
              <div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1 flex items-center gap-2">{m.icon} {m.label}</div>
                <p className="text-xs leading-relaxed text-[#64748B]">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-[5vw] bg-white">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Detail Ketentuan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Hal Penting yang Perlu<br />Diketahui tentang APB</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {infoTambahan.map(i=>(
            <div key={i.label} className="bg-cream rounded-card p-6 border border-black/6">
              <div className="text-3xl mb-3">{i.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{i.label}</div>
              <p className="text-sm leading-relaxed text-[#64748B]">{i.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Jaminan Lainnya</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-surety-bond/jaminan-penawaran" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📋 Jaminan Penawaran →</Link>
            <Link href="/asuransi-surety-bond/jaminan-pelaksanaan" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ Jaminan Pelaksanaan →</Link>
            <Link href="/asuransi-surety-bond/jaminan-pemeliharaan" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🛡️ Jaminan Pemeliharaan →</Link>
            <Link href="/asuransi-surety-bond" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Surety Bond</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Uang Muka Proyek<br />Cair Lebih Cepat dengan APB</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis — kami bantu proses APB dengan cepat agar modal proyek segera cair dan pekerjaan bisa dimulai.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Proses APB via WhatsApp</a>
        </div>
      </section>
    </SuretyLayout>
  );
}
