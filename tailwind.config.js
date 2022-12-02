/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
  "./app/**/*.{js,ts,jsx,tsx}"
],
  darkMode: 'class',
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-sans)'],
      // }
    },
  },
  plugins: [],
};
