const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        wiggle: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out normal'
      }
    },
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primaryBlack: '#333333',
      primaryPurple: '#9061F9BF',
      primaryWhite: '#EBF5FFBF'
    })
  }
}
