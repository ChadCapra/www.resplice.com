<script lang="ts">
	import { attributeTypes, AttributeType } from '@resplice/utils'
	import type { DateValue } from '@resplice/utils'

	export let value: DateValue

	$: formattedDate = attributeTypes[AttributeType.DATE].valueToString(value)
</script>

<!-- Can potentially localize this format per country, will use US format for now -->
<div class="flex flex-col">
	<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
		{formattedDate}
	</span>
</div>
