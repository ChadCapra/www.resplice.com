<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ page }) {
    return {
      props: {
        path: page.path
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

  export let path: string

  const config = useConfig()

  let appLoadPromise: Promise<boolean> = Promise.resolve(false)

  const cacheContext = { cache: null }
  const clientContext = { client: null }
  setContext(cacheContextKey, cacheContext)
  setContext(clientContextKey, clientContext)

  onMount(() => {
    appLoadPromise = new Promise(async (resolve, reject) => {
      try {
        const { cache, client } = await loadApp(
          config.ws_endpoint,
          stores,
          true
        )
        cacheContext.cache = cache
        clientContext.client = client
        resolve(true)
      } catch (err) {
        console.log(err)
        reject(err)
      }
    })
  })
</script>

{#await appLoadPromise}
  <AppLoad />
{:then isLoaded}
  {#if isLoaded}
    <PageTransition refresh={path}>
      <ToastProvider>
        <slot />
      </ToastProvider>
    </PageTransition>
  {/if}
{:catch err}
  <AppError error={err} />
{/await}
