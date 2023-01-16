<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Avatar from '$lib/Avatar.svelte'
	import UploadIcon from '$lib/icons/UploadIcon.svelte'
	import Modal from '$lib/Modal.svelte'
	import Cropper from '$lib/Cropper.svelte'

	const dispatch = createEventDispatcher()

	export let uuid: string
	export let avatarUrl: string | null

	let imageInput: HTMLInputElement
	let rawImage: File | null = null

	function onCrop(image: Blob) {
		rawImage = null
		dispatch('crop', image)
	}
</script>

<div class="w-full flex flex-col items-center">
	<button class="relative active:scale-95" on:click={() => imageInput.click()}>
		<!-- TODO: Fix profile id -->
		<Avatar {uuid} src={avatarUrl} size="xl" />
		<div class="absolute right-2 bottom-0 bg-white rounded-full p-2 text-gray-600">
			<UploadIcon width={24} height={24} />
		</div>
		<input
			bind:this={imageInput}
			class="hidden"
			type="file"
			accept="image/*"
			on:change={(e) => {
				if (e.currentTarget.files) {
					rawImage = e.currentTarget.files[0]
				}
			}}
		/>
	</button>
</div>

{#if !!rawImage}
	<Modal let:close on:close={() => (rawImage = null)} initialY={48}>
		<Cropper image={rawImage} {close} on:crop={(e) => onCrop(e.detail)} />
	</Modal>
{/if}
