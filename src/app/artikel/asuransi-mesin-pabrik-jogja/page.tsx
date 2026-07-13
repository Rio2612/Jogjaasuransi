// app/artikel/asuransi-mesin-pabrik-jogja/page.tsx
// TARGET KEYWORD: "asuransi mesin pabrik jogja", "machinery breakdown yogyakarta"
// INTENT: Commercial Investigation — manajer pabrik atau pemilik industri yang sadar mesinnya berisiko
// SILO: Engineering cluster → /machinery-breakdown + cross-link EAR, artikel CAR

import type { Metadata } from "next";
import Link from "next/link";
import { KONTAK } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuransi Mesin Pabrik di Jogja – Machinery Breakdown untuk Industri DIY",
  description:
    "Panduan lengkap asuransi mesin pabrik (Machinery Breakdown) di Yogyakarta. Apa yang ditanggung, apa yang tidak, estimasi premi, perbedaan dengan asuransi kebakaran, dan kasus nyata kerusakan mesin industri di DIY.",
  keywords:
    "asuransi mesin pabrik jogja, machinery breakdown yogyakarta, asuransi kerusakan mesin industri DIY, proteksi mesin produksi jogja, biaya asuransi mesin pabrik yogyakarta",
  alternates: {
    canonical: "https://asuransijogja.biz.id/artikel/asuransi-mesin-pabrik-jogja",
  },
  openGraph: {
    title: "Asuransi Mesin Pabrik di Jogja – Machinery Breakdown untuk Industri DIY",
    description:
      "Mesin pabrik yang rusak mendadak bisa menghentikan produksi berhari-hari. Pelajari bagaimana Machinery Breakdown Insurance melindungi industri di Yogyakarta.",
    url: "https://asuransijogja.biz.id/artikel/asuransi-mesin-pabrik-jogja",
    type: "article",
    siteName: "Asuransi Jogja",
    locale: "id_ID",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Asuransi Mesin Pabrik di Jogja – Machinery Breakdown untuk Industri DIY" }],
  },
};

const schemaArtikel = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://asuransijogja.biz.id" },
        { "@type": "ListItem", position: 2, name: "Artikel", item: "https://asuransijogja.biz.id/artikel" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Asuransi Mesin Pabrik di Jogja",
          item: "https://asuransijogja.biz.id/artikel/asuransi-mesin-pabrik-jogja",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Asuransi Mesin Pabrik di Jogja – Machinery Breakdown untuk Industri DIY",
      description:
        "Panduan lengkap Machinery Breakdown Insurance untuk pabrik dan industri manufaktur di Yogyakarta — cakupan, estimasi premi, dan kasus nyata.",
      author: { "@type": "Person", name: "Rio Mardiansyah", jobTitle: "Praktisi Asuransi" },
      publisher: {
        "@type": "Organization",
        name: "Asuransi Jogja",
        url: "https://asuransijogja.biz.id",
      },
      datePublished: "2025-05-05",
      dateModified: "2025-06-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa itu Machinery Breakdown Insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Machinery Breakdown Insurance (MBI) adalah asuransi yang melindungi mesin dan peralatan industri dari kerusakan mendadak akibat kegagalan mekanis internal — seperti korsleting, overpressure, atau keausan tiba-tiba. Berbeda dengan asuransi kebakaran yang menanggung kerusakan akibat api, MBI menanggung kerusakan yang terjadi dari dalam mesin itu sendiri saat sedang beroperasi.",
          },
        },
        {
          "@type": "Question",
          name: "Apa perbedaan Machinery Breakdown dengan asuransi kebakaran untuk mesin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Asuransi kebakaran menanggung kerusakan mesin akibat api, petir, atau ledakan dari luar. Machinery Breakdown menanggung kerusakan dari dalam — kegagalan mekanis, overpressure, korsleting motor, atau keausan mendadak saat beroperasi. Keduanya saling melengkapi dan sebaiknya dimiliki bersamaan untuk perlindungan menyeluruh.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa estimasi premi Machinery Breakdown untuk mesin senilai Rp 1 miliar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estimasi premi Machinery Breakdown untuk mesin senilai Rp 1 miliar berkisar Rp 3–10 juta per tahun (rate 0,3–1%). Rate dipengaruhi oleh jenis mesin, usia, kondisi pemeliharaan, dan frekuensi operasi. Mesin yang rutin diservis dan memiliki catatan perawatan baik umumnya mendapat rate lebih rendah.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah kerusakan mesin akibat gempa bumi ditanggung Machinery Breakdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tidak. Machinery Breakdown tidak menanggung kerusakan akibat bencana alam seperti gempa bumi, banjir, atau petir. Risiko-risiko tersebut ditanggung oleh polis Property All Risk atau Industrial All Risk dengan perluasan gempa. Untuk perlindungan menyeluruh mesin di DIY, kedua polis sebaiknya dimiliki bersamaan.",
          },
        },
      ],
    },
  ],
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const apaYangDitanggung = [
  { item: "Kegagalan mekanis mendadak dan tak terduga", contoh: "Bearing patah tiba-tiba, shaft retak, gear rompal" },
  { item: "Korsleting motor listrik (electrical burnout)", contoh: "Motor terbakar akibat lonjakan arus atau insulasi rusak" },
  { item: "Overpressure dan kegagalan sistem tekanan", contoh: "Boiler atau pressure vessel retak akibat tekanan berlebih" },
  { item: "Kerusakan akibat kesalahan operasi", contoh: "Operator salah setting parameter — mesin overheat atau overload" },
  { item: "Kerusakan akibat kegagalan sistem kontrol", contoh: "PLC atau sensor gagal menyebabkan mesin beroperasi abnormal" },
  { item: "Biaya perbaikan termasuk ongkos tenaga ahli", contoh: "Teknisi spesialis, suku cadang, dan biaya pengiriman komponen" },
  { item: "Biaya pengujian ulang setelah perbaikan", contoh: "Commissioning ulang setelah penggantian komponen utama" },
];

const apaYangTidakDitanggung = [
  { item: "Kerusakan akibat kebakaran, petir, atau ledakan dari luar", solusi: "→ Ditanggung polis Property All Risk / Industrial All Risk" },
  { item: "Kerusakan akibat gempa bumi, banjir, atau bencana alam", solusi: "→ Butuh perluasan CAT pada PAR/IAR" },
  { item: "Keausan normal dan penuaan mesin (wear & tear)", solusi: "→ Biaya perawatan rutin — bukan risiko asuransi" },
  { item: "Kerusakan yang sudah diketahui sebelum polis terbit", solusi: "→ Insurer akan minta deklarasi kondisi mesin saat awal" },
  { item: "Biaya penggantian suku cadang dalam pemeliharaan rutin", solusi: "→ Komponen habis pakai bukan cakupan MBI" },
  { item: "Kerugian produksi akibat mesin berhenti (kecuali ada MLOP)", solusi: "→ Perluasan MLOP/BI diperlukan untuk menanggung lost profit" },
];

const jenisPerluasan = [
  {
    nama: "MLOP (Machinery Loss of Profit)",
    icon: "📉",
    deskripsi:
      "Menanggung kerugian keuntungan yang hilang akibat terhentinya produksi karena kerusakan mesin yang tertanggung. Ini adalah perluasan paling penting untuk pabrik dengan revenue harian yang signifikan.",
    cocokUntuk: "Pabrik dengan revenue harian > Rp 10 juta atau kontrak produksi dengan penalti keterlambatan",
    estimasiTambahan: "+20–40% dari premi dasar MBI",
    warna: "border-red-200 bg-red-50/40",
  },
  {
    nama: "Third Party Liability (TPL)",
    icon: "🛡️",
    deskripsi:
      "Menanggung tuntutan pihak ketiga jika kerusakan mesin menyebabkan kerugian pada pihak luar — misalnya mesin meledak dan melukai subkontraktor atau merusak properti tetangga.",
    cocokUntuk: "Pabrik di kawasan industri padat atau yang sering dikunjungi pihak luar",
    estimasiTambahan: "+10–20% dari premi dasar",
    warna: "border-blue-200 bg-blue-50/40",
  },
  {
    nama: "Expediting Expenses",
    icon: "⚡",
    deskripsi:
      "Menanggung biaya tambahan untuk mempercepat perbaikan — pengiriman suku cadang via udara, lembur teknisi, atau sewa mesin sementara — agar produksi bisa segera kembali normal.",
    cocokUntuk: "Industri dengan toleransi downtime sangat rendah (makanan, farmasi, tekstil pesanan)",
    estimasiTambahan: "+5–15% dari premi dasar",
    warna: "border-amber-200 bg-amber-50/40",
  },
  {
    nama: "Deterioration of Stock (DOS)",
    icon: "🧊",
    deskripsi:
      "Menanggung kerugian stok produk yang rusak akibat berhentinya mesin pendingin atau refrigerasi — relevan untuk industri makanan, farmasi, atau cold chain.",
    cocokUntuk: "Pabrik makanan, cold storage, industri farmasi, dan distributor produk dingin",
    estimasiTambahan: "+15–30% dari premi dasar",
    warna: "border-green-200 bg-green-50/40",
  },
];

const tabelPerbandingan = [
  {
    aspek: "Risiko yang Ditanggung",
    mbi: "Kegagalan mekanis dari dalam mesin",
    par: "Kebakaran, petir, banjir, gempa (dengan perluasan)",
    ear: "Kerusakan selama proses instalasi & commissioning",
  },
  {
    aspek: "Fase Berlaku",
    mbi: "Selama mesin beroperasi (ongoing)",
    par: "Selama mesin berada di lokasi (termasuk idle)",
    ear: "Selama proses erection hingga commissioning selesai",
  },
  {
    aspek: "Pemicu Klaim Utama",
    mbi: "Mesin rusak tiba-tiba saat beroperasi normal",
    par: "Kebakaran atau bencana merusak mesin dari luar",
    ear: "Mesin jatuh, salah rakit, atau gagal saat uji coba",
  },
  {
    aspek: "Mesin Idle Ditanggung?",
    mbi: "Tidak — harus beroperasi saat rusak",
    par: "Ya — ditanggung meski mesin tidak beroperasi",
    ear: "Ya — selama dalam proses instalasi",
  },
  {
    aspek: "Perluasan Utama",
    mbi: "MLOP, Expediting Expenses, DOS",
    par: "Gempa, Banjir, RSMD, Business Interruption",
    ear: "DSU (Delay in Start-Up), Marine Cargo",
  },
  {
    aspek: "Estimasi Rate",
    mbi: "0,30–1,00% dari nilai mesin",
    par: "0,10–0,40% dari nilai aset",
    ear: "0,20–0,60% dari nilai kontrak",
  },
];

const skenarioIndustri = [
  {
    industri: "Pabrik Garmen & Konveksi",
    lokasi: "Bantul & Sleman",
    mesinUtama: "Mesin jahit industrial, mesin potong CNC, mesin bordir",
    risikoKhas: "Motor mesin jahit terbakar akibat lonjakan listrik PLN, mesin potong macet karena material masuk ke sistem",
    risikoDowntime: "Tinggi — kontrak pesanan dengan deadline ketat",
    rekomendasiPolis: "MBI + MLOP jika ada kontrak pesanan tetap",
    estimasiPremi: "Rp 5–25 juta/tahun (nilai mesin Rp 500 juta–2 miliar)",
    warna: "border-purple-200 bg-purple-50/30",
    icon: "🧵",
  },
  {
    industri: "Industri Makanan & Minuman",
    lokasi: "Kulon Progo & Bantul",
    mesinUtama: "Mesin pengolahan, filling machine, mesin pengemas, cold storage",
    risikoKhas: "Kompresor cold storage mati menyebabkan stok rusak, mesin filling macet karena kontaminasi bahan",
    risikoDowntime: "Sangat tinggi — produk perishable, kontrak supply ke supermarket",
    rekomendasiPolis: "MBI + MLOP + DOS (Deterioration of Stock)",
    estimasiPremi: "Rp 8–40 juta/tahun (nilai mesin Rp 800 juta–3 miliar)",
    warna: "border-green-200 bg-green-50/30",
    icon: "🏭",
  },
  {
    industri: "Percetakan & Penerbitan",
    lokasi: "Kota Yogyakarta & Sleman",
    mesinUtama: "Mesin cetak offset, mesin digital printing, mesin binding",
    risikoKhas: "Drum mesin cetak retak, roller aus mendadak, sistem tinta tersumbat menyebabkan mesin berhenti",
    risikoDowntime: "Tinggi — proyek cetak dengan deadline hari tertentu",
    rekomendasiPolis: "MBI + Expediting Expenses untuk komponen impor",
    estimasiPremi: "Rp 3–15 juta/tahun (nilai mesin Rp 300 juta–1,5 miliar)",
    warna: "border-blue-200 bg-blue-50/30",
    icon: "🖨️",
  },
  {
    industri: "Industri Logam & Fabrikasi",
    lokasi: "Klaten border & Kulon Progo",
    mesinUtama: "Mesin las, mesin bubut CNC, press hydraulic, mesin bending",
    risikoKhas: "Hydraulic pump bocor internal menyebabkan press berhenti, spindle mesin bubut patah tiba-tiba",
    risikoDowntime: "Menengah — tergantung jadwal pesanan",
    rekomendasiPolis: "MBI standar, tambah MLOP jika ada kontrak jangka panjang",
    estimasiPremi: "Rp 4–20 juta/tahun (nilai mesin Rp 400 juta–2 miliar)",
    warna: "border-amber-200 bg-amber-50/30",
    icon: "⚙️",
  },
];

const kasusNyata = [
  {
    judul: "Motor Penggerak Mesin Jahit Terbakar di Pabrik Garmen Bantul",
    nilai: "Rp 185 juta",
    kronologi:
      "Lonjakan tegangan listrik PLN (voltage spike) menyebabkan 23 motor penggerak mesin jahit industrial terbakar secara bersamaan. Pabrik dengan kapasitas 500 pekerja terpaksa berhenti produksi 8 hari.",
    tanpaMLOP:
      "MBI menanggung biaya penggantian 23 motor senilai Rp 185 juta. Namun tanpa perluasan MLOP, kerugian produksi 8 hari senilai Rp 240 juta tidak tertanggung.",
    denganMLOP:
      "Jika ada MLOP: total klaim Rp 185 juta + Rp 240 juta = Rp 425 juta — semua tertanggung. Premi MLOP tambahan hanya sekitar Rp 3–5 juta per tahun.",
    pelajaran: "Untuk pabrik dengan kapasitas produksi besar, MLOP bukan opsional — ini justru komponen paling penting dari perlindungan mesin.",
    badge: "bg-purple-50 text-purple-700 border-purple-100",
  },
  {
    judul: "Kompresor Cold Storage Mati di Pabrik Makanan Kulon Progo",
    nilai: "Rp 320 juta (mesin + stok)",
    kronologi:
      "Sistem pendingin cold storage gagal total akibat kerusakan pada compressor unit. Suhu ruang naik dari -18°C ke +8°C dalam 6 jam. Stok produk beku senilai Rp 135 juta rusak seluruhnya. Biaya perbaikan compressor Rp 185 juta.",
    tanpaMLOP:
      "Tanpa perluasan DOS: MBI hanya menanggung biaya perbaikan compressor Rp 185 juta. Kerugian stok Rp 135 juta ditanggung sendiri.",
    denganMLOP:
      "Dengan DOS (Deterioration of Stock): total klaim Rp 320 juta — mesin + stok rusak keduanya tertanggung. Premi DOS tambahan Rp 2–4 juta per tahun.",
    pelajaran: "Industri makanan dengan cold storage mutlak memerlukan perluasan DOS. Nilai stok yang rusak bisa jauh melebihi biaya perbaikan mesin itu sendiri.",
    badge: "bg-green-50 text-green-700 border-green-100",
  },
];

const tabelEstimasiPremi = [
  { nilaiMesin: "Rp 100 – 500 juta", rateMin: "0,50%", rateMax: "1,00%", premiMin: "Rp 500 rb", premiMaks: "Rp 5 juta", jenisMesin: "Mesin ringan: jahit, komputer industri, pompa kecil" },
  { nilaiMesin: "Rp 500 juta – Rp 2 miliar", rateMin: "0,35%", rateMax: "0,80%", premiMin: "Rp 1,75 juta", premiMaks: "Rp 16 juta", jenisMesin: "Mesin menengah: CNC, mesin cetak, cold storage" },
  { nilaiMesin: "Rp 2 – 10 miliar", rateMin: "0,30%", rateMax: "0,65%", premiMin: "Rp 6 juta", premiMaks: "Rp 65 juta", jenisMesin: "Mesin berat: press hydraulic, mesin produksi line" },
  { nilaiMesin: "Di atas Rp 10 miliar", rateMin: "Negosiasi", rateMax: "Negosiasi", premiMin: "—", premiMaks: "—", jenisMesin: "Generator besar, turbin, peralatan industri khusus" },
];

const dokumenPengajuan = [
  { dok: "Daftar mesin yang akan diasuransikan (nama, merek, tahun, nilai)", wajib: true },
  { dok: "Invoice atau NJOP mesin sebagai dasar nilai pertanggungan", wajib: true },
  { dok: "Catatan perawatan / service record mesin (jika ada)", wajib: false },
  { dok: "Foto kondisi mesin saat ini", wajib: false },
  { dok: "Manual / spesifikasi teknis mesin (untuk mesin di atas Rp 500 juta)", wajib: false },
  { dok: "Laporan inspeksi terakhir (untuk boiler atau pressure vessel)", wajib: true },
  { dok: "NPWP dan dokumen legalitas perusahaan", wajib: true },
];

const faqItems = [
  {
    q: "Apakah mesin yang sudah tua (> 10 tahun) masih bisa diasuransikan?",
    a: "Bisa, namun dengan syarat tertentu. Underwriter umumnya akan meminta inspeksi kondisi mesin untuk mesin yang berusia di atas 10 tahun sebelum menerbitkan polis. Mesin tua yang terawat baik dengan catatan servis lengkap biasanya masih bisa diasuransikan, meski rate mungkin lebih tinggi. Mesin yang sudah dalam kondisi aus parah atau tidak layak operasi umumnya ditolak atau memerlukan perbaikan dulu sebelum bisa dicover.",
  },
  {
    q: "Apakah perlu laporan inspeksi teknis sebelum mendaftar?",
    a: "Untuk mesin bernilai di atas Rp 2 miliar atau mesin khusus seperti boiler dan pressure vessel, inspeksi oleh surveyor teknis biasanya diperlukan sebelum polis diterbitkan. Untuk mesin standar di bawah nilai tersebut, umumnya cukup dengan foto kondisi mesin dan daftar spesifikasi. Kami bantu koordinasi dengan surveyor jika diperlukan.",
  },
  {
    q: "Bagaimana menentukan nilai pertanggungan yang tepat untuk mesin?",
    a: "Ada dua pendekatan: (1) Replacement Value — nilai mesin baru yang setara di pasar saat ini. Ini memastikan Anda bisa membeli mesin pengganti jika terjadi kerusakan total. (2) Actual Cash Value — nilai mesin dikurangi depresiasi. Lebih murah preminya tapi ganti rugi lebih kecil. Untuk mesin produksi utama, Replacement Value sangat dianjurkan agar klaim bisa membiayai penggantian penuh.",
  },
  {
    q: "Apakah satu polis bisa menanggung semua mesin di pabrik?",
    a: "Ya, dan ini yang paling umum. Satu polis MBI bisa mendaftarkan semua mesin dalam satu schedule dengan nilai pertanggungan per mesin yang tercantum. Jika ada mesin baru yang dibeli, bisa ditambahkan ke polis yang sudah ada melalui endorsement. Ini jauh lebih efisien dibanding polis terpisah untuk setiap mesin.",
  },
  {
    q: "Apa yang dimaksud dengan deductible dalam klaim Machinery Breakdown?",
    a: "Deductible adalah bagian kerugian yang harus ditanggung sendiri oleh pemilik mesin sebelum asuransi membayar sisanya. Misalnya deductible Rp 10 juta dan kerusakan Rp 80 juta — asuransi membayar Rp 70 juta. Deductible yang lebih besar menghasilkan premi yang lebih rendah. Untuk industri besar dengan cash flow kuat, strategi deductible tinggi bisa menghemat premi secara signifikan.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ArtikelAsuransiMesinPabrikJogja() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArtikel) }}
      />

        {/* ── Breadcrumb ── */}
        <div className="bg-cream border-b border-black/8 px-[5vw] py-3">
          <div className="flex items-center gap-2 text-sm text-[#475569] flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors no-underline">Beranda</Link>
            <span className="text-gold/60">›</span>
            <Link href="/artikel" className="hover:text-gold transition-colors no-underline">Artikel</Link>
            <span className="text-gold/60">›</span>
            <span className="text-navy font-semibold">Asuransi Mesin Pabrik di Jogja</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-navy py-16 px-[5vw] relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Link
                href="/asuransi-engineering/machinery-breakdown"
                className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold3 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-gold/20 transition-colors"
              >
                🔧 Machinery Breakdown
              </Link>
              <Link
                href="/asuransi-engineering"
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-semibold px-3 py-1 rounded-full no-underline hover:bg-white/12 transition-colors"
              >
                ⚙️ Asuransi Engineering
              </Link>
              <span className="text-white/60 text-xs">·</span>
              <span className="text-white/60 text-xs">Panduan Industri</span>
            </div>
            <h1 className="font-heading text-[clamp(1.9rem,3.5vw,3rem)] text-white leading-[1.2] mb-5">
              Asuransi Mesin Pabrik di Jogja —<br />
              <em className="not-italic text-gold">Panduan Machinery<br />
              Breakdown untuk Industri DIY</em>
            </h1>
            <p className="text-white/80 text-base leading-[1.85] max-w-[560px] mb-6">
              Mesin pabrik senilai Rp 2 miliar yang rusak mendadak bisa menghentikan produksi
              selama 2 minggu — kerugian yang jauh lebih besar dari biaya perbaikannya sendiri.
              Machinery Breakdown Insurance dirancang khusus untuk risiko ini.
            </p>
            <div className="flex gap-3 text-xs text-white/60 flex-wrap">
              <span>✍️ Rio Mardiansyah — Praktisi Asuransi</span>
              <span>·</span>
              <span>📅 Diperbarui Juni 2025</span>
              <span>·</span>
              <span>⏱️ Baca 7 menit</span>
            </div>
          </div>
        </section>

        {/* ── Konten ── */}
        <article className="py-14 px-[5vw] max-w-[780px] mx-auto">

          {/* Lead box */}
          <div className="bg-gold/6 border-l-4 border-gold rounded-r-xl p-5 mb-10">
            <p className="text-navy2 text-sm leading-relaxed">
              <strong className="text-navy">Poin Utama:</strong> Machinery Breakdown (MBI)
              menanggung kerusakan mesin dari <strong>dalam</strong> — kegagalan mekanis,
              korsleting, overpressure. Asuransi kebakaran menanggung kerusakan dari{" "}
              <strong>luar</strong> — api, petir, bencana alam. Keduanya saling melengkapi
              dan sebaiknya dimiliki bersamaan. Untuk pabrik dengan revenue harian tinggi,
              tambahkan perluasan <strong>MLOP</strong> agar kerugian produksi juga tertanggung.
            </p>
          </div>

          {/* Penjelasan MBI */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Apa itu Machinery Breakdown Insurance dan Mengapa Berbeda?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-4">
            Banyak pemilik pabrik di Yogyakarta mengira mesin mereka sudah terlindungi oleh
            asuransi kebakaran yang dimiliki pabrik. Anggapan ini berbahaya. Asuransi kebakaran
            menanggung mesin jika rusak akibat api, petir, atau bencana yang datang dari luar.
            Namun jika mesin rusak karena kegagalan internalnya sendiri — bearing patah, motor
            terbakar karena overvoltage, atau pressure vessel retak karena cacat material —
            asuransi kebakaran tidak menanggung sepeser pun.
          </p>
          <p className="text-[#475569] text-base leading-relaxed mb-4">
            Inilah celah yang diisi oleh Machinery Breakdown Insurance. Produk ini dirancang
            khusus untuk kerusakan yang terjadi <em>dari dalam mesin</em> saat sedang beroperasi
            normal — risiko yang justru paling sering terjadi di pabrik aktif.
          </p>
          <p className="text-[#475569] text-base leading-relaxed mb-10">
            Yogyakarta memiliki kawasan industri yang terus berkembang — dari sentra garmen
            di Bantul, industri makanan di Kulon Progo, hingga percetakan di Kota Yogyakarta.
            Mesin-mesin di kawasan ini beroperasi dalam kondisi iklim tropis lembap yang
            mempercepat korosi dan keausan komponen — faktor yang meningkatkan risiko kegagalan
            mekanis dibanding pabrik di iklim kering.
          </p>

          {/* Yang ditanggung dan tidak */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Apa yang Ditanggung dan Tidak Ditanggung?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {/* Ditanggung */}
            <div className="bg-green-50/50 border border-green-200 rounded-card p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-3 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-green-600 text-white flex items-center justify-center text-[0.6rem]">✓</span>
                Yang Ditanggung MBI
              </p>
              <ul className="flex flex-col gap-3">
                {apaYangDitanggung.map((item, i) => (
                  <li key={i}>
                    <p className="text-xs font-semibold text-navy leading-snug mb-0.5">{item.item}</p>
                    <p className="text-[0.65rem] text-[#475569] italic">{item.contoh}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Tidak ditanggung */}
            <div className="bg-red-50/50 border border-red-200 rounded-card p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-red-700 mb-3 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[0.6rem]">✕</span>
                Yang Tidak Ditanggung
              </p>
              <ul className="flex flex-col gap-3">
                {apaYangTidakDitanggung.map((item, i) => (
                  <li key={i}>
                    <p className="text-xs font-semibold text-navy leading-snug mb-0.5">{item.item}</p>
                    <p className="text-[0.65rem] text-gold italic">{item.solusi}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Perluasan penting */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            4 Perluasan yang Mengubah MBI Menjadi Perlindungan Menyeluruh
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Polis MBI standar hanya menanggung biaya perbaikan mesin. Untuk industri dengan
            risiko lebih kompleks, perluasan berikut sangat dianjurkan:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {jenisPerluasan.map((p) => (
              <div key={p.nama} className={`rounded-card p-5 border ${p.warna}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <div className="flex-1">
                    <div className="font-heading font-bold text-navy text-[0.95rem] mb-1">{p.nama}</div>
                    <p className="text-sm text-[#475569] leading-relaxed mb-3">{p.deskripsi}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="bg-white/60 rounded-lg p-2.5 border border-black/6">
                        <div className="text-[0.6rem] font-bold uppercase tracking-wide text-[#5A6472] mb-0.5">Cocok untuk</div>
                        <p className="text-xs text-navy2 leading-snug">{p.cocokUntuk}</p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-2.5 border border-black/6">
                        <div className="text-[0.6rem] font-bold uppercase tracking-wide text-[#5A6472] mb-0.5">Tambahan premi</div>
                        <p className="text-sm font-bold text-navy">{p.estimasiTambahan}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabel perbandingan MBI vs PAR vs EAR */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            MBI vs Property All Risk vs EAR — Mana yang Anda Butuhkan?
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-5">
            Ketiganya sering membingungkan karena sama-sama bisa menanggung mesin.
            Berikut perbedaan yang perlu dipahami:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[22%]">Aspek</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold w-[26%]">🔧 MBI</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[26%]">🏢 Property All Risk</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold3 rounded-tr-xl w-[26%]">⚙️ EAR</th>
                </tr>
              </thead>
              <tbody>
                {tabelPerbandingan.map((row, i) => (
                  <tr key={row.aspek} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-semibold text-navy text-xs align-top">{row.aspek}</td>
                    <td className="p-3.5 text-navy2 text-sm leading-relaxed align-top font-medium">{row.mbi}</td>
                    <td className="p-3.5 text-[#475569] text-sm leading-relaxed align-top">{row.par}</td>
                    <td className="p-3.5 text-[#475569] text-sm leading-relaxed align-top">{row.ear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-navy/4 border border-navy/12 rounded-xl p-4 mb-10 flex gap-3">
            <span className="text-lg flex-shrink-0">💡</span>
            <p className="text-sm text-navy2 leading-relaxed">
              <strong>Rekomendasi untuk pabrik di DIY:</strong> MBI + Property All Risk (dengan
              perluasan Gempa Bumi) adalah kombinasi minimum yang dianjurkan. EAR dibutuhkan
              saat mesin baru sedang dipasang. Setelah commissioning selesai, EAR digantikan
              oleh MBI untuk perlindungan operasional jangka panjang.
            </p>
          </div>

          {/* Skenario per industri */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Panduan per Jenis Industri di Yogyakarta
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Setiap industri memiliki profil risiko mesin yang berbeda. Berikut panduan
            spesifik untuk jenis industri yang umum di DIY:
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {skenarioIndustri.map((s) => (
              <div key={s.industri} className={`rounded-card p-5 border ${s.warna}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <div className="font-heading font-bold text-navy text-[0.95rem]">{s.industri}</div>
                    <div className="text-xs text-[#5A6472]">📍 {s.lokasi}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  {[
                    { label: "Mesin utama", val: s.mesinUtama },
                    { label: "Risiko khas", val: s.risikoKhas },
                    { label: "Risiko downtime", val: s.risikoDowntime },
                    { label: "Rekomendasi polis", val: s.rekomendasiPolis },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/60 rounded-lg p-3 border border-black/6">
                      <div className="text-[0.6rem] font-bold uppercase tracking-wide text-[#5A6472] mb-0.5">{item.label}</div>
                      <p className="text-xs text-navy2 leading-snug">{item.val}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[0.65rem] text-[#5A6472] uppercase tracking-wide font-semibold">Estimasi premi:</span>
                  <span className="text-xs font-bold text-navy">{s.estimasiPremi}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tabel estimasi premi */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Tabel Estimasi Premi MBI
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-5">
            Estimasi berdasarkan nilai mesin dan jenis mesin standar. Mesin khusus, usia tua,
            atau kondisi operasi ekstrem dapat menghasilkan rate berbeda:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3.5 font-heading font-semibold text-xs rounded-tl-xl w-[24%]">Nilai Mesin</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[12%]">Rate Min</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[12%]">Rate Maks</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs w-[22%]">Estimasi Premi</th>
                  <th className="text-left p-3.5 font-heading font-semibold text-xs text-gold rounded-tr-xl">Tipikal Mesin</th>
                </tr>
              </thead>
              <tbody>
                {tabelEstimasiPremi.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                    <td className="p-3.5 font-bold text-navy text-xs align-middle">{row.nilaiMesin}</td>
                    <td className="p-3.5 text-[#475569] text-sm align-middle">{row.rateMin}</td>
                    <td className="p-3.5 text-[#475569] text-sm align-middle">{row.rateMax}</td>
                    <td className="p-3.5 align-middle">
                      {row.premiMin === "—" ? (
                        <span className="text-xs text-[#5A6472] italic">Negosiasi langsung</span>
                      ) : (
                        <span className="text-navy2 font-semibold text-xs">{row.premiMin} – {row.premiMaks}</span>
                      )}
                    </td>
                    <td className="p-3.5 text-[#475569] text-xs align-middle leading-snug">{row.jenisMesin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5A6472] mb-10">
            * Rate estimasi untuk mesin standar dalam kondisi baik dengan perawatan rutin.
            Mesin di atas usia 10 tahun atau kondisi operasi ekstrem dapat dikenai loading rate.
          </p>

          {/* Kasus Nyata */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Kasus Nyata — Mengapa MLOP dan DOS Bukan Sekadar Opsional
          </h2>
          <p className="text-[#475569] text-base leading-relaxed mb-6">
            Dua kasus berikut menggambarkan mengapa perluasan MBI sama pentingnya dengan
            polis dasar — dan betapa mahalnya tidak memilikinya:
          </p>
          <div className="flex flex-col gap-5 mb-10">
            {kasusNyata.map((k) => (
              <div key={k.judul} className={`rounded-card p-5 border ${k.badge}`}>
                <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                  <span className="font-heading font-bold text-navy text-sm">{k.judul}</span>
                  <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${k.badge}`}>
                    Total nilai: {k.nilai}
                  </span>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">{k.kronologi}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="bg-amber-50 rounded-lg p-3.5 border border-amber-100">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-amber-600 mb-1">
                      ⚠️ MBI Standar (tanpa perluasan)
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">{k.tanpaMLOP}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3.5 border border-green-100">
                    <div className="text-[0.65rem] font-bold uppercase tracking-wide text-green-600 mb-1">
                      ✅ MBI + Perluasan Lengkap
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">{k.denganMLOP}</p>
                  </div>
                </div>
                <div className="bg-navy/4 rounded-lg p-3 border border-navy/8">
                  <p className="text-xs text-navy2 leading-relaxed">
                    <strong>💡 Pelajaran:</strong> {k.pelajaran}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dokumen pengajuan */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-4">
            Dokumen yang Dibutuhkan untuk Mengajukan MBI
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-cream border-b-2 border-black/8">
                  <th className="text-left p-3 font-heading font-semibold text-xs text-navy w-[70%]">Dokumen</th>
                  <th className="text-center p-3 font-heading font-semibold text-xs text-navy w-[30%]">Status</th>
                </tr>
              </thead>
              <tbody>
                {dokumenPengajuan.map((d, i) => (
                  <tr key={i} className={`border-b border-black/5 ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}>
                    <td className="p-3 text-sm text-navy2">{d.dok}</td>
                    <td className="p-3 text-center">
                      <span className={`text-[0.65rem] font-bold px-2.5 py-1 rounded-full ${d.wajib ? "bg-navy text-white" : "bg-cream text-[#475569] border border-black/10"}`}>
                        {d.wajib ? "Wajib" : "Dianjurkan"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Inline */}
          <div className="bg-gold/8 border border-gold/25 rounded-card p-6 mb-10">
            <div className="font-heading text-navy font-bold text-base mb-2">
              Ingin estimasi premi MBI untuk mesin pabrik Anda?
            </div>
            <p className="text-[#475569] text-sm leading-relaxed mb-4">
              Kirimkan daftar mesin (nama, merek, tahun, nilai) via WhatsApp — kami siapkan
              estimasi premi dan rekomendasi perluasan dalam 1 hari kerja.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-gold text-navy px-5 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-gold2 transition-all"
              >
                💬 Minta Estimasi via WA
              </a>
              <Link
                href="/asuransi-engineering/machinery-breakdown"
                className="border border-navy/20 text-navy px-5 py-2.5 rounded-lg text-sm no-underline hover:border-gold hover:text-gold transition-all"
              >
                🔧 Halaman Produk MBI Lengkap →
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="font-heading text-[clamp(1.3rem,2vw,1.7rem)] text-navy mb-6">
            Pertanyaan Seputar Asuransi Mesin Pabrik
          </h2>
          <div className="flex flex-col divide-y divide-black/8 mb-10">
            {faqItems.map((f, i) => (
              <details key={i} className="group py-1">
                <summary className="py-3 cursor-pointer font-semibold text-[0.9rem] text-navy flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-gold text-xl flex-shrink-0 ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm leading-[1.78] text-[#475569] pb-3">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div className="border-t border-black/8 pt-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">
              Produk & Artikel Terkait
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/asuransi-engineering/machinery-breakdown",
                  icon: "🔧",
                  judul: "Machinery Breakdown — Halaman Produk",
                  desc: "Cakupan lengkap, cara klaim, dan estimasi premi MBI",
                },
                {
                  href: "/asuransi-engineering/erection-all-risk",
                  icon: "⚙️",
                  judul: "Erection All Risk (EAR)",
                  desc: "Perlindungan saat mesin baru sedang dipasang dan di-commissioning",
                },
                {
                  href: "/asuransi-engineering",
                  icon: "🏭",
                  judul: "Hub Asuransi Engineering",
                  desc: "CAR, EAR, dan MBI — semua produk engineering dalam satu halaman",
                },
                {
                  href: "/artikel/perbedaan-car-ear-asuransi-engineering",
                  icon: "📊",
                  judul: "Perbedaan CAR vs EAR",
                  desc: "Panduan memilih untuk proyek konstruksi vs instalasi mesin",
                },
                {
                  href: "/artikel/asuransi-umkm-jogja",
                  icon: "🏪",
                  judul: "Asuransi untuk UMKM Jogja",
                  desc: "Panduan asuransi untuk usaha kecil termasuk mesin produksi",
                },
                {
                  href: "/asuransi-properti/property-all-risk",
                  icon: "🏢",
                  judul: "Property All Risk",
                  desc: "Pasangan ideal MBI — menanggung kerusakan mesin dari faktor eksternal",
                },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-cream border border-black/8 rounded-xl p-4 flex gap-3 items-start no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group"
                >
                  <span className="text-xl flex-shrink-0">{a.icon}</span>
                  <div>
                    <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">{a.judul}</div>
                    <div className="text-xs text-[#475569]">{a.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* ── CTA Bottom ── */}
        <section className="py-16 px-[5vw] bg-navy text-center relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,62,0.10) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] text-white leading-[1.22] mb-4">
              Lindungi Mesin Pabrik Anda<br />
              Sebelum Kerusakan Terjadi
            </h2>
            <p className="text-white/75 text-sm max-w-[440px] mx-auto mb-8">
              Kirimkan daftar mesin Anda — kami siapkan estimasi premi dan rekomendasi
              perluasan yang tepat untuk industri Anda di Yogyakarta.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${KONTAK.wa}`}
                className="bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:opacity-90 transition-all"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <Link
                href="/asuransi-engineering/machinery-breakdown"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                🔧 Produk Machinery Breakdown
              </Link>
              <Link
                href="/asuransi-engineering"
                className="border border-white/25 text-white/80 px-7 py-3.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 no-underline hover:border-gold hover:text-gold transition-all"
              >
                ⚙️ Semua Produk Engineering
              </Link>
            </div>
          </div>
        </section>

    </>
  );
}
