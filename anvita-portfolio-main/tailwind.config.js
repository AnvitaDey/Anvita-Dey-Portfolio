/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F8F6F1", // textured off-white
          cream: "#F5F1E8", // warm cream
          linen: "#EFE7DA",
          beige: "#E7DCCB",
        },
        sage: {
          DEFAULT: "#A8B29A",
          olive: "#7E8462",
          moss: "#6B7755",
          forest: "#45523E",
        },
        bloom: {
          pink: "#D8B5B2",
          butter: "#F2D889",
          brown: "#7B5E4A",
          terracotta: "#B67B5C",
        },
        night: {
          olive: "#232A1E",
          charcoal: "#2A241D",
          moss: "#333B2A",
          forest: "#3A4632",
          mist: "#E8E3D6",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      letterSpacing: {
        wideish: "0.02em",
        editorial: "0.08em",
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
      boxShadow: {
        stationery:
          "0 1px 2px rgba(69,82,62,0.06), 0 8px 24px -8px rgba(69,82,62,0.18), inset 0 0 0 1px rgba(123,94,74,0.08)",
        "stationery-hover":
          "0 2px 4px rgba(69,82,62,0.08), 0 20px 40px -12px rgba(69,82,62,0.28), inset 0 0 0 1px rgba(123,94,74,0.12)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
        silk: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
        },
        drift: {
          "0%": { transform: "translate(0,0) rotate(0deg)", opacity: 0 },
          "10%": { opacity: 0.6 },
          "90%": { opacity: 0.4 },
          "100%": { transform: "translate(40px,-120px) rotate(30deg)", opacity: 0 },
        },
        sunlight: {
          "0%, 100%": { transform: "translate(-5%, -5%) scale(1)" },
          "50%": { transform: "translate(3%, 4%) scale(1.08)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        drift: "drift 14s linear infinite",
        sunlight: "sunlight 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
