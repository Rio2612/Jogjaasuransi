"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  motion,
  type AnimationPlaybackControls,
} from "framer-motion";
import { TESTIMONI } from "@/lib/data";

type Review = (typeof TESTIMONI)[number];

/* Jumlah pengulangan daftar testimoni di dalam satu "grup".
   Satu grup harus lebih lebar dari layar terlebar agar tidak ada ruang kosong. */
const REPEAT = 4;
/* Detik untuk satu siklus penuh. Makin besar = makin pelan. */
const DURATION = 90;

/* ------------------------------------------------------------------ */
/*  Kartu                                                              */
/* ------------------------------------------------------------------ */
function ReviewCard({ t }: { t: Review }) {
  return (
    // padding-right (bukan gap) supaya lebar tiap grup persis identik → loop mulus
    <div className="w-[280px] shrink-0 pr-4 sm:w-[340px] sm:pr-5 lg:w-[400px]">
      <div className="h-full rounded-card border border-black/5 bg-cream p-5 sm:p-7">
        <div className="mb-3 text-[1rem] text-goldtext">★★★★★</div>
        <p className="mb-4 text-[0.95rem] italic leading-[1.7] text-[#475569] sm:text-[1rem] sm:leading-[1.75]">
          &ldquo;{t.teks}&rdquo;
        </p>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy font-heading text-[0.95rem] font-bold text-gold">
            {t.inisial}
          </div>
          <div>
            <div className="text-[0.95rem] font-semibold text-navy sm:text-[1rem]">{t.nama}</div>
            <div className="text-xs text-[#475569]">{t.peran}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Satu baris marquee                                                 */
/* ------------------------------------------------------------------ */
function MarqueeRow({
  items,
  direction,
  active,
  reduce,
  decorative = false,
}: {
  items: Review[];
  direction: "left" | "right";
  active: boolean; // true saat section terlihat di layar
  reduce: boolean;
  decorative?: boolean; // baris duplikat disembunyikan dari screen reader
}) {
  const [hovered, setHovered] = useState(false);
  const controls = useRef<AnimationPlaybackControls | null>(null);

  // Track berisi 2 grup identik. Bergeser tepat -50% = satu grup → loop tanpa lompatan.
  const x = useMotionValue(direction === "left" ? "0%" : "-50%");

  // Buat animasi sekali. ease "linear" + repeat Infinity = kecepatan konstan.
  useEffect(() => {
    if (reduce) return;
    const range = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];
    controls.current = animate(x, range, {
      duration: DURATION,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    controls.current.pause(); // mulai dalam keadaan berhenti; efek di bawah yang menjalankan
    return () => controls.current?.stop();
  }, [direction, reduce, x]);

  // Jalan hanya saat section terlihat (dan tidak di-hover); pause/play melanjutkan dari posisi terakhir.
  useEffect(() => {
    if (!controls.current) return;
    if (active && !hovered) controls.current.play();
    else controls.current.pause();
  }, [active, hovered, reduce]);

  const group = Array.from({ length: REPEAT }).flatMap(() => items);
  const groups = reduce ? 1 : 2;

  return (
    <div
      className={`overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] ${
        reduce ? "overflow-x-auto" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-hidden={decorative || undefined}
    >
      <motion.div
        className="flex w-max will-change-transform"
        style={reduce ? undefined : { x }}
      >
        {Array.from({ length: groups }).map((_, g) => (
          <div key={g} className="flex shrink-0" aria-hidden={g > 0 || undefined}>
            {(reduce ? items : group).map((t, i) => (
              <ReviewCard key={`${g}-${i}`} t={t} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function Testimonial() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  // margin 100px: animasi mulai sedikit sebelum section masuk layar
  const inView = useInView(ref, { margin: "100px 0px 100px 0px" });

  // Baris bawah memakai urutan berbeda agar tidak terlihat kembar dengan baris atas.
  const rowTop = TESTIMONI;
  const rowBottom = [...TESTIMONI.slice(1), ...TESTIMONI.slice(0, 1)];

  return (
    <section ref={ref} id="testimonial" className="overflow-hidden bg-white py-[5.5rem]">
      <div className="mb-12 px-[5vw] text-center">
        <div className="mb-2 text-xs font-bold uppercase tracking-[2.5px] text-goldtext">Testimoni Klien</div>
        <h2 className="font-heading text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.22] text-navy">Apa Kata Mereka?</h2>
        <p className="mx-auto mt-3 max-w-[560px] text-[0.95rem] leading-[1.8] text-[#475569]">
          Kepercayaan klien adalah motivasi terbesar kami untuk terus memberikan pelayanan yang terbaik.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        <MarqueeRow items={rowTop} direction="right" active={inView} reduce={reduce} />
        <MarqueeRow items={rowBottom} direction="left" active={inView} reduce={reduce} decorative />
      </div>
    </section>
  );
}
