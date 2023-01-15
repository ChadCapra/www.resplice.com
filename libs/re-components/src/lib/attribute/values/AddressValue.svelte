<script lang="ts">
	import type { AddressValue } from '@resplice/utils'

	export let value: AddressValue
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
	<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
		{value.streetAddress1}
	</span>
	{#if !!value.streetAddress2}
		<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
			{value.streetAddress2}
		</span>
	{/if}
	<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
		{value.locality
			? `${value.locality}, ${value.region} ${value.postalCode}`
			: `${value.region} ${value.postalCode}`}
	</span>
	<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
		{value.country}
	</span>
</div>
