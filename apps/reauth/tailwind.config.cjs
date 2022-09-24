const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/app.html', './src/**/*.{html,svelte}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: { primary: '#1BBC9B', 'primary-dark': '#079275' },
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
				gray: colors.slate,
				indigo: colors.indigo
			}
		}
	},
	plugins: []
}
