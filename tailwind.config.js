/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
      body: ["Inter", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "inner-r-2": "inset 9px 2px 2px 6px rgba(255, 255, 255, 0.1)",
      },
      colors: {
        "easeal-blue": "#0A2D5C",
        "easeal-blue-light": "#56CCF2",
      }
    },
  },
  plugins: [],
}
