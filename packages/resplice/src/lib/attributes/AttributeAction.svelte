<script lang="ts">
  import { Attribute, AttributeType } from '$types/attribute'
  import { AttributeAction } from '$types/attribute'
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
  import { valueToString } from './values/attributeUtils'

  export let itemType: 'contact' | 'user' | 'disabled'
  export let attributeAction: AttributeAction
  export let attribute: Attribute

  function onActionClick() {
    // I might change this to a more object oriented approach
    // classes with their own "toText" and various action methods
    // to avoid these nested switch statements
    if (itemType === 'disabled') return
    switch (attributeAction) {
      case AttributeAction.Calendar:
        switch (attribute.type) {
          case AttributeType.DATE:
            openCalendar()
            break
          default:
            break
        }
        break
      case AttributeAction.Call:
        switch (attribute.type) {
          case AttributeType.PHONE:
            callPhone(
              attribute.value.countryCallingCode + attribute.value.number
            )
            break
          default:
            break
        }
        break
      case AttributeAction.Copy:
        copyText(attribute.value[0])
        break
      case AttributeAction.Email:
        email(attribute.value[0])
        break
      case AttributeAction.Link:
        goto(attribute.value[0])
        break
      case AttributeAction.Locate:
        locate(attribute.value[0])
        break
      case AttributeAction.Navigate:
        switch (attribute.type) {
          case AttributeType.ADDRESS:
            locate(valueToString[AttributeType.ADDRESS](attribute), true)
            break
          default:
            break
        }
        break
      case AttributeAction.Sms:
        openSms(attribute.value[1])
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
