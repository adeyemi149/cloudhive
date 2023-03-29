/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  //Everything below @media (min-width: 640px)
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
  },
    extend: {
      animation: { 
        'spin-slow': 'spin 3s linear infinte'
      }
    },
  },
  plugins: [],
}
