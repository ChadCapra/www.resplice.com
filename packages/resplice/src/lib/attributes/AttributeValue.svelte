<script>
  import type { Attribute } from '$types'

  import PhoneValue from '$lib/attributes/values/PhoneValue.svelte'
  import EmailValue from '$lib/attributes/values/EmailValue.svelte'
  import AddressValue from '$lib/attributes/values/AddressValue.svelte'

  export let attribute: Pick<Attribute, 'type' | 'value'>

  $: formattedValue = attribute.value.reduce((str, value, idx) => {
    if (typeof value === 'string' || typeof value === 'number') {
      if (idx === 0) {
        return value
      }
      return str + '\n' + value
    } else return str
  }, '')
</script>

{#if attribute.type === 'phone'}
  <PhoneValue {attribute} />
{:else if attribute.type === 'email'}
  <EmailValue {attribute} />
{:else if attribute.type === 'address'}
  <AddressValue {attribute} />
{:else}
  <span class="overflow-hidden overflow-ellipsis whitespace-pre-line">
    {formattedValue}
  </span>
{/if}
