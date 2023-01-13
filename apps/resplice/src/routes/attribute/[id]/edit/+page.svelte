<script lang="ts" context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params }) {
		return {
			props: {
				id: parseInt(params.id, 10)
			}
		}
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation'
	import useAppClient from '$lib/hooks/useAppClient'
	import attributeStore from '$stores/attributes'
	import AttributeForm from '$lib/attributes/form/AttributeForm.svelte'
	import attributeTypes from '$lib/attributes/attributeTypes'
	import type { Attribute } from '$types/user'

	const client = useAppClient()

	export let id: number

	const attribute = $attributeStore.get(id)

	$: attributeTypeConfig = attributeTypes[attribute.type]

	async function editAttribute(attribute: Attribute) {
		await Promise.all([
			client.attributes.editName(attribute),
			client.attributes.editValue(attribute)
		])
		goto(`/app/attribute/${id}/detail`)
	}
</script>

<main class="h-full w-full flex flex-col items-center justify-between max-w-xl m-auto">
	<AttributeForm {attribute} {attributeTypeConfig} on:save={(e) => editAttribute(e.detail)} />
</main>
