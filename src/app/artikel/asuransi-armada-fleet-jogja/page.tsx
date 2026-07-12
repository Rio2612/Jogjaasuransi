// app/artikel/asuransi-armada-fleet-jogja/page.tsx
// SILO: mendukung pillar terkait — ditambahkan untuk menutup gap konten silo
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Armada / Fleet Perusahaan di Jogja – Panduan Konsolidasi Polis | Asuransi Jogja",
  description:
    "Panduan lengkap asuransi armada/fleet untuk perusahaan di Yogyakarta dengan 5+ kendaraan operasional. Cara konsolidasi polis, perhitungan premi, dan manfaat dibanding asuransi per unit.",
  keywords:
    "asuransi armada jogja, asuransi fleet perusahaan yogyakarta, asuransi kendaraan operasional, konsolidasi polis kendaraan, asuransi mobil perusahaan jogja",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-armada-fleet-jogja",
  },
  openGraph: {
    title: "Asuransi Armada/Fleet Perusahaan di Jogja — Panduan Konsolidasi Polis",
    description:
      "Cara mengonsolidasikan asuransi kendaraan operasional perusahaan menjadi satu polis fleet yang lebih efisien dan murah.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-armada-fleet-jogja",
    type: "article",
  },
};

const schema = {"@context": "https://schema.org", "@graph": [{"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://asuransijogja.biz.id"}, {"@type": "ListItem", "position": 2, "name": "Artikel", "item": "https://asuransijogja.biz.id/artikel"}, {"@type": "ListItem", "position": 3, "name": "Asuransi Armada / Fleet Perusahaan di Jogja", "item": "https://asuransijogja.biz.id/artikel/asuransi-armada-fleet-jogja"}]}, {"@type": "Article", "headline": "Asuransi Armada / Fleet Perusahaan di Jogja – Panduan Konsolidasi Polis", "description": "Panduan lengkap asuransi armada/fleet untuk perusahaan di Yogyakarta dengan 5+ kendaraan operasional. Cara konsolidasi polis, perhitungan premi, dan manfaat dibanding asuransi per unit.", "author": {"@type": "Person", "name": "Rio MD", "jobTitle": "Praktisi Asuransi"}, "publisher": {"@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id"}, "datePublished": "2026-06-29", "dateModified": "2026-06-29"}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Berapa minimal unit kendaraan untuk membuat polis fleet?", "acceptedAnswer": {"@type": "Answer", "text": "Umumnya perusahaan asuransi mensyaratkan minimal 5 unit untuk dianggap sebagai fleet, meski beberapa penerbit polis bersedia mulai dari 3 unit dengan syarat tertentu. Di bawah itu, asuransi per unit biasanya masih lebih praktis."}}, {"@type": "Question", "name": "Apakah tanggal jatuh tempo polis existing yang berbeda-beda jadi masalah?", "acceptedAnswer": {"@type": "Answer", "text": "Tidak. Saat konsolidasi, kami bisa membantu menyusun jadwal transisi sehingga setiap kendaraan tetap terlindungi tanpa gap, baru kemudian disatukan ke satu tanggal jatuh tempo pada saat semua polis existing berakhir."}}, {"@type": "Question", "name": "Bisakah menambah kendaraan baru di tengah periode polis fleet?", "acceptedAnswer": {"@type": "Answer", "text": "Bisa. Sebagian besar polis fleet mengizinkan penambahan unit di tengah jalan dengan penyesuaian premi secara proporsional (pro-rata), tanpa perlu menerbitkan polis baru dari awal."}}]}]};

export default function ArtikelAsuransiArmadaFleetJogja() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <div className="pt-[68px]">

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Asuransi Armada / Fleet Perusahaan</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-kendaraan/armada-fleet" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🚐 Asuransi Kendaraan
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Lengkap</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Armada / Fleet —<br /><em className="not-italic text-gold">Kapan Perusahaan Anda</em><br />Perlu Konsolidasi Polis?
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Mengelola asuransi 5, 10, atau 20 kendaraan operasional secara terpisah membuang waktu dan uang. Panduan ini menjelaskan kapan saatnya beralih ke polis fleet terkonsolidasi, bagaimana perhitungannya, dan apa saja yang perlu disiapkan.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio MD — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Juni 2026</span>
              <span>·</span>
              <span>⏱️ Baca 7 menit</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 px-[5vw] bg-white">
          <article className="max-w-3xl mx-auto">

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Apa Itu Polis Armada/Fleet dan Siapa yang Membutuhkannya?</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Polis armada (fleet policy) menggabungkan seluruh kendaraan operasional perusahaan — baik mobil distribusi, kendaraan sales, maupun kendaraan operasional karyawan — ke dalam satu polis tunggal dengan satu tanggal jatuh tempo dan satu underwriter.</p><p>Perusahaan dengan minimal 5 unit kendaraan biasanya sudah mulai layak mempertimbangkan konsolidasi ini, terutama jika kendaraan-kendaraan tersebut sebelumnya didaftarkan di waktu dan perusahaan asuransi yang berbeda-beda — yang membuat administrasi perpanjangan dan klaim menjadi rumit dan rawan terlewat.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Manfaat Konsolidasi Dibanding Asuransi per Unit</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Selain efisiensi administrasi (satu tanggal jatuh tempo, satu kontak klaim), polis fleet umumnya memberikan diskon volume karena nilai pertanggungan gabungan yang besar. Underwriter juga dapat menawarkan syarat lebih fleksibel, seperti penambahan/pengurangan unit di tengah periode polis tanpa menerbitkan polis baru.</p><p>Riwayat klaim gabungan (fleet loss ratio) yang rendah juga membuat perusahaan berpeluang mendapat diskon tambahan saat perpanjangan tahun berikutnya — sesuatu yang tidak bisa diakumulasi jika kendaraan diasuransikan terpisah-pisah.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Yang Perlu Disiapkan Sebelum Konsolidasi</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Siapkan daftar lengkap kendaraan (jenis, tahun, nilai, lokasi operasional), riwayat klaim 2-3 tahun terakhir dari masing-masing polis existing, serta tanggal jatuh tempo masing-masing polis agar transisi bisa direncanakan tanpa ada periode kendaraan tanpa proteksi.</p>
          </div>

            <div className="bg-cream border border-black/8 rounded-card p-6 mb-8">
              <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Konsolidasi 8 Unit Kendaraan Distribusi FMCG</div>
              <p className="text-sm leading-relaxed text-[#475569]">Sebuah perusahaan distribusi FMCG di Yogyakarta sebelumnya mengasuransikan 8 unit mobil boks secara terpisah di 3 perusahaan asuransi berbeda dengan tanggal jatuh tempo tidak sinkron. Setelah dikonsolidasi menjadi satu polis fleet, total premi tahunan turun sekitar 12% dibanding total premi individual sebelumnya, dan proses administrasi klaim menjadi satu pintu — tim keuangan tidak lagi perlu melacak 8 tanggal perpanjangan berbeda.</p>
            </div>

            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">🧮 Estimasi Premi Fleet Berdasarkan Jumlah Unit (Ilustrasi)</h2>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Jumlah Unit</th><th className="p-3 text-left font-semibold">Total Nilai Pertanggungan</th><th className="p-3 text-left font-semibold">Estimasi Premi/Tahun</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">5 unit</td><td className="p-3 border-t border-black/8">Rp 1.000.000.000</td><td className="p-3 border-t border-black/8">Rp 28.000.000 – Rp 38.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">10 unit</td><td className="p-3 border-t border-black/8">Rp 2.000.000.000</td><td className="p-3 border-t border-black/8">Rp 52.000.000 – Rp 70.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">20 unit</td><td className="p-3 border-t border-black/8">Rp 4.000.000.000</td><td className="p-3 border-t border-black/8">Rp 96.000.000 – Rp 128.000.000</td></tr>
                  
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#5A6472] mb-10">*Estimasi premi bersifat indikatif berdasarkan pola tarif acuan OJK dan komponen risiko umum untuk ilustrasi — bukan penawaran resmi. Premi final ditentukan setelah survei dan underwriting oleh perusahaan asuransi.</p>

            <div className="flex items-center gap-3 mb-10 pt-6 border-t border-black/8">
              <div className="w-11 h-11 rounded-full bg-navy text-gold flex items-center justify-center font-heading font-bold flex-shrink-0">RM</div>
              <div>
                <div className="text-sm font-semibold text-navy">Ditulis &amp; ditinjau oleh Rio Mardiansyah</div>
                <div className="text-xs text-[#475569]">Praktisi Asuransi Independen · 8 Tahun Pengalaman · Berbasis di Yogyakarta</div>
              </div>
            </div>

            {/* CTA Inline */}
            <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
              <div className="font-heading text-navy font-bold text-base mb-2">Ingin Konsolidasi Polis Kendaraan Perusahaan?</div>
              <p className="text-[#475569] text-sm leading-relaxed mb-4">Kirimkan daftar kendaraan dan polis existing Anda, kami bantu hitung potensi penghematan dari konsolidasi ke polis fleet.</p>
              <div className="flex gap-3 flex-wrap">
                <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                  💬 Konsultasi via WhatsApp
                </a>
                <Link href="/asuransi-kendaraan/armada-fleet" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                  Lihat Produk Terkait →
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan Seputar Topik Ini</h2>
            <div className="flex flex-col divide-y divide-black/8 mb-10">
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Berapa minimal unit kendaraan untuk membuat polis fleet?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Umumnya perusahaan asuransi mensyaratkan minimal 5 unit untuk dianggap sebagai fleet, meski beberapa penerbit polis bersedia mulai dari 3 unit dengan syarat tertentu. Di bawah itu, asuransi per unit biasanya masih lebih praktis.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah tanggal jatuh tempo polis existing yang berbeda-beda jadi masalah?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Tidak. Saat konsolidasi, kami bisa membantu menyusun jadwal transisi sehingga setiap kendaraan tetap terlindungi tanpa gap, baru kemudian disatukan ke satu tanggal jatuh tempo pada saat semua polis existing berakhir.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Bisakah menambah kendaraan baru di tengah periode polis fleet?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Bisa. Sebagian besar polis fleet mengizinkan penambahan unit di tengah jalan dengan penyesuaian premi secara proporsional (pro-rata), tanpa perlu menerbitkan polis baru dari awal.</p>
              </details>
            </div>

            {/* Internal Links */}
            <div className="border-t border-black/8 pt-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Baca Juga</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/asuransi-kendaraan/armada-fleet" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🚐</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Produk Asuransi Armada/Fleet</div>
                    <div className="text-xs text-[#475569]">Lihat detail produk dan cakupan</div>
                  </div>
                </Link>
                <Link href="/asuransi-kendaraan/dump-truk-niaga" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🚛</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Dump Truk & Kendaraan Niaga</div>
                    <div className="text-xs text-[#475569]">Untuk kendaraan proyek/tambang</div>
                  </div>
                </Link>
                <Link href="/asuransi-kendaraan/mobil" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🚗</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Asuransi Mobil Pribadi</div>
                    <div className="text-xs text-[#475569]">Untuk kendaraan non-operasional</div>
                  </div>
                </Link>
                <Link href="/asuransi-kendaraan" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">📋</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Semua Produk Kendaraan</div>
                    <div className="text-xs text-[#475569]">Lihat seluruh lini produk kendaraan</div>
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* CTA Bottom */}
        <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
              Ingin Konsolidasi Polis Kendaraan Perusahaan?
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">Kirimkan daftar kendaraan dan polis existing Anda, kami bantu hitung potensi penghematan dari konsolidasi ke polis fleet.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi via WhatsApp
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
