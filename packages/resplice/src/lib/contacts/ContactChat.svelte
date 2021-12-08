<script lang="ts">
  // import VirtualList from 'svelte-tiny-virtual-list'
  import chatStore from '$stores/chat'
  import Chat from '$lib/chat/Chat.svelte'
  import SkeletonList from '$lib/common/skeleton/SkeletonList.svelte'
  import type { Contact } from '$types/contact'

  export let contact: Contact | null

  $: chats = contact && $chatStore && $chatStore[contact.uuid]
</script>

<div class="flex flex-col w-full h-full p-8 overflow-auto">
  {#if chats}
    {#each chats as chat}
      <Chat {chat} />
    {/each}
  {:else}
    <SkeletonList count={12} width="100%" height="3.5em" />
  {/if}

  <!-- <VirtualList itemSize={64} itemCount={messages.length} height={600}>
    <div slot="item" let:index let:style {style}>
      <Chat chat={chats[index]} />
    </div>
  </VirtualList> -->
</div>
