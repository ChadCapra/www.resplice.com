import { getContext } from 'svelte'
import type { AppCache } from '$services/cache'
import { contextKey } from '$services/cache'

type AppCacheContext = { cache: AppCache | null }

function useAppCache() {
  const context = getContext<AppCacheContext>(contextKey)
  if (!context || !context.cache)
    throw Error('App Cache has not yet been initialized')
  return context.cache
}

export default useAppCache
