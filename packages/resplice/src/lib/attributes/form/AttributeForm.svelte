<script lang="ts">
  import type { Attribute } from '$types'
  import { AttributeType } from '$types'

  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import PhoneForm from './PhoneForm.svelte'
  import EmailForm from './EmailForm.svelte'
  import AddressForm from './AddressForm.svelte'
  import SocialForm from './SocialForm.svelte'

  export let attribute: Attribute

  // Deep clone the attribute to edit properties.
  // If attributes start using anyhing other than primitives
  // it may result it data loss.
  // This should be refactored at some point
  let editingAttribute: Attribute = JSON.parse(JSON.stringify(attribute))

  function saveAttribute() {
    console.log(editingAttribute)
  }
</script>

<div class="w-full h-full flex-1 overflow-auto p-4 flex flex-col">
  <div class="w-full shadow-lg rounded-lg p-4 mb-12 flex-none">
    <h2 class="text-xl font-semibold mb-4">{editingAttribute.name}</h2>
    <AttributeItem itemType="disabled" attribute={editingAttribute} />
  </div>
  {#if editingAttribute.type === AttributeType.Phone}
    <PhoneForm
      bind:name={editingAttribute.name}
      bind:countryCallingCode={editingAttribute.value.countryCallingCode}
      bind:number={editingAttribute.value.number}
      bind:extension={editingAttribute.value.extension}
      bind:isSms={editingAttribute.value.isSms}
      on:save={saveAttribute}
    />
  {:else if editingAttribute.type === AttributeType.Email}
    <EmailForm
      bind:name={editingAttribute.name}
      bind:email={editingAttribute.value.email}
      on:save={saveAttribute}
    />
  {:else if editingAttribute.type === AttributeType.Address}
    <AddressForm
      bind:name={editingAttribute.name}
      bind:address1={editingAttribute.value.address_1}
      bind:address2={editingAttribute.value.address_2}
      bind:locality={editingAttribute.value.locality}
      bind:region={editingAttribute.value.region}
      bind:postalCode={editingAttribute.value.postal_code}
      bind:country={editingAttribute.value.country}
      on:save={saveAttribute}
    />
  {:else if editingAttribute.type === AttributeType.Social}
    <SocialForm
      bind:name={editingAttribute.name}
      bind:handle={editingAttribute.value.handle}
      on:save={saveAttribute}
    />
  {:else}
    <p>Form not yet available</p>
  {/if}
</div>
