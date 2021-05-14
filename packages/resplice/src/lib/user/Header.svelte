<script>
  import { fade } from 'svelte/transition'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import Avatar from '$lib/common/Avatar.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import SettingsIcon from '$lib/icons/SettingsIcon.svelte'
  import type { User } from '$types'

  export let user: User
  export let showUser = false
</script>

<nav class="flex-none flex items-center justify-between p-4">
  <div class="flex items-center">
    <IconButton Icon={BackIcon} />
    {#if showUser}
      <div
        class="flex items-center ml-4"
        transition:fade={{ delay: 50, duration: 150 }}
      >
        <Avatar uuid={user.uuid} />
        <h2 class="ml-2 font-semibold text-xl">{user.name}</h2>
      </div>
    {/if}
  </div>
  <IconButton Icon={SettingsIcon} />
</nav>
