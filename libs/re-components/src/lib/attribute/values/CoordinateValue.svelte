<script lang="ts">
	import type { CoordinateValue } from '@resplice/utils'

	export let value: CoordinateValue
</script>

<p>{value.latitude},{value.longitude}</p>
