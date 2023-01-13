<script lang="ts">
  import { goto } from '$app/navigation'

  import ContactItem from '$lib/contacts/ContactItem.svelte'
  import contactStore from '$stores/contacts'
  const contacts = contactStore.contacts

  export let results: number[] = []
</script>

{#each results as id}
  <ContactItem
    contact={$contacts.get(id)}
    on:click={() => goto(`/app/contact/${id}/attributes`)}
  />
{/each}
