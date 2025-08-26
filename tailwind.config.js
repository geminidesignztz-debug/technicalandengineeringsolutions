/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",      // ✅ include ts/tsx too
    "./src/components/**/*.{js,ts,jsx,tsx}", // ✅ include ts/tsx too
    "./src/app/**/*.{js,ts,jsx,tsx}",        // ✅ include ts/tsx too
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3990',    // blue
        accent: '#F15A29',     // orange-red
        background: '#FFFFFF', // white
        muted: '#F5F5F5',      // light gray
        text: '#1F2937',       // dark gray
      },
    },
  },
  plugins: [],
}
