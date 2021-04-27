<script>
  import type { Attribute, AttributeAction } from '$types'
  import cx from 'classnames'
  import {
    callPhone,
    copyText,
    email,
    goto,
    locate,
    openCalendar,
    openSms
  } from '$lib/utils'
  import ActionIcon from '$lib/attributes/ActionIcon.svelte'

  export let itemType: 'contact' | 'user' | 'disabled'
  export let attributeAction: AttributeAction
  export let attribute: Pick<Attribute, 'value'>

  function onActionClick() {
    if (itemType === 'disabled') return
    switch (attributeAction) {
      case 'calendar':
        openCalendar()
        break
      case 'call':
        callPhone(attribute.value)
        break
      case 'copy':
        copyText(attribute.value)
        break
      case 'email':
        email(attribute.value)
        break
      case 'link':
        goto(attribute.value)
        break
      case 'locate':
        locate(attribute.value)
        break
      case 'navigate':
        locate(attribute.value, true)
        break
      case 'sms':
        openSms(attribute.value)
        break
    }
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
  <ActionIcon {attributeAction} />
</button>
