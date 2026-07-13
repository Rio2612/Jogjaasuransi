// app/artikel/limbah-b3-liability-jogja/page.tsx
// SILO: mendukung pillar terkait — ditambahkan untuk menutup gap konten silo
import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Liability Limbah B3 di Jogja – Proteksi Pencemaran Lingkungan",
  description:
    "Panduan asuransi liability pencemaran lingkungan dan limbah B3 untuk industri tekstil, percetakan, dan manufaktur di DIY. Cakupan clean-up cost, kompensasi pihak ketiga, dan estimasi premi.",
  keywords:
    "asuransi limbah b3 jogja, asuransi pencemaran lingkungan yogyakarta, liability lingkungan industri, asuransi clean up cost, asuransi gugatan lingkungan diy",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/limbah-b3-liability-jogja",
  },
  openGraph: {
    title: "Asuransi Liability Limbah B3 di Jogja — Proteksi Pencemaran Lingkungan",
    description:
      "Panduan asuransi liability pencemaran lingkungan untuk industri yang menghasilkan limbah B3 di Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/limbah-b3-liability-jogja",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Liability Limbah B3 di Jogja — Proteksi Pencemaran Lingkungan" }],
  },
};

const schema = {"@context": "https://schema.org", "@graph": [{"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://asuransijogja.biz.id"}, {"@type": "ListItem", "position": 2, "name": "Artikel", "item": "https://asuransijogja.biz.id/artikel"}, {"@type": "ListItem", "position": 3, "name": "Asuransi Liability Limbah B3 di Jogja", "item": "https://asuransijogja.biz.id/artikel/limbah-b3-liability-jogja"}]}, {"@type": "Article", "headline": "Asuransi Liability Limbah B3 di Jogja – Proteksi Pencemaran Lingkungan", "description": "Panduan asuransi liability pencemaran lingkungan dan limbah B3 untuk industri tekstil, percetakan, dan manufaktur di DIY. Cakupan clean-up cost, kompensasi pihak ketiga, dan estimasi premi.", "author": {"@type": "Person", "name": "Rio Mardiansyah", "jobTitle": "Praktisi Asuransi"}, "publisher": {"@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id"}, "datePublished": "2026-06-29", "dateModified": "2026-06-29"}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Apakah pencemaran bertahap (gradual pollution) juga ditanggung?", "acceptedAnswer": {"@type": "Answer", "text": "Tergantung skema polis. Sebagian polis liability lingkungan menanggung pencemaran bertahap selama bisa dibuktikan terjadi dalam periode polis aktif, namun ini biasanya memerlukan klausul perluasan khusus — pastikan didiskusikan saat pembelian polis."}}, {"@type": "Question", "name": "Apakah polis properti standar sudah cukup menanggung risiko ini?", "acceptedAnswer": {"@type": "Answer", "text": "Umumnya tidak. Asuransi properti standar biasanya mengecualikan secara eksplisit klaim akibat pencemaran lingkungan, sehingga perusahaan dengan risiko limbah B3 perlu polis liability lingkungan terpisah."}}, {"@type": "Question", "name": "Apakah perusahaan kecil/UMKM juga perlu polis ini?", "acceptedAnswer": {"@type": "Answer", "text": "Jika usaha menghasilkan limbah B3 dalam jumlah kecil pun (misalnya bengkel dengan limbah oli/aki), risiko gugatan tetap ada meski skala kecil. Limit liability yang lebih rendah biasanya tersedia dengan premi yang proporsional lebih terjangkau."}}]}]};

export default function ArtikelLimbahB3LiabilityJogja() {
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
            <span className="text-navy font-semibold">Asuransi Liability Limbah B3</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-liability/limbah-b3" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🏭 Asuransi Liability
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Lengkap</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Liability Limbah B3 —<br /><em className="not-italic text-gold">Proteksi dari Risiko</em><br />Pencemaran Lingkungan
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Regulasi lingkungan hidup yang semakin ketat membuat risiko gugatan pencemaran semakin nyata bagi industri yang menghasilkan limbah B3. Panduan ini menjelaskan apa yang ditanggung polis ini dan siapa yang membutuhkannya.
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

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Siapa yang Berisiko dan Perlu Proteksi Ini</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Perusahaan yang menghasilkan, mengangkut, atau mengolah limbah Bahan Berbahaya dan Beracun (B3) — termasuk industri tekstil, percetakan, bengkel besar, dan pabrik kecil di kawasan industri DIY — menghadapi risiko tuntutan hukum jika terjadi pencemaran lingkungan baik tiba-tiba (sudden) maupun bertahap (gradual pollution).</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Apa yang Ditanggung Polis Ini</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Polis ini menanggung biaya pembersihan (clean-up cost), kompensasi pihak ketiga yang terdampak pencemaran, dan biaya hukum terkait gugatan lingkungan — sesuatu yang tidak dicakup oleh asuransi properti atau public liability standar, karena pencemaran lingkungan biasanya dikecualikan secara eksplisit dalam polis-polis tersebut.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Manfaat di Luar Proteksi Finansial</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Mengingat regulasi lingkungan hidup yang makin ketat (UU PPLH dan turunannya), memiliki lapisan proteksi ini juga membantu perusahaan menunjukkan komitmen kepatuhan (compliance) kepada regulator dan mitra bisnis/buyer ekspor yang semakin memperhatikan aspek ESG (Environmental, Social, Governance) dalam rantai pasok mereka.</p>
          </div>

            <div className="bg-cream border border-black/8 rounded-card p-6 mb-8">
              <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Kebocoran Limbah Cair Pabrik Tekstil ke Saluran Irigasi</div>
              <p className="text-sm leading-relaxed text-[#475569]">Sebuah pabrik tekstil skala menengah di Sleman mengalami kebocoran tangki penampungan limbah cair yang mencemari saluran irigasi sawah warga sekitar. Selain biaya pembersihan saluran senilai puluhan juta rupiah, warga terdampak mengajukan klaim kompensasi atas gagal panen. Karena perusahaan memiliki polis liability limbah B3, biaya clean-up dan kompensasi pihak ketiga ditanggung polis, sehingga operasional pabrik tidak terganggu oleh beban finansial mendadak dan hubungan dengan masyarakat sekitar tetap terjaga.</p>
            </div>

            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">🧮 Estimasi Premi Liability Limbah B3 (Ilustrasi, per Tahun)</h2>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Skala Usaha</th><th className="p-3 text-left font-semibold">Limit Liability</th><th className="p-3 text-left font-semibold">Estimasi Premi/Tahun</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">UMKM/bengkel skala menengah</td><td className="p-3 border-t border-black/8">Rp 500.000.000</td><td className="p-3 border-t border-black/8">Rp 4.000.000 – Rp 8.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Pabrik skala menengah</td><td className="p-3 border-t border-black/8">Rp 2.000.000.000</td><td className="p-3 border-t border-black/8">Rp 14.000.000 – Rp 24.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Industri skala besar</td><td className="p-3 border-t border-black/8">Rp 5.000.000.000</td><td className="p-3 border-t border-black/8">Rp 30.000.000 – Rp 50.000.000</td></tr>
                  
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
              <div className="font-heading text-navy font-bold text-base mb-2">Usaha Anda Menghasilkan Limbah B3? Cek Kebutuhan Proteksinya</div>
              <p className="text-[#475569] text-sm leading-relaxed mb-4">Ceritakan jenis usaha dan limbah yang dihasilkan, kami bantu evaluasi apakah liability limbah B3 relevan untuk bisnis Anda.</p>
              <div className="flex gap-3 flex-wrap">
                <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                  💬 Konsultasi via WhatsApp
                </a>
                <Link href="/asuransi-liability/limbah-b3" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                  Lihat Produk Terkait →
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan Seputar Topik Ini</h2>
            <div className="flex flex-col divide-y divide-black/8 mb-10">
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah pencemaran bertahap (gradual pollution) juga ditanggung?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Tergantung skema polis. Sebagian polis liability lingkungan menanggung pencemaran bertahap selama bisa dibuktikan terjadi dalam periode polis aktif, namun ini biasanya memerlukan klausul perluasan khusus — pastikan didiskusikan saat pembelian polis.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah polis properti standar sudah cukup menanggung risiko ini?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Umumnya tidak. Asuransi properti standar biasanya mengecualikan secara eksplisit klaim akibat pencemaran lingkungan, sehingga perusahaan dengan risiko limbah B3 perlu polis liability lingkungan terpisah.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah perusahaan kecil/UMKM juga perlu polis ini?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Jika usaha menghasilkan limbah B3 dalam jumlah kecil pun (misalnya bengkel dengan limbah oli/aki), risiko gugatan tetap ada meski skala kecil. Limit liability yang lebih rendah biasanya tersedia dengan premi yang proporsional lebih terjangkau.</p>
              </details>
            </div>

            {/* Internal Links */}
            <div className="border-t border-black/8 pt-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Baca Juga</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/asuransi-liability/limbah-b3" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🏭</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Produk Liability Limbah B3</div>
                    <div className="text-xs text-[#475569]">Lihat detail produk dan cakupan</div>
                  </div>
                </Link>
                <Link href="/asuransi-liability/product-liability" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">📦</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Product Liability</div>
                    <div className="text-xs text-[#475569]">Proteksi dari klaim cacat produk</div>
                  </div>
                </Link>
                <Link href="/artikel/contoh-kasus-gugatan-liability-bisnis" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">📖</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Studi Kasus Gugatan Liability</div>
                    <div className="text-xs text-[#475569]">Pelajari kasus nyata gugatan bisnis</div>
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
              Usaha Anda Menghasilkan Limbah B3? Cek Kebutuhan Proteksinya
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">Ceritakan jenis usaha dan limbah yang dihasilkan, kami bantu evaluasi apakah liability limbah B3 relevan untuk bisnis Anda.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi via WhatsApp
            </a>
          </div>
        </section>

    </>
  );
}
