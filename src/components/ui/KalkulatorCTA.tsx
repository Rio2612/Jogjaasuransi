"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { KALKULATOR_INFO, kalkulatorUntuk } from "@/lib/kalkulatorCTA";

/**
 * Kartu CTA ke kalkulator premi (properti / mobil).
 * Tampil otomatis di sub halaman & blog yang terkait — lihat src/lib/kalkulatorCTA.ts.
 */
export default function KalkulatorCTA() {
  const pathname = usePathname() || "/";
  const ids = kalkulatorUntuk(pathname);
  if (ids.length === 0) return null;

  return (
    <aside aria-label="Kalkulator premi" className="py-10 px-[5vw] bg-cream border-t border-black/5">
      <div className={`max-w-4xl mx-auto grid grid-cols-1 gap-4 ${ids.length > 1 ? "md:grid-cols-2" : ""}`}>
        {ids.map((id) => {
          const k = KALKULATOR_INFO[id];
          return (
            <div
              key={id}
              className="bg-navy border border-gold/25 rounded-card p-6 flex flex-col gap-4"
            >
              <div>
                <div className="text-xs font-bold tracking-[2px] uppercase text-gold2 mb-1">{k.kicker}</div>
                <div className="font-heading text-white font-bold text-[1.1rem] leading-snug mb-1.5">{k.title}</div>
                <p className="text-white/70 text-sm leading-relaxed">{k.desc}</p>
              </div>
              <Link
                href={k.href}
                className="self-start inline-flex items-center bg-gold text-navy px-5 py-2.5 rounded-xl font-bold text-sm no-underline hover:bg-gold2 hover:-translate-y-0.5 transition-all"
              >
                {k.label} →
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
