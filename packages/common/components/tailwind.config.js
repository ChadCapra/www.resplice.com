const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.svelte'],
    options: { safelist: ['re-scrollbar'] }
  },
  prefix: 're-',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--re-brand-primary)',
          'primary-dark': 'var(--re-brand-primary-dark)',
          'primary-light': 'var(--re-brand-primary-light)'
        },
        gray: colors.blueGray
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['active'],
      scale: ['active', 'group-hover']
    }
  },
  plugins: []
}
