<script lang="ts">
  import type { Attribute } from '$types/attribute'
  import Item from '$lib/attributes/Item.svelte'

  export let attributes: Attribute[]
</script>

<div class="w-full flex flex-col p-4 space-y-4">
  {#each attributes as attribute}
    <Item {attribute} itemType="user" />
  {/each}
</div>
