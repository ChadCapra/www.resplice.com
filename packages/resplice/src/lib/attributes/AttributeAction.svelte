<script>
  import type { AttributeAction } from '$types'
  import cx from 'classnames'
  import ActionIcon from '$lib/attributes/ActionIcon.svelte'

  export let itemType: 'contact' | 'user' | 'disabled'
  export let attributeAction: AttributeAction

  function onActionClick() {
    if (itemType === 'disabled') return
    // TODO: Implement real actions on click
    console.log(attributeAction.action)
  }
</script>

<button
  class={cx(
    'outline-none border-none p-3 bg-opacity-20 rounded-lg focus:outline-none transform transition duration-75 ease-in-out active:scale-90',
    {
      'bg-brand-primary text-brand-primary': itemType === 'contact',
      'bg-indigo-400 text-indigo-600': itemType === 'user',
      'bg-gray-400 text-gray-600': itemType === 'disabled'
    }
  )}
  on:click={onActionClick}
>
  <ActionIcon iconName={attributeAction.iconName} />
</button>
