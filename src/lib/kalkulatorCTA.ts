// Peta halaman → kartu CTA kalkulator premi.
// Dipakai oleh <KalkulatorCTA /> (dipasang di PropertyLayout, KendaraanLayout, dan ArtikelLayout).
// Untuk menambah/mengurangi halaman, cukup ubah daftar di bawah ini.

export type KalkulatorId = "properti" | "mobil";

export const KALKULATOR_INFO: Record<
  KalkulatorId,
  { kicker: string; title: string; desc: string; label: string; href: string }
> = {
  properti: {
    kicker: "Kalkulator Premi Properti",
    title: "Hitung Estimasi Premi Asuransi Properti",
    desc: "Rumah, kos, ruko, vila, hingga gedung usaha — dapatkan perkiraan premi kebakaran dan perluasannya dalam hitungan detik.",
    label: "🧮 Hitung Premi Properti",
    href: "/asuransi-properti#kalkulator",
  },
  mobil: {
    kicker: "Kalkulator Premi Mobil",
    title: "Hitung Estimasi Premi Asuransi Mobil",
    desc: "All Risk atau TLO, mobil BBM maupun listrik — hitung estimasi premi sesuai plat dan harga kendaraan Anda.",
    label: "🧮 Hitung Premi Mobil",
    href: "/asuransi-kendaraan#kalkulator",
  },
};

// Halaman pilar yang sudah memuat kalkulator di dalam halamannya → kartu tidak ditampilkan.
const PILAR_SUDAH_ADA_KALKULATOR = ["/asuransi-properti", "/asuransi-kendaraan"];

// Semua sub halaman di bawah prefix ini menampilkan kalkulator terkait.
const PREFIX: { prefix: string; ids: KalkulatorId[] }[] = [
  { prefix: "/asuransi-properti/", ids: ["properti"] },
];

// Halaman tertentu (sub halaman kendaraan + blog).
const EXACT: Record<string, KalkulatorId[]> = {
  // Sub halaman kendaraan (kalkulator hanya untuk mobil, jadi armada & dump truk tidak disertakan)
  "/asuransi-kendaraan/mobil": ["mobil"],

  // Blog — properti
  "/artikel/asuransi-kos-jogja": ["properti"],
  "/artikel/asuransi-rumah-tinggal-jogja": ["properti"],
  "/artikel/asuransi-vila-homestay-jogja": ["properti"],
  "/artikel/asuransi-umkm-jogja": ["properti"],
  "/artikel/pentingnya-asuransi-dunia-usaha-jogja": ["properti"],

  // Blog — mobil
  "/artikel/asuransi-mobil-banjir": ["mobil"],
  "/artikel/asuransi-mobil-bekas": ["mobil"],
  "/artikel/asuransi-mobil-listrik": ["mobil"],
  "/artikel/asuransi-rental-mobil-jogja": ["mobil"],
  "/artikel/asuransi-kendaraan-jogja": ["mobil"],
  "/artikel/bengkel-rekanan-asuransi-jogja": ["mobil"],
  "/artikel/cara-klaim-asuransi-mobil": ["mobil"],
  "/artikel/cara-menghitung-premi-asuransi-mobil": ["mobil"],
  "/artikel/perbedaan-all-risk-tlo": ["mobil"],

  // Blog — membahas keduanya
  "/artikel/cara-menghitung-nilai-asuransi": ["properti", "mobil"],
};

export function kalkulatorUntuk(path: string): KalkulatorId[] {
  const clean = path.replace(/\/+$/, "") || "/";
  if (PILAR_SUDAH_ADA_KALKULATOR.includes(clean)) return [];
  if (EXACT[clean]) return EXACT[clean];
  for (const p of PREFIX) if (clean.startsWith(p.prefix)) return p.ids;
  return [];
}
