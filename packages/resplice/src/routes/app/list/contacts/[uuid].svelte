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
  import ContactHeader from '$lib/contacts/ContactHeader.svelte'
  import ContactAttributes from '$lib/contacts/ContactAttributes.svelte'
  import contactsStore from '$stores/contacts'

  export let uuid: string

  $: contact = $contactsStore[uuid]
</script>

<svelte:head>
  <title>{contact.profile.name || 'Contact'}</title>
</svelte:head>

<main class="h-full w-full overflow-auto flex flex-col bg-gray-100">
  <div class="flex-none w-full">
    <ContactHeader contact={contact.profile} />
  </div>
  <div class="bg-white rounded-t-3xl flex-1">
    <ContactAttributes contactDetail={contact.detail} />
  </div>
</main>
