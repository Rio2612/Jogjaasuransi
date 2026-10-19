// ─── KONTAK ───────────────────────────────────────────────────────────────────
export const KONTAK = {
  wa: "628131556592",
  waDisplay: "0813-1556-592",
  email: "rio@asuransijogja.biz.id",
  kota: "Yogyakarta, Daerah Istimewa Yogyakarta",
  mapsUrl: "https://maps.app.goo.gl/rHkgxFKcc4NdsvAY8?g_st=ac",
} as const;

// ─── PRODUK CLUSTERS ─────────────────────────────────────────────────────────
export type Produk = { icon: string; name: string; desc: string; href: string };
export type Cluster = { id: string; label: string; icon: string; produk: Produk[] };

export const CLUSTERS: Cluster[] = [
  {
    id: "kendaraan", label: "Kendaraan", icon: "🚗",
    produk: [
      { icon: "🚗", name: "Asuransi Mobil Jogja", desc: "Proteksi All Risk atau TLO untuk mobil pribadi, termasuk mobil listrik. Premi sesuai tarif OJK.", href: "#kalkulator" },
      { icon: "🚛", name: "Asuransi Dump Truk & Kendaraan Niaga", desc: "Proteksi dump truk, tronton, dan armada material untuk kontraktor, tambang, dan logistik.", href: "/asuransi-kendaraan/dump-truk-niaga" },
      { icon: "🚐", name: "Asuransi Armada Kendaraan", desc: "Asuransi fleet untuk banyak kendaraan operasional. Polis lebih praktis, premi lebih efisien.", href: "/asuransi-kendaraan/armada-fleet" },
    ],
  },
  {
    id: "properti", label: "Properti", icon: "🏠",
    produk: [
      { icon: "🏡", name: "Asuransi Kebakaran Rumah Tinggal Jogja", desc: "Lindungi rumah tinggal di Yogyakarta dari kebakaran, petir, ledakan, dan asap dengan premi terjangkau.", href: "/asuransi-properti/kebakaran" },
      { icon: "🏘️", name: "Asuransi Kebakaran Kos Jogja", desc: "Proteksi bangunan kos-kosan dari kebakaran, dengan pertanggungan fleksibel sesuai jumlah kamar.", href: "/asuransi-properti/kebakaran" },
      { icon: "🏪", name: "Asuransi Kebakaran Ruko Jogja", desc: "Lindungi ruko dan bangunan komersial dari kebakaran dan risiko perluasannya.", href: "/asuransi-properti/kebakaran" },
      { icon: "🏢", name: "Property All Risk (PAR)", desc: "Perlindungan komprehensif untuk gedung perkantoran, hotel, pabrik, dan properti komersial.", href: "/asuransi-properti/property-all-risk" },
      { icon: "🌊", name: "Perluasan Banjir & Gempa Bumi", desc: "Jaminan tambahan dari banjir, gempa bumi, letusan gunung berapi, dan angin topan di Yogyakarta.", href: "/asuransi-properti/banjir-gempa" },
      { icon: "🔒", name: "Asuransi Risiko Kejahatan", desc: "Proteksi pencurian, perampokan, dan vandalisme pada properti dan isi bangunan usaha Anda.", href: "/asuransi-properti/property-all-risk" },
    ],
  },
  {
    id: "engineering", label: "Engineering", icon: "⚙️",
    produk: [
      { icon: "🏗️", name: "Contractor All Risk (CAR)", desc: "Perlindungan proyek konstruksi dari awal hingga serah terima: pekerjaan, material, peralatan, dan pihak ketiga.", href: "/asuransi-engineering/contractor-all-risk" },
      { icon: "⚙️", name: "Erection All Risk (EAR)", desc: "Asuransi pekerjaan instalasi mesin, peralatan pabrik, dan proyek MEP di Yogyakarta.", href: "/asuransi-engineering/erection-all-risk" },
      { icon: "🔧", name: "Machinery Breakdown (MB)", desc: "Lindungi mesin produksi dari kerusakan mendadak akibat gangguan mekanis atau elektris.", href: "/asuransi-engineering/machinery-breakdown" },
    ],
  },
  {
    id: "kargo", label: "Kargo", icon: "📦",
    produk: [
      { icon: "📦", name: "Asuransi Kargo Darat", desc: "Perlindungan barang kiriman via truk dan kereta api dari kecelakaan, pencurian, dan kerusakan.", href: "/asuransi-kargo/pengiriman-barang" },
      { icon: "✈️", name: "Asuransi Kargo Udara", desc: "Perlindungan kargo jalur udara untuk barang bernilai tinggi yang butuh kecepatan dan keamanan.", href: "/asuransi-kargo/kargo-udara-laut" },
      { icon: "🚢", name: "Marine Cargo Insurance", desc: "Proteksi pengiriman via laut untuk importir dan eksportir, domestik antar pulau maupun internasional.", href: "/asuransi-kargo/kargo-udara-laut" },
    ],
  },
  {
    id: "liability", label: "Liability", icon: "🛡️",
    produk: [
      { icon: "⚗️", name: "Liability Limbah B3", desc: "Perlindungan tanggung jawab hukum bagi perusahaan penghasil, pengangkut, atau pengelola limbah B3.", href: "/asuransi-liability/limbah-b3" },
      { icon: "👥", name: "Public Liability", desc: "Lindungi bisnis dari klaim pihak ketiga atas cedera badan atau kerusakan properti akibat operasional usaha.", href: "/asuransi-liability/public-liability" },
      { icon: "🏭", name: "Product Liability", desc: "Perlindungan produsen dan distributor dari tuntutan akibat kerugian yang disebabkan produknya.", href: "/asuransi-liability/product-liability" },
    ],
  },
  {
    id: "event", label: "Event", icon: "🎪",
    produk: [
      { icon: "🎤", name: "Asuransi Konser & Festival Musik", desc: "Paket 4-in-1: Public Liability, Event Cancellation, Personal Accident, dan Property All Risk sesuai rider artis internasional.", href: "/asuransi-event/konser-festival-musik" },
      { icon: "🏍️", name: "Asuransi Event Motocross & Grasstrack", desc: "Personal Accident pembalap dan panitia, Public Liability, dan Property untuk event IMI maupun grasstrack.", href: "/asuransi-event/motocross-grasstrack" },
    ],
  },
  {
    id: "surety", label: "Surety Bond", icon: "📋",
    produk: [
      { icon: "📋", name: "Jaminan Penawaran (Bid Bond)", desc: "Jaminan bahwa peserta tender akan melaksanakan kontrak jika menang. Wajib untuk lelang proyek.", href: "/asuransi-surety-bond/jaminan-penawaran" },
      { icon: "🤝", name: "Jaminan Pelaksanaan (Performance Bond)", desc: "Menjamin kontraktor menyelesaikan proyek sesuai kontrak. Wajib untuk proyek pemerintah, BUMN, dan swasta besar.", href: "/asuransi-surety-bond/jaminan-pelaksanaan" },
      { icon: "💰", name: "Jaminan Uang Muka (Advance Payment Bond)", desc: "Jaminan atas uang muka proyek, melindungi pemberi kerja dari risiko penyalahgunaan dana awal.", href: "/asuransi-surety-bond/jaminan-uang-muka" },
    ],
  },
  {
    id: "kesehatan", label: "Kesehatan Karyawan", icon: "🏥",
    produk: [
      { icon: "🏥", name: "Asuransi Kesehatan Karyawan", desc: "Biaya berobat karyawan, pasangan, dan anak sesuai paket Simas Sehat Corporate (PT Asuransi Sinar Mas).", href: "/asuransi-kesehatan-karyawan" },
      { icon: "🛏️", name: "Paket Rawat Inap & Rawat Jalan", desc: "Pilih paket rawat inap (kamar, ICU, operasi) dan rawat jalan (dokter, obat, lab) sesuai kebutuhan.", href: "/asuransi-kesehatan-karyawan#paket" },
      { icon: "💳", name: "Cashless di RS Rekanan Jogja", desc: "Berobat tanpa bayar dulu di RS rekanan Yogyakarta, Sleman, Bantul, dan Kulon Progo, atau lewat reimbursement.", href: "/asuransi-kesehatan-karyawan#rs-rekanan" },
    ],
  },
];

// ─── KALKULATOR OJK ───────────────────────────────────────────────────────────
export type Wilayah = "w1" | "w2" | "w3";
export type JenisKendaraan = "konvensional" | "listrik";
export type TipePerlindungan = "allrisk" | "tlo";

export const RATE: Record<TipePerlindungan, Record<Wilayah, Record<JenisKendaraan, number[]>>> = {
  allrisk: {
    w1: { konvensional: [3.82, 2.67, 2.18, 1.20, 1.05], listrik: [4.20, 2.94, 2.40, 1.32, 1.16] },
    w2: { konvensional: [3.26, 2.47, 2.08, 1.20, 1.05], listrik: [3.59, 2.72, 2.29, 1.32, 1.16] },
    w3: { konvensional: [2.53, 2.69, 1.79, 1.14, 1.05], listrik: [2.78, 2.96, 1.97, 1.25, 1.16] },
  },
  tlo: {
    w1: { konvensional: [0.47, 0.63, 0.41, 0.25, 0.20], listrik: [0.56, 0.69, 0.46, 0.30, 0.24] },
    w2: { konvensional: [0.65, 0.44, 0.38, 0.25, 0.20], listrik: [0.78, 0.53, 0.42, 0.30, 0.24] },
    w3: { konvensional: [0.51, 0.44, 0.29, 0.23, 0.20], listrik: [0.56, 0.48, 0.35, 0.27, 0.24] },
  },
};

export const WILAYAH_LABEL: Record<Wilayah, string> = {
  w1: "Wilayah I (Sumatera)",
  w2: "Wilayah II (Jakarta, Jabar, Banten)",
  w3: "Wilayah III (Yogyakarta & sekitarnya)",
};

export type PlatOption = { value: Wilayah; label: string };
export type PlatGroup = { group: string; options: PlatOption[] };

export const PLAT_DATA: (PlatOption | PlatGroup)[] = [
  { value: "w3", label: "AB – Yogyakarta (DIY)" },
  { group: "── Wilayah III (Jawa Tengah) ──", options: [
    { value: "w3", label: "AD – Surakarta / Solo" },
    { value: "w3", label: "H – Semarang" },
    { value: "w3", label: "K – Kudus / Pati" },
    { value: "w3", label: "R – Banyumas / Purwokerto" },
    { value: "w3", label: "G – Pekalongan" },
    { value: "w3", label: "AA – Magelang / Kedu" },
  ]},
  { group: "── Wilayah III (Jawa Timur) ──", options: [
    { value: "w3", label: "L – Surabaya" },
    { value: "w3", label: "M – Madura" },
    { value: "w3", label: "N – Malang" },
    { value: "w3", label: "P – Jember / Besuki" },
    { value: "w3", label: "S – Bojonegoro" },
    { value: "w3", label: "W – Sidoarjo / Gresik" },
    { value: "w3", label: "AE – Madiun" },
    { value: "w3", label: "AG – Kediri" },
  ]},
  { group: "── Wilayah III (Bali & Nusa Tenggara) ──", options: [
    { value: "w3", label: "DK – Bali" },
    { value: "w3", label: "DR – Lombok / NTB" },
    { value: "w3", label: "EA – Sumbawa / NTB" },
    { value: "w3", label: "DH – Kupang / NTT" },
    { value: "w3", label: "EB – Flores / NTT" },
    { value: "w3", label: "ED – Sumba / NTT" },
  ]},
  { group: "── Wilayah III (Kalimantan) ──", options: [
    { value: "w3", label: "KB – Pontianak / Kalbar" },
    { value: "w3", label: "DA – Banjarmasin / Kalsel" },
    { value: "w3", label: "KH – Palangkaraya / Kalteng" },
    { value: "w3", label: "KT – Samarinda / Kaltim" },
    { value: "w3", label: "KU – Balikpapan / Kaltim" },
    { value: "w3", label: "KS – Kotabaru / Kalsel" },
  ]},
  { group: "── Wilayah III (Sulawesi) ──", options: [
    { value: "w3", label: "DB – Manado / Sulut" },
    { value: "w3", label: "DL – Sitaro / Sulut" },
    { value: "w3", label: "DN – Palu / Sulteng" },
    { value: "w3", label: "DT – Kendari / Sultra" },
    { value: "w3", label: "DD – Makassar / Sulsel" },
    { value: "w3", label: "DC – Mamuju / Sulbar" },
    { value: "w3", label: "DM – Gorontalo" },
  ]},
  { group: "── Wilayah III (Maluku & Papua) ──", options: [
    { value: "w3", label: "DE – Ambon / Maluku" },
    { value: "w3", label: "DG – Ternate / Maluku Utara" },
    { value: "w3", label: "PA – Jayapura / Papua" },
    { value: "w3", label: "PB – Manokwari / Papua Barat" },
    { value: "w3", label: "PP – Sorong / Papua Barat Daya" },
  ]},
  { group: "── Wilayah I (Sumatera) ──", options: [
    { value: "w1", label: "BL – Banda Aceh / Aceh" },
    { value: "w1", label: "BB – Tapanuli / Sibolga" },
    { value: "w1", label: "BK – Medan / Sumut" },
    { value: "w1", label: "BA – Padang / Sumbar" },
    { value: "w1", label: "BM – Pekanbaru / Riau" },
    { value: "w1", label: "BP – Tanjungpinang / Kepri" },
    { value: "w1", label: "BH – Jambi" },
    { value: "w1", label: "BG – Palembang / Sumsel" },
    { value: "w1", label: "BD – Bengkulu" },
    { value: "w1", label: "BE – Bandar Lampung / Lampung" },
    { value: "w1", label: "BN – Pangkalpinang / Babel" },
  ]},
  { group: "── Wilayah II (Jakarta, Jabar, Banten) ──", options: [
    { value: "w2", label: "B – DKI Jakarta" },
    { value: "w2", label: "A – Banten / Serang" },
    { value: "w2", label: "D – Bandung / Jabar" },
    { value: "w2", label: "E – Cirebon / Jabar" },
    { value: "w2", label: "F – Bogor / Jabar" },
    { value: "w2", label: "T – Karawang / Purwakarta" },
    { value: "w2", label: "Z – Garut / Tasikmalaya" },
  ]},
];

export const DISKON = 0.10; // silent discount

export function getKategori(harga: number): { label: string; idx: number } {
  if (harga <= 125_000_000) return { label: "Kategori 1 (≤ Rp 125 juta)", idx: 0 };
  if (harga <= 200_000_000) return { label: "Kategori 2 (> Rp 125 jt s.d Rp 200 jt)", idx: 1 };
  if (harga <= 400_000_000) return { label: "Kategori 3 (> Rp 200 jt s.d Rp 400 jt)", idx: 2 };
  if (harga <= 800_000_000) return { label: "Kategori 4 (> Rp 400 jt s.d Rp 800 jt)", idx: 3 };
  return { label: "Kategori 5 (> Rp 800 juta)", idx: 4 };
}

export function formatRp(n: number): string {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "Apakah konsultasi asuransi di sini berbayar?",
    a: "Tidak, konsultasi sepenuhnya gratis. Saya akan menganalisis kebutuhan dan profil risiko Anda, lalu merekomendasikan produk yang paling sesuai — tanpa biaya apapun dan tanpa tekanan untuk membeli.",
  },
  {
    q: "Apa perbedaan asuransi All Risk dan TLO untuk mobil?",
    a: "All Risk (Comprehensive) menanggung kerusakan ringan hingga berat, kecelakaan, dan kehilangan kendaraan. TLO hanya menanggung kerugian jika kendaraan hilang dicuri atau rusak parah di atas 75% dari nilai kendaraan. Premi TLO lebih murah, tetapi All Risk memberikan proteksi lebih luas.",
  },
  {
    q: "Asuransi kerugian apa saja yang tersedia?",
    a: "Kami melayani hampir seluruh lini asuransi kerugian: kendaraan bermotor (mobil konvensional dan listrik), properti (kebakaran, PAR, perluasan banjir dan gempa), engineering (CAR, EAR, machinery breakdown), kargo (darat, udara, laut), liability (public liability, limbah B3, product liability), dan surety bond.",
  },
  {
    q: "Berapa lama proses penerbitan polis?",
    a: "Untuk produk standar seperti asuransi kendaraan dan kebakaran rumah tinggal, polis dapat terbit dalam 1–2 hari kerja setelah dokumen lengkap. Untuk produk korporasi seperti engineering insurance atau liability, prosesnya umumnya 3–7 hari kerja.",
  },
  {
    q: "Bagaimana jika saya perlu mengajukan klaim?",
    a: "Segera hubungi saya via WhatsApp setelah kejadian. Saya akan memandu langkah-langkah yang perlu dilakukan, membantu persiapan dokumen yang diperlukan, dan mendampingi Anda dalam seluruh proses klaim hingga dana ganti rugi cair.",
  },
  {
    q: "Apakah bisa mengurus asuransi untuk perusahaan atau bisnis?",
    a: "Ya. Kami melayani klien korporasi dengan kebutuhan yang lebih kompleks seperti fleet insurance, property all risk, engineering insurance, liability insurance, dan surety bond untuk kebutuhan tender dan kontrak.",
  },
];

// ─── TESTIMONIAL ─────────────────────────────────────────────────────────────
export const TESTIMONI = [
  {
    inisial: "BH",
    nama: "Budi Hartono",
    peran: "Wiraswasta, Yogyakarta",
    teks: "Sebelumnya saya selalu bingung memilih asuransi kendaraan. Setelah konsultasi, saya jadi paham perbedaan All Risk dan TLO, dan akhirnya dapat produk yang benar-benar sesuai kebutuhan dan anggaran saya.",
  },
  {
    inisial: "SR",
    nama: "Siti Rahayu",
    peran: "Pemilik Kos, Sleman",
    teks: "Saya punya beberapa kos di Jogja. Pak Rio membantu mengasuransikan semua bangunan saya dengan harga yang jauh lebih efisien. Prosesnya mudah, penjelasannya sangat jelas dan tidak membingungkan.",
  },
  {
    inisial: "AP",
    nama: "Agus Purnomo",
    peran: "Kontraktor, CV Bangun Jaya",
    teks: "Kami butuh Surety Bond untuk proyek pemerintah dalam waktu singkat. Pak Rio bisa memproses dengan cepat dan menjelaskan semua persyaratan dengan sangat detail. Sangat profesional dan membantu.",
  },
];
