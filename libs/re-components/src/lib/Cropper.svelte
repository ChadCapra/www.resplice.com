<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import Croppie from 'croppie'
	import 'croppie/croppie.css'
	import Button from '$lib/Button.svelte'

	const dispatch = createEventDispatcher()

	export let image: File
	export let close: () => void

	let cropperContainer: HTMLDivElement
	let croppie: Croppie

	onMount(() => {
		croppie = new Croppie(cropperContainer, {
			viewport: {
				type: 'circle',
				height: 256,
				width: 256
			}
		})
		croppie.bind({ url: URL.createObjectURL(image) })

		return () => croppie.destroy()
	})

	async function crop() {
		const croppedImage = await croppie.result({
			type: 'blob',
			format: 'webp',
			quality: 1,
			circle: true
		})
		dispatch('crop', croppedImage)
	}
</script>

<div class="w-full h-5/6 p-4 flex flex-col justify-between space-y-4 overflow-scroll">
	<h1 class="font-semibold text-xl">Crop Image</h1>
	<div class="rounded-lg" bind:this={cropperContainer} />
	<div class="m-auto flex space-x-4 pt-10">
		<Button color="gray" on:click={close}>Cancel</Button>
		<Button color="brand" on:click={crop}>Save</Button>
	</div>
</div>

<style>
	:global(.cr-boundary) {
		border-radius: 0.5rem;
		background-color: #e2e8f0;
	}
</style>
