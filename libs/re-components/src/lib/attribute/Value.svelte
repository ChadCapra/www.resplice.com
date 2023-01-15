<script lang="ts">
	import AddressValue from '$lib/attribute/values/AddressValue.svelte'
	import CoordinateValue from '$lib/attribute/values/CoordinateValue.svelte'
	import CredentialValue from '$lib/attribute/values/CredentialValue.svelte'
	import DateValue from '$lib/attribute/values/DateValue.svelte'
	import EmailValue from '$lib/attribute/values/EmailValue.svelte'
	import PhoneValue from '$lib/attribute/values/PhoneValue.svelte'
	import SocialValue from '$lib/attribute/values/SocialValue.svelte'
	import TextValue from '$lib/attribute/values/TextValue.svelte'
	import { type Attribute, AttributeType } from '@resplice/utils'

	export let attribute: Attribute
</script>

{#if attribute.type === AttributeType.ADDRESS}
	<AddressValue value={attribute.value} />
{:else if attribute.type === AttributeType.COORDINATE}
	<CoordinateValue value={attribute.value} />
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
