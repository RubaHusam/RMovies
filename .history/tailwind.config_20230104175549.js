/** @type {import('tailwindcss').Config} */
module.exports = {
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
        1920: '1100px',
      },
      height: {
        1080: '1080px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
