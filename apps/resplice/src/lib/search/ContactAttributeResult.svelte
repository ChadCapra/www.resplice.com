<script lang="ts">
  import Avatar from '$lib/common/Avatar.svelte'
  import AttributeValue from '$lib/attributes/AttributeValue.svelte'
  import type { Contact, Attribute } from '$types/contact'

  export let attribute: Attribute
  export let contact: Contact
</script>

<div class="flex items-center space-x-2 w-full px-4 py-2" on:click>
  <Avatar id={contact.id} src={contact.avatarUrl} />
  <div class="flex flex-col">
    {#if !!contact.alias}
      <h4 class="font-bold text-gray-900">{contact.alias}</h4>
      <p class="text-gray-700">{contact.name}</p>
    {:else}
      <h4 class="font-bold text-gray-900">{contact.name}</h4>
    {/if}
    <div class="mt-1">
      <AttributeValue {attribute} />
    </div>
  </div>
</div>
