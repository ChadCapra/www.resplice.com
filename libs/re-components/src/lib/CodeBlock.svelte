<script lang="ts">
  import { onDestroy } from 'svelte'
  import ClipboardIcon from '$lib/icons/ClipboardIcon.svelte'
  import CheckmarkIcon from '$lib/icons/CheckmarkIcon.svelte'
  import CloseIcon from '$lib/icons/CloseIcon.svelte'

  let checked = false
  let error = false
  let timeout: NodeJS.Timeout
  let code: HTMLPreElement

  async function copy() {
    try {
      await navigator.clipboard.writeText(code.textContent)
      checked = true
    } catch {
      error = true
    }

    timeout = setTimeout(() => {
      checked = false
      error = false
    }, 1000)
  }

  onDestroy(() => {
    clearTimeout(timeout)
  })
</script>

<div
  class="p-4 bg-slate-600 text-slate-200 rounded-lg w-full flex items-center justify-between"
>
  <code class="overflow-auto">
    <pre bind:this={code}><slot>Code</slot></pre>
  </code>
  <button
    class="ring ring-gray-500 p-2 rounded-lg"
    class:ring-green-400={checked}
    class:text-green-400={checked}
    class:ring-red-400={error}
    class:text-red-400={error}
    on:click={copy}
  >
    {#if checked}
      <CheckmarkIcon width={24} height={24} />
    {:else if error}
      <CloseIcon width={24} height={24} />
    {:else}
      <ClipboardIcon width={24} height={24} />
    {/if}
  </button>
</div>
