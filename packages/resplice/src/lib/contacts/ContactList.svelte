<script>
  import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte'
  // import { goto } from '.svelte/assets/runtime/app/navigation'

  import ContactItem from '$lib/contacts/ContactItem.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import type { Contact } from '$types/index.type'

  export let contactsAsync: Promise<Contact[]>
</script>

<!-- TODO: Implement Alphabet slider -->
<div class="flex-1 overflow-auto">
  {#await contactsAsync}
    {#each Array.from(Array(8).keys()) as _}
      <div class="w-full px-4 py-2">
        <Skeleton variant="rect" width="100%" height="48px" />
      </div>
    {/each}
  {:then contacts}
    <VirtualList itemHeight={64} items={contacts} let:item>
      <ContactItem
        contact={item}
        on:click={() => {
          // goto(`/contacts/${item.uuid}`)
        }}
      />
    </VirtualList>
  {:catch err}
    Oh no! {err}
  {/await}
</div>
