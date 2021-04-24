const colors = require('tailwindcss/colors')
const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    options: {
      defaultExtractor: (content) => [
        // If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        )
      ],
      keyframes: true
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: { primary: '#1BBC9B' },
        // Seems to not work with tailwind JIT
        // brand: {
        //   primary: ({ opacityVariable, opacityValue }) => {
        //     if (opacityValue !== undefined) {
        //       return `rbga(var(--brand-primary), ${opacityValue})`
        //     }
        //     if (opacityVariable !== undefined) {
        //       return `rgba(var(--brand-primary), var(${opacityVariable}, 1))`
        //     }
        //     return `rgb(var(--brand-primary))`
        //   }
        // },
        gray: colors.blueGray,
        indigo: colors.indigo
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
