<script>
  import AddIcon from '$lib/icons/AddIcon.svelte'
  import SendIcon from '$lib/icons/SendIcon.svelte'

  let messageContent: string
  export let label: string
  let isTouched = !!messageContent
</script>

<div class="w-full flex items-center space-x-4">
  <div class="flex-none bg-brand-primary text-white rounded-full p-3">
    <AddIcon width={24} height={24} />
  </div>
  <div
    class="relative bg-gray-200 rounded-3xl flex-1 text-left"
    style="min-height: 3rem"
  >
    <div
      role="textbox"
      contenteditable
      spellcheck
      {label}
      id="message-content"
      class="appearance-none absolute top-0 left-0 w-full outline-none border-none rounded-3xl px-5 py-3 text-gray-900 focus:ring-2 focus:ring-gray-600"
      style="min-height: 3rem"
      on:focus={() => (isTouched = true)}
      on:blur={() =>
        !!messageContent ? (isTouched = true) : (isTouched = false)}
    />
    <div
      class="absolute right-0 bottom-0 bg-brand-primary text-white rounded-full p-2 m-1 max-w-max transform transition duration-75 ease-in-out active:scale-90"
    >
      <SendIcon width={24} height={24} />
    </div>
  </div>
</div>
