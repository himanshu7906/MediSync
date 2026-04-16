/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors:{
        'primary':'#6366F1',
        'secondary': '#22C55E',
        'accent': '#F59E0B',
        'bg-main': '#F9FAFB',
        'dark-main': '#111827',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 10px -1px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 30px -5px rgba(99, 102, 241, 0.1), 0 4px 12px -2px rgba(99, 102, 241, 0.05)',
      }
    },
  },
  plugins: [],
}