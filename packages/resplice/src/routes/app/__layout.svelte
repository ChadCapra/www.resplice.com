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
        // Setup cache and client
        const { cache, client } = await loadApp(
          config.server_endpoint,
          stores,
          true
        )
        // set context objects
        cacheContext.cache = cache
        clientContext.client = client
        // Mark as loaded
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
{:then loaded}
  {#if loaded}
    <PageTransition refresh={path}>
      <slot />
    </PageTransition>
  {/if}
{:catch err}
  <AppError error={err} />
{/await}
