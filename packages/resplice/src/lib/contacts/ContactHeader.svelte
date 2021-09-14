<script lang="ts">
  import type { Contact } from '$types'
  import Avatar from '$lib/common/Avatar.svelte'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import EllipsisHorizontalIcon from '$lib/icons/EllipsisHorizontalIcon.svelte'

  export let contact: Contact
</script>

<div class="flex items-center justify-between p-4">
  <div class="flex items-center">
    <div class="mr-4"><BackIcon width={32} height={32} /></div>
    <Avatar uuid={contact.uuid} size="sm" />
    <p class="ml-2 text-xl font-semibold">{contact.name}</p>
  </div>
  <EllipsisHorizontalIcon width={32} height={32} />
</div>
