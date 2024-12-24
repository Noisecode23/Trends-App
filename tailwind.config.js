/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Uxum_Grotesque": ["Uxum Grotesque", "sans-serif"],
        "Neue_Haas_Grotesk_Display_Pro": ["Neue Haas Grotesk Display Pro", "sans-serif"],
        "Parabole": ["Parabole", "sans-serif"],
      },
    },
  },
  plugins: [],
}

