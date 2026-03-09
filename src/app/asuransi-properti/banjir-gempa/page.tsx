import type { Metadata } from "next";
import Link from "next/link";
import PropertyLayout from "@/components/properti/PropertyLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Banjir & Gempa Bumi Jogja – Perluasan Properti | Asuransi Jogja",
  description: "Asuransi perluasan banjir dan gempa bumi untuk properti di Yogyakarta. Proteksi dari risiko Merapi, gempa, dan banjir Kali Code. Sangat relevan untuk kawasan DIY. Konsultasi gratis.",
  keywords: "asuransi banjir jogja, asuransi gempa yogyakarta, perluasan banjir properti, asuransi merapi yogyakarta, asuransi bencana alam jogja",
};

const risikoLokal = [
  {
    icon: "🌋",
    label: "Gunung Merapi Aktif",
    level: "Tinggi",
    levelColor: "bg-red-100 text-red-700",
    desc: "Merapi adalah gunungapi paling aktif di Indonesia. Erupsi 2010 menyebabkan kerugian properti senilai triliunan rupiah di kawasan Sleman dan Magelang.",
  },
  {
    icon: "🌊",
    label: "Banjir Kali Code & Opak",
    level: "Sedang-Tinggi",
    levelColor: "bg-orange-100 text-orange-700",
    desc: "Bantaran Kali Code (Gondokusuman, Jetis) dan Kali Opak (Bantul) rentan banjir bandang saat musim hujan ekstrem. Banjir 2017 menenggelamkan ratusan rumah.",
  },
  {
    icon: "💥",
    label: "Zona Gempa Aktif",
    level: "Tinggi",
    levelColor: "bg-red-100 text-red-700",
    desc: "Gempa Jogja 2006 berkekuatan M5.9 menghancurkan lebih dari 150.000 bangunan. Yogyakarta berada di pertemuan lempeng yang membuat risiko gempa selalu ada.",
  },
  {
    icon: "💨",
    label: "Angin Kencang & Puting Beliung",
    level: "Sedang",
    levelColor: "bg-yellow-100 text-yellow-700",
    desc: "Dataran Bantul dan Kulon Progo beberapa kali dilanda puting beliung yang merusak atap dan bangunan ringan, terutama di musim pancaroba.",
  },
];

const jaminanItems = [
  { icon: "🌊", label: "Banjir & Genangan", detail: "Air hujan masuk bangunan, meluapnya sungai, banjir bandang" },
  { icon: "🌋", label: "Letusan Gunung Berapi", detail: "Abu vulkanik, awan panas, lahar, dan dampak erupsi lainnya" },
  { icon: "💥", label: "Gempa Bumi", detail: "Kerusakan bangunan akibat getaran dan pergerakan tanah" },
  { icon: "🌊", label: "Tsunami", detail: "Gelombang laut akibat gempa bawah laut (relevan untuk Bantul Selatan)" },
  { icon: "💨", label: "Angin Topan & Badai", detail: "Kerusakan akibat angin kencang, puting beliung, hujan es" },
  { icon: "🏔️", label: "Tanah Longsor", detail: "Kerusakan akibat longsor di kawasan lereng dan perbukitan" },
];

const zonaRawan = [
  { zona: "Sleman Utara (Lereng Merapi)", risiko: ["Erupsi Merapi", "Lahar dingin", "Abu vulkanik"], rekomendasi: "PAR + perluasan vulkanik + banjir lahar" },
  { zona: "Bantaran Kali Code (Kota Jogja)", risiko: ["Banjir bandang", "Genangan"], rekomendasi: "Kebakaran + perluasan banjir" },
  { zona: "Bantul & Kulon Progo", risiko: ["Gempa", "Puting beliung", "Banjir"], rekomendasi: "Kebakaran + perluasan gempa + angin" },
  { zona: "Gunung Kidul", risiko: ["Gempa", "Kekeringan"], rekomendasi: "Kebakaran + perluasan gempa" },
];

export default function BanjirGempaPage() {
  return (
    <PropertyLayout breadcrumbs={[
      { label: "Asuransi Properti", href: "/asuransi-properti" },
      { label: "Perluasan Banjir & Gempa" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">🌋</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-properti" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Properti</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Perluasan Banjir & Gempa · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Perluasan Banjir<br /><em className="not-italic text-gold">& Gempa Bumi</em><br />Khusus Yogyakarta
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Yogyakarta berdiri di atas tanah aktif secara geologi — 30 km dari Merapi, dilintasi patahan Opak, dan dikelilingi sungai-sungai yang rentan banjir. Perluasan jaminan bencana alam bukan sekadar pilihan, melainkan keharusan.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Risiko Lokasi</a>
            <a href="#zona" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Cek Zona Risiko →</a>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
            {[{num:"6",lbl:"Jenis Jaminan Bencana"},{num:"DIY",lbl:"Fokus Wilayah"},{num:"Gratis",lbl:"Analisis Risiko Lokasi"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* RISIKO LOKAL JOGJA */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Risiko Nyata</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Mengapa Yogyakarta<br />Butuh Perlindungan Lebih?</h2>
          <p className="text-sm text-[#64748B] max-w-[500px] mx-auto mt-3">Data historis membuktikan bahwa Yogyakarta adalah salah satu provinsi dengan kerugian bencana alam tertinggi di Indonesia</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {risikoLokal.map(r => (
            <div key={r.label} className="bg-white rounded-card p-6 border border-black/6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{r.icon}</span>
                  <div className="font-heading text-navy font-bold text-[1.05rem]">{r.label}</div>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${r.levelColor}`}>{r.level}</span>
              </div>
              <p className="text-sm leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JAMINAN */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Perluasan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa Saja yang<br />Dijamin Perluasan Ini?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {jaminanItems.map(j => (
            <div key={j.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{j.icon}</div>
              <div className="font-heading text-navy font-bold text-sm mb-1.5">{j.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{j.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-4xl mx-auto bg-navy rounded-xl p-6 text-white">
          <div className="font-heading text-gold text-sm font-semibold mb-2">🏛️ Cara Menambahkan Perluasan</div>
          <p className="text-xs leading-relaxed text-white/75">
            Perluasan banjir dan gempa ditambahkan sebagai <strong className="text-gold">endorsement (tambahan klausul)</strong> pada polis asuransi kebakaran atau PAR yang sudah ada. Premi tambahan dihitung berdasarkan zona risiko, konstruksi bangunan, dan nilai pertanggungan. Hubungi kami untuk mengetahui biaya perluasan untuk properti Anda.
          </p>
        </div>
      </section>

      {/* ZONA RAWAN */}
      <section id="zona" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Peta Risiko DIY</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Rekomendasi Berdasarkan<br />Lokasi Properti Anda</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {zonaRawan.map(z => (
            <div key={z.zona} className="bg-white rounded-card p-6 border border-black/6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-2">📍 {z.zona}</div>
                <div className="flex flex-wrap gap-1.5">
                  {z.risiko.map(r => (
                    <span key={r} className="bg-red-50 border border-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full">{r}</span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block text-gold text-xl text-center">→</div>
              <div className="bg-gold/8 border border-gold/20 rounded-lg p-3">
                <div className="text-xs text-[#64748B] mb-1 font-semibold">Rekomendasi:</div>
                <div className="text-xs text-navy2 font-medium">{z.rekomendasi}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-[#64748B] mb-4">Tidak tahu zona risiko properti Anda? Konsultasi gratis dengan kami.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm inline-block no-underline hover:bg-gold2 transition-all">
            💬 Cek Risiko Lokasi Saya
          </a>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-properti/kebakaran" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔥 Asuransi Kebakaran →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Property All Risk →</Link>
            <Link href="/asuransi-properti/hotel-vila" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏨 Hotel & Vila Wisata →</Link>
            <Link href="/asuransi-properti" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Asuransi Properti</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <div className="text-5xl mb-4">🌋</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Yogyakarta Indah,<br />tapi Risikonya Nyata
          </h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">
            Jangan tunggu bencana untuk baru memikirkan asuransi. Analisis risiko lokasi properti Anda sekarang — gratis dan tanpa tekanan.
          </p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
            💬 Konsultasi Perluasan Sekarang
          </a>
        </div>
      </section>
    </PropertyLayout>
  );
}
