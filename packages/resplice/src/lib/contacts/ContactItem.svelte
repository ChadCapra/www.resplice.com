<script lang="ts">
  import type { Contact } from '$types/contact'
  import Avatar from '$lib/common/Avatar.svelte'
  export let contact: Contact
</script>

<div class="flex items-center space-x-2 w-full px-4 py-2" on:click>
  <Avatar uuid={contact.uuid} src={contact.avatar_url} />
  <div class="flex flex-col">
    {#if !!contact.alias}
      <h4 class="font-bold text-gray-900">{contact.alias}</h4>
      <p class="text-gray-700">{contact.name}</p>
    {:else}
      <h4 class="font-bold text-gray-900">{contact.name}</h4>
    {/if}
  </div>
</div>
