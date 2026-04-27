import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          dark: "#0B1320",
          black: "#0A0A0A",
          card: "#111827",
          border: "#1e2d45",
          light: "#F2F4F7",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      animation: {
        "wave-slow": "waveMove 16s linear infinite",
        "wave-mid": "waveMove 12s linear infinite",
        "wave-fast": "waveMove 8s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out both",
        "wa-pulse": "waPulse 2s ease-out infinite",
      },
      keyframes: {
        waveMove: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        waPulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.6)" },
          "100%": { boxShadow: "0 0 0 20px rgba(37, 211, 102, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
