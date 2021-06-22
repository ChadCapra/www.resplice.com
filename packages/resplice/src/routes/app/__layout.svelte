<script>
  import { page } from '$app/stores'
  import NavItem from '$lib/common/NavItem.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import ChatBubbles from '$lib/icons/ChatBubblesIcon.svelte'
  import NavActions from '$lib/common/NavActions.svelte'
  // import MockWorker from '$lib/common/MockWorker.svelte'

  console.log($page)
  const isOnContacts = $page.path === '/app/contacts'
  const isOnSplices = $page.path === '/app/splices'
</script>

<!-- <MockWorker> -->
<main class="flex flex-col w-full h-full overflow-auto space-y-2">
  <div class="flex-1 overflow-auto"><slot /></div>
  <nav
    class="relative flex-none flex justify-between items-center rounded-t-3xl shadow-md bg-gray-100 p-4"
  >
    <NavItem isActive={isOnContacts} href="/app/contacts">
      <PeopleIcon width={32} height={32} />
      <span>Contacts</span>
    </NavItem>
    <NavActions />
    <NavItem isActive={isOnSplices} href="/app/splices">
      <ChatBubbles width={32} height={32} />
      <span>Splices</span>
    </NavItem>
  </nav>
</main>
<!-- </MockWorker> -->
