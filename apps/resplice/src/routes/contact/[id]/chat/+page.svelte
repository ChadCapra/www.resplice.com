<script lang="ts" context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ params }) {
    return {
      props: {
        id: parseInt(params.id, 10)
      }
    }
  }
</script>

<script lang="ts">
  import contactStores from '$stores/contacts'
  import ContactChat from '$lib/contacts/Chat.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import AddIcon from '$lib/icons/AddIcon.svelte'
  import ChatField from '$lib/chat/ChatField.svelte'
  import ComingSoon from '$lib/common/ComingSoon.svelte'

  export let id: number
  const contactStore = contactStores.contacts
  $: contact = $contactStore ? $contactStore.get(id) : null
  const enableChat = false

  function onSend(e: CustomEvent<{ content: string }>) {
    console.log(e.detail.content)
  }
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <nav class="flex-none flex items-center justify-start p-4">
    <IconButton Icon={BackIcon} />
    <h1 class="ml-4 font-semibold text-xl">{contact.name}</h1>
  </nav>
  <main class="bg-white rounded-t-3xl flex-1 flex flex-col overflow-auto">
    {#if enableChat}
      <ContactChat {contact} />
    {:else}
      <ComingSoon title="Chat" />
    {/if}
  </main>
  <section
    class="flex-none flex justify-between items-end bg-white p-2 border-t-2 border-gray-200"
  >
    <div class="flex-none bg-brand-primary text-white rounded-full p-3 m-2">
      <AddIcon width={24} height={24} />
    </div>
    <ChatField label="Enter Message" on:send={onSend} />
  </section>
</div>
