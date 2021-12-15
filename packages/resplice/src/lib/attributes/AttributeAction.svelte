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
  } from '$lib/attributes/actions'
  import ActionIcon from '$lib/attributes/ActionIcon.svelte'
  import { valueToString } from './values/attributeUtils'
  import attributeTypes from '$lib/attributes/attributeTypes'

  export let itemType: 'contact' | 'user' | 'disabled'
  export let disableAction = false
  export let attributeAction: AttributeAction
  export let attribute: Attribute

  function onActionClick() {
    if (disableAction) return
    // Not a fan of these nested switch statements
    // There is probably a better way by mapping functions to actions
    // TODO: Make this more readable
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
        copyText(attributeTypes[attribute.type].valueToString(attribute.value))
        break
      case AttributeAction.Email:
        switch (attribute.type) {
          case AttributeType.EMAIL:
            email(attribute.value.email)
            break
          default:
            break
        }
        break
      case AttributeAction.Link:
        switch (attribute.type) {
          case AttributeType.SOCIAL:
            goto(attribute.value.url)
            break
          default:
            break
        }
        break
      case AttributeAction.Locate:
        switch (attribute.type) {
          case AttributeType.ADDRESS:
            locate({
              locationType: 'address',
              location: attributeTypes[attribute.type].valueToString(
                attribute.value
              )
            })
            break
          case AttributeType.COORDINATE:
            locate({ locationType: 'coordinate', location: attribute.value })
          default:
            break
        }
        break
      case AttributeAction.Navigate:
        switch (attribute.type) {
          case AttributeType.ADDRESS:
            locate(
              {
                locationType: 'address',
                location: attributeTypes[attribute.type].valueToString(
                  attribute.value
                )
              },
              true
            )
            break
          case AttributeType.COORDINATE:
            locate(
              { locationType: 'coordinate', location: attribute.value },
              true
            )
            break
          default:
            break
        }
        break
      case AttributeAction.Sms:
        switch (attribute.type) {
          case AttributeType.PHONE:
            openSms(attribute.value.countryCallingCode + attribute.value.number)
            break
          default:
            break
        }
        break
    }
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
