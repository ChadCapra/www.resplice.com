<script>
  import type { Attribute } from '$types'
  import ChatBubblesIcon from '$components/icons/ChatBubblesIcon.svelte'
  import Modal from '$components/common/Modal.svelte'
  export let attribute: Attribute
  let showContextModal = false
</script>

<div class="flex justify-between items-center w-full">
  <div class="flex items-center flex-1 overflow-hidden">
    <button
      class="outline-none border-none p-3 bg-brand-primary bg-opacity-20 text-brand-primary rounded-lg focus:outline-none transform transition duration-75 ease-in-out active:scale-90"
      on:click={() => console.log('action 2')}
    >
      <ChatBubblesIcon width={24} height={24} />
    </button>
    <div
      class="flex flex-col mx-4 flex-1 overflow-hidden no-highlight"
      role="button"
      on:click={() => (showContextModal = true)}
    >
      <span
        class="font-semibold text-gray-800 overflow-hidden overflow-ellipsis"
      >
        {attribute.name}
      </span>
      <!-- TODO: Format attributes values based on type -->
      <span class="overflow-hidden overflow-ellipsis">{attribute.value}</span>
    </div>
  </div>
  <button
    class="outline-none border-none p-3 bg-brand-primary bg-opacity-20 text-brand-primary rounded-lg focus:outline-none transform transition duration-75 ease-in-out active:scale-90"
    on:click={() => console.log('action 2')}
  >
    <ChatBubblesIcon width={24} height={24} />
  </button>
</div>

{#if showContextModal}
  <Modal on:close={() => (showContextModal = false)}>
    <div class="w-full p-4">
      <div class="flex flex-col overflow-hidden">
        <span
          class="font-semibold text-gray-800 overflow-hidden overflow-ellipsis text-lg"
        >
          {attribute.name}
        </span>
        <!-- TODO: Format attributes values based on type -->
        <span class="overflow-hidden overflow-ellipsis">{attribute.value}</span>
      </div>
    </div>
  </Modal>
{/if}
