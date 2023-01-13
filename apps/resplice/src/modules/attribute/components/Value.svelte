<script lang="ts">
	import AddressValue from '$modules/attribute/components/values/AddressValue.svelte'
	import CoordinateValue from './values/CoordinateValue.svelte'
	import CredentialValue from '$modules/attribute/components/values/CredentialValue.svelte'
	import DateValue from '$modules/attribute/components/values/DateValue.svelte'
	import EmailValue from '$modules/attribute/components/values/EmailValue.svelte'
	import PhoneValue from '$modules/attribute/components/values/PhoneValue.svelte'
	import SocialValue from '$modules/attribute/components/values/SocialValue.svelte'
	import TextValue from '$modules/attribute/components/values/TextValue.svelte'

	import { type Attribute, AttributeType } from '$modules/attribute/attribute.types'

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
