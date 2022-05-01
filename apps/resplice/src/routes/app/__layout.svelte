<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ url }) {
    return {
      props: {
        path: url.pathname
      }
    }
  }
</script>

<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import stores from '$stores/index'
  import { contextKey as cacheContextKey } from '$services/cache'
  import { contextKey as clientContextKey } from '$services/api/appClient'
  import loadApp from './_load'

  import AppLoad from '$lib/common/skeleton/AppLoad.svelte'
  import AppError from '$lib/common/skeleton/AppError.svelte'
  import useConfig from '$lib/hooks/useConfig'
  import PageTransition from '$lib/common/skeleton/PageTransition.svelte'
  import ToastProvider from '$lib/common/ToastProvider.svelte'

  // export let path: string

  const config = useConfig()

  let appLoadPromise: Promise<boolean> = Promise.resolve(false)

  const cacheContext = { cache: null }
  const clientContext = { client: null }
  setContext(cacheContextKey, cacheContext)
  setContext(clientContextKey, clientContext)

  onMount(() => {
    appLoadPromise = new Promise(async (resolve, reject) => {
      try {
        const useMocks = !config.wsEndpoint
        const { cache, client } = await loadApp(
          config.wsEndpoint,
          stores,
          useMocks
        )
        cacheContext.cache = cache
        clientContext.client = client
        resolve(true)
      } catch (err) {
        reject(err)
      }
    })
  })
</script>

{#await appLoadPromise}
  <AppLoad />
{:then isLoaded}
  {#if isLoaded}
    <PageTransition>
      <ToastProvider>
        <slot />
      </ToastProvider>
    </PageTransition>
  {/if}
{:catch err}
  <AppError error={err} />
{/await}
