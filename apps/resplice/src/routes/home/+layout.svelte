<script lang="ts">
	import { page } from '$app/stores'
	import NavItem from '$lib/common/NavItem.svelte'
	import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
	import ChatBubbles from '$lib/icons/ChatBubblesIcon.svelte'
	import NavActions from '$lib/common/NavActions.svelte'
	import SearchHeader from '$lib/common/SearchHeader.svelte'

	$: isOnContacts = $page.url.pathname.includes('/home/contacts')
	$: isOnChats = $page.url.pathname.includes('/home/chats')
</script>

<main class="flex flex-col w-full h-full overflow-auto">
	<SearchHeader />
	<div class="flex-1 overflow-auto"><slot /></div>
	<nav
		class="relative flex-none flex justify-around items-center p-2 border-t-2 border-gray-200 overflow-hidden"
	>
		<NavItem isActive={isOnContacts} href="/home/contacts">
			<PeopleIcon width={32} height={32} />
		</NavItem>
		<NavActions />
		<NavItem isActive={isOnChats} href="/home/chats">
			<ChatBubbles width={32} height={32} />
		</NavItem>
	</nav>
</main>
