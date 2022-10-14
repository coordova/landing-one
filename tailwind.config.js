/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "3rem", /* 16px */
    },
    extend: {
      colors: {
        first: "#4338CA",

        black: "#212b36",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#3056D3",
        secondary: "#13C296",
        "body-color": "#637381",
        warning: "#FBBF24",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
