// Pesan WhatsApp untuk tombol float, menyesuaikan halaman yang sedang dibuka.
// Halaman klaster produk (pilar, sub produk, artikel terdaftar) memakai konfigurasi "Minta Penawaran"
// supaya topiknya selalu sinkron. Halaman lain memakai pesan umum.

import { KONTAK } from "@/lib/data";
import { PENAWARAN, resolvePenawaran, typeLabel } from "@/lib/penawaran";

const BASE_URL = "https://asuransijogja.biz.id";

// Halaman yang tidak boleh menampilkan tombol (admin, alur form SPPA, API).
const HIDDEN_PREFIX = ["/admin", "/sppa", "/api"];

const ACRONYM = new Set(["car", "ear", "tlo", "b3", "umkm", "diy", "ev", "pa", "bpjs"]);

function humanizeSlug(slug: string): string {
  return decodeURIComponent(slug)
    .split("-")
    .filter(Boolean)
    .map((w) => (ACRONYM.has(w) ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}


export function isWaFloatHidden(pathname: string): boolean {
  return HIDDEN_PREFIX.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function buildWaFloatMessage(pathname: string): string {
  const p = (pathname || "/").replace(/\/+$/, "") || "/";
  const url = `${BASE_URL}${p === "/" ? "" : p}`;
  const resolved = resolvePenawaran(p);
  const isArtikel = p.startsWith("/artikel/");
  const artikelTitle = isArtikel ? humanizeSlug(p.slice("/artikel/".length)) : "";

  let intro: string;
  if (resolved) {
    const c = PENAWARAN[resolved.cluster];
    const jenis = resolved.type !== "konsultasi" ? typeLabel(c, resolved.type) : "";
    const topik = jenis ? `${c.nama} (${jenis})` : c.nama;
    intro = isArtikel
      ? `Halo Rio, saya baru membaca artikel "${artikelTitle}" dan ingin konsultasi soal ${topik}.`
      : `Halo Rio, saya ingin konsultasi dan minta penawaran ${topik}.`;
  } else if (isArtikel) {
    intro = `Halo Rio, saya baru membaca artikel "${artikelTitle}" dan ingin konsultasi asuransi.`;
  } else if (p === "/asuransi-kesehatan-karyawan" || p.startsWith("/asuransi-kesehatan-karyawan/")) {
    intro = "Halo Rio, saya ingin konsultasi asuransi kesehatan karyawan.";
  } else {
    intro = "Halo Rio, saya ingin konsultasi asuransi.";
  }

  return `${intro}\n\nHalaman: ${url}`;
}

export const waFloatUrl = (pathname: string) =>
  `https://wa.me/${KONTAK.wa}?text=${encodeURIComponent(buildWaFloatMessage(pathname))}`;

