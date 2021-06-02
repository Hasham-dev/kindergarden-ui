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
      backgroundImage: theme => ({
        'picture-1': "url('/src/Resources/1.jpg')",
        'picture-2': "url('/src/Resources/2.jpg')",
        'picture-3': "url('/src/Resources/3.jpg')",
        'picture-4': "url('/src/Resources/4.jpg')",
        'picture-5': "url('/src/Resources/5.jpg')",
        'picture-6': "url('/src/Resources/6.jpg')",
        'picture-7': "url('/src/Resources/7.jpg')",
        'picture-8': "url('/src/Resources/8.jpg')",
        'picture-9': "url('/src/Resources/9.jpg')",
        'picture-10': "url('/src/Resources/10.jpg')"
      }),
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
    }
  }
}
