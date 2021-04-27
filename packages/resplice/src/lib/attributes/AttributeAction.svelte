<script>
  import type { AttributeAction } from '$types'
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
  export let attributeValue: string

  function onActionClick() {
    if (itemType === 'disabled') return
    switch (attributeAction) {
      case 'calendar':
        openCalendar()
        break
      case 'call':
        callPhone(attributeValue)
        break
      case 'copy':
        copyText(attributeValue)
        break
      case 'email':
        email(attributeValue)
        break
      case 'link':
        goto(attributeValue)
        break
      case 'locate':
        locate(attributeValue)
        break
      case 'navigate':
        locate(attributeValue, true)
        break
      case 'sms':
        openSms(attributeValue)
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
