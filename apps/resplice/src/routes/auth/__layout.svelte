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

  console.log('auth layout rendering')

  const config = useConfig()

  const api = apiFactory(config.httpEndpoint)
  const useMock = !config.httpEndpoint
  const client = authClientFactory(api, db, useMock)

  const authContext = { client }
  setContext(authContextKey, authContext)

  function routeGuard(auth: typeof $authStore) {
    // Would be nice if I could pattern match here
    if (!auth) {
      goto('/auth/start')
      return
    }

    const session = auth.session

    if (session.emailVerifiedAt && session.phoneVerifiedAt) {
      if (session.authenticatedAt) {
        goto('/app/list/contacts')
        return
      } else {
        goto('/auth/sign-up')
        return
      }
    }
    if (session) {
      goto('/auth/verify')
      return
    }
  }

  $: {
    if (browser) routeGuard($authStore)
  }
</script>

<slot />
