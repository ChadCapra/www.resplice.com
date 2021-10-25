<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import authStore from '$stores/auth'
  import useRespliceClient from '$lib/hooks/respliceClient'
  import type { Session } from '$types/session'
  import AppLoad from '$lib/common/skeleton/AppLoad.svelte'

  const client = useRespliceClient()

  let sessionPromise: Promise<Session | null>

  onMount(async () => {
    sessionPromise = client.sessions.getActive()
    const session = await sessionPromise
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
        goto('/app/contacts')
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
