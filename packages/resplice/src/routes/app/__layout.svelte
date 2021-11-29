<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import stores from '$stores/index'
  import { contextKey as cacheContextKey } from '$services/cache'
  import { contextKey as clientContextKey } from '$services/api/appClient'
  import load from './_load'

  import AppLoad from '$lib/common/skeleton/AppLoad.svelte'
  import AppError from '$lib/common/skeleton/AppError.svelte'
  import useConfig from '$lib/hooks/useConfig'

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
        const { cache, client } = await load(
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
    <slot />
  {/if}
{:catch err}
  <AppError error={err} />
{/await}
