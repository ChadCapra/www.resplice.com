<script context="module">
  export async function load({ page }) {
    return {
      props: {
        uuid: page.params.uuid
      }
    }
  }
</script>

<script>
  import { onMount } from 'svelte'
  import type { ContactDetail } from '$types/index.type'
  import ContactHeader from '$components/contacts/ContactHeader.svelte'
  import ContactAttributes from '$components/contacts/ContactAttributes.svelte'
  import ContactChat from '$components/contacts/ContactChat.svelte'
  import MessageField from '$components/common/MessageField.svelte'

  export let uuid: string
  let contactAsync: Promise<ContactDetail> = Promise.resolve(
    {} as ContactDetail
  )

  async function fetchContact(): Promise<ContactDetail> {
    const res = await fetch(`https://api.resplice.com/contacts/${uuid}`)
    return await res.json()
  }

  onMount(() => {
    contactAsync = fetchContact()
  })
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<main class="h-full w-full overflow-auto flex flex-col bg-gray-100">
  {#await contactAsync}
    Loading...
  {:then contact}
    <div class="flex-none w-full"><ContactHeader {contact} /></div>
    <div class="bg-white rounded-t-3xl flex-1 flex flex-col">
      <div class="flex-none p-4"><ContactAttributes /></div>
      <div class="flex-1"><ContactChat messages={contact.messages} /></div>
      <div class="flex-none p-4"><MessageField /></div>
    </div>
  {/await}
</main>
