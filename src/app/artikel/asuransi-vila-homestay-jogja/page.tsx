import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Panduan Asuransi Vila & Homestay Jogja: Proteksi Properti Wisata Sewa Harian | Asuransi Jogja",
  description:
    "Panduan lengkap asuransi vila dan homestay di Yogyakarta. Risiko sewa harian, perbedaan produk, cara klaim, estimasi premi, dan tips memilih proteksi untuk host Airbnb, Tiket.com & Traveloka. Konsultasi gratis.",
  keywords:
    "asuransi vila jogja, asuransi homestay yogyakarta, asuransi airbnb jogja, proteksi properti sewa harian jogja, asuransi properti wisata yogyakarta, asuransi kaliurang, vila merapi asuransi, asuransi property all risk vila, nilai pertanggungan vila, premi asuransi homestay",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-vila-homestay-jogja",
  },
  openGraph: {
    title:
      "Panduan Asuransi Vila & Homestay Jogja: Proteksi Properti Wisata Sewa Harian",
    description:
      "Risiko nyata pemilik vila di DIY, produk yang tepat, estimasi premi, dan cara klaim. Panduan dari konsultan lokal Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-vila-homestay-jogja",
    type: "article",
  },
};

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Panduan Asuransi Vila & Homestay Jogja: Proteksi Properti Wisata Sewa Harian",
  description:
    "Panduan lengkap asuransi vila dan homestay di Yogyakarta untuk pemilik properti wisata dan host platform sewa harian.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-vila-homestay-jogja",
  datePublished: "2025-06-01",
  dateModified: "2025-06-01",
  author: { "@type": "Person", name: "Rio MD" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Jogja",
    url: "https://asuransijogja.biz.id",
  },
  mainEntityOfPage:
    "https://asuransijogja.biz.id/artikel/asuransi-vila-homestay-jogja",
};

// ─── FAQ SCHEMA (structured data untuk rich snippet Google) ────────────────
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah polis asuransi rumah tinggal biasa bisa digunakan untuk vila yang disewakan harian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Polis kebakaran residensial standar umumnya memiliki klausul pengecualian penggunaan komersial. Vila yang terdaftar di Airbnb, Tiket.com, atau platform sewa harian lainnya dianggap properti komersial. Anda memerlukan endorsement komersial atau produk khusus agar polis tetap valid saat klaim.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa estimasi premi asuransi untuk vila 3 kamar di Kaliurang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk vila beton (Kelas 1) dengan nilai bangunan Rp 600 juta, ditambah perluasan gempa dan banjir, estimasi premi sekitar Rp 900.000 – Rp 1.200.000 per tahun. Angka ini bisa berubah tergantung nilai isi bangunan, perluasan vulkanik, dan penambahan Public Liability.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah AirCover dari Airbnb sudah cukup sebagai perlindungan properti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Belum cukup. AirCover hanya menjamin kerusakan akibat tamu untuk pemesanan via Airbnb, dan tidak mencakup kebakaran struktural, gempa bumi, banjir, Business Interruption, maupun Public Liability secara komprehensif. Asuransi properti mandiri tetap diperlukan sebagai perlindungan utama.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu franchise atau deductible dalam polis asuransi properti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franchise (atau deductible) adalah jumlah kerugian pertama yang menjadi tanggungan sendiri tertanggung sebelum asuransi membayar. Misalnya, jika franchise Rp 2 juta dan kerugian Rp 10 juta, asuransi membayar Rp 8 juta. Besaran franchise mempengaruhi premi — semakin besar franchise, semakin rendah premi.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menghitung nilai pertanggungan yang benar untuk vila?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nilai pertanggungan harus berdasarkan biaya penggantian (replacement cost), bukan harga jual properti. Cara sederhananya: kalikan luas bangunan (m²) dengan estimasi biaya konstruksi per meter persegi di Yogyakarta saat ini (sekitar Rp 4–8 juta/m² tergantung spesifikasi). Nilai isi bangunan dihitung terpisah.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah perluasan gempa bumi dan vulkanik bisa ditambahkan ke polis kebakaran biasa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, keduanya ditambahkan sebagai endorsement (klausul tambahan) pada polis kebakaran atau PAR yang sudah ada. Khusus untuk perluasan gempa bumi, di beberapa perusahaan asuransi diterbitkan sebagai polis terpisah. Biaya surcharge relatif terjangkau — sekitar 7–15% dari premi dasar.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu Business Interruption (BI) dan apakah pemilik vila perlu membelinya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business Interruption (BI) adalah perluasan yang menggantikan kehilangan pendapatan usaha selama properti tidak bisa beroperasi akibat klaim yang dijamin polis. Untuk pemilik vila dengan omzet signifikan, BI sangat direkomendasikan — terutama jika vila adalah sumber penghasilan utama dan cicilan KPR masih berjalan.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses klaim asuransi properti vila di Yogyakarta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tergantung kompleksitas klaim. Klaim sederhana (kerusakan parsial) biasanya selesai dalam 14–30 hari kerja setelah dokumen lengkap dan survei adjustor selesai. Klaim besar seperti kebakaran total atau gempa bisa memakan waktu 30–60 hari. Pendampingan konsultan independen dapat mempercepat proses ini.",
      },
    },
  ],
};

export default function ArtikelVilaHomestayPage() {
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

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 85% 45%, rgba(200,150,62,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-gold/80 mb-4 flex-wrap">
            <Link
              href="/"
              className="hover:text-gold transition-colors no-underline text-white/50"
            >
              Beranda
            </Link>
            <span className="text-gold/40">›</span>
            <Link
              href="/artikel"
              className="hover:text-gold transition-colors no-underline text-white/50"
            >
              Artikel
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold2 font-semibold">Asuransi Vila &amp; Homestay Jogja</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>
            Properti · Panduan Pemilik Vila &amp; Homestay
          </div>

          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-5">
            Asuransi Vila &amp; Homestay Jogja:{" "}
            <em className="not-italic text-gold">
              Panduan Lengkap Proteksi Properti Wisata Sewa Harian
            </em>
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/50 flex-wrap">
            <span>✍️ Rio MD – Konsultan Asuransi Kerugian</span>
            <span>·</span>
            <span>⏱ 12 menit baca</span>
            <span>·</span>
            <span>🗓️ Diperbarui Juni 2025</span>
          </div>
        </div>
      </section>

      {/* ── ARTIKEL BODY ─────────────────────────────────────────────────── */}
      <article className="py-16 px-[5vw] bg-white">
        <div className="max-w-[780px] mx-auto">

          {/* DAFTAR ISI */}
          <div className="bg-cream border border-black/6 rounded-[14px] p-6 mb-10">
            <div className="font-heading text-navy font-bold text-[0.95rem] mb-3">📋 Daftar Isi</div>
            <ol className="flex flex-col gap-1.5 list-decimal list-inside">
              {[
                "Mengapa Vila & Homestay Punya Profil Risiko Unik?",
                "5 Risiko yang Paling Sering Menyebabkan Kerugian",
                "Produk Asuransi yang Relevan",
                "Perbandingan Produk: Kebakaran vs PAR",
                "Apakah AirCover Sudah Cukup?",
                "Estimasi Premi Asuransi Vila",
                "Cara Menentukan Nilai Pertanggungan yang Tepat",
                "Tips Memilih Asuransi dari Konsultan Lokal",
                "Kesimpulan",
                "FAQ — Pertanyaan yang Sering Diajukan",
              ].map((item, i) => (
                <li key={i} className="text-sm text-[#475569] leading-relaxed">
                  {item}
                </li>
              ))}
            </ol>
          </div>

          {/* INTRO */}
          <p className="text-lg leading-[1.85] text-[#475569] mb-6">
            Yogyakarta tidak pernah kehabisan tamu. Setiap tahun, lebih dari 10 juta wisatawan
            domestik dan mancanegara mengunjungi kota ini — untuk menikmati Keraton, Malioboro,
            Prambanan, pantai-pantai Gunungkidul, hingga udara sejuk lereng Merapi. Dan di balik
            arus wisatawan yang deras itu, muncul peluang bisnis yang semakin besar:{" "}
            <strong className="text-navy">vila dan homestay sewa harian.</strong>
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Platform seperti Airbnb, Tiket.com, Traveloka Xperience, dan Booking.com telah
            membuka akses pasar global bagi pemilik properti di Yogyakarta. Seorang ibu rumah
            tangga di Prawirotaman bisa menyewakan kamar ekstranya ke tamu dari Tokyo. Seorang
            pensiunan di Kaliurang bisa mengoperasikan vila dengan kolam renang yang selalu
            terisi di akhir pekan. Bahkan sebuah gubuk bambu artistik di tepi sawah Bantul
            punya potensi penghasilan jutaan rupiah per bulan.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Tapi ada satu hal yang sering luput dari perhatian para host dan pemilik vila:{" "}
            <strong className="text-navy">
              profil risiko properti sewa harian sangat berbeda dari hunian biasa — dan polis
              asuransi yang Anda miliki saat ini mungkin tidak melindungi Anda sama sekali.
            </strong>
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Artikel ini ditulis khusus untuk Anda — pemilik vila, pengelola homestay, atau
            siapa pun yang mempertimbangkan untuk masuk ke bisnis properti wisata di Yogyakarta.
            Kami akan membahas risiko riil yang sering diabaikan, produk asuransi yang tepat,
            perbedaan yang wajib dipahami, dan strategi perlindungan yang sesuai dengan skala
            dan lokasi properti Anda.
          </p>

          {/* SECTION 1 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            1. Mengapa Vila & Homestay di Yogyakarta Punya Profil Risiko yang Unik?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Jika Anda bertanya kepada pemilik vila di Kaliurang tentang apa yang paling
            mereka khawatirkan, jawabannya biasanya bukan kebakaran atau gempa — melainkan
            "tamu yang rewel" atau "kamar yang kotor". Padahal risiko finansial terbesar
            justru tersembunyi di balik kejadian yang tidak terpikirkan.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Ada tiga faktor yang membuat vila dan homestay memiliki profil risiko yang
            berbeda — dan lebih kompleks — dibanding rumah tinggal biasa:
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              {
                ico: "🔄",
                judul: "Pergantian Tamu yang Cepat dan Tidak Terkendalikan",
                isi: 'Setiap tamu yang datang adalah orang baru dengan kebiasaan, kehati-hatian, dan tingkat familiaritas yang berbeda-beda dengan fasilitas properti Anda. Kompor gas yang sudah sering dipakai tapi tidak familiar bagi tamu dari kota besar. AC yang dibiarkan menyala 24 jam. Instalasi listrik yang dibebani perangkat elektronik berlebih. Semua ini adalah pemicu risiko yang sulit dikontrol oleh pemilik dari jarak jauh.',
              },
              {
                ico: "🗺️",
                judul: "Lokasi di Zona Risiko Geologi Tinggi",
                isi: "Sebagian besar destinasi vila premium di Yogyakarta terletak di kawasan yang secara geologis berisiko: Kaliurang dan Pakem hanya berjarak 20-an km dari puncak Gunung Merapi yang paling aktif di Indonesia. Kawasan Bantul Selatan berada di dekat jalur patahan Opak yang pernah memicu gempa destruktif 2006. Vila tepi pantai di Parangtritis dan Sanden terpapar risiko tsunami dari Samudra Hindia. Lokasi premium secara wisata sering berkorelasi dengan eksposur risiko alam yang tinggi.",
              },
              {
                ico: "💼",
                judul: "Status Komersial yang Mempengaruhi Validitas Polis",
                isi: "Inilah yang paling sering tidak disadari: sebagian besar polis asuransi kebakaran residensial memiliki klausul yang membatasi atau bahkan membatalkan jaminan jika properti dioperasikan secara komersial. Vila yang terdaftar di Airbnb secara hukum adalah properti komersial — bukan hunian. Jika terjadi kebakaran dan polis Anda adalah polis residensial biasa, klaim bisa ditolak. Ini bukan soal niat buruk perusahaan asuransi; ini soal ketidaksesuaian produk dengan risiko yang sebenarnya.",
              },
            ].map((r) => (
              <div
                key={r.judul}
                className="flex gap-4 items-start border border-black/6 rounded-[14px] p-5 bg-white hover:border-gold/30 hover:shadow-sm transition-all"
              >
                <div className="text-[2rem] flex-shrink-0 leading-none mt-0.5">{r.ico}</div>
                <div>
                  <div className="font-heading text-navy font-bold text-[1rem] mb-1.5">
                    {r.judul}
                  </div>
                  <p className="text-sm leading-[1.75] text-[#64748B]">{r.isi}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 2 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            2. 5 Risiko yang Paling Sering Menyebabkan Kerugian Pemilik Vila di Jogja
          </h2>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            1. Kebakaran dari Aktivitas Tamu
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Kebakaran adalah ancaman terbesar — dan paling tidak terprediksi — di properti
            wisata. Sumber apinya tidak harus dramatis: rokok yang tidak dimatikan di teras,
            lilin aromaterapi yang ditinggal, atau tamu yang memaksakan alat masak listrik
            berdaya tinggi ke soket yang tidak memadai. Satu insiden kebakaran pada vila yang
            terbuat dari material kayu atau bambu bisa menghancurkan seluruh struktur dalam
            hitungan menit. Untuk properti beton sekalipun, kerusakan interior, perabot, dan
            peralatan bisa mencapai ratusan juta rupiah.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            2. Kerusakan Struktural Akibat Gempa Bumi
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Gempa Yogyakarta 27 Mei 2006 berkekuatan M5,9 adalah pengingat keras bahwa tanah
            di bawah DIY tidak pernah benar-benar diam. Lebih dari 150.000 bangunan rusak,
            termasuk ribuan properti di Bantul, Klaten, dan Sleman. Vila dan homestay yang
            menggunakan material tradisional — bambu, kayu, atau bata tanpa tulangan — adalah
            yang paling rentan. Bahkan bangunan beton modern pun bisa mengalami keretakan
            struktural yang biaya perbaikannya mencapai puluhan hingga ratusan juta rupiah.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            3. Kerusakan Fasilitas oleh Tamu
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Ini adalah risiko yang paling sering dikeluhkan pemilik vila, tapi justru paling
            jarang ditanggung oleh polis standar. Kasur yang dicoret-coret, pintu kaca yang
            dipecahkan, AC yang rusak karena penyalahgunaan, atau bahkan kolam renang yang
            kotor akibat penggunaan tidak semestinya — semuanya adalah kerugian nyata yang
            harus ditanggung pemilik.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Beberapa produk asuransi properti komersial menyediakan perluasan{" "}
            <strong className="text-navy">malicious damage</strong> atau{" "}
            <strong className="text-navy">tenant's damage</strong> yang bisa menjamin jenis
            kerugian ini. Pastikan Anda mendiskusikan kebutuhan spesifik ini saat konsultasi.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            4. Tamu yang Cedera di Area Properti — Risiko Liability
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Ini adalah skenario yang tidak pernah ada dalam rencana bisnis, tapi bisa terjadi
            kapan saja: tamu tergelincir di tepi kolam renang yang licin, anak-anak terjatuh
            dari balkon tanpa pengaman memadai, atau tamu tersengat listrik dari instalasi
            yang tidak standar. Sebagai pemilik properti yang dioperasikan secara komersial,
            Anda bisa dimintai pertanggungjawaban hukum atas insiden-insiden ini.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Biaya tuntutan hukum, biaya pengobatan, dan ganti rugi yang ditetapkan pengadilan
            bisa jauh melampaui nilai properti Anda sendiri. Inilah mengapa{" "}
            <Link
              href="/asuransi-liability/public-liability"
              className="text-gold font-semibold hover:underline"
            >
              asuransi Public Liability
            </Link>{" "}
            bukan sekadar pelengkap — ini adalah kebutuhan dasar bagi setiap pemilik
            properti wisata.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            5. Kehilangan Pendapatan Selama Perbaikan — Business Interruption
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Bayangkan skenario ini: kebakaran kecil di dapur vila Anda merusak satu kamar
            dan area makan. Perbaikan membutuhkan waktu dua bulan. Selama dua bulan itu,
            vila tidak bisa menerima tamu — sementara cicilan KPR, gaji cleaning service,
            langganan listrik dan air, serta biaya pemeliharaan tetap berjalan. Jika vila
            Anda menghasilkan Rp 5 juta per bulan dari sewa, dua bulan penutupan berarti
            kerugian Rp 10 juta yang tidak bisa dikembalikan hanya dengan asuransi properti
            biasa. Di sinilah{" "}
            <strong className="text-navy">Business Interruption (BI) coverage</strong>{" "}
            menjadi sangat relevan.
          </p>

          {/* CTA INLINE */}
          <div className="bg-navy rounded-[18px] p-7 mb-10 text-center">
            <div className="font-heading text-white text-[1.2rem] font-bold mb-2">
              Ingin Tahu Risiko Spesifik Vila Anda?
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-[420px] mx-auto">
              Konsultasi gratis dengan Pak Rio — analisis risiko berdasarkan lokasi,
              material bangunan, fasilitas, dan platform sewa yang Anda gunakan.
            </p>
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all"
            >
              💬 Konsultasi Gratis via WhatsApp
            </a>
          </div>

          {/* SECTION 3 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            3. Produk Asuransi yang Relevan untuk Vila & Homestay di Yogyakarta
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Tidak ada produk asuransi yang "satu ukuran untuk semua" ketika berbicara
            tentang properti wisata. Pilihan tergantung pada skala, lokasi, fasilitas,
            dan nilai properti Anda. Berikut peta produk yang perlu Anda pahami:
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            A. Asuransi Kebakaran dengan Endorsement Komersial
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Ini adalah titik masuk yang paling terjangkau. Asuransi kebakaran standar
            menjamin risiko{" "}
            <strong className="text-navy">FLEXAS</strong> — Fire, Lightning, Explosion,
            Aircraft impact, dan Smoke. Tapi untuk vila dan homestay, Anda memerlukan
            <strong className="text-navy"> endorsement penggunaan komersial</strong> yang
            memastikan polis tetap valid meskipun properti dioperasikan sebagai usaha
            sewa harian.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Pelajari lebih lengkap di halaman{" "}
            <Link
              href="/asuransi-properti/kebakaran"
              className="text-gold font-semibold hover:underline"
            >
              asuransi kebakaran untuk properti komersial di Yogyakarta
            </Link>
            , termasuk cara menentukan nilai pertanggungan yang tepat untuk bangunan vila.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            B. Property All Risk (PAR) — Pilihan Terbaik untuk Vila Skala Menengah ke Atas
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            PAR adalah standar perlindungan tertinggi untuk properti. Dengan prinsip "semua
            risiko dijamin kecuali yang dikecualikan" (<em>all risks except</em>), PAR
            memberikan ketenangan pikiran yang jauh lebih luas dibanding asuransi kebakaran
            biasa. Untuk vila dengan kolam renang, furnitur premium, peralatan dapur lengkap,
            dan nilai keseluruhan di atas Rp 500 juta — PAR adalah pilihan yang sangat
            direkomendasikan.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Baca panduan lengkap tentang{" "}
            <Link
              href="/asuransi-properti/property-all-risk"
              className="text-gold font-semibold hover:underline"
            >
              Property All Risk (PAR) di Yogyakarta
            </Link>{" "}
            dan bagaimana produk ini berbeda dari asuransi kebakaran biasa.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            C. Perluasan Banjir & Gempa — Wajib untuk DIY
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Baik PAR maupun asuransi kebakaran standar tidak otomatis menjamin banjir dan
            gempa bumi. Kedua risiko ini harus ditambahkan sebagai perluasan (endorsement)
            secara eksplisit. Untuk properti di Yogyakarta — yang berada di zona seismik
            aktif dan dalam bayang-bayang Gunung Merapi — kedua perluasan ini adalah{" "}
            <strong className="text-navy">keharusan mutlak</strong>, bukan pilihan opsional.
          </p>
          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">💡</span>
              <div>
                <div className="font-semibold text-navy mb-1">Rekomendasi Konsultan</div>
                <p className="text-sm leading-[1.75] text-[#475569]">
                  Vila di Kaliurang, Pakem, dan kawasan lereng Merapi wajib menyertakan
                  perluasan letusan gunung berapi dan lahar dingin, bukan hanya gempa
                  tektonik biasa. Biaya <em>surcharge</em> tambahan untuk perluasan vulkanik ini
                  relatif kecil dibanding potensi kerugian erupsi. Pelajari lebih lanjut
                  tentang{" "}
                  <Link
                    href="/asuransi-properti/banjir-gempa"
                    className="text-gold font-semibold hover:underline"
                  >
                    perluasan asuransi banjir dan gempa khusus Yogyakarta
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            D. Public Liability — Perlindungan dari Tuntutan Tamu
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Public Liability melindungi Anda dari klaim hukum pihak ketiga — dalam konteks
            vila, pihak ketiga adalah tamu Anda — akibat cedera atau kerusakan properti
            yang terjadi di area bisnis Anda. Polis ini menanggung biaya hukum, biaya
            pengobatan, dan ganti rugi yang diputuskan pengadilan. Bagi pemilik vila dengan
            kolam renang, <em>climbing wall</em>, atau fasilitas outdoor lainnya, Public Liability
            adalah lapisan proteksi yang tidak boleh dilewatkan.
          </p>

          {/* ── NEW SECTION: PERBANDINGAN PRODUK ──────────────────────── */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            4. Perbandingan Produk: Kebakaran vs Property All Risk untuk Vila
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Banyak pemilik vila yang bingung memilih antara asuransi kebakaran biasa dengan
            perluasan, atau langsung mengambil Property All Risk. Tabel berikut membantu Anda
            membuat keputusan yang tepat berdasarkan skala dan kebutuhan properti Anda:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Aspek</th>
                  <th className="text-left px-4 py-3 font-semibold">Kebakaran + Perluasan</th>
                  <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">Property All Risk (PAR)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Prinsip Jaminan", "Named perils (risiko yang disebutkan)", "All risks except (semua kecuali pengecualian)"],
                  ["Cakupan Dasar", "FLEXAS: Kebakaran, Petir, Ledakan, Pesawat, Asap", "Semua kerusakan fisik yang tidak dikecualikan"],
                  ["Banjir & Gempa", "Tambahkan sebagai endorsement terpisah", "Bisa dimasukkan sekaligus dalam satu polis"],
                  ["Kerusakan Struktural Lainnya", "Tidak otomatis dijamin", "Lebih luas, termasuk banyak risiko tak terduga"],
                  ["Nilai Properti Ideal", "Di bawah Rp 500 juta", "Di atas Rp 500 juta"],
                  ["Cocok untuk", "Homestay kecil 1–5 kamar", "Vila mandiri, hotel butik, resort"],
                  ["Premi (perkiraan)", "Lebih rendah", "Lebih tinggi, coverage jauh lebih luas"],
                  ["Kemudahan Klaim", "Harus buktikan risiko yang terjamin", "Lebih mudah — semua dijamin kecuali pengecualian"],
                ].map(([a, b, c], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy">{a}</td>
                    <td className="px-4 py-3 text-[#64748B]">{b}</td>
                    <td className="px-4 py-3 text-green-700 font-medium">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-10">
            <p className="text-sm leading-[1.75] text-[#475569]">
              <strong className="text-navy">💡 Panduan Singkat:</strong> Untuk homestay dengan
              nilai bangunan di bawah Rp 400 juta, asuransi kebakaran dengan endorsement komersial
              + perluasan gempa sudah memadai. Untuk vila dengan kolam renang, furnitur premium,
              dan nilai total di atas Rp 500 juta,{" "}
              <Link href="/asuransi-properti/property-all-risk" className="text-gold font-semibold hover:underline">
                Property All Risk
              </Link>{" "}
              adalah investasi yang lebih bijak.
            </p>
          </div>

          {/* SECTION 5 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            5. Apakah AirCover dari Airbnb Sudah Cukup?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Ini pertanyaan yang sangat sering kami terima dari host Airbnb di Yogyakarta.
            Jawabannya perlu diulas dengan jujur: AirCover adalah program perlindungan dari
            Airbnb yang mencakup kerusakan properti hingga nilai tertentu.
            Ini adalah langkah yang baik dari platform.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Yang perlu diperhatikan, platform lokal seperti Tiket.com, Traveloka Xperience,
            dan Booking.com umumnya <strong className="text-navy">tidak menyediakan proteksi
            properti serupa</strong> bagi host. Artinya, jika pemesanan masuk melalui platform
            selain Airbnb, tidak ada perlindungan dari sisi platform sama sekali.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Namun ada keterbatasan mendasar yang perlu Anda pahami:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="border border-red-600/20 bg-red-600/5 rounded-[14px] p-5">
              <h4 className="font-heading text-red-700 font-bold mb-3">
                ✗ Keterbatasan AirCover
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Tidak menjamin kebakaran, banjir, atau gempa",
                  "Tidak mencakup risiko yang bukan disebabkan tamu",
                  "Tidak ada Business Interruption / BI",
                  "Tidak menjamin Public Liability secara komprehensif",
                  "Proses klaim melalui platform, bukan polis mandiri",
                  "Hanya berlaku saat ada pemesanan aktif via Airbnb",
                  "Tidak berlaku untuk pemesanan via Tiket.com, Traveloka, dll.",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">✗</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-green-600/20 bg-green-600/5 rounded-[14px] p-5">
              <h4 className="font-heading text-green-800 font-bold mb-3">
                ✓ Asuransi Properti Mandiri
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Menjamin kebakaran, banjir, gempa, dan risiko FLEXAS",
                  "Berlaku kapan saja — ada atau tidak ada tamu",
                  "Business Interruption tersedia sebagai perluasan",
                  "Public Liability komprehensif dan terpisah",
                  "Polis resmi berlisensi OJK, klaim terjamin",
                  "Berlaku untuk semua platform dan pemesanan langsung",
                  "Mencakup konstruksi kelas 1, 2, maupun 3",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-green-700 font-bold flex-shrink-0 mt-0.5">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Kesimpulannya: AirCover dan asuransi properti mandiri bukan kompetitor —
            keduanya bisa berjalan berdampingan. AirCover menanggung kerusakan akibat
            tamu untuk pemesanan via Airbnb; asuransi properti mandiri menanggung semua
            risiko lainnya, termasuk bencana alam, kebakaran struktural, dan klaim hukum
            dari tamu via platform manapun.
          </p>

          {/* SECTION 6 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            6. Estimasi Premi Asuransi Vila & Homestay di Yogyakarta
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Premi asuransi untuk vila dan homestay dihitung berdasarkan beberapa variabel
            utama sesuai panduan tarif AAUI (Asosiasi Asuransi Umum Indonesia) yang berlaku.
            Berikut estimasi kasar yang bisa menjadi referensi awal Anda:
          </p>

          <div className="bg-cream border border-black/6 rounded-[14px] p-6 mb-6">
            <div className="font-heading text-navy font-bold text-[1rem] mb-4">
              📊 Ilustrasi Estimasi Premi Asuransi Vila
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  label:
                    "Homestay 3 kamar, bangunan beton (Kelas 1), nilai bangunan Rp 400 juta, + perluasan gempa",
                  premi: "~ Rp 550.000 – Rp 700.000 / tahun",
                },
                {
                  label:
                    "Vila dengan kolam renang, 5 kamar, beton (Kelas 1), nilai bangunan Rp 800 juta, + gempa + banjir + public liability dasar",
                  premi: "~ Rp 1.500.000 – Rp 2.000.000 / tahun",
                },
                {
                  label:
                    "Vila premium Kaliurang, PAR komprehensif, nilai bangunan Rp 1,5 miliar, + vulkanik + BI",
                  premi: "~ Rp 3.500.000 – Rp 5.000.000 / tahun",
                },
                {
                  label:
                    "Homestay bambu/kayu (Kelas 3), nilai bangunan Rp 200 juta, + gempa + angin",
                  premi: "~ Rp 900.000 – Rp 1.200.000 / tahun",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3 border-b border-black/5 last:border-0"
                >
                  <span className="text-sm text-[#475569] leading-snug flex-1">
                    {item.label}
                  </span>
                  <span className="font-heading text-gold font-bold text-[1rem] whitespace-nowrap">
                    {item.premi}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed">
              * Estimasi berdasarkan tarif referensi pasar mengacu panduan AAUI. Premi final
              ditentukan perusahaan asuransi setelah evaluasi risiko. Gunakan{" "}
              <Link
                href="/asuransi-properti#kalkulator"
                className="text-gold hover:underline"
              >
                kalkulator premi
              </Link>{" "}
              atau hubungi kami untuk penawaran lebih akurat.
            </p>
          </div>

          {/* ── NEW: FAKTOR PENENTU PREMI ─────────────────────────────── */}
          <h3 className="font-heading text-[1.15rem] text-navy font-bold mb-3 mt-8">
            Faktor yang Mempengaruhi Besaran Premi Vila Anda
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Faktor</th>
                  <th className="text-left px-4 py-3 font-semibold">Detail</th>
                  <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">Pengaruh pada Premi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kelas Konstruksi", "Kelas 1 (beton), Kelas 2 (semi permanen), Kelas 3 (kayu/bambu)", "Kelas 1 paling rendah; Kelas 3 bisa 4–5× lebih mahal"],
                  ["Nilai Pertanggungan", "Nilai penggantian bangunan + isi (replacement cost)", "Makin tinggi nilai, premi makin besar proporsional"],
                  ["Lokasi / Zona Risiko", "Bantul (Zona 5 gempa), Sleman/Kota/GK/KP (Zona 4)", "Zona 5 premi gempa ~15–20% lebih tinggi dari Zona 4"],
                  ["Perluasan Dipilih", "Gempa, banjir, vulkanik, BI, Public Liability", "Setiap perluasan menambah premi; BI paling signifikan"],
                  ["Deductible / Franchise", "Jumlah tanggungan sendiri per klaim", "Deductible lebih besar = premi lebih rendah"],
                  ["Nilai Isi Bangunan", "Furnitur, elektronik, peralatan operasional vila", "Dihitung terpisah dari nilai bangunan"],
                ].map(([f, d, p], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy">{f}</td>
                    <td className="px-4 py-3 text-[#64748B]">{d}</td>
                    <td className="px-4 py-3 text-[#64748B]">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Jika vila Anda menghasilkan pendapatan Rp 5–20 juta per bulan, premi asuransi
            senilai Rp 1–5 juta per tahun adalah investasi yang sangat rasional — kurang
            dari 5% dari omzet tahunan Anda. Bandingkan dengan risiko kehilangan aset
            senilai ratusan juta hingga miliaran rupiah.
          </p>

          {/* SECTION 7 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            7. Menentukan Nilai Pertanggungan yang Tepat untuk Vila Anda
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Salah satu kesalahan paling umum — dan paling mahal — yang dilakukan pemilik
            vila adalah menetapkan nilai pertanggungan berdasarkan harga beli properti
            atau harga pasar tanah + bangunan. Ini adalah pendekatan yang keliru dan akan
            mengakibatkan <strong className="text-navy">underinsurance</strong>.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Nilai pertanggungan yang benar untuk vila adalah{" "}
            <strong className="text-navy">biaya penggantian (replacement cost)</strong> —
            berapa biaya yang dibutuhkan untuk membangun ulang bangunan tersebut dengan
            spesifikasi yang sama, di lokasi yang sama, dengan harga material dan upah
            konstruksi saat ini. Nilai ini tidak termasuk harga tanah.
          </p>

          {/* ── NEW: PANDUAN HITUNG REPLACEMENT COST ─────────────────── */}
          <div className="bg-cream border border-black/6 rounded-[14px] p-6 mb-6">
            <div className="font-heading text-navy font-bold text-[1rem] mb-4">
              🧮 Cara Hitung Sederhana Replacement Cost Vila
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="bg-gold text-navy text-xs font-bold rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">1</span>
                <div>
                  <div className="font-semibold text-navy text-sm mb-1">Hitung Luas Bangunan Total</div>
                  <p className="text-sm text-[#64748B]">Jumlahkan semua lantai bangunan yang akan diasuransikan (tidak termasuk tanah). Ukur atau ambil dari IMB/PBG.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-gold text-navy text-xs font-bold rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">2</span>
                <div>
                  <div className="font-semibold text-navy text-sm mb-1">Kalikan dengan Biaya Konstruksi per m²</div>
                  <p className="text-sm text-[#64748B]">
                    Estimasi biaya konstruksi Yogyakarta 2025 (berdasarkan referensi pasar lokal):
                  </p>
                  <div className="mt-2 flex flex-col gap-1">
                    {[
                      ["Bangunan standar beton (Kelas 1)", "Rp 4.000.000 – Rp 5.500.000 / m²"],
                      ["Bangunan semi permanen (Kelas 2)", "Rp 2.500.000 – Rp 3.500.000 / m²"],
                      ["Bangunan kayu/bambu artisan (Kelas 3)", "Rp 3.500.000 – Rp 6.000.000 / m²"],
                      ["Vila premium / custom arsitektur", "Rp 6.000.000 – Rp 10.000.000+ / m²"],
                    ].map(([kelas, biaya]) => (
                      <div key={kelas} className="flex justify-between text-xs gap-2 py-1 border-b border-black/5 last:border-0">
                        <span className="text-[#475569]">{kelas}</span>
                        <span className="font-semibold text-navy whitespace-nowrap">{biaya}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-gold text-navy text-xs font-bold rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">3</span>
                <div>
                  <div className="font-semibold text-navy text-sm mb-1">Tambahkan Nilai Isi Bangunan</div>
                  <p className="text-sm text-[#64748B]">Inventarisasi semua furnitur, elektronik (AC, TV, kulkas, water heater), peralatan dapur, linen, dan dekorasi. Untuk vila premium, nilai isi bisa mencapai 30–50% dari nilai bangunan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-gold text-navy text-xs font-bold rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">4</span>
                <div>
                  <div className="font-semibold text-navy text-sm mb-1">Jangan Lupa Fasilitas Outdoor</div>
                  <p className="text-sm text-[#64748B]">Kolam renang, gazebo, taman landscape, pagar, dan area parkir sering tidak dimasukkan. Padahal biaya pembangunan kolam renang saja bisa Rp 100–300 juta.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-gold/10 border border-gold/25 rounded-lg p-3">
              <p className="text-xs text-navy">
                <strong>Contoh:</strong> Vila 200 m² beton standar = 200 × Rp 5.000.000 = Rp 1 miliar nilai bangunan.
                Ditambah isi bangunan Rp 300 juta + kolam renang Rp 200 juta = <strong>total pertanggungan Rp 1,5 miliar.</strong>
              </p>
            </div>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Untuk vila dengan material khusus — bambu artisan, kayu jati, batu alam,
            atau desain arsitektur custom — biaya penggantian bisa jauh lebih tinggi
            dari nilai pasar properti itu sendiri, karena material dan keahlian spesifik
            yang dibutuhkan.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Baca panduan lengkap cara menghitung nilai pertanggungan di artikel kami:{" "}
            <Link
              href="/artikel/cara-menghitung-nilai-asuransi"
              className="text-gold font-semibold hover:underline"
            >
              Cara Menghitung Nilai Asuransi yang Benar (Hindari Underinsurance)
            </Link>
            .
          </p>

          {/* SECTION 8 */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            8. Tips Memilih Asuransi Vila dari Konsultan Lokal Yogyakarta
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Dari pengalaman melayani pemilik vila dan homestay di Yogyakarta selama bertahun-tahun,
            ada beberapa hal yang selalu kami tekankan:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                ico: "📋",
                judul: "Pastikan Status Komersial Polis Anda Jelas",
                isi: "Sebelum membeli, tanyakan secara eksplisit: 'Apakah polis ini valid jika properti saya disewakan secara harian melalui platform seperti Airbnb atau Tiket.com?' Minta jawabannya secara tertulis dalam polis atau endorsement.",
              },
              {
                ico: "🌋",
                judul: "Jangan Skip Perluasan Gempa & Vulkanik",
                isi: "Di Yogyakarta, ini bukan opsional. Terutama untuk vila di kawasan Sleman Utara dan Bantul. Biaya surcharge sangat terjangkau relatif terhadap perlindungan yang diberikan.",
              },
              {
                ico: "🏊",
                judul: "Sertakan Nilai Kolam Renang & Fasilitas Outdoor",
                isi: "Kolam renang, gazebo, taman, playground, dan fasilitas outdoor lainnya sering tidak disertakan dalam nilai pertanggungan. Pastikan semua aset ini masuk dalam polis.",
              },
              {
                ico: "🛡️",
                judul: "Public Liability adalah Keharusan",
                isi: "Jika vila Anda menerima tamu, Public Liability bukan kemewahan — ini adalah perlindungan dasar dari tuntutan hukum yang bisa menghancurkan finansial Anda.",
              },
              {
                ico: "📊",
                judul: "Pertimbangkan Business Interruption",
                isi: "BI coverage sangat relevan jika vila adalah sumber pendapatan utama atau signifikan. Hitung berapa bulan omzet yang Anda butuhkan untuk menutup biaya selama renovasi pasca-klaim.",
              },
              {
                ico: "🔄",
                judul: "Perbarui Nilai Pertanggungan Setiap 2–3 Tahun",
                isi: "Harga material konstruksi naik setiap tahun. Vila yang dibangun 5 tahun lalu mungkin perlu biaya 40–50% lebih mahal untuk dibangun ulang hari ini. Tinjau ulang nilai pertanggungan secara berkala.",
              },
            ].map((t) => (
              <div
                key={t.judul}
                className="bg-cream rounded-[14px] p-5 border border-black/5"
              >
                <div className="text-2xl mb-2">{t.ico}</div>
                <div className="font-heading text-navy font-bold text-[1rem] mb-1">
                  {t.judul}
                </div>
                <p className="text-sm leading-[1.7] text-[#64748B]">{t.isi}</p>
              </div>
            ))}
          </div>

          {/* PENUTUP */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            9. Kesimpulan: Vila Anda adalah Bisnis — Lindungi Seperti Bisnis
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Vila dan homestay di Yogyakarta adalah salah satu aset bisnis paling menjanjikan
            di dekade ini. Pertumbuhan wisatawan, ekosistem platform digital yang matang,
            dan keunikan destinasi DIY menciptakan peluang yang belum pernah ada sebelumnya
            bagi pemilik properti.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Tapi bisnis yang baik selalu disertai manajemen risiko yang baik. Polis asuransi
            yang tepat bukan hanya soal "jaga-jaga" — ini soal memastikan bahwa satu kejadian
            buruk tidak bisa menghapus semua yang sudah Anda bangun. Kebakaran, gempa, tamu
            yang cedera, atau bencana alam tidak bisa dicegah sepenuhnya. Tapi dampak
            finansialnya bisa dikelola — dengan polis yang tepat, nilai pertanggungan yang
            benar, dan konsultan yang berpihak pada Anda.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Hubungi Pak Rio sekarang untuk konsultasi gratis. Kami akan bantu menganalisis
            risiko lokasi vila Anda, merekomendasikan kombinasi produk yang paling efisien,
            dan memastikan setiap rupiah premi yang Anda bayarkan memberikan perlindungan
            yang nyata.
          </p>

          {/* INTERNAL LINKS BOX */}
          <div className="bg-cream border border-black/6 rounded-[18px] p-6 mb-10">
            <div className="font-heading text-navy font-bold text-[1rem] mb-4">
              📚 Halaman &amp; Artikel Terkait
            </div>
            <div className="flex flex-col gap-2">
              {[
                {
                  href: "/asuransi-properti/vila-homestay",
                  label: "Halaman Produk: Asuransi Vila & Homestay Yogyakarta — Paket & Harga",
                },
                {
                  href: "/asuransi-properti",
                  label: "Asuransi Properti Jogja – Panduan Lengkap untuk Semua Jenis Properti",
                },
                {
                  href: "/asuransi-properti/property-all-risk",
                  label: "Property All Risk (PAR) – Proteksi Komprehensif untuk Properti Komersial",
                },
                {
                  href: "/asuransi-properti/kebakaran",
                  label: "Asuransi Kebakaran Rumah, Kos & Ruko di Yogyakarta",
                },
                {
                  href: "/asuransi-properti/banjir-gempa",
                  label: "Perluasan Asuransi Banjir & Gempa Bumi – Khusus Yogyakarta",
                },
                {
                  href: "/asuransi-liability/public-liability",
                  label: "Asuransi Public Liability – Perlindungan dari Tuntutan Tamu",
                },
                {
                  href: "/artikel/cara-menghitung-nilai-asuransi",
                  label: "Cara Menghitung Nilai Pertanggungan Asuransi yang Benar",
                },
                {
                  href: "/artikel/asuransi-rumah-tinggal-jogja",
                  label: "Panduan Asuransi Rumah Tinggal di Yogyakarta",
                },
                {
                  href: "/artikel",
                  label: "Lihat Semua Artikel Edukasi Asuransi →",
                },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-2 text-sm text-navy2 hover:text-gold transition-colors no-underline py-1 border-b border-black/5 last:border-0"
                >
                  <span className="text-gold text-xs">›</span>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── FAQ SECTION ─────────────────────────────────────────────── */}
          <div id="faq">
            <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-2 mt-12 leading-tight">
              10. FAQ — Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-base leading-[1.85] text-[#475569] mb-8">
              Berikut pertanyaan yang paling sering kami terima dari pemilik vila dan
              homestay di Yogyakarta:
            </p>

            <div className="flex flex-col divide-y divide-black/8">
              {[
                {
                  q: "Apakah polis asuransi rumah tinggal biasa bisa digunakan untuk vila yang disewakan harian?",
                  a: (
                    <>
                      Tidak. Polis kebakaran residensial standar umumnya memiliki{" "}
                      <strong className="text-navy">klausul pengecualian penggunaan komersial</strong>.
                      Vila yang terdaftar di Airbnb, Tiket.com, atau platform sewa harian lainnya
                      dianggap properti komersial. Anda memerlukan{" "}
                      <strong className="text-navy">endorsement komersial</strong> atau produk khusus
                      agar polis tetap valid saat klaim. Tanpa ini, klaim kebakaran atau kerusakan
                      bisa ditolak sepenuhnya.
                    </>
                  ),
                },
                {
                  q: "Apa perbedaan 'endorsement' dan 'perluasan' dalam polis asuransi properti?",
                  a: (
                    <>
                      Keduanya merujuk hal serupa: penambahan klausul atau jaminan di luar cakupan
                      polis dasar. <strong className="text-navy">Endorsement</strong> biasanya merujuk
                      pada perubahan atau penambahan spesifik pada polis yang sudah ada (misalnya
                      endorsement penggunaan komersial). <strong className="text-navy">Perluasan</strong>{" "}
                      (rider) merujuk pada penambahan jenis risiko baru seperti banjir, gempa, atau
                      Business Interruption. Keduanya tercantum dalam dokumen polis dan memiliki
                      premi tambahan tersendiri.
                    </>
                  ),
                },
                {
                  q: "Apa itu franchise atau deductible, dan bagaimana pengaruhnya pada klaim vila saya?",
                  a: (
                    <>
                      <strong className="text-navy">Franchise</strong> (atau deductible) adalah jumlah
                      kerugian pertama yang menjadi tanggungan Anda sendiri sebelum asuransi membayar.
                      Misalnya, jika franchise Rp 2 juta dan kerugian Rp 15 juta, asuransi membayar
                      Rp 13 juta. Semakin besar franchise yang Anda pilih, semakin rendah premi yang
                      dibayarkan — karena Anda menanggung sendiri risiko kecil dan asuransi fokus
                      pada kerugian besar.
                    </>
                  ),
                },
                {
                  q: "Berapa estimasi premi untuk vila 3 kamar di Kaliurang dengan kolam renang?",
                  a: (
                    <>
                      Untuk vila beton (Kelas 1) di Kaliurang dengan estimasi nilai bangunan Rp 700 juta
                      dan isi bangunan Rp 200 juta, ditambah perluasan gempa bumi (Zona 4 Sleman) dan
                      perluasan vulkanik, estimasi premi berkisar{" "}
                      <strong className="text-navy">Rp 1.200.000 – Rp 1.800.000 per tahun</strong>.
                      Jika ditambah Public Liability dan Business Interruption, total bisa mencapai
                      Rp 2.500.000 – Rp 3.500.000 per tahun. Gunakan{" "}
                      <Link href="/asuransi-properti#kalkulator" className="text-gold hover:underline">
                        kalkulator premi kami
                      </Link>{" "}
                      untuk estimasi lebih spesifik.
                    </>
                  ),
                },
                {
                  q: "Apakah kerusakan kolam renang akibat gempa bumi bisa diklaim?",
                  a: (
                    <>
                      Ya, <em>jika</em> kolam renang masuk dalam nilai pertanggungan polis Anda dan
                      perluasan gempa bumi sudah ditambahkan. Ini adalah hal yang sering terlewat —
                      banyak pemilik yang mengasuransikan bangunan utama tapi lupa memasukkan kolam
                      renang, gazebo, dan fasilitas outdoor ke dalam nilai pertanggungan. Pastikan
                      semua aset properti terdaftar saat pengajuan polis.
                    </>
                  ),
                },
                {
                  q: "Apakah Business Interruption (BI) wajib untuk semua pemilik vila?",
                  a: (
                    <>
                      Tidak wajib, tapi sangat direkomendasikan jika vila adalah{" "}
                      <strong className="text-navy">sumber penghasilan signifikan</strong> atau utama.
                      BI menjamin penggantian kehilangan omzet selama vila tidak bisa beroperasi
                      akibat klaim yang dijamin polis (misalnya masa renovasi pasca kebakaran).
                      Jika vila hanya menghasilkan Rp 1–2 juta/bulan, BI mungkin belum prioritas.
                      Tapi untuk vila dengan omzet Rp 10 juta+/bulan, BI adalah proteksi arus kas
                      yang krusial.
                    </>
                  ),
                },
                {
                  q: "Berapa lama proses klaim asuransi properti jika vila saya mengalami kebakaran?",
                  a: (
                    <>
                      Prosesnya: lapor dalam 3×24 jam → survei loss adjustor → evaluasi dokumen →
                      persetujuan klaim → pencairan. Untuk klaim kebakaran sederhana (kerusakan
                      parsial), umumnya selesai dalam{" "}
                      <strong className="text-navy">14–30 hari kerja</strong> setelah dokumen lengkap.
                      Klaim besar dengan kerugian di atas ratusan juta bisa memakan 30–60 hari.
                      Pendampingan konsultan independen seperti kami dapat membantu memperlancar
                      dan mempercepat proses ini.
                    </>
                  ),
                },
                {
                  q: "Apakah vila yang dikelola oleh operator/manajemen pihak ketiga tetap bisa diasuransikan?",
                  a: (
                    <>
                      Ya. Polis tetap diterbitkan atas nama{" "}
                      <strong className="text-navy">pemilik properti sebagai tertanggung utama</strong>.
                      Operator atau manajemen properti dapat ditambahkan sebagai tertanggung tambahan
                      (additional insured). Proses dan dokumen yang diperlukan sama seperti polis
                      standar — hubungi kami dengan membawa dokumen kepemilikan dan data properti.
                    </>
                  ),
                },
              ].map((faq, i) => (
                <details key={i} className="group py-1">
                  <summary className="py-4 cursor-pointer font-semibold text-[0.95rem] text-navy flex justify-between items-start list-none gap-4">
                    <span>{faq.q}</span>
                    <span className="text-gold text-xl flex-shrink-0 transition-transform group-open:rotate-45 mt-0.5">
                      +
                    </span>
                  </summary>
                  <div className="text-base leading-[1.78] text-[#64748B] pb-5 pr-8">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* LINK KE HALAMAN PRODUK */}
          <div className="bg-navy/5 border border-navy/10 rounded-[14px] p-5 mt-10 mb-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-2xl">🌿</span>
              <div className="flex-1">
                <div className="font-heading text-navy font-bold text-[1rem] mb-1">
                  Siap Melindungi Vila atau Homestay Anda?
                </div>
                <p className="text-sm text-[#64748B]">
                  Kunjungi halaman produk khusus kami untuk melihat paket, harga, dan detail perlindungan.
                </p>
              </div>
              <Link
                href="/asuransi-properti/vila-homestay"
                className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all whitespace-nowrap"
              >
                Lihat Paket Produk →
              </Link>
            </div>
          </div>

        </div>
      </article>

      {/* ── CTA PENUTUP ───────────────────────────────────────────────────── */}
      <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-xs font-bold tracking-[2.5px] uppercase text-gold2 mb-3">
            Konsultasi Gratis
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
            Lindungi Vila &amp; Homestay Anda
            <br />
            Sebelum Musibah Datang
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-[480px] mx-auto mb-8">
            Konsultasi gratis dengan Pak Rio — konsultan asuransi kerugian lokal di Yogyakarta.
            Analisis risiko lokasi, rekomendasi produk, dan pendampingan klaim. Semua tanpa biaya.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 no-underline hover:opacity-90 transition-all"
            >
              💬 Chat WhatsApp Sekarang
            </a>
            <a
              href={`mailto:${KONTAK.email}`}
              className="bg-white/8 border border-white/20 text-white px-7 py-3 rounded-lg font-medium text-sm no-underline hover:bg-white/12 transition-all"
            >
              ✉️ {KONTAK.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
