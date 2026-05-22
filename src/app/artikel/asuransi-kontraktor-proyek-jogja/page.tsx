import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kontraktor & Proyek Konstruksi di Yogyakarta – Panduan Lengkap | Asuransi Jogja",
  description:
    "Panduan lengkap asuransi untuk kontraktor dan proyek konstruksi di Yogyakarta: CAR, EAR, Employer Liability, Public Liability, dan Surety Bond. Syarat tender dan konsultasi gratis.",
  keywords:
    "asuransi kontraktor jogja, asuransi proyek konstruksi yogyakarta, contractor all risk jogja, CAR insurance yogyakarta, surety bond kontraktor jogja, employer liability kontraktor, asuransi tender proyek jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-kontraktor-proyek-jogja" },
  openGraph: {
    title: "Asuransi Kontraktor & Proyek Konstruksi Yogyakarta – Panduan Lengkap",
    url: "https://asuransijogja.biz.id/artikel/asuransi-kontraktor-proyek-jogja",
  },
};

const jenisAsuransiKontraktor = [
  {
    icon: "🏗️",
    nama: "Contractor All Risk (CAR)",
    wajib: true,
    deskripsi: "Perlindungan menyeluruh untuk proyek konstruksi — dari kerusakan material, alat berat, bangunan dalam konstruksi, hingga tanggung jawab terhadap pihak ketiga selama masa konstruksi berlangsung.",
    cakupan: ["Kerusakan pekerjaan yang sedang berjalan", "Kerusakan alat berat & peralatan", "Tanggung jawab pihak ketiga (third party liability)", "Biaya pembersihan puing", "Gempa bumi (perluasan opsional)"],
    href: "/asuransi-engineering/contractor-all-risk",
  },
  {
    icon: "⚙️",
    nama: "Erection All Risk (EAR)",
    wajib: false,
    deskripsi: "Khusus untuk proyek pemasangan mesin, instalasi pabrik, dan konstruksi baja. Perlindungan dari kerusakan saat proses erection hingga commissioning.",
    cakupan: ["Kerusakan material dan peralatan saat instalasi", "Kesalahan desain (opsional)", "Pengujian dan commissioning", "Third party liability"],
    href: "/asuransi-engineering/erection-all-risk",
  },
  {
    icon: "👷",
    nama: "Employer Liability",
    wajib: true,
    deskripsi: "Melindungi kontraktor dari tuntutan hukum pekerja yang mengalami kecelakaan di lokasi konstruksi. Menutup gap di atas BPJS Ketenagakerjaan yang limitnya sering tidak mencukupi.",
    cakupan: ["Kecelakaan kerja di lokasi proyek", "Penyakit akibat paparan debu/bahan kimia", "Cacat tetap atau meninggal dunia", "Biaya hukum dari gugatan pekerja"],
    href: "/asuransi-liability/employer-liability",
  },
  {
    icon: "🤝",
    nama: "Public Liability",
    wajib: false,
    deskripsi: "Perlindungan dari tuntutan warga atau pihak ketiga yang dirugikan akibat aktivitas konstruksi — properti tetangga rusak, warga kena debu/kebisingan berlebih, atau material menimpa kendaraan.",
    cakupan: ["Kerusakan properti warga sekitar", "Cedera pejalan kaki atau warga", "Dampak konstruksi ke bangunan tetangga", "Polusi debu dan getaran"],
    href: "/asuransi-liability/public-liability",
  },
  {
    icon: "📋",
    nama: "Surety Bond (Jaminan Proyek)",
    wajib: true,
    deskripsi: "Bukan asuransi kerugian, tapi wajib dalam tender pemerintah. Memberikan jaminan bahwa kontraktor akan menyelesaikan proyek sesuai kontrak.",
    cakupan: ["Jaminan Penawaran (Bid Bond)", "Jaminan Pelaksanaan (Performance Bond)", "Jaminan Uang Muka (Advance Payment Bond)", "Jaminan Pemeliharaan (Maintenance Bond)"],
    href: "/asuransi-surety-bond",
  },
];

const syaratTender = [
  { dokumen: "Jaminan Penawaran (Bid Bond)", nilaiUmum: "1–3% nilai kontrak", kapan: "Saat mendaftar tender", href: "/asuransi-surety-bond/jaminan-penawaran" },
  { dokumen: "Jaminan Pelaksanaan", nilaiUmum: "5–10% nilai kontrak", kapan: "Saat penandatanganan kontrak", href: "/asuransi-surety-bond/jaminan-pelaksanaan" },
  { dokumen: "Jaminan Uang Muka", nilaiUmum: "Sesuai nilai uang muka", kapan: "Saat menerima uang muka", href: "/asuransi-surety-bond/jaminan-uang-muka" },
  { dokumen: "Jaminan Pemeliharaan", nilaiUmum: "5% nilai kontrak", kapan: "Setelah serah terima proyek", href: "/asuransi-surety-bond/jaminan-pemeliharaan" },
  { dokumen: "Polis CAR", nilaiUmum: "Sesuai nilai proyek", kapan: "Saat mobilisasi / awal konstruksi", href: "/asuransi-engineering/contractor-all-risk" },
  { dokumen: "Employer Liability", nilaiUmum: "Minimum sesuai jumlah pekerja", kapan: "Sebelum mulai bekerja", href: "/asuransi-liability/employer-liability" },
];

const skenarioRisiko = [
  {
    icon: "🌧️",
    skenario: "Hujan deras menyebabkan pondasi amblas dan retakan pada bangunan yang sedang dikerjakan",
    tertanggung: "CAR",
    nilaiKerugian: "Rp 200–800 juta tergantung skala proyek",
  },
  {
    icon: "👷",
    skenario: "Pekerja terjatuh dari scaffolding lantai 4, mengalami patah tulang dan tidak bisa bekerja 6 bulan",
    tertanggung: "Employer Liability",
    nilaiKerugian: "Rp 150–500 juta (medis + kompensasi penghasilan)",
  },
  {
    icon: "🏘️",
    skenario: "Pemancangan tiang merusak fondasi rumah warga di sebelah lokasi proyek",
    tertanggung: "Public Liability (dalam CAR atau terpisah)",
    nilaiKerugian: "Rp 100–300 juta",
  },
  {
    icon: "🔥",
    skenario: "Kebakaran di gudang material proyek menghanguskan stok baja dan peralatan senilai ratusan juta",
    tertanggung: "CAR",
    nilaiKerugian: "Rp 300 juta – 2 miliar",
  },
];

export default function AsuransiKontraktorJogjaPage() {
  return (
    <>
      <Header />
      <div className="pt-[68px]">

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#64748B] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Asuransi Kontraktor Jogja</span>
          </div>
        </div>

        {/* HERO */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 70% at 80% 40%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              <span className="text-[0.5rem] text-gold">◆</span>Panduan Kontraktor · Yogyakarta
            </div>
            <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.2] mb-4">
              Panduan Asuransi untuk<br /><em className="not-italic text-gold">Kontraktor & Proyek Konstruksi</em><br />di Yogyakarta
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px]">
              Sektor konstruksi adalah salah satu yang paling berisiko di Indonesia. Dari kecelakaan pekerja, kerusakan proyek, hingga dampak ke warga sekitar — kontraktor membutuhkan paket proteksi yang lengkap dan sesuai syarat tender.
            </p>
            <div className="flex gap-6 mt-8 pt-6 border-t border-white/10 text-sm text-white/50">
              <span>📅 Diperbarui Mei 2025</span>
              <span>⏱️ 9 menit membaca</span>
              <span>🏗️ Untuk Kontraktor & Developer</span>
            </div>
          </div>
        </section>

        {/* JENIS ASURANSI */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[800px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Paket Proteksi</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-8">5 Jenis Asuransi yang Dibutuhkan<br />Setiap Kontraktor</h2>
            <div className="flex flex-col gap-5">
              {jenisAsuransiKontraktor.map(j => (
                <div key={j.nama} className="bg-cream rounded-card border border-black/6 overflow-hidden">
                  <div className="px-6 py-4 flex items-center gap-3 border-b border-black/5">
                    <span className="text-2xl">{j.icon}</span>
                    <div className="flex-1">
                      <div className="font-heading text-navy font-bold text-[1rem]">{j.nama}</div>
                    </div>
                    {j.wajib && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-700 flex-shrink-0">Wajib Tender</span>
                    )}
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-5">
                    <div>
                      <p className="text-base text-[#64748B] leading-[1.8] mb-3">{j.deskripsi}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {j.cakupan.map(c => (
                          <span key={c} className="bg-white border border-black/8 text-navy2 text-xs px-2.5 py-1 rounded-full">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-end">
                      <Link href={j.href} className="w-full bg-gold text-navy text-center py-2.5 rounded-lg font-bold text-sm hover:bg-gold2 transition-all no-underline">
                        Pelajari →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SYARAT TENDER */}
        <section className="py-14 px-[5vw] bg-cream">
          <div className="max-w-[800px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Syarat Tender</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-4">Dokumen Asuransi yang Wajib<br />Disiapkan untuk Tender</h2>
            <p className="text-base text-[#64748B] mb-8">Tender pemerintah dan swasta skala besar hampir selalu mensyaratkan dokumen-dokumen berikut. Siapkan jauh sebelum deadline pendaftaran.</p>
            <div className="overflow-hidden rounded-card border border-black/8 bg-white">
              <div className="grid grid-cols-[1fr_120px_1fr_44px] text-xs font-bold tracking-widest uppercase text-[#94A3B8] border-b border-black/6 px-5 py-3 bg-navy">
                <span className="text-gold2">Dokumen</span>
                <span className="text-gold2">Nilai Umum</span>
                <span className="text-gold2">Kapan Dibutuhkan</span>
                <span></span>
              </div>
              {syaratTender.map((s, i) => (
                <div key={i} className={`grid grid-cols-[1fr_120px_1fr_44px] items-center px-5 py-4 border-b border-black/4 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}>
                  <span className="text-sm font-semibold text-navy">{s.dokumen}</span>
                  <span className="text-xs text-gold font-bold">{s.nilaiUmum}</span>
                  <span className="text-xs text-[#64748B]">{s.kapan}</span>
                  <Link href={s.href} className="text-gold hover:text-gold2 transition-colors text-sm font-bold no-underline">→</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKENARIO RISIKO */}
        <section className="py-14 px-[5vw] bg-white">
          <div className="max-w-[800px] mx-auto">
            <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold mb-2">Skenario Risiko</div>
            <h2 className="font-heading text-navy text-[clamp(1.6rem,2.5vw,2.2rem)] mb-8">Risiko Nyata di Lapangan<br />dan Produk yang Menanggung</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skenarioRisiko.map(r => (
                <div key={r.skenario} className="bg-cream rounded-card p-5 border border-black/6">
                  <span className="text-3xl block mb-3">{r.icon}</span>
                  <p className="text-sm text-navy font-medium leading-relaxed mb-3">{r.skenario}</p>
                  <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-xs text-green-800 mb-2">
                    ✅ Ditanggung: <strong>{r.tertanggung}</strong>
                  </div>
                  <div className="text-xs text-[#94A3B8]">Estimasi kerugian: {r.nilaiKerugian}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + INTERNAL LINKS */}
        <section className="py-14 px-[5vw] bg-navy">
          <div className="max-w-[750px] mx-auto text-center">
            <h2 className="font-heading text-white text-[clamp(1.5rem,2.5vw,2rem)] mb-3">Siapkan Dokumen Asuransi<br />Sebelum Ikut Tender</h2>
            <p className="text-white/70 text-sm max-w-[420px] mx-auto mb-6">Proses penerbitan CAR, Surety Bond, dan Liability bisa kami bantu dalam hitungan hari. Konsultasi gratis sekarang.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all mb-8">💬 Konsultasi Kontraktor</a>
            <div className="border-t border-white/10 pt-8 text-left">
              <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Produk untuk Kontraktor</div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/asuransi-engineering/contractor-all-risk" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">🏗️ Contractor All Risk →</Link>
                <Link href="/asuransi-engineering/erection-all-risk" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">⚙️ Erection All Risk →</Link>
                <Link href="/asuransi-liability/employer-liability" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">👷 Employer Liability →</Link>
                <Link href="/asuransi-liability/public-liability" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">🤝 Public Liability →</Link>
                <Link href="/asuransi-surety-bond" className="bg-white/8 border border-white/15 text-white/80 text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-colors no-underline">📋 Surety Bond →</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
