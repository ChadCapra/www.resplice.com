<script lang="ts">
	import { onMount } from 'svelte'
	import eventStore from '$stores/events'
	import useToast, { ToastType } from '$lib/hooks/useToast'

	const { add: addToast } = useToast()

	onMount(() => {
		addToast({
			type: ToastType.DANGER,
			title: 'Error',
			detail: 'Something went wrong'
		})
	})
</script>

<div class="w-full h-full">
	<p>Connection Status: {$eventStore.connStatus}</p>
	<p>Testing stuff</p>
</div>
