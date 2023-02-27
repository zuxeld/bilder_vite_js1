/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files:[
      "./index.html",
      "./src/**/*.{html,js}",

      "./*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        'innerGood': 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
