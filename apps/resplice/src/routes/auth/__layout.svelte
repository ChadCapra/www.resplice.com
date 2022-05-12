<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import authStore from '$lib/auth/store'
  import apiFactory from '$services/api/http'
  import authClientFactory, {
    contextKey as authContextKey
  } from '$lib/auth/authClient'
  import type { Session } from '$types/session'
  import AppLoading from '$lib/common/skeleton/AppLoading.svelte'
  import useConfig from '$lib/hooks/useConfig'

  const config = useConfig()

  const api = apiFactory(config.httpEndpoint)
  const useMocks = !config.httpEndpoint
  const client = authClientFactory(api, useMocks)

  let sessionPromise: Promise<boolean> = Promise.resolve(false)

  const authContext = { client: null }
  setContext(authContextKey, authContext)

  onMount(() => {
    authContext.client = client
    sessionPromise = new Promise(async (resolve) => {
      try {
        const session = await client.getActiveSession()
        const loginValues = {
          email: session.email,
          phone: {
            value: session.phone,
            countryCode: 'US'
          }
        }
        authStore.set({ session, loginValues })
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

{#await sessionPromise}
  <AppLoading />
{:then isLoaded}
  {#if isLoaded}
    <slot />
  {/if}
{/await}
