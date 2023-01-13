<script lang="ts">
  import { capitalize } from '@resplice/utils'
  import { goto } from '$app/navigation'
  import AttributeValue from '$lib/attributes/Value.svelte'
  import ActionIcon from '$lib/attributes/ActionIcon.svelte'
  import type { Attribute, AttributeTypeConfig } from '$types/attribute'

  export let attribute: Attribute
  export let attributeType: AttributeTypeConfig
  export let itemType: 'contact' | 'user' | 'disabled'
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
  {#if itemType === 'user'}
    <div class="flex space-x-2 mt-4">
      {#each [{ name: 'Details', value: 'detail' }, { name: 'Edit', value: 'edit' }] as action}
        <button
          class="flex-1 rounded-xl bg-gray-200 p-8 transform transition duration-75 ease-in-out active:scale-95"
          on:click={() =>
            goto(`/app/attribute/${attribute.id}/${action.value}`)}
        >
          {action.name}
        </button>
      {/each}
    </div>
  {/if}
  <div class="flex flex-col space-y-4 mt-4">
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
