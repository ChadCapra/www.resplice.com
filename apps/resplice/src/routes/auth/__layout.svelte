<script lang="ts">
  import { setContext } from 'svelte'
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import db from '$services/db'
  import apiFactory from '$services/api/http'
  import authClientFactory, {
    contextKey as authContextKey
  } from '$lib/auth/authClient'
  import authStore from '$lib/auth/store'
  import type { Session } from '$types/session'
  import useConfig from '$lib/hooks/useConfig'

  const config = useConfig()

  const api = apiFactory(config.httpEndpoint)
  const useMocks = !config.httpEndpoint
  const client = authClientFactory(api, db, useMocks)

  const authContext = { client }
  setContext(authContextKey, authContext)

  function routeGuard(session: Session | null) {
    // Would be nice if I could pattern match here
    if (!session) {
      goto('/auth/start')
      return
    }

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
    // I don't love this, I might move route guard logic into the pages they protect.
    // TODO: Explore moving the routeGuard logic into the Load function
    if (browser) routeGuard($authStore?.session)
  }
</script>

<slot />
