/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'], 
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        customGray: '#343330', // You can name it whatever you like
      },
      backgroundImage: {
        'custom-gradient': `
          linear-gradient(0deg, #D9D9D9, #D9D9D9),
          linear-gradient(180deg, #E34252 0%, #ED5361 50%, #EE5C69 100%)
        `,
      },
     
    },
  },
  plugins: [],
}

