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
  <AddressValue {attribute} />
{:else if attribute.type === AttributeType.CREDENTIAL}
  <CredentialValue {attribute} />
{:else if attribute.type === AttributeType.DATE}
  <DateValue {attribute} />
{:else if attribute.type === AttributeType.EMAIL}
  <EmailValue {attribute} />
{:else if attribute.type === AttributeType.PHONE}
  <PhoneValue {attribute} />
{:else if attribute.type === AttributeType.SOCIAL}
  <SocialValue {attribute} />
{:else if attribute.type === AttributeType.TEXT}
  <TextValue {attribute} />
{/if}
