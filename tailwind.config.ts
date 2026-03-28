import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:  "#0D2137",
        navy2: "#163352",
        gold:  "#C8963E",
        gold2: "#E8B96A",
        gold3: "#F5D99A",
        cream: "#F9F6F1",
      },
      fontFamily: {
        // Heading: Syne — class "font-heading"
        heading: ["var(--font-heading)", "sans-serif"],
        // Body: DM Sans — class "font-body" (default body)
        body:    ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        // Sesuai spesifikasi — Tailwind default 1rem=16px
        xs:   ["0.75rem",  { lineHeight: "1rem"    }],  // 12px / 16px
        sm:   ["0.875rem", { lineHeight: "1.25rem" }],  // 14px / 20px
        base: ["1rem",     { lineHeight: "1.5rem"  }],  // 16px / 24px
        lg:   ["1.125rem", { lineHeight: "1.75rem" }],  // 18px / 28px
        xl:   ["1.25rem",  { lineHeight: "1.75rem" }],  // 20px / 28px
        "2xl":["1.5rem",   { lineHeight: "2rem"    }],  // 24px / 32px
        "3xl":["1.875rem", { lineHeight: "2.25rem" }],  // 30px / 36px
        "4xl":["2.25rem",  { lineHeight: "2.5rem"  }],  // 36px / 40px
        "5xl":["3rem",     { lineHeight: "1"        }],  // 48px
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
