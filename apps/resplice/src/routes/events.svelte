<script lang="ts">
  import { onMount } from 'svelte'
  import * as reproto from '@resplice/proto'
  import db from '$services/db'
  import AppLoading from '$lib/common/skeleton/AppLoading.svelte'
  import CodeBlock from '$lib/common/CodeBlock.svelte'

  type Event = {
    type: number
    counter: number
    data: any
  }

  let isLoading = Promise.resolve(false)
  let events: Event[] = []

  async function loadEvents() {
    const results = await db.read('events')
    events = results.events.map((e, i) => ({ counter: i + 1, ...e })).reverse()
    return true
  }

  function eventTypeToText(type: number) {
    const typeString = reproto.client_request.clientRequestTypeToJSON(type)
    return typeString.replaceAll('_', ' ')
  }

  onMount(() => (isLoading = loadEvents()))
</script>

{#await isLoading}
  <AppLoading />
{:then isLoaded}
  {#if isLoaded}
    <main
      class="w-full h-full flex flex-col space-y-4 p-8 bg-gray-100 overflow-auto"
    >
      {#each events as event}
        <div class="shadow rounded p-4 bg-white">
          <h2 class="text-lg font-semibold mb-4">
            {eventTypeToText(event.type)} ({event.counter})
          </h2>
          <CodeBlock>
            {JSON.stringify(event.data, null, 2)}
          </CodeBlock>
        </div>
      {/each}
    </main>
  {/if}
{/await}
