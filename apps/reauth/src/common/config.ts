type ENV = 'local' | 'development' | 'production'

export type ReauthConfig = {
	env: ENV
	appUrl: string
	respliceApiUrl: string
	telemetryUrl: string
	recaptchaToken: string
}

export const defaultConfig: ReauthConfig = {
	env: 'local',
	appUrl: 'http://localhost:3000',
	respliceApiUrl: '',
	telemetryUrl: '',
	recaptchaToken: '6Ld2U9YdAAAAABa8tuPRJDPJCWfJpl4UXvdmEMwG'
}

function grabConfigFromWindow(): ReauthConfig {
	try {
		if (!window) return defaultConfig
		return (window as any).REAUTH_CONFIG as ReauthConfig
	} catch {
		return defaultConfig
	}
}

function getConfig(): ReauthConfig {
	const config = grabConfigFromWindow()
	if (Object.values(config).includes(undefined as any))
		// TODO: Test when config throws
		throw new Error('Config is not defined or is missing properties')

	return config
}

export default getConfig()
