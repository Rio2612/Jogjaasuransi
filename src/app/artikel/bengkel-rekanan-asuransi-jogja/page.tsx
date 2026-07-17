import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bengkel Rekanan Asuransi di Jogja: Panduan Lengkap Klaim Tanpa Ribet",
  description:
    "Panduan mendalam bengkel rekanan asuransi di Yogyakarta: cara kerja cashless, alur klaim step-by-step, hak Anda sebagai tertanggung, kesalahan fatal yang membuat klaim ditolak, dan tips memilih bengkel yang benar-benar melindungi kepentingan Anda.",
  keywords:
    "bengkel rekanan asuransi jogja, bengkel asuransi yogyakarta, bengkel cashless asuransi DIY, klaim asuransi mobil bengkel jogja, bengkel resmi asuransi kendaraan yogyakarta, cara klaim bengkel rekanan",
  alternates: {
    canonical:
      "https://asuransijogja.biz.id/artikel/bengkel-rekanan-asuransi-jogja",
  },
  openGraph: {
    title: "Bengkel Rekanan Asuransi di Jogja: Panduan Lengkap Klaim Tanpa Ribet",
    description:
      "Dari cashless vs reimbursement hingga hak tertanggung yang sering tidak diketahui — panduan praktis bengkel rekanan asuransi di Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/bengkel-rekanan-asuransi-jogja",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og/og-kendaraan.png", width: 1200, height: 630, alt: "Bengkel Rekanan Asuransi di Jogja: Panduan Lengkap Klaim Tanpa Ribet" }],
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const bedaBengkel = [
  {
    aspek: "Status & Kontrak",
    rekanan:
      "Terikat perjanjian resmi (PKS) dengan perusahaan asuransi — kualitas diawasi secara berkala",
    umum:
      "Tidak terdaftar — dipilih sendiri oleh pemegang polis tanpa verifikasi asuransi",
  },
  {
    aspek: "Mekanisme Pembayaran",
    rekanan:
      "Cashless — tagihan langsung diselesaikan antara bengkel & asuransi, Anda hanya bayar own risk",
    umum:
      "Reimbursement — Anda bayar dulu, kemudian ajukan penggantian ke asuransi (bisa butuh 14–30 hari)",
  },
  {
    aspek: "Garansi Perbaikan",
    rekanan:
      "Garansi ganda: dari bengkel + jaminan asuransi. Jika ada masalah, asuransi ikut bertanggung jawab",
    umum:
      "Garansi hanya dari bengkel — jika bengkel tutup atau ingkar janji, Anda sendiri yang hadapi",
  },
  {
    aspek: "Spare Part",
    rekanan:
      "Suku cadang sesuai standar PKS — biasanya genuine atau setara yang disepakati asuransi",
    umum:
      "Suku cadang sesuai negosiasi dengan bengkel — perlu Anda awasi dan verifikasi sendiri",
  },
  {
    aspek: "Waktu & SLA",
    rekanan:
      "Ada Service Level Agreement (SLA) antara bengkel & asuransi — estimasi waktu lebih terukur",
    umum:
      "Tidak ada SLA — bergantung sepenuhnya pada kapasitas dan kebijakan bengkel",
  },
  {
    aspek: "Penggantian Biaya",
    rekanan:
      "100% ditanggung asuransi sesuai estimasi yang disetujui surveyor (di luar own risk)",
    umum:
      "Penggantian berdasarkan nilai wajar versi asuransi — bisa lebih rendah dari tagihan aktual",
  },
];

const alurKlaim = [
  {
    step: "01",
    icon: "📸",
    label: "Dokumentasikan Lokasi Kejadian",
    detail:
      "Segera foto kondisi kendaraan dari 4 sisi, kerusakan spesifik, posisi kendaraan, dan plat nomor pihak lain yang terlibat (jika ada). Jangan pindahkan kendaraan sebelum dokumentasi selesai. Foto yang kuat adalah fondasi klaim yang berhasil — dan sering menjadi penentu apakah klaim disetujui penuh atau dipotong.",
  },
  {
    step: "02",
    icon: "📞",
    label: "Hubungi Asuransi atau Praktisi dalam 1×24 Jam",
    detail:
      "Pelaporan kejadian memiliki batas waktu — umumnya 3×24 jam, tapi makin cepat makin baik. Hubungi praktisi atau call center asuransi Anda. Mereka akan memberikan nomor laporan dan instruksi bengkel mana yang bisa dituju. Jangan bawa kendaraan ke bengkel manapun sebelum mendapat arahan resmi.",
  },
  {
    step: "03",
    icon: "📋",
    label: "Terima Surat Pengantar / SPK (Surat Perintah Kerja)",
    detail:
      "Asuransi akan menerbitkan Surat Pengantar atau SPK yang menjadi \"tiket masuk\" Anda ke bengkel rekanan. Dokumen ini mencantumkan nama tertanggung, nomor polis, dan otorisasi bahwa klaim sedang diproses. Tanpa dokumen ini, bengkel tidak bisa mulai proses apapun atas nama asuransi.",
  },
  {
    step: "04",
    icon: "🔍",
    label: "Serah Terima Kendaraan ke Bengkel Rekanan",
    detail:
      "Bawa kendaraan ke bengkel rekanan yang ditunjuk. Pihak bengkel akan melakukan pemeriksaan awal (initial inspection) dan membuat estimasi kerusakan. Mintalah salinan berita acara serah terima kendaraan — ini dokumen penting yang melindungi Anda jika ada kerusakan tambahan yang terjadi selama proses perbaikan.",
  },
  {
    step: "05",
    icon: "🛡️",
    label: "Survei oleh Adjuster / Surveyor Asuransi",
    detail:
      "Surveyor dari perusahaan asuransi akan datang ke bengkel untuk memverifikasi kerusakan secara langsung. Ini adalah tahap krusial — sampaikan kronologi kejadian dengan jujur dan konsisten. Surveyor akan mencocokkan foto, kondisi fisik kendaraan, dan laporan Anda. Inkonsistensi sekecil apapun bisa menjadi alasan penundaan atau penolakan.",
  },
  {
    step: "06",
    icon: "⚙️",
    label: "Perbaikan Dimulai Setelah Approval",
    detail:
      "Setelah surveyor menyetujui estimasi, bengkel baru bisa memulai perbaikan. Anda bisa memantau progress — bengkel rekanan profesional seharusnya memberikan update berkala. Jika ada kerusakan tambahan yang ditemukan selama proses, bengkel akan mengajukan supplemental estimate ke asuransi untuk persetujuan tambahan.",
  },
  {
    step: "07",
    icon: "✅",
    label: "Inspeksi Akhir dan Pengambilan Kendaraan",
    detail:
      "Sebelum menandatangani surat serah terima, periksa kendaraan secara menyeluruh dalam kondisi terang. Tes kendaraan berjalan sebelum keluar dari bengkel. Jika ada hasil yang tidak memuaskan, sampaikan di tempat dan minta diperbaiki — setelah Anda tanda tangan, proses klaim dianggap selesai dan komplain akan jauh lebih sulit.",
  },
];

const hakTertanggung = [
  {
    icon: "📄",
    hak: "Hak Mendapat Salinan Dokumen Klaim",
    penjelasan:
      "Anda berhak mendapatkan salinan semua dokumen klaim: formulir klaim, berita acara survei, estimasi perbaikan yang disetujui, dan surat serah terima kendaraan. Simpan semua dokumen ini — sangat berguna jika ada sengketa di kemudian hari.",
  },
  {
    icon: "🔎",
    hak: "Hak Memantau Proses Perbaikan",
    penjelasan:
      "Anda boleh mengunjungi bengkel untuk memantau progress perbaikan. Bengkel rekanan tidak boleh melarang pemilik kendaraan melihat kondisi kendaraannya. Jika merasa ada yang tidak beres, catat dan laporkan ke asuransi sebelum kendaraan selesai.",
  },
  {
    icon: "🔄",
    hak: "Hak Mengajukan Keberatan atas Hasil Perbaikan",
    penjelasan:
      "Jika hasil perbaikan tidak sesuai dengan yang dijanjikan atau ada kerusakan yang terlewat, Anda berhak mengajukan keberatan secara tertulis ke perusahaan asuransi sebelum menandatangani serah terima. Asuransi wajib merespons dalam jangka waktu yang ditentukan polis.",
  },
  {
    icon: "🏭",
    hak: "Hak Memilih Bengkel Rekanan di Beberapa Produk",
    penjelasan:
      "Beberapa polis All Risk memberikan fleksibilitas memilih bengkel rekanan dari daftar yang tersedia. Anda tidak harus menerima bengkel yang langsung ditunjuk asuransi tanpa pilihan — tanyakan opsi yang tersedia sesuai polis dan lokasi kendaraan Anda.",
  },
  {
    icon: "📅",
    hak: "Hak atas Informasi Estimasi Waktu Perbaikan",
    penjelasan:
      "Bengkel rekanan terikat SLA dengan asuransi. Anda berhak mengetahui estimasi waktu penyelesaian di awal. Jika mundur signifikan tanpa alasan jelas, eskalasikan ke asuransi — keterlambatan yang berlarut-larut bisa dikompensasi di beberapa polis.",
  },
];

const kesalahanFatal = [
  {
    icon: "⚠️",
    kesalahan: "Memperbaiki Kendaraan Sebelum Dilaporkan",
    dampak:
      "Klaim bisa ditolak karena asuransi tidak bisa memverifikasi kerusakan asli. Bahkan perbaikan kecil seperti mengganti kaca spion yang pecah bisa menjadi masalah.",
    solusi: "Laporkan dulu ke asuransi — baru setelah ada instruksi resmi, kendaraan boleh dibawa ke bengkel.",
  },
  {
    icon: "⏰",
    kesalahan: "Melapor Lebih dari 3×24 Jam Setelah Kejadian",
    dampak:
      "Hampir semua polis mencantumkan batas waktu pelaporan 3×24 jam. Melewati batas ini adalah alasan resmi penolakan klaim yang sangat umum terjadi.",
    solusi: "Hubungi asuransi atau praktisi segera setelah kejadian — bahkan dari lokasi kejadian jika memungkinkan.",
  },
  {
    icon: "🔧",
    kesalahan: "Membawa ke Bengkel di Luar Jaringan Tanpa Izin",
    dampak:
      "Biaya perbaikan di bengkel non-rekanan harus Anda tanggung dulu dan proses reimburse-nya jauh lebih rumit — bahkan bisa tidak diganti penuh.",
    solusi: "Selalu minta persetujuan tertulis dari asuransi sebelum membawa ke bengkel pilihan sendiri.",
  },
  {
    icon: "📄",
    kesalahan: "Tanda Tangan Serah Terima Tanpa Memeriksa Kendaraan",
    dampak:
      "Setelah tanda tangan, klaim dianggap selesai dan tuntas. Komplain tentang kualitas perbaikan yang kurang baik setelahnya akan sangat sulit diproses.",
    solusi: "Alokasikan 30–60 menit untuk inspeksi menyeluruh sebelum menandatangani apapun. Tes kendaraan di jalan.",
  },
  {
    icon: "📱",
    kesalahan: "Tidak Menyimpan Bukti Komunikasi dengan Bengkel",
    dampak:
      "Janji lisan tentang spare part, waktu selesai, atau kualitas pengerjaan sulit dibuktikan jika terjadi sengketa.",
    solusi: "Minta semua komitmen dalam bentuk tertulis — minimal lewat WhatsApp yang bisa di-screenshot.",
  },
];

const tipsMemilih = [
  {
    icon: "📍",
    tip: "Pertimbangkan Jarak dan Kemudahan Akses",
    detail:
      "Kendaraan bisa di bengkel 5–20 hari tergantung tingkat kerusakan. Bengkel yang dekat dengan lokasi Anda memudahkan pemantauan progress dan koordinasi jika ada keputusan yang perlu diambil. Di Jogja, pertimbangkan juga kemudahan akses transportasi alternatif selama kendaraan diperbaiki.",
  },
  {
    icon: "⭐",
    tip: "Telusuri Rekam Jejak di Komunitas Lokal",
    detail:
      "Forum dan grup komunitas kendaraan Yogyakarta — baik online maupun offline — adalah sumber informasi yang sangat berharga. Pengalaman nyata dari sesama pemegang polis jauh lebih relevan daripada rating generik. Tanyakan khususnya tentang pengalaman klaim, bukan hanya servis rutin.",
  },
  {
    icon: "🔧",
    tip: "Sesuaikan dengan Merek dan Jenis Kendaraan",
    detail:
      "Bengkel spesialis merek tertentu (misalnya yang memiliki sertifikasi pabrikan Toyota, Honda, atau BMW) umumnya lebih mumpuni untuk kendaraan merek tersebut. Ini semakin relevan untuk kendaraan mewah atau kendaraan Eropa yang spare part-nya lebih kompleks.",
  },
  {
    icon: "📋",
    tip: "Minta Detail Estimasi, Bukan Hanya Total",
    detail:
      "Estimasi yang baik mencantumkan rincian: nama komponen, nomor part, biaya material, dan biaya jasa secara terpisah. Estimasi yang hanya menyebutkan total angka adalah tanda peringatan — Anda tidak bisa memverifikasi kewajaran biayanya.",
  },
  {
    icon: "🛡️",
    tip: "Konfirmasi Kebijakan Garansi Pengerjaan Secara Tertulis",
    detail:
      "Standar garansi pengerjaan di bengkel rekanan berkisar 3–6 bulan untuk cat, dan 1 bulan untuk komponen mekanis. Pastikan garansi ini tercantum di nota serah terima — bukan hanya dijanjikan secara lisan oleh service advisor.",
  },
  {
    icon: "💬",
    tip: "Minta Rekomendasi Praktisi Sebelum Memutuskan",
    detail:
      "Praktisi asuransi yang berpengalaman di Jogja biasanya memiliki pengetahuan lapangan tentang bengkel rekanan mana yang benar-benar memberikan pelayanan baik — dan mana yang sering menimbulkan keluhan. Manfaatkan pengetahuan ini sebelum membawa kendaraan Anda.",
  },
];

const faqBengkel = [
  {
    q: "Bolehkah saya memilih bengkel rekanan sendiri, tidak harus yang ditunjuk asuransi?",
    a: "Tergantung polis Anda. Beberapa produk All Risk memberikan fleksibilitas memilih dari daftar bengkel rekanan yang tersedia — Anda bisa memilih mana yang paling dekat atau paling Anda percaya. Namun beberapa polis menunjuk bengkel secara langsung. Tanyakan ke praktisi atau baca klausul polis Anda sebelum terjadi klaim, bukan setelah.",
  },
  {
    q: "Apa yang harus saya lakukan jika kualitas perbaikan bengkel rekanan mengecewakan?",
    a: "Jangan tanda tangan serah terima kendaraan. Dokumentasikan kekurangan yang Anda temukan dengan foto dan tuliskan secara tertulis di berita acara penerimaan. Hubungi pihak asuransi — mereka yang memiliki leverage terhadap bengkel rekanan karena bengkel tersebut terikat PKS. Komplain yang disampaikan via asuransi jauh lebih efektif daripada langsung ke bengkel.",
  },
  {
    q: "Berapa lama proses perbaikan kendaraan di bengkel rekanan?",
    a: "Kerusakan ringan (goresan, baret, lampu pecah) umumnya 3–7 hari kerja. Kerusakan sedang (penyok badan, komponen bodi) 7–14 hari kerja. Kerusakan berat yang melibatkan penggantian banyak komponen bisa memakan 21–45 hari tergantung ketersediaan spare part. Tanya estimasi spesifik di awal dan minta update jika meleset.",
  },
  {
    q: "Apakah saya harus bayar sesuatu saat klaim di bengkel rekanan?",
    a: "Ya, Anda tetap wajib membayar own risk (deductible) — biasanya Rp 300.000 untuk kendaraan konvensional atau Rp 500.000 untuk kendaraan listrik per kejadian. Own risk ini dibayarkan langsung ke bengkel sebelum mengambil kendaraan. Di luar itu, tidak ada biaya tambahan yang seharusnya dibebankan ke Anda untuk perbaikan yang sudah disetujui asuransi.",
  },
  {
    q: "Bagaimana jika bengkel rekanan yang ditunjuk asuransi tidak ada di dekat lokasi kejadian?",
    a: "Hubungi asuransi dan jelaskan situasinya. Untuk kendaraan yang tidak bisa dikendarai (rusak parah), asuransi umumnya menyediakan layanan derek ke bengkel rekanan terdekat. Dalam kondisi darurat, beberapa asuransi mengizinkan perbaikan sementara di bengkel terdekat dengan biaya yang akan diganti — selalu minta persetujuan tertulis terlebih dahulu.",
  },
];

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Bengkel Rekanan Asuransi di Jogja: Panduan Lengkap Klaim Tanpa Ribet",
  description:
    "Panduan mendalam tentang bengkel rekanan asuransi di Yogyakarta: mekanisme cashless, alur klaim, hak tertanggung, dan tips memilih bengkel yang tepat.",
  url: "https://asuransijogja.biz.id/artikel/bengkel-rekanan-asuransi-jogja",
  datePublished: "2025-01-15",
  dateModified: "2025-06-01",
  author: {
    "@type": "Person",
    name: "Rio Mardiansyah",
    url: "https://asuransijogja.biz.id",
  },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Jogja",
    url: "https://asuransijogja.biz.id",
  },
  inLanguage: "id-ID",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://asuransijogja.biz.id/artikel/bengkel-rekanan-asuransi-jogja",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqBengkel.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function BengkelRekananPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-xs text-[#475569] flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors no-underline">
            Beranda
          </Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">
            Artikel
          </Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">
            Bengkel Rekanan Asuransi Jogja
          </span>
        </div>
      </div>

      <article className="max-w-[760px] mx-auto px-[5vw] py-14">

        {/* ── HEADER ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">
              🔧 Klaim Kendaraan
            </span>
            <span className="text-[#5A6472] text-xs">⏱ 10 menit baca</span>
          </div>
          <h1 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy leading-[1.2] mb-4">
            Bengkel Rekanan Asuransi di Jogja:<br />
            Panduan Lengkap Klaim Tanpa Ribet
          </h1>
          <p className="text-[#475569] text-lg leading-[1.85] mb-4">
            Saat kendaraan rusak dan Anda mengajukan klaim, ada satu keputusan
            yang lebih menentukan dari yang kebanyakan orang sadari: ke mana
            kendaraan itu dibawa untuk diperbaiki. Salah pilih bengkel — atau
            salah memahami prosedurnya — dan Anda bisa menghabiskan berminggu-minggu
            dalam ketidakpastian, atau lebih buruk, menanggung sebagian biaya
            yang seharusnya ditanggung asuransi.
          </p>
          <p className="text-[#475569] text-lg leading-[1.85]">
            Panduan ini tidak hanya menjelaskan apa itu bengkel rekanan —
            tapi juga hak-hak Anda sebagai tertanggung, kesalahan fatal yang
            sering terjadi, dan bagaimana memastikan proses klaim berjalan
            semulus mungkin dari awal hingga kendaraan kembali ke tangan Anda.
          </p>
          <div className="mt-5 p-4 bg-gold/8 border-l-4 border-gold rounded-r-xl">
            <p className="text-sm text-navy2 font-medium">
              💡 <strong>Catatan penting:</strong> Setiap perusahaan asuransi
              memiliki jaringan bengkel rekanan dan prosedur yang berbeda.
              Panduan ini adalah acuan umum — selalu konfirmasi detail spesifik
              ke polis Anda atau praktisi asuransi sebelum terjadi kejadian.
            </p>
          </div>
        </div>

        {/* ── SECTION 1: APA ITU BENGKEL REKANAN ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Apa Sebenarnya Bengkel Rekanan Itu?
          </h2>
          <p className="text-[#475569] text-base leading-[1.85] mb-4">
            Bengkel rekanan adalah bengkel yang telah menandatangani{" "}
            <strong className="text-navy">
              Perjanjian Kerja Sama (PKS)
            </strong>{" "}
            dengan perusahaan asuransi. Dalam perjanjian ini, bengkel setuju
            untuk melayani klaim kendaraan tertanggung dengan standar kualitas
            tertentu, menggunakan suku cadang yang disepakati, dan menyelesaikan
            pekerjaan dalam waktu yang telah ditetapkan.
          </p>
          <p className="text-[#475569] text-base leading-[1.85] mb-4">
            Sebagai imbalannya, bengkel mendapatkan aliran pekerjaan yang stabil
            dari jaringan nasabah asuransi — dan pembayaran langsung dari
            perusahaan asuransi, bukan dari pemilik kendaraan. Inilah yang
            disebut mekanisme{" "}
            <strong className="text-navy">cashless</strong>.
          </p>
          <p className="text-[#475569] text-base leading-[1.85]">
            Di Yogyakarta, jaringan bengkel rekanan cukup beragam — mulai dari
            bengkel resmi pabrikan (ATPM) hingga bengkel independen bersertifikat
            yang tersebar di berbagai wilayah seperti Sleman, Bantul, Kota Jogja,
            dan Kulonprogo. Jumlah dan lokasi persisnya tergantung pada
            perusahaan asuransi yang Anda gunakan.
          </p>
        </section>

        {/* ── SECTION 2: TABEL PERBANDINGAN ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Bengkel Rekanan vs Bengkel Umum: Perbedaan yang Perlu Anda Tahu
          </h2>
          <p className="text-[#475569] text-base leading-[1.85] mb-6">
            Beberapa polis All Risk membolehkan Anda menggunakan bengkel
            non-rekanan — tapi prosesnya sangat berbeda, dan perbedaan itu
            tidak hanya soal kenyamanan.
          </p>
          <div className="overflow-x-auto rounded-xl border border-black/8 mb-5">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-4 font-heading font-semibold text-xs">
                    Aspek
                  </th>
                  <th className="text-left p-4 font-heading font-semibold text-xs text-gold">
                    Bengkel Rekanan ✓
                  </th>
                  <th className="text-left p-4 font-heading font-semibold text-xs">
                    Bengkel Umum / Pilihan Sendiri
                  </th>
                </tr>
              </thead>
              <tbody>
                {bedaBengkel.map((b, i) => (
                  <tr
                    key={b.aspek}
                    className={i % 2 === 0 ? "bg-white" : "bg-cream"}
                  >
                    <td className="p-4 font-semibold text-navy text-xs align-top">
                      {b.aspek}
                    </td>
                    <td className="p-4 text-navy2 text-sm leading-relaxed font-medium align-top">
                      {b.rekanan}
                    </td>
                    <td className="p-4 text-[#475569] text-sm leading-relaxed align-top">
                      {b.umum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gold/8 border-l-4 border-gold rounded-r-xl">
            <p className="text-sm text-navy2">
              <strong className="text-gold">Rekomendasi praktis:</strong> Untuk
              kerusakan yang akan diklaim ke asuransi, gunakan bengkel rekanan
              kecuali ada alasan spesifik yang kuat (misalnya bengkel rekanan
              terdekat tidak memiliki kompetensi untuk merek kendaraan Anda).
              Kemudahan cashless dan jaminan ganda jauh lebih menguntungkan
              dibanding kebebasan memilih bengkel sendiri.
            </p>
          </div>
        </section>

        {/* ── SECTION 3: ALUR KLAIM 7 LANGKAH ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-2">
            7 Langkah Alur Klaim di Bengkel Rekanan
          </h2>
          <p className="text-sm text-[#475569] mb-6">
            Dari lokasi kejadian hingga kunci kendaraan kembali di tangan Anda
          </p>
          <div className="flex flex-col gap-5">
            {alurKlaim.map((a) => (
              <div
                key={a.step}
                className="flex gap-5 p-5 bg-cream rounded-xl border border-black/5"
              >
                <div className="flex-shrink-0">
                  <div className="bg-navy text-gold font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">
                    {a.step}
                  </div>
                </div>
                <div>
                  <div className="font-heading text-navy font-bold text-lg mb-2 flex items-center gap-2">
                    {a.icon} {a.label}
                  </div>
                  <p className="text-base leading-[1.8] text-[#475569]">
                    {a.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: HAK TERTANGGUNG ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-2">
            Hak-Hak Anda sebagai Tertanggung yang Sering Tidak Diketahui
          </h2>
          <p className="text-sm text-[#475569] mb-6">
            Pemilik kendaraan sering merasa tidak berdaya saat berurusan dengan
            bengkel rekanan dan asuransi — padahal Anda memiliki hak yang cukup
            kuat
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hakTertanggung.map((h) => (
              <div
                key={h.hak}
                className="bg-cream rounded-xl p-5 border border-black/5"
              >
                <div className="text-2xl mb-2">{h.icon}</div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">
                  {h.hak}
                </div>
                <p className="text-base leading-relaxed text-[#475569]">
                  {h.penjelasan}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 bg-navy rounded-xl">
            <p className="text-sm text-white/80">
              <strong className="text-gold">💡 Tips dari Pak Rio:</strong>{" "}
              Jika Anda merasa klaim diproses tidak adil atau bengkel rekanan
              tidak kooperatif, Anda bisa mengajukan pengaduan ke Layanan
              Konsumen OJK (Otoritas Jasa Keuangan) melalui{" "}
              <strong className="text-gold">157</strong> atau email{" "}
              <strong className="text-gold">konsumen@ojk.go.id</strong>.
              Ancaman seperti ini sering cukup efektif untuk mempercepat
              penyelesaian yang berlarut-larut.
            </p>
          </div>
        </section>

        {/* ── SECTION 5: KESALAHAN FATAL ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-2">
            5 Kesalahan Fatal yang Bisa Membuat Klaim Anda Ditolak
          </h2>
          <p className="text-sm text-[#475569] mb-6">
            …dan cara mudah menghindari semuanya
          </p>
          <div className="flex flex-col gap-4">
            {kesalahanFatal.map((k) => (
              <div
                key={k.kesalahan}
                className="bg-cream rounded-xl p-5 border border-black/5"
              >
                <div className="flex gap-3 items-start">
                  <span className="text-2xl flex-shrink-0">{k.icon}</span>
                  <div>
                    <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">
                      {k.kesalahan}
                    </div>
                    <p className="text-base leading-relaxed text-[#475569] mb-2">
                      <strong className="text-red-500">Dampak:</strong>{" "}
                      {k.dampak}
                    </p>
                    <p className="text-base leading-relaxed text-navy2">
                      <strong className="text-gold">Solusi:</strong>{" "}
                      {k.solusi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: TIPS MEMILIH ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            6 Tips Memilih Bengkel Rekanan yang Tepat di Jogja
          </h2>
          <p className="text-[#475569] text-base leading-[1.85] mb-6">
            Tidak semua bengkel rekanan setara kualitasnya — meskipun
            semuanya sudah lolos seleksi asuransi. Memilih dengan cermat
            sebelum kejadian jauh lebih baik daripada menyesal saat kendaraan
            sudah masuk.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tipsMemilih.map((t) => (
              <div
                key={t.tip}
                className="bg-cream rounded-xl p-5 border border-black/5"
              >
                <div className="text-2xl mb-2">{t.icon}</div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">
                  {t.tip}
                </div>
                <p className="text-base leading-relaxed text-[#475569]">
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: KONTEKS JOGJA ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Kondisi Khusus di Yogyakarta yang Perlu Diperhatikan
          </h2>
          <p className="text-[#475569] text-base leading-[1.85] mb-4">
            Yogyakarta memiliki karakteristik yang sedikit berbeda dari
            kota besar lain seperti Jakarta atau Surabaya dalam hal jaringan
            bengkel rekanan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                icon: "🗺️",
                judul: "Sebaran Bengkel Tidak Merata",
                detail:
                  "Sebagian besar bengkel rekanan terkonsentrasi di Kota Jogja dan Sleman. Jika Anda tinggal di Gunungkidul atau Kulonprogo, pastikan mengetahui bengkel rekanan terdekat sebelum terjadi kejadian.",
              },
              {
                icon: "🚗",
                judul: "Pilihan Terbatas untuk Merek Premium",
                detail:
                  "Untuk kendaraan merek Eropa seperti BMW, Mercedes, atau Audi, bengkel rekanan bersertifikat di Jogja jumlahnya sangat terbatas. Pemilik kendaraan ini perlu mendiskusikan opsi bengkel secara khusus dengan asuransi.",
              },
              {
                icon: "📅",
                judul: "Antrean Panjang di Musim Liburan",
                detail:
                  "Yogyakarta adalah kota wisata — insiden kendaraan meningkat signifikan saat liburan Lebaran dan akhir tahun. Bengkel rekanan bisa penuh dan waktu tunggu bisa lebih panjang dari biasanya di periode tersebut.",
              },
              {
                icon: "🔋",
                judul: "Kapasitas untuk Kendaraan Listrik Masih Terbatas",
                detail:
                  "Jumlah kendaraan listrik di Jogja meningkat, tapi bengkel rekanan yang benar-benar kompeten untuk EV masih sangat sedikit. Jika memiliki kendaraan listrik, tanyakan spesifik ke asuransi tentang bengkel EV-ready dalam jaringan mereka.",
              },
            ].map((item) => (
              <div
                key={item.judul}
                className="bg-cream rounded-xl p-5 border border-black/5"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">
                  {item.judul}
                </div>
                <p className="text-base leading-relaxed text-[#475569]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gold/8 border-l-4 border-gold rounded-r-xl">
            <p className="text-sm text-navy2">
              <strong className="text-gold">Saran proaktif:</strong> Sebelum
              terjadi insiden apapun, minta daftar bengkel rekanan dari
              perusahaan asuransi Anda dan tandai 2–3 bengkel terdekat yang
              sesuai dengan merek kendaraan. Simpan kontaknya di ponsel. Hal
              kecil ini bisa menghemat waktu dan stres yang signifikan saat
              situasi darurat.
            </p>
          </div>
        </section>

        {/* ── SECTION 8: FAQ ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-6">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <div className="flex flex-col">
            {faqBengkel.map((f, i) => (
              <details
                key={i}
                className="border-b border-black/8 group"
              >
                <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-base leading-[1.78] text-[#475569] pb-4">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section className="mb-10 p-6 bg-cream rounded-xl border border-black/6">
          <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">
            Artikel &amp; Produk Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/artikel/cara-klaim-asuransi-mobil"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              📋 Panduan Lengkap Klaim Asuransi Mobil →
            </Link>
            <Link
              href="/asuransi-kendaraan/mobil"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🚗 Asuransi Mobil Jogja (All Risk & TLO) →
            </Link>
            <Link
              href="/asuransi-kendaraan"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🛡️ Semua Produk Asuransi Kendaraan →
            </Link>
            <Link
              href="/asuransi-kendaraan/armada-fleet"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🚐 Asuransi Armada Fleet →
            </Link>
          </div>
        </section>

        {/* ── CTA BOX ── */}
        <div className="bg-navy rounded-[20px] p-8 text-center">
          <h3 className="font-heading text-white text-[1.4rem] mb-3">
            Perlu Bantuan Proses Klaim Bengkel Rekanan?
          </h3>
          <p className="text-white/85 text-sm mb-6 max-w-[420px] mx-auto">
            Pak Rio siap mendampingi dari laporan kejadian pertama hingga
            kendaraan Anda kembali — termasuk koordinasi dengan bengkel
            rekanan dan asuransi jika ada hambatan di tengah proses.
            Gratis, tanpa biaya tambahan.
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
          >
            💬 Konsultasi Klaim via WhatsApp
          </a>
        </div>
      </article>
    </>
  );
}
