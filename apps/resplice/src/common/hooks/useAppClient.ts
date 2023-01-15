import { getContext } from 'svelte'
import type AppClient from '$services/api/appClient'
import { contextKey } from '$services/api/appClient'

type AppClientContext = { client: AppClient | null }

function useAppClient() {
  const context = getContext<AppClientContext>(contextKey)
  if (!context || !context.client)
    throw Error('App Client has not yet been initialized')
  return context.client
}

export default useAppClient
