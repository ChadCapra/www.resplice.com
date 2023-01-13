<script lang="ts">
	import type { AttributeTypeConfig } from '$modules/attribute/attribute.types'
	import AttributeAction from '$lib/attributes/Action.svelte'

	export let attributeTypeConfig: AttributeTypeConfig
</script>

<button
	class="flex items-center w-full overflow-auto space-x-2 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-lg"
	on:click
>
	<AttributeAction
		itemType="disabled"
		attribute={{ value: {} }}
		attributeAction={attributeTypeConfig.actions[0]}
	/>
	<span class="font-semibold text-gray-800 overflow-hidden text-ellipsis">
		{attributeTypeConfig.name}
	</span>
</button>
