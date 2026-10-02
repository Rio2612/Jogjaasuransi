"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clusterFor } from "@/lib/clusters";

/** Blok "Topik Terkait": link dua arah antar halaman dalam satu klaster topik. */
export default function ClusterLinks() {
  const pathname = usePathname() || "/";
  const items = clusterFor(pathname);
  if (items.length === 0) return null;

  return (
    <aside aria-label="Topik terkait" className="py-12 px-[5vw] bg-white border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-[#5A6472] mb-4">Topik Terkait</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="bg-cream border border-black/8 rounded-xl p-4 no-underline hover:border-gold/40 hover:-translate-y-0.5 transition-all group"
            >
              <div className="font-semibold text-navy text-sm group-hover:text-gold transition-colors mb-0.5">{i.label}</div>
              <div className="text-xs text-[#475569]">{i.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
