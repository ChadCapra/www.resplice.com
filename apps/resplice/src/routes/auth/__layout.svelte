<script lang="ts">
  import { setContext } from 'svelte'
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import db from '$services/db'
  import apiFactory from '$services/api/http'
  import authClientFactory, {
    contextKey as authContextKey
  } from '$lib/auth/authClient'
  import authStore from '$stores/auth'
  import useConfig from '$lib/hooks/useConfig'
  import { SessionStatus } from '$types/session'

  console.log('auth layout rendering')

  const config = useConfig()

  const api = apiFactory(config.httpEndpoint)
  const useMock = !config.httpEndpoint
  const client = authClientFactory(api, db, useMock)

  const authContext = { client }
  setContext(authContextKey, authContext)

  function routeGuard(auth: typeof $authStore) {
    if (!auth) {
      goto('/auth/start')
      return
    }

    switch (auth.session.status) {
      case SessionStatus.NOT_SET:
        goto('/auth/start')
        break
      case SessionStatus.PENDING_EMAIL_VERIFICATION:
      case SessionStatus.PENDING_PHONE_VERIFICATION:
        goto('/auth/verify')
        break
      case SessionStatus.PENDING_USER_REGISRATION:
        goto('/auth/sign-up')
        break
      case SessionStatus.AUTHENTICATED:
        goto('/app/list/contacts')
        break
      default:
        throw new Error(`Session status ${auth.session.status} not handled`)
    }
  }

  $: {
    if (browser) routeGuard($authStore)
  }
</script>

<slot />
