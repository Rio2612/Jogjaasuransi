import type { Metadata } from "next";
import Link from "next/link";
import LiabilityLayout from "@/components/liability/LiabilityLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Employer Liability Jogja – Perlindungan Karyawan | Asuransi Jogja",
  description: "Asuransi Employer Liability di Yogyakarta. Perlindungan hukum pengusaha atas kecelakaan dan penyakit akibat kerja yang dialami karyawan. Konsultasi gratis.",
  keywords: "employer liability jogja, asuransi kecelakaan kerja yogyakarta, tanggung jawab pengusaha karyawan jogja, workmen compensation yogyakarta",
  alternates: { canonical: "https://asuransijogja.biz.id/asuransi-liability/employer-liability" },
};

const kewajibanHukum = [
  { no: "UU No.13/2003", judul: "Ketenagakerjaan", isi: "Pengusaha wajib memberikan perlindungan K3 dan bertanggung jawab atas kecelakaan yang terjadi dalam hubungan kerja" },
  { no: "UU No.1/1970", judul: "Keselamatan Kerja", isi: "Mengatur kewajiban pengusaha menyediakan tempat kerja yang aman dan peralatan pelindung diri bagi seluruh pekerja" },
  { no: "PP No.44/2015", judul: "BPJS Ketenagakerjaan", isi: "Pengusaha wajib mendaftarkan karyawan ke BPJS, namun BPJS memiliki limit — kelebihan ganti rugi menjadi tanggung jawab pengusaha" },
];

const cakupanJaminan = [
  { icon: "🏥", label: "Biaya Medis Karyawan", desc: "Pengobatan, rawat inap, operasi, dan rehabilitasi akibat kecelakaan kerja yang melebihi limit BPJS Ketenagakerjaan" },
  { icon: "💰", label: "Ganti Rugi Cacat Tetap", desc: "Kompensasi finansial jika karyawan mengalami cacat permanen yang mengurangi atau menghilangkan kemampuan bekerja" },
  { icon: "🕊️", label: "Santunan Meninggal Dunia", desc: "Pembayaran kepada ahli waris karyawan yang meninggal akibat kecelakaan atau penyakit yang berkaitan dengan pekerjaan" },
  { icon: "⚖️", label: "Biaya Pembelaan Hukum", desc: "Menanggung biaya pengacara dan pengadilan jika keluarga karyawan mengajukan gugatan kepada pengusaha" },
  { icon: "🦺", label: "Penyakit Akibat Kerja", desc: "Perlindungan untuk penyakit yang timbul akibat paparan bahan kimia, debu, kebisingan, atau kondisi kerja berbahaya" },
  { icon: "🚑", label: "Biaya Transportasi Darurat", desc: "Evakuasi medis darurat dari lokasi kerja ke rumah sakit terdekat dan transport pulang setelah pemulihan" },
];

const sektorBerisiko = [
  { icon: "🏗️", label: "Konstruksi & Kontraktor", level: "Sangat Tinggi", color: "bg-red-100 text-red-700", desc: "Pekerjaan di ketinggian, penggunaan alat berat, dan risiko tertimpa material adalah risiko sehari-hari" },
  { icon: "🏭", label: "Pabrik & Manufaktur", level: "Tinggi", color: "bg-orange-100 text-orange-700", desc: "Mesin berputar, bahan kimia, suhu ekstrem, dan kelelahan kerja shift malam" },
  { icon: "🏨", label: "Hotel & Hospitality", level: "Sedang", color: "bg-yellow-100 text-yellow-700", desc: "Staf dapur terkena api, housekeeping terpeleset, dan pegawai security menghadapi risiko fisik" },
  { icon: "🌿", label: "Perkebunan & Pertanian", level: "Tinggi", color: "bg-orange-100 text-orange-700", desc: "Penggunaan pestisida, peralatan pertanian, dan pekerjaan di medan tidak rata" },
  { icon: "🚛", label: "Logistik & Transportasi", level: "Tinggi", color: "bg-orange-100 text-orange-700", desc: "Kecelakaan lalu lintas, cedera bongkar muat, dan kelelahan pengemudi jarak jauh" },
  { icon: "🏥", label: "Rumah Sakit & Klinik", level: "Sedang", color: "bg-yellow-100 text-yellow-700", desc: "Paparan patogen, cedera jarum suntik, dan stres kerja tenaga medis" },
];

export default function EmployerLiabilityPage() {
  return (
    <LiabilityLayout breadcrumbs={[
      { label: "Asuransi Liability", href: "/asuransi-liability" },
      { label: "Employer Liability" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[8rem] leading-none select-none hidden lg:block">👷</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-liability" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Liability</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Employer Liability · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Employer Liability<br /><em className="not-italic text-gold">Tanggung Jawab Pengusaha</em><br />terhadap Karyawan
          </h1>
          <p className="text-white/85 text-base leading-[1.85] max-w-[520px] mb-8">
            BPJS Ketenagakerjaan memiliki limit yang sering tidak cukup menutupi kerugian karyawan yang kecelakaan parah. Kelebihan tanggung jawab jatuh pada pengusaha — dan bisa berujung gugatan hukum jutaan hingga miliaran rupiah.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi Gratis</a>
            <a href="#sektor" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Cek Risiko Sektor Anda →</a>
          </div>
        </div>
      </section>

      {/* KEWAJIBAN HUKUM */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Landasan Hukum</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Dasar Hukum Kewajiban<br />Pengusaha di Indonesia</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {kewajibanHukum.map(k=>(
            <div key={k.no} className="bg-white rounded-card p-6 border border-black/6 grid grid-cols-[80px_1fr] gap-4 items-start">
              <div className="bg-navy rounded-lg p-2 text-center"><div className="font-heading text-gold text-xs font-bold leading-tight">{k.no}</div></div>
              <div><div className="font-heading text-navy font-bold text-[1rem] mb-1">UU {k.judul}</div><p className="text-base leading-relaxed text-[#64748B]">{k.isi}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-3xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-5">
          <p className="text-sm text-navy2"><strong className="text-gold">💡 Penting:</strong> BPJS Ketenagakerjaan hanya menanggung sampai batas tertentu. Jika kerugian karyawan melebihi limit BPJS, pengusaha wajib menanggung selisihnya — inilah gap yang ditutup oleh Employer Liability.</p>
        </div>
      </section>

      {/* CAKUPAN JAMINAN */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Cakupan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Apa yang Dijamin<br />Employer Liability?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {cakupanJaminan.map(c=>(
            <div key={c.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{c.label}</div>
              <p className="text-base leading-relaxed text-[#64748B]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEKTOR BERISIKO */}
      <section id="sektor" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Level Risiko</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Sektor Bisnis &<br />Tingkat Risiko Kerjanya</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto" id="sektor">
          {sektorBerisiko.map(s=>(
            <div key={s.label} className="bg-white rounded-card p-6 border border-black/6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">{s.icon}</span><div className="font-heading text-navy font-bold text-[1rem]">{s.label}</div></div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${s.color}`}>{s.level}</span>
              </div>
              <p className="text-base leading-relaxed text-[#64748B]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
            <Link href="/asuransi-liability/limbah-b3" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚗️ Liability Limbah B3 →</Link>
            <Link href="/asuransi-kendaraan/armada-fleet" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚐 Asuransi Armada Fleet →</Link>
            <Link href="/asuransi-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Liability</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Karyawan adalah Aset Terbesar<br />Bisnis Anda — Lindungi Mereka</h2>
          <p className="text-white/80 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis Employer Liability — kami bantu analisis gap antara BPJS dan kebutuhan perlindungan nyata karyawan Anda.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Employer Liability</a>
        </div>
      </section>
    </LiabilityLayout>
  );
}
