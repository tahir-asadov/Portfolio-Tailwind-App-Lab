// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '16px',
      'sm': '18px',
      'md': '20px',
      'lg': '36px',
      'xl': '60px',
      'badge': '26px',
    },
    fontFamily: {
      'sans': ['Poppins, sans-serif;'],
    },
    extend: {
      gridTemplateColumns: {
       'header': '120px auto 180px',
       'hero': '1fr 1fr',
       'features': '1fr 1fr',
      }
    },
    colors: {
      gray: {
        DEFAULT: '#616368'
      },
      blue: {
        DEFAULT: '#2500f9'
      },
      orange: {
        DEFAULT: '#fda925'
      },
      darkBlue: {
        DEFAULT: '#242f51'
      },
      lightGray: {
        DEFAULT: '#e1eaed'
      },
      white: {
        DEFAULT: '#ffffff'
      },
      black: {
        DEFAULT: '#000000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
