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
        'picture-1': "url('/src/Resources/Tesla.jpg')",
        'picture-2': "url('/src/Resources/tesla4.jpg')",
        'picture-3': "url('/src/Resources/tesla2.jpg')",
        'picture-4': "url('/src/Resources/tesla3.jpg')"
      })
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
