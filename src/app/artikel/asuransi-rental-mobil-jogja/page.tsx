import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

// ─── SEO METADATA ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Pentingnya Asuransi Khusus untuk Bisnis Rental Mobil di Jogja",
  description:
    "Mengapa asuransi mobil pribadi tidak cukup untuk kendaraan sewaan? Pahami risiko nyata bisnis rental di Yogyakarta, perbedaan polis komersial vs personal, dan cara melindungi armada Anda.",
  keywords:
    "asuransi rental mobil jogja, asuransi mobil sewaan yogyakarta, asuransi armada rental jogja, asuransi kendaraan komersial yogyakarta, polis rental car insurance jogja",
  alternates: {
    canonical:
      "https://asuransijogja.biz.id/artikel/asuransi-rental-mobil-jogja",
  },
  openGraph: {
    title: "Pentingnya Asuransi Khusus untuk Bisnis Rental Mobil di Jogja",
    description:
      "Asuransi mobil pribadi tidak dirancang untuk kendaraan komersial. Pelajari risiko yang mengancam bisnis rental Anda dan proteksi yang tepat.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-rental-mobil-jogja",
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const risikoUtama = [
  {
    icon: "🚗",
    judul: "Pengemudi Tidak Dikenal dengan Profil Risiko Berbeda-beda",
    detail:
      "Setiap hari kendaraan Anda dikendarai orang yang berbeda — usia, pengalaman, dan gaya mengemudi yang sama sekali tidak Anda kendalikan. Wisatawan dari luar kota yang tidak familiar dengan karakter jalan Jogja adalah faktor risiko nyata yang tidak ada di polis personal.",
  },
  {
    icon: "📍",
    judul: "Operasional Intensif di Titik-Titik Padat Wisata",
    detail:
      "Malioboro, kawasan Keraton, Prambanan, hingga jalur menuju Gunung Merapi — semua rute ini padat, sempit di beberapa titik, dan kerap dilalui oleh penyewa yang sedang orientasi peta. Frekuensi operasional jauh melampaui kendaraan pribadi rata-rata.",
  },
  {
    icon: "⏰",
    judul: "Jarak Tempuh Harian yang Tidak Wajar untuk Polis Personal",
    detail:
      "Kendaraan rental bisa menempuh 150–300 km per hari selama musim liburan. Polis personal diasumsikan rata-rata 40–60 km/hari. Perbedaan ini bukan soal angka — ini soal tingkat keausan, kemungkinan kerusakan mesin, dan eksposur kecelakaan yang jauh lebih tinggi.",
  },
  {
    icon: "💰",
    judul: "Kehilangan Pendapatan Sewa saat Kendaraan dalam Perbaikan",
    detail:
      "Jika kendaraan rusak dan harus masuk bengkel 10 hari, Anda kehilangan pendapatan sewa selama 10 hari. Kerugian ini tidak pernah dikompensasi oleh polis All Risk biasa — hanya polis komersial dengan rider loss of income yang bisa menutupinya.",
  },
  {
    icon: "👤",
    judul: "Tanggung Jawab kepada Penyewa dan Pihak Ketiga",
    detail:
      "Ketika penyewa mengalami kecelakaan dan melukai pihak ketiga, siapa yang bertanggung jawab secara hukum? Dalam banyak kasus, pemilik kendaraan ikut terlibat sebagai pihak yang bertanggung gugat. Tanpa perluasan TPL (Third Party Liability) yang memadai, ini bisa berujung pada tuntutan hukum.",
  },
  {
    icon: "🔑",
    judul: "Risiko Penipuan dan Kendaraan Tidak Dikembalikan",
    detail:
      "Modus penipuan dengan identitas palsu atau kendaraan tidak dikembalikan adalah risiko yang cukup nyata di industri rental, terutama di kota wisata. Beberapa produk asuransi komersial menawarkan perluasan perlindungan untuk kasus ini.",
  },
];

const perbedaanPolis = [
  {
    aspek: "Penggunaan yang Dijamin",
    personal: "Penggunaan pribadi — pengemudi terbatas pada pemilik & keluarga",
    komersial: "Penggunaan komersial — disewakan kepada pihak ketiga tidak dikenal",
  },
  {
    aspek: "Profil Pengemudi",
    personal: "Satu atau beberapa pengemudi tetap yang dikenal",
    komersial: "Berganti-ganti setiap hari — profil risiko beragam",
  },
  {
    aspek: "Intensitas Operasional",
    personal: "Rendah-sedang (±40–60 km/hari)",
    komersial: "Tinggi (bisa 150–300 km/hari saat peak season)",
  },
  {
    aspek: "Klaim jika Disewakan",
    personal: "Berisiko DITOLAK — polis personal melarang penggunaan komersial",
    komersial: "Klaim diproses normal sesuai ketentuan polis",
  },
  {
    aspek: "Perlindungan Loss of Income",
    personal: "Tidak ada",
    komersial: "Tersedia sebagai rider / perluasan",
  },
  {
    aspek: "TPL untuk Penyewa",
    personal: "Terbatas / tidak mencakup pihak ketiga saat disewakan",
    komersial: "Tersedia dengan nilai pertanggungan lebih memadai",
  },
];

const faktaLapangan = [
  {
    angka: "3–5×",
    keterangan: "lebih tinggi frekuensi klaim kendaraan rental vs kendaraan pribadi di kategori yang sama",
  },
  {
    angka: "72%",
    keterangan: "pemilik rental kecil di Indonesia belum menggunakan polis yang sesuai untuk kendaraan komersial",
  },
  {
    angka: "Rp 0",
    keterangan: "nilai klaim yang dibayarkan asuransi jika terbukti kendaraan digunakan untuk tujuan komersial di luar cakupan polis",
  },
];

const tipsProteksi = [
  {
    icon: "📋",
    tip: "Audit Polis yang Sudah Ada",
    detail:
      "Baca ulang klausul 'penggunaan kendaraan' di setiap polis yang Anda miliki. Jika tertulis 'untuk penggunaan pribadi' atau 'non-commercial use', Anda berada di zona berisiko.",
  },
  {
    icon: "🔄",
    tip: "Upgrade ke Polis Kendaraan Komersial",
    detail:
      "Hubungi praktisi asuransi dan minta konversi atau penggantian polis ke kategori kendaraan niaga / komersial. Selisih preminya jauh lebih kecil dibanding potensi kerugian saat klaim ditolak.",
  },
  {
    icon: "🚐",
    tip: "Pertimbangkan Asuransi Fleet jika Punya 5+ Unit",
    detail:
      "Begitu armada Anda mencapai 5 unit atau lebih, asuransi fleet jauh lebih efisien — satu polis, renewal date sama, dan premi per unit lebih kompetitif dibanding mengurus polis satuan.",
  },
  {
    icon: "🛡️",
    tip: "Tambahkan Perluasan TPL yang Memadai",
    detail:
      "Kecelakaan yang melibatkan penyewa dan melukai pihak ketiga bisa menghasilkan tuntutan ratusan juta. Pastikan nilai pertanggungan TPL cukup — minimal Rp 25–50 juta per kejadian sebagai titik awal.",
  },
  {
    icon: "📄",
    tip: "Dokumentasikan Kondisi Kendaraan Setiap Serah Terima",
    detail:
      "Form serah terima bergambar dengan tanda tangan penyewa adalah bukti legal terpenting saat klaim. Tanpa dokumentasi ini, sengketa tanggung jawab kerusakan bisa menjadi panjang dan melelahkan.",
  },
];

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Pentingnya Asuransi Khusus untuk Bisnis Rental Mobil di Jogja",
  description:
    "Mengapa asuransi mobil pribadi tidak cukup untuk kendaraan sewaan dan risiko apa yang mengancam bisnis rental di Yogyakarta.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-rental-mobil-jogja",
  author: { "@type": "Person", name: "Rio MD" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Jogja",
    url: "https://asuransijogja.biz.id",
  },
  inLanguage: "id-ID",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://asuransijogja.biz.id/artikel/asuransi-rental-mobil-jogja",
  },
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ArtikelRentalMobilPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }}
      />

      {/* BREADCRUMB */}
      <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
        <div className="flex items-center gap-2 text-xs text-[#64748B] flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors no-underline">
            Beranda
          </Link>
          <span className="text-gold/60">›</span>
          <Link href="/artikel" className="hover:text-gold transition-colors no-underline">
            Artikel
          </Link>
          <span className="text-gold/60">›</span>
          <span className="text-navy font-semibold">
            Asuransi Rental Mobil Jogja
          </span>
        </div>
      </div>

      <article className="max-w-[760px] mx-auto px-[5vw] py-14">

        {/* ── HEADER ARTIKEL ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">
              🚗 Kendaraan Komersial
            </span>
            <span className="text-[#94A3B8] text-xs">⏱ 8 menit baca</span>
          </div>
          <h1 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] text-navy leading-[1.2] mb-4">
            Pentingnya Asuransi Khusus<br />untuk Bisnis Rental Mobil di Jogja
          </h1>
          <p className="text-[#64748B] text-lg leading-[1.85]">
            Yogyakarta adalah salah satu kota wisata paling padat di Indonesia —
            dan bisnis rental mobil tumbuh pesat seiring meningkatnya wisatawan
            yang lebih memilih fleksibilitas kendaraan pribadi dibanding
            transportasi umum. Tapi ada satu celah besar yang sering diabaikan
            para pelaku usaha rental: <strong className="text-navy">polis
            asuransi yang mereka bayar setiap tahun kemungkinan besar tidak akan
            membayar klaim serupiah pun</strong> ketika kendaraan rusak saat
            sedang disewakan.
          </p>
          <div className="mt-5 p-4 bg-gold/8 border-l-4 border-gold rounded-r-xl">
            <p className="text-sm text-navy2 font-medium">
              💡 <strong>Poin utama artikel ini:</strong> Ada perbedaan mendasar
              antara polis asuransi untuk kendaraan pribadi dan kendaraan
              komersial. Menggunakan polis yang salah bukan hanya membuang
              premi — ini berarti Anda tidak terlindungi sama sekali saat
              paling membutuhkannya.
            </p>
          </div>
        </div>

        {/* ── BAGIAN 1: KONTEKS PASAR ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Jogja, Kota Wisata yang Menghidupi Ribuan Unit Rental
          </h2>
          <p className="text-[#64748B] text-base leading-[1.85] mb-4">
            Berdasarkan data kunjungan wisata DIY, jutaan wisatawan datang ke
            Yogyakarta setiap tahun. Sebagian besar dari mereka — terutama
            keluarga dan rombongan — menyewa kendaraan untuk menjelajah dari
            Keraton hingga Prambanan, dari Pantai Parangtritis sampai lereng
            Merapi. Permintaan ini menghidupi ekosistem rental mobil yang
            tersebar dari Jalan Magelang hingga kawasan Bandara YIA di Kulonprogo.
          </p>
          <p className="text-[#64748B] text-base leading-[1.85] mb-4">
            Bagi pemilik rental, setiap unit kendaraan adalah aset produktif.
            Satu unit Toyota Avanza atau Innova yang beroperasi penuh bisa
            menghasilkan Rp 15–30 juta per bulan. Dengan nilai aset kendaraan
            rata-rata Rp 150–350 juta per unit, wajar jika pemilik rental
            mengasuransikan armadanya.
          </p>
          <p className="text-[#64748B] text-base leading-[1.85]">
            <strong className="text-navy">Masalahnya ada di kata "mengasuransikan".</strong>{" "}
            Banyak pemilik rental membeli polis All Risk atau TLO standar — jenis
            yang sama dengan yang dipakai pemilik mobil pribadi. Ini adalah
            kesalahan yang berpotensi sangat mahal.
          </p>
        </section>

        {/* ── BAGIAN 2: PERBEDAAN POLIS ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Mengapa Polis Asuransi Mobil Pribadi Tidak Cukup?
          </h2>
          <p className="text-[#64748B] text-base leading-[1.85] mb-6">
            Ini bukan soal kuantitas perlindungan — ini soal <em>jenis</em>{" "}
            penggunaan yang dijamin. Setiap polis asuransi kendaraan bermotor
            memiliki klausul yang mendefinisikan untuk apa kendaraan boleh
            digunakan. Pada polis personal, klausul itu secara eksplisit
            menyebutkan bahwa kendaraan diasuransikan untuk{" "}
            <strong className="text-navy">penggunaan pribadi (private use)</strong>,
            bukan untuk disewakan atau dikomersialkan.
          </p>

          {/* Tabel Perbandingan */}
          <div className="overflow-x-auto rounded-xl border border-black/8 mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-4 font-heading font-semibold text-xs">
                    Aspek
                  </th>
                  <th className="text-left p-4 font-heading font-semibold text-xs">
                    Polis Personal
                  </th>
                  <th className="text-left p-4 font-heading font-semibold text-xs text-gold">
                    Polis Komersial / Rental ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {perbedaanPolis.map((b, i) => (
                  <tr
                    key={b.aspek}
                    className={i % 2 === 0 ? "bg-white" : "bg-cream"}
                  >
                    <td className="p-4 font-semibold text-navy text-xs align-top">
                      {b.aspek}
                    </td>
                    <td className="p-4 text-[#64748B] text-sm leading-relaxed align-top">
                      {b.personal}
                    </td>
                    <td className="p-4 text-navy2 text-sm leading-relaxed font-medium align-top">
                      {b.komersial}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
            <p className="text-sm text-navy2">
              <strong className="text-red-600">⚠️ Peringatan krusial:</strong>{" "}
              Jika kendaraan Anda diasuransikan dengan polis personal namun
              terbukti sedang digunakan untuk tujuan komersial saat kejadian,
              perusahaan asuransi <strong>berhak menolak klaim sepenuhnya</strong>{" "}
              berdasarkan klausul "misrepresentation of use". Artinya premi yang
              sudah Anda bayar bertahun-tahun tidak menghasilkan perlindungan
              apapun di momen yang paling Anda butuhkan.
            </p>
          </div>
        </section>

        {/* ── BAGIAN 3: FAKTA ANGKA ── */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {faktaLapangan.map((f) => (
              <div
                key={f.angka}
                className="bg-navy rounded-xl p-6 text-center"
              >
                <div className="font-heading text-gold text-[2rem] font-bold mb-2">
                  {f.angka}
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  {f.keterangan}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BAGIAN 4: 6 RISIKO UTAMA ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-2">
            6 Risiko Nyata yang Mengintai Pengusaha Rental di Jogja
          </h2>
          <p className="text-sm text-[#64748B] mb-6">
            …yang tidak akan dikompensasi oleh polis personal biasa
          </p>
          <div className="flex flex-col gap-5">
            {risikoUtama.map((r, i) => (
              <div
                key={r.judul}
                className="flex gap-5 p-5 bg-cream rounded-xl border border-black/5"
              >
                <div className="flex-shrink-0">
                  <div className="bg-navy text-gold font-heading font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div>
                  <div className="font-heading text-navy font-bold text-lg mb-2 flex items-center gap-2">
                    {r.icon} {r.judul}
                  </div>
                  <p className="text-base leading-[1.8] text-[#64748B]">
                    {r.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BAGIAN 5: SEASONAL RISK JOGJA ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Faktor Lokal Jogja yang Memperparah Eksposur Risiko
          </h2>
          <p className="text-[#64748B] text-base leading-[1.85] mb-4">
            Yogyakarta bukan kota biasa. Ada beberapa karakteristik lokal yang
            secara spesifik meningkatkan profil risiko kendaraan rental di sini
            dibanding kota lain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                icon: "🗓️",
                judul: "Lonjakan Musiman Ekstrem",
                detail:
                  "Libur Lebaran, liburan sekolah, dan akhir tahun membuat utilisasi armada melonjak 200–300% dalam waktu singkat. Pengemudi yang kelelahan dan terburu-buru meningkatkan probabilitas insiden.",
              },
              {
                icon: "🗺️",
                judul: "Wisatawan Tidak Familiar Medan Lokal",
                detail:
                  "Jalan sempit di kawasan heritage Kota Tua, polisi tidur tidak berstandar di gang-gang Kotagede, dan kemacetan di simpang Malioboro adalah tantangan yang sering menjebak wisatawan dari luar kota.",
              },
              {
                icon: "🌧️",
                judul: "Cuaca Ekstrem dan Jalur Rawan",
                detail:
                  "Rute menuju Kaliurang, Pantai Selatan, dan Gunung Kidul kerap licin di musim hujan. Kendaraan rental sering didorong ke jalur ini oleh penyewa yang mengejar destinasi wisata.",
              },
              {
                icon: "🏍️",
                judul: "Kepadatan Lalu Lintas Campuran",
                detail:
                  "Sepeda motor mendominasi arus lalu lintas Jogja. Insiden kecil seperti serempetan di parkiran atau di gang sempit terjadi sangat sering — tepatnya jenis klaim yang tidak ditanggung TLO.",
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
                <p className="text-base leading-relaxed text-[#64748B]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BAGIAN 6: SKENARIO NYATA ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Skenario Nyata: Apa yang Terjadi Ketika Klaim Ditolak
          </h2>
          <div className="bg-cream rounded-xl p-6 border border-black/6 mb-4">
            <p className="text-sm font-semibold text-navy mb-3">
              📌 Ilustrasi Kasus (komposit dari pengalaman lapangan):
            </p>
            <p className="text-base leading-[1.85] text-[#64748B] mb-3">
              Pak Budi memiliki 3 unit kendaraan yang ia sewakan. Ketiganya
              diasuransikan All Risk dengan premi masing-masing sekitar Rp 4
              juta per tahun. Pada suatu hari Lebaran, salah satu unitnya mengalami
              kecelakaan cukup parah di Jalan Solo — dikendarai oleh seorang
              penyewa dari Jakarta. Total estimasi perbaikan: <strong>Rp 38 juta.</strong>
            </p>
            <p className="text-base leading-[1.85] text-[#64748B] mb-3">
              Ketika klaim diajukan, surveyor asuransi menemukan bahwa kendaraan
              sedang dalam status sewa (ada bukti transfer pembayaran sewa di
              WhatsApp penyewa). Klaim{" "}
              <strong className="text-red-600">ditolak seluruhnya</strong>{" "}
              berdasarkan klausul penggunaan komersial yang tidak tercakup dalam
              polis personal. Pak Budi harus menanggung Rp 38 juta dari kantong
              sendiri — ditambah kehilangan pendapatan sewa selama 3 minggu
              kendaraan di bengkel.
            </p>
            <p className="text-base leading-[1.85] text-[#64748B]">
              Total kerugian riil:{" "}
              <strong className="text-navy">lebih dari Rp 50 juta</strong> —
              dari aset yang sudah "diasuransikan" dan rutin dibayar preminya.
            </p>
          </div>
          <div className="p-4 bg-gold/8 border-l-4 border-gold rounded-r-xl">
            <p className="text-sm text-navy2">
              <strong className="text-gold">Pelajaran utama:</strong> Membayar
              premi tidak otomatis berarti terlindungi. Yang menentukan adalah
              apakah <em>jenis penggunaan</em> kendaraan Anda sesuai dengan apa
              yang tertulis di dalam polis.
            </p>
          </div>
        </section>

        {/* ── BAGIAN 7: SOLUSI & TIPS ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-2">
            5 Langkah Proteksi yang Tepat untuk Bisnis Rental Anda
          </h2>
          <p className="text-sm text-[#64748B] mb-6">
            Dari yang paling mendesak hingga yang bersifat jangka panjang
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tipsProteksi.map((t) => (
              <div
                key={t.tip}
                className="bg-cream rounded-xl p-5 border border-black/5"
              >
                <div className="text-2xl mb-2">{t.icon}</div>
                <div className="font-heading text-navy font-bold text-[0.95rem] mb-1.5">
                  {t.tip}
                </div>
                <p className="text-base leading-relaxed text-[#64748B]">
                  {t.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BAGIAN 8: SOAL PREMI ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Berapa Selisih Premi Polis Personal vs Komersial?
          </h2>
          <p className="text-[#64748B] text-base leading-[1.85] mb-4">
            Ini pertanyaan yang sering muncul — dan jawabannya lebih
            menggembirakan dari yang banyak orang bayangkan. Selisih premi
            antara polis personal dan polis komersial untuk kendaraan sejenis
            umumnya berkisar antara{" "}
            <strong className="text-navy">15–35% lebih tinggi</strong> untuk
            polis komersial, tergantung jenis kendaraan, wilayah operasional,
            dan perusahaan asuransi yang dipilih.
          </p>
          <p className="text-[#64748B] text-base leading-[1.85] mb-4">
            Dengan asumsi polis All Risk personal untuk Avanza senilai Rp 200
            juta di wilayah Jogja (Wilayah 3) berkisar Rp 3,5–4,5 juta per
            tahun, maka polis komersial setara mungkin berada di kisaran Rp
            4,5–6 juta per tahun. Selisih Rp 1–2 juta per tahun per unit.
          </p>
          <p className="text-[#64748B] text-base leading-[1.85]">
            Dibandingkan dengan risiko menanggung klaim yang ditolak senilai
            puluhan juta rupiah — investasi tambahan Rp 1–2 juta per tahun
            adalah keputusan keuangan yang sangat masuk akal.{" "}
            <Link
              href="/asuransi-kendaraan"
              className="text-gold font-semibold hover:text-gold2 transition-colors no-underline"
            >
              Lihat panduan lengkap asuransi kendaraan kami →
            </Link>
          </p>
        </section>

        {/* ── BAGIAN 9: ARMADA FLEET ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Punya Lebih dari 5 Unit? Saatnya Beralih ke Asuransi Fleet
          </h2>
          <p className="text-[#64748B] text-base leading-[1.85] mb-4">
            Jika bisnis rental Anda sudah berkembang ke 5 unit kendaraan atau
            lebih, ada opsi yang jauh lebih efisien daripada mengelola belasan
            polis terpisah:{" "}
            <Link
              href="/asuransi-kendaraan/armada-fleet"
              className="text-gold font-semibold hover:text-gold2 transition-colors no-underline"
            >
              asuransi armada / fleet
            </Link>
            .
          </p>
          <div className="bg-navy rounded-xl p-6 text-white mb-4">
            <div className="font-heading text-gold text-sm font-semibold mb-3">
              🚐 Keunggulan Asuransi Fleet untuk Bisnis Rental
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                "Satu polis untuk semua unit — satu renewal date, satu tagihan, jauh lebih mudah dikelola",
                "Premi per unit lebih kompetitif karena volume negosiasi lebih kuat",
                "Unit baru bisa ditambahkan kapan saja tanpa mengganggu polis yang ada",
                "Klaim fleet umumnya mendapat prioritas penanganan lebih cepat",
                "Account manager khusus — satu kontak untuk semua urusan asuransi armada Anda",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-white/80">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#64748B] text-base leading-[1.85]">
            Untuk detail lebih lanjut tentang bagaimana skema fleet bekerja dan
            apakah bisnis Anda sudah memenuhi syarat, baca panduan lengkapnya
            di halaman{" "}
            <Link
              href="/asuransi-kendaraan/armada-fleet"
              className="text-gold font-semibold hover:text-gold2 transition-colors no-underline"
            >
              Asuransi Armada Fleet →
            </Link>
          </p>
        </section>

        {/* ── KESIMPULAN ── */}
        <section className="mb-12">
          <h2 className="font-heading text-[1.6rem] text-navy mb-4">
            Kesimpulan: Proteksi yang Benar Dimulai dari Polis yang Tepat
          </h2>
          <p className="text-[#64748B] text-base leading-[1.85] mb-4">
            Bisnis rental mobil di Yogyakarta adalah peluang yang nyata dan
            menguntungkan — tapi juga penuh risiko yang tidak boleh diremehkan.
            Setiap hari kendaraan Anda berada di tangan orang yang berbeda, di
            jalan yang tidak selalu ramah, dengan intensitas operasional yang
            jauh melampaui kendaraan pribadi.
          </p>
          <p className="text-[#64748B] text-base leading-[1.85] mb-4">
            Polis asuransi yang tepat bukan sekadar kewajiban administratif —
            ini adalah fondasi keberlanjutan bisnis Anda. Satu klaim besar yang
            ditolak bisa menghapus keuntungan berbulan-bulan. Sebaliknya, dengan
            polis komersial yang sesuai, setiap insiden menjadi kejadian yang
            dapat diselesaikan tanpa mengancam arus kas bisnis.
          </p>
          <p className="text-[#64748B] text-base leading-[1.85]">
            Langkah pertama yang paling penting: periksa polis Anda sekarang.
            Jika masih menggunakan polis personal untuk kendaraan yang
            disewakan, segera konsultasikan perubahan yang dibutuhkan.{" "}
            <Link
              href="/asuransi-kendaraan"
              className="text-gold font-semibold hover:text-gold2 transition-colors no-underline"
            >
              Pelajari selengkapnya di halaman Asuransi Kendaraan kami →
            </Link>
          </p>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section className="mb-10 p-6 bg-cream rounded-xl border border-black/6">
          <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-4">
            Artikel &amp; Produk Terkait
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/asuransi-kendaraan"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🚗 Asuransi Kendaraan Jogja →
            </Link>
            <Link
              href="/asuransi-kendaraan/armada-fleet"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🚐 Asuransi Armada Fleet →
            </Link>
            <Link
              href="/asuransi-kendaraan/mobil"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              🔍 All Risk vs TLO →
            </Link>
            <Link
              href="/artikel/cara-klaim-asuransi-mobil"
              className="bg-white border border-black/8 text-navy2 text-sm px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors no-underline"
            >
              📋 Cara Klaim Asuransi Mobil →
            </Link>
          </div>
        </section>

        {/* ── CTA BOX ── */}
        <div className="bg-navy rounded-[20px] p-8 text-center">
          <h3 className="font-heading text-white text-[1.4rem] mb-3">
            Mau Audit Polis Rental Anda Sekarang?
          </h3>
          <p className="text-white/85 text-sm mb-6 max-w-[420px] mx-auto">
            Pak Rio siap memeriksa polis asuransi kendaraan rental Anda —
            gratis, tanpa tekanan, dan tanpa biaya konsultasi. Ketahui apakah
            Anda sudah benar-benar terlindungi atau masih berada di zona
            abu-abu.
          </p>
          <a
            href={`https://wa.me/${KONTAK.wa}`}
            className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
          >
            💬 Konsultasi via WhatsApp
          </a>
        </div>
      </article>
    </>
  );
}
