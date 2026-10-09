"use client";

import { usePathname } from "next/navigation";
import PenawaranButton from "./PenawaranButton";
import { PENAWARAN, resolvePenawaran } from "@/lib/penawaran";

/**
 * Blok ajakan "Minta Penawaran" di bawah konten halaman pilar, sub produk, dan artikel.
 * Klaster dan jenis produk ditebak otomatis dari URL (lihat src/lib/penawaran.ts).
 */
export default function PenawaranCTA() {
  const pathname = usePathname() || "/";
  const r = resolvePenawaran(pathname);
  if (!r) return null;
  const c = PENAWARAN[r.cluster];

  return (
    <section aria-label="Minta penawaran" className="border-t border-black/5 bg-cream px-[5vw] py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-card border border-gold/30 border-l-[6px] border-l-gold bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="max-w-xl">
          <p className="mb-1 text-xs font-bold uppercase tracking-[2px] text-goldtext">
            {c.icon} Minta Penawaran
          </p>
          <h2 className="font-heading text-[1.25rem] font-bold leading-snug text-navy">
            Butuh penawaran {c.nama} di Yogyakarta?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#475569]">
            Isi data singkat, pesan WhatsApp ke praktisi langsung terisi otomatis. Gratis dan tanpa kewajiban.
          </p>
        </div>
        <PenawaranButton variant="gold" className="w-full shrink-0 sm:w-auto" />
      </div>
    </section>
  );
}
