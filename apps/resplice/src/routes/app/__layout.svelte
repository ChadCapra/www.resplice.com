<script lang="ts">
  import { setContext } from 'svelte'
  import startConnCommuter from '$services/commuters/connCommuter'
  import AppClient, {
    contextKey as clientContextKey
  } from '$services/api/appClient'
  import db from '$services/db'
  import stores from '$stores/index'
  import useConfig from '$lib/hooks/useConfig'
  import PageTransition from '$lib/common/skeleton/PageTransition.svelte'
  import ToastProvider from '$lib/common/ToastProvider.svelte'

  const config = useConfig()
  const useMocks = !config.wsEndpoint
  const connCommuter = startConnCommuter(useMocks)
  let client = new AppClient(config.wsEndpoint, connCommuter, db, stores)

  const clientContext = { client }
  setContext(clientContextKey, clientContext)
</script>

<PageTransition>
  <ToastProvider>
    <slot />
  </ToastProvider>
</PageTransition>
