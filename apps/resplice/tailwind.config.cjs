const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/app.html', './src/**/*.{html,svelte}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: { primary: '#1BBC9B', 'primary-dark': '#079275' },
				gray: colors.slate,
				indigo: colors.indigo
			}
		}
	},
	plugins: []
}
