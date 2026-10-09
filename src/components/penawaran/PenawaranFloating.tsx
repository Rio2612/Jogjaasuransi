"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PenawaranButton from "./PenawaranButton";
import { resolvePenawaran } from "@/lib/penawaran";

/**
 * Tombol melayang "Minta Penawaran" di pojok kanan bawah. Muncul setelah pengunjung menggulir
 * sedikit, hanya di halaman pilar, sub produk, dan artikel yang punya klaster produk.
 */
export default function PenawaranFloating() {
  const pathname = usePathname() || "/";
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (!resolvePenawaran(pathname)) return null;

  return (
    <div
      className={`fixed right-4 z-40 transition-all duration-300 motion-reduce:transition-none ${
        shown ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"
      }`}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <PenawaranButton variant="float" className="rounded-full px-5 py-3" />
    </div>
  );
}
