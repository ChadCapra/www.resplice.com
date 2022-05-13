<script lang="ts">
  import { setContext, onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import startConnCommuter from '$services/commuters/connCommuter'
  import AppClient, {
    contextKey as clientContextKey
  } from '$services/api/appClient'
  import cache from '$services/db'
  import stores from '$stores/index'
  import useConfig from '$lib/hooks/useConfig'
  import AppLoading from '$lib/common/skeleton/AppLoading.svelte'
  import PageTransition from '$lib/common/skeleton/PageTransition.svelte'
  import ToastProvider from '$lib/common/ToastProvider.svelte'

  console.log('App layout rendering')

  let isLoading = Promise.resolve(false)

  const config = useConfig()
  const authStore = stores.auth
  const clientContext = { client: null }
  setContext(clientContextKey, clientContext)

  async function startConnection() {
    if (!$authStore) {
      goto('/auth')
      return
    }

    const useMock = !config.wsEndpoint
    const connCommuter = startConnCommuter(useMock)
    const client = new AppClient(config.wsEndpoint, connCommuter, cache, stores)
    clientContext.client = client
    return true
  }

  onMount(() => (isLoading = startConnection()))
</script>

{#await isLoading}
  <AppLoading />
{:then isLoaded}
  {#if isLoaded}
    <PageTransition>
      <ToastProvider>
        <slot />
      </ToastProvider>
    </PageTransition>
  {/if}
{:catch error}
  <!-- TODO: Make better error screen -->
  <p>{'App could not load :('}</p>
  <p>{error.message}</p>
{/await}
