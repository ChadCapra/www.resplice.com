<script lang="ts">
	import { onDestroy } from 'svelte'
	import QR, { type QRCode } from 'jsqr'
	import { goto } from '$app/navigation'
	import contactStores from '$stores/contacts'
	import useAppClient from '$lib/hooks/useAppClient'
	import Camera from '$lib/common/Camera.svelte'
	import CloseIcon from '$lib/icons/CloseIcon.svelte'
	import Spinner from '$lib/common/skeleton/Spinner.svelte'

	const client = useAppClient()

	let qrCode: QRCode
	let streamInterval: NodeJS.Timeout
	let isLoading = false

	async function handleQr(qrData: string | null) {
		if (!qrData) return

		isLoading = true
		const url = new URL(qrData)
		console.log(url)
		const paths = url.pathname.split('/')
		const idx = paths.findIndex((p) => p === 'qr') + 1
		const [id, code] = atob(paths[idx]).split('|')
		const qrInviteId = parseInt(id, 10)
		const accessCode = parseInt(code, 10)

		const pendingContact = await client.invites.openQr(qrInviteId, accessCode)
		contactStores.pendingContacts.update((pendingContacts) => {
			const newPendingContacts = new Map(pendingContacts)
			newPendingContacts.set(pendingContact.id, pendingContact)
			return newPendingContacts
		})

		goto(`/app/pending/contact/${pendingContact.id}`)
	}

	$: handleQr(qrCode?.data)

	async function onVideoStream(e: CustomEvent<HTMLVideoElement>) {
		const stream = e.detail
		const canvasEl = document.createElement('canvas')
		const canvas = canvasEl.getContext('2d')

		// Maybe use requestAnimationFrame here instead of interval
		streamInterval = setInterval(async () => {
			if (qrCode) return
			if (stream.readyState !== stream.HAVE_ENOUGH_DATA) return
			const { videoWidth: width, videoHeight: height } = stream
			canvasEl.height = height
			canvasEl.width = width
			canvas.drawImage(stream, 0, 0, width, height)
			// Might need to make these dimensions smaller for performance
			const imageData = canvas.getImageData(0, 0, width, height)
			const code = QR(imageData.data, imageData.width, imageData.height, {
				inversionAttempts: 'dontInvert'
			})
			if (code) {
				console.log(code)
				clearInterval(streamInterval)
				qrCode = code
			}
		}, 500)
	}

	onDestroy(() => {
		clearInterval(streamInterval)
	})
</script>

<main class="relative w-full h-full flex items-center justify-center">
	<Camera hideControls on:stream={onVideoStream} on:close={() => goto('/app/list/contacts')} />

	<div class="absolute bottom-0 z-10 flex items-center justify-center w-full p-4">
		<button
			class="h-12 w-12 p-2 rounded-full bg-gray-800 bg-opacity-50 transform transition duration-75 ease-in-out active:scale-90"
			on:click={() => window.history.back()}
		>
			<CloseIcon width={32} height={32} />
		</button>
	</div>

	<div
		class="border-4 border-brand-primary w-3/4 h-1/2 z-10 rounded-2xl flex justify-center items-center"
	>
		{#if isLoading}
			<Spinner />
		{/if}
	</div>
</main>
