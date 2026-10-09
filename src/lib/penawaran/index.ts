// "Minta Penawaran": konfigurasi klaster, penebak klaster dari URL, dan pembuat pesan WhatsApp.
// Untuk menambah produk / jenis / kolom, ubah file klaster yang bersangkutan di folder ini.

import { KONTAK } from "@/lib/data";
import { ENGINEERING } from "./engineering";
import { EVENT } from "./event";
import { KARGO } from "./kargo";
import { KENDARAAN } from "./kendaraan";
import { LIABILITY } from "./liability";
import { PROPERTI } from "./properti";
import { SURETY } from "./surety";
import type { ClusterKey, FieldDef, PenawaranCluster, PenawaranState } from "./base";

export type { ClusterKey, FieldDef, Option, PenawaranCluster, PenawaranState, PenawaranType, Requirement } from "./base";

export const PENAWARAN: Record<ClusterKey, PenawaranCluster> = {
  kendaraan: KENDARAAN,
  properti: PROPERTI,
  engineering: ENGINEERING,
  surety: SURETY,
  liability: LIABILITY,
  kargo: KARGO,
  event: EVENT,
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

/** Jenis produk dari URL. Hanya bila tepat satu aturan cocok; selain itu "konsultasi" (atau jenis terakhir bila tak ada). */
export function inferType(cluster: ClusterKey, pathname: string): string {
  const c = PENAWARAN[cluster];
  const p = pathname.toLowerCase();
  const hits = c.rules.filter((x) => x.re.test(p)).map((x) => x.type);
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

// ─── Helper form ─────────────────────────────────────────────
export const isVisible = (x: { showFor?: string[] }, type: string) => !x.showFor || x.showFor.includes(type);

export const typeLabel = (c: PenawaranCluster, key: string) => (c.types.find((t) => t.key === key) ?? c.types[c.types.length - 1]).label;

export function formatDigits(digits: string): string {
  return digits ? Number(digits).toLocaleString("id-ID") : "";
}

export function compactRupiah(digits: string): string {
  const n = Number(digits);
  if (!n) return "";
  const f = (v: number) => v.toLocaleString("id-ID", { maximumFractionDigits: 2 });
  if (n >= 1e12) return `≈ Rp ${f(n / 1e12)} triliun`;
  if (n >= 1e9) return `≈ Rp ${f(n / 1e9)} miliar`;
  if (n >= 1e6) return `≈ Rp ${f(n / 1e6)} juta`;
  return "";
}

export function initialValues(c: PenawaranCluster): Record<string, string> {
  const v: Record<string, string> = {};
  for (const f of c.fields) {
    if (f.kind === "segmented") v[f.key] = f.default;
    if (f.kind === "period") v[`${f.key}_unit`] = f.defaultUnit ?? "month";
  }
  return v;
}

/** Kolom wajib yang belum terisi untuk jenis produk terpilih (validasi langkah 1). */
export function missingFields(c: PenawaranCluster, type: string, values: Record<string, string>): string[] {
  return c.fields
    .filter((f) => isVisible(f, type) && !f.optional)
    .filter((f) => {
      const v = (values[f.key] ?? "").trim();
      return f.kind === "money" || f.kind === "period" || f.kind === "number" ? !Number(v) : !v;
    })
    .map((f) => f.key);
}

/** Nomor WhatsApp valid (format Indonesia): 08…, 628…, atau +628…, total 9–14 digit. */
export function validHp(raw: string): boolean {
  return /^(0|62)8\d{7,12}$/.test(raw.replace(/[^\d]/g, ""));
}

// ─── Pesan WhatsApp ──────────────────────────────────────────
function formatField(f: FieldDef, values: Record<string, string>): string {
  const raw = (values[f.key] ?? "").trim();
  if (!raw) return "";
  switch (f.kind) {
    case "money":
      return `Rp ${formatDigits(raw)}`;
    case "period":
      return `${raw} ${values[`${f.key}_unit`] === "day" ? "hari" : "bulan"}`;
    case "segmented":
    case "select":
      return f.options.find((x) => x.value === raw)?.label ?? raw;
    case "number":
      return f.suffix ? `${raw} ${f.suffix}` : raw;
    default:
      return raw;
  }
}

export function buildPesan(clusterKey: ClusterKey, s: PenawaranState, path: string): string {
  const c = PENAWARAN[clusterKey];
  const date = s.targetDate
    ? new Date(s.targetDate + "T00:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
    : "";
  const flags = c.flags.filter((f) => isVisible(f, s.type) && s.flags.includes(f.key)).map((f) => `- ${f.label}`);

  const lines: string[] = [
    `Halo Rio, saya ingin *meminta penawaran ${c.nama[0].toUpperCase()}${c.nama.slice(1)}* lewat asuransijogja.biz.id.`,
    "",
    "*Kebutuhan*",
    `${c.typeLine}: ${typeLabel(c, s.type)}`,
  ];
  for (const f of c.fields) {
    if (!isVisible(f, s.type)) continue;
    const text = formatField(f, s.values);
    if (text) lines.push(`${f.label}: ${text}`);
  }
  if (date) lines.push(`${c.copy.dateLabel}: ${date}`);
  if (s.client.trim()) lines.push(`${c.copy.clientLabel.replace(/\s*\(opsional\)/i, "")}: ${s.client.trim()}`);

  lines.push("", "*Pemohon*", `Nama: ${s.name.trim()}`);
  if (s.company.trim()) lines.push(`${c.copy.companyLabel}: ${s.company.trim()}`);
  lines.push(`WhatsApp: ${s.phone.trim()}`);

  if (flags.length || s.note.trim()) {
    lines.push("", "*Bahan analisa awal*", ...flags);
    if (s.note.trim()) lines.push(`Catatan: ${s.note.trim()}`);
  }

  lines.push(
    "",
    `Halaman: https://asuransijogja.biz.id${path === "/" ? "" : path}`,
    "",
    "Mohon dibantu analisa awal, estimasi premi, dan daftar dokumen yang dibutuhkan. Terima kasih."
  );
  return lines.join("\n");
}

export const penawaranWaUrl = (message: string) => `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(message)}`;
