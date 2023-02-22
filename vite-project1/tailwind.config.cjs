/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files:[
      "./index.html",
      "./*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        'innerGood': '0 1px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
