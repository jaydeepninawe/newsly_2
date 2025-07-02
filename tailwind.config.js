/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}" // ✅ Add this if not present
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
