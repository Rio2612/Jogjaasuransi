// app/artikel/jaminan-pelaksanaan-pemeliharaan-uang-muka/page.tsx
// SILO: mendukung pillar terkait — ditambahkan untuk menutup gap konten silo
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Siklus Jaminan Proyek: Pelaksanaan, Uang Muka & Pemeliharaan di Jogja | Asuransi Jogja",
  description:
    "Panduan lengkap 3 jenis jaminan proyek setelah menang tender: jaminan pelaksanaan, jaminan uang muka, dan jaminan pemeliharaan. Kapan masing-masing dibutuhkan dan estimasi biayanya.",
  keywords:
    "jaminan pelaksanaan jogja, jaminan uang muka kontraktor, jaminan pemeliharaan proyek, performance bond yogyakarta, advance payment bond, maintenance bond diy",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/jaminan-pelaksanaan-pemeliharaan-uang-muka",
  },
  openGraph: {
    title: "Siklus Jaminan Proyek di Jogja — Pelaksanaan, Uang Muka & Pemeliharaan",
    description:
      "Memahami 3 jenis jaminan yang dibutuhkan kontraktor setelah menang tender, dari mulai proyek hingga masa pemeliharaan selesai.",
    url: "https://asuransijogja.biz.id/artikel/jaminan-pelaksanaan-pemeliharaan-uang-muka",
    type: "article",
  },
};

const schema = {"@context": "https://schema.org", "@graph": [{"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://asuransijogja.biz.id"}, {"@type": "ListItem", "position": 2, "name": "Artikel", "item": "https://asuransijogja.biz.id/artikel"}, {"@type": "ListItem", "position": 3, "name": "Siklus Jaminan Proyek: Pelaksanaan, Uang Muka & Pemeliharaan di Jogja | Asuransi Jogja", "item": "https://asuransijogja.biz.id/artikel/jaminan-pelaksanaan-pemeliharaan-uang-muka"}]}, {"@type": "Article", "headline": "Siklus Jaminan Proyek: Pelaksanaan, Uang Muka & Pemeliharaan di Jogja", "description": "Panduan lengkap 3 jenis jaminan proyek setelah menang tender: jaminan pelaksanaan, jaminan uang muka, dan jaminan pemeliharaan. Kapan masing-masing dibutuhkan dan estimasi biayanya.", "author": {"@type": "Person", "name": "Rio MD", "jobTitle": "Praktisi Asuransi"}, "publisher": {"@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id"}, "datePublished": "2026-06-29", "dateModified": "2026-06-29"}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Apakah ketiga jaminan ini harus diterbitkan dari perusahaan yang sama?", "acceptedAnswer": {"@type": "Answer", "text": "Tidak harus, namun menggunakan satu penerbit untuk seluruh siklus proyek biasanya lebih efisien karena underwriter sudah memiliki data dan riwayat kontraktor, sehingga proses penerbitan jaminan berikutnya bisa lebih cepat."}}, {"@type": "Question", "name": "Apa yang terjadi jika kontraktor tidak mengambil uang muka?", "acceptedAnswer": {"@type": "Answer", "text": "Jika kontraktor tidak mengambil opsi uang muka dari pemberi kerja, maka jaminan uang muka tidak diperlukan. Hanya jaminan pelaksanaan dan jaminan pemeliharaan yang tetap wajib dalam siklus proyek standar."}}, {"@type": "Question", "name": "Bisakah jaminan pemeliharaan menggantikan retensi yang sudah dipotong?", "acceptedAnswer": {"@type": "Answer", "text": "Pada banyak kontrak, ya — kontraktor bisa mengajukan penggantian retensi yang sudah dipotong dengan jaminan pemeliharaan, sehingga dana retensi yang tertahan bisa dicairkan lebih cepat kepada kontraktor."}}]}]};

export default function ArtikelJaminanPelaksanaanPemeliharaanUangMuka() {
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
            <span className="text-navy font-semibold">Siklus Jaminan Proyek Kontraktor</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-surety-bond" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                📄 Surety Bond
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Lengkap</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Siklus Jaminan Proyek —<br /><em className="not-italic text-gold">Dari Menang Tender</em><br />hingga Serah Terima Akhir
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Setelah memenangkan tender, kontraktor masih perlu melewati 3 fase jaminan: pelaksanaan, uang muka, dan pemeliharaan. Panduan ini menjelaskan kapan masing-masing dibutuhkan dan bagaimana ketiganya saling terkait dalam siklus hidup sebuah proyek.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio MD — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Juni 2026</span>
              <span>·</span>
              <span>⏱️ Baca 8 menit</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 px-[5vw] bg-white">
          <article className="max-w-3xl mx-auto">

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Fase 1 — Jaminan Pelaksanaan (Performance Bond)</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Jaminan Pelaksanaan diwajibkan setelah kontraktor memenangkan tender, sebagai garansi bahwa proyek akan diselesaikan sesuai kontrak. Nilainya umumnya 5% dari nilai kontrak dan berlaku sejak penandatanganan kontrak hingga serah terima pertama (PHO).</p><p>Jika kontraktor gagal menyelesaikan proyek sesuai spesifikasi dan jadwal, pemberi kerja dapat mencairkan jaminan ini sebagai kompensasi. Karena risikonya lebih besar, penerbit jaminan melakukan underwriting lebih ketat dibanding bid bond, termasuk melihat track record dan kapasitas finansial kontraktor.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Fase 2 — Jaminan Uang Muka (Advance Payment Bond)</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Banyak proyek pemerintah memberikan uang muka di awal kontrak (umumnya hingga 20-30% nilai kontrak) untuk membantu kontraktor memulai mobilisasi. Sebagai syarat pencairan, kontraktor wajib menyerahkan Jaminan Uang Muka senilai uang muka yang diterima.</p><p>Jaminan ini melindungi pemberi kerja jika kontraktor menerima uang muka namun gagal melaksanakan pekerjaan sesuai progres yang seharusnya. Nilai jaminan akan menyusut seiring progres fisik proyek yang sudah diverifikasi.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Fase 3 — Jaminan Pemeliharaan (Maintenance Bond)</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Setelah proyek diserahterimakan pertama kali (PHO), masih ada masa pemeliharaan (umumnya 6-12 bulan) hingga serah terima akhir (FHO) di mana kontraktor wajib memperbaiki cacat/defect yang muncul. Jaminan Pemeliharaan menjamin kewajiban ini dan biasanya menggantikan retensi (dana tahan) yang sebelumnya dipotong dari pembayaran termin — sehingga kontraktor bisa menerima pembayaran penuh lebih cepat.</p>
          </div>

            <div className="bg-cream border border-black/8 rounded-card p-6 mb-8">
              <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Satu Kontraktor, Tiga Jaminan dalam Satu Siklus Proyek</div>
              <p className="text-sm leading-relaxed text-[#475569]">Seorang kontraktor di Bantul memenangkan tender pembangunan gedung dinas senilai Rp 2,8 miliar. Sesuai siklus normal: jaminan pelaksanaan 5% (Rp 140 juta) diterbitkan saat tanda tangan kontrak; jaminan uang muka 20% (Rp 560 juta) diterbitkan saat mencairkan modal kerja awal; dan jaminan pemeliharaan 5% (Rp 140 juta) diterbitkan saat PHO untuk menggantikan retensi. Dengan merencanakan ketiganya sejak awal bersama konsultan, kontraktor menghindari keterlambatan administrasi di setiap fase proyek.</p>
            </div>

            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">🧮 Estimasi Biaya 3 Jenis Jaminan (Ilustrasi, Nilai Kontrak Rp 2 Miliar)</h2>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Jenis Jaminan</th><th className="p-3 text-left font-semibold">Nilai Jaminan</th><th className="p-3 text-left font-semibold">Estimasi Premi</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">Jaminan Pelaksanaan (5%)</td><td className="p-3 border-t border-black/8">Rp 100.000.000</td><td className="p-3 border-t border-black/8">Rp 2.500.000 – Rp 4.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Jaminan Uang Muka (20%)</td><td className="p-3 border-t border-black/8">Rp 400.000.000</td><td className="p-3 border-t border-black/8">Rp 6.000.000 – Rp 10.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Jaminan Pemeliharaan (5%)</td><td className="p-3 border-t border-black/8">Rp 100.000.000</td><td className="p-3 border-t border-black/8">Rp 2.500.000 – Rp 4.000.000</td></tr>
                  
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
              <div className="font-heading text-navy font-bold text-base mb-2">Sedang Mengerjakan Proyek dan Butuh Jaminan?</div>
              <p className="text-[#475569] text-sm leading-relaxed mb-4">Ceritakan fase proyek Anda saat ini — pelaksanaan, uang muka, atau pemeliharaan — kami bantu proses penerbitan jaminan yang sesuai.</p>
              <div className="flex gap-3 flex-wrap">
                <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                  💬 Konsultasi via WhatsApp
                </a>
                <Link href="/asuransi-surety-bond" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                  Lihat Produk Terkait →
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan Seputar Topik Ini</h2>
            <div className="flex flex-col divide-y divide-black/8 mb-10">
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah ketiga jaminan ini harus diterbitkan dari perusahaan yang sama?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Tidak harus, namun menggunakan satu penerbit untuk seluruh siklus proyek biasanya lebih efisien karena underwriter sudah memiliki data dan riwayat kontraktor, sehingga proses penerbitan jaminan berikutnya bisa lebih cepat.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apa yang terjadi jika kontraktor tidak mengambil uang muka?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Jika kontraktor tidak mengambil opsi uang muka dari pemberi kerja, maka jaminan uang muka tidak diperlukan. Hanya jaminan pelaksanaan dan jaminan pemeliharaan yang tetap wajib dalam siklus proyek standar.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Bisakah jaminan pemeliharaan menggantikan retensi yang sudah dipotong?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Pada banyak kontrak, ya — kontraktor bisa mengajukan penggantian retensi yang sudah dipotong dengan jaminan pemeliharaan, sehingga dana retensi yang tertahan bisa dicairkan lebih cepat kepada kontraktor.</p>
              </details>
            </div>

            {/* Internal Links */}
            <div className="border-t border-black/8 pt-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Baca Juga</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/asuransi-surety-bond/jaminan-pelaksanaan" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🏗️</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Jaminan Pelaksanaan</div>
                    <div className="text-xs text-[#475569]">Performance bond untuk awal kontrak</div>
                  </div>
                </Link>
                <Link href="/asuransi-surety-bond/jaminan-uang-muka" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">💰</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Jaminan Uang Muka</div>
                    <div className="text-xs text-[#475569]">Advance payment bond</div>
                  </div>
                </Link>
                <Link href="/asuransi-surety-bond/jaminan-pemeliharaan" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🔧</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Jaminan Pemeliharaan</div>
                    <div className="text-xs text-[#475569]">Maintenance bond pascaproyek</div>
                  </div>
                </Link>
                <Link href="/artikel/cara-mengurus-jaminan-penawaran-jogja" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">📋</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Jaminan Penawaran (Bid Bond)</div>
                    <div className="text-xs text-[#475569]">Fase sebelum menang tender</div>
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
              Sedang Mengerjakan Proyek dan Butuh Jaminan?
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">Ceritakan fase proyek Anda saat ini — pelaksanaan, uang muka, atau pemeliharaan — kami bantu proses penerbitan jaminan yang sesuai.</p>
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
