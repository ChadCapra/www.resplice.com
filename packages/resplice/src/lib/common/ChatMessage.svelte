<script lang="ts">
  import { differenceInDays, format } from 'date-fns'
  import type { Message } from '$types'
  import Avatar from '$lib/common/Avatar.svelte'
  export let message: Message
  const ts = new Date(message.timestamp)
  $: timestamp =
    differenceInDays(new Date(), ts) < 7
      ? format(ts, "E 'at' p")
      : format(ts, "P',' p")
</script>

<div class="flex items-start space-x-2">
  <div class="mt-2"><Avatar uuid={message.entity_uuid} size="sm" /></div>

  <div class="flex flex-col">
    <div class="flex space-x-2">
      <h4 class="font-semibold text-gray-800">{message.entity_name}</h4>
      <time class="text-gray-700">
        {timestamp}
      </time>
    </div>
    <p class="bg-gray-200 px-4 py-2 rounded-b-lg rounded-r-lg">
      {message.content}
    </p>
  </div>
</div>
