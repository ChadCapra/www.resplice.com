<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import { isRespliceSupported } from '@resplice/utils'
  import getConfig, { contextKey } from '$services/config'
  import initializeIntl from '$services/i18n'
  import db from '$services/db'
  import authStore from '$lib/auth/store'
  import sessionStores from '$stores/session'
  import AppLoading from '$lib/common/skeleton/AppLoading.svelte'
  import '../global.css'

  import type { Session } from '$types/session'
  import type { ReCrypto } from '$services/crypto'
  import { goto } from '$app/navigation'

  let isLoading = true
  let error: Error | null = null

  const activeSessionStore = sessionStores.activeSession

  const configContext = { config: getConfig() }
  setContext(contextKey, configContext)

  async function loadApplication() {
    try {
      if (!isRespliceSupported())
        throw new Error('Your browser is not yet supported.')

      await initializeIntl()
      await db.open()
      // 0 will always be the active session
      const activeSession = await db.getById<{
        session: Session
        crypto: ReCrypto
      }>('session', 0)
      if (activeSession) {
        authStore.set(activeSession)
        activeSessionStore.set(activeSession)
      }

      if (
        !activeSession ||
        !activeSession.crypto ||
        !activeSession.session?.authenticatedAt
      ) {
        goto('/auth')
      }

      isLoading = false
    } catch (err) {
      error = new Error(err)
      isLoading = false
    }
  }

  onMount(loadApplication)
</script>

<svelte:head>
  <script>
    // Inlining in head to avoid FOUC (Flash of Unstyled Content)
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  </script>
</svelte:head>

{#if isLoading}
  <AppLoading />
{:else if error}
  <!-- TODO: Make better error screen -->
  <p>{'App could not load :('}</p>
  <p>{error.message}</p>
{:else}
  <slot />
{/if}
