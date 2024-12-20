/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'logo-cloud': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }  // Changed this line
        },
      },
      animation: {
        'logo-cloud': 'logo-cloud 30s linear infinite',
      },
    },
  },
  plugins: [],
}