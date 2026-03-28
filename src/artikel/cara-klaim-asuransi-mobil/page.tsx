import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cara Klaim Asuransi Mobil: Panduan Lengkap Step-by-Step",
  description: "Panduan lengkap cara klaim asuransi mobil di Yogyakarta. Dokumen yang diperlukan, langkah-langkah klaim kecelakaan vs kehilangan, tips agar klaim tidak ditolak. Konsultasi gratis.",
  keywords: "cara klaim asuransi mobil, klaim asuransi kendaraan jogja, prosedur klaim asuransi mobil yogyakarta, dokumen klaim asuransi mobil, tips klaim asuransi",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-mobil" },
  openGraph: {
    title: "Cara Klaim Asuransi Mobil: Panduan Lengkap Step-by-Step",
    description: "Panduan lengkap prosedur klaim asuransi kendaraan agar proses ganti rugi lancar dan cepat.",
    url: "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-mobil",
  },
};

const langkahKlaim = [
  {
    no: "01", icon: "📸",
    judul: "Dokumentasikan Kejadian Segera",
    isi: "Foto kondisi kendaraan dari berbagai sudut, posisi kendaraan saat kejadian, kondisi sekitar lokasi, dan jika kecelakaan dengan pihak lain — foto plat nomor dan kondisi kendaraan lawan. Dokumentasi yang kuat adalah fondasi klaim yang berhasil.",
  },
  {
    no: "02", icon: "📞",
    judul: "Hubungi Konsultan / Pihak Asuransi",
    isi: "Segera hubungi konsultan asuransi Anda (dalam hal ini Pak Rio via WhatsApp) atau call center perusahaan asuransi. Laporkan kejadian dalam 3×24 jam — lewat batas ini bisa menjadi alasan penolakan klaim.",
  },
  {
    no: "03", icon: "📋",
    judul: "Siapkan Dokumen Klaim",
    isi: "Formulir klaim yang diisi lengkap, STNK asli, SIM pengemudi saat kejadian, polis asuransi, foto kerusakan, dan untuk kasus kecelakaan: surat keterangan polisi (Surat Tanda Penerimaan Laporan / STPL).",
  },
  {
    no: "04", icon: "🔍",
    judul: "Survey oleh Surveyor Asuransi",
    isi: "Surveyor dari perusahaan asuransi akan memeriksa kerusakan. Pastikan kendaraan tidak diperbaiki sebelum disurvey — ini sering menjadi penyebab klaim ditolak atau dikurangi. Sampaikan kronologi kejadian dengan jujur dan akurat.",
  },
  {
    no: "05", icon: "🏭",
    judul: "Kendaraan Masuk Bengkel Rekanan",
    isi: "Setelah survei disetujui, kendaraan dibawa ke bengkel rekanan resmi asuransi. Untuk produk All Risk, biasanya ada pilihan bengkel rekanan resmi atau bengkel pilihan sendiri (dengan ketentuan tertentu).",
  },
  {
    no: "06", icon: "✅",
    judul: "Kendaraan Selesai Diperbaiki",
    isi: "Periksa kualitas perbaikan sebelum menerima kendaraan. Jika ada bagian yang tidak sesuai, sampaikan langsung ke bengkel atau pihak asuransi. Setelah puas, tanda tangani surat penyerahan kendaraan.",
  },
];

const dokumenKecelakaan = [
  "Formulir klaim yang diisi lengkap dan ditandatangani",
  "Fotokopi polis asuransi kendaraan",
  "Fotokopi STNK kendaraan",
  "Fotokopi SIM pengemudi saat kejadian",
  "Foto-foto kerusakan kendaraan (minimal 4 sisi)",
  "Surat keterangan polisi / STPL (untuk kecelakaan dengan pihak lain)",
  "Kronologi kejadian tertulis (jika diminta surveyor)",
];

const dokumenKehilangan = [
  "Formulir klaim kehilangan kendaraan",
  "Surat Tanda Laporan Kehilangan dari Kepolisian (wajib)",
  "BPKB dan STNK asli (serahkan ke asuransi)",
  "Kunci kendaraan asli + duplikat (semua diserahkan)",
  "Fotokopi KTP pemilik kendaraan",
  "Surat blokir STNK dari Samsat",
];

const alasanDitolak = [
  { icon: "⏰", alasan: "Terlambat Melapor", solusi: "Laporkan dalam 3×24 jam setelah kejadian — jangan menunggu" },
  { icon: "🔧", alasan: "Kendaraan Diperbaiki Sebelum Survey", solusi: "Tunggu surveyor datang memeriksa sebelum membawa ke bengkel manapun" },
  { icon: "📄", alasan: "Dokumen Tidak Lengkap", solusi: "Siapkan semua dokumen yang diminta — minta checklist dari konsultan asuransi" },
  { icon: "🚫", alasan: "Pengemudi Tidak Memiliki SIM Valid", solusi: "Pastikan semua pengemudi kendaraan yang diasuransikan memiliki SIM yang masih berlaku" },
  { icon: "⚗️", alasan: "Pengemudi di Bawah Pengaruh Alkohol", solusi: "Kondisi ini masuk dalam pengecualian polis — klaim otomatis ditolak" },
  { icon: "🗺️", alasan: "Kejadian di Luar Wilayah Pertanggungan", solusi: "Cek polis Anda — beberapa polis memiliki batasan wilayah tertentu" },
];

const faqKlaim = [
  {
    q: "Berapa lama proses klaim asuransi mobil?",
    a: "Untuk kerusakan ringan-sedang, perbaikan di bengkel rekanan biasanya selesai 5–14 hari kerja tergantung ketersediaan suku cadang. Untuk kasus kehilangan, proses klaim hingga ganti rugi cair bisa memakan 30–90 hari karena melibatkan proses kepolisian dan investigasi asuransi."
  },
  {
    q: "Apakah ada biaya yang harus saya bayar saat klaim?",
    a: "Ya, hampir semua polis asuransi kendaraan memiliki 'own risk' atau deductible — biaya yang ditanggung tertanggung saat klaim. Nilainya bervariasi, biasanya Rp 300.000–500.000 per kejadian untuk kerusakan ringan. Cek polis Anda atau tanyakan ke konsultan asuransi."
  },
  {
    q: "Bisa klaim di bengkel pilihan sendiri, bukan bengkel rekanan?",
    a: "Tergantung polis. Beberapa polis All Risk mengizinkan bengkel umum dengan penggantian biaya perbaikan berdasarkan nilai yang disetujui asuransi. Namun menggunakan bengkel rekanan resmi biasanya lebih mudah dan lebih cepat prosesnya karena klaim langsung diselesaikan antara bengkel dan asuransi."
  },
];

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cara Klaim Asuransi Mobil: Panduan Lengkap Step-by-Step",
  "description": "Panduan lengkap cara klaim asuransi kendaraan di Yogyakarta — dokumen, langkah, dan tips agar klaim tidak ditolak.",
  "url": "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-mobil",
  "author": { "@type": "Person", "name": "Rio Mardiansyah" },
  "publisher": { "@type": "Organization", "name": "Asuransi Jogja", "url": "https://asuransijogja.biz.id" },
  "inLanguage": "id-ID",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-mobil" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqKlaim.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function CaraKlaimMobilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-xs text-[#64748B] flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">Cara Klaim Asuransi Mobil</span>
        </div>
      </div>

      <article className="max-w-[760px] mx-auto px-[5vw] py-14">

        {/* HEADER ARTIKEL */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">🚗 Kendaraan</span>
            <span className="text-[#94A3B8] text-xs">⏱ 8 menit baca</span>
          </div>
          <h1 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy leading-[1.2] mb-4">
            Cara Klaim Asuransi Mobil:<br />Panduan Lengkap Step-by-Step
          </h1>
          <p className="text-[#64748B] text-lg leading-[1.85]">
            Mengajukan klaim asuransi tidak harus membingungkan. Dengan mengetahui prosedur yang benar sejak awal, proses ganti rugi bisa berjalan lebih lancar — dan Anda terhindar dari risiko klaim ditolak karena kesalahan teknis yang sebenarnya bisa dihindari.
          </p>
          <div className="mt-5 p-4 bg-gold/8 border-l-4 border-gold rounded-r-xl">
            <p className="text-sm text-navy2 font-medium">💡 <strong>Catatan penting:</strong> Prosedur klaim di bawah adalah panduan umum. Detail prosedur bisa berbeda tergantung perusahaan asuransi dan jenis polis Anda. Selalu konfirmasi ke konsultan atau call center asuransi Anda.</p>
          </div>
        </div>

        {/* LANGKAH KLAIM */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">6 Langkah Klaim Asuransi Mobil</h2>
          <div className="flex flex-col gap-5">
            {langkahKlaim.map(l => (
              <div key={l.no} className="flex gap-5 p-5 bg-cream rounded-xl border border-black/5">
                <div className="flex-shrink-0">
                  <div className="bg-navy text-gold font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">{l.no}</div>
                </div>
                <div>
                  <div className="font-heading text-navy font-bold text-[1.05rem] mb-2 flex items-center gap-2">{l.icon} {l.judul}</div>
                  <p className="text-base leading-[1.8] text-[#64748B]">{l.isi}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DOKUMEN */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">Dokumen yang Diperlukan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-heading text-navy font-bold mb-3 flex items-center gap-2">🚗 Klaim Kecelakaan / Kerusakan</div>
              <ul className="flex flex-col gap-2">
                {dokumenKecelakaan.map(d => (
                  <li key={d} className="flex gap-2.5 text-base text-navy2 leading-relaxed">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-heading text-navy font-bold mb-3 flex items-center gap-2">🚨 Klaim Kehilangan / Pencurian</div>
              <ul className="flex flex-col gap-2">
                {dokumenKehilangan.map(d => (
                  <li key={d} className="flex gap-2.5 text-base text-navy2 leading-relaxed">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ALASAN DITOLAK */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-2">6 Alasan Klaim Sering Ditolak</h2>
          <p className="text-sm text-[#64748B] mb-6">…dan cara menghindarinya</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {alasanDitolak.map(a => (
              <div key={a.alasan} className="bg-cream rounded-xl p-5 border border-black/5">
                <div className="text-2xl mb-2">{a.icon}</div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">{a.alasan}</div>
                <p className="text-base leading-relaxed text-[#64748B]"><strong className="text-gold">Solusi:</strong> {a.solusi}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">Pertanyaan yang Sering Ditanyakan</h2>
          <div className="flex flex-col">
            {faqKlaim.map((f, i) => (
              <details key={i} className="border-b border-black/8 group">
                <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                  {f.q}<span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-base leading-[1.78] text-[#64748B] pb-4">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mb-10 p-6 bg-cream rounded-xl border border-black/6">
          <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">Artikel & Produk Terkait</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/artikel/bengkel-rekanan-asuransi-jogja" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🔧 Bengkel Rekanan Asuransi →</Link>
            <Link href="/asuransi-kendaraan/mobil" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🚗 Asuransi Mobil →</Link>
            <Link href="/artikel/cara-menghitung-nilai-asuransi" className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline">🧮 Cara Hitung Nilai Asuransi →</Link>
          </div>
        </section>

        {/* CTA BOX */}
        <div className="bg-navy rounded-[20px] p-8 text-center">
          <h3 className="font-heading text-white text-[1.4rem] mb-3">Butuh Bantuan Proses Klaim?</h3>
          <p className="text-white/85 text-sm mb-6 max-w-[400px] mx-auto">Pak Rio siap mendampingi proses klaim Anda — dari persiapan dokumen hingga dana ganti rugi cair. Gratis, tanpa biaya tambahan.</p>
          <a href={`https://wa.me/${KONTAK.wa}`} className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all">💬 Minta Bantuan via WhatsApp</a>
        </div>
      </article>
    </>
  );
}
