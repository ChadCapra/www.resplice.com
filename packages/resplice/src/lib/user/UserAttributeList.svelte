<script lang="ts">
  import type { Attribute } from '$types/attribute'
  import AttributeItem from '$lib/attributes/AttributeItem.svelte'

  export let attributes: Attribute[]
</script>

<div class="w-full flex flex-col p-4 space-y-4">
  {#each attributes as attribute}
    <AttributeItem {attribute} itemType="user" />
  {/each}
</div>
