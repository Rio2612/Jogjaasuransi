import Image from "next/image";

export default function LinkedInCard() {
  return (
    <a
      href="https://www.linkedin.com/in/riomardiansyah"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 rounded-card border border-black/8 bg-white hover:border-[#C8963E] hover:shadow-lg transition-all duration-300 max-w-md"
    >
      <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#C8963E]">
        <Image
          src="/rio-mardiansyah.jpg"
          alt="Rio Mardiansyah"
          fill
          className="object-cover object-top"
          sizes="56px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-heading font-bold text-navy leading-tight truncate">
          Rio Mardiansyah
        </p>
        <p className="text-[#64748B] text-xs leading-snug truncate">
          Praktisi Asuransi · 9+ Tahun di Industri Asuransi
        </p>
      </div>

      {/* ikon LinkedIn */}
      <div className="w-9 h-9 rounded-lg bg-[#0a66c2] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="white"
          aria-hidden="true"
        >
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      </div>
    </a>
  );
}
