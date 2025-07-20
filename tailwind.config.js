/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here if needed
        primary: "#2563eb",
        secondary: "#10b981",
        muted: "#6b7280",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        bounceSlow: "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // ✅ Add typography plugin for `prose`
  ],
};
