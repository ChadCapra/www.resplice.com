<script lang="ts">
  import Avatar from '$lib/common/Avatar.svelte'
  import { InviteType } from '$types/invite'
  import type { Invite } from '$types/user'

  export let invite: Invite

  function renderValue(invite: Invite) {
    switch (invite.type) {
      case InviteType.HANDLE:
        return invite.handle
      case InviteType.EMAIL:
        return invite.email.email
      case InviteType.PHONE:
        return invite.phone.number
      default:
        return ''
    }
  }
</script>

<div class="flex items-center space-x-2 w-full px-4 py-2" on:click>
  <Avatar id={invite.id} />
  <div class="flex flex-col">
    <h4 class="font-bold text-gray-900">{invite.name}</h4>
    <p class="text-gray-700">{renderValue(invite)}</p>
  </div>
</div>
