/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      "below-400": {"max": "400px"},
      "below": {"max": "640px"},
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
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
