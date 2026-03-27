import type { Metadata } from "next";
import Link from "next/link";
import KendaraanLayout from "@/components/kendaraan/KendaraanLayout";
import KalkulatorKendaraan from "@/components/kendaraan/KalkulatorKendaraan";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kendaraan Jogja – Mobil, Truk & Armada | Asuransi Jogja",
  description: "Konsultan asuransi kendaraan bermotor di Yogyakarta. All Risk, TLO, kendaraan niaga, dump truk, hingga armada fleet. Tarif OJK, klaim mudah. Konsultasi gratis.",
  keywords: "asuransi kendaraan jogja, asuransi mobil yogyakarta, asuransi truk jogja, asuransi armada fleet yogyakarta, asuransi motor vehicle jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-kendaraan" },
  openGraph: { title: "Asuransi Kendaraan Jogja – Mobil, Truk & Armada", url: "https://asuransijogja.biz.id/asuransi-kendaraan" },
};

const clusters = [
  {
    href: "/asuransi-kendaraan/mobil", icon: "🚗", batik: "◈",
    title: "Asuransi Mobil", subtitle: "All Risk & TLO · Konvensional & EV",
    desc: "Perlindungan kendaraan pribadi dari kerusakan ringan hingga kehilangan total. Tersedia untuk mobil BBM maupun listrik dengan tarif resmi OJK.",
    tags: ["All Risk", "TLO", "Mobil Listrik EV", "KPR Kendaraan"],
  },
  {
    href: "/asuransi-kendaraan/dump-truk-niaga", icon: "🚛", batik: "❖",
    title: "Dump Truk & Kendaraan Niaga", subtitle: "Angkutan Berat & Komersial",
    desc: "Proteksi kendaraan niaga berat seperti dump truk, tronton, truk mixer, dan armada angkutan material untuk kontraktor dan logistik.",
    tags: ["Dump Truk", "Tronton", "Truk Mixer", "Kendaraan Proyek"],
  },
  {
    href: "/asuransi-kendaraan/armada-fleet", icon: "🚐", batik: "⬡",
    title: "Asuransi Armada / Fleet", subtitle: "Pengelolaan Polis Korporasi",
    desc: "Solusi asuransi satu polis untuk banyak kendaraan operasional perusahaan. Lebih efisien, lebih hemat, dan lebih mudah dikelola.",
    tags: ["Fleet 5+ Unit", "Korporasi", "Operasional Bisnis"],
  },
];

const whyItems = [
  { icon: "📋", title: "Tarif Resmi OJK", desc: "Seluruh premi kendaraan mengacu tarif OJK SE No.6/SEOJK.05/2017 — transparan dan dapat diverifikasi." },
  { icon: "🎯", title: "Independen & Objektif", desc: "Kami tidak terikat satu perusahaan asuransi. Penawaran terbaik dari beberapa asuransi sekaligus." },
  { icon: "🤝", title: "Pendampingan Klaim", desc: "Dari pelaporan insiden hingga dana ganti rugi cair — kami dampingi tanpa biaya tambahan." },
  { icon: "⚡", title: "Proses Cepat", desc: "Polis kendaraan standar terbit 1 hari kerja. Klaim didampingi sejak hari pertama." },
];

const faqItems = [
  { q: "Apa perbedaan All Risk dan TLO?", a: "All Risk menanggung kerusakan ringan hingga berat, kecelakaan, dan kehilangan. TLO hanya menanggung jika kendaraan hilang atau rusak lebih dari 75% nilai. Premi TLO lebih murah, All Risk lebih luas. Pilihan tergantung usia, nilai, dan intensitas pemakaian kendaraan." },
  { q: "Apakah mobil listrik bisa diasuransikan?", a: "Ya. Tarif OJK sudah mencakup kendaraan listrik (EV) dengan tarif batas atas yang sedikit berbeda dari kendaraan BBM. Own Risk (OR) untuk EV juga berbeda: Rp 500.000 per kejadian vs Rp 300.000 untuk konvensional." },
  { q: "Apakah dump truk dan kendaraan niaga bisa diasuransikan?", a: "Bisa. Kendaraan niaga seperti dump truk, tronton, truk mixer, dan pickup masuk kategori kendaraan bermotor roda 4 atau lebih dan dapat diasuransikan All Risk maupun TLO. Tarif dan syarat berbeda dari kendaraan penumpang." },
  { q: "Berapa lama proses klaim jika terjadi kecelakaan?", a: "Segera hubungi kami via WhatsApp setelah kejadian. Kami akan memandu langkah awal, dokumen yang dibutuhkan (laporan polisi, foto, STNK, SIM), dan proses pengajuan ke bengkel rekanan. Estimasi proses klaim ringan 3–7 hari kerja." },
];

export default function AsuransiKendaraanPage() {
  return (
    <KendaraanLayout breadcrumbs={[{ label: "Asuransi Kendaraan" }]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/5 font-heading text-[9rem] leading-none select-none hidden lg:block">🚗</div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>Asuransi Kendaraan · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,4vw,3.8rem)] text-white leading-[1.15] mb-5">
            Proteksi Kendaraan Anda<br /><em className="not-italic text-gold">di Jalan & di Garasi</em><br />Yogyakarta
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Dari mobil pribadi hingga armada puluhan unit — kami melayani seluruh kebutuhan asuransi kendaraan bermotor dengan tarif transparan sesuai OJK dan pendampingan klaim penuh.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 hover:-translate-y-px transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#kalkulator" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">🧮 Hitung Premi Sekarang</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"Tarif OJK",lbl:"Transparan & Resmi"},{num:"All Risk",lbl:"Perlindungan Terluas"},{num:"Gratis",lbl:"Konsultasi & Analisis"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CLUSTER CARDS */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Kendaraan</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Pilih Perlindungan<br />Sesuai Kendaraan Anda</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clusters.map(c => (
            <Link key={c.href} href={c.href} className="no-underline group">
              <div className="border border-black/8 rounded-card p-7 h-full hover:shadow-[0_12px_40px_rgba(13,33,55,0.1)] hover:-translate-y-1.5 hover:border-gold/30 transition-all relative overflow-hidden bg-white">
                <div className="absolute top-4 right-5 text-gold/10 font-heading text-[3.5rem] leading-none select-none">{c.batik}</div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-[2rem] mb-3">{c.icon}</div>
                <div className="font-heading text-navy font-bold text-[1.15rem] mb-1">{c.title}</div>
                <div className="text-gold text-xs font-semibold mb-3">{c.subtitle}</div>
                <p className="text-sm leading-relaxed text-[#64748B] mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.tags.map(t=><span key={t} className="bg-gold/8 border border-gold/15 text-navy2 text-xs px-2.5 py-1 rounded-full font-medium">{t}</span>)}
                </div>
                <div className="text-gold text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Pelajari lebih lanjut →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* KALKULATOR */}
      <KalkulatorKendaraan />

      {/* WHY */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Keunggulan Kami</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Mengapa Pilih<br />Asuransi Jogja?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {whyItems.map(w=>(
            <div key={w.title} className="bg-white rounded-card p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all border border-black/5">
              <div className="text-3xl mb-3">{w.icon}</div>
              <div className="font-heading text-navy font-bold text-[1.05rem] mb-2">{w.title}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Pertanyaan Seputar<br />Asuransi Kendaraan</h2>
        </div>
        <div className="max-w-[700px] mx-auto">
          {faqItems.map((f,i)=>(
            <details key={i} className="border-b border-black/8 group">
              <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                {f.q}<span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Kendaraan Anda Terlalu Berharga<br />untuk Tidak Dilindungi</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis, perbandingan premi transparan, dan pendampingan klaim penuh — untuk semua jenis kendaraan Anda.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </KendaraanLayout>
  );
}
