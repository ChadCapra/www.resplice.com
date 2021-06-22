<script>
  import type { Attribute, AttributeType } from '$types'

  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import PhoneForm from './PhoneForm.svelte'
  import EmailForm from './EmailForm.svelte'
  import AddressForm from './AddressForm.svelte'
  import SocialForm from './SocialForm.svelte'

  export let attributeType: AttributeType
  export let attribute: Attribute | null = null
  let attributeName = attribute?.name || ''
  let attributeValue: any[] = attribute ? [...attribute.value] : []

  function saveAttribute() {
    console.log(attributeName, attributeValue)
  }
</script>

<div class="w-full h-full flex-1 overflow-auto p-4 flex flex-col">
  <div class="w-full shadow-lg rounded-lg p-4 mb-12 flex-none">
    <h2 class="text-xl font-semibold mb-4">{attributeType.name}</h2>
    <AttributeItem
      itemType="disabled"
      attribute={{
        type: attributeType.type,
        name: attributeName || '',
        value: attributeValue
      }}
    />
  </div>
  {#if attributeType.type === 'phone'}
    <PhoneForm
      bind:name={attributeName}
      bind:countryCallingCode={attributeValue[0]}
      bind:number={attributeValue[1]}
      bind:extension={attributeValue[2]}
      bind:sms={attributeValue[3]}
      on:save={saveAttribute}
    />
  {:else if attributeType.type === 'email'}
    <EmailForm
      bind:name={attributeName}
      bind:email={attributeValue[0]}
      on:save={saveAttribute}
    />
  {:else if attributeType.type === 'address'}
    <AddressForm
      bind:name={attributeName}
      bind:address1={attributeValue[0]}
      bind:address2={attributeValue[1]}
      bind:city={attributeValue[2]}
      bind:state={attributeValue[3]}
      bind:postalCode={attributeValue[4]}
      bind:country={attributeValue[5]}
      on:save={saveAttribute}
    />
  {:else if attributeType.type === 'social'}
    <SocialForm
      bind:name={attributeName}
      bind:handle={attributeValue[0]}
      on:save={saveAttribute}
    />
  {:else}
    <p>Form not yet available</p>
  {/if}
</div>
