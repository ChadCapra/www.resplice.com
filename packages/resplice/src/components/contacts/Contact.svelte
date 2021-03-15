<script>
  import type { Contact } from '$types/index.type'
  import Avatar from '$components/common/Avatar.svelte'
  export let contact: Pick<Contact, 'name' | 'tags' | 'uuid'>
</script>

<div class="flex items-center space-x-2 w-full px-4 py-2" on:click>
  <Avatar size="sm" uuid={contact.uuid} />
  <div class="flex flex-col">
    <h4 class="font-bold text-gray-900">{contact.name}</h4>
    <p class="text-gray-700">{contact.tags.join(', ') || 'None'}</p>
  </div>
</div>
