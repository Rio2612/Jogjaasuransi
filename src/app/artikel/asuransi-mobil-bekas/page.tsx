import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Mobil Bekas di Jogja – All Risk, TLO, Survei & Premi",
  description:
    "Panduan lengkap asuransi kendaraan second / bekas di Yogyakarta. Apakah mobil tua bisa All Risk? Bagaimana survei dilakukan? Berapa premi untuk mobil bekas? Konsultasi gratis.",
  keywords:
    "asuransi mobil bekas, asuransi kendaraan second, asuransi mobil tua, premi asuransi mobil bekas, asuransi all risk mobil second Jogja, survei asuransi kendaraan bekas",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-mobil-bekas" },
  openGraph: {
    title: "Asuransi Mobil Bekas: Bisa All Risk? Berapa Premi? Panduan Lengkap",
    description:
      "Mobil bekas tetap bisa diasuransikan — bahkan All Risk. Pelajari batas usia, proses survei, dan cara menentukan nilai pertanggungan yang tepat.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-mobil-bekas",
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asuransi Mobil Bekas di Jogja – All Risk, TLO, Survei & Premi",
  description: "Panduan lengkap asuransi kendaraan bekas dan second di Yogyakarta.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-mobil-bekas",
  datePublished: "2025-05-01",
  dateModified: "2025-05-01",
  author: { "@type": "Person", name: "Rio MD", url: "https://asuransijogja.biz.id" },
  publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/asuransi-mobil-bekas",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah mobil bekas bisa diasuransikan All Risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, mobil bekas tetap bisa diasuransikan All Risk selama masih memenuhi syarat usia dan kondisi dari perusahaan asuransi. Umumnya, batas usia untuk All Risk adalah 10–15 tahun tergantung kebijakan masing-masing perusahaan asuransi. Di atas batas itu, biasanya hanya TLO yang tersedia.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana proses survei asuransi untuk mobil bekas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Survei biasanya dilakukan oleh surveyor dari perusahaan asuransi. Kendaraan difoto dari semua sisi (depan, belakang, kiri, kanan, interior, nomor rangka, nomor mesin). Surveyor menilai kondisi fisik, memeriksa kerusakan pre-existing, dan menentukan nilai pasar kendaraan untuk menetapkan nilai pertanggungan.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu agreed value dan market value dalam polis kendaraan bekas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Market value (nilai pasar) berarti ganti rugi dihitung berdasarkan nilai pasar kendaraan saat klaim terjadi, yang terus turun setiap tahun akibat depresiasi. Agreed value (nilai yang disepakati) berarti nilai pertanggungan ditetapkan di awal dan tidak berubah selama periode polis — lebih menguntungkan untuk pemilik.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa depresiasi nilai kendaraan per tahun yang diperhitungkan asuransi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standar umum depresiasi kendaraan dalam industri asuransi Indonesia adalah sekitar 5% per tahun untuk tahun pertama dan kedua, dan 7–10% per tahun untuk tahun-tahun berikutnya. Artinya, mobil seharga Rp 200 juta tahun ini mungkin hanya dinilai Rp 170–180 juta tahun depan untuk keperluan klaim.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah kerusakan yang sudah ada (pre-existing damage) ditanggung asuransi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Kerusakan yang sudah ada sebelum polis diterbitkan tidak ditanggung. Inilah mengapa survei kendaraan sangat penting — surveyor akan mendokumentasikan kondisi awal kendaraan, dan klaim untuk kerusakan yang sudah ada sebelum polis akan ditolak.",
      },
    },
  ],
};

const panduanUsia = [
  { rentang: "0 – 5 tahun", allrisk: true, tlo: true, catatan: "Semua produk tersedia. All Risk sangat direkomendasikan, terutama untuk kendaraan yang masih bernilai tinggi.", warna: "green" },
  { rentang: "5 – 10 tahun", allrisk: true, tlo: true, catatan: "All Risk masih tersedia di sebagian besar perusahaan asuransi, dengan premi sedikit lebih tinggi dan persyaratan survei lebih ketat.", warna: "gold" },
  { rentang: "10 – 15 tahun", allrisk: true, tlo: true, catatan: "Beberapa perusahaan asuransi mulai membatasi All Risk. Survei wajib dan biasanya ada pengecualian lebih banyak di polis.", warna: "orange" },
  { rentang: "> 15 tahun", allrisk: false, tlo: true, catatan: "Kebanyakan perusahaan hanya menawarkan TLO. Nilai kendaraan sudah rendah sehingga All Risk tidak lagi ekonomis secara kalkulasi.", warna: "red" },
];

const dokumenSurvei = [
  { icon: "📋", doc: "STNK asli kendaraan", keterangan: "Wajib — untuk verifikasi identitas kendaraan" },
  { icon: "📄", doc: "Fotokopi BPKB", keterangan: "Wajib — bukti kepemilikan yang sah" },
  { icon: "🪪", doc: "KTP pemilik kendaraan", keterangan: "Wajib — identitas pemegang polis" },
  { icon: "📸", doc: "Foto kendaraan (semua sisi)", keterangan: "Wajib — kondisi awal sebelum polis terbit" },
  { icon: "🔢", doc: "Nomor rangka & nomor mesin", keterangan: "Wajib — untuk verifikasi fisik kendaraan" },
  { icon: "📝", doc: "Faktur/bukti pembelian (jika ada)", keterangan: "Opsional tapi membantu — untuk referensi nilai beli" },
];

const tipsNilaiPertanggungan = [
  { tips: "Gunakan harga pasar bukan harga beli", detail: "Nilai pertanggungan sebaiknya mengacu harga pasar kendaraan saat ini (bukan harga beli dahulu). Cek harga di OLX, Carmudi, atau dealer mobil bekas terpercaya untuk referensi." },
  { tips: "Jangan over-insure atau under-insure", detail: "Over-insure (nilai terlalu tinggi) membuat premi mahal tanpa manfaat tambahan karena klaim maksimal tetap sebatas nilai pasar. Under-insure (nilai terlalu rendah) membuat ganti rugi tidak sebanding jika terjadi klaim." },
  { tips: "Pertimbangkan agreed value untuk kendaraan tertentu", detail: "Untuk kendaraan klasik atau langka yang nilainya justru naik, agreed value lebih tepat dibanding market value yang terus menyusut setiap tahun." },
  { tips: "Hitung depresiasi sebelum renewal", detail: "Setiap tahun perbarui nilai pertanggungan saat renewal polis. Mempertahankan nilai yang sama tanpa memperhitungkan depresiasi berarti Anda membayar premi lebih dari yang seharusnya." },
];

export default function AsuransiMobilBekasPage() {
  const wa = `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(
    "Halo Pak Rio, saya ingin konsultasi asuransi untuk mobil bekas saya."
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-sm text-[#64748B]">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Asuransi Mobil Bekas</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(200,150,62,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-8 right-[5vw] text-gold/5 text-[9rem] leading-none select-none hidden lg:block">🚗</div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[2px] uppercase text-gold2 bg-gold/10 border border-gold/25 px-3 py-1 rounded-full">
              Panduan · Asuransi Kendaraan Bekas
            </span>
          </div>
          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-4">
            Asuransi Mobil Bekas:<br />
            <em className="not-italic text-gold">Bisa All Risk?</em><br />
            Berapa Premi & Bagaimana Prosesnya?
          </h1>
          <p className="text-white/80 text-base leading-[1.85] max-w-[580px] mb-6">
            Banyak pemilik mobil bekas berasumsi kendaraan second tidak bisa diasuransikan secara penuh. Kenyataannya, mobil bekas tetap bisa mendapatkan All Risk — dengan beberapa syarat usia, kondisi, dan proses survei yang perlu Anda pahami sebelum membeli polis.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>Oleh <strong className="text-white/75">Rio MD</strong> — Konsultan Asuransi Independen</span>
            <span>·</span>
            <span>Yogyakarta</span>
          </div>
        </div>
      </section>

      <article className="px-[5vw] max-w-[900px] mx-auto">

        {/* BISA ALL RISK? */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Apakah Mobil Bekas Bisa Diasuransikan All Risk?
          </h2>
          <p className="text-[#64748B] leading-relaxed text-sm mb-6">
            Ya — dengan catatan. Perusahaan asuransi umumnya menetapkan batas usia kendaraan yang bisa mendapatkan All Risk. Berikut panduan umum berdasarkan usia kendaraan:
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {panduanUsia.map((p, i) => (
              <div key={i} className={`flex items-start gap-4 rounded-card p-5 border ${
                p.warna === "green" ? "bg-green-700/5 border-green-700/15" :
                p.warna === "gold" ? "bg-gold/5 border-gold/20" :
                p.warna === "orange" ? "bg-orange-500/5 border-orange-500/20" :
                "bg-red-600/5 border-red-600/15"
              }`}>
                <div className="flex-shrink-0 flex flex-col gap-1 min-w-[110px]">
                  <span className={`font-heading font-bold text-sm ${
                    p.warna === "green" ? "text-green-700" :
                    p.warna === "gold" ? "text-gold" :
                    p.warna === "orange" ? "text-orange-600" : "text-red-600"
                  }`}>{p.rentang}</span>
                  <div className="flex gap-1 flex-wrap text-xs">
                    <span className={`px-1.5 py-0.5 rounded font-semibold ${p.allrisk ? "bg-green-700/10 text-green-700" : "bg-black/8 text-[#94A3B8] line-through"}`}>All Risk</span>
                    <span className="px-1.5 py-0.5 rounded font-semibold bg-green-700/10 text-green-700">TLO</span>
                  </div>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">{p.catatan}</p>
              </div>
            ))}
          </div>
          <div className="bg-navy/5 border border-navy/10 rounded-lg p-4 text-sm text-[#64748B]">
            <strong className="text-navy">Catatan penting:</strong> Batas usia ini bervariasi antar perusahaan asuransi. Beberapa perusahaan lebih fleksibel dengan mensyaratkan kondisi fisik yang baik (dibuktikan survei), bukan sekadar usia. Konsultasikan kebutuhan spesifik kendaraan Anda untuk mendapatkan rekomendasi yang tepat.
          </div>
        </section>

        {/* PROSES SURVEI */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Proses Survei Kendaraan Bekas: Apa yang Diperiksa?
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed mb-6">
            Berbeda dengan kendaraan baru, mobil bekas wajib melalui proses survei sebelum polis diterbitkan. Ini bukan formalitas — survei menentukan nilai pertanggungan, syarat polis, dan apakah kendaraan bisa diterima oleh perusahaan asuransi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {[
              { icon: "📸", judul: "Dokumentasi Visual Lengkap", isi: "Foto kendaraan dari 8 sudut: depan, belakang, kiri, kanan, atas, interior, nomor rangka, dan nomor mesin. Setiap kerusakan pre-existing didokumentasikan." },
              { icon: "🔍", judul: "Penilaian Kondisi Fisik", isi: "Surveyor menilai kondisi bodi, kaca, ban, interior, dan komponen eksterior. Kerusakan besar yang belum diperbaiki bisa menjadi pengecualian dalam polis." },
              { icon: "💰", judul: "Penetapan Nilai Pasar", isi: "Nilai pertanggungan ditetapkan berdasarkan kondisi pasar kendaraan saat ini, bukan harga beli dulu. Ini yang menjadi dasar ganti rugi jika terjadi klaim." },
              { icon: "⏱️", judul: "Durasi Survei", isi: "Survei biasanya memakan waktu 30–60 menit dan dilakukan di lokasi kendaraan. Setelah survei selesai, polis terbit dalam 1–3 hari kerja." },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-5">
                <div className="text-2xl mb-3">{s.icon}</div>
                <div className="font-heading text-navy font-bold text-sm mb-2">{s.judul}</div>
                <p className="text-xs text-[#64748B] leading-relaxed">{s.isi}</p>
              </div>
            ))}
          </div>

          {/* Dokumen yang dibutuhkan */}
          <h3 className="font-heading text-navy font-bold text-base mb-4">Dokumen yang Perlu Disiapkan</h3>
          <div className="flex flex-col divide-y divide-black/6 border border-black/8 rounded-card overflow-hidden">
            {dokumenSurvei.map((d, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3 bg-white">
                <span className="text-xl flex-shrink-0">{d.icon}</span>
                <div className="flex-1">
                  <span className="font-semibold text-navy text-sm">{d.doc}</span>
                </div>
                <span className="text-xs text-[#64748B] text-right hidden sm:block">{d.keterangan}</span>
              </div>
            ))}
          </div>
        </section>

        {/* NILAI PERTANGGUNGAN */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-4">
            Menentukan Nilai Pertanggungan yang Tepat
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed mb-6">
            Nilai pertanggungan adalah angka yang paling kritis dalam polis asuransi mobil bekas. Terlalu tinggi, Anda membayar premi berlebih. Terlalu rendah, ganti rugi tidak mencukupi.
          </p>

          {/* Agreed vs Market */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-gold/5 border border-gold/25 rounded-card p-6">
              <div className="font-heading text-navy font-bold mb-1">Agreed Value</div>
              <div className="text-xs text-gold font-semibold mb-3">Nilai disepakati di awal</div>
              <p className="text-sm text-[#64748B] leading-relaxed mb-3">Nilai pertanggungan ditetapkan saat polis dibuat dan tidak berubah selama periode aktif. Jika terjadi total loss, Anda mendapat ganti rugi sesuai nilai yang disepakati.</p>
              <div className="text-xs font-semibold text-green-700">✓ Lebih menguntungkan untuk pemilik</div>
            </div>
            <div className="bg-cream border border-black/8 rounded-card p-6">
              <div className="font-heading text-navy font-bold mb-1">Market Value</div>
              <div className="text-xs text-[#64748B] font-semibold mb-3">Nilai pasar saat klaim</div>
              <p className="text-sm text-[#64748B] leading-relaxed mb-3">Ganti rugi dihitung berdasarkan nilai pasar kendaraan pada saat klaim terjadi — yang terus turun akibat depresiasi. Setiap tahun nilai ini menyusut.</p>
              <div className="text-xs font-semibold text-[#64748B]">→ Lebih umum tersedia untuk mobil bekas</div>
            </div>
          </div>

          {/* Tips */}
          <h3 className="font-heading text-navy font-bold text-base mb-4">Tips Menentukan Nilai Pertanggungan</h3>
          <div className="flex flex-col gap-3">
            {tipsNilaiPertanggungan.map((t, i) => (
              <div key={i} className="flex gap-3 bg-white border border-black/8 rounded-card p-4">
                <span className="text-gold font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                <div>
                  <div className="font-semibold text-navy text-sm mb-1">{t.tips}</div>
                  <p className="text-xs text-[#64748B] leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SIMULASI PREMI */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-2">
            Estimasi Premi untuk Berbagai Kondisi Mobil Bekas
          </h2>
          <p className="text-[#64748B] text-sm mb-8 leading-relaxed">
            Simulasi berikut menggunakan tarif OJK Wilayah III (Yogyakarta) dengan nilai pertanggungan berdasarkan estimasi harga pasar saat ini.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Toyota Avanza 2018", nilai: "Rp 135 jt", kat: "Kategori 1", ar: "~Rp 2,6–5,2 jt/thn", tlo: "~Rp 270–630rb/thn", rekomendasi: "All Risk masih ekonomis" },
              { label: "Honda Jazz 2015", nilai: "Rp 115 jt", kat: "Kategori 1", ar: "~Rp 2,2–4,4 jt/thn", tlo: "~Rp 230–540rb/thn", rekomendasi: "Pertimbangkan TLO jika anggaran terbatas" },
              { label: "Toyota Fortuner 2017", nilai: "Rp 265 jt", kat: "Kategori 2", ar: "~Rp 5,3–8,6 jt/thn", tlo: "~Rp 635rb–1,1 jt/thn", rekomendasi: "All Risk direkomendasikan" },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-black/8 rounded-card p-5">
                <div className="font-heading text-navy font-bold text-sm mb-1">{s.label}</div>
                <div className="text-xs text-[#64748B] mb-3">{s.nilai} · {s.kat}</div>
                <div className="flex flex-col gap-2 text-xs border-t border-black/8 pt-3">
                  <div className="flex justify-between"><span className="text-[#64748B]">All Risk</span><span className="font-semibold text-navy">{s.ar}</span></div>
                  <div className="flex justify-between"><span className="text-[#64748B]">TLO</span><span className="font-semibold text-navy">{s.tlo}</span></div>
                  <div className="border-t border-black/6 pt-2 text-gold font-semibold">💡 {s.rekomendasi}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#64748B] mt-4">
            * Nilai pasar kendaraan bersifat estimasi dan bervariasi tergantung kondisi aktual. Untuk estimasi lebih akurat,{" "}
            <Link href="/asuransi-kendaraan" className="text-gold hover:underline">gunakan kalkulator premi OJK kami</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="py-12 border-b border-black/8">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] text-navy mb-8">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="flex flex-col divide-y divide-black/8">
            {schemaFAQ.mainEntity.map((faq, i) => (
              <div key={i} className="py-5">
                <h3 className="font-semibold text-navy text-[0.95rem] mb-2">{faq.name}</h3>
                <p className="text-sm text-[#64748B] leading-[1.78]">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-10 border-b border-black/8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#64748B] mb-4">Artikel & Halaman Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/asuransi-kendaraan/mobil" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Panduan Lengkap Asuransi Mobil →</Link>
            <Link href="/artikel/perbedaan-all-risk-tlo" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚖️ All Risk vs TLO →</Link>
            <Link href="/artikel/cara-klaim-asuransi-mobil" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">⚠️ Kenapa Klaim Bisa Ditolak? →</Link>
            <Link href="/asuransi-kendaraan" className="bg-cream border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🧮 Kalkulator Premi OJK →</Link>
          </div>
        </section>

        {/* AUTHOR BOX */}
        <section className="py-10">
          <div className="bg-navy rounded-card p-6 flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 font-heading font-bold text-gold text-lg">R</div>
            <div>
              <div className="font-heading text-white font-bold mb-1">Rio MD</div>
              <div className="text-gold2 text-xs mb-3">Konsultan Asuransi Kerugian Independen · Yogyakarta · 10+ Tahun Pengalaman</div>
              <p className="text-white/65 text-sm leading-relaxed">
                Saya membantu pemilik kendaraan bekas di Yogyakarta menemukan produk asuransi yang tepat — termasuk memilih antara All Risk dan TLO berdasarkan kondisi nyata kendaraan, bukan sekadar preferensi. Konsultasi gratis, tanpa komitmen.
              </p>
            </div>
          </div>
        </section>
        <div className="pb-8 text-xs text-[#94A3B8] leading-relaxed border-t border-black/5 pt-6">
          Estimasi premi dan nilai pasar kendaraan dalam artikel ini bersifat indikatif. Premi dan nilai pertanggungan final ditetapkan oleh perusahaan asuransi setelah survei. Nilai pasar kendaraan bekas dapat berbeda tergantung kondisi, lokasi, dan waktu penilaian.
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10">
          <h2 className="font-heading text-[clamp(1.8rem,2.8vw,2.5rem)] text-white leading-[1.22] mb-4">
            Punya Mobil Bekas?<br />Kami Bantu Cari Perlindungan Terbaik
          </h2>
          <p className="text-white/80 text-sm max-w-[480px] mx-auto mb-8">
            Ceritakan kondisi dan usia kendaraan Anda. Kami analisis apakah All Risk atau TLO lebih tepat, dan carikan penawaran terbaik dari beberapa perusahaan asuransi.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={wa} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Konsultasi Gratis via WhatsApp</a>
            <Link href="/asuransi-kendaraan" className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg text-sm no-underline hover:bg-white/12 transition-all">🧮 Hitung Estimasi Premi</Link>
          </div>
        </div>
      </section>
    </>
  );
}
