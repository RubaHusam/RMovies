/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
      width: {
        1920: '75%',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
