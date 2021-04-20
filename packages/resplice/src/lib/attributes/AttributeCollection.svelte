<script>
  import type { Attribute } from '$types'
  import AttributeItem from '$components/common/attributes/AttributeItem.svelte'
  export let name: string
  export let attributes: Attribute[]
</script>

<div class="p-4 shadow-lg w-full">
  <h2 class="font-semibold tracking-wide uppercase text-brand-primary mb-4">
    {name}
  </h2>
  <div class="w-full flex flex-col space-y-4">
    {#each attributes as attribute}
      <AttributeItem {attribute} />
    {/each}
  </div>
</div>
