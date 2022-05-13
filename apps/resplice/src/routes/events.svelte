<script lang="ts">
  import { onMount } from 'svelte'
  import * as reproto from '@resplice/proto'
  import db from '$services/db'
  import AppLoading from '$lib/common/skeleton/AppLoading.svelte'
  import Code from '$lib/common/Code.svelte'

  type Event = {
    type: number
    data: any
  }

  let isLoading = Promise.resolve(false)
  let events: Event[] = []

  async function loadEvents() {
    const results = await db.read('events')
    events = results.events
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
    <main class="w-full h-full flex flex-col space-y-4 p-8 bg-gray-100">
      {#each events as event}
        <div class="shadow rounded p-4 bg-white">
          <h2 class="text-lg font-semibold mb-4">
            {eventTypeToText(event.type)}
          </h2>
          <Code>
            {JSON.stringify(event.data)}
          </Code>
        </div>
      {/each}
    </main>
  {/if}
{/await}
