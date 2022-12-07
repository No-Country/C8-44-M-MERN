/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        10: '10px',
      },
      maxWidth: {
        127: '127px',
      },
      colors: {
        'primary-dark': '#f85f6a',
        'primary-light': '#ff8787',
        'secondary-dark': '#35424a',
        'secondary-regular': '#8492a6',
        'secondary-light': '#dbdbdb',
        blue: '#5f83f8',
        white: '#ffffff',
        scale1: '#F5B7B1',
        scale2: '#F1948A',
        scale3: '#EC7063',
        scale4: '#E74C3C',
        scale5: '#CB4335',
      },
      backgroundImage: {
        'split-2': 'linear-gradient(to right, #ff8787 30%, #35424a 70%)',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(blue|scale1|scale2|scale3|scale4|scale5|secondary-regular)/,
    },
  ],
};
