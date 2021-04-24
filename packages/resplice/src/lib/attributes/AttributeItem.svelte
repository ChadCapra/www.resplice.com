<script>
  import type { Attribute } from '$types'
  import AttributeAction from '$lib/attributes/AttributeAction.svelte'
  import AttributeValue from '$lib/attributes/AttributeValue.svelte'
  import Modal from '$lib/common/Modal.svelte'
  import attributeTypes from '../../mocks/attributeTypes'

  export let attribute: Attribute
  export let itemType: 'contact' | 'user'
  let showContextModal = false

  const attributeType = attributeTypes[attribute.type]
</script>

<div class="flex justify-between items-center w-full">
  <div class="flex items-center flex-1 overflow-hidden">
    <AttributeAction {itemType} attributeAction={attributeType.actions[0]} />
    <div
      class="flex flex-col mx-4 flex-1 overflow-hidden no-highlight"
      role="button"
      on:click={() => (showContextModal = true)}
    >
      <span
        class="font-semibold text-gray-800 overflow-hidden overflow-ellipsis"
      >
        {attribute.name}
      </span>
      <AttributeValue {attribute} />
    </div>
  </div>
  {#if itemType === 'contact'}
    <AttributeAction {itemType} attributeAction={attributeType.actions[1]} />
  {/if}
</div>

{#if showContextModal}
  <Modal on:close={() => (showContextModal = false)}>
    <div class="w-full p-4">
      <div class="flex flex-col overflow-hidden">
        <span
          class="font-semibold text-gray-800 overflow-hidden overflow-ellipsis text-lg"
        >
          {attribute.name}
        </span>
        <AttributeValue {attribute} />
      </div>
    </div>
  </Modal>
{/if}
