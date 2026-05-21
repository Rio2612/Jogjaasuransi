import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Rumah Tinggal Jogja: Panduan Lengkap & Simulasi Premi untuk Pemilik Rumah di Yogyakarta",
  description:
    "Panduan lengkap asuransi rumah tinggal di Yogyakarta. Risiko nyata kawasan Sleman, Bantul, Godean; simulasi premi, cara klaim, tips underinsurance, perluasan gempa Merapi, dan FAQ. Konsultasi gratis.",
  keywords:
    "asuransi rumah tinggal jogja, asuransi rumah yogyakarta, asuransi kebakaran rumah jogja, proteksi hunian yogyakarta, asuransi properti rumah jogja, premi asuransi rumah yogyakarta, asuransi rumah sleman, asuransi rumah bantul, perluasan gempa rumah jogja, asuransi banjir rumah yogyakarta, nilai pertanggungan rumah jogja",
  alternates: { canonical: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja" },
  openGraph: {
    title: "Asuransi Rumah Tinggal Jogja: Panduan Lengkap & Simulasi Premi",
    description:
      "Risiko nyata hunian di DIY, simulasi premi, cara klaim, dan FAQ asuransi rumah tinggal Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja",
    type: "article",
  },
};

const schemaArtikel = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Asuransi Rumah Tinggal Jogja: Panduan Lengkap & Simulasi Premi untuk Pemilik Rumah di Yogyakarta",
  description:
    "Panduan lengkap asuransi rumah tinggal di Yogyakarta untuk pemilik hunian di DIY.",
  url: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja",
  datePublished: "2025-01-01",
  dateModified: "2025-06-01",
  author: { "@type": "Person", name: "Rio MD" },
  publisher: {
    "@type": "Organization",
    name: "Asuransi Jogja",
    url: "https://asuransijogja.biz.id",
  },
  mainEntityOfPage: "https://asuransijogja.biz.id/artikel/asuransi-rumah-tinggal-jogja",
};

const faqRumah = [
  {
    q: "Apakah rumah yang masih KPR wajib diasuransikan?",
    a: "Ya, hampir semua bank mensyaratkan asuransi kebakaran sebagai bagian dari fasilitas KPR. Namun perlu diperhatikan: asuransi yang disediakan bank sering kali hanya mencakup nilai kredit outstanding (sisa utang), bukan nilai penggantian penuh bangunan. Artinya ada gap yang perlu Anda tutup dengan polis tambahan mandiri.",
  },
  {
    q: "Berapa estimasi premi asuransi untuk rumah tipe 60 di kawasan Godean, Sleman?",
    a: "Dengan asumsi beton Kelas 1, nilai bangunan Rp 450 juta, + perluasan gempa (Zona 4 – Sleman): premi kebakaran sekitar Rp 421.000/tahun, premi gempa sekitar Rp 604.000/tahun (polis terpisah), total ±Rp 1.025.000 + biaya admin. Gunakan kalkulator premi kami untuk angka yang lebih akurat.",
  },
  {
    q: "Apakah rumah di kawasan Bantul lebih mahal preminya dibanding Sleman?",
    a: "Untuk premi kebakaran standar, tidak ada perbedaan tarif berdasarkan kabupaten. Namun untuk perluasan gempa bumi, Bantul masuk Zona 5 (tarif lebih tinggi) sedangkan Sleman, Kota Yogyakarta, dan Gunungkidul masuk Zona 4. Selisihnya sekitar 25–35% untuk komponen premi gempa saja.",
  },
  {
    q: "Apakah isi rumah seperti furniture dan elektronik bisa ikut diasuransikan?",
    a: "Ya, nilai isi rumah (contents) bisa diasuransikan dengan nilai pertanggungan terpisah dari bangunan. Isi yang bisa diasuransikan antara lain: furniture, peralatan elektronik, pakaian, hingga barang berharga tertentu. Beberapa produk memerlukan daftar inventaris khusus untuk barang bernilai tinggi seperti perhiasan dan karya seni.",
  },
  {
    q: "Apakah kerusakan akibat angin kencang dan puting beliung dijamin?",
    a: "Kerusakan akibat angin topan, badai, dan puting beliung tidak termasuk dalam jaminan kebakaran standar (FLEXAS). Risiko ini perlu ditambahkan sebagai perluasan tersendiri. Untuk kawasan Bantul dan Kulon Progo yang beberapa kali dilanda puting beliung, perluasan angin topan sangat direkomendasikan.",
  },
  {
    q: "Bagaimana jika bangunan belum memiliki sertifikat IMB/PBG?",
    a: "Bangunan tanpa IMB/PBG tetap bisa diasuransikan dalam banyak kasus. Namun saat klaim, legalitas bangunan akan diperiksa. Risiko penolakan klaim lebih tinggi jika bangunan terbukti melanggar aturan zonasi atau tata ruang. Sangat disarankan melengkapi dokumen legal bangunan sebelum atau bersamaan dengan pembelian asuransi.",
  },
  {
    q: "Berapa lama polis asuransi rumah berlaku dan bagaimana cara memperpanjangnya?",
    a: "Polis asuransi kebakaran standar umumnya berlaku 1 tahun dan dapat diperpanjang setiap tahun. Beberapa produk menawarkan masa pertanggungan jangka panjang (3–5 tahun) dengan premi dibayar di muka atau dicicil. Konsultan kami akan mengingatkan perpanjangan sebelum jatuh tempo sehingga tidak ada jeda perlindungan.",
  },
  {
    q: "Apakah ada perbedaan asuransi untuk rumah tinggal biasa vs rumah yang dijadikan usaha (warung, kantor kecil)?",
    a: "Ada perbedaan yang signifikan. Rumah yang sebagian atau seluruhnya digunakan untuk kegiatan komersial diklasifikasikan berbeda dan memerlukan endorsement atau produk yang berbeda dari asuransi hunian murni. Menggunakan polis hunian biasa untuk properti semi-komersial berisiko penolakan klaim. Konsultasikan status properti Anda kepada kami.",
  },
  {
    q: "Apa yang harus dilakukan segera setelah rumah terkena gempa?",
    a: "Prioritas pertama: pastikan keselamatan seluruh penghuni dan jauhi bangunan yang berisiko runtuh. Hubungi konsultan atau perusahaan asuransi dalam 3×24 jam, dokumentasikan seluruh kerusakan dengan foto dan video sebelum ada perbaikan darurat, koordinasikan dengan RT/RW dan BPBD setempat untuk data kejadian resmi, dan simpan semua kuitansi biaya penanganan darurat.",
  },
];

export default function ArtikelAsuransiRumahPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }}
      />

      {/* HERO */}
      <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 15% 55%, rgba(200,150,62,0.11) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gold/80 mb-4 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline text-white/50">
              Beranda
            </Link>
            <span className="text-gold/40">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline text-white/50">
              Artikel
            </Link>
            <span className="text-gold/40">›</span>
            <span className="text-gold2 font-semibold">Asuransi Rumah Tinggal Jogja</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            <span className="text-gold text-[0.5rem]">◆</span>
            Properti · Panduan Pemilik Rumah
          </div>

          <h1 className="font-heading text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.18] mb-5">
            Asuransi Rumah Tinggal Jogja:{" "}
            <em className="not-italic text-gold">
              Panduan Lengkap & Simulasi Premi
            </em>{" "}
            untuk Pemilik Rumah di Yogyakarta
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>✍️ Rio MD – Konsultan Asuransi Kerugian</span>
            <span>·</span>
            <span>⏱ 13 menit baca</span>
          </div>
        </div>
      </section>

      {/* ARTIKEL BODY */}
      <article className="py-16 px-[5vw] bg-white">
        <div className="max-w-[780px] mx-auto">

          {/* INTRO */}
          <p className="text-lg leading-[1.85] text-[#475569] mb-6">
            Ada sebuah fakta yang jarang dibicarakan secara terbuka:{" "}
            <strong className="text-navy">sebagian besar pemilik rumah di Indonesia tidak memiliki
            asuransi untuk tempat tinggal mereka.</strong> Padahal rumah adalah aset terbesar yang
            dimiliki kebanyakan keluarga — jauh melampaui nilai tabungan, kendaraan, atau investasi
            lainnya. Di Yogyakarta, situasi ini bahkan lebih kritis mengingat kondisi geografis kota
            yang menyimpan risiko tersembunyi di balik keindahannya.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Rumah di kawasan{" "}
            <strong className="text-navy">Godean, Mlati, atau Sleman</strong> mungkin terasa aman
            dari banjir — tapi gempa bumi adalah ancaman yang tidak pandang bulu di seluruh DIY.
            Rumah di <strong className="text-navy">Bantul Selatan</strong> yang terkenal tenang bisa
            saja terdampak puting beliung atau gempa tektonik dari patahan Opak. Sementara rumah di{" "}
            <strong className="text-navy">kawasan padat seperti Umbulharjo atau Kotagede</strong> menghadapi
            risiko kebakaran yang jauh lebih tinggi karena kepadatan bangunan dan instalasi listrik
            yang sudah tua.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Yogyakarta memang kota yang nyaman dan bersahabat. Tapi justru karena itulah, banyak
            pemilik rumah yang terlena — merasa bahwa musibah hanya terjadi di tempat lain. Padahal
            gempa 27 Mei 2006 membuktikan sebaliknya: dalam waktu kurang dari satu menit, lebih dari
            150.000 bangunan rusak dan ribuan keluarga kehilangan tempat tinggal tanpa kompensasi
            apapun karena tidak memiliki asuransi.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Artikel ini hadir untuk membantu Anda — pemilik rumah di Yogyakarta — memahami secara
            tuntas bagaimana asuransi rumah tinggal bekerja, produk apa yang paling sesuai berdasarkan
            lokasi dan kondisi rumah Anda, simulasi berapa biaya preminya, dan apa yang harus dilakukan
            saat klaim. Di bagian akhir, tersedia pula <strong className="text-navy">kalkulator premi
            interaktif</strong> dan section FAQ yang menjawab pertanyaan paling umum dari pemilik
            rumah di Jogja.
          </p>

          {/* SECTION 1 — RISIKO PER KAWASAN */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Peta Risiko Rumah Tinggal di Yogyakarta: Berbeda per Kecamatan
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Tidak semua kawasan di Yogyakarta menghadapi risiko yang sama. Lokasi rumah Anda sangat
            menentukan jenis perlindungan yang paling relevan. Berikut peta risiko per kawasan utama
            yang perlu dipahami setiap pemilik rumah di DIY:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Kawasan / Kecamatan</th>
                  <th className="text-left px-4 py-3 font-semibold">Risiko Dominan</th>
                  <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">Rekomendasi Perluasan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Godean, Mlati, Gamping (Sleman Barat)", "Gempa, banjir musiman", "Gempa (Zona 4) + Banjir"],
                  ["Depok, Ngaglik, Ngemplak (Sleman Timur)", "Gempa, kebakaran kawasan berkembang", "Gempa (Zona 4) wajib"],
                  ["Pakem, Turi, Cangkringan (Lereng Merapi)", "Gempa, erupsi Merapi, lahar dingin", "Gempa + Vulkanik (prioritas)"],
                  ["Bantul Kota, Sewon, Kasihan", "Gempa Zona 5 (lebih tinggi), banjir", "Gempa Zona 5 + Banjir"],
                  ["Parangtritis, Sanden (Bantul Selatan)", "Gempa, angin pantai, tsunami (potensi)", "Gempa Zona 5 + Angin Topan"],
                  ["Umbulharjo, Kotagede (Kota Yogya)", "Kebakaran kawasan padat, banjir lokal", "Kebakaran + Banjir"],
                  ["Wates, Sentolo (Kulon Progo)", "Gempa, banjir Kali Progo, puting beliung", "Gempa (Zona 4) + Angin + Banjir"],
                  ["Wonosari, Playen (Gunungkidul)", "Gempa, angin kencang, kekeringan", "Gempa (Zona 4) + Angin Topan"],
                ].map(([k, r, p], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy text-xs">{k}</td>
                    <td className="px-4 py-3 text-[#64748B] text-xs">{r}</td>
                    <td className="px-4 py-3 text-gold font-medium text-xs">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Perhatikan perbedaan zona gempa antara Bantul (Zona 5) dan daerah lainnya (Zona 4). Ini
            mencerminkan kedekatan Bantul dengan jalur patahan Opak — sumber gempa destruktif 2006.
            Pelajari lebih lanjut di halaman{" "}
            <Link href="/asuransi-properti/banjir-gempa" className="text-gold font-semibold hover:underline">
              perluasan asuransi banjir dan gempa khusus Yogyakarta
            </Link>
            , termasuk perbedaan tarif antara Zona 4 dan Zona 5.
          </p>

          {/* SECTION 2 — RISIKO NYATA */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            5 Risiko Nyata yang Mengancam Rumah Tinggal di Yogyakarta
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Yogyakarta bukan sekadar kota budaya yang tenang. Di balik suasananya yang nyaman, ada
            sejumlah risiko konkret yang perlu disadari setiap pemilik rumah:
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              {
                ico: "🔥",
                judul: "Kebakaran — Ancaman Nomor Satu Hunian di Perkotaan",
                isi: "Data Dinas Pemadam Kebakaran DIY mencatat bahwa korsleting listrik adalah penyebab utama kebakaran rumah tinggal di Yogyakarta. Instalasi listrik lama yang belum pernah diaudit, ditambah penggunaan perangkat elektronik yang terus bertambah (AC, water heater, kulkas baru), menciptakan kombinasi yang berbahaya. Satu insiden kebakaran bisa memusnahkan aset senilai ratusan juta dalam hitungan menit — lebih cepat dari waktu yang dibutuhkan pemadam untuk tiba.",
              },
              {
                ico: "🌋",
                judul: "Gempa Bumi — Pelajaran Pahit 2006 yang Belum Terlupakan",
                isi: "Gempa Yogyakarta 27 Mei 2006 berkekuatan M5,9 menewaskan lebih dari 5.700 orang dan merusak ratusan ribu rumah. Sebagian besar pemilik rumah yang kehilangan tempat tinggal tidak mendapat kompensasi apapun karena tidak memiliki asuransi. Yogyakarta hingga kini masih termasuk wilayah risiko gempa sangat tinggi, dan para ahli geologi mengingatkan bahwa siklus gempa besar di kawasan ini belum usai.",
              },
              {
                ico: "🌊",
                judul: "Banjir — Bukan Hanya Masalah Bantaran Sungai",
                isi: "Banjir di Yogyakarta tidak hanya menimpa kawasan bantaran Kali Code atau Kali Opak. Penurunan muka tanah akibat pengambilan air berlebih, sistem drainase yang tidak memadai, dan intensitas hujan yang semakin ekstrem membuat banjir genangan kini bisa terjadi di kawasan perumahan baru di Godean, Mlati, atau Ngaglik yang sebelumnya dianggap aman.",
              },
              {
                ico: "💨",
                judul: "Angin Kencang, Puting Beliung & Hujan Es",
                isi: "Cuaca ekstrem semakin sering terjadi di DIY. Bantul dan Kulon Progo beberapa kali dilanda puting beliung yang merusak atap, menumbangkan pohon, dan memecahkan kaca. Angin kencang saat pancaroba bisa merusak genteng, plafon, dan struktur ringan bangunan. Kerusakan akibat angin tidak tercakup dalam asuransi kebakaran standar — perluasan khusus diperlukan.",
              },
              {
                ico: "⚡",
                judul: "Petir — Sumber Kerusakan yang Sering Diremehkan",
                isi: "Sambaran petir langsung maupun tidak langsung bisa merusak instalasi listrik rumah, membakar atap, bahkan memicu kebakaran. Yogyakarta adalah salah satu kota dengan frekuensi petir tertinggi di Jawa, terutama pada musim hujan Oktober–April. Petir yang menyambar area sekitar bangunan juga bisa merusak perangkat elektronik bernilai tinggi melalui jalur kabel listrik.",
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

          {/* SECTION 3 — JENIS ASURANSI */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Jenis Asuransi Rumah Tinggal: Pilih yang Tepat Sesuai Kondisi Anda
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Ada beberapa produk asuransi yang relevan untuk hunian di Yogyakarta, masing-masing
            dengan lingkup perlindungan dan kisaran premi yang berbeda:
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            1. Asuransi Kebakaran Rumah Tinggal (Fire Insurance)
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Ini adalah produk paling dasar dan paling banyak digunakan. Asuransi kebakaran standar
            menjamin kerugian akibat risiko{" "}
            <strong className="text-navy">FLEXAS</strong>: kebakaran (Fire), petir (Lightning),
            ledakan (Explosion), kejatuhan pesawat (Aircraft impact), dan asap (Smoke). Tarif premi
            ditentukan berdasarkan <strong className="text-navy">kelas konstruksi bangunan</strong>:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-[10px] font-semibold">Kelas Konstruksi</th>
                  <th className="text-left px-4 py-3 font-semibold">Spesifikasi Bangunan</th>
                  <th className="text-left px-4 py-3 rounded-tr-[10px] font-semibold">Rate Premi (per Rp 1 juta)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kelas 1", "Dinding bata/beton, atap beton/genteng keramik, rangka baja/beton", "± Rp 0,76 / tahun"],
                  ["Kelas 2", "Semi-permanen, rangka kayu dengan penutup bata/seng", "± Rp 0,84 / tahun"],
                  ["Kelas 3", "Konstruksi kayu, bambu, atau material mudah terbakar", "± Rp 4,20 / tahun"],
                ].map(([k, s, r], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-navy">{k}</td>
                    <td className="px-4 py-3 text-[#64748B]">{s}</td>
                    <td className="px-4 py-3 text-gold font-bold">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Yang diasuransikan bisa berupa bangunan saja, atau bangunan beserta isi rumah (perabot,
            elektronik, pakaian, dan barang berharga). Untuk hunian di Yogyakarta, mengasuransikan
            keduanya memberikan proteksi yang jauh lebih menyeluruh. Pelajari lebih lengkap di halaman{" "}
            <Link href="/asuransi-properti/kebakaran" className="text-gold font-semibold hover:underline">
              asuransi kebakaran rumah tinggal di Yogyakarta
            </Link>.
          </p>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            2. Perluasan Gempa & Banjir — Keharusan Mutlak untuk Rumah di DIY
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Asuransi kebakaran standar tidak otomatis menjamin banjir dan gempa bumi. Keduanya
            harus ditambahkan sebagai perluasan secara eksplisit. Di Yogyakarta, ada{" "}
            <strong className="text-navy">dua zona tarif gempa</strong> yang perlu dipahami:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-50 border border-orange-200 rounded-[14px] p-5">
              <div className="font-heading text-orange-800 font-bold text-sm mb-2">🌋 Zona 4 — Sleman, Kulon Progo, Gunungkidul, Kota Yogyakarta</div>
              <p className="text-xs leading-relaxed text-[#64748B]">
                Tarif gempa rumah tinggal: <strong className="text-orange-700">±0,135‰</strong> dari
                nilai pertanggungan per tahun. Berlaku untuk rumah di Godean, Mlati, Ngaglik, Depok,
                Ngemplak, Wonosari, dan Kota Yogyakarta.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-[14px] p-5">
              <div className="font-heading text-red-800 font-bold text-sm mb-2">🌋 Zona 5 — Bantul (risiko lebih tinggi)</div>
              <p className="text-xs leading-relaxed text-[#64748B]">
                Tarif gempa rumah tinggal: <strong className="text-red-700">±0,160‰</strong> dari
                nilai pertanggungan per tahun. Berlaku untuk seluruh rumah di Kabupaten Bantul —
                Sewon, Kasihan, Bantul kota, Parangtritis, Imogiri.
              </p>
            </div>
          </div>

          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">💡</span>
              <div>
                <div className="font-semibold text-navy mb-1">Rekomendasi Konsultan</div>
                <p className="text-sm leading-[1.75] text-[#475569]">
                  Untuk semua rumah tinggal di Yogyakarta, selalu sertakan perluasan gempa bumi.
                  Biaya tambahan premi untuk perluasan gempa sangat terjangkau — umumnya hanya
                  sekitar 15–20% tambahan dari premi dasar kebakaran. Untuk kawasan lereng Merapi
                  (Pakem, Turi, Cangkringan), tambahkan juga perluasan letusan gunung berapi dan
                  lahar. Baca panduan lengkap{" "}
                  <Link href="/asuransi-properti/banjir-gempa" className="text-gold font-semibold hover:underline">
                    perluasan asuransi banjir dan gempa untuk properti di Yogyakarta
                  </Link>.
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-heading text-[1.25rem] text-navy font-bold mb-3 mt-8">
            3. Property All Risk (PAR) — Untuk Rumah Mewah & Hunian Premium
          </h3>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Bagi Anda yang memiliki rumah dengan nilai tinggi atau menginginkan ketenangan pikiran
            maksimal,{" "}
            <Link href="/asuransi-properti/property-all-risk" className="text-gold font-semibold hover:underline">
              Property All Risk (PAR)
            </Link>{" "}
            memberikan perlindungan paling luas dengan prinsip{" "}
            <em>"semua risiko dijamin kecuali yang dikecualikan"</em>. PAR cocok untuk rumah mewah,
            vila, atau hunian dengan investasi interior tinggi di kawasan premium Yogyakarta seperti
            Sinduadi, Condongcatur, kompleks perumahan Godean, atau kawasan Seturan. Dengan PAR,
            perluasan gempa dan banjir biasanya sudah termasuk dalam satu paket — tidak perlu polis
            terpisah.
          </p>

          {/* CTA INLINE */}
          <div className="bg-navy rounded-[18px] p-7 mb-10 text-center">
            <div className="font-heading text-white text-[1.2rem] font-bold mb-2">
              Bingung Memilih Produk yang Tepat?
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-[420px] mx-auto">
              Ceritakan kondisi rumah dan lokasi Anda ke Pak Rio. Konsultasi gratis, analisis
              risiko lokasi, dan rekomendasi produk yang jujur — tanpa tekanan untuk membeli.
            </p>
            <a
              href={`https://wa.me/${KONTAK.wa}`}
              className="inline-block bg-[#25D366] text-white px-7 py-3 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-all"
            >
              💬 Konsultasi Gratis via WhatsApp
            </a>
          </div>

          {/* SECTION 4 — SIMULASI PREMI */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Simulasi Premi Asuransi Rumah Tinggal di Yogyakarta
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Berikut simulasi perhitungan premi untuk berbagai skenario rumah tinggal nyata di
            Yogyakarta. Semua contoh menggunakan konstruksi{" "}
            <strong className="text-navy">Kelas 1 (beton/bata)</strong> yang paling umum:
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-3 py-3 rounded-tl-[10px] font-semibold text-xs">Skenario Rumah</th>
                  <th className="text-left px-3 py-3 font-semibold text-xs">Nilai Bangunan</th>
                  <th className="text-left px-3 py-3 font-semibold text-xs">Premi Kebakaran/Thn</th>
                  <th className="text-left px-3 py-3 font-semibold text-xs">+ Premi Gempa/Thn</th>
                  <th className="text-left px-3 py-3 rounded-tr-[10px] font-semibold text-xs">Total Estimasi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tipe 36/72, Sleman (Zona 4)", "Rp 250 juta", "Rp 191.000", "Rp 337.000", "~Rp 528.000 + admin"],
                  ["Tipe 60/120, Godean/Mlati, Sleman (Zona 4)", "Rp 450 juta", "Rp 344.000", "Rp 607.000", "~Rp 951.000 + admin"],
                  ["Tipe 80, Condongcatur, Sleman (Zona 4)", "Rp 600 juta", "Rp 458.000", "Rp 810.000", "~Rp 1.268.000 + admin"],
                  ["Tipe 60/120, Bantul Kota (Zona 5)", "Rp 450 juta", "Rp 344.000", "Rp 720.000", "~Rp 1.064.000 + admin"],
                  ["Tipe 100, kawasan Bantul Selatan (Zona 5)", "Rp 750 juta", "Rp 573.000", "Rp 1.200.000", "~Rp 1.773.000 + admin"],
                  ["Rumah mewah/villa, PAR komprehensif, Sleman", "Rp 1,2 miliar", "Sudah termasuk PAR", "Sudah di PAR", "~Rp 2,2–3,0 juta"],
                  ["Tipe 45 semi-permanen (Kelas 2), Kota Yogya", "Rp 180 juta", "Rp 151.000", "–*", "~Rp 151.000 + admin"],
                ].map(([s, n, kb, gm, tot], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="px-3 py-3 text-navy font-medium text-xs">{s}</td>
                    <td className="px-3 py-3 text-[#64748B] text-xs">{n}</td>
                    <td className="px-3 py-3 text-[#64748B] text-xs">{kb}</td>
                    <td className="px-3 py-3 text-[#64748B] text-xs">{gm}</td>
                    <td className="px-3 py-3 text-gold font-bold text-xs">{tot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
            * Kelas 2 (semi-permanen) tidak memenuhi syarat untuk perluasan gempa bumi standard.
            Biaya administrasi polis (Rp 30.000–40.000 per polis) belum termasuk. Premi gempa
            diterbitkan sebagai polis terpisah dari polis kebakaran. Angka adalah estimasi —
            premi final ditentukan perusahaan asuransi setelah evaluasi. Gunakan{" "}
            <Link href="/asuransi-properti#kalkulator" className="text-gold hover:underline">
              kalkulator premi kami
            </Link>{" "}
            untuk estimasi yang lebih akurat.
          </p>

          {/* KALKULATOR CTA BLOCK */}
          <div className="bg-gold/8 border-2 border-gold/30 rounded-[18px] p-6 mb-10 flex flex-col sm:flex-row gap-5 items-center">
            <div className="text-5xl flex-shrink-0">🧮</div>
            <div className="flex-1">
              <div className="font-heading text-navy font-bold text-[1.1rem] mb-1">
                Hitung Premi Rumah Anda Secara Langsung
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-3">
                Kalkulator premi kami memungkinkan Anda memasukkan jenis properti (rumah tinggal),
                kelas konstruksi, nilai bangunan, nilai perabotan, dan memilih perluasan banjir
                atau gempa bumi sesuai wilayah. Hasilnya langsung muncul — termasuk pemisahan
                antara polis kebakaran dan polis gempa bumi.
              </p>
              <Link
                href="/asuransi-properti#kalkulator"
                className="inline-block bg-gold text-navy px-6 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                Buka Kalkulator Premi →
              </Link>
            </div>
          </div>

          {/* SECTION 5 — DIJAMIN & TIDAK */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Apa Saja yang Dijamin dan Tidak Dijamin Asuransi Rumah?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Salah satu hal yang paling penting — dan sering tidak dijelaskan secara lengkap oleh
            agen — adalah klausul pengecualian dalam polis. Berikut gambaran umum yang perlu Anda
            ketahui sebelum membeli:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="border border-green-600/20 bg-green-600/5 rounded-[14px] p-5">
              <h4 className="font-heading text-green-800 font-bold mb-3 flex items-center gap-2">
                <span>✓</span> Umumnya Dijamin
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Kebakaran karena korsleting listrik",
                  "Sambaran petir langsung",
                  "Ledakan tabung gas atau mesin",
                  "Kejatuhan pesawat atau benda lain",
                  "Kerusakan akibat asap",
                  "Banjir (jika perluasan ditambahkan)",
                  "Gempa bumi (jika perluasan ditambahkan)",
                  "Angin topan / puting beliung (dengan perluasan)",
                  "Letusan gunung berapi (dengan perluasan)",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-green-700 font-bold flex-shrink-0 mt-0.5">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-600/20 bg-red-600/5 rounded-[14px] p-5">
              <h4 className="font-heading text-red-700 font-bold mb-3 flex items-center gap-2">
                <span>✗</span> Umumnya Tidak Dijamin
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Banjir dan gempa (tanpa perluasan)",
                  "Penyusutan dan kerusakan akibat usia bangunan",
                  "Kerusakan karena rayap, tikus, atau hama",
                  "Kerusakan disengaja oleh pemilik",
                  "Kehilangan perhiasan & uang tunai",
                  "Biaya sewa selama renovasi pasca-klaim",
                  "Perang, terorisme, dan huru-hara",
                  "Kerusakan karena pemeliharaan diabaikan",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                    <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">✗</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gold/8 border border-gold/25 rounded-[14px] p-5 mb-10">
            <p className="text-sm leading-[1.75] text-[#475569]">
              <strong className="text-navy">Penting:</strong> Beberapa produk menawarkan perluasan
              tambahan seperti jaminan barang berharga (jewellery & valuables), biaya sewa sementara
              selama perbaikan (alternative accommodation), atau{" "}
              <strong className="text-navy">tanggung jawab hukum kepada pihak ketiga (third
              party liability)</strong> jika kerusakan bangunan Anda merugikan tetangga. Diskusikan
              kebutuhan spesifik Anda dengan konsultan untuk mendapat polis yang benar-benar sesuai.
            </p>
          </div>

          {/* SECTION 6 — NILAI PERTANGGUNGAN */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Cara Menentukan Nilai Pertanggungan yang Tepat — Jangan Underinsurance
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Satu kesalahan yang paling sering terjadi dan paling mahal adalah menetapkan nilai
            pertanggungan terlalu rendah demi menghemat premi. Dalam dunia asuransi, ini disebut{" "}
            <strong className="text-navy">underinsurance</strong>, dan konsekuensinya bisa sangat
            merugikan saat klaim terjadi.
          </p>

          <div className="bg-navy rounded-[14px] p-5 mb-6 text-white">
            <div className="font-heading text-gold text-sm font-semibold mb-2">
              📐 Ilustrasi Dampak Underinsurance — Kasus Nyata
            </div>
            <p className="text-xs leading-relaxed text-white/80 mb-2">
              Bu Ratna memiliki rumah tipe 70 di Godean, Sleman dengan biaya penggantian bangunan
              Rp 600 juta. Untuk menghemat premi, ia mengasuransikan hanya Rp 300 juta (50%).
            </p>
            <p className="text-xs leading-relaxed text-white/80 mb-2">
              Suatu malam terjadi kebakaran yang merusak dapur dan ruang makan — kerugian nyata
              Rp 150 juta.
            </p>
            <p className="text-xs leading-relaxed text-gold font-semibold">
              Ganti rugi yang diterima = (300/600) × Rp 150 juta ={" "}
              <span className="text-red-400">hanya Rp 75 juta!</span>
              {" "}Padahal kerugian Rp 150 juta. Selisih Rp 75 juta harus ditanggung sendiri.
            </p>
          </div>

          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Nilai pertanggungan yang benar adalah{" "}
            <strong className="text-navy">biaya penggantian bangunan (replacement cost)</strong> —
            berapa biaya membangun ulang rumah tersebut dengan spesifikasi dan kualitas yang sama
            di lokasi yang sama, menggunakan harga material dan upah konstruksi saat ini. Nilai
            ini tidak termasuk harga tanah.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Cara sederhana: kalikan luas bangunan (m²) dengan estimasi biaya konstruksi per m²
            di Yogyakarta saat ini. Untuk rumah standar beton di Yogyakarta, biaya konstruksi
            berkisar <strong className="text-navy">Rp 4–7 juta per m²</strong> tergantung spesifikasi.
            Rumah tipe 60 (luas bangunan 60 m²) dengan spec menengah = 60 × Rp 5,5 juta =
            nilai pertanggungan bangunan Rp 330 juta.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Jangan lupa menambahkan nilai isi rumah (furniture, elektronik, AC, water heater) secara
            terpisah. Panduan lengkap ada di artikel kami:{" "}
            <Link href="/artikel/cara-menghitung-nilai-asuransi" className="text-gold font-semibold hover:underline">
              Cara Menghitung Nilai Asuransi yang Benar untuk Menghindari Underinsurance
            </Link>.
          </p>

          {/* SECTION 7 — PROSES KLAIM */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Langkah-Langkah Mengajukan Klaim Asuransi Rumah di Jogja
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Proses klaim yang lancar dimulai dari persiapan yang baik. Berikut tahapan yang perlu
            Anda ikuti jika terjadi musibah pada rumah Anda:
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              {
                no: "01",
                judul: "Pastikan Keselamatan Terlebih Dahulu",
                isi: "Sebelum memikirkan klaim, pastikan seluruh penghuni dalam kondisi aman. Untuk kebakaran, hubungi Pemadam Kebakaran (Sleman: 0274-868419 / Kota: 113). Jangan masuk ke bangunan yang terbakar atau rusak akibat gempa sebelum dinyatakan aman.",
              },
              {
                no: "02",
                judul: "Laporkan ke Pihak Terkait & Minta Surat Resmi",
                isi: "Untuk kebakaran: minta surat keterangan kebakaran dari Damkar. Untuk gempa: koordinasikan dengan RT/RW dan catat nomor laporan BPBD. Untuk banjir: dokumentasikan ketinggian air dan area yang terdampak. Laporan resmi ini adalah bukti awal yang sangat penting.",
              },
              {
                no: "03",
                judul: "Hubungi Konsultan atau Asuransi Maksimal 3×24 Jam",
                isi: "Laporkan kejadian ke konsultan atau perusahaan asuransi sesegera mungkin, paling lambat 3×24 jam setelah kejadian. Keterlambatan pelaporan bisa menjadi alasan penolakan klaim. Jika Anda klien Asuransi Jogja, cukup WhatsApp Pak Rio.",
              },
              {
                no: "04",
                judul: "Dokumentasikan Semua Kerusakan Secara Menyeluruh",
                isi: "Foto dan video seluruh kerusakan dari berbagai sudut — bagian luar, dalam, detail struktural — sebelum ada pembersihan atau perbaikan sementara. Simpan file digital ini dengan aman, idealnya di cloud storage.",
              },
              {
                no: "05",
                judul: "Siapkan Dokumen Klaim yang Lengkap",
                isi: "Dokumen yang umumnya diperlukan: polis asuransi asli, KTP pemilik, sertifikat kepemilikan & IMB/PBG, foto kerusakan, surat keterangan kejadian, daftar kerugian beserta estimasi nilai. Konsultan kami akan memandu daftar dokumen lengkap.",
              },
              {
                no: "06",
                judul: "Pendampingan Survei & Pencairan Dana",
                isi: "Loss adjustor dari perusahaan asuransi akan melakukan survei lapangan. Dengan konsultan yang berpihak pada Anda, proses ini berjalan lebih adil. Setelah persetujuan, dana ganti rugi dicairkan dalam 14–30 hari kerja.",
              },
            ].map((step) => (
              <div
                key={step.no}
                className="flex gap-4 items-start border border-black/6 rounded-[14px] p-5 bg-white hover:border-gold/30 transition-colors"
              >
                <div className="font-heading text-gold text-[1.8rem] font-bold leading-none flex-shrink-0 w-12">
                  {step.no}
                </div>
                <div>
                  <div className="font-heading text-navy font-bold text-[1rem] mb-1">
                    {step.judul}
                  </div>
                  <p className="text-sm leading-[1.7] text-[#64748B]">{step.isi}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 8 — TIPS */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Tips Memilih Asuransi Rumah yang Tepat — Dari Konsultan Lokal Jogja
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-6">
            Setelah lebih dari 10 tahun melayani pemilik rumah di Yogyakarta, ada beberapa hal yang
            selalu kami tekankan kepada setiap klien baru:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                ico: "📋",
                judul: "Baca Seluruh Polis, Bukan Hanya Brosurnya",
                isi: "Brosur hanya menampilkan manfaat terbaik. Yang terpenting adalah dokumen polis lengkap beserta klausul pengecualiannya. Pastikan Anda paham apa yang tidak dijamin sebelum tanda tangan.",
              },
              {
                ico: "🎯",
                judul: "Jangan Underinsurance demi Hemat Premi",
                isi: "Mengasuransikan rumah di bawah nilai sebenarnya memang menurunkan premi, tapi juga menurunkan ganti rugi yang akan Anda terima saat klaim. Ini bisa berarti kerugian puluhan juta yang harus Anda tanggung sendiri.",
              },
              {
                ico: "🌋",
                judul: "Selalu Tambahkan Perluasan Gempa di Jogja",
                isi: "Yogyakarta adalah kota yang pernah mengalami gempa destruktif. Perluasan gempa adalah investasi paling penting yang bisa Anda tambahkan. Biaya surcharge sangat terjangkau relatif terhadap perlindungannya.",
              },
              {
                ico: "🏠",
                judul: "Perhatikan Status Penggunaan Bangunan",
                isi: "Jika sebagian rumah Anda digunakan untuk usaha (warung kecil, kos 1–2 kamar, kantor), pastikan polis mencakup penggunaan campuran tersebut. Penggunaan komersial yang tidak dideklarasikan bisa membatalkan klaim.",
              },
              {
                ico: "🔄",
                judul: "Perbarui Nilai Pertanggungan Setiap 2–3 Tahun",
                isi: "Biaya konstruksi naik rata-rata 5–10% per tahun. Nilai pertanggungan yang memadai hari ini mungkin sudah tidak cukup 5 tahun lagi. Tinjau ulang polis Anda secara berkala bersama konsultan.",
              },
              {
                ico: "📱",
                judul: "Simpan Kontak Konsultan di Ponsel Anda",
                isi: "Saat musibah terjadi, Anda butuh panduan cepat — bukan waktu mencari-cari nomor telepon. Simpan kontak konsultan Anda dan hubungi segera setelah kejadian, sebelum melakukan apapun pada bangunan.",
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

          {/* SECTION 9 — ASURANSI JIWA vs RUMAH */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Asuransi Rumah vs Asuransi Jiwa — Apakah Keduanya Perlu?
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Pertanyaan ini sering muncul: <em>"Saya sudah punya asuransi jiwa, apakah masih perlu
            asuransi rumah?"</em> Jawabannya:{" "}
            <strong className="text-navy">ya, keduanya melindungi hal yang sama sekali berbeda.</strong>
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Asuransi jiwa melindungi keluarga dari risiko kehilangan penghasilan jika Anda meninggal
            atau cacat permanen. Asuransi rumah tinggal — yang masuk kategori{" "}
            <strong className="text-navy">asuransi kerugian</strong> — melindungi aset fisik bangunan
            dan isinya dari kerusakan atau kehilangan akibat musibah. Keduanya saling melengkapi,
            bukan menggantikan.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Jika Anda sedang mempertimbangkan perlindungan yang lebih menyeluruh untuk bisnis atau
            properti komersial, baca juga artikel kami tentang{" "}
            <Link href="/artikel/pentingnya-asuransi-dunia-usaha-jogja" className="text-gold font-semibold hover:underline">
              pentingnya asuransi di dunia usaha Yogyakarta
            </Link>{" "}
            dan{" "}
            <Link href="/artikel/asuransi-kos-jogja" className="text-gold font-semibold hover:underline">
              panduan asuransi kos-kosan di Yogyakarta
            </Link>.
          </p>

          {/* PENUTUP */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-4 mt-12 leading-tight">
            Kesimpulan: Rumah Anda Terlalu Berharga untuk Tidak Dilindungi
          </h2>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Tidak ada waktu yang tepat untuk menunda asuransi rumah. Kebakaran tidak memberi
            peringatan. Gempa tidak menunggu Anda siap. Banjir tidak peduli apakah polis Anda sudah
            terbit atau belum. Di Yogyakarta, di mana risiko geologi dan cuaca ekstrem adalah
            kenyataan sehari-hari, melindungi aset terbesar Anda adalah keputusan yang paling
            bertanggung jawab yang bisa Anda buat hari ini.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-4">
            Dengan premi yang sangat terjangkau — untuk rumah tipe 60 di Sleman, total premi
            kebakaran + gempa hanya sekitar Rp 950.000–Rp 1.100.000 per tahun, atau setara
            kurang dari Rp 100.000 per bulan — asuransi rumah tinggal adalah salah satu keputusan
            keuangan paling rasional dan paling diabaikan oleh pemilik rumah di Indonesia.
          </p>
          <p className="text-base leading-[1.85] text-[#475569] mb-10">
            Hubungi kami sekarang untuk konsultasi gratis. Kami akan bantu Anda memahami risiko
            spesifik lokasi rumah Anda di Yogyakarta, memilih produk yang paling sesuai, memastikan
            nilai pertanggungan yang benar, dan mendampingi proses klaim jika suatu saat diperlukan.
          </p>

          {/* FAQ SECTION */}
          <h2 className="font-heading text-[1.65rem] text-navy font-bold mb-6 mt-12 leading-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <div className="flex flex-col mb-10">
            {faqRumah.map((f, i) => (
              <details key={i} className="border-b border-black/8 group">
                <summary className="py-4 cursor-pointer font-semibold text-[0.92rem] text-navy flex justify-between items-center list-none gap-4">
                  <span>{f.q}</span>
                  <span className="text-gold text-xl flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#64748B] pb-5 pr-8">{f.a}</p>
              </details>
            ))}
          </div>

          {/* INTERNAL LINKS BOX */}
          <div className="bg-cream border border-black/6 rounded-[18px] p-6 mb-10">
            <div className="font-heading text-navy font-bold text-[1rem] mb-4">
              📚 Artikel &amp; Halaman Terkait
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: "/asuransi-properti", label: "Asuransi Properti Jogja – Panduan Lengkap untuk Semua Jenis Properti" },
                { href: "/asuransi-properti#kalkulator", label: "🧮 Kalkulator Premi Asuransi Properti – Hitung Estimasi Sekarang" },
                { href: "/asuransi-properti/kebakaran", label: "Asuransi Kebakaran Rumah, Kos & Ruko di Yogyakarta" },
                { href: "/asuransi-properti/banjir-gempa", label: "Perluasan Asuransi Banjir & Gempa Bumi di Yogyakarta" },
                { href: "/asuransi-properti/property-all-risk", label: "Property All Risk – Proteksi Komprehensif untuk Hunian Premium" },
                { href: "/artikel/asuransi-kos-jogja", label: "Panduan Asuransi Kos-Kosan untuk Pemilik Kos di Jogja" },
                { href: "/artikel/cara-menghitung-nilai-asuransi", label: "Cara Menghitung Nilai Pertanggungan Asuransi yang Benar" },
                { href: "/artikel/pentingnya-asuransi-dunia-usaha-jogja", label: "Pentingnya Asuransi di Dunia Usaha Yogyakarta" },
                { href: "/artikel", label: "Lihat Semua Artikel Edukasi Asuransi →" },
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
        </div>
      </article>

      {/* CTA PENUTUP */}
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
            Mulai Sekarang
          </div>
          <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
            Lindungi Rumah Anda Sebelum<br />Musibah Itu Terjadi
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-[460px] mx-auto mb-8">
            Konsultasi gratis dengan Pak Rio — konsultan asuransi kerugian lokal di Yogyakarta.
            Analisis risiko, rekomendasi produk, dan pendampingan klaim. Semuanya tanpa biaya.
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
