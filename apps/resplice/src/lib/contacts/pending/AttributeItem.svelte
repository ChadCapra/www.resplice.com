<script lang="ts">
  import ActionIcon from '$lib/attributes/ActionIcon.svelte'
  import attributeTypes from '$lib/attributes/attributeTypes'
  import type { PendingContactAttribute } from '$types/contact'

  export let attribute: PendingContactAttribute

  const attributeType = attributeTypes[attribute.type]
</script>

<div class="flex justify-between items-start w-full">
  <div class="flex items-start flex-1 overflow-hidden">
    <div
      class="outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none bg-gray-400 text-gray-600"
    >
      <ActionIcon attributeAction={attributeType.actions[0]} />
    </div>
    <div class="flex flex-col mx-4 flex-1 overflow-hidden no-highlight">
      <span
        class="font-semibold text-gray-800 overflow-hidden text-ellipsis h-6"
      >
        {attribute.name}
      </span>
      <p>xxxxxxxxxxxxx</p>
    </div>
  </div>
  <div
    class="outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none bg-gray-400 text-gray-600"
  >
    <ActionIcon attributeAction={attributeType.actions[1]} />
  </div>
</div>
