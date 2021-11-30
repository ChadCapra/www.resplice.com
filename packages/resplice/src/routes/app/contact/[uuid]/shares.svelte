<script lang="ts" context="module">
  export async function load({ page }) {
    return {
      props: {
        uuid: page.params.uuid
      }
    }
  }
</script>

<script lang="ts">
  import contactsStore from '$stores/contacts'
  import Avatar from '$lib/common/Avatar.svelte'
  import ContactAttributes from '$lib/contacts/ContactAttributes.svelte'
  import ContactHeader from '$lib/contacts/ContactHeader.svelte'
  import ContactName from '$lib/contacts/ContactName.svelte'

  export let uuid: string
  $: contact = $contactsStore ? $contactsStore[uuid] : null
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <ContactHeader contact={contact?.profile} />
  <main
    class="bg-white rounded-t-3xl flex-1 flex flex-col items-center overflow-auto p-8 space-y-4"
  >
    <div class="w-full flex flex-col items-center justify-center space-y-2">
      <Avatar {uuid} size="xl" />
      <ContactName contact={contact?.profile} />
    </div>
    <ContactAttributes contactDetail={contact?.detail} />
  </main>
</div>
