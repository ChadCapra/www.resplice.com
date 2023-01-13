<script lang="ts">
  import { createEventDispatcher } from 'svelte'
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
  import type { Attribute, AttributeTypeConfig } from '$types/attribute'

  const dispatch = createEventDispatcher()

  export let attributeTypeConfig: AttributeTypeConfig
  export let attribute: Attribute

  function throwInvalidType() {
    throw new Error(`${attribute.type} is an invalid Attribute Type`)
  }
</script>

<div class="w-full h-full flex-1 overflow-auto p-4 flex flex-col">
  <div class="w-full shadow-lg rounded-lg p-4 mb-12 flex-none">
    <h2 class="text-xl font-semibold mb-4">{attributeTypeConfig.name}</h2>
    <Item itemType="disabled" {attribute} />
  </div>
  {#if attribute.type === AttributeType.ADDRESS}
    <AddressForm
      bind:name={attribute.name}
      bind:address1={attribute.value.streetAddress1}
      bind:address2={attribute.value.streetAddress2}
      bind:locality={attribute.value.locality}
      bind:region={attribute.value.region}
      bind:postalCode={attribute.value.postalCode}
      bind:country={attribute.value.country}
      on:save={() => dispatch('save', attribute)}
    />
  {:else if attribute.type === AttributeType.COORDINATE}
    <CoordinateForm
      bind:name={attribute.name}
      bind:latitude={attribute.value.latitude}
      bind:longitude={attribute.value.longitude}
      on:save={() => dispatch('save', attribute)}
    />
  {:else if attribute.type === AttributeType.CREDENTIAL}
    <CredentialForm
      bind:name={attribute.name}
      bind:identity={attribute.value.identity}
      bind:passcode={attribute.value.passcode}
      on:save={() => dispatch('save', attribute)}
    />
  {:else if attribute.type === AttributeType.DATE}
    <DateForm
      bind:name={attribute.name}
      bind:year={attribute.value.year}
      bind:month={attribute.value.month}
      bind:day={attribute.value.day}
      on:save={() => dispatch('save', attribute)}
    />
  {:else if attribute.type === AttributeType.EMAIL}
    <EmailForm
      bind:name={attribute.name}
      bind:email={attribute.value.email}
      on:save={() => dispatch('save', attribute)}
    />
  {:else if attribute.type === AttributeType.LINK}
    <LinkForm
      bind:name={attribute.name}
      bind:url={attribute.value.url}
      on:save={() => dispatch('save', attribute)}
    />
  {:else if attribute.type === AttributeType.PHONE}
    <PhoneForm
      bind:name={attribute.name}
      bind:number={attribute.value.number}
      bind:extension={attribute.value.extension}
      bind:smsEnabled={attribute.value.smsEnabled}
      on:save={() => dispatch('save', attribute)}
    />
  {:else if attribute.type === AttributeType.SOCIAL}
    <SocialForm
      bind:name={attribute.name}
      bind:handle={attribute.value.handle}
      bind:url={attribute.value.url}
      on:save={() => dispatch('save', attribute)}
    />
  {:else if attribute.type === AttributeType.TEXT}
    <TextForm
      bind:name={attribute.name}
      bind:text={attribute.value.text}
      on:save={() => dispatch('save', attribute)}
    />
  {:else}
    {throwInvalidType()}
  {/if}
</div>
