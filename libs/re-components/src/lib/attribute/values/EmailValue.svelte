<script lang="ts">
	import type { EmailValue } from '@resplice/utils'

	export let value: EmailValue
</script>

<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
	{value.email}
</span>
