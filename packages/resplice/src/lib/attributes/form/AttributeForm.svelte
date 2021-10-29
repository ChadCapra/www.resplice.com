<script lang="ts">
  import type { Attribute, AttributeTypeConfig } from '$types/attribute'
  import { AttributeType } from '$types/attribute'

  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import PhoneForm from './PhoneForm.svelte'
  import EmailForm from './EmailForm.svelte'
  import AddressForm from './AddressForm.svelte'
  import SocialForm from './SocialForm.svelte'

  export let attributeType: AttributeType
  export let attributeTypeConfig: AttributeTypeConfig

  let newAttribute: Attribute = {
    type: attributeType,
    uuid: 'new-attribute',
    name: '',
    value: {} as any,
    sort_order: 0
  }

  function saveAttribute() {
    console.log(newAttribute)
  }
</script>

<div class="w-full h-full flex-1 overflow-auto p-4 flex flex-col">
  <div class="w-full shadow-lg rounded-lg p-4 mb-12 flex-none">
    <h2 class="text-xl font-semibold mb-4">{attributeTypeConfig.name}</h2>
    <AttributeItem itemType="disabled" attribute={newAttribute} />
  </div>
  {#if newAttribute.type === AttributeType.PHONE}
    <PhoneForm
      bind:name={newAttribute.name}
      bind:countryCallingCode={newAttribute.value.countryCallingCode}
      bind:number={newAttribute.value.number}
      bind:extension={newAttribute.value.extension}
      bind:isSms={newAttribute.value.isSms}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.EMAIL}
    <EmailForm
      bind:name={newAttribute.name}
      bind:email={newAttribute.value.email}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.ADDRESS}
    <AddressForm
      bind:name={newAttribute.name}
      bind:address1={newAttribute.value.address_1}
      bind:address2={newAttribute.value.address_2}
      bind:locality={newAttribute.value.locality}
      bind:region={newAttribute.value.region}
      bind:postalCode={newAttribute.value.postal_code}
      bind:country={newAttribute.value.country}
      on:save={saveAttribute}
    />
  {:else if newAttribute.type === AttributeType.SOCIAL}
    <SocialForm
      bind:name={newAttribute.name}
      bind:handle={newAttribute.value.handle}
      on:save={saveAttribute}
    />
  {:else}
    <p>Form not yet available</p>
  {/if}
</div>
