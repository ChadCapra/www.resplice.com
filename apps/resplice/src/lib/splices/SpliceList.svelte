<script lang="ts">
  import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte'
  import { goto } from '$app/navigation'

  import SpliceItem from '$lib/splices/SpliceItem.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'

  $: spliceList = null
</script>

<!-- TODO: Implement Alphabet slider -->
<div class="flex-1 overflow-auto">
  {#if spliceList}
    <VirtualList items={spliceList} itemHeight={144} let:item>
      <SpliceItem
        splice={item}
        on:click={() => {
          goto(`splices/${item.uuid}`)
        }}
      />
    </VirtualList>
  {:else}
    {#each Array.from(Array(8).keys()) as _}
      <div class="w-full px-4 py-2">
        <Skeleton variant="rect" width="100%" height="48px" />
      </div>
    {/each}
  {/if}
</div>
