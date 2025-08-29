/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 enables class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundImage: {
        'radial-gray': 'radial-gradient(circle at center, #f9fafb, #d1d5db)',
      },
    },
  },
  plugins: [],
}
