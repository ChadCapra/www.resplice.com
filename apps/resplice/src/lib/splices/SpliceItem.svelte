<script lang="ts">
  import type { Splice } from '$types/splice'
  import Avatar from '$lib/common/Avatar.svelte'
  import AttributeSummary from '$lib/splices/AttributeSummary.svelte'
  import MessageSummary from '$lib/splices/MessageSummary.svelte'

  export let splice: Pick<
    Splice,
    'uuid' | 'name' | 'latest_attribute' | 'latest_message' | 'missed_messages'
  >
</script>

<div class="w-full p-4" on:click>
  <div class="w-full flex space-x-2 shadow p-2 rounded-lg">
    <div class="flex-none"><Avatar size="sm" uuid={splice.uuid} /></div>
    <div class="flex-1 flex flex-col overflow-hidden">
      <div class="w-full flex items-center justify-between">
        <h4 class="font-bold text-gray-900">{splice.name}</h4>
        <AttributeSummary attribute={splice.latest_attribute} />
      </div>
      <div class="w-full flex">
        <MessageSummary
          message={splice.latest_message}
          messageCount={splice.missed_messages}
        />
      </div>
    </div>
  </div>
</div>
