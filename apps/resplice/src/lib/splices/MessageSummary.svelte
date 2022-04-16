<script lang="ts">
  import type { Message } from '$types'
  import { formatDistanceToNow, parseISO } from 'date-fns'

  export let message: Pick<Message, 'entity_name' | 'timestamp' | 'content'>
  export let messageCount: number
</script>

<div class="w-full flex items-center">
  <div class="flex-1 overflow-hidden">
    <p>
      <span class="font-semibold text-gray-700 mr-1">{message.entity_name}</span
      >
      <span class="text-sm text-gray-700">
        {formatDistanceToNow(parseISO(message.timestamp), {
          addSuffix: true
        })}
      </span>
    </p>
    <p class="w-full whitespace-nowrap overflow-hidden text-ellipsis">
      {message.content}
    </p>
  </div>
  <div
    class="flex-none h-6 w-6 p-1 rounded-full bg-brand-primary text-white text-center text-xs"
  >
    {messageCount}
  </div>
</div>
