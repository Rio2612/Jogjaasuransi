"use client";
import { useState, useEffect } from "react";
import { KONTAK } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#produk", label: "Produk" },
    { href: "#kalkulator", label: "Kalkulator Premi" },
    { href: "#why", label: "Keunggulan" },
    { href: "#about", label: "Tentang" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] h-[68px] transition-all duration-300 ${
        scrolled ? "bg-navy/[0.98] backdrop-blur-md shadow-lg" : "bg-navy/95 backdrop-blur-sm"
      } border-b border-gold/20`}
    >
      <div className="font-heading text-[1.4rem] font-bold text-white">
        Asuransi<span className="text-gold">Jogja</span>
      </div>

      <nav className="hidden md:flex gap-7">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="text-white/75 text-[0.85rem] font-medium hover:text-gold2 transition-colors no-underline">
            {l.label}
          </a>
        ))}
      </nav>

      <a href={`https://wa.me/${KONTAK.wa}`} className="hidden md:inline-block bg-gold text-navy px-5 py-[9px] rounded-lg text-[0.85rem] font-bold hover:bg-gold2 transition-all hover:-translate-y-px no-underline">
        Konsultasi Gratis
      </a>

      <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-navy border-t border-gold/20 flex flex-col py-4 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-white/80 px-[5vw] py-3 text-sm font-medium hover:text-gold no-underline">
              {l.label}
            </a>
          ))}
          <a href={`https://wa.me/${KONTAK.wa}`} className="mx-[5vw] mt-3 bg-gold text-navy text-center py-3 rounded-lg font-bold text-sm no-underline">
            Konsultasi Gratis
          </a>
        </div>
      )}
    </header>
  );
}
