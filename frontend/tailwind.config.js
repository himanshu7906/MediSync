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
        'primary':'#0F172A', // Deep Slate
        'accent': '#38BDF8', // Sky Blue
        'success': '#10B981', // Emerald
        'bg-main': '#F8FAFC', // Slate 50
        'dark-main': '#020617',
        'glass-white': 'rgba(255, 255, 255, 0.7)',
        'glass-dark': 'rgba(15, 23, 42, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 10px -1px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.05)',
        'accent-glow': '0 0 20px -5px rgba(56, 189, 248, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}