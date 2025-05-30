import { Lora, Nunito, Oswald, Poppins } from "next/font/google";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#292421",
        copper: "#A75F37",
        pink: "#CA8E82",
        tan: "#D2B48C",
        blush: "#F2D6CE",
        vanilla: "#F2E7DD",
        green: "#7A958F",
        mint: "#BAE0DA",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        oswald: ["Oswald", "sans-serif"],
        lora: ["Lora", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
