// app/artikel/employer-liability-panduan-jogja/page.tsx
// SILO: mendukung pillar terkait — ditambahkan untuk menutup gap konten silo
import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Employer's Liability di Jogja – Panduan Tanggung Jawab kepada Karyawan",
  description:
    "Panduan lengkap Employer's Liability untuk perusahaan konstruksi, manufaktur, dan pergudangan di Yogyakarta. Perbedaan dengan BPJS Ketenagakerjaan, cakupan, dan estimasi premi.",
  keywords:
    "employer liability jogja, asuransi tanggung jawab karyawan, asuransi kecelakaan kerja yogyakarta, perbedaan bpjs dan employer liability, asuransi k3 perusahaan",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/employer-liability-panduan-jogja",
  },
  openGraph: {
    title: "Employer's Liability di Jogja — Panduan Tanggung Jawab kepada Karyawan",
    description:
      "Memahami perbedaan Employer's Liability dengan BPJS Ketenagakerjaan dan kapan perusahaan membutuhkannya.",
    url: "https://asuransijogja.biz.id/artikel/employer-liability-panduan-jogja",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Employer's Liability di Jogja — Panduan Tanggung Jawab kepada Karyawan" }],
  },
};

const schema = {"@context": "https://schema.org", "@graph": [{"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://asuransijogja.biz.id"}, {"@type": "ListItem", "position": 2, "name": "Artikel", "item": "https://asuransijogja.biz.id/artikel"}, {"@type": "ListItem", "position": 3, "name": "Asuransi Employer's Liability di Jogja", "item": "https://asuransijogja.biz.id/artikel/employer-liability-panduan-jogja"}]}, {"@type": "Article", "headline": "Asuransi Employer's Liability di Jogja – Panduan Tanggung Jawab kepada Karyawan", "description": "Panduan lengkap Employer's Liability untuk perusahaan konstruksi, manufaktur, dan pergudangan di Yogyakarta. Perbedaan dengan BPJS Ketenagakerjaan, cakupan, dan estimasi premi.", "author": {"@type": "Person", "name": "Rio Mardiansyah", "jobTitle": "Praktisi Asuransi"}, "publisher": {"@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id"}, "datePublished": "2026-06-29", "dateModified": "2026-06-29"}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Apakah Employer's Liability wajib secara hukum di Indonesia?", "acceptedAnswer": {"@type": "Answer", "text": "Tidak seperti BPJS Ketenagakerjaan yang wajib, Employer's Liability bersifat sukarela. Namun banyak perusahaan kontraktor mensyaratkannya untuk subkontraktor mereka, dan beberapa tender proyek besar mensyaratkan bukti polis ini sebagai bagian dari manajemen risiko K3."}}, {"@type": "Question", "name": "Apakah polis ini menanggung kecelakaan di luar jam kerja?", "acceptedAnswer": {"@type": "Answer", "text": "Tidak. Polis ini hanya menanggung cedera atau kematian yang terjadi dalam konteks pekerjaan — baik di lokasi kerja maupun saat menjalankan tugas pekerjaan di luar lokasi (misalnya perjalanan dinas terkait pekerjaan)."}}, {"@type": "Question", "name": "Bagaimana cara menurunkan premi Employer's Liability?", "acceptedAnswer": {"@type": "Answer", "text": "Mendokumentasikan program K3 perusahaan dengan baik, memiliki riwayat klaim rendah, dan menyediakan pelatihan keselamatan kerja rutin bisa membantu mendapatkan tarif premi yang lebih kompetitif saat underwriting maupun perpanjangan polis."}}]}]};

export default function ArtikelEmployerLiabilityPanduanJogja() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        {/* Breadcrumb */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Asuransi Employer's Liability</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-liability/employer-liability" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🤝 Asuransi Liability
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Lengkap</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Employer's Liability —<br /><em className="not-italic text-gold">Lapisan Proteksi</em><br />di Luar BPJS Ketenagakerjaan
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              BPJS Ketenagakerjaan menanggung klaim dasar kecelakaan kerja, tapi tidak melindungi perusahaan dari gugatan perdata tambahan. Panduan ini menjelaskan kapan Employer's Liability dibutuhkan dan bagaimana keduanya saling melengkapi.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Juni 2026</span>
              <span>·</span>
              <span>⏱️ Baca 6 menit</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 px-[5vw] bg-white">
          <article className="max-w-3xl mx-auto">

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Apa Bedanya dengan BPJS Ketenagakerjaan?</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Employer's Liability melindungi perusahaan dari tuntutan hukum dan kompensasi karyawan yang mengalami cedera, sakit, atau meninggal akibat kecelakaan kerja yang berkaitan dengan pekerjaan mereka. Ini berbeda dari BPJS Ketenagakerjaan yang menanggung klaim dasar — polis ini memberikan lapisan proteksi tambahan terutama untuk klaim yang melebihi limit BPJS atau gugatan perdata terpisah yang diajukan keluarga korban.</p><p>Dalam praktiknya, BPJS menanggung biaya medis dan santunan dasar sesuai tabel yang ditetapkan pemerintah, sementara Employer's Liability menanggung selisih kompensasi tambahan dan biaya hukum jika ada gugatan kelalaian K3 terhadap perusahaan.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Industri yang Paling Membutuhkan</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Industri dengan risiko kerja fisik tinggi seperti konstruksi, manufaktur, dan pergudangan di Yogyakarta sangat dianjurkan memiliki lapisan ini, terutama jika mempekerjakan banyak pekerja lapangan atau buruh harian yang rentan kecelakaan kerja seperti jatuh dari ketinggian, tertimpa material, atau kecelakaan alat berat.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Bagaimana Premi Dihitung</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Premi dihitung berdasarkan jumlah karyawan, jenis pekerjaan (klasifikasi risiko manual handling vs kantor), dan total payroll tahunan perusahaan. Perusahaan dengan riwayat kecelakaan kerja rendah dan program K3 yang terdokumentasi baik biasanya bisa mendapatkan tarif lebih kompetitif.</p>
          </div>

            <div className="bg-cream border border-black/8 rounded-card p-6 mb-8">
              <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Pekerja Bangunan Cedera Akibat Jatuh dari Scaffolding</div>
              <p className="text-sm leading-relaxed text-[#475569]">Seorang pekerja proyek renovasi gedung komersial di Yogyakarta mengalami patah tulang akibat jatuh dari scaffolding setinggi 4 meter. Selain klaim BPJS Ketenagakerjaan yang menanggung biaya medis dasar, keluarga pekerja mengajukan tuntutan tambahan kepada kontraktor terkait kelalaian K3. Karena kontraktor memiliki polis Employer's Liability, biaya kompensasi tambahan dan biaya hukum ditanggung polis, melindungi cash flow perusahaan dari kerugian besar yang tidak terduga.</p>
            </div>

            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">🧮 Estimasi Premi Employer's Liability (Ilustrasi, per Tahun)</h2>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Jumlah Karyawan</th><th className="p-3 text-left font-semibold">Sektor</th><th className="p-3 text-left font-semibold">Estimasi Premi/Tahun</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">1–25 karyawan</td><td className="p-3 border-t border-black/8">Konstruksi/manufaktur</td><td className="p-3 border-t border-black/8">Rp 3.500.000 – Rp 7.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">26–75 karyawan</td><td className="p-3 border-t border-black/8">Konstruksi/manufaktur</td><td className="p-3 border-t border-black/8">Rp 9.000.000 – Rp 18.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">1–50 karyawan</td><td className="p-3 border-t border-black/8">Kantor/jasa (risiko rendah)</td><td className="p-3 border-t border-black/8">Rp 1.500.000 – Rp 4.000.000</td></tr>
                  
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
              <div className="font-heading text-navy font-bold text-base mb-2">Ingin Tahu Apakah Bisnis Anda Perlu Employer's Liability?</div>
              <p className="text-[#475569] text-sm leading-relaxed mb-4">Ceritakan jumlah karyawan dan jenis pekerjaan di perusahaan Anda, kami bantu evaluasi kebutuhan dan estimasi premi.</p>
              <div className="flex gap-3 flex-wrap">
                <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                  💬 Konsultasi via WhatsApp
                </a>
                <Link href="/asuransi-liability/employer-liability" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                  Lihat Produk Terkait →
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan Seputar Topik Ini</h2>
            <div className="flex flex-col divide-y divide-black/8 mb-10">
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah Employer's Liability wajib secara hukum di Indonesia?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Tidak seperti BPJS Ketenagakerjaan yang wajib, Employer's Liability bersifat sukarela. Namun banyak perusahaan kontraktor mensyaratkannya untuk subkontraktor mereka, dan beberapa tender proyek besar mensyaratkan bukti polis ini sebagai bagian dari manajemen risiko K3.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah polis ini menanggung kecelakaan di luar jam kerja?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Tidak. Polis ini hanya menanggung cedera atau kematian yang terjadi dalam konteks pekerjaan — baik di lokasi kerja maupun saat menjalankan tugas pekerjaan di luar lokasi (misalnya perjalanan dinas terkait pekerjaan).</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Bagaimana cara menurunkan premi Employer's Liability?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Mendokumentasikan program K3 perusahaan dengan baik, memiliki riwayat klaim rendah, dan menyediakan pelatihan keselamatan kerja rutin bisa membantu mendapatkan tarif premi yang lebih kompetitif saat underwriting maupun perpanjangan polis.</p>
              </details>
            </div>

            {/* Internal Links */}
            <div className="border-t border-black/8 pt-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Baca Juga</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/asuransi-liability/employer-liability" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🤝</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Produk Employer's Liability</div>
                    <div className="text-xs text-[#475569]">Lihat detail produk dan cakupan</div>
                  </div>
                </Link>
                <Link href="/asuransi-liability/public-liability" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">👥</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Public Liability</div>
                    <div className="text-xs text-[#475569]">Proteksi terhadap tamu/pihak ketiga</div>
                  </div>
                </Link>
                <Link href="/artikel/perbedaan-jenis-asuransi-liability" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">⚖️</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Perbedaan Jenis Liability</div>
                    <div className="text-xs text-[#475569]">Pahami semua jenis liability</div>
                  </div>
                </Link>
                <Link href="/asuransi-liability" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">📋</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Semua Produk Liability</div>
                    <div className="text-xs text-[#475569]">Lihat seluruh lini produk liability</div>
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
              Ingin Tahu Apakah Bisnis Anda Perlu Employer's Liability?
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">Ceritakan jumlah karyawan dan jenis pekerjaan di perusahaan Anda, kami bantu evaluasi kebutuhan dan estimasi premi.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi via WhatsApp
            </a>
          </div>
        </section>

    </>
  );
}
