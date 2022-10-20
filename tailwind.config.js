/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      /*padding: "16px",  16px */
      padding: "2rem",
    },
    extend: {
      colors: {
        bgDarkFooter: "#192132",

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
