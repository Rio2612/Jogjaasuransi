import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cara Menghitung Nilai Asuransi yang Tepat – Hindari Underinsurance",
  description: "Panduan lengkap cara menghitung nilai pertanggungan asuransi yang benar. Pelajari apa itu underinsurance, cara menghitung nilai kendaraan, properti, dan aset bisnis untuk klaim yang optimal.",
  keywords: "cara menghitung nilai asuransi, nilai pertanggungan asuransi, underinsurance adalah, harga pertanggungan kendaraan, nilai properti untuk asuransi, menghitung premi asuransi jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/cara-menghitung-nilai-asuransi" },
  openGraph: {
    title: "Cara Menghitung Nilai Asuransi yang Tepat – Hindari Underinsurance",
    url: "https://asuransijogja.biz.id/artikel/cara-menghitung-nilai-asuransi",
  },
};

const contohUnderinsurance = {
  nilaiSebenarnya: 500_000_000,
  nilaiDipertanggungkan: 300_000_000,
  kerusakanTerjadi: 200_000_000,
  klaimDibayar: (300_000_000 / 500_000_000) * 200_000_000,
  selisih: 200_000_000 - (300_000_000 / 500_000_000) * 200_000_000,
};

const metodeHitungProperti = [
  { metode: "Nilai Penggantian Baru (Reinstatement Value)", penjelasan: "Berapa biaya membangun kembali properti dari nol dengan spesifikasi yang sama di lokasi yang sama. Ini adalah metode yang paling direkomendasikan untuk properti." },
  { metode: "Nilai Pasar (Market Value)", penjelasan: "Harga jual properti di pasaran saat ini. Biasanya lebih rendah dari biaya pembangunan kembali untuk properti lama. Cocok untuk beberapa jenis properti komersial." },
  { metode: "Nilai Buku (Book Value)", penjelasan: "Nilai aset setelah dikurangi penyusutan berdasarkan umur aset. Sering digunakan untuk peralatan dan mesin dalam pembukuan perusahaan." },
];

const komponenNilaiProperti = [
  { item: "Struktur & Pondasi", catatan: "Biaya konstruksi per m² × luas bangunan — sesuaikan dengan harga material terkini" },
  { item: "Finishing & Interior", catatan: "Plafon, keramik, pintu/jendela premium, pengecatan — sering diremehkan tapi nilainya besar" },
  { item: "Instalasi MEP", catatan: "Listrik, pipa air, AC, dan sistem mekanikal-elektrikal lainnya" },
  { item: "Furnitur & Perlengkapan", catatan: "Jika ingin diasuransikan terpisah — isi bangunan perlu tambahan All Risk Contents" },
  { item: "Biaya Arsitek & Konsultan", catatan: "Biaya profesional untuk desain dan pengawasan jika terjadi pembangunan kembali" },
];

const nilaiKendaraan = [
  { tahun: "0–1 tahun", persentase: "95–100%", keterangan: "Harga OTR baru dikurangi depresiasi minimal" },
  { tahun: "1–2 tahun", persentase: "85–90%", keterangan: "Nilai pasar kendaraan bekas kondisi baik" },
  { tahun: "2–3 tahun", persentase: "75–80%", keterangan: "Acuan harga OLX / marketplace kendaraan" },
  { tahun: "3–5 tahun", persentase: "65–75%", keterangan: "Konsultasikan dengan dealer atau konsultan asuransi" },
  { tahun: "> 5 tahun", persentase: "50–65%", keterangan: "Tergantung kondisi dan merek kendaraan" },
];

const faqNilai = [
  {
    q: "Apakah nilai pertanggungan harus tepat sama dengan nilai aset?",
    a: "Untuk hasil klaim yang optimal, nilai pertanggungan sebaiknya mencerminkan nilai penggantian aktual aset Anda. Nilai yang terlalu rendah menyebabkan underinsurance, nilai yang terlalu tinggi berarti Anda membayar premi lebih dari yang perlu — dan klaim tetap hanya sebesar kerugian aktual."
  },
  {
    q: "Seberapa sering nilai pertanggungan perlu diperbarui?",
    a: "Idealnya setiap tahun — terutama untuk properti karena biaya konstruksi naik setiap tahun. Untuk kendaraan, nilai pasar turun setiap tahun sehingga perlu disesuaikan agar tidak membayar premi berlebih."
  },
  {
    q: "Apa yang terjadi jika saya sengaja meninggikan nilai pertanggungan?",
    a: "Ini disebut over-insurance dan tidak menguntungkan. Asuransi menggunakan prinsip indemnity — klaim dibayar maksimal sebesar kerugian aktual, tidak melebihi nilai kerusakan riil, meskipun pertanggungan lebih besar."
  },
];

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cara Menghitung Nilai Asuransi yang Tepat – Hindari Underinsurance",
  "description": "Panduan lengkap cara menghitung nilai pertanggungan asuransi yang benar untuk kendaraan, properti, dan aset bisnis.",
  "url": "https://asuransijogja.biz.id/artikel/cara-menghitung-nilai-asuransi",
  "author": { "@type": "Person", "name": "Rio Mardiansyah" },
  "publisher": { "@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id" },
  "inLanguage": "id-ID",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqNilai.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");

export default function CaraMenghitungNilaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-xs text-[#64748B] flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Cara Menghitung Nilai Asuransi</span>
        </div>
      </div>

      <article className="max-w-[760px] mx-auto px-[5vw] py-14">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">🧮 Panduan</span>
            <span className="text-[#94A3B8] text-xs">⏱ 9 menit baca</span>
          </div>
          <h1 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy leading-[1.2] mb-4">
            Cara Menghitung Nilai Asuransi<br />yang Tepat (Avoid Underinsurance)
          </h1>
          <p className="text-[#64748B] text-lg leading-[1.85]">
            Salah satu kesalahan paling umum dalam berasuransi adalah menetapkan nilai pertanggungan yang terlalu rendah untuk menghemat premi. Hasilnya: saat klaim terjadi, ganti rugi yang diterima jauh lebih kecil dari yang diharapkan. Fenomena ini disebut <strong className="text-navy">underinsurance</strong>.
          </p>
        </div>

        {/* PENJELASAN UNDERINSURANCE */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">Apa itu Underinsurance?</h2>
          <p className="text-sm text-[#64748B] leading-relaxed mb-6">Underinsurance terjadi ketika nilai pertanggungan yang tercantum dalam polis lebih rendah dari nilai sebenarnya aset yang diasuransikan. Saat klaim, asuransi menerapkan <strong className="text-navy">klausul average (proporsional)</strong> — artinya klaim dibayar secara proporsional sesuai rasio pertanggungan.</p>

          <div className="bg-navy rounded-xl p-6 text-white mb-4">
            <div className="font-heading text-gold text-[1rem] font-bold mb-4">📊 Contoh Kasus Underinsurance</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
              <div><div className="text-white/50 text-xs mb-1">Nilai sebenarnya aset</div><div className="font-bold text-white text-base">{fmt(contohUnderinsurance.nilaiSebenarnya)}</div></div>
              <div><div className="text-white/50 text-xs mb-1">Nilai dipertanggungkan</div><div className="font-bold text-gold text-base">{fmt(contohUnderinsurance.nilaiDipertanggungkan)}</div></div>
              <div><div className="text-white/50 text-xs mb-1">Kerugian terjadi</div><div className="font-bold text-white text-base">{fmt(contohUnderinsurance.kerusakanTerjadi)}</div></div>
              <div><div className="text-white/50 text-xs mb-1">Klaim yang dibayar</div><div className="font-bold text-red-300 text-base">{fmt(contohUnderinsurance.klaimDibayar)}</div></div>
            </div>
            <div className="bg-red-500/20 rounded-lg p-3 text-sm">
              <strong className="text-red-300">Selisih yang harus ditanggung sendiri: {fmt(contohUnderinsurance.selisih)}</strong>
              <div className="text-white/70 text-xs mt-1">Rumus: (Nilai Dipertanggungkan ÷ Nilai Sebenarnya) × Kerugian = Klaim yang Dibayar</div>
            </div>
          </div>
          <div className="p-4 bg-gold/8 border-l-4 border-gold rounded-r-xl">
            <p className="text-sm text-navy2">Dengan menghemat premi dari awal, pemilik kehilangan <strong className="text-gold">{fmt(contohUnderinsurance.selisih)}</strong> saat klaim — jauh lebih besar dari penghematan premi selama bertahun-tahun.</p>
          </div>
        </section>

        {/* PROPERTI */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">Menghitung Nilai Asuransi Properti</h2>
          <div className="flex flex-col gap-4 mb-6">
            {metodeHitungProperti.map(m => (
              <div key={m.metode} className="bg-cream rounded-xl p-5 border border-black/5">
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">{m.metode}</div>
                <p className="text-sm text-[#64748B] leading-relaxed">{m.penjelasan}</p>
              </div>
            ))}
          </div>
          <div className="font-heading text-navy font-bold mb-3">Komponen yang Perlu Dihitung:</div>
          <div className="flex flex-col gap-2">
            {komponenNilaiProperti.map(k => (
              <div key={k.item} className="flex gap-3 p-3 bg-white rounded-lg border border-black/5">
                <span className="text-gold font-bold flex-shrink-0">✓</span>
                <div><span className="font-semibold text-navy text-sm">{k.item}</span><span className="text-[#64748B] text-xs ml-2">— {k.catatan}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* KENDARAAN */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">Menghitung Nilai Asuransi Kendaraan</h2>
          <p className="text-sm text-[#64748B] mb-5 leading-relaxed">Untuk kendaraan, nilai pertanggungan mengacu pada <strong className="text-navy">harga pasar (market value)</strong> — harga yang bisa diperoleh jika kendaraan dijual saat ini. Panduan depresiasi umum:</p>
          <div className="overflow-x-auto rounded-xl border border-black/8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs">Usia Kendaraan</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold">Persentase Nilai</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {nilaiKendaraan.map((n, i) => (
                  <tr key={n.tahun} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                    <td className="p-3.5 font-semibold text-navy text-xs">{n.tahun}</td>
                    <td className="p-3.5 text-gold font-bold text-sm">{n.persentase}</td>
                    <td className="p-3.5 text-[#64748B] text-sm">{n.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">Pertanyaan Umum</h2>
          <div className="flex flex-col">
            {faqNilai.map((f, i) => (
              <details key={i} className="border-b border-black/8 group">
                <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                  {f.q}<span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10 p-6 bg-cream rounded-xl border border-black/6">
          <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Artikel & Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/artikel/pentingnya-asuransi-dunia-usaha-jogja" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏢 Asuransi Dunia Usaha →</Link>
            <Link href="/asuransi-properti/property-all-risk" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🏭 Property All Risk →</Link>
            <Link href="/asuransi-kendaraan/mobil" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Asuransi Mobil →</Link>
            <Link href="/artikel/cara-klaim-asuransi-mobil" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">📋 Cara Klaim Mobil →</Link>
          </div>
        </section>

        <div className="bg-navy rounded-[20px] p-8 text-center">
          <h3 className="font-heading text-white text-[1.4rem] mb-3">Bingung Menentukan Nilai Pertanggungan?</h3>
          <p className="text-white/65 text-sm mb-6 max-w-[420px] mx-auto">Pak Rio siap membantu menghitung nilai pertanggungan yang tepat — gratis, tanpa tekanan, pastikan Anda tidak rugi saat klaim.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Nilai Asuransi</a>
        </div>
      </article>
    </>
  );
}
