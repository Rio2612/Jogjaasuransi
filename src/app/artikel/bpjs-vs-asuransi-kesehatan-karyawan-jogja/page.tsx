// TARGET: "bpjs vs asuransi swasta karyawan", "asuransi kesehatan karyawan jogja"
// INTENT: perbandingan/informasional → mendukung /asuransi-kesehatan-karyawan
import type { Metadata } from "next";
import ArtikelShell, { H2, P, UL, Box, Tabel } from "@/components/kesehatan/ArtikelShell";

const URL = "https://asuransijogja.biz.id/artikel/bpjs-vs-asuransi-kesehatan-karyawan-jogja";
const TITLE = "BPJS Kesehatan vs Asuransi Kesehatan Karyawan Swasta: Mana untuk Perusahaan di Jogja?";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "BPJS Kesehatan wajib, asuransi swasta tambahan. Hitung iuran BPJS dengan UMK Jogja 2026, pahami COB, bandingkan manfaat, dan lihat kasus tunggakan iuran di Sleman.",
  keywords: "bpjs vs asuransi swasta karyawan, asuransi kesehatan karyawan jogja, iuran bpjs perusahaan umk jogja 2026, cob bpjs asuransi swasta",
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: "Panduan HR dan pemilik usaha di Yogyakarta memilih kombinasi BPJS dan asuransi swasta.", url: URL, type: "article", siteName: "Asuransi Jogja", locale: "id_ID", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }] },
};

const faq = [
  { q: "Kalau sudah punya asuransi swasta, apakah perusahaan masih wajib mendaftarkan karyawan ke BPJS Kesehatan?", a: "Ya. Kewajiban pemberi kerja mendaftarkan pekerja ke BPJS Kesehatan berjalan terpisah dan tidak digantikan asuransi swasta. Asuransi swasta berfungsi sebagai tambahan." },
  { q: "Bisakah BPJS dan asuransi swasta dipakai untuk satu perawatan?", a: "Bisa lewat skema koordinasi manfaat (COB), selama polis dan rumah sakit mendukungnya. Tanyakan ke asuransi sebelum perawatan terencana." },
  { q: "Berapa iuran BPJS Kesehatan karyawan swasta?", a: "5% dari upah per bulan: 4% dibayar perusahaan, 1% dipotong dari gaji karyawan. Batas atas upah yang dihitung Rp12 juta, batas bawah mengacu pada upah minimum daerah." },
  { q: "Mengapa premi asuransi swasta tidak dicantumkan?", a: "Premi bergantung pada jumlah peserta, usia, jenis kelamin, dan paket, serta ada ketentuan minimal peserta dari asuransi. Karena itu kami kirim penawaran khusus." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransijogja.biz.id" },
      { "@type": "ListItem", position: 2, name: "Artikel", item: "https://asuransijogja.biz.id/artikel" },
      { "@type": "ListItem", position: 3, name: "Kesehatan Karyawan", item: "https://asuransijogja.biz.id/asuransi-kesehatan-karyawan" },
      { "@type": "ListItem", position: 4, name: "BPJS vs Asuransi Swasta", item: URL },
    ] },
    { "@type": "Article", headline: TITLE, author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi", url: "https://www.linkedin.com/in/riomardiansyah" }, publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" }, datePublished: "2026-10-06", dateModified: "2026-10-06", inLanguage: "id-ID", mainEntityOfPage: URL },
    { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function Page() {
  return (
    <ArtikelShell
      schema={schema}
      crumb="BPJS vs Asuransi Swasta"
      badge="Kesehatan Karyawan"
      title={<>BPJS Kesehatan vs Asuransi Swasta untuk Karyawan: <em className="not-italic text-gold">Bukan Pilih Salah Satu</em></>}
      lead="Bagi perusahaan di Jogja, BPJS Kesehatan adalah kewajiban dasar, sedangkan asuransi swasta adalah lapisan tambahan. Artikel ini menghitung biayanya dengan UMK 2026 dan menjelaskan kapan tambahan itu layak dipertimbangkan."
      meta="Diperbarui 6 Oktober 2026 · Baca 8 menit"
      ctaTitle="Ingin tahu biaya lapisan tambahan untuk karyawan Anda?"
      sumber={[
        { t: "Penetapan UMP/UMK DIY 2026 (Metro TV)", u: "https://www.metrotvnews.com/read/N0BC1y6Z-sri-sultan-tetapkan-ump-diy-2026-ini-nominal-besarannya" },
        { t: "Iuran BPJS Kesehatan pekerja penerima upah (Bisnis.com)", u: "https://kabar24.bisnis.com/read/20191030/15/1164710/ini-rincian-kenaikan-iuran-bpjs-kesehatan" },
        { t: "Status KRIS dan iuran per Juli 2026 (Gebrak.id)", u: "https://www.gebrak.id/2026/07/kelas-bpjs-kesehatan-dihapus-ini-penjelasan-kris-dasar-hukum-jadwal-berlaku-dan-iuran-terbaru-2026.html" },
        { t: "Mekanisme CoB BPJS dan asuransi swasta (Kontan)", u: "https://keuangan.kontan.co.id/news/mekanisme-cob-bakal-diatur-di-seojk-asuransi-kesehatan-begini-kata-bpjs-kesehatan" },
        { t: "BUMN Primissima di Sleman tunggak BPJS (kumparan, 10 Juli 2024)", u: "https://kumparan.com/kumparanbisnis/bumn-primissima-di-sleman-ternyata-tunggak-bpjs-kesehatan-dan-ketenagakerjaan-236JCJq67z7" },
        { t: "Penawaran Simas Sehat Corporate, PT Asuransi Sinar Mas cabang Yogyakarta", u: "https://asuransijogja.biz.id/asuransi-kesehatan-karyawan" },
      ]}
      related={[
        { href: "/asuransi-kesehatan-karyawan", icon: "🏥", judul: "Asuransi Kesehatan Karyawan Jogja", desc: "Paket, RS rekanan, dan minta penawaran" },
        { href: "/artikel/cara-klaim-asuransi-kesehatan-karyawan-jogja", icon: "📋", judul: "Cara Klaim Asuransi Kesehatan Karyawan", desc: "Cashless vs reimbursement, dokumen, dan kasus" },
        { href: "/artikel/employer-liability-panduan-jogja", icon: "🛡️", judul: "Employer's Liability", desc: "Perlindungan di luar BPJS Ketenagakerjaan" },
        { href: "/artikel/pentingnya-asuransi-dunia-usaha-jogja", icon: "🏢", judul: "Pentingnya Asuransi Dunia Usaha Jogja", desc: "Gambaran proteksi bisnis di Yogyakarta" },
      ]}
    >
      <Box label="Jawaban singkat">
        BPJS Kesehatan wajib untuk karyawan dan tidak bisa digantikan asuransi swasta. Asuransi swasta ditambahkan bila perusahaan ingin
        pilihan kamar, rumah sakit, atau akses spesialis yang lebih leluasa, terutama untuk menahan karyawan kunci.
      </Box>

      <H2>1. Berapa biaya BPJS Kesehatan untuk karyawan di Jogja?</H2>
      <P>
        Untuk pekerja penerima upah, iuran 5% dari upah per bulan: 4% ditanggung perusahaan dan 1% dipotong dari gaji karyawan. Upah yang
        dihitung dibatasi maksimal Rp12 juta, dan batas bawahnya mengacu pada upah minimum daerah. Setoran dilakukan perusahaan tiap bulan.
        Hingga pertengahan 2026, pemerintah belum menetapkan besaran iuran baru meski Kelas Rawat Inap Standar (KRIS) diterapkan bertahap.
      </P>
      <Tabel
        head={["Wilayah (UMK 2026)", "Upah dasar", "Iuran 5% / bulan", "Porsi perusahaan 4%"]}
        rows={[
          ["Kota Yogyakarta", "Rp2.827.593", "± Rp141.380", "± Rp113.104"],
          ["Sleman", "Rp2.624.387", "± Rp131.219", "± Rp104.975"],
          ["Bantul", "Rp2.509.001", "± Rp125.450", "± Rp100.360"],
          ["Kulon Progo", "Rp2.504.520", "± Rp125.226", "± Rp100.181"],
        ]}
      />
      <P>
        Angka UMK dari penetapan Pemda DIY untuk 2026, dan hitungan di atas berlaku bila gaji tepat di upah minimum. Karyawan bergaji Rp12 juta
        atau lebih membayar iuran maksimal Rp600.000 per bulan (perusahaan Rp480.000, karyawan Rp120.000). Anak ke-4 dan seterusnya, orang tua,
        dan mertua dapat didaftarkan dengan tambahan 1% dari upah per orang, dibayar karyawan.
      </P>
      <Box label="Ilustrasi (bukan klien nyata)">
        Konveksi di Bantul dengan 25 karyawan bergaji UMK: iuran total sekitar Rp3,14 juta per bulan, atau sekitar Rp37,6 juta per tahun.
        Dari jumlah itu, sekitar Rp30,1 juta ditanggung perusahaan. Ini biaya kewajiban dasar, belum termasuk asuransi tambahan.
      </Box>

      <H2>2. Apa yang BPJS tidak atur, dan di situ asuransi swasta masuk?</H2>
      <P>
        BPJS bekerja dengan alur berjenjang: pasien mulai dari fasilitas kesehatan tingkat pertama, lalu dirujuk bila perlu, kecuali gawat darurat.
        Rawat inap mengikuti standar KRIS, bukan pilihan kamar bebas. Produk swasta seperti Simas Sehat Corporate menawarkan struktur berbeda,
        berdasarkan dokumen penawaran yang kami pegang:
      </P>
      <Tabel
        head={["Aspek", "BPJS Kesehatan", "Simas Sehat Corporate (contoh swasta)"]}
        rows={[
          ["Status", "Wajib bagi pemberi kerja", "Pilihan tambahan perusahaan"],
          ["Biaya", "5% upah, batas atas Rp12 juta", "Premi per orang, bergantung paket dan jumlah peserta"],
          ["Kamar", "Mengikuti standar KRIS", "Plan kamar Rp300 rb sampai Rp1,5 juta per hari (IPS300 sampai IPS1500)"],
          ["Akses", "Berjenjang dan rujukan", "Cashless di RS rekanan atau reimbursement; spesialis rawat jalan sesuai ketentuan polis"],
          ["Batas manfaat", "Sesuai paket manfaat JKN", "Per plan; rawat inap tidak terbatas per tahun, rawat jalan Rp2,4 juta sampai Rp10 juta per tahun"],
          ["Syarat", "Kepesertaan aktif, iuran rutin", "Usia 18–60 tahun, masa tunggu 12 bulan penyakit kronis untuk peserta baru"],
        ]}
      />

      <H2>3. COB: memakai keduanya sekaligus</H2>
      <P>
        Koordinasi manfaat (CoB) memungkinkan peserta BPJS naik kelas layanan dengan bantuan asuransi swasta. Contoh yang sering dipakai BPJS:
        peserta ingin dirawat di kamar VIP, BPJS menanggung setara kelasnya, dan selisihnya ditanggung asuransi swasta. Ketentuan teknisnya dapat
        berubah, jadi urutan pembayar bisa berbeda menurut polis dan regulasi terbaru; konfirmasi ke asuransi sebelum perawatan.
      </P>
      <P>
        Di daftar rumah sakit dalam penawaran Simas Sehat untuk Jogja, rumah sakit yang ditandai dapat melayani COB-BPJS adalah Hermina Yogya,
        Dr. Sardjito, Happyland Medical Center, dan Queen Latifa. Daftar bisa berubah, jadi konfirmasi sebelum perawatan terencana.
      </P>

      <H2>4. Kasus nyata di Sleman: ketika iuran BPJS tidak dibayar</H2>
      <P>
        Pada Juli 2024, kumparan melaporkan PT Primissima (Persero) di Sleman merumahkan dan mem-PHK pekerja. Menurut Ketua KSBSI DIY, perusahaan
        juga menunggak BPJS Kesehatan seluruh karyawan sejak Oktober, sehingga pekerja tidak bisa memakai layanan BPJS Kesehatan. Saat berita terbit,
        pihak perusahaan belum memberi jawaban kepada kumparan, jadi angka dan klaim tersebut adalah keterangan serikat pekerja.
      </P>
      <P>
        Pelajarannya untuk HR: kartu BPJS karyawan hanya berfungsi selama iuran dibayar rutin. Kalender setoran bulanan dan satu penanggung jawab
        yang memeriksa status kepesertaan lebih penting daripada menambah produk baru.
      </P>

      <H2>5. Kapan asuransi swasta layak ditambahkan?</H2>
      <P>
        Produk seperti Simas Sehat Corporate sangat cocok untuk perusahaan yang ingin memberikan benefit lebih bagi pekerja di atas jaminan dasar BPJS.
      </P>
      <UL items={[
        "Perusahaan ingin menawarkan tunjangan kesehatan yang kompetitif untuk merekrut dan menahan karyawan.",
        "Karyawan kunci atau manajer membutuhkan pilihan kamar dan rumah sakit yang lebih leluasa.",
        "Anggaran tunjangan ingin lebih terukur dibanding biaya berobat yang tidak terduga.",
        "Sebaliknya, jika kewajiban BPJS belum tertib, rapikan itu dulu sebelum menambah lapisan baru.",
      ]} />
      <P>
        Beberapa perusahaan mengelompokkan paket per golongan jabatan; kemungkinan ini perlu dikonfirmasi ke asuransi untuk jumlah peserta Anda.
      </P>

      <H2>Pertanyaan yang sering diajukan</H2>
      <div className="flex flex-col divide-y divide-black/8 mb-6">
        {faq.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="py-3 cursor-pointer font-semibold text-[0.92rem] text-navy list-none flex justify-between">
              {f.q}<span className="text-gold text-xl ml-4 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm leading-[1.78] text-[#475569] pb-3">{f.a}</p>
          </details>
        ))}
      </div>
    </ArtikelShell>
  );
}
