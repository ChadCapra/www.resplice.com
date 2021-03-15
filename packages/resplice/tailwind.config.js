const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.svelte']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rbga(var(--brand-primary), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--brand-primary), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--color-primary))`
          }
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
