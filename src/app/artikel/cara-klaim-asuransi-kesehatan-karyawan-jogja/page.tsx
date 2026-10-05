// TARGET: "cara klaim asuransi kesehatan karyawan", "cashless vs reimbursement"
// INTENT: HowTo → mendukung /asuransi-kesehatan-karyawan
import type { Metadata } from "next";
import ArtikelShell, { H2, P, UL, Box, Tabel } from "@/components/kesehatan/ArtikelShell";

const URL = "https://asuransijogja.biz.id/artikel/cara-klaim-asuransi-kesehatan-karyawan-jogja";
const TITLE = "Cara Klaim Asuransi Kesehatan Karyawan: Cashless vs Reimbursement, Dokumen, dan Penyebab Klaim Bermasalah";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Panduan HR dan karyawan di Jogja: langkah klaim cashless dan reimbursement, dokumen rawat inap dan rawat jalan, batas waktu 90 hari, penyebab tagihan melebihi jaminan, plus contoh kasus.",
  keywords: "cara klaim asuransi kesehatan karyawan, cashless vs reimbursement, dokumen klaim rawat inap, klaim asuransi kesehatan ditolak, rs rekanan jogja",
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: "Langkah klaim, checklist dokumen, dan kesalahan umum asuransi kesehatan karyawan.", url: URL, type: "article", siteName: "Asuransi Jogja", locale: "id_ID", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }] },
};

const faq = [
  { q: "Berapa lama batas waktu mengajukan klaim reimbursement?", a: "Dalam penawaran Simas Sehat Corporate, batasnya maksimal 90 hari kalender sejak tanggal kuitansi, termasuk waktu melengkapi dokumen bila berkas dikembalikan. Kirim secepatnya." },
  { q: "Kapan dana klaim cair?", a: "Rawat inap 14 hari kerja dan rawat jalan 7 hari kerja, dihitung sejak dokumen lengkap diterima asuransi." },
  { q: "Apakah selalu perlu surat rujukan dokter umum untuk ke spesialis?", a: "Dokumen penawaran memuat dua keterangan yang tampak berbeda: manfaat rawat jalan menyebut konsultasi spesialis tanpa rujukan, sedangkan bagian klaim meminta surat rujukan kecuali untuk beberapa spesialis (anak di bawah 6 tahun, mata, kulit, kandungan non-kehamilan, tulang, THT). Pastikan versi yang berlaku di polis Anda." },
  { q: "Klaim saya ditolak, apa langkahnya?", a: "Minta alasan tertulis, cocokkan dengan polis, lalu ajukan keberatan ke asuransi. Jika belum selesai, konsumen dapat mengadu ke OJK (kontak 157) dan mediasi lewat LAPS SJK." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransijogja.biz.id" },
      { "@type": "ListItem", position: 2, name: "Artikel", item: "https://asuransijogja.biz.id/artikel" },
      { "@type": "ListItem", position: 3, name: "Kesehatan Karyawan", item: "https://asuransijogja.biz.id/asuransi-kesehatan-karyawan" },
      { "@type": "ListItem", position: 4, name: "Cara Klaim", item: URL },
    ] },
    { "@type": "Article", headline: TITLE, author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi", url: "https://www.linkedin.com/in/riomardiansyah" }, publisher: { "@type": "Organization", name: "Asuransi Jogja", url: "https://asuransijogja.biz.id" }, datePublished: "2026-10-06", dateModified: "2026-10-06", inLanguage: "id-ID", mainEntityOfPage: URL },
    { "@type": "HowTo", name: "Cara mengajukan klaim reimbursement asuransi kesehatan karyawan", step: [
      { "@type": "HowToStep", position: 1, name: "Bayar biaya perawatan dan minta kuitansi asli", text: "Minta kuitansi asli beserta rincian biaya, resep, dan hasil pemeriksaan." },
      { "@type": "HowToStep", position: 2, name: "Lengkapi formulir klaim", text: "Formulir diisi dan ditandatangani peserta dan dokter yang merawat (serta dokter bedah bila ada pembedahan)." },
      { "@type": "HowToStep", position: 3, name: "Sertakan fotokopi kartu peserta dan dokumen pendukung", text: "Untuk rawat jalan, pastikan diagnosis dokter tertulis pada kuitansi asli." },
      { "@type": "HowToStep", position: 4, name: "Kirim sebelum 90 hari kalender", text: "Serahkan berkas lengkap kepada asuransi sebelum batas 90 hari sejak tanggal kuitansi." },
    ] },
    { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function Page() {
  return (
    <ArtikelShell
      schema={schema}
      crumb="Cara Klaim"
      badge="Panduan Klaim"
      title={<>Cara Klaim Asuransi Kesehatan Karyawan: <em className="not-italic text-gold">Cashless atau Bayar Dulu?</em></>}
      lead="Klaim yang bermasalah umumnya bukan karena sakitnya tidak ditanggung, tetapi karena dokumen, diagnosis di kuitansi, atau batas waktu terlewat. Panduan ini merangkum alur, checklist, dan contoh kasus."
      meta="Diperbarui 6 Oktober 2026 · Baca 9 menit"
      ctaTitle="Ingin menyiapkan asuransi kesehatan untuk karyawan Anda?"
      sumber={[
        { t: "Penawaran Simas Sehat Corporate, PT Asuransi Sinar Mas cabang Yogyakarta (ketentuan klaim, dokumen, daftar RS)", u: "https://asuransijogja.biz.id/asuransi-kesehatan-karyawan" },
        { t: "Pre-existing condition dalam sengketa klaim, Indonesian Journal of Law and Economics Review (2026)", u: "https://ijler.umsida.ac.id/index.php/ijler/article/download/1408/1629" },
      ]}
      related={[
        { href: "/asuransi-kesehatan-karyawan", icon: "🏥", judul: "Asuransi Kesehatan Karyawan Jogja", desc: "Paket, RS rekanan, dan minta penawaran" },
        { href: "/artikel/bpjs-vs-asuransi-kesehatan-karyawan-jogja", icon: "⚖️", judul: "BPJS vs Asuransi Swasta", desc: "Iuran UMK Jogja 2026 dan COB" },
        { href: "/artikel/cara-klaim-asuransi-mobil", icon: "🚗", judul: "Cara Klaim Asuransi Mobil", desc: "Pembanding alur klaim produk lain" },
        { href: "/artikel/cara-klaim-asuransi-liability", icon: "📋", judul: "Cara Klaim Asuransi Liability", desc: "Prosedur klaim tanggung gugat" },
      ]}
    >
      <Box label="Intinya">
        Cashless: tunjukkan kartu di RS rekanan. Reimbursement: bayar dulu, kirim berkas lengkap dalam 90 hari kalender. Dua hal paling sering
        menjegal: diagnosis tidak tertulis di kuitansi dan berkas dikirim terlambat.
      </Box>

      <H2>1. Cashless atau reimbursement: kapan memakai yang mana</H2>
      <Tabel
        head={["", "Cashless (provider)", "Reimbursement"]}
        rows={[
          ["Cara", "Kartu dipakai di RS, klinik, atau apotek rekanan", "Bayar dulu, lalu klaim ke asuransi"],
          ["Biaya di luar jaminan", "Selisih dibayar peserta di tempat", "Dipotong dari penggantian"],
          ["Cair", "Tagihan diselesaikan RS dengan asuransi", "14 hari kerja (inap), 7 hari kerja (jalan) setelah berkas lengkap"],
          ["Cocok untuk", "RS rekanan di Jogja", "Perawatan di luar jaringan atau saat kartu belum aktif"],
        ]}
      />
      <P>
        Di Jogja dan sekitarnya, penawaran memuat 28 rumah sakit rekanan di Kota Yogyakarta, Sleman, Bantul, dan Kulon Progo, ditambah satu klinik dan
        dua apotek. Secara nasional ada sekitar 430 rumah sakit rekanan. Selalu cek daftar terbaru sebelum perawatan terencana.
      </P>

      <H2>2. Dokumen yang harus siap</H2>
      <Tabel
        head={["Jenis", "Dokumen"]}
        rows={[
          ["Rawat inap", "Formulir klaim ditandatangani peserta, dokter yang merawat, dan dokter bedah bila ada operasi; kuitansi asli RS dengan rincian obat dan lab; dokumen pendukung bila diminta (hasil lab, rekam medis)"],
          ["Rawat jalan", "Formulir klaim; kuitansi asli konsultasi dengan diagnosis tertulis; kuitansi asli obat; fotokopi resep; fotokopi surat rujukan; surat rujukan untuk lab, X-ray, atau pemeriksaan lain; hasil pemeriksaan asli"],
          ["Semua klaim", "Fotokopi kartu peserta, dan berkas diserahkan sesegera mungkin"],
        ]}
      />
      <Box tone="red" label="Cek sebelum keluar dari klinik">
        Penawaran menekankan bahwa diagnosis dari dokter yang merawat harus tertulis pada lembar kuitansi asli rawat jalan. Periksa sebelum pulang;
        meminta kuitansi ulang minggu depan bisa memakan jatah 90 hari.
      </Box>

      <H2>3. Penyebab tagihan melebihi jaminan (excess)</H2>
      <UL items={[
        "Biaya non-medis seperti telepon, koran, kartu, dan karcis registrasi.",
        "Diagnosis awal berbeda dari diagnosis akhir, misalnya setelah hasil patologi anatomi yang butuh sekitar 1 minggu.",
        "Naik kelas kamar di tengah perawatan.",
        "Rincian akhir belum keluar saat pulang, sehingga excess awal berupa estimasi.",
        "Informasi diagnosis atau kamar yang tidak akurat.",
        "Manfaat peserta sudah habis.",
      ]} />

      <H2>4. Tiga ilustrasi kasus (disusun dari ketentuan penawaran, bukan klien nyata)</H2>
      <Box label="Ilustrasi 1: naik kelas kamar">
        Karyawan di plan IPS750 (kamar maksimal Rp750.000 per hari) memilih kamar Rp1.100.000 selama 4 hari. Selisih kamar Rp350.000 x 4 = Rp1.400.000
        dibayar sendiri. Polis juga dapat mengatur dampak ke biaya lain, jadi tanyakan dulu sebelum pindah kelas.
      </Box>
      <Box label="Ilustrasi 2: diagnosis akhir berbeda">
        Pasien dioperasi dengan diagnosis awal yang dijamin. Seminggu kemudian hasil patologi anatomi menunjukkan kondisi yang masuk pengecualian polis.
        Menurut penawaran, bila pasien belum pulang jaminan awal dibatalkan; bila sudah pulang, seluruh biaya ditagihkan sebagai excess. Untuk
        tindakan terencana, tanyakan daftar pengecualian lebih dulu.
      </Box>
      <Box label="Ilustrasi 3: kuitansi tanpa diagnosis">
        Berkas rawat jalan dikembalikan karena kuitansi tidak memuat diagnosis. Waktu 90 hari tetap berjalan, termasuk masa melengkapi dokumen,
        sehingga HR sebaiknya menetapkan SOP internal: berkas masuk ke HR maksimal 7 hari setelah berobat.
      </Box>

      <H2>5. Produk ini cocok untuk perusahaan seperti apa?</H2>
      <P>
        Simas Sehat Corporate sangat cocok untuk perusahaan yang ingin memberikan benefit lebih bagi pekerja, baik rawat inap maupun rawat jalan,
        dengan pilihan paket yang bisa disesuaikan jumlah karyawan dan anggaran. Karena klaim bisa dilakukan lewat cashless di RS rekanan atau
        reimbursement, produk ini praktis bagi tim HR yang ingin proses berobat karyawan lebih tertata.
      </P>
      <P>
        Bila suatu saat klaim tidak sesuai harapan, mintalah alasan tertulis, cocokkan dengan polis, dan ajukan keberatan ke asuransi. Konsumen juga dapat
        mengadu ke OJK. Sengketa asuransi kesehatan kerap berkaitan dengan pre-existing condition, sehingga mengisi data kesehatan dengan jujur sejak awal
        adalah langkah pencegahan terbaik.
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
