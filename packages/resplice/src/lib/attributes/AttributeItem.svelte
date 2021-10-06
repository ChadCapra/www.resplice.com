<script lang="ts">
  import type { Attribute } from '$types/attribute'
  import AttributeAction from '$lib/attributes/AttributeAction.svelte'
  import AttributeValue from '$lib/attributes/AttributeValue.svelte'
  import Modal from '$lib/common/Modal.svelte'
  import attributeTypes from '$services/mocks/attributeTypes'

  export let itemType: 'contact' | 'user' | 'disabled'
  export let attribute: Attribute
  export let showSecondAction = true
  let showContextModal = false

  const attributeType = attributeTypes[attribute.type]

  function onAttributeClick() {
    if (itemType === 'disabled') return

    showContextModal = true
  }
</script>

<div class="flex justify-between items-start w-full">
  <div class="flex items-start flex-1 overflow-hidden">
    <AttributeAction
      {itemType}
      {attribute}
      attributeAction={attributeType.actions[0]}
    />
    <div
      class="flex flex-col mx-4 flex-1 overflow-hidden no-highlight"
      role="button"
      on:click={onAttributeClick}
    >
      <span
        class="font-semibold text-gray-800 overflow-hidden overflow-ellipsis h-6"
      >
        {attribute.name}
      </span>
      <AttributeValue {attribute} />
    </div>
  </div>
  {#if itemType !== 'user' && showSecondAction}
    <AttributeAction
      {itemType}
      {attribute}
      attributeAction={attributeType.actions[1]}
    />
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
