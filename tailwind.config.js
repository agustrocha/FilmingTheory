require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: '30rem',
        carrousel: '20rem'
      },
      fontSize: {
        super10XL: '10rem'
      },
      colors: {
        white: '#ffffff',
        neutral: '#1c1c1c',
        primary: '#FFDE00'
      },
      inset: {
        '51%': '51%',
        '30%': '30%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
