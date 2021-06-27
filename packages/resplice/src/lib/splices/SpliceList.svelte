<script>
  import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte'
  import { goto } from '$app/navigation'

  import SpliceItem from '$lib/splices/SpliceItem.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import type { Splice } from '$types'

  export let splicesAsync: Promise<Splice[]>
</script>

<!-- TODO: Implement Alphabet slider -->
<div class="flex-1 overflow-auto">
  {#await splicesAsync}
    {#each Array.from(Array(8).keys()) as _}
      <div class="w-full px-4 py-2">
        <Skeleton variant="rect" width="100%" height="48px" />
      </div>
    {/each}
  {:then splices}
    <VirtualList items={splices} itemHeight={144} let:item>
      <SpliceItem
        splice={item}
        on:click={() => {
          goto(`splices/${item.uuid}`)
        }}
      />
    </VirtualList>
  {:catch err}
    Oh no! {err}
  {/await}
</div>
