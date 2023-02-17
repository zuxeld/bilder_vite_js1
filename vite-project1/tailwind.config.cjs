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
    extend: {},
  },
  plugins: [],
}
