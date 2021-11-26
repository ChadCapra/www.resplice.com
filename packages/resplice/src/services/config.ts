type ENV = 'development' | 'production'

export type RespliceConfig = {
  env: ENV
  server_endpoint: string
  apm_endpoint: string
}

export const contextKey = 'CONFIG'

export const default_config: RespliceConfig = {
  env: 'development',
  server_endpoint: 'ws://localhost:8080',
  apm_endpoint: 'localhost:4000'
}

function getConfig(): RespliceConfig {
  const error = new Error('Config is not defined or is missing properties')
  if (!window) return default_config
  const config = (window as any).resplice_config as RespliceConfig
  // TODO: Check for null properties
  if (Object.values(config).includes('')) throw error

  return config
}

export default getConfig
