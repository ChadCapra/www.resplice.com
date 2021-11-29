<script lang="ts">
  import type { Chat } from '$types/chat'
  export let chat: Chat
</script>

<p class="bg-gray-200 px-4 py-2 rounded-b-lg rounded-r-lg">
  {JSON.stringify(chat.content)}
</p>
