// Tipe & helper bersama untuk mesin "Minta Penawaran" (popup 2 langkah → pesan WhatsApp + checklist dokumen).
// Setiap klaster produk (kendaraan, properti, ...) menyediakan satu objek PenawaranCluster di file masing-masing.

export type ClusterKey = "kendaraan" | "properti" | "engineering" | "surety" | "liability" | "kargo" | "event";

export type Option = { value: string; label: string };
export type PenawaranType = { key: string; label: string; hint: string };
export type Requirement = { doc: string; note: string; must: boolean; showFor?: string[] };

type FieldBase = {
  key: string;
  label: string;
  /** Hanya tampil untuk jenis produk ini. Kosong = selalu tampil. */
  showFor?: string[];
  optional?: boolean;
};

export type FieldDef = FieldBase &
  (
    | { kind: "segmented"; options: Option[]; default: string }
    | { kind: "money"; placeholder: string }
    | { kind: "period"; placeholder: string; defaultUnit?: "month" | "day" }
    | { kind: "select"; options: Option[]; placeholder: string }
    | { kind: "text"; placeholder: string }
    | { kind: "number"; placeholder: string; suffix?: string }
  );

export interface PenawaranCluster {
  key: ClusterKey;
  icon: string;
  /** Nama produk, huruf kecil di tengah kalimat: "asuransi kendaraan". */
  nama: string;
  /** Judul popup. */
  judul: string;
  subjudul: string;
  /** Judul grup pilihan jenis produk di form. */
  typeLegend: string;
  /** Label baris jenis produk di pesan WhatsApp. */
  typeLine: string;
  types: PenawaranType[];
  /** Aturan menebak jenis dari URL. Dipakai hanya bila tepat satu aturan cocok. */
  rules: { type: string; re: RegExp }[];
  /** Jenis produk yang nama perusahaannya tidak wajib diisi (mis. perorangan). */
  companyOptionalFor?: string[];
  fields: FieldDef[];
  /** Pilihan "bahan analisa awal" (centang). */
  flags: { key: string; label: string; showFor?: string[] }[];
  /** Dokumen umum (berlaku untuk semua jenis, atau sebagian lewat showFor). */
  general: Requirement[];
  /** Dokumen khusus per jenis produk. */
  specific: Record<string, Requirement[]>;
  disclaimer: string;
  copy: {
    dateLabel: string;
    clientLabel: string;
    clientPh: string;
    companyLabel: string;
    notePh: string;
  };
}

export interface PenawaranState {
  type: string;
  values: Record<string, string>;
  name: string;
  company: string;
  phone: string;
  targetDate: string;
  client: string;
  flags: string[];
  note: string;
}

export const r = (doc: string, note: string, must = true, showFor?: string[]): Requirement => ({ doc, note, must, showFor });
export const o = (value: string, label: string): Option => ({ value, label });

export const KONSULTASI: PenawaranType = { key: "konsultasi", label: "Belum yakin", hint: "Bantu saya menentukan" };
export const YES_NO: Option[] = [o("yes", "Ya"), o("no", "Tidak")];
