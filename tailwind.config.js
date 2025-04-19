/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#111827', // bg-gray-900
          800: '#1F2937', // bg-gray-800
          700: '#374151', // bg-gray-700
        }
      }
    },
  },
  plugins: [],
}