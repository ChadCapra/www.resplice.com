<script>
  import VirtualList from '@sveltejs/svelte-virtual-list/VirtualList.svelte'
  import ChatMessage from '$lib/common/ChatMessage.svelte'
  import type { Message } from '$types'

  export let messages: Message[]
</script>

<div class="flex flex-col w-full h-full p-4">
  <VirtualList itemHeight={64} items={messages} let:item>
    <ChatMessage message={item} />
  </VirtualList>
</div>
