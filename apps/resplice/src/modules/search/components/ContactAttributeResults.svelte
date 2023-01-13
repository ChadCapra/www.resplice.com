<script lang="ts">
  import { goto } from '$app/navigation'

  import ContactAttributeResult from '$lib/search/ContactAttributeResult.svelte'
  import contactStore from '$stores/contacts'
  const contacts = contactStore.contacts
  const attributes = contactStore.contactAttributes

  export let results: number[] = []
</script>

{#each results as id}
  <ContactAttributeResult
    attribute={$attributes.get(id)}
    contact={$contacts.get($attributes.get(id).contactId)}
    on:click={() =>
      goto(`/app/contact/${$attributes.get(id).contactId}/attributes`)}
  />
{/each}
