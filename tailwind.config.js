/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [],
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
