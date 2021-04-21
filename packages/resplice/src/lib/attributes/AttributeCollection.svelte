<script>
  import type { Attribute } from '$types'
  import AttributeItem from '$components/common/attributes/AttributeItem.svelte'
  export let attributes: Attribute[]
</script>

<div class="w-full flex flex-col space-y-4">
  {#each attributes as attribute}
    <AttributeItem {attribute} />
  {/each}
</div>
