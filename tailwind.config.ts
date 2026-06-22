import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#020202",
          soft: "#161616",
          muted: "#666666",
        },
        accent: {
          DEFAULT: "#1E6AFF",
          ink: "#0B45C7",
          soft: "#EAF1FF",
        },
        line: "#ECECEC",
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F5F6F8",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      maxWidth: {
        shell: "1240px",
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
      },
      borderRadius: {
        xl2: "20px",
        xl3: "28px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "pulse-ring": "pulse-ring 3s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
