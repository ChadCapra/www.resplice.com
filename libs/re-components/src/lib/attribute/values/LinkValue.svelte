<script lang="ts">
	import Link from '$lib/Link.svelte'
	import LinkPreview from '$lib/LinkPreview.svelte'
	import type { LinkValue } from '@resplice/utils'

	export let value: LinkValue
</script>

<div>
	<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
		<Link useNewWindow>{value.url}</Link>
	</span>
	<LinkPreview url={value.url} />
</div>
