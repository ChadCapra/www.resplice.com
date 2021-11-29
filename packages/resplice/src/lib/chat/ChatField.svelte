<script lang="ts">
  import SendIcon from '$lib/icons/SendIcon.svelte'

  let content: string
  export let label: string
  let isTouched = !!content

  let messageBoxElement: HTMLDivElement
  // class="absolute top-0 left-0 w-full outline-none border-none rounded-3xl px-5 py-3 text-gray-900 focus:ring-2 focus:ring-gray-600 bg-gray-200"
</script>

<div class="flex-1 overflow-auto p-2">
  <div class="relative w-full text-left">
    <div
      bind:this={messageBoxElement}
      role="textbox"
      contenteditable
      spellcheck
      {label}
      id="message-content"
      class="max-h-80 outline-none border-none rounded-3xl px-5 py-3 text-gray-900 focus:ring-2 focus:ring-gray-600 bg-gray-200 pr-12 overflow-auto break-words"
      style="min-height: 3rem"
      on:focus={() => (isTouched = true)}
      on:blur={() => (!!content ? (isTouched = true) : (isTouched = false))}
    />

    <div
      class="absolute right-0 bottom-0 bg-brand-primary text-white rounded-full p-2 m-1 transform transition duration-75 ease-in-out active:scale-90"
    >
      <SendIcon width={24} height={24} />
    </div>
  </div>
</div>
