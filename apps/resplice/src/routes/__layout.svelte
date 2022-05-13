<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import { isRespliceSupported } from '@resplice/utils'
  import getConfig, { contextKey } from '$services/config'
  import initializeIntl from '$services/i18n'
  import db from '$services/db'
  import authStore from '$stores/auth'
  import AppLoading from '$lib/common/skeleton/AppLoading.svelte'
  import '../global.css'

  import type { Session } from '$types/session'
  import type { ReCrypto } from '$services/crypto'

  let isLoading = Promise.resolve(false)

  const configContext = { config: getConfig() }
  setContext(contextKey, configContext)

  console.log('main layout rendering')

  async function loadApplication() {
    if (!isRespliceSupported())
      throw new Error('Your browser is not yet supported.')

    await initializeIntl()
    await db.open()
    // 0 will always be the active session
    const auth = await db.getById<{
      session: Session
      crypto: ReCrypto
    }>('auth', 0)

    if (auth) {
      authStore.set(auth)
    }

    return true
  }

  onMount(() => (isLoading = loadApplication()))
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

{#await isLoading}
  <AppLoading />
{:then isLoaded}
  {#if isLoaded}
    <slot />
  {/if}
{:catch error}
  <!-- TODO: Make better error screen -->
  <p>{'App could not load :('}</p>
  <p>{error.message}</p>
{/await}
