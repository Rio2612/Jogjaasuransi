"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { resolvePenawaran, type ClusterKey } from "@/lib/penawaran";

// Popup dimuat saat tombol pertama kali diklik, jadi tidak menambah beban halaman.
const PenawaranSheet = dynamic(() => import("./PenawaranSheet"), { ssr: false });

const VARIANT = {
  gold: "bg-gold text-navy hover:bg-gold2 hover:shadow-lg",
  navy: "bg-navy text-white hover:bg-navy2 hover:shadow-lg",
  outline: "border-2 border-navy/20 bg-white text-navy hover:border-gold",
  float: "bg-navy text-white shadow-xl shadow-navy/30 ring-1 ring-gold/50 hover:bg-navy2",
} as const;

export default function PenawaranButton({
  cluster,
  type,
  variant = "gold",
  label = "Minta Penawaran",
  className = "",
}: {
  /** Kosong = ditebak dari URL halaman. */
  cluster?: ClusterKey;
  type?: string;
  variant?: keyof typeof VARIANT;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const auto = resolvePenawaran(pathname);
  const key = cluster ?? auto?.cluster;
  if (!key) return null;
  const defaultType = type ?? (auto && auto.cluster === key ? auto.type : "konsultasi");

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${VARIANT[variant]} ${className}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
        <span>{label}</span>
      </button>
      {open && <PenawaranSheet cluster={key} defaultType={defaultType} path={pathname} onClose={() => setOpen(false)} />}
    </>
  );
}
