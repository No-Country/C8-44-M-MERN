/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink-dark': '#e26868',
      'pink-light': '#ff8787',
      'gray-dark': '#35424a',
      'gray': '#8492a6',
      'gray-light': '#ededed',
      'white': '#ffff'
    },
  },
  plugins: [],
}
