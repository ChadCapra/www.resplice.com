import { getContext } from 'svelte'
import { contextKey, default_config } from '$services/config'
import type { RespliceConfig } from '$services/config'

function useConfig() {
  const context = getContext<{ config: RespliceConfig }>(contextKey)
  if (!context) throw Error('Config has not yet been initialized')
  if (!context.config) return default_config
  return context.config
}

export default useConfig
