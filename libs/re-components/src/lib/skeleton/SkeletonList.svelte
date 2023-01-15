<script lang="ts">
	import Skeleton from '$lib/skeleton/Skeleton.svelte'

	export let count: number
	export let width: string
	export let height: string

	let skels = Array(count)
</script>

<div class="w-full flex flex-col space-y-4">
	{#each skels as _}
		<Skeleton variant="rect" {width} {height} />
	{/each}
</div>
