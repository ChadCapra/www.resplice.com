<script lang="ts">
  import type { Attribute, AttributeTypeConfig } from '$types/attribute'
  import { AttributeType } from '$types/attribute'
  import Item from '$lib/attributes/Item.svelte'
  import AddressForm from './AddressForm.svelte'
  import CoordinateForm from './CoordinateForm.svelte'
  import CredentialForm from './CredentialForm.svelte'
  import EmailForm from './EmailForm.svelte'
  import LinkForm from './LinkForm.svelte'
  import PhoneForm from './PhoneForm.svelte'
  import SocialForm from './SocialForm.svelte'
  import DateForm from './DateForm.svelte'
  import TextForm from './TextForm.svelte'
  import useAppClient from '$lib/hooks/useAppClient'

  const appClient = useAppClient()

  export let attributeType: AttributeType
  export let attributeTypeConfig: AttributeTypeConfig

  let newAttribute: Attribute = {
    id: 0,
    type: attributeType,
    name: '',
    value: {} as any,
    sortOrder: 0
  }

  function saveAttribute() {
    appClient.attributes.addAttribute({
      type: newAttribute.type,
      name: newAttribute.name,
      value: newAttribute.value
    })
  }

  function throwInvalidType() {
    throw new Error(`${attributeType} is an invalid Attribute Type`)
  }
</script>

<div class="w-full h-full flex-1 overflow-auto p-4 flex flex-col">
  <div class="w-full shadow-lg rounded-lg p-4 mb-12 flex-none">
    <h2 class="text-xl font-semibold mb-4">{attributeTypeConfig.name}</h2>
    <Item itemType="disabled" attribute={newAttribute} />
  </div>
  {#if newAttribute.type === AttributeType.ADDRESS}
    <AddressForm
      bind:name={newAttribute.name}
      bind:address1={newAttribute.value.streetAddress1}
      bind:address2={newAttribute.value.streetAddress2}
      bind:locality={newAttribute.value.locality}
      bind:region={newAttribute.value.region}
      bind:postalCode={newAttribute.value.postalCode}
      bind:country={newAttribute.value.country}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.COORDINATE}
    <CoordinateForm
      bind:name={newAttribute.name}
      bind:latitude={newAttribute.value.latitude}
      bind:longitude={newAttribute.value.longitude}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.CREDENTIAL}
    <CredentialForm
      bind:name={newAttribute.name}
      bind:identity={newAttribute.value.identity}
      bind:passcode={newAttribute.value.passcode}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.DATE}
    <DateForm
      bind:name={newAttribute.name}
      bind:year={newAttribute.value.year}
      bind:month={newAttribute.value.month}
      bind:day={newAttribute.value.day}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.EMAIL}
    <EmailForm
      bind:name={newAttribute.name}
      bind:email={newAttribute.value.email}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.LINK}
    <LinkForm
      bind:name={newAttribute.name}
      bind:url={newAttribute.value.url}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.PHONE}
    <PhoneForm
      bind:name={newAttribute.name}
      bind:number={newAttribute.value.number}
      bind:extension={newAttribute.value.extension}
      bind:smsEnabled={newAttribute.value.smsEnabled}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.SOCIAL}
    <SocialForm
      bind:name={newAttribute.name}
      bind:handle={newAttribute.value.handle}
      bind:url={newAttribute.value.url}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.TEXT}
    <TextForm
      bind:name={newAttribute.name}
      bind:text={newAttribute.value.text}
      on:save={saveAttribute}
    />
  {:else}
    {throwInvalidType()}
  {/if}
</div>
