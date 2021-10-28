<script lang="ts">
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import useRespliceClient from '$lib/hooks/respliceClient'
  import AppLoad from '$lib/common/skeleton/AppLoad.svelte'
  import userStore from '$stores/user'
  import attributeStore from '$stores/attributes'
  import { arrToDict } from '$lib/utils'

  let appLoadPromise: Promise<boolean> = Promise.resolve(false)

  const client = useRespliceClient()

  async function fetchAllData() {
    try {
      const session = await client.sessions.getActive()
      if (!session) {
        goto('/auth/start')
        return
      }
    } catch (err) {
      console.log(err)
      goto('/auth/start')
    }

    try {
      const [user, attributes, _] = await Promise.all([
        client.user.get(),
        client.user.getAllAttributes(),
        client.contacts.getAll()
      ])
      userStore.set(user)
      attributeStore.set(arrToDict(attributes, 'uuid'))
    } catch (err) {
      console.log(err)
    }

    return true
  }

  onMount(() => {
    appLoadPromise = fetchAllData()
  })
</script>

{#await appLoadPromise}
  <AppLoad />
{:then loaded}
  {#if loaded}
    <slot />
  {/if}
{/await}
