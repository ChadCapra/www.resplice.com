<script lang="ts">
  import cx from 'classnames'
  import ActionIcon from '$lib/attributes/ActionIcon.svelte'
  import attributeTypes from '$lib/attributes/attributeTypes'
  import type { Attribute, AttributeAction } from '$types/attribute'

  export let itemType: 'contact' | 'user' | 'disabled'
  export let disableAction = false
  export let attributeAction: AttributeAction
  export let attribute: Attribute

  function onActionClick() {
    if (disableAction) return
    if (itemType === 'disabled') return

    attributeTypes[attribute.type].handleAction(
      attributeAction,
      attribute.value
    )
  }
</script>

<button
  type="button"
  class={cx(
    'outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none',
    {
      'bg-brand-primary text-brand-primary': itemType === 'contact',
      'bg-indigo-400 text-indigo-600': itemType === 'user',
      'bg-gray-400 text-gray-600': itemType === 'disabled',
      'transform transition duration-75 ease-in-out active:scale-90':
        !disableAction
    }
  )}
  on:click={onActionClick}
>
  <ActionIcon {attributeAction} />
</button>
