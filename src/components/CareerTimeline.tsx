"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type Stop = {
  role: string;
  org: string;
  period: string;
  duration: string;
  location: string;
  desc: string;
  logo?: string;
  current?: boolean;
};

const stops: Stop[] = [
  {
    role: "Account Officer",
    org: "PT Asuransi Umum Bumida 1967",
    period: "Feb 2013 – Agu 2016",
    duration: "3 thn 7 bln",
    location: "Batam, Kepulauan Riau",
    desc: "Mengawali karier dari titik paling dasar — turun langsung ke lapangan untuk memahami bagaimana nasabah biasa sebenarnya membuat keputusan membeli polis.",
    logo: "/logos/bumida.png",
  },
  {
    role: "Sales & Marketing Specialist",
    org: "PT Asuransi Purna Artanugraha (ASPAN)",
    period: "Sep 2016 – Agu 2021",
    duration: "4 thn 11 bln",
    location: "Bengkulu",
    desc: "Bertahun-tahun berhadapan langsung dengan pemilik usaha kecil dan keluarga, belajar menerjemahkan produk asuransi yang rumit jadi pilihan yang masuk akal buat mereka.",
    logo: "/logos/aspan.png",
  },
  {
    role: "Branch Manager",
    org: "PT Asuransi Purna Artanugraha (ASPAN)",
    period: "Sep 2021 – Agu 2022",
    duration: "11 bln",
    location: "Bengkulu",
    desc: "Mengelola cabang dari sisi bisnis sekaligus sisi manusia — memastikan setiap klaim nasabah diselesaikan, bukan sekadar dicatat sebagai statistik.",
    logo: "/logos/aspan.png",
  },
  {
    role: "Praktisi Asuransi Digital",
    org: "Asuransi Jogja",
    period: "Agu 2022 – Sekarang",
    duration: "4 thn",
    location: "Yogyakarta",
    desc: "Kini fokus melayani klien Yogyakarta secara online — dari pemilik kos dan UMKM hingga kontraktor tender, dengan pendekatan konsultasi yang sama seperti saat masih di lapangan.",
    current: true,
  },
];

/* Garis aktif berada di 60% tinggi layar. Node dianggap "tercapai"
   saat bagian atasnya melewati garis itu — sinkron dengan useScroll di bawah. */
const TRIGGER_LINE = 0.6;
const ORBIT_TURNS = 2; // jumlah putaran cahaya mengelilingi kartu
const ORBIT_SECONDS = 3;

function TimelineStop({ s, reduce }: { s: Stop; reduce: boolean }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [orbit, setOrbit] = useState(false);
  const reached = useInView(nodeRef, {
    once: true,
    margin: `0px 0px -${(1 - TRIGGER_LINE) * 100}% 0px`,
  });

  // Urutan: node berdenyut → kartu muncul → cahaya pindah & mengelilingi kartu.
  useEffect(() => {
    if (!reached || reduce) return;
    const t = setTimeout(() => setOrbit(true), 700);
    return () => clearTimeout(t);
  }, [reached, reduce]);

  return (
    <li className="relative pl-20">
      {/* NODE */}
      <div ref={nodeRef} className="absolute left-0 top-0 z-10 w-16 h-16">
        {reached && !reduce && (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-gold/50"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        )}
        <motion.div
          className={`relative w-full h-full rounded-full flex items-center justify-center overflow-hidden border-4 border-gold shadow-md ${
            s.current ? "bg-navy" : "bg-white"
          }`}
          animate={
            reached
              ? {
                  scale: reduce ? 1 : [1, 1.3, 0.95, 1],
                  boxShadow:
                    "0 0 0 4px rgba(232,185,106,0.25), 0 0 22px 6px rgba(232,185,106,0.55)",
                }
              : { scale: 1 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {s.logo ? (
            <Image
              src={s.logo}
              alt={`Logo ${s.org}`}
              width={40}
              height={40}
              className="object-contain"
            />
          ) : (
            <span className="text-gold2 font-heading font-bold text-lg">R</span>
          )}
        </motion.div>
      </div>

      {/* KARTU — wrapper tipis berfungsi sebagai "border" tempat cahaya berputar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: reduce ? 0 : -28 }}
        animate={reached ? { opacity: 1, scale: 1, x: 0 } : {}}
        transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.9, delay: 0.15 }}
        className={`relative overflow-hidden rounded-card p-[2px] ${
          s.current ? "bg-gold2/40" : "bg-black/5"
        }`}
      >
        {orbit && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              className="aspect-square w-[260%] shrink-0"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(232,185,106,0.2) 290deg, #C8963E 335deg, #F5D99A 360deg)",
              }}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360 * ORBIT_TURNS, opacity: [0, 1, 1, 0] }}
              transition={{
                rotate: { duration: ORBIT_SECONDS, ease: "easeInOut" },
                opacity: { duration: ORBIT_SECONDS, times: [0, 0.08, 0.85, 1] },
              }}
              onAnimationComplete={() => setOrbit(false)}
            />
          </div>
        )}

        <div
          className={`relative rounded-[12px] p-5 ${
            s.current ? "bg-navy" : "bg-cream"
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3
              className={`font-heading font-bold text-lg ${
                s.current ? "text-white" : "text-navy"
              }`}
            >
              {s.role}
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#C8963E] text-white">
              {s.duration}
            </span>
          </div>
          <p className={`text-sm font-medium mb-1 ${s.current ? "text-[#F5D99A]" : "text-navy2"}`}>
            {s.org}
          </p>
          <p className={`text-xs mb-2 ${s.current ? "text-white/50" : "text-[#94a3b8]"}`}>
            {s.period} · {s.location}
          </p>
          <p className={`text-sm leading-relaxed ${s.current ? "text-white/80" : "text-[#475569]"}`}>
            {s.desc}
          </p>
        </div>
      </motion.div>
    </li>
  );
}

export default function CareerTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.6"], // = TRIGGER_LINE
  });
  // Spring = damping halus agar garis tidak "patah-patah" saat scroll.
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.4,
    restDelta: 0.001,
  });
  const headTop = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div ref={ref} className="relative">
      {/* jalur garis (redup) */}
      <div
        className="absolute left-8 top-0 bottom-0 w-[3px] -translate-x-1/2 rounded-full bg-gold/20"
        aria-hidden="true"
      />
      {/* garis aktif: terisi dari atas ke bawah mengikuti scroll */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-[3px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-[#C8963E] via-[#E8B96A] to-[#F5D99A] shadow-[0_0_12px_2px_rgba(232,185,106,0.6)]"
        style={{ scaleY: reduce ? 1 : progress }}
        aria-hidden="true"
      />
      {/* titik cahaya di ujung garis */}
      {!reduce && (
        <motion.div
          className="absolute left-8 z-[5] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold3 shadow-[0_0_14px_5px_rgba(232,185,106,0.85)]"
          style={{ top: headTop }}
          aria-hidden="true"
        />
      )}

      <ol className="relative space-y-10">
        {stops.map((s) => (
          <TimelineStop key={s.role + s.period} s={s} reduce={reduce} />
        ))}
      </ol>
    </div>
  );
}
