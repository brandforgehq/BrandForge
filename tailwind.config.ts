import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        violet: {
          DEFAULT: "#7D39EB",
          dark: "#5a1fc8",
          light: "#9b5ff5",
        },
        lime: {
          DEFAULT: "#C6FF33",
          dark: "#8fc800",
          light: "#d4ff66",
        },
        surface: "#0a0a0a",
        card: "#111111",
        border: "#1e1e1e",
        muted: "#555555",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      borderRadius: {
        brand: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
