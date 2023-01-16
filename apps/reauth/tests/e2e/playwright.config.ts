import { type PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
	testDir: '.',
	projects: [
		{
			name: 'Pixel 5',
			use: {
				...devices['Pixel 5'],
				ignoreHTTPSErrors: true,
				video: 'off',
				colorScheme: 'dark',
				headless: false,
				launchOptions: {
					slowMo: 500
				}
			}
		}
	]
	// webServer: {
	// 	command: 'npm run build && npm run preview',
	// 	port: 4173
	// }
}

export default config
