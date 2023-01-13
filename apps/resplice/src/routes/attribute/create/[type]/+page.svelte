<script context="module">
	/** @type {import('./[type]').Load} */
	export async function load({ params }) {
		return {
			props: {
				attributeType: params.type.toUpperCase()
			}
		}
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation'
	import useAppClient from '$lib/hooks/useAppClient'
	import AttributeForm from '$lib/attributes/form/AttributeForm.svelte'
	import attributeTypes from '$lib/attributes/attributeTypes'
	import type { Attribute, AttributeType } from '$types/attribute'

	const client = useAppClient()

	export let attributeType: AttributeType

	let newAttribute: Attribute = {
		id: 0,
		type: attributeType,
		name: '',
		value: {} as any,
		sortOrder: 0
	}

	$: attributeTypeConfig = attributeTypes[attributeType]

	async function saveAttribute(attribute: Attribute) {
		await client.attributes.add({
			type: attribute.type,
			name: attribute.name,
			value: attribute.value
		})
		goto('/app/user')
	}
</script>

<main class="h-full w-full flex flex-col items-center justify-between max-w-xl m-auto">
	<AttributeForm
		attribute={newAttribute}
		{attributeTypeConfig}
		on:save={(e) => saveAttribute(e.detail)}
	/>
</main>
