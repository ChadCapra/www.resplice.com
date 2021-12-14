<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import authStore from '$stores/auth'
  import apiFactory from '$services/api/http'
  import authClientFactory, {
    contextKey as authContextKey
  } from '$services/api/authClient'
  import type { Session } from '$types/session'
  import AppLoad from '$lib/common/skeleton/AppLoad.svelte'
  import useConfig from '$lib/hooks/useConfig'

  const config = useConfig()

  const api = apiFactory(config.http_endpoint)
  const client = authClientFactory(api, true)

  let sessionPromise: Promise<boolean> = Promise.resolve(false)

  const authContext = { client: null }
  setContext(authContextKey, authContext)

  onMount(() => {
    authContext.client = client
    sessionPromise = new Promise(async (resolve) => {
      try {
        const session = await client.getActiveSession()
        authStore.set({ session })
      } catch (err) {
        authStore.set({ session: null })
      }
      resolve(true)
    })
  })

  function routeGuard(session: Session | null) {
    // Would be nice if I could pattern match here
    if (!session) {
      goto('/auth/start')
      return
    }

    if (session.email_verified_at && session.phone_verified_at) {
      if (session.user_uuid) {
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
    if (browser) routeGuard($authStore?.session)
  }
</script>

{#await sessionPromise}
  <AppLoad />
{:then isLoaded}
  {#if isLoaded}
    <slot />
  {/if}
{/await}
