import type { Metadata } from "next";
import Link from "next/link";
import EngineeringLayout from "@/components/engineering/EngineeringLayout";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Contractor All Risk (CAR) Jogja – Proyek Konstruksi DIY | Asuransi Jogja",
  description: "Asuransi Contractor All Risk (CAR) di Yogyakarta untuk proyek gedung, hotel, kampus, jalan, dan infrastruktur. Wajib tender pemerintah DIY. Section I & II tersedia. Konsultasi gratis.",
  keywords: "contractor all risk jogja, asuransi CAR yogyakarta, asuransi konstruksi jogja, asuransi proyek gedung yogyakarta, asuransi kontraktor DIY, CAR pemerintah yogyakarta",
  openGraph: {
    title: "Asuransi Contractor All Risk (CAR) Jogja",
    url: "https://asuransijogja.com/asuransi-engineering/contractor-all-risk",
  },
};

const sectionPolis = [
  {
    section: "Section I", judul: "Material Damage", icon: "🏗️",
    isi: [
      "Kerusakan fisik pada pekerjaan permanen dan sementara yang sedang dibangun",
      "Kerusakan material dan bahan bangunan yang tersimpan di lokasi proyek",
      "Kerusakan peralatan konstruksi milik kontraktor (plant & equipment)",
      "Biaya pembersihan puing dan debris akibat kerusakan yang dijamin",
    ],
  },
  {
    section: "Section II", judul: "Third Party Liability (TPL)", icon: "🤝",
    isi: [
      "Kerusakan properti pihak ketiga akibat aktivitas konstruksi",
      "Cedera badan pihak ketiga termasuk warga sekitar dan pengunjung lokasi",
      "Biaya pembelaan hukum dan ganti rugi atas tuntutan pihak ketiga",
      "Kerusakan fasilitas umum: pipa air, kabel listrik, saluran komunikasi",
    ],
  },
];

const risikoProyek = [
  { icon: "🌧️", label: "Hujan & Banjir", desc: "Curah hujan tinggi di Yogyakarta bisa menggenangi galian pondasi, merusak material terbuka, dan menunda progress proyek" },
  { icon: "🌋", label: "Gempa Bumi", desc: "Yogyakarta zona gempa aktif — struktur yang sedang dibangun lebih rentan terhadap kerusakan gempa dibanding bangunan jadi" },
  { icon: "🔥", label: "Kebakaran di Lokasi", desc: "Penggunaan api las, bahan bakar alat berat, dan material mudah terbakar menjadikan lokasi proyek rentan kebakaran" },
  { icon: "🏚️", label: "Keruntuhan Struktur", desc: "Kegagalan bekisting, longsoran galian, atau runtuhnya struktur sementara adalah risiko paling mahal dalam konstruksi" },
  { icon: "🦹", label: "Pencurian Material", desc: "Besi beton, kabel listrik, dan material proyek sering menjadi target pencurian — terutama di lokasi yang dijaga minim" },
  { icon: "💥", label: "Ledakan & Kecelakaan", desc: "Penggunaan bahan peledak untuk galian, kecelakaan alat berat, dan insiden di ketinggian masuk dalam cakupan CAR" },
];

const tahapProyek = [
  { tahap: "Persiapan & Mobilisasi", cover: "Material, peralatan yang datang ke site mulai terlindungi sejak tiba di lokasi" },
  { tahap: "Pekerjaan Utama", cover: "Seluruh pekerjaan fisik: pondasi, struktur, arsitektur, MEP — semua dalam jaminan Section I" },
  { tahap: "Maintenance Period", cover: "Periode pemeliharaan pasca selesai konstruksi — umumnya 12 bulan setelah serah terima" },
  { tahap: "Testing & Commissioning", cover: "Pengujian instalasi dan sistem sebelum diserahterimakan kepada pemilik proyek" },
];

const dokumenTender = [
  "Sertifikat asuransi CAR (Certificate of Insurance)",
  "Schedule of Insurance — detail nilai proyek, periode, dan limit TPL",
  "Endorsement khusus sesuai persyaratan kontrak (misal: waiver of subrogation)",
  "Konfirmasi premi lunas dan polis aktif",
];

const proyekTipikal = [
  { icon: "🏨", label: "Hotel & Akomodasi", nilai: "Rp 10M – 500M+", durasi: "12–36 bulan" },
  { icon: "🏫", label: "Gedung Kampus & Sekolah", nilai: "Rp 5M – 200M", durasi: "12–24 bulan" },
  { icon: "🏥", label: "Rumah Sakit & Klinik", nilai: "Rp 20M – 1T+", durasi: "18–48 bulan" },
  { icon: "🛣️", label: "Jalan & Infrastruktur", nilai: "Rp 2M – 500M", durasi: "6–24 bulan" },
  { icon: "🏭", label: "Pabrik & Industri", nilai: "Rp 10M – 300M", durasi: "12–30 bulan" },
  { icon: "🏘️", label: "Perumahan & Ruko", nilai: "Rp 1M – 50M", durasi: "6–18 bulan" },
];

export default function ContractorAllRiskPage() {
  return (
    <EngineeringLayout breadcrumbs={[
      { label: "Asuransi Engineering", href: "/asuransi-engineering" },
      { label: "Contractor All Risk (CAR)" }
    ]}>

      {/* HERO */}
      <section className="bg-navy py-20 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 55% 70% at 85% 40%, rgba(200,150,62,0.13) 0%, transparent 65%)"}} />
        <div className="absolute top-6 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🏗️</div>
        <div className="relative z-10 max-w-3xl">
          <Link href="/asuransi-engineering" className="inline-flex items-center gap-1.5 text-gold2/70 text-xs mb-5 hover:text-gold2 transition-colors no-underline">← Asuransi Engineering</Link>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-[0.5rem] text-gold">◆</span>Contractor All Risk · Yogyakarta
          </div>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] text-white leading-[1.15] mb-5">
            Contractor All Risk<br /><em className="not-italic text-gold">(CAR) Yogyakarta</em><br />Proyek Aman, Tender Lancar
          </h1>
          <p className="text-white/65 text-base leading-[1.85] max-w-[520px] mb-8">
            Dari hotel bintang di Malioboro hingga gedung kampus di Sleman — setiap proyek konstruksi di Yogyakarta menghadapi risiko yang sama: cuaca ekstrem, gempa, kecelakaan pekerja, dan tuntutan pihak ketiga. CAR melindungi semuanya dalam satu polis.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-7 py-3 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">💬 Konsultasi CAR Sekarang</a>
            <a href="#section" className="border border-white/25 text-white px-7 py-3 rounded-lg text-sm hover:border-gold/60 transition-all no-underline">Lihat Cakupan Polis →</a>
          </div>
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[{num:"Section I+II",lbl:"Cakupan Lengkap"},{num:"Wajib",lbl:"Tender Pemerintah DIY"},{num:"Gratis",lbl:"Review Kebutuhan"}].map(s=>(
              <div key={s.lbl}><div className="font-heading text-gold text-lg font-bold">{s.num}</div><div className="text-white/45 text-xs mt-0.5">{s.lbl}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION POLIS */}
      <section id="section" className="py-16 px-[5vw] bg-cream">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Struktur Polis CAR</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Dua Section Polis CAR<br />yang Saling Melengkapi</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sectionPolis.map(s=>(
            <div key={s.section} className="bg-white rounded-card p-7 border border-black/6">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-navy text-gold font-heading font-bold text-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">{s.section.replace("Section ","§")}</div>
                <div>
                  <div className="font-heading text-navy font-bold text-[1.1rem]">{s.judul}</div>
                  <div className="text-gold text-xs font-semibold">{s.section}</div>
                </div>
                <span className="text-2xl ml-auto">{s.icon}</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {s.isi.map(i=>(
                  <li key={i} className="flex gap-2 text-sm text-navy2"><span className="text-gold font-bold flex-shrink-0">✓</span>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 max-w-4xl mx-auto bg-gold/8 border border-gold/20 rounded-xl p-5">
          <p className="text-sm text-navy2"><strong className="text-gold">💡 Tips:</strong> Untuk proyek di kawasan padat seperti pusat kota Yogyakarta, Yanti sangat menyarankan mengambil kedua section sekaligus. Risiko merusak properti tetangga dan cedera pejalan kaki sangat nyata di area konstruksi perkotaan.</p>
        </div>
      </section>

      {/* RISIKO PROYEK */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Risiko Nyata</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Risiko yang Mengintai<br />Setiap Proyek di Yogyakarta</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {risikoProyek.map(r=>(
            <div key={r.label} className="bg-cream rounded-card p-6 border border-black/6 hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-heading text-navy font-bold text-[1rem] mb-2">{r.label}</div>
              <p className="text-xs leading-relaxed text-[#64748B]">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROYEK TIPIKAL */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="text-center mb-8">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Referensi Proyek</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">Jenis Proyek & Estimasi<br />Nilai Pertanggungan</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {proyekTipikal.map(p=>(
            <div key={p.label} className="bg-white rounded-card p-5 border border-black/5 flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <div>
                <div className="font-heading text-navy font-bold text-sm mb-1">{p.label}</div>
                <div className="text-xs text-[#64748B]">Nilai: <span className="font-semibold text-navy">{p.nilai}</span></div>
                <div className="text-xs text-[#64748B]">Durasi: <span className="font-semibold text-navy">{p.durasi}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TAHAP PROYEK */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Periode Jaminan</div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy">CAR Melindungi<br />dari Awal hingga Serah Terima</h2>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {tahapProyek.map((t, i)=>(
            <div key={t.tahap} className="bg-cream rounded-card p-5 border border-black/5 grid grid-cols-[auto_1fr] gap-4 items-center">
              <div className="bg-navy text-gold font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">{i+1}</div>
              <div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1">{t.tahap}</div>
                <p className="text-xs leading-relaxed text-[#64748B]">{t.cover}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOKUMEN TENDER */}
      <section className="py-14 px-[5vw] bg-cream">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Persyaratan Tender</div>
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.3rem)] text-navy mb-4">Dokumen Asuransi<br />yang Dibutuhkan Tender</h2>
            <p className="text-sm leading-relaxed text-[#64748B] mb-5">Tender pemerintah DIY dan proyek swasta besar umumnya mensyaratkan dokumen asuransi berikut:</p>
            <ul className="flex flex-col gap-3">
              {dokumenTender.map(d=>(
                <li key={d} className="flex gap-2.5 text-sm text-navy2 leading-relaxed">
                  <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span>{d}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy rounded-card p-7 text-white">
            <div className="text-3xl mb-3 text-center">⚡</div>
            <div className="font-heading text-gold text-base font-semibold text-center mb-3">Butuh Polis Cepat untuk Tender?</div>
            <p className="text-xs leading-relaxed text-white/75 text-center mb-5">Kami proses polis CAR dalam <strong className="text-gold">1–2 hari kerja</strong> dengan dokumen lengkap. Hubungi Pak Rio segera — jangan sampai tender terlewat karena dokumen asuransi belum siap.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="block text-center bg-gold text-navy py-3 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">💬 Proses CAR Sekarang</a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 px-[5vw] bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-engineering/erection-all-risk" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚙️ Erection All Risk →</Link>
            <Link href="/asuransi-engineering/machinery-breakdown" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔧 Machinery Breakdown →</Link>
            <Link href="/asuransi-liability/employer-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
            <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
            <Link href="/asuransi-kendaraan/dump-truk-niaga" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚛 Kendaraan Proyek →</Link>
            <Link href="/asuransi-engineering" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">← Semua Engineering</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)"}} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">Proyek Berjalan, Tender Menang,<br />Polis CAR Sudah Siap</h2>
          <p className="text-white/60 text-sm max-w-[460px] mx-auto mb-8">Konsultasi gratis CAR untuk proyek Anda di Yogyakarta — dari review nilai pertanggungan hingga dokumen tender siap pakai.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi CAR via WhatsApp</a>
        </div>
      </section>
    </EngineeringLayout>
  );
}
