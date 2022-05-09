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
  httpEndpoint: '',
  wsEndpoint: '',
  telemetryEndpoint: '',
  recaptchaToken: '6Ld2U9YdAAAAABa8tuPRJDPJCWfJpl4UXvdmEMwG'
}

function getConfig(): RespliceConfig {
  if (!window) return defaultConfig
  const config = (window as any).resplice_config as RespliceConfig
  if (Object.values(config).includes(undefined))
    // TODO: Test when config throws
    throw new Error('Config is not defined or is missing properties')

  return config
}

export default getConfig
