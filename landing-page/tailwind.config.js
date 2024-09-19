const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        Teal: "#2f6c6d",
        HummingBird: "#d1f1ee",
        Yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        Gray: "#4b4b4c",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
