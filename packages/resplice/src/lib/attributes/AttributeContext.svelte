<script lang="ts">
  import AttributeValue from '$lib/attributes/AttributeValue.svelte'
  import ActionIcon from '$lib/attributes/ActionIcon.svelte'
  import { capitalize } from '$lib/utils'
  import type { Attribute, AttributeTypeConfig } from '$types/attribute'

  export let attribute: Attribute
  export let attributeType: AttributeTypeConfig
</script>

<div class="w-full p-4">
  <div class="flex flex-col overflow-hidden">
    <span
      class="font-semibold text-gray-800 overflow-hidden text-ellipsis text-lg"
    >
      {attribute.name}
    </span>
    <AttributeValue {attribute} />
  </div>
  <div class="flex flex-col space-y-4 mt-8">
    {#each attributeType.actions as action}
      <button
        class="flex items-center transform transition duration-75 ease-in-out active:scale-95"
        on:click={() => attributeType.handleAction(action, attribute.value)}
      >
        <div
          class="bg-brand-primary text-brand-primary outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none"
        >
          <ActionIcon attributeAction={action} />
        </div>
        <p class="ml-4">{capitalize(action.toLowerCase())}</p>
      </button>
    {/each}
  </div>
</div>
