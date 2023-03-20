/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "4.052rem",
      "7xl": "5.052rem",
      "8xl": "6.052rem",
    },
    extend: {
      backgroundImage: {
        showbg: "url('/public/images/1.jpg')",
      },
    },
    fontFamily: {
      valera: "Varela Round",
      banner: "BPG Banner Caps",
    },
  },

  plugins: [],
});
