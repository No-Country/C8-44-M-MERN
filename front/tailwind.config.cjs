/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif']
      },
    },
    colors: {
      'primary-dark': '#e26868',
      'primary-light': '#ff8787',
      'secondary-dark': '#35424a',
      'secondary-regular': '#8492a6',
      'secondary-light': '#ededed',
      'white': '#ffffff'
    },
  },
  plugins: [],
}
