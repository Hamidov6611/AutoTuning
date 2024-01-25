/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainRed: "#C00000",
        mainBlack: "#000000",
        secondRed: "#FF0000",
        mainGreey: "#D9D9D9"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      screens: {
        'st': '1440px',
        'nor': '1280px',
        'ol': '1160px',
        'tl': '1070px',
        'sl': '820px'
      }
    },
  },
  plugins: [],
}