<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { spring } from 'svelte/motion'
	import { goto } from '$app/navigation'
	import AddIcon from '$common/components/icons/AddIcon.svelte'
	import CloseIcon from '$common/components/icons/CloseIcon.svelte'
	import CameraIcon from '$common/components/icons/CameraIcon.svelte'
	import QRCodeIcon from '$common/components/icons/QRCodeIcon.svelte'
	import PeopleIcon from '$common/components/icons/PeopleIcon.svelte'
	import CallIcon from '$common/components/icons/CallIcon.svelte'
	import MailIcon from '$common/components/icons/MailIcon.svelte'
	import PersonAddIcon from '$common/components/icons/PersonAddIcon.svelte'

	const dispatch = createEventDispatcher()
	let showActions = false

	const rotation = spring(0)
	const translateY = spring(144)
	const scale = spring(0)

	function openActions() {
		dispatch('open')
		rotation.set(0.25)
		translateY.set(0)
		scale.set(1)
		showActions = true
	}

	function closeActions() {
		dispatch('close')
		rotation.set(0)
		translateY.set(144)
		scale.set(0)
		showActions = false
	}
</script>

<button
	class="bg-brand-primary text-white rounded-xl p-3 transform transition duration-75 ease-out active:scale-90 focus:outline-none z-20"
	style="will-change: transform; transform: rotateZ({$rotation}turn);"
	on:click={showActions ? closeActions : openActions}
>
	{#if showActions}
		<CloseIcon width={24} height={24} />
	{:else}
		<AddIcon width={24} height={24} />
	{/if}
</button>

{#if showActions}
	<div
		class="fixed top-0 left-0 w-full h-full backdrop z-10 overflow-hidden"
		style="margin: 0; padding: 0"
	>
		<div
			class="absolute left-0 top-0 w-full h-full bg-gray-700 opacity-30"
			on:click={closeActions}
		/>
		<div class="absolute bottom-20 flex items-center justify-center w-full">
			<div
				class="bg-white rounded-xl p-8 flex flex-col items-start space-y-4"
				style="will-change: transform; transform: translateY({$translateY}px) scale({$scale})"
			>
				<button
					class="flex items-center space-x-2 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-lg w-full"
					on:click={() => goto('/app/invite/qr/scan')}
				>
					<div class="p-2 rounded-lg bg-brand-primary text-brand-primary bg-opacity-20">
						<CameraIcon width={24} height={24} />
					</div>
					<p>Scan QR</p>
				</button>
				<button
					class="flex items-center space-x-2 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-lg w-full"
					on:click={() => goto('/app/invite/qr')}
				>
					<div class="p-2 rounded-lg bg-brand-primary text-brand-primary bg-opacity-20">
						<QRCodeIcon width={24} height={24} />
					</div>
					<p>Show QR</p>
				</button>
				<button
					class="flex items-center space-x-2 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-lg w-full"
					on:click={() => goto('/app/invite/bulk')}
				>
					<div class="p-2 rounded-lg bg-brand-primary text-brand-primary bg-opacity-20">
						<PeopleIcon width={24} height={24} />
					</div>
					<p>Bulk Invite</p>
				</button>
				<button
					class="flex items-center space-x-2 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-lg w-full"
					on:click={() => goto('/app/invite/create/handle')}
				>
					<div class="p-2 rounded-lg bg-brand-primary text-brand-primary bg-opacity-20">
						<PersonAddIcon width={24} height={24} />
					</div>
					<p>Invite with Handle</p>
				</button>
				<button
					class="flex items-center space-x-2 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-lg w-full"
					on:click={() => goto('/app/invite/create/phone')}
				>
					<div class="p-2 rounded-lg bg-brand-primary text-brand-primary bg-opacity-20">
						<CallIcon width={24} height={24} />
					</div>
					<p>Invite with Phone</p>
				</button>
				<button
					class="flex items-center space-x-2 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-lg w-full"
					on:click={() => goto('/app/invite/create/email')}
				>
					<div class="p-2 rounded-lg bg-brand-primary text-brand-primary bg-opacity-20">
						<MailIcon width={24} height={24} />
					</div>
					<p>Invite with Email</p>
				</button>
			</div>
		</div>
	</div>
{/if}
