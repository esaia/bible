/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
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
