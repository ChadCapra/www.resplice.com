<script lang="ts">
  import type { Attribute } from '$types/attribute'
  import AttributeAction from '$lib/attributes/Action.svelte'
  import AttributeContext from '$lib/attributes/AttributeContext.svelte'
  import AttributeValue from '$lib/attributes/Value.svelte'
  import Modal from '$lib/common/Modal.svelte'
  import attributeTypes from '$lib/attributes/attributeTypes'

  export let attribute: Attribute
  export let itemType: 'contact' | 'user' | 'disabled'
  export let showSecondAction = true
  export let disableActions = false
  let showContextModal = false

  const attributeType = attributeTypes[attribute.type]

  $: showValue = !!Object.values(attribute.value).length

  function onAttributeClick() {
    if (itemType === 'disabled' || disableActions) return

    showContextModal = true
  }
</script>

<div class="flex justify-between items-start w-full">
  <div class="flex items-start flex-1 overflow-hidden">
    <AttributeAction
      {itemType}
      {attribute}
      attributeAction={attributeType.actions[0]}
      disableAction={disableActions}
    />
    <div
      class="flex flex-col mx-4 flex-1 overflow-hidden no-highlight"
      role="button"
      on:click={onAttributeClick}
    >
      <span
        class="font-semibold text-gray-800 overflow-hidden text-ellipsis h-6"
      >
        {attribute.name}
      </span>
      {#if showValue}
        <AttributeValue {attribute} />
      {/if}
    </div>
  </div>
  {#if itemType !== 'user' && showSecondAction && !!attributeType.actions[1]}
    <AttributeAction
      {itemType}
      {attribute}
      attributeAction={attributeType.actions[1]}
      disableAction={disableActions}
    />
  {/if}
</div>

{#if showContextModal}
  <Modal on:close={() => (showContextModal = false)}>
    <AttributeContext {attribute} {attributeType} {itemType} />
  </Modal>
{/if}
