"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Warna mengikuti template Asuransi Jogja (gold #C8963E / gold2 #E8B96A).
// Bayangan hanya di sisi bawah: offset ke bawah + spread negatif agar sisi kiri/kanan tetap bersih.
const GLOW_ON =
  "0 12px 22px -10px rgba(200,150,62,0.60), 0 26px 46px -16px rgba(232,185,106,0.45)";
const GLOW_OFF =
  "0 0px 0px 0px rgba(200,150,62,0), 0 0px 0px 0px rgba(232,185,106,0)";

/**
 * Bayangan emas lembut di bawah kartu saat kartu berada di area tengah layar
 * (sekitar 30% tinggi layar di tengah), memudar lagi saat kartu menjauh.
 *
 * Taruh sebagai SAUDARA (sebelum) kartu di dalam pembungkus `relative group/wrap`,
 * bukan di dalam kartu, karena kartu memakai overflow-hidden yang akan memotong bayangan.
 * Overlay ikut terangkat saat kartu di-hover agar tetap sejajar.
 */
export default function NeonGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { margin: "-35% 0px -35% 0px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-card transition-transform duration-150 group-hover/wrap:-translate-y-1"
      initial={false}
      animate={{
        opacity: on ? 1 : 0,
        boxShadow: on ? GLOW_ON : GLOW_OFF,
      }}
      transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut" }}
    />
  );
}
