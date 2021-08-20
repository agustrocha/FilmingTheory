require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        100: '30rem',
        carrousel: '22rem',
        footer: '13.25rem'
      },
      fontSize: {
        super10XL: '10rem'
      },
      colors: {
        white: '#ffffff',
        neutral: '#1c1c1c',
        primary: '#FFDE00',
        secondary: '#6E6E6E'
      },
      inset: {
        '51%': '51%',
        '30%': '30%'
      },
      margin: {
        container: '13.75rem',
        18: '4.5rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
