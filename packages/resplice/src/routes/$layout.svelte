<script context="module">
  // import { waitLocale } from 'svelte-i18n'
  export async function load({ page }) {
    const paths = page.path.split('/')
    console.log(paths)
    return {
      props: {
        paths
      }
    }
    // await waitLocale()
  }
</script>

<script>
  import MockWorker from '$lib/common/MockWorker.svelte'
  import NavItem from '$lib/common/NavItem.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import ChatBubbles from '$lib/icons/ChatBubblesIcon.svelte'
  import NavActions from '$lib/common/NavActions.svelte'
  // TODO: Fix when sapper segment equivalent is on Svelte Kit
  export let paths: string[]
  $: isOnContacts = paths && paths[1] === 'contacts'
  $: isOnSplices = paths && paths[1] === 'splices'
</script>

<MockWorker>
  {#if (isOnContacts || isOnSplices) && paths.length === 2}
    <main class="flex flex-col w-full h-full overflow-auto">
      <div class="flex-1 overflow-auto"><slot /></div>
      <nav
        class="relative flex-none flex justify-between items-center rounded-t-3xl shadow-md bg-gray-100 p-4"
      >
        <NavItem isActive={isOnContacts} href="/contacts">
          <PeopleIcon width={32} height={32} />
          <span>Contacts</span>
        </NavItem>
        <NavActions />
        <NavItem isActive={isOnSplices} href="/splices">
          <ChatBubbles width={32} height={32} />
          <span>Splices</span>
        </NavItem>
      </nav>
    </main>
  {:else}
    <slot />
  {/if}
</MockWorker>
