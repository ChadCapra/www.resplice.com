<script lang="ts">
  import { onMount } from 'svelte'

  let isMocking = false
  const initMockWorker = async () => {
    const { worker } = await import('../../services/mocks/browser')
    worker.start()
    isMocking = true
  }
  onMount(() => {
    initMockWorker()
  })
</script>

{#if isMocking}
  <slot />
{:else}
  <div class="p-4">Loading...</div>
{/if}
