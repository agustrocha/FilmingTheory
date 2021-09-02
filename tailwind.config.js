require('tailwindcss/colors')
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px'
    },
    extend: {
      height: {
        100: '30rem',
        carrousel: '22rem',
        carrouselXS: '16rem',
        footer: '13.25rem'
      },
      width: {
        '41%': '41%',
        '54%': '54%'
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
        '30%': '30%',
        '43%': '43%',
        '47%': '47%'
      },
      margin: {
        container: '8.75rem',
        containerXS: '2rem',
        containerXL: '12.75rem',
        18: '4.5rem',
        17: '4.25rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
