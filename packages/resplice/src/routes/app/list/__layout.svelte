<script lang="ts">
  import { page } from '$app/stores'
  import NavItem from '$lib/common/NavItem.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import ChatBubbles from '$lib/icons/ChatBubblesIcon.svelte'
  import NavActions from '$lib/common/NavActions.svelte'

  $: isOnContacts = $page.path.includes('/app/list/contacts')
  $: isOnChats = $page.path.includes('/app/list/chats')
</script>

<!-- <MockWorker> -->
<main class="flex flex-col w-full h-full overflow-auto">
  <div class="flex-1 overflow-auto"><slot /></div>
  <nav
    class="relative flex-none flex justify-around items-center p-2 border-t-2 border-gray-200 overflow-hidden"
  >
    <NavItem isActive={isOnContacts} href="/app/list/contacts">
      <PeopleIcon width={32} height={32} />
    </NavItem>
    <NavActions />
    <NavItem isActive={isOnChats} href="/app/list/chats">
      <ChatBubbles width={32} height={32} />
    </NavItem>
  </nav>
</main>
<!-- </MockWorker> -->
