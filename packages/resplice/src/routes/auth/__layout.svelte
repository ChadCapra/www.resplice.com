<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import authStore from '$stores/auth'
  import apiFactory from '$services/api/http'
  import authClientFactory from '$services/api/authClient'
  import type { Session } from '$types/session'
  import AppLoad from '$lib/common/skeleton/AppLoad.svelte'
  import useConfig from '$lib/hooks/useConfig'

  const config = useConfig()

  const api = apiFactory(config.server_endpoint)
  const client = authClientFactory(api)

  let sessionPromise: Promise<Session | null>

  onMount(async () => {
    const session = await client.getActiveSession()
    authStore.set({ session })
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
    if (browser) routeGuard($authStore?.session)
  }
</script>

{#await sessionPromise}
  <AppLoad />
{:then _}
  {#if !!$authStore}
    <slot />
  {/if}
{/await}
