<script lang="ts">
	import { goto } from '$app/navigation'
	import TypeItem from '$lib/attributes/TypeItem.svelte'
	import Button from '$lib/common/Button.svelte'
	import attributeTypes from '$lib/attributes/attributeTypes'

	$: typeConfigs = Object.entries(attributeTypes)
</script>

<main class="h-full w-full flex flex-col items-center justify-between max-w-xl m-auto">
	<div class="w-full p-4">
		<h2 class="text-xl font-semibold mb-4">Select an Attribute Type</h2>
		<div class="flex flex-col space-y-4">
			{#each typeConfigs as [type, config]}
				<TypeItem
					attributeTypeConfig={config}
					on:click={() => goto(`create/${type.toLowerCase()}`)}
				/>
			{/each}
		</div>
	</div>
	<div class="p-4">
		<Button class="w-40" color="gray" on:click={() => window.history.back()}>Back</Button>
	</div>
</main>
