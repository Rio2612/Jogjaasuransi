// app/artikel/asuransi-kargo-ekspor-impor-jogja/page.tsx
// SILO: mendukung pillar terkait — ditambahkan untuk menutup gap konten silo
import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Kargo Ekspor-Impor Udara & Laut di Jogja – Panduan ICC Clause",
  description:
    "Panduan asuransi marine cargo untuk eksportir kerajinan, furnitur, dan tekstil di Yogyakarta. Perbedaan klausul ICC A/B/C, jalur udara vs laut, dan estimasi premi.",
  keywords:
    "asuransi kargo ekspor jogja, asuransi marine cargo yogyakarta, icc clause asuransi kargo, asuransi kargo udara laut, asuransi kerajinan ekspor diy",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-kargo-ekspor-impor-jogja",
  },
  openGraph: {
    title: "Asuransi Kargo Ekspor-Impor Udara & Laut — Panduan Klausul ICC",
    description:
      "Panduan lengkap asuransi marine cargo untuk eksportir di Yogyakarta, termasuk perbedaan klausul ICC A, B, dan C.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-kargo-ekspor-impor-jogja",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Kargo Ekspor-Impor Udara & Laut — Panduan Klausul ICC" }],
  },
};

const schema = {"@context": "https://schema.org", "@graph": [{"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://asuransijogja.biz.id"}, {"@type": "ListItem", "position": 2, "name": "Artikel", "item": "https://asuransijogja.biz.id/artikel"}, {"@type": "ListItem", "position": 3, "name": "Asuransi Kargo Ekspor-Impor Udara & Laut di Jogja", "item": "https://asuransijogja.biz.id/artikel/asuransi-kargo-ekspor-impor-jogja"}]}, {"@type": "Article", "headline": "Asuransi Kargo Ekspor-Impor Udara & Laut di Jogja – Panduan ICC Clause", "description": "Panduan asuransi marine cargo untuk eksportir kerajinan, furnitur, dan tekstil di Yogyakarta. Perbedaan klausul ICC A/B/C, jalur udara vs laut, dan estimasi premi.", "author": {"@type": "Person", "name": "Rio Mardiansyah", "jobTitle": "Praktisi Asuransi"}, "publisher": {"@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id"}, "datePublished": "2026-06-29", "dateModified": "2026-06-29"}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Klausul ICC mana yang paling cocok untuk kerajinan ekspor?", "acceptedAnswer": {"@type": "Answer", "text": "ICC-A umumnya paling direkomendasikan untuk barang kerajinan dan furnitur karena rentan terhadap berbagai jenis kerusakan selama pengiriman jarak jauh, dan selisih premi dengan ICC-C relatif kecil dibanding manfaat proteksinya."}}, {"@type": "Question", "name": "Apakah kargo udara otomatis lebih aman dari kargo laut?", "acceptedAnswer": {"@type": "Answer", "text": "Waktu tempuh yang lebih singkat memang mengurangi eksposur terhadap cuaca, namun penanganan yang cepat dan berkali-kali (multiple handling) di kargo udara tetap membawa risiko kerusakan fisik, terutama untuk barang yang rapuh."}}, {"@type": "Question", "name": "Apakah nilai pertanggungan harus sama dengan nilai invoice?", "acceptedAnswer": {"@type": "Answer", "text": "Idealnya nilai pertanggungan mengikuti nilai CIF (invoice plus biaya asuransi dan freight) sesuai praktik perdagangan internasional, bukan hanya nilai barang FOB, agar seluruh biaya yang sudah dikeluarkan juga terlindungi jika terjadi klaim total."}}]}]};

export default function ArtikelAsuransiKargoEksporImporJogja() {
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
            <span className="text-navy font-semibold">Asuransi Kargo Ekspor-Impor</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-kargo/kargo-udara-laut" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                📦 Asuransi Kargo
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Lengkap</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Kargo Ekspor-Impor —<br /><em className="not-italic text-gold">Panduan Klausul ICC</em><br />untuk Jalur Udara & Laut
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Setiap moda pengiriman ekspor — laut maupun udara — punya profil risiko berbeda, dan klausul ICC yang dipilih akan menentukan seberapa luas proteksi yang Anda dapatkan. Panduan ini membantu eksportir DIY memilih dengan tepat.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
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

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Karakteristik Risiko Jalur Laut vs Udara</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Pelaku usaha ekspor-impor di DIY — mulai dari kerajinan, furnitur, hingga produk tekstil — mengirimkan barang melalui pelabuhan untuk jalur laut atau bandara untuk jalur udara. Setiap moda memiliki profil risiko berbeda: kargo laut menghadapi risiko cuaca, kelembaban, dan penanganan pelabuhan yang lebih lama; kargo udara menghadapi risiko penanganan cepat namun nilai barang per kiriman sering lebih tinggi sehingga konsekuensi kerugian per insiden juga lebih besar.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Memahami Klausul ICC A, B, dan C</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Polis marine cargo dengan klausul ICC (Institute Cargo Clauses) memberikan tingkat proteksi berbeda. ICC-A paling komprehensif (all risks, menanggung hampir semua risiko kecuali yang dikecualikan secara spesifik), ICC-B menanggung risiko yang lebih spesifik dan terdaftar, sementara ICC-C hanya menanggung risiko mayor seperti kebakaran, tenggelam kapal, dan kandas.</p><p>Untuk barang ekspor bernilai tinggi seperti kerajinan seni, furnitur ukir, atau elektronik, ICC-A sangat direkomendasikan karena selisih premi dengan ICC-C relatif kecil dibanding risiko kerugian totalnya jika terjadi kerusakan akibat penyebab yang tidak tercakup ICC-C.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Dokumen yang Perlu Disiapkan Eksportir</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Untuk mengasuransikan kargo ekspor, siapkan invoice/faktur nilai barang, packing list, dan dokumen pengiriman (bill of lading untuk laut, airway bill untuk udara). Nilai pertanggungan idealnya mengikuti nilai invoice ditambah margin CIF (cost, insurance, freight) sesuai praktik perdagangan internasional.</p>
          </div>

            <div className="bg-cream border border-black/8 rounded-card p-6 mb-8">
              <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Kontainer Kerajinan Ekspor Rusak Akibat Cuaca Buruk di Laut</div>
              <p className="text-sm leading-relaxed text-[#475569]">Seorang eksportir furnitur dan kerajinan kayu di Bantul mengirim satu kontainer senilai Rp 450 juta melalui jalur laut ke Eropa. Akibat cuaca buruk yang menyebabkan air laut masuk ke kontainer, sebagian barang mengalami kerusakan kelembaban. Dengan polis marine cargo ICC-A yang menanggung risiko air laut, klaim kerugian sekitar Rp 95 juta berhasil diproses dengan dokumentasi survei pelabuhan, dan dana ganti rugi cair dalam waktu sekitar 3 minggu — tanpa mengganggu hubungan dengan buyer di luar negeri karena pengiriman pengganti bisa segera disiapkan.</p>
            </div>

            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">🧮 Estimasi Premi Marine Cargo (Ilustrasi, per Pengiriman)</h2>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Nilai Barang</th><th className="p-3 text-left font-semibold">Klausul & Moda</th><th className="p-3 text-left font-semibold">Estimasi Premi</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">Rp 200.000.000</td><td className="p-3 border-t border-black/8">ICC-C (laut)</td><td className="p-3 border-t border-black/8">Rp 300.000 – Rp 500.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Rp 200.000.000</td><td className="p-3 border-t border-black/8">ICC-A (laut)</td><td className="p-3 border-t border-black/8">Rp 500.000 – Rp 800.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Rp 500.000.000</td><td className="p-3 border-t border-black/8">ICC-A (udara)</td><td className="p-3 border-t border-black/8">Rp 1.250.000 – Rp 2.000.000</td></tr>
                  
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#5A6472] mb-10">*Estimasi premi bersifat indikatif berdasarkan pola tarif acuan OJK dan komponen risiko umum untuk ilustrasi — bukan penawaran resmi. Premi final ditentukan setelah survei dan underwriting oleh perusahaan asuransi.</p>

            <div className="flex items-center gap-3 mb-10 pt-6 border-t border-black/8">
              <div className="w-11 h-11 rounded-full bg-navy text-gold flex items-center justify-center font-heading font-bold flex-shrink-0">RM</div>
              <div>
                <div className="text-sm font-semibold text-navy">Ditulis &amp; ditinjau oleh Rio Mardiansyah</div>
                <div className="text-xs text-[#475569]">Praktisi Asuransi Independen · 9+ Tahun Pengalaman · Berbasis di Yogyakarta</div>
              </div>
            </div>

            {/* CTA Inline */}
            <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
              <div className="font-heading text-navy font-bold text-base mb-2">Mengekspor Barang dan Butuh Proteksi Marine Cargo?</div>
              <p className="text-[#475569] text-sm leading-relaxed mb-4">Ceritakan jenis barang, nilai, dan moda pengiriman Anda, kami bantu pilih klausul ICC yang sesuai dan hitung estimasi premi.</p>
              <div className="flex gap-3 flex-wrap">
                <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                  💬 Konsultasi via WhatsApp
                </a>
                <Link href="/asuransi-kargo/kargo-udara-laut" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                  Lihat Produk Terkait →
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan Seputar Topik Ini</h2>
            <div className="flex flex-col divide-y divide-black/8 mb-10">
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Klausul ICC mana yang paling cocok untuk kerajinan ekspor?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">ICC-A umumnya paling direkomendasikan untuk barang kerajinan dan furnitur karena rentan terhadap berbagai jenis kerusakan selama pengiriman jarak jauh, dan selisih premi dengan ICC-C relatif kecil dibanding manfaat proteksinya.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah kargo udara otomatis lebih aman dari kargo laut?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Waktu tempuh yang lebih singkat memang mengurangi eksposur terhadap cuaca, namun penanganan yang cepat dan berkali-kali (multiple handling) di kargo udara tetap membawa risiko kerusakan fisik, terutama untuk barang yang rapuh.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah nilai pertanggungan harus sama dengan nilai invoice?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Idealnya nilai pertanggungan mengikuti nilai CIF (invoice plus biaya asuransi dan freight) sesuai praktik perdagangan internasional, bukan hanya nilai barang FOB, agar seluruh biaya yang sudah dikeluarkan juga terlindungi jika terjadi klaim total.</p>
              </details>
            </div>

            {/* Internal Links */}
            <div className="border-t border-black/8 pt-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Baca Juga</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/asuransi-kargo/kargo-udara-laut" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">📦</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Produk Kargo Udara & Laut</div>
                    <div className="text-xs text-[#475569]">Lihat detail produk dan klausul ICC</div>
                  </div>
                </Link>
                <Link href="/asuransi-kargo/ekspedisi-umkm" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">📮</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Kargo Ekspedisi UMKM</div>
                    <div className="text-xs text-[#475569]">Untuk pengiriman domestik skala kecil</div>
                  </div>
                </Link>
                <Link href="/artikel/cara-klaim-asuransi-kargo" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">📋</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Cara Klaim Asuransi Kargo</div>
                    <div className="text-xs text-[#475569]">Panduan proses klaim lengkap</div>
                  </div>
                </Link>
                <Link href="/asuransi-kargo" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">📋</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Semua Produk Kargo</div>
                    <div className="text-xs text-[#475569]">Lihat seluruh lini produk kargo</div>
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
              Mengekspor Barang dan Butuh Proteksi Marine Cargo?
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">Ceritakan jenis barang, nilai, dan moda pengiriman Anda, kami bantu pilih klausul ICC yang sesuai dan hitung estimasi premi.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi via WhatsApp
            </a>
          </div>
        </section>

    </>
  );
}
