/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            quicksand: ['Quicksand', 'sans-serif'],
         },
         colors: {
            'primary-dark': '#f85f6a',
            'primary-light': '#ff8787',
            'secondary-dark': '#35424a',
            'secondary-regular': '#8492a6',
            'secondary-light': '#dbdbdb',
            blue: '#255DEB',
            white: '#ffffff',
         },
         backgroundImage: {
            'split-2': 'linear-gradient(to right, #ff8787 30%, #35424a 70%)',
         },
      },
   },
   plugins: [],
   safelist: [
      {
         pattern: /(bg|text|border)-blue/,
      },
   ],
};
