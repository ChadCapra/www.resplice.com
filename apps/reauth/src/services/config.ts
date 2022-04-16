type ENV = 'local' | 'development' | 'production'

export type RespliceConfig = {
  env: ENV
  httpEndpoint: string
  wsEndpoint: string
  telemetryEndpoint: string
  recaptchaToken: string
}

export const contextKey = 'CONFIG'

export const defaultConfig: RespliceConfig = {
  env: 'local',
  httpEndpoint: 'http://localhost:4000',
  wsEndpoint: 'ws://localhost:8080',
  telemetryEndpoint: 'localhost:4000',
  recaptchaToken: '6Ld2U9YdAAAAABa8tuPRJDPJCWfJpl4UXvdmEMwG'
}

function getConfig(): RespliceConfig {
  const error = new Error('Config is not defined or is missing properties')
  if (!window) return defaultConfig
  const config = (window as any).RESPLICE_CONFIG as RespliceConfig
  // TODO: Check for null properties
  if (Object.values(config).includes('')) throw error

  return config
}

export default getConfig
