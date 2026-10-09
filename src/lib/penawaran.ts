// Konfigurasi tombol "Minta Penawaran" (popup form → pesan WhatsApp terisi otomatis).
// Dipakai oleh components/penawaran/*. Untuk menambah produk/jenis/bidang, cukup ubah file ini.

import { KONTAK } from "@/lib/data";

export type ClusterKey = "kendaraan" | "properti" | "engineering" | "surety" | "liability" | "kargo" | "event";

export type PenawaranField = { key: string; label: string; placeholder: string; optional?: boolean };
export type PenawaranType = { key: string; label: string };

export interface PenawaranCluster {
  key: ClusterKey;
  icon: string;
  /** Nama produk, huruf kecil di tengah kalimat: "asuransi kendaraan". */
  nama: string;
  typeLegend: string;
  types: PenawaranType[];
  /** Aturan menebak jenis dari URL. Hanya dipakai bila tepat satu aturan cocok. */
  rules: { type: string; re: RegExp }[];
  fields: PenawaranField[];
}

const KONSULTASI: PenawaranType = { key: "konsultasi", label: "Belum yakin, mohon disarankan" };

export const PENAWARAN: Record<ClusterKey, PenawaranCluster> = {
  kendaraan: {
    key: "kendaraan",
    icon: "🚗",
    nama: "asuransi kendaraan",
    typeLegend: "Jenis kendaraan",
    types: [
      { key: "mobil", label: "Mobil" },
      { key: "niaga", label: "Dump truk & niaga" },
      { key: "armada", label: "Armada / fleet" },
      KONSULTASI,
    ],
    rules: [
      { type: "mobil", re: /mobil|all-risk-tlo|bengkel/ },
      { type: "niaga", re: /dump|truk|niaga/ },
      { type: "armada", re: /armada|fleet/ },
    ],
    fields: [
      { key: "unit", label: "Merek, tipe & tahun", placeholder: "mis. Toyota Fortuner VRZ 2022 / Hino 500 2020" },
      { key: "nilai", label: "Harga kendaraan / jumlah unit", placeholder: "mis. Rp 450 juta / 12 unit", optional: true },
    ],
  },
  properti: {
    key: "properti",
    icon: "🏠",
    nama: "asuransi properti",
    typeLegend: "Jenis properti",
    types: [
      { key: "rumah", label: "Rumah tinggal" },
      { key: "kos", label: "Kos-kosan" },
      { key: "ruko", label: "Ruko / usaha" },
      { key: "penginapan", label: "Vila, homestay, hotel" },
      { key: "par", label: "Gedung / pabrik" },
      KONSULTASI,
    ],
    rules: [
      { type: "penginapan", re: /vila|homestay|hotel/ },
      { type: "kos", re: /(^|[-/])kos([-/]|$)/ },
      { type: "rumah", re: /rumah-tinggal/ },
      { type: "ruko", re: /ruko|umkm|dunia-usaha/ },
      { type: "par", re: /property-all-risk/ },
    ],
    fields: [
      { key: "lokasi", label: "Lokasi bangunan", placeholder: "mis. Seturan, Sleman" },
      { key: "nilai", label: "Perkiraan nilai bangunan", placeholder: "mis. Rp 600 juta", optional: true },
    ],
  },
  engineering: {
    key: "engineering",
    icon: "⚙️",
    nama: "asuransi engineering",
    typeLegend: "Jenis perlindungan",
    types: [
      { key: "car", label: "Contractor All Risk (CAR)" },
      { key: "ear", label: "Erection All Risk (EAR)" },
      { key: "mb", label: "Machinery Breakdown" },
      KONSULTASI,
    ],
    rules: [
      { type: "car", re: /contractor|kontraktor|(^|[-/])car([-/]|$)/ },
      { type: "ear", re: /erection|(^|[-/])ear([-/]|$)/ },
      { type: "mb", re: /machinery|mesin/ },
    ],
    fields: [
      { key: "objek", label: "Proyek / mesin yang dilindungi", placeholder: "mis. Pembangunan gedung 4 lantai di Bantul" },
      { key: "nilai", label: "Nilai kontrak / nilai mesin", placeholder: "mis. Rp 8 miliar", optional: true },
    ],
  },
  surety: {
    key: "surety",
    icon: "📋",
    nama: "surety bond",
    typeLegend: "Jenis jaminan",
    types: [
      { key: "penawaran", label: "Jaminan penawaran" },
      { key: "pelaksanaan", label: "Jaminan pelaksanaan" },
      { key: "uangmuka", label: "Jaminan uang muka" },
      { key: "pemeliharaan", label: "Jaminan pemeliharaan" },
      KONSULTASI,
    ],
    rules: [
      { type: "penawaran", re: /penawaran|bid/ },
      { type: "pelaksanaan", re: /pelaksanaan/ },
      { type: "uangmuka", re: /uang-muka/ },
      { type: "pemeliharaan", re: /pemeliharaan|pemeliharan/ },
    ],
    fields: [
      { key: "proyek", label: "Nama paket / pemilik proyek", placeholder: "mis. Rehab jalan, Dinas PUPR DIY" },
      { key: "nilai", label: "Nilai kontrak / nilai jaminan", placeholder: "mis. Rp 2,5 miliar", optional: true },
    ],
  },
  liability: {
    key: "liability",
    icon: "🛡️",
    nama: "asuransi liability",
    typeLegend: "Jenis liability",
    types: [
      { key: "public", label: "Public liability" },
      { key: "employer", label: "Employer's liability" },
      { key: "product", label: "Product liability" },
      { key: "b3", label: "Limbah B3" },
      KONSULTASI,
    ],
    rules: [
      { type: "public", re: /public/ },
      { type: "employer", re: /employer/ },
      { type: "product", re: /product/ },
      { type: "b3", re: /limbah|(^|[-/])b3([-/]|$)/ },
    ],
    fields: [
      { key: "usaha", label: "Jenis usaha", placeholder: "mis. Pabrik tahu, hotel, bengkel" },
      { key: "limit", label: "Limit pertanggungan yang diinginkan", placeholder: "mis. Rp 1 miliar", optional: true },
    ],
  },
  kargo: {
    key: "kargo",
    icon: "📦",
    nama: "asuransi kargo",
    typeLegend: "Jenis pengiriman",
    types: [
      { key: "darat", label: "Darat / antar kota" },
      { key: "udaralaut", label: "Udara & laut" },
      { key: "ekspedisi", label: "Ekspedisi UMKM" },
      KONSULTASI,
    ],
    rules: [
      { type: "darat", re: /pengiriman-barang|darat|inland/ },
      { type: "udaralaut", re: /udara|laut|ekspor|impor/ },
      { type: "ekspedisi", re: /ekspedisi|umkm/ },
    ],
    fields: [
      { key: "barang", label: "Jenis barang", placeholder: "mis. Kerajinan perak, elektronik, hasil bumi" },
      { key: "rute", label: "Rute & nilai barang per pengiriman", placeholder: "mis. Jogja – Surabaya, Rp 50 juta", optional: true },
    ],
  },
  event: {
    key: "event",
    icon: "🎪",
    nama: "asuransi event",
    typeLegend: "Jenis acara",
    types: [
      { key: "konser", label: "Konser & festival musik" },
      { key: "motocross", label: "Motocross & grasstrack" },
      { key: "lain", label: "Acara lain" },
    ],
    rules: [
      { type: "konser", re: /konser|festival|musik/ },
      { type: "motocross", re: /motocross|grasstrack/ },
    ],
    fields: [
      { key: "acara", label: "Nama acara, lokasi & tanggal", placeholder: "mis. Festival X, Stadion Y Sleman, 12 Des 2026" },
      { key: "peserta", label: "Perkiraan jumlah penonton / peserta", placeholder: "mis. 3.000 orang", optional: true },
    ],
  },
};

const PREFIX: [string, ClusterKey][] = [
  ["/asuransi-kendaraan", "kendaraan"],
  ["/asuransi-properti", "properti"],
  ["/asuransi-engineering", "engineering"],
  ["/asuransi-surety-bond", "surety"],
  ["/asuransi-liability", "liability"],
  ["/asuransi-kargo", "kargo"],
  ["/asuransi-event", "event"],
];

// Artikel → klaster. Artikel kesehatan karyawan sengaja tidak ada di sini: sudah punya
// tombol & form sendiri (PenawaranKesehatanModal). Artikel baru yang belum terdaftar tidak menampilkan tombol.
const ARTIKEL: Record<string, ClusterKey> = {
  "asuransi-armada-fleet-jogja": "kendaraan",
  "asuransi-kendaraan-jogja": "kendaraan",
  "asuransi-mobil-banjir": "kendaraan",
  "asuransi-mobil-bekas": "kendaraan",
  "asuransi-mobil-listrik": "kendaraan",
  "asuransi-rental-mobil-jogja": "kendaraan",
  "asuransi-truk-niaga-jogja": "kendaraan",
  "bengkel-rekanan-asuransi-jogja": "kendaraan",
  "cara-klaim-asuransi-mobil": "kendaraan",
  "cara-menghitung-premi-asuransi-mobil": "kendaraan",
  "perbedaan-all-risk-tlo": "kendaraan",
  "asuransi-kos-jogja": "properti",
  "asuransi-rumah-tinggal-jogja": "properti",
  "asuransi-umkm-jogja": "properti",
  "asuransi-vila-homestay-jogja": "properti",
  "cara-menghitung-nilai-asuransi": "properti",
  "pentingnya-asuransi-dunia-usaha-jogja": "properti",
  "asuransi-kontraktor-proyek-jogja": "engineering",
  "asuransi-mesin-pabrik-jogja": "engineering",
  "perbedaan-car-ear-asuransi-engineering": "engineering",
  "premi-asuransi-car-jogja": "engineering",
  "cara-mengurus-jaminan-penawaran-jogja": "surety",
  "jaminan-pelaksanaan-pemeliharaan-uang-muka": "surety",
  "perbedaan-surety-bond-bank-garansi": "surety",
  "syarat-asuransi-tender-pemerintah-diy": "surety",
  "cara-klaim-asuransi-liability": "liability",
  "contoh-kasus-gugatan-liability-bisnis": "liability",
  "employer-liability-panduan-jogja": "liability",
  "limbah-b3-liability-jogja": "liability",
  "perbedaan-jenis-asuransi-liability": "liability",
  "asuransi-kargo-ekspor-impor-jogja": "kargo",
  "asuransi-kargo-umkm-jogja": "kargo",
  "cara-klaim-asuransi-kargo": "kargo",
  "syarat-dokumen-asuransi-event-musik-jogja": "event",
};

export type Resolved = { cluster: ClusterKey; type: string };

/** Jenis produk dari URL. Hanya bila tepat satu aturan cocok; selain itu "konsultasi" (atau "lain" untuk event). */
export function inferType(cluster: ClusterKey, pathname: string): string {
  const c = PENAWARAN[cluster];
  const p = pathname.toLowerCase();
  const hits = c.rules.filter((r) => r.re.test(p)).map((r) => r.type);
  if (hits.length === 1) return hits[0];
  return c.types.find((t) => t.key === "konsultasi")?.key ?? c.types[c.types.length - 1].key;
}

/** Klaster + jenis default untuk sebuah path, atau null bila halaman tidak diberi tombol. */
export function resolvePenawaran(pathname: string | null | undefined): Resolved | null {
  const p = (pathname || "/").replace(/\/+$/, "") || "/";
  if (p.startsWith("/artikel/")) {
    const cluster = ARTIKEL[p.slice("/artikel/".length)];
    return cluster ? { cluster, type: inferType(cluster, p) } : null;
  }
  for (const [prefix, cluster] of PREFIX) {
    if (p === prefix || p.startsWith(prefix + "/")) return { cluster, type: inferType(cluster, p) };
  }
  return null;
}

export interface PenawaranForm {
  type: string;
  values: Record<string, string>;
  nama: string;
  hp: string;
  catatan: string;
}

export function buildPesan(clusterKey: ClusterKey, f: PenawaranForm, path: string): string {
  const c = PENAWARAN[clusterKey];
  const t = c.types.find((x) => x.key === f.type);
  const lines = [`Halo, saya ingin minta penawaran ${c.nama} lewat asuransijogja.biz.id.`, "", "*Kebutuhan*"];
  lines.push(`${c.typeLegend}: ${t ? t.label : f.type}`);
  for (const fd of c.fields) {
    const v = (f.values[fd.key] ?? "").trim();
    if (v) lines.push(`${fd.label}: ${v}`);
  }
  lines.push("", "*Pemohon*", `Nama: ${f.nama.trim()}`, `WhatsApp: ${f.hp.trim()}`);
  if (f.catatan.trim()) lines.push(`Catatan: ${f.catatan.trim()}`);
  lines.push("", `Halaman: https://asuransijogja.biz.id${path === "/" ? "" : path}`, "", "Mohon dibantu analisa awal dan penawarannya. Terima kasih.");
  return lines.join("\n");
}

export const penawaranWaUrl = (message: string) => `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(message)}`;

/** Nomor WhatsApp valid (format Indonesia): 08…, 628…, atau +628…, total 9–14 digit. */
export function validHp(raw: string): boolean {
  const d = raw.replace(/[^\d]/g, "");
  return /^(0|62)8\d{7,12}$/.test(d);
}
