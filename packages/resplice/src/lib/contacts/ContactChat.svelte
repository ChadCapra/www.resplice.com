<script lang="ts">
  // import VirtualList from 'svelte-tiny-virtual-list'
  import ChatMessage from '$lib/common/ChatMessage.svelte'
  import type { Chat } from '$types/contact'

  export let chats: Chat[]
</script>

<div class="flex flex-col w-full h-full p-4 overflow-auto">
  {#each chats as chat}
    <ChatMessage {chat} />
  {/each}
  <!-- <VirtualList itemSize={64} itemCount={messages.length} height={600}>
    <div slot="item" let:index let:style {style}>
      <ChatMessage message={messages[index]} />
    </div>
  </VirtualList> -->
</div>
