/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#14B8A6',
        accent: '#F97316',
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
  },
  plugins: [],
};