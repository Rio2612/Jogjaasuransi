import type { Metadata } from "next";
import Link from "next/link";
import SuretyLayout from "@/components/surety/SuretyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jaminan Pemeliharaan (Maintenance Bond) Jogja – Garansi Pascaproyek | Asuransi Jogja",
  description: "Jaminan Pemeliharaan (Maintenance Bond) di Yogyakarta. Garansi perbaikan cacat setelah serah terima proyek. Nilai 5% dari kontrak. Masa berlaku hingga FHO. Konsultasi gratis.",
  keywords: "jaminan pemeliharaan jogja, maintenance bond yogyakarta, jaminan garansi proyek DIY, defect liability bond jogja, surety bond pemeliharaan kontraktor yogyakarta",
  openGraph: { title: "Jaminan Pemeliharaan (Maintenance Bond) Jogja", url: "https://asuransijogja.com/asuransi-surety-bond/jaminan-pemeliharaan" },
};

const fungsiMB = [
  { icon: "🔍", label: "Jaminan Perbaikan Cacat", desc: "Menjamin kontraktor memperbaiki setiap kerusakan atau cacat pekerjaan yang ditemukan dalam masa pemeliharaan setelah serah terima pertama" },
  { icon: "📅", label: "Aktif Selama Masa Garansi", desc: "Maintenance Bond aktif sejak PHO (Provisional Hand Over) hingga FHO (Final Hand Over) — umumnya 6–12 bulan" },
  { icon: "🛠️", label: "Menanggung Biaya Perbaikan", desc: "Jika kontraktor tidak merespons atau tidak mampu memperbaiki cacat, pemilik dapat mencairkan jaminan untuk membiayai perbaikan" },
  { icon: "🏁", label: "Penutup Siklus Pengadaan", desc: "Maintenance Bond adalah jaminan terakhir dalam siklus pengadaan — proyek benar-benar selesai saat FHO dan MB berakhir" },
];

const bedaPHOvsFHO = [
  { tahap: "PHO (Provisional Hand Over)", desc: "Serah terima pertama — pekerjaan dinyatakan selesai secara fisik. Performance Bond berakhir, Maintenance Bond mulai berlaku." },
  { tahap: "Masa Pemeliharaan", desc: "Periode di mana kontraktor wajib memperbaiki cacat yang ditemukan. Biasanya 180–365 hari tergantung jenis pekerjaan." },
  { tahap: "FHO (Final Hand Over)", desc: "Serah terima akhir — semua cacat telah diperbaiki dan diterima. Maintenance Bond berakhir. Proyek tuntas." },
];

const jenisDefect = [
  "Retak pada dinding, plat lantai, atau struktur beton yang bukan akibat penggunaan",
  "Kebocoran atap, dinding, atau instalasi pipa yang tidak terdeteksi saat PHO",
  "Kerusakan instalasi mekanikal-elektrikal: pompa, lift, AC, panel listrik",
  "Penurunan muka tanah di area perkerasan jalan atau halaman",
  "Cat atau finishing yang mengelupas dalam kondisi normal",
  "Pintu, jendela, atau kusen yang tidak berfungsi dengan baik",
];

export default function JaminanPemeliharaanPage() {
  return (
    <SuretyLayout breadcrumbs={[
      { label: "Surety Bond", href: "/asuransi-surety-bond" },
      { label: "Jaminan Pemeliharaan" }
    ]}>
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🛡️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-surety-bond" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Surety Bond</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Maintenance Bond · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Jaminan Pemeliharaan<br /><em className="not-italic text-gold">(Maintenance Bond)</em><br />Garansi Mutu Setelah Serah Terima
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Proyek selesai bukan berarti tanggung jawab kontraktor berakhir. Jaminan Pemeliharaan memastikan pemilik proyek terlindungi dari cacat tersembunyi yang baru muncul setelah serah terima pertama.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Proses Maintenance Bond</a>
            <a href="#pho-fho" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">PHO vs FHO →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"5%",lbl:"Dari Nilai Kontrak"},{num:"6–12 Bln",lbl:"Masa Pemeliharaan Umum"},{num:"PHO→FHO",lbl:"Periode Aktif"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Fungsi Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa yang Dijamin<br />selama Masa Pemeliharaan?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {fungsiMB.map(f=>(
            <div key={f.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{f.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pho-fho" className="py-14 px-[5vw] bg-white">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Alur Serah Terima</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">PHO, Masa Pemeliharaan,<br />dan FHO — Satu Siklus Penuh</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {bedaPHOvsFHO.map((b, i)=>(
            <div key={b.tahap} className="bg-cream rounded-card p-5 border border-black/5 grid grid-cols-[auto_1fr] gap-4 items-start">
              <div className="bg-navy text-gold font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">{i+1}</div>
              <div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{b.tahap}</div>
                <p className="text-xs leading-relaxed text-[#64748B]">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Contoh Cacat</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Jenis Kerusakan yang Wajib<br />Diperbaiki dalam Masa Pemeliharaan</h2>
        </div>
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {jenisDefect.map((j, i)=>(
            <div key={i} className="bg-white rounded-xl p-4 border border-black/5 flex gap-3">
              <span className="text-gold font-bold flex-shrink-0">✓</span>
              <p className="text-sm text-navy2 leading-relaxed">{j}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Jaminan Lainnya</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-surety-bond/jaminan-penawaran" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📋 Jaminan Penawaran →</Link>
            <Link href="/asuransi-surety-bond/jaminan-pelaksanaan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ Jaminan Pelaksanaan →</Link>
            <Link href="/asuransi-surety-bond/jaminan-uang-muka" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">💰 Jaminan Uang Muka →</Link>
            <Link href="/asuransi-engineering/contractor-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ Contractor All Risk →</Link>
            <Link href="/asuransi-surety-bond" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Surety Bond</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Proyek Selesai, Reputasi<br />Kontraktor Tetap Terjaga</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Maintenance Bond yang profesional mencerminkan komitmen kontraktor terhadap mutu pekerjaan. Hubungi Pak Rio untuk proses cepat.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Proses Maintenance Bond</a>
        </div>
      </section>
    </SuretyLayout>
  );
}
