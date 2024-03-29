import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['../../']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config
