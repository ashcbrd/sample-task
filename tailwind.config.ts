import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
        druk: ["DRUK"],
      },
      colors: {
        primary: {
          white: "#ffffff",
          blue: "#0083FE",
          orange: "#FF632C",
        },
        secondary: "#F7F7FF",
        additional: {
          navyblue: "#2B2D42",
          grey: "#6D6F84",
        },
      },
    },
  },
  plugins: [],
};
export default config;
