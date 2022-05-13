import { getContext } from 'svelte'
import type { AuthClient } from '$lib/auth/authClient'
import { contextKey } from '$lib/auth/authClient'

type AuthClientContext = { client: AuthClient | null }

function useAuthClient() {
  const context = getContext<AuthClientContext>(contextKey)
  if (!context || !context.client)
    throw Error('Auth Client has not yet been initialized')
  return context.client
}

export default useAuthClient
