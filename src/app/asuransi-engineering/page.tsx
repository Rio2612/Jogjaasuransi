import type { Metadata } from "next";
import Link from "next/link";
import EngineeringLayout from "@/components/engineering/EngineeringLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Engineering Jogja – CAR, EAR & Machinery Breakdown | Asuransi Jogja",
  description: "Konsultan asuransi engineering di Yogyakarta. Contractor All Risk (CAR), Erection All Risk (EAR), dan Machinery Breakdown untuk proyek konstruksi, industri, dan pabrik di DIY.",
  keywords: "asuransi engineering jogja, contractor all risk yogyakarta, erection all risk jogja, machinery breakdown yogyakarta, asuransi proyek konstruksi jogja, asuransi kontraktor DIY",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-engineering" },
  openGraph: {
    title: "Asuransi Engineering Jogja – CAR, EAR & Machinery Breakdown",
    description: "Proteksi proyek konstruksi, pemasangan mesin, dan kerusakan mesin industri di Yogyakarta. Konsultasi gratis.",
    url: "https://asuransijogja.biz.id/asuransi-engineering",
  },
};

const clusters = [
  {
    href: "/asuransi-engineering/contractor-all-risk",
    icon: "🏗️", batik: "◈",
    title: "Contractor All Risk (CAR)",
    subtitle: "Proyek Konstruksi · Gedung & Infrastruktur",
    desc: "Perlindungan menyeluruh untuk proyek pembangunan gedung, jembatan, jalan, dan infrastruktur dari risiko kerusakan fisik dan tanggung jawab pihak ketiga.",
    tags: ["Hotel & Apartemen", "Kampus & Sekolah", "Jalan & Jembatan", "Proyek Pemerintah DIY"],
  },
  {
    href: "/asuransi-engineering/erection-all-risk",
    icon: "⚙️", batik: "❖",
    title: "Erection All Risk (EAR)",
    subtitle: "Pemasangan Mesin & Struktur Baja",
    desc: "Proteksi komprehensif selama proses pemasangan, pengujian, dan komisioning mesin industri, struktur baja, dan instalasi peralatan berat.",
    tags: ["Mesin Pabrik", "Struktur Baja", "Panel Listrik", "Peralatan Industri"],
  },
  {
    href: "/asuransi-engineering/machinery-breakdown",
    icon: "🔧", batik: "⬡",
    title: "Machinery Breakdown (MB)",
    subtitle: "Kerusakan Mesin Operasional",
    desc: "Perlindungan mesin dan peralatan produksi dari kerusakan mendadak akibat cacat internal, kesalahan operasional, dan kegagalan komponen.",
    tags: ["Mesin Produksi", "Kompresor & Pompa", "Genset", "Peralatan CNC"],
  },
];

const proyekDIY = [
  { icon: "🏨", label: "Hotel & Akomodasi", desc: "Pembangunan hotel bintang, resort, dan penginapan wisata yang terus berkembang seiring pertumbuhan pariwisata Yogyakarta" },
  { icon: "🏫", label: "Kampus & Pendidikan", desc: "Pembangunan gedung kampus, laboratorium, asrama mahasiswa, dan fasilitas pendidikan di kota pelajar terbesar di Indonesia" },
  { icon: "🏥", label: "Rumah Sakit & Klinik", desc: "Konstruksi fasilitas kesehatan baru dan renovasi gedung rumah sakit dengan standar keamanan bangunan yang sangat ketat" },
  { icon: "🛣️", label: "Infrastruktur Pemerintah", desc: "Proyek jalan, jembatan, irigasi, dan infrastruktur publik yang dibiayai APBN dan APBD DIY" },
  { icon: "🏭", label: "Kawasan Industri", desc: "Pembangunan pabrik, gudang, dan fasilitas industri di kawasan Sleman, Bantul, dan Kulon Progo" },
  { icon: "🏘️", label: "Perumahan & Properti", desc: "Pengembangan perumahan, ruko, dan properti komersial yang terus tumbuh di pinggiran kota Yogyakarta" },
];

const mengapaEngineering = [
  { icon: "💰", title: "Nilai Proyek Sangat Besar", desc: "Satu proyek konstruksi bisa bernilai miliaran hingga ratusan miliar rupiah. Satu insiden tanpa proteksi bisa menghentikan proyek sepenuhnya." },
  { icon: "⚠️", title: "Risiko Tinggi di Lapangan", desc: "Konstruksi melibatkan alat berat, ketinggian, material berbahaya, dan cuaca — kombinasi risiko yang tidak ada di industri lain." },
  { icon: "📋", title: "Wajib Tender & Kontrak", desc: "Banyak tender pemerintah dan proyek swasta mensyaratkan bukti asuransi CAR/EAR sebagai kelengkapan dokumen kontrak." },
  { icon: "🤝", title: "Tanggung Jawab ke Pihak Ketiga", desc: "Kerusakan properti tetangga, cedera pekerja subkon, dan dampak konstruksi ke publik semua masuk dalam cakupan engineering insurance." },
];

const faqItems = [
  {
    q: "Apa perbedaan CAR dan EAR?",
    a: "CAR (Contractor All Risk) untuk proyek yang melibatkan pekerjaan sipil — gedung, jembatan, jalan, bendungan. EAR (Erection All Risk) khusus untuk pemasangan mesin, struktur baja, dan instalasi peralatan yang melibatkan proses erection (pendirian). Proyek yang menggabungkan keduanya bisa menggunakan satu polis combined CAR/EAR."
  },
  {
    q: "Apakah asuransi engineering wajib untuk kontraktor di Yogyakarta?",
    a: "Untuk proyek pemerintah (APBN/APBD), asuransi CAR umumnya wajib dan menjadi syarat pencairan termin kontrak. Untuk proyek swasta, kewajiban diatur dalam kontrak antara owner dan kontraktor. Kami sarankan semua proyek di atas Rp 500 juta diasuransikan."
  },
  {
    q: "Apa yang dimaksud dengan Section I dan Section II dalam polis CAR?",
    a: "Section I (Material Damage) menanggung kerusakan fisik pada pekerjaan, material, dan peralatan konstruksi. Section II (Third Party Liability) menanggung tanggung jawab hukum terhadap pihak ketiga — properti rusak, orang cedera akibat aktivitas konstruksi."
  },
  {
    q: "Machinery Breakdown berbeda dari asuransi kebakaran mesin?",
    a: "Ya, berbeda. Asuransi kebakaran hanya menanggung kerusakan mesin akibat kebakaran. Machinery Breakdown menanggung kerusakan mendadak dari dalam mesin itu sendiri — korsleting, kegagalan komponen, kesalahan operator — yang tidak disebabkan oleh kebakaran dari luar."
  },
];

export default function AsuransiEngineeringPage() {
  return (
    <EngineeringLayout breadcrumbs={[{ label: "Asuransi Engineering" }]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/6 font-heading text-[8rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>Asuransi Engineering · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,4vw,3.8rem)] text-white leading-[1.15] mb-5">
            Asuransi Engineering<br /><em className="not-italic text-gold">Proyek & Industri</em><br />Yogyakarta
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[530px] mb-8">
            Yogyakarta terus bertumbuh — hotel baru, kampus baru, kawasan industri baru. Di balik setiap proyek besar tersimpan risiko besar. Asuransi engineering memastikan proyek dan mesin industri Anda terlindungi dari awal hingga selesai.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 hover:-translate-y-px transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#proyek" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Proyek di DIY →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"CAR · EAR · MB",lbl:"3 Produk Utama"},{num:"All Risks",lbl:"Prinsip Jaminan"},{num:"Gratis",lbl:"Konsultasi & Review"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA ENGINEERING */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Mengapa Penting?</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Proyek Besar Butuh<br />Proteksi yang Sepadan</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {mengapaEngineering.map(m=>(
            <div key={m.title} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{m.title}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLUSTER CARDS */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Produk Engineering</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Pilih Produk Sesuai<br />Jenis Proyek Anda</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clusters.map(c=>(
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
                <div className="text-gold text-sm font-semibold group-hover:gap-2 transition-all">Pelajari lebih lanjut →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROYEK DI DIY */}
      <section id="proyek" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Konteks Lokal</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Sektor Konstruksi &<br />Industri yang Tumbuh di DIY</h2>
          <p className="text-base text-[#64748B] max-w-[500px] mx-auto mt-3">Yogyakarta mengalami pertumbuhan infrastruktur pesat dalam 10 tahun terakhir — semua sektor ini membutuhkan asuransi engineering yang memadai</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {proyekDIY.map(p=>(
            <div key={p.label} className="bg-white rounded-card p-6 border border-black/5 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{p.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SINERGI PRODUK */}
      <section className="py-12 px-[5vw] bg-white">
        <div className="max-w-4xl mx-auto bg-gold/6 border border-gold/25 rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Proteksi Berlapis</div>
            <h2 className="font-heading text-navy text-[1.5rem] mb-3">Engineering + Liability +<br />Kendaraan = Proyek Aman</h2>
            <p className="text-base leading-relaxed text-[#64748B]">Kontraktor yang bijak melindungi proyek dari tiga sisi: pekerjaan fisik (CAR/EAR), mesin dan kendaraan proyek, serta tanggung jawab hukum terhadap pekerja dan pihak ketiga.</p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { href:"/asuransi-liability/public-liability", icon:"🤝", title:"Public Liability", sub:"Tanggung jawab ke warga & properti sekitar proyek" },
              { href:"/asuransi-liability/employer-liability", icon:"👷", title:"Employer Liability", sub:"Kecelakaan kerja pekerja bangunan & subkontraktor" },
              { href:"/asuransi-kendaraan/dump-truk-niaga", icon:"🚛", title:"Asuransi Kendaraan Proyek", sub:"Dump truk, alat berat, dan kendaraan site" },
              { href:"/asuransi-properti/property-all-risk", icon:"🏭", title:"Asuransi Gudang & Pabrik", sub:"Proteksi fasilitas industri setelah selesai dibangun" },
            ].map(l=>(
              <Link key={l.href} href={l.href} className="bg-white border border-black/8 rounded-xl p-3.5 flex items-center gap-3 no-underline hover:border-gold/40 transition-all group">
                <span className="text-xl">{l.icon}</span>
                <div><div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">{l.title}</div><div className="text-xs text-[#64748B]">{l.sub}</div></div>
                <span className="ml-auto text-gold text-sm">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">FAQ</div>
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-navy leading-[1.22]">Pertanyaan Seputar<br />Asuransi Engineering</h2>
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
        <div className="absolute bottom-4 left-[5vw] text-gold/6 font-heading text-[6rem] leading-none select-none hidden lg:block">꧁꧂</div>
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Proyek Besar Butuh<br />Perlindungan yang Lebih Besar</h2>
          <p className="text-white/60 text-sm max-w-[480px] mx-auto mb-8">Konsultasi gratis — kami bantu review kebutuhan asuransi engineering proyek Anda dan siapkan polis sesuai nilai kontrak.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Chat WhatsApp Sekarang</a>
            <a href={`mailto:${KONTAK.email}`} className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all">✉️ Kirim Email</a>
          </div>
        </div>
      </section>
    </EngineeringLayout>
  );
}
