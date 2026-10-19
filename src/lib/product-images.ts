import fs from "node:fs";
import path from "node:path";
import type { Cluster } from "@/lib/data";

/**
 * Foto produk untuk kartu "Produk Unggulan" di beranda.
 *
 * Taruh file di `public/images/produk/<slug>.webp` (juga boleh .jpg/.jpeg/.png/.avif).
 * Jika file belum ada, kartu otomatis tampil tanpa foto (desain lama), jadi foto bisa
 * ditambahkan bertahap tanpa mengubah kode. Dicek saat build (server component).
 *
 * Kunci = nama produk persis seperti di src/lib/data.ts. Produk yang namanya tidak
 * ada di daftar ini memakai slug otomatis dari namanya.
 */
export const SLUG_BY_NAME: Record<string, string> = {
  // Kendaraan
  "Asuransi Mobil Jogja": "mobil",
  "Asuransi Dump Truk & Kendaraan Niaga": "dump-truk-niaga",
  "Asuransi Armada Kendaraan": "armada-fleet",
  // Properti
  "Asuransi Kebakaran Rumah Tinggal Jogja": "kebakaran-rumah",
  "Asuransi Kebakaran Kos Jogja": "kebakaran-kos",
  "Asuransi Kebakaran Ruko Jogja": "kebakaran-ruko",
  "Property All Risk (PAR)": "property-all-risk",
  "Perluasan Banjir & Gempa Bumi": "banjir-gempa",
  "Asuransi Risiko Kejahatan": "risiko-kejahatan",
  // Engineering
  "Contractor All Risk (CAR)": "contractor-all-risk",
  "Erection All Risk (EAR)": "erection-all-risk",
  "Machinery Breakdown (MB)": "machinery-breakdown",
  // Kargo
  "Asuransi Kargo Darat": "kargo-darat",
  "Asuransi Kargo Udara": "kargo-udara",
  "Marine Cargo Insurance": "marine-cargo",
  // Liability
  "Liability Limbah B3": "limbah-b3",
  "Public Liability": "public-liability",
  "Product Liability": "product-liability",
  // Event
  "Asuransi Konser & Festival Musik": "konser-festival",
  "Asuransi Event Motocross & Grasstrack": "motocross-grasstrack",
  // Surety Bond
  "Jaminan Penawaran (Bid Bond)": "bid-bond",
  "Jaminan Pelaksanaan (Performance Bond)": "performance-bond",
  "Jaminan Uang Muka (Advance Payment Bond)": "advance-payment-bond",
  // Kesehatan Karyawan
  "Asuransi Kesehatan Karyawan": "kesehatan-karyawan",
  "Paket Rawat Inap & Rawat Jalan": "rawat-inap-jalan",
  "Cashless di RS Rekanan Jogja": "cashless-rs",
};

const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"] as const;
const DIR = path.join(process.cwd(), "public", "images", "produk");

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "dan")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function findImage(slug: string): string | undefined {
  for (const ext of EXTENSIONS) {
    const file = `${slug}.${ext}`;
    if (fs.existsSync(path.join(DIR, file))) return `/images/produk/${file}`;
  }
  return undefined;
}

/** Peta nama produk -> path foto, hanya untuk produk yang fotonya sudah ada. */
export function getProdukImages(clusters: Cluster[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const c of clusters) {
    for (const p of c.produk) {
      const src = findImage(SLUG_BY_NAME[p.name] ?? slugify(p.name));
      if (src) out[p.name] = src;
    }
  }
  return out;
}
