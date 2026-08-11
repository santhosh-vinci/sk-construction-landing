/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        syne:    ['Syne', 'sans-serif'],
        inter:   ['Inter', 'sans-serif'],
      },
      colors: {
        teal: {
          hero: '#C5E8E3',
        },
        accent: {
          gold: '#E8B94E',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0,0,0,0.10)',
        'card-lg': '0 20px 60px rgba(0,0,0,0.12)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}
