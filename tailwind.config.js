/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {},
    fontFamily: {
      valera: "Varela Round",
      banner: "BPG Banner Caps",
    },
  },

  plugins: [],
});
