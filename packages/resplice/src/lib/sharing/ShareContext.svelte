<script lang="ts">
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import attributeStore from '$stores/attributes'

  $: attributes = $attributeStore
  $: sortedAttributes = attributes
    ? Object.values(attributes).sort((a, b) => a.sort_order - b.sort_order)
    : null
  export let shares = attributes
    ? [sortedAttributes[0].uuid, sortedAttributes[1].uuid]
    : []
</script>

<section class="flex flex-col space-y-2">
  <h2 class="font-semibold text-lg mb-2">Sharing</h2>
  {#if attributes}
    {#each shares as uuid}
      <p>{attributes[uuid].name}</p>
    {/each}
  {:else}
    <Skeleton variant="rect" width="100%" height="2.5em" />
    <Skeleton variant="rect" width="100%" height="2.5em" />
  {/if}
  <div />
</section>
