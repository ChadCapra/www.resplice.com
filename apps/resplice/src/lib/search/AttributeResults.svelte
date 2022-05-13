<script lang="ts">
  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import attributeStore from '$stores/attributes'

  export let results: number[] = []
</script>

{#each results as id}
  <AttributeItem
    itemType="user"
    attribute={$attributeStore.get(id)}
    disableActions={true}
  />
{/each}
