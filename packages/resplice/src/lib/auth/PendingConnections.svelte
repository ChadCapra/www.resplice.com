<script>
  import type { Contact } from '$types'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import ConnectionItem from '$lib/auth/ConnectionItem.svelte'

  export let pendingConnectionsAsync: Promise<Pick<Contact, 'name' | 'uuid'>[]>
</script>

<div class="flex-1 overflow-scroll">
  <p class="font-semibold text-lg mb-2">Pending Connections</p>
  {#await pendingConnectionsAsync}
    {#each Array.from(Array(8).keys()) as _}
      <div class="w-full px-4 py-2">
        <Skeleton variant="rect" width="100%" height="48px" />
      </div>
    {/each}
  {:then pendingConnections}
    <!-- Only get first 25 for perf reasons -->
    {#each pendingConnections.slice(0, 25) as connection}
      <ConnectionItem {connection} />
    {/each}
  {:catch error}
    <p>Something went wrong...</p>
    <p>{error.message}</p>
  {/await}
</div>
