<script lang="ts">
  import type { Contact } from '$types/contact'
  import Avatar from '$lib/common/Avatar.svelte'
  export let connection: Pick<Contact, 'name' | 'uuid'>
</script>

<div class="flex items-center space-x-2 w-full py-2" on:click>
  <Avatar size="sm" uuid={connection.uuid} />
  <div class="flex flex-col">
    <h4 class="font-bold text-gray-900">{connection.name}</h4>
  </div>
</div>
