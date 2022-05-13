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
  import PageTransition from '$lib/common/skeleton/PageTransition.svelte'
  import ToastProvider from '$lib/common/ToastProvider.svelte'

  console.log('App layout rendering')

  const config = useConfig()
  const authStore = stores.auth
  const clientContext = { client: null }
  setContext(clientContextKey, clientContext)

  onMount(() => {
    if (!$authStore) {
      goto('/auth')
      return
    }

    const useMock = !config.wsEndpoint
    const connCommuter = startConnCommuter(useMock)
    const client = new AppClient(config.wsEndpoint, connCommuter, cache, stores)
    clientContext.client = client
  })
</script>

<PageTransition>
  <ToastProvider>
    <slot />
  </ToastProvider>
</PageTransition>
