<script lang="ts">
  import { differenceInDays, format } from 'date-fns'
  import type { Chat } from '$types/chat'
  import Avatar from '$lib/common/Avatar.svelte'
  import ChatContent from '$lib/chat/ChatContent.svelte'
  export let chat: Chat
  const sa = chat.sent_at
  $: timestamp =
    differenceInDays(new Date(), sa) < 7
      ? format(sa, "E 'at' p")
      : format(sa, "P',' p")
</script>

<div class="flex items-start space-x-2">
  <div class="mt-2"><Avatar uuid={chat.entity_uuid} size="sm" /></div>

  <div class="flex flex-col">
    <div class="flex space-x-2">
      <h4 class="font-semibold text-gray-800">{chat.direction}</h4>
      <time class="text-gray-700">
        {timestamp}
      </time>
    </div>
    <ChatContent {chat} />
  </div>
</div>
