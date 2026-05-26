import Link from "next/link";

// Map produk ID ke query param yang dikenali SPPAForm
export type ProdukId =
  | "kendaraan"
  | "properti"
  | "liability"
  | "engineering"
  | "surety"
  | "cargo";

interface CTAPenawaranProps {
  produk: ProdukId;
  /** Variant tampilan tombol */
  variant?: "gold" | "white" | "green";
  /** Ukuran tombol */
  size?: "sm" | "md" | "lg";
  /** Label kustom — default: "Dapatkan Simulasi Gratis" */
  label?: string;
  className?: string;
}

const ICON: Record<ProdukId, string> = {
  kendaraan:   "📄",
  properti:    "📄",
  liability:   "📄",
  engineering: "📄",
  surety:      "📄",
  cargo:       "📄",
};

const SIZE_CLS = {
  sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-7 py-3.5 text-[0.95rem] rounded-xl gap-2.5",
};

const VARIANT_CLS = {
  gold:  "bg-gold text-navy hover:bg-gold2",
  white: "bg-white/10 border border-white/25 text-white hover:bg-white/18 hover:border-gold/50",
  green: "bg-[#25D366] text-white hover:bg-[#1fb254]",
};

/**
 * Tombol CTA yang mengarah ke /sppa?produk={id}
 * Gunakan di Hero, section produk, footer, dll.
 *
 * Contoh penggunaan:
 *   <CTAPenawaran produk="kendaraan" variant="gold" size="lg" />
 *   <CTAPenawaran produk="properti" variant="white" label="Minta Detail PDF" />
 */
export default function CTAPenawaran({
  produk,
  variant = "gold",
  size = "md",
  label = "Dapatkan Simulasi Gratis",
  className = "",
}: CTAPenawaranProps) {
  return (
    <Link
      href={`/sppa?produk=${produk}`}
      className={[
        "inline-flex items-center font-bold no-underline transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
        SIZE_CLS[size],
        VARIANT_CLS[variant],
        className,
      ].join(" ")}
    >
      <span>{ICON[produk]}</span>
      <span>{label}</span>
    </Link>
  );
}
