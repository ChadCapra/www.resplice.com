<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import SendIcon from '$lib/icons/SendIcon.svelte'

  const dispatch = createEventDispatcher()

  let chatField: HTMLDivElement
  export let label: string

  function onSend() {
    const content = chatField.innerText
    if (!content) return
    dispatch('send', { content })
    chatField.innerText = ''
    chatField.focus()
  }
</script>

<div class="flex-1 overflow-auto p-2">
  <div class="relative w-full text-left">
    <div
      bind:this={chatField}
      role="textbox"
      contenteditable
      spellcheck
      {label}
      id="message-content"
      class="max-h-80 outline-none border-none rounded-3xl px-5 py-3 text-gray-900 focus:ring-2 focus:ring-gray-600 bg-gray-200 pr-12 overflow-auto break-words"
      style="min-height: 3rem"
    />

    <button
      class="absolute right-0 bottom-0 bg-brand-primary text-white rounded-full p-2 m-1 transform transition duration-75 ease-in-out active:scale-90"
      on:click={onSend}
    >
      <SendIcon width={24} height={24} />
    </button>
  </div>
</div>
