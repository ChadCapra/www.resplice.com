import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	testDir: '.',
	use: {
		browserName: 'chromium',
		headless: true,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
		video: 'off',
		colorScheme: 'dark'
		// launchOptions: {
		//   slowMo: 100
		// }
	},
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	}
}

export default config
