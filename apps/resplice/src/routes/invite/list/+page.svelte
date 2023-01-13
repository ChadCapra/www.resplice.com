<script lang="ts">
	import { goto } from '$app/navigation'
	import profileStore from '$stores/profile'
	import inviteStores from '$stores/invites'
	import Header from '$lib/user/Header.svelte'
	import InviteItem from '$lib/invite/InviteItem.svelte'

	const invitesStore = inviteStores.invites
	$: invites = $invitesStore && Array.from($invitesStore.values())
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
	<Header profile={$profileStore} showUser on:back={() => goto('/app/settings')} />
	<main class="flex-1 overflow-auto relative w-full max-w-xl m-auto py-4 rounded-t-3xl bg-white">
		<h2 class="text-2xl font-gray-700 px-8 my-2">Invited Contacts</h2>
		<div class="flex flex-col">
			{#each invites as invite}
				<InviteItem {invite} on:click={() => goto(`/app/invite/${invite.id}`)} />
			{/each}
		</div>
	</main>
</div>
