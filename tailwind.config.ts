import type { Config } from "tailwindcss";

// Design tokens taken from the Figma file (portfolio / Main)
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#282C33",       // background
        primary: "#C778DD",  // accent
        gray: { DEFAULT: "#ABB2BF" }, // body / borders
        surface: "#2D3139",  // case-study cards
        line: "#626976",     // case-study card borders
      },
      fontFamily: {
        mono: ['"Fira Code Variable"', "Fira Code", "ui-monospace", "monospace"],
      },
      maxWidth: { content: "1024px" },
    },
  },
  plugins: [],
};
export default config;
