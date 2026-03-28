"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { KONTAK } from "@/lib/data";

const NAV_CLUSTERS = [
  { href: "/asuransi-kendaraan", icon: "🚗", label: "Asuransi Kendaraan", sub: [
    { href: "/asuransi-kendaraan/mobil", label: "Asuransi Mobil" },
    { href: "/asuransi-kendaraan/dump-truk-niaga", label: "Dump Truk & Niaga" },
    { href: "/asuransi-kendaraan/armada-fleet", label: "Armada & Fleet" },
  ]},
  { href: "/asuransi-properti", icon: "🏠", label: "Asuransi Properti", sub: [
    { href: "/asuransi-properti/kebakaran", label: "Kebakaran" },
    { href: "/asuransi-properti/property-all-risk", label: "Property All Risk" },
    { href: "/asuransi-properti/hotel-vila", label: "Hotel & Vila" },
    { href: "/asuransi-properti/banjir-gempa", label: "Banjir & Gempa" },
  ]},
  { href: "/asuransi-engineering", icon: "⚙️", label: "Engineering", sub: [
    { href: "/asuransi-engineering/contractor-all-risk", label: "Contractor All Risk" },
    { href: "/asuransi-engineering/erection-all-risk", label: "Erection All Risk" },
    { href: "/asuransi-engineering/machinery-breakdown", label: "Machinery Breakdown" },
  ]},
  { href: "/asuransi-kargo", icon: "📦", label: "Asuransi Kargo", sub: [
    { href: "/asuransi-kargo/pengiriman-barang", label: "Pengiriman Barang" },
    { href: "/asuransi-kargo/kargo-udara-laut", label: "Kargo Udara & Laut" },
    { href: "/asuransi-kargo/ekspedisi-umkm", label: "Ekspedisi UMKM" },
  ]},
  { href: "/asuransi-liability", icon: "🛡️", label: "Liability", sub: [
    { href: "/asuransi-liability/public-liability", label: "Public Liability" },
    { href: "/asuransi-liability/employer-liability", label: "Employer Liability" },
    { href: "/asuransi-liability/limbah-b3", label: "Limbah B3" },
  ]},
  { href: "/asuransi-surety-bond", icon: "📋", label: "Surety Bond", sub: [
    { href: "/asuransi-surety-bond/jaminan-penawaran", label: "Jaminan Penawaran" },
    { href: "/asuransi-surety-bond/jaminan-pelaksanaan", label: "Jaminan Pelaksanaan" },
    { href: "/asuransi-surety-bond/jaminan-uang-muka", label: "Jaminan Uang Muka" },
    { href: "/asuransi-surety-bond/jaminan-pemeliharaan", label: "Jaminan Pemeliharaan" },
  ]},
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [produkOpen, setProdukOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const produkRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (produkRef.current && !produkRef.current.contains(e.target as Node)) {
        setProdukOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); setProdukOpen(false); }, [pathname]);

  const homeLinks = [
    { href: "#kalkulator", label: "Kalkulator Premi" },
    { href: "#why", label: "Keunggulan" },
    { href: "#about", label: "Tentang" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] h-[68px] transition-all duration-300 ${
      scrolled ? "bg-navy/[0.98] backdrop-blur-md shadow-lg" : "bg-navy/95 backdrop-blur-sm"
    } border-b border-gold/20`}>

      {/* LOGO */}
      <Link href="/" className="font-heading text-[1.4rem] font-bold text-white no-underline flex-shrink-0">
        Asuransi<span className="text-gold">Jogja</span>
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-6">

        {/* Mega-Menu Produk */}
        <div ref={produkRef} className="relative">
          <button
            onClick={() => setProdukOpen(!produkOpen)}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors bg-transparent border-none cursor-pointer ${produkOpen ? "text-gold2" : "text-white/75 hover:text-gold2"}`}
          >
            Produk
            <span className={`text-[0.55rem] transition-transform duration-200 inline-block ${produkOpen ? "rotate-180" : ""}`}>▼</span>
          </button>

          {produkOpen && (
            <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[680px] bg-white rounded-[16px] shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-black/6 p-5 grid grid-cols-3 gap-x-4 gap-y-1">
              <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rotate-45 border-t border-l border-black/6 rounded-tl-sm" />
              {NAV_CLUSTERS.map(c => (
                <div key={c.href} className="flex flex-col">
                  <Link
                    href={c.href}
                    onClick={() => setProdukOpen(false)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-gold/8 transition-colors no-underline group mb-1"
                  >
                    <span className="text-[1.1rem] leading-none">{c.icon}</span>
                    <span className="font-heading font-bold text-navy text-[0.95rem] group-hover:text-gold transition-colors leading-tight">{c.label}</span>
                  </Link>
                  {c.sub.map(s => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setProdukOpen(false)}
                      className="ml-8 text-[0.76rem] text-[#64748B] hover:text-gold py-[3px] transition-colors no-underline leading-snug"
                    >
                      › {s.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="col-span-3 mt-3 pt-3 border-t border-black/6 flex items-center justify-between">
                <Link href="/artikel" onClick={() => setProdukOpen(false)} className="text-[0.78rem] text-[#64748B] hover:text-gold transition-colors no-underline">
                  📚 Artikel &amp; Edukasi Asuransi →
                </Link>
                <a href={`https://wa.me/${KONTAK.wa}`} onClick={() => setProdukOpen(false)} className="bg-gold text-navy text-[0.78rem] font-bold px-4 py-1.5 rounded-lg hover:bg-gold2 transition-colors no-underline">
                  💬 Konsultasi Gratis
                </a>
              </div>
            </div>
          )}
        </div>

        {isHome && homeLinks.map(l => (
          <a key={l.href} href={l.href} className="text-white/75 text-sm font-medium hover:text-gold2 transition-colors no-underline">
            {l.label}
          </a>
        ))}

        <Link href="/artikel" className="text-white/75 text-sm font-medium hover:text-gold2 transition-colors no-underline">
          Artikel
        </Link>

        {isHome && (
          <a href="#faq" className="text-white/75 text-sm font-medium hover:text-gold2 transition-colors no-underline">
            FAQ
          </a>
        )}
      </nav>

      {/* CTA Desktop */}
      <a href={`https://wa.me/${KONTAK.wa}`} className="hidden md:inline-block bg-gold text-navy px-5 py-[9px] rounded-lg text-sm font-bold hover:bg-gold2 transition-all hover:-translate-y-px no-underline">
        Konsultasi Gratis
      </a>

      {/* Hamburger */}
      <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-navy border-t border-gold/20 flex flex-col max-h-[82vh] overflow-y-auto md:hidden pb-4">

          {/* Produk accordion */}
          <button
            onClick={() => setMobileExpanded(!mobileExpanded)}
            className="flex justify-between items-center text-white/85 px-[5vw] py-3.5 text-sm font-semibold bg-transparent border-none cursor-pointer border-b border-white/8 w-full text-left"
          >
            Semua Produk
            <span className={`text-gold text-[0.6rem] transition-transform inline-block ${mobileExpanded ? "rotate-180" : ""}`}>▼</span>
          </button>

          {mobileExpanded && (
            <div className="bg-navy2/30">
              {NAV_CLUSTERS.map(c => (
                <div key={c.href} className="border-b border-white/5">
                  <Link
                    href={c.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5 px-[6vw] py-2.5 text-sm font-bold text-gold no-underline"
                  >
                    <span>{c.icon}</span>{c.label}
                  </Link>
                  {c.sub.map(s => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-[10vw] py-[6px] text-xs text-white/55 hover:text-gold no-underline"
                    >
                      › {s.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {isHome && homeLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-white/75 px-[5vw] py-3 text-sm font-medium hover:text-gold no-underline border-b border-white/5">
              {l.label}
            </a>
          ))}

          <Link href="/artikel" onClick={() => setMenuOpen(false)} className="text-white/75 px-[5vw] py-3 text-sm font-medium hover:text-gold no-underline border-b border-white/5">
            📚 Artikel Edukasi
          </Link>

          <a href={`https://wa.me/${KONTAK.wa}`} className="mx-[5vw] mt-4 bg-gold text-navy text-center py-3 rounded-lg font-bold text-sm no-underline">
            Konsultasi Gratis
          </a>
        </div>
      )}
    </header>
  );
}
