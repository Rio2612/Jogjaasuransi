import type { Metadata } from "next";
import Link from "next/link";
import EngineeringLayout from "@/components/engineering/EngineeringLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Erection All Risk (EAR) Jogja – Pemasangan Mesin & Struktur | Asuransi Jogja",
  description: "Asuransi Erection All Risk (EAR) di Yogyakarta untuk pemasangan mesin industri, struktur baja, panel listrik, dan instalasi peralatan berat. Komisioning & testing cover. Konsultasi gratis.",
  keywords: "erection all risk jogja, asuransi EAR yogyakarta, asuransi pemasangan mesin jogja, asuransi struktur baja yogyakarta, erection insurance DIY, asuransi instalasi industri jogja",
  openGraph: {
    title: "Asuransi Erection All Risk (EAR) Jogja – Mesin & Struktur",
    url: "https://asuransijogja.com/asuransi-engineering/erection-all-risk",
  },
};

const bedaCARvsEAR = [
  { aspek: "Jenis Pekerjaan", car: "Pekerjaan sipil — gedung, jalan, jembatan, bendungan", ear: "Pemasangan / erection — mesin, struktur baja, panel, instalasi" },
  { aspek: "Material Utama", car: "Beton, bata, besi beton, material bangunan", ear: "Mesin, baja profil, peralatan industri, komponen elektronik" },
  { aspek: "Fase Kritis", car: "Pengecoran pondasi, struktur, finishing", ear: "Lift, angkat, sambung, uji coba & komisioning" },
  { aspek: "Risiko Dominan", car: "Hujan, banjir, keruntuhan bekisting", ear: "Jatuh saat pengangkatan, salah assembly, uji coba gagal" },
];

const tahapanEAR = [
  { tahap: "Pra-Erection", icon: "📦", desc: "Material dan komponen terlindungi sejak tiba di lokasi — sebelum proses pemasangan dimulai" },
  { tahap: "Proses Erection", icon: "🏗️", desc: "Seluruh proses pengangkatan, pemasangan, dan penyambungan komponen dalam jaminan penuh" },
  { tahap: "Testing & Commissioning", icon: "⚡", desc: "Periode paling kritis — uji coba pertama mesin atau instalasi sering menjadi penyebab kerusakan terbesar" },
  { tahap: "Maintenance Period", icon: "🛡️", desc: "Jaminan pemeliharaan setelah serah terima — umumnya 12 bulan untuk menemukan cacat tersembunyi" },
];

const jenisInstalasi = [
  { icon: "🏭", label: "Mesin Pabrik & Produksi", desc: "Mesin cetak, mesin tekstil, line produksi makanan, mesin pengolahan — proses erection kompleks dan bernilai besar" },
  { icon: "⚡", label: "Instalasi Listrik & Panel", desc: "Trafo, panel distribusi HV/LV, switchgear, dan instalasi sistem tenaga listrik industri" },
  { icon: "🏗️", label: "Struktur Baja & Rangka", desc: "Rangka baja gudang, jembatan gantung, tower crane permanen, dan struktur baja industri" },
  { icon: "❄️", label: "Sistem HVAC & Pendingin", desc: "Chiller, cooling tower, AHU, dan sistem tata udara gedung komersial dan industri" },
  { icon: "⛽", label: "Tangki & Pressure Vessel", desc: "Tangki penyimpanan BBM, tangki air industri, boiler, dan bejana tekan yang memerlukan uji hidrostatik" },
  { icon: "🔄", label: "Konveyor & Material Handling", desc: "Sistem conveyor, elevator kargo, crane overhead, dan peralatan pemindahan material di pabrik" },
];

const risikoEAR = [
  { icon: "🪂", label: "Jatuh saat Pengangkatan", desc: "Komponen berat yang jatuh saat proses lifting adalah risiko paling sering dalam erection — sekali jatuh, biayanya bisa sangat besar" },
  { icon: "💥", label: "Kegagalan saat Uji Coba", desc: "Korsleting, overpressure, atau vibrasi berlebih saat testing pertama dapat merusak seluruh instalasi yang baru dipasang" },
  { icon: "⚒️", label: "Kesalahan Pemasangan", desc: "Assembly yang tidak sesuai spesifikasi teknis — baut salah momen, alignment tidak tepat — menyebabkan kerusakan permanen" },
  { icon: "🌧️", label: "Cuaca Selama Erection", desc: "Hujan deras, angin kencang, dan kelembaban tinggi di Yogyakarta dapat merusak komponen sensitif yang belum selesai dipasang" },
];

const industriDIY = [
  { icon: "🏭", sektor: "Kawasan Industri Sleman & Bantul", contoh: "Pabrik garmen, pengolahan pangan, dan manufaktur yang terus berkembang membutuhkan EAR untuk setiap lini produksi baru" },
  { icon: "🏥", sektor: "Rumah Sakit & Fasilitas Medis", contoh: "Instalasi MRI, CT Scan, sistem oksigen sentral, dan peralatan medis bernilai miliaran rupiah wajib diasuransikan EAR" },
  { icon: "⚡", sektor: "Infrastruktur Energi DIY", contoh: "Pembangunan gardu induk, instalasi panel surya, dan sistem kelistrikan baru untuk mendukung pertumbuhan kawasan industri" },
  { icon: "🛋️", sektor: "Hotel & Mal Baru", contoh: "Pemasangan lift, eskalator, chiller, dan sistem MEP untuk gedung komersial baru yang terus bermunculan di Yogyakarta" },
];

export default function ErectionAllRiskPage() {
  return (
    <EngineeringLayout breadcrumbs={[
      { label: "Asuransi Engineering", href: "/asuransi-engineering" },
      { label: "Erection All Risk (EAR)" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">⚙️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-engineering" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Engineering</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Erection All Risk · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Erection All Risk<br /><em className="not-italic text-gold">(EAR) Yogyakarta</em><br />Mesin & Instalasi Terlindungi
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Proses pemasangan mesin dan struktur baja adalah fase paling rentan dalam proyek industri. Satu komponen jatuh saat pengangkatan atau satu kegagalan saat uji coba bisa menghancurkan investasi senilai miliaran rupiah.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi EAR Sekarang</a>
            <a href="#tahapan" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Tahapan Jaminan →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"All Risks",lbl:"Prinsip Jaminan"},{num:"Testing",lbl:"& Commissioning Cover"},{num:"Gratis",lbl:"Review Proyek"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* BEDA CAR vs EAR */}
      <section className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Perbedaan Produk</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">CAR vs EAR —<br />Kapan Harus Pakai yang Mana?</h2>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left p-4 font-heading font-semibold text-xs rounded-tl-xl">Aspek</th>
                <th className="text-left p-4 font-heading font-semibold text-xs">CAR</th>
                <th className="text-left p-4 font-heading font-semibold text-xs rounded-tr-xl text-gold">EAR</th>
              </tr>
            </thead>
            <tbody>
              {bedaCARvsEAR.map((b, i)=>(
                <tr key={b.aspek} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                  <td className="p-4 font-semibold text-navy text-xs">{b.aspek}</td>
                  <td className="p-4 text-[#64748B] text-xs leading-relaxed">{b.car}</td>
                  <td className="p-4 text-navy2 text-xs leading-relaxed font-medium">{b.ear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 max-w-4xl mx-auto bg-navy rounded-xl p-5 text-white">
          <p className="text-sm text-white/80"><strong className="text-gold">💡 Catatan:</strong> Proyek yang menggabungkan pekerjaan sipil sekaligus pemasangan mesin berat dapat menggunakan <strong className="text-gold">polis Combined CAR/EAR</strong> — satu polis yang menanggung kedua jenis pekerjaan sekaligus. Tanya Pak Rio untuk detail lebih lanjut.</p>
        </div>
      </section>

      {/* TAHAPAN JAMINAN */}
      <section id="tahapan" className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Periode Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">EAR Melindungi<br />di Setiap Fase Proyek</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {tahapanEAR.map((t, i)=>(
            <div key={t.tahap} className="bg-cream rounded-card p-6 border border-black/5 relative text-center">
              <div className="absolute top-4 right-4 font-heading text-[2rem] font-bold text-navy/8">{i+1}</div>
              <div className="text-3xl mb-3">{t.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{t.tahap}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RISIKO EAR */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Risiko Spesifik</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Risiko Unik dalam<br />Proses Erection & Instalasi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {risikoEAR.map(r=>(
            <div key={r.label} className="bg-white rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JENIS INSTALASI */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan Instalasi</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Jenis Instalasi yang<br />Dapat Diasuransikan EAR</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {jenisInstalasi.map(j=>(
            <div key={j.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{j.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{j.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{j.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRI DI DIY */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Konteks Lokal DIY</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Sektor Industri Yogyakarta<br />yang Membutuhkan EAR</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {industriDIY.map(ind=>(
            <div key={ind.sektor} className="bg-white rounded-card p-6 border border-black/5 grid grid-cols-[auto_1fr] gap-4 items-start">
              <span className="text-3xl">{ind.icon}</span>
              <div>
                <div className="font-heading text-navy font-bold text-[1rem] mb-1">{ind.sektor}</div>
                <p className="text-xs leading-relaxed text-[#64748B]">{ind.contoh}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-engineering/contractor-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏗️ Contractor All Risk →</Link>
            <Link href="/asuransi-engineering/machinery-breakdown" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔧 Machinery Breakdown →</Link>
            <Link href="/asuransi-liability/employer-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏭 Property All Risk →</Link>
            <Link href="/asuransi-engineering" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Engineering</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Mesin Miliaran Rupiah<br />Layak Dilindungi Saat Dipasang</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis EAR — kami review nilai instalasi, fase erection, dan siapkan polis yang menanggung risiko dari awal hingga komisioning.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi EAR via WhatsApp</a>
        </div>
      </section>
    </EngineeringLayout>
  );
}
