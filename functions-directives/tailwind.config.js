/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html, js}"],
  theme: {
    extend: {
      spacing: {
        128: '32rem'
      }
    },
  },
  plugins: [],
}