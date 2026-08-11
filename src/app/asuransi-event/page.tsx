import type { Metadata } from "next";
import Link from "next/link";
import EventLayout from "@/components/event/EventLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Event Jogja – Konser, Festival & Event Musik",
  description: "Asuransi event di Yogyakarta untuk konser, festival musik, dan event korporat. Paket Public Liability, Event Cancellation, Personal Accident, dan Property All Risk. Konsultasi gratis.",
  keywords: "asuransi event jogja, asuransi konser yogyakarta, asuransi festival musik, event insurance indonesia, asuransi pembatalan acara, asuransi kecelakaan diri artis, asuransi promotor event",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-event" },
  openGraph: {
    title: "Asuransi Event Jogja – Konser, Festival & Event Musik",
    description: "Asuransi event di Yogyakarta untuk konser, festival musik, dan event korporat. Paket Public Liability, Event Cancellation, Personal Accident, dan Property All Risk.",
    url: "https://asuransijogja.biz.id/asuransi-event",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Event Jogja – Konser, Festival & Event Musik" }],
  },
};

const produkEvent = [
  {
    href: "/asuransi-event/konser-festival-musik",
    icon: "🎤", batik: "◈",
    title: "Konser & Festival Musik",
    subtitle: "Paket 4-in-1 · Rider-Ready",
    desc: "Public Liability, Event Cancellation, Personal Accident, dan Property All Risk dalam satu paket — disusun mengikuti standar rider kontrak artis internasional.",
    tags: ["Festival Internasional", "Konser Tunggal", "Event Korporat", "Wedding Performer"],
  },
];

const mengapaEvent = [
  {
    icon: "📋",
    title: "Syarat Kontrak Artis",
    desc: "Artis dan agensi internasional umumnya mewajibkan bukti asuransi aktif sebelum tampil — bagian standar dari rider teknis dan produksi.",
  },
  {
    icon: "👥",
    title: "Risiko Keramaian Tinggi",
    desc: "Ribuan penonton berkumpul dalam waktu singkat di satu lokasi — potensi cedera pihak ketiga jauh lebih terkonsentrasi dibanding operasional bisnis harian.",
  },
  {
    icon: "🌦️",
    title: "Faktor Cuaca & Alam",
    desc: "Event outdoor rentan terhadap cuaca ekstrem, dan Yogyakarta khususnya berdekatan dengan kawasan vulkanik aktif yang bisa memaksa pembatalan mendadak.",
  },
  {
    icon: "🎸",
    title: "Nilai Aset yang Bergerak",
    desc: "Alat musik, sound system, dan peralatan lighting bernilai tinggi berpindah lokasi berkali-kali — dari gudang, transportasi, hingga panggung.",
  },
];

const faqItems = [
  {
    q: "Apa itu asuransi event dan produk apa saja yang termasuk di dalamnya?",
    a: "Asuransi event adalah paket proteksi yang disusun khusus untuk penyelenggaraan acara berdurasi terbatas. Untuk konser dan festival musik, paket ini umumnya mencakup empat komponen: Public Liability, Event Cancellation, Personal Accident, dan Property All Risk.",
  },
  {
    q: "Apakah semua empat jenis asuransi wajib diambil sekaligus?",
    a: "Tidak selalu wajib, namun rider kontrak artis internasional umumnya mensyaratkan keempatnya. Anda tetap bisa mengambil komponen tertentu saja sesuai kebutuhan dan skala event, dan kami bantu menyesuaikan.",
  },
  {
    q: "Berapa lama sebelum event polis harus diterbitkan?",
    a: "Idealnya polis diajukan minimal 2–4 minggu sebelum hari-H, terutama untuk Event Cancellation yang memerlukan proses underwriting lebih mendalam. Untuk event mendadak, konsultasikan kepada kami — beberapa komponen bisa diproses lebih cepat.",
  },
  {
    q: "Apakah Event Cancellation menanggung pembatalan karena alasan apa pun?",
    a: "Tidak. Cancellation insurance menanggung sebab-sebab di luar kendali penyelenggara yang disepakati dalam polis — misalnya cuaca ekstrem, bencana alam, atau sakit/kecelakaan artis utama. Pembatalan karena penjualan tiket rendah atau keputusan sepihak penyelenggara umumnya dikecualikan.",
  },
  {
    q: "Apakah alat musik milik artis tamu (bukan milik penyelenggara) bisa diasuransikan?",
    a: "Bisa. Property All Risk dapat disusun untuk mencakup peralatan milik artis dan kru pendamping selama berada dalam tanggung jawab penyelenggara di lokasi event — sesuai kebutuhan yang tercantum dalam rider.",
  },
];

export default function AsuransiEventPage() {
  return (
    <EventLayout breadcrumbs={[{ label: "Asuransi Event" }]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-8 right-[5vw] text-gold/6 text-[8rem] leading-none select-none hidden lg:block">🎪</div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>Asuransi Event · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,4vw,3.8rem)] text-white leading-[1.15] mb-5">
            Panggung Aman,<br /><em className="not-italic text-gold">Produksi Terlindungi</em>
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[540px] mb-8">
            Yogyakarta menjadi salah satu kota tujuan festival musik yang aktif di Indonesia. Kami bantu promotor dan EO menyiapkan proteksi event sesuai standar industri — termasuk persyaratan yang lazim diminta dalam kontrak artis internasional.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 hover:-translate-y-px transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#produk" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Produk →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{ num: "4", lbl: "Proteksi dalam 1 Paket" }, { num: "Rider-Ready", lbl: "Standar Artis Internasional" }, { num: "Gratis", lbl: "Analisis Risiko" }].map(s => (
              <div key={s.lbl}><div className="font-heading text-gold text-xl font-bold">{s.num}</div><div className="text-white/60 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA EVENT BUTUH ASURANSI */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Penting?</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy">Event Musik Punya<br />Profil Risiko Tersendiri</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {mengapaEvent.map(m => (
            <div key={m.title} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{m.title}</div>
              <p className="text-base leading-relaxed text-[#475569]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUK EVENT */}
      <section id="produk" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Asuransi Event</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy">Paket Proteksi untuk<br />Event Musik Anda</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {produkEvent.map(c => (
            <Link key={c.href} href={c.href} className="no-underline group">
              <div className="border border-black/8 rounded-card p-7 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                <div className="absolute top-4 right-5 text-gold/10 font-heading text-[3.5rem] leading-none select-none">{c.batik}</div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-[2rem] mb-3">{c.icon}</div>
                <div className="font-heading text-navy font-bold text-[1.15rem] mb-1">{c.title}</div>
                <div className="text-gold text-xs font-semibold mb-3">{c.subtitle}</div>
                <p className="text-sm leading-relaxed text-[#475569] mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.tags.map(t => <span key={t} className="bg-gold/8 border border-gold/15 text-navy2 text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>)}
                </div>
                <div className="text-gold text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Pelajari lebih lanjut →</div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center text-sm text-[#475569] mt-8 max-w-[480px] mx-auto">Butuh proteksi untuk jenis event lain — pameran, gala dinner, atau exhibition? Konsultasikan kebutuhan spesifik Anda, kami susun paketnya secara khusus.</p>
      </section>

      {/* ARTIKEL EDUKASI — Internal Link ke Artikel */}
      <section className="py-12 px-[5vw] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-4">Pelajari Lebih Dalam</div>
          <Link href="/artikel/syarat-dokumen-asuransi-event-musik-jogja" className="bg-cream border border-black/8 rounded-xl p-5 no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">📝</span>
            <div>
              <div className="font-heading text-navy font-semibold text-sm group-hover:text-gold transition-colors mb-1">Syarat & Data Asuransi Konser/Festival Musik — Checklist Lengkap</div>
              <p className="text-xs text-[#475569] leading-relaxed">Data acara, data artis, nilai pertanggungan tiap komponen, hingga dokumen pendukung yang perlu disiapkan sebelum mengajukan.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy">Pertanyaan Seputar<br />Asuransi Event</h2>
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
        <div className="mt-8 text-center">
          <p className="text-sm text-[#475569] mb-3">Masih ada pertanyaan? Konsultasikan langsung dengan kami — gratis.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline inline-block">💬 Tanya via WhatsApp</a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Siapkan Proteksi Event<br />Sebelum Hari-H</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis bersama praktisi asuransi berpengalaman 8 tahun, berbasis di Yogyakarta.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </EventLayout>
  );
}
