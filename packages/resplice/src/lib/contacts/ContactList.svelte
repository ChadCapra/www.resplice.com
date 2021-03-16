<script>
  import VirtualList from 'svelte-tiny-virtual-list'
  // import { goto } from '.svelte/assets/runtime/app/navigation'

  import ContactItem from '$lib/contacts/ContactItem.svelte'
  import Skeleton from '$lib/common/skeleton/Skeleton.svelte'
  import type { Contact } from '$types'

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
    <VirtualList itemSize={64} itemCount={contacts.length} height="100%">
      <div slot="item" let:index let:style {style}>
        <ContactItem
          contact={contacts[index]}
          on:click={() => {
            // goto(`/contacts/${item.uuid}`)
          }}
        />
      </div>
    </VirtualList>
  {:catch err}
    Oh no! {err}
  {/await}
</div>
