// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#0A0B0D",
          surface: "#111318",
          overlay: "#1A1D24",
        },
        accent: {
          cyan: "#4ECDC4",
          amber: "#D4821A",
          red: "#C0392B",
        },
        ink: {
          primary: "#E8E4DC",
          secondary: "#8A8F9E",
          dim: "#454A57",
        },
        border: "#2A2E38",
      },
      fontFamily: {
        spaceG: ['"Space Grotesk"', "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(4rem, 12vw, 9rem)", { lineHeight: "0.95" }],
        section: ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1" }],
      },
      letterSpacing: {
        marathon: "0.2em", // the wide display tracking Marathon uses
      },
      backgroundImage: {
        "grid-overlay": `linear-gradient(rgba(46,50,60,0.4) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(46,50,60,0.4) 1px, transparent 1px)`,
        scanlines: `repeating-linear-gradient(
                        to bottom,
                        transparent 0px, transparent 2px,
                        rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px
                      )`,
        "cyan-glow":
          "radial-gradient(ellipse at 30% 50%, rgba(78,205,196,0.08) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        flicker: "flicker 4s infinite",
        typewrite: "typewrite 0.05s steps(1) forwards",
        "pulse-dim": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 95%, 100%": { opacity: "1" },
          "96%": { opacity: "0.4" },
          "97%": { opacity: "1" },
          "98%": { opacity: "0.6" },
        },
      },
      clipPath: {
        // notched corner — Marathon's signature panel shape
        "notch-tr":
          "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
        "notch-bl":
          "polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
      },
    },
  },
  plugins: [
    // clip-path isn't in Tailwind core — add a small plugin
    ({ matchUtilities, theme }: any) => {
      matchUtilities(
        { clip: (value: string) => ({ clipPath: value }) },
        { values: theme("clipPath") },
      );
    },
  ],
} satisfies Config;
