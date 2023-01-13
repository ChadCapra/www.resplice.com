<script lang="ts">
  import Item from '$lib/attributes/Item.svelte'
  import attributeStore from '$stores/attributes'

  export let results: number[] = []
</script>

{#each results as id}
  <Item
    itemType="user"
    attribute={$attributeStore.get(id)}
    disableActions={true}
  />
{/each}
