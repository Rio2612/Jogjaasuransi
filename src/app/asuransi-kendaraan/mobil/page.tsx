import type { Metadata } from "next";
import Link from "next/link";
import KendaraanLayout from "@/components/kendaraan/KendaraanLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Mobil Jogja – All Risk & TLO, Mobil Listrik | Asuransi Jogja",
  description: "Asuransi mobil di Yogyakarta. All Risk dan TLO untuk mobil BBM maupun listrik (EV). Tarif resmi OJK, klaim mudah, pendampingan penuh. Hitung premi online gratis.",
  keywords: "asuransi mobil jogja, asuransi all risk yogyakarta, asuransi TLO jogja, asuransi mobil listrik yogyakarta, premi asuransi mobil OJK jogja",
};

const perbedaan = [
  { aspek: "Yang Dijamin", allrisk: "Kerusakan ringan, berat, kecelakaan, kehilangan", tlo: "Kehilangan / rusak total (>75% nilai kendaraan)" },
  { aspek: "Goresan & Penyok", allrisk: "✓ Dijamin", tlo: "✗ Tidak dijamin" },
  { aspek: "Kecelakaan Ringan", allrisk: "✓ Dijamin", tlo: "✗ Tidak dijamin" },
  { aspek: "Kehilangan Total", allrisk: "✓ Dijamin", tlo: "✓ Dijamin" },
  { aspek: "Premi", allrisk: "Lebih tinggi", tlo: "Lebih rendah (30–60%)" },
  { aspek: "Cocok untuk", allrisk: "Mobil baru (<5 thn), kredit, intensitas tinggi", tlo: "Mobil tua, angsuran lunas, pemakaian ringan" },
];

const manfaatAllRisk = [
  "Kerusakan akibat kecelakaan — dari goresan ringan hingga rusak parah",
  "Kehilangan kendaraan akibat pencurian",
  "Kerusakan akibat bencana alam (dengan perluasan)",
  "Tanggung jawab pihak ketiga (TPL) — opsional",
  "Bantuan darurat di jalan (roadside assistance) — tergantung produk",
  "Mobil pengganti saat kendaraan dalam perbaikan — tergantung produk",
];

const manfaatTLO = [
  "Ganti rugi jika kendaraan hilang dicuri dan tidak ditemukan",
  "Ganti rugi jika kendaraan rusak total akibat kecelakaan (>75% nilai)",
  "Premi jauh lebih terjangkau dibanding All Risk",
  "Cocok sebagai proteksi dasar untuk kendaraan berusia di atas 5 tahun",
];

const tipsItems = [
  { icon: "🚗", tip: "Mobil baru atau masih kredit", rekomendasi: "All Risk — bank biasanya mewajibkan All Risk selama masa angsuran" },
  { icon: "📅", tip: "Mobil usia > 5 tahun, sudah lunas", rekomendasi: "TLO — lebih hemat, proteksi dasar tetap ada" },
  { icon: "🏙️", tip: "Sering parkir di pusat kota / mall", rekomendasi: "All Risk — risiko goresan dan kerusakan ringan lebih tinggi" },
  { icon: "⚡", tip: "Mobil listrik (EV)", rekomendasi: "All Risk sangat disarankan — biaya perbaikan komponen EV sangat mahal" },
];

const prosesKlaim = [
  { step: "01", icon: "📱", label: "Hubungi Kami", desc: "Segera WA Pak Rio setelah kejadian. Jangan pindahkan kendaraan sebelum dokumentasi." },
  { step: "02", icon: "📸", label: "Dokumentasi", desc: "Foto kondisi kendaraan, lokasi, dan kendaraan lain yang terlibat (jika ada)." },
  { step: "03", icon: "📋", label: "Lapor Polisi", desc: "Untuk kehilangan atau kecelakaan melibatkan pihak ketiga, wajib buat laporan polisi." },
  { step: "04", icon: "🔧", label: "Bengkel Rekanan", desc: "Kendaraan dibawa ke bengkel rekanan asuransi. Kami dampingi seluruh prosesnya." },
];

export default function AsuransiMobilPage() {
  return (
    <KendaraanLayout breadcrumbs={[
      { label: "Asuransi Kendaraan", href: "/asuransi-kendaraan" },
      { label: "Asuransi Mobil" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🚗</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-kendaraan" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Kendaraan</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Asuransi Mobil · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Asuransi Mobil Jogja<br /><em className="not-italic text-gold">All Risk & TLO</em><br />Konvensional & Listrik
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Kecelakaan bisa terjadi kapan saja — di jalan Malioboro yang ramai, parkiran mal, atau jalanan Sleman yang berlubang. Dengan asuransi mobil yang tepat, Anda tidak perlu pusing soal biaya perbaikan.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#perbandingan" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">All Risk vs TLO →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"Tarif OJK",lbl:"Resmi & Transparan"},{num:"EV Ready",lbl:"Mobil Listrik Dijamin"},{num:"1 Hari",lbl:"Proses Polis"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* PERBANDINGAN ALL RISK vs TLO */}
      <section id="perbandingan" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Panduan Memilih</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">All Risk vs TLO —<br />Mana yang Tepat untuk Anda?</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-card border border-black/6 overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-navy text-white text-xs font-bold py-3 px-4">
              <span className="text-white/60">Aspek</span>
              <span className="text-gold text-center">All Risk ⭐</span>
              <span className="text-center">TLO</span>
            </div>
            {perbedaan.map((r,i)=>(
              <div key={r.aspek} className={`grid grid-cols-[1fr_1fr_1fr] gap-2 py-3 px-4 text-xs ${i<perbedaan.length-1?"border-b border-black/5":""}`}>
                <span className="font-semibold text-navy">{r.aspek}</span>
                <span className="text-green-700 text-center">{r.allrisk}</span>
                <span className="text-[#64748B] text-center">{r.tlo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANFAAT */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Manfaat</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa yang Anda<br />Dapatkan?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gold/5 border border-gold/20 rounded-card p-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">⭐</span>
              <div className="font-heading text-navy font-bold text-[1.1rem]">All Risk / Comprehensive</div>
            </div>
            <ul className="flex flex-col gap-2.5">
              {manfaatAllRisk.map(m=>(
                <li key={m} className="flex gap-2 text-sm text-navy2"><span className="text-gold font-bold flex-shrink-0">✓</span>{m}</li>
              ))}
            </ul>
          </div>
          <div className="bg-cream border border-black/8 rounded-card p-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🛡️</span>
              <div className="font-heading text-navy font-bold text-[1.1rem]">TLO (Total Loss Only)</div>
            </div>
            <ul className="flex flex-col gap-2.5">
              {manfaatTLO.map(m=>(
                <li key={m} className="flex gap-2 text-sm text-navy2"><span className="text-gold font-bold flex-shrink-0">✓</span>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TIPS MEMILIH */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Tips dari Pak Rio</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Panduan Cepat<br />Memilih Proteksi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {tipsItems.map(t=>(
            <div key={t.tip} className="bg-white rounded-card p-5 border border-black/5 flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">{t.icon}</span>
              <div>
                <div className="text-sm font-semibold text-navy mb-1">{t.tip}</div>
                <div className="text-xs leading-relaxed text-[#64748B]"><span className="text-gold font-semibold">→</span> {t.rekomendasi}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-[#64748B] mb-3">Masih ragu All Risk atau TLO? Konsultasi gratis dengan Pak Rio.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm inline-block no-underline hover:bg-gold2 transition-all">💬 Tanya Pak Rio Sekarang</a>
        </div>
      </section>

      {/* PROSES KLAIM */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Proses Klaim</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Klaim Mudah,<br />Kami Dampingi Penuh</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {prosesKlaim.map(p=>(
            <div key={p.step} className="bg-cream rounded-card p-6 text-center border border-black/5 relative">
              <div className="absolute top-4 right-5 font-heading text-[2rem] font-bold text-navy/8">{p.step}</div>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Kendaraan Lainnya</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-kendaraan/dump-truk-niaga" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚛 Dump Truk & Kendaraan Niaga →</Link>
            <Link href="/asuransi-kendaraan/armada-fleet" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚐 Armada / Fleet →</Link>
            <Link href="/asuransi-kendaraan" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Kendaraan</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Mobil Anda Aman,<br />Pikiran Anda Tenang</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Dapatkan penawaran terbaik dari berbagai perusahaan asuransi — gratis, transparan, tanpa tekanan.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 WhatsApp Pak Rio Sekarang</a>
        </div>
      </section>
    </KendaraanLayout>
  );
}
