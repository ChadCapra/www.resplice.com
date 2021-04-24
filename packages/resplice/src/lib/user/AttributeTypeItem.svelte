<script>
  import type { AttributeTypeConfig } from '$types'
  import AttributeAction from '$lib/attributes/AttributeAction.svelte'

  export let attributeType: AttributeTypeConfig
</script>

<button
  class="flex items-center w-full overflow-auto space-x-2 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-lg"
  on:click
>
  <AttributeAction
    itemType="disabled"
    attributeAction={attributeType.actions[0]}
  />
  <span class="font-semibold text-gray-800 overflow-hidden overflow-ellipsis">
    {attributeType.name}
  </span>
</button>
