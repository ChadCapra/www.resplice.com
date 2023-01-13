<script lang="ts">
	import { onMount } from 'svelte'
	import profile from '$stores/profile'
	import useConfig from '$lib/hooks/useConfig'
	import useAppClient from '$lib/hooks/useAppClient'
	import QrCode from '$lib/common/QRCode.svelte'
	import Header from '$lib/user/Header.svelte'
	import ShareContext from '$lib/sharing/ShareContext.svelte'
	import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
	import type { QrInvite } from '$types/invite'

	const config = useConfig()
	const client = useAppClient()
	let activeQrInvite: QrInvite | null = null

	let url: string
	let shares: Set<number>

	async function fetchQr() {
		activeQrInvite = await client.invites.createQr()
		shares = new Set(activeQrInvite.attributeIds.map((ai) => ai.attributeId))
		const qrUnlock = `${activeQrInvite.id}|${activeQrInvite.accessCode}`
		const b64QrUnlock = btoa(qrUnlock)
		url = `${config.appUrl}/app/invite/qr/${b64QrUnlock}`
		console.log(url)
	}

	onMount(fetchQr)
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header profile={$profile} showUser />
	<main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto">
		<div class="flex items-center justify-center mb-8">
			{#if url}
				<QrCode data={url} scale={9} />
			{:else}
				<Skeleton class="mt-8" variant="rect" width="297px" />
			{/if}
		</div>
		<ShareContext bind:shares />
	</main>
</div>
