<script lang="ts" context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params }) {
		return {
			props: {
				id: parseInt(params.id, 10)
			}
		}
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation'
	import profileStore from '$stores/profile'
	import inviteStores from '$stores/invites'
	import Header from '$lib/user/Header.svelte'
	import Avatar from '$lib/common/Avatar.svelte'

	export let id: number

	const invitesStore = inviteStores.invites
	const inviteAttributesStore = inviteStores.inviteAttributesDict

	$: invite = $invitesStore && $invitesStore.get(id)
	$: inviteAttributes = $inviteAttributesStore && $inviteAttributesStore[id]
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header profile={$profileStore} on:back={() => goto('/app/invite/list')} />
	<main class="flex-1 overflow-auto relative w-full max-w-xl m-auto py-4 rounded-t-3xl bg-white">
		<div class="w-full flex flex-col items-center justify-center space-y-2 mt-8">
			<Avatar id={invite.id} size="xl" />
			<h2 class="text-xl font-semibold">{invite.name}</h2>
		</div>
	</main>
</div>
