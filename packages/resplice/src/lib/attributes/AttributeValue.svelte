<script lang="ts">
  import type { Attribute } from '$types/attribute'
  import { AttributeType } from '$types/attribute'

  import AddressValue from '$lib/attributes/values/AddressValue.svelte'
  import CredentialValue from '$lib/attributes/values/CredentialValue.svelte'
  import DateValue from '$lib/attributes/values/DateValue.svelte'
  import EmailValue from '$lib/attributes/values/EmailValue.svelte'
  import PhoneValue from '$lib/attributes/values/PhoneValue.svelte'
  import SocialValue from '$lib/attributes/values/SocialValue.svelte'
  import TextValue from '$lib/attributes/values/TextValue.svelte'

  export let attribute: Attribute
</script>

{#if attribute.type === AttributeType.ADDRESS}
  <AddressValue value={attribute.value} />
{:else if attribute.type === AttributeType.CREDENTIAL}
  <CredentialValue value={attribute.value} />
{:else if attribute.type === AttributeType.DATE}
  <DateValue value={attribute.value} />
{:else if attribute.type === AttributeType.EMAIL}
  <EmailValue value={attribute.value} />
{:else if attribute.type === AttributeType.PHONE}
  <PhoneValue value={attribute.value} />
{:else if attribute.type === AttributeType.SOCIAL}
  <SocialValue value={attribute.value} />
{:else if attribute.type === AttributeType.TEXT}
  <TextValue value={attribute.value} />
{/if}
