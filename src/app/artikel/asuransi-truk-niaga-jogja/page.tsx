// app/artikel/asuransi-truk-niaga-jogja/page.tsx
// SILO: mendukung pillar terkait — ditambahkan untuk menutup gap konten silo
import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Truk Niaga & Dump Truk di Jogja – Panduan Lengkap Proyek & Tambang",
  description:
    "Panduan asuransi dump truk, tronton, dan truk mixer untuk kontraktor dan pengangkut material di DIY. Cakupan risiko, syarat tender, dan estimasi premi kendaraan niaga berat.",
  keywords:
    "asuransi dump truk jogja, asuransi truk niaga yogyakarta, asuransi tronton, asuransi truk mixer, asuransi kendaraan niaga proyek diy",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-truk-niaga-jogja",
  },
  openGraph: {
    title: "Asuransi Truk Niaga & Dump Truk di Jogja — Panduan Proyek dan Tambang",
    description:
      "Panduan lengkap asuransi kendaraan niaga berat untuk kontraktor dan pengangkut material di Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-truk-niaga-jogja",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og/og-kendaraan.png", width: 1200, height: 630, alt: "Asuransi Truk Niaga & Dump Truk di Jogja — Panduan Proyek dan Tambang" }],
  },
};

const schema = {"@context": "https://schema.org", "@graph": [{"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://asuransijogja.biz.id"}, {"@type": "ListItem", "position": 2, "name": "Artikel", "item": "https://asuransijogja.biz.id/artikel"}, {"@type": "ListItem", "position": 3, "name": "Asuransi Truk Niaga & Dump Truk di Jogja", "item": "https://asuransijogja.biz.id/artikel/asuransi-truk-niaga-jogja"}]}, {"@type": "Article", "headline": "Asuransi Truk Niaga & Dump Truk di Jogja – Panduan Lengkap Proyek & Tambang", "description": "Panduan asuransi dump truk, tronton, dan truk mixer untuk kontraktor dan pengangkut material di DIY. Cakupan risiko, syarat tender, dan estimasi premi kendaraan niaga berat.", "author": {"@type": "Person", "name": "Rio Mardiansyah", "jobTitle": "Praktisi Asuransi"}, "publisher": {"@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id"}, "datePublished": "2026-06-29", "dateModified": "2026-06-29"}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Apakah dump truk proyek bisa diasuransikan TLO saja?", "acceptedAnswer": {"@type": "Answer", "text": "Bisa, terutama untuk truk berusia di atas 7-8 tahun. Namun karena nilai dan biaya perbaikan kendaraan niaga umumnya tinggi, banyak kontraktor tetap memilih All Risk untuk mengurangi risiko menanggung sendiri biaya perbaikan parsial."}}, {"@type": "Question", "name": "Apakah perlu perluasan khusus untuk truk yang beroperasi di area tambang?", "acceptedAnswer": {"@type": "Answer", "text": "Sangat disarankan menambahkan perluasan risiko medan berat dan act of God, karena jalan tambang memiliki risiko kecelakaan dan kerusakan mekanis lebih tinggi dibanding jalan raya umum."}}, {"@type": "Question", "name": "Apakah asuransi kendaraan niaga bisa jadi syarat tender proyek?", "acceptedAnswer": {"@type": "Answer", "text": "Ya, banyak kontraktor utama atau instansi pemberi proyek mensyaratkan bukti asuransi kendaraan niaga yang masih berlaku sebagai bagian dari dokumen administrasi kontraktor pelaksana atau subkontraktor."}}]}]};

export default function ArtikelAsuransiTrukNiagaJogja() {
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
            <span className="text-navy font-semibold">Asuransi Dump Truk & Kendaraan Niaga</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link href="/asuransi-kendaraan/dump-truk-niaga" className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors">
                🚛 Asuransi Kendaraan
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Lengkap</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Dump Truk & Kendaraan Niaga —<br /><em className="not-italic text-gold">Panduan untuk Kontraktor</em><br />dan Pengangkut Material
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[540px] mb-6">
              Dump truk dan tronton proyek bekerja dalam kondisi jalan berat dan medan menanjak, jauh berbeda dari mobil pribadi. Panduan ini menjelaskan apa yang perlu dipahami kontraktor sebelum mengasuransikan kendaraan niaga berat di DIY.
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

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Mengapa Kendaraan Niaga Berbeda dari Mobil Pribadi</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Dump truk, tronton, dan truk mixer yang melayani proyek konstruksi maupun tambang material di sekitar DIY (misalnya area Kulon Progo dan Gunungkidul) bekerja dalam kondisi jalan berat dan medan menanjak, membuat risiko kerusakan mekanis dan kecelakaan lebih tinggi dibanding kendaraan penumpang biasa.</p><p>Tarif premi kendaraan niaga dihitung berbeda dari mobil pribadi karena kategori penggunaan komersial dan intensitas operasional yang tinggi — kendaraan ini umumnya beroperasi 10-12 jam sehari, jauh lebih intensif dibanding mobil pribadi.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Perluasan Risiko yang Perlu Dipertimbangkan</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Selain All Risk dan TLO standar, perusahaan logistik material biasanya juga mempertimbangkan perluasan Riot, Strike, Civil Commotion (RSCC) dan Act of God untuk proyek di area rawan demonstrasi atau bencana alam — terutama untuk proyek infrastruktur jangka panjang yang berlangsung di berbagai lokasi.</p>
          </div>

          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">Asuransi sebagai Syarat Tender dan Subkontrak</h2>
          <div className="text-[#475569] text-base leading-[1.85] mb-8 space-y-4">
            <p>Banyak kontraktor utama mewajibkan bukti asuransi kendaraan niaga yang valid sebagai syarat subkontrak pengangkutan material. Memiliki polis aktif bukan hanya soal proteksi finansial, tapi juga membantu memenangkan dan menjaga kontrak proyek yang sedang berjalan.</p>
          </div>

            <div className="bg-cream border border-black/8 rounded-card p-6 mb-8">
              <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">📖 Studi Kasus: Dump Truk Proyek Terguling di Area Tambang</div>
              <p className="text-sm leading-relaxed text-[#475569]">Sebuah dump truk milik kontraktor pengangkut material proyek infrastruktur di DIY mengalami kecelakaan terguling saat menuruni jalan tambang yang licin akibat hujan. Kerusakan sasis dan kabin diperkirakan mencapai Rp 85 juta. Karena polis All Risk kendaraan niaga sudah aktif, klaim diproses dengan survei lapangan dalam 3 hari dan dana ganti rugi cair sekitar 2 minggu setelah dokumen lengkap — tanpa mengganggu jadwal pengangkutan material proyek lainnya.</p>
            </div>

            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">🧮 Estimasi Premi Kendaraan Niaga Berat (Ilustrasi)</h2>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-black/8 rounded-card overflow-hidden">
                <thead><tr className="bg-navy text-white"><th className="p-3 text-left font-semibold">Jenis Kendaraan</th><th className="p-3 text-left font-semibold">Nilai Kendaraan</th><th className="p-3 text-left font-semibold">Estimasi Premi All Risk/Tahun</th></tr></thead>
                <tbody>
                  <tr><td className="p-3 border-t border-black/8">Dump truk standar</td><td className="p-3 border-t border-black/8">Rp 400.000.000</td><td className="p-3 border-t border-black/8">Rp 14.000.000 – Rp 22.000.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Tronton</td><td className="p-3 border-t border-black/8">Rp 700.000.000</td><td className="p-3 border-t border-black/8">Rp 24.500.000 – Rp 38.500.000</td></tr>
                  <tr><td className="p-3 border-t border-black/8">Truk mixer beton</td><td className="p-3 border-t border-black/8">Rp 550.000.000</td><td className="p-3 border-t border-black/8">Rp 19.250.000 – Rp 30.250.000</td></tr>
                  
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
              <div className="font-heading text-navy font-bold text-base mb-2">Punya Dump Truk atau Tronton Proyek yang Belum Terlindungi?</div>
              <p className="text-[#475569] text-sm leading-relaxed mb-4">Ceritakan jenis dan jumlah kendaraan niaga Anda, kami bantu hitung estimasi premi dan cakupan yang sesuai kebutuhan proyek.</p>
              <div className="flex gap-3 flex-wrap">
                <a href={`https://wa.me/${KONTAK.wa}`} className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all">
                  💬 Konsultasi via WhatsApp
                </a>
                <Link href="/asuransi-kendaraan/dump-truk-niaga" className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all">
                  Lihat Produk Terkait →
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">Pertanyaan Seputar Topik Ini</h2>
            <div className="flex flex-col divide-y divide-black/8 mb-10">
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah dump truk proyek bisa diasuransikan TLO saja?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Bisa, terutama untuk truk berusia di atas 7-8 tahun. Namun karena nilai dan biaya perbaikan kendaraan niaga umumnya tinggi, banyak kontraktor tetap memilih All Risk untuk mengurangi risiko menanggung sendiri biaya perbaikan parsial.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah perlu perluasan khusus untuk truk yang beroperasi di area tambang?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Sangat disarankan menambahkan perluasan risiko medan berat dan act of God, karena jalan tambang memiliki risiko kecelakaan dan kerusakan mekanis lebih tinggi dibanding jalan raya umum.</p>
              </details>
              <details className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  Apakah asuransi kendaraan niaga bisa jadi syarat tender proyek?
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">Ya, banyak kontraktor utama atau instansi pemberi proyek mensyaratkan bukti asuransi kendaraan niaga yang masih berlaku sebagai bagian dari dokumen administrasi kontraktor pelaksana atau subkontraktor.</p>
              </details>
            </div>

            {/* Internal Links */}
            <div className="border-t border-black/8 pt-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Baca Juga</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/asuransi-kendaraan/dump-truk-niaga" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🚛</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Produk Asuransi Dump Truk & Niaga</div>
                    <div className="text-xs text-[#475569]">Lihat detail produk dan cakupan</div>
                  </div>
                </Link>
                <Link href="/asuransi-kendaraan/armada-fleet" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🚐</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Asuransi Armada/Fleet</div>
                    <div className="text-xs text-[#475569]">Untuk 5+ kendaraan operasional</div>
                  </div>
                </Link>
                <Link href="/asuransi-engineering/contractor-all-risk" className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group">
                  <span className="text-xl flex-shrink-0">🏗️</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">Asuransi Kontraktor (CAR)</div>
                    <div className="text-xs text-[#475569]">Proteksi proyek konstruksi</div>
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
              Punya Dump Truk atau Tronton Proyek yang Belum Terlindungi?
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">Ceritakan jenis dan jumlah kendaraan niaga Anda, kami bantu hitung estimasi premi dan cakupan yang sesuai kebutuhan proyek.</p>
            <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">
              💬 Konsultasi via WhatsApp
            </a>
          </div>
        </section>

    </>
  );
}
