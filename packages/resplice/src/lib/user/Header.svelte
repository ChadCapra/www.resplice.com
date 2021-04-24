<script>
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import Avatar from '$lib/common/Avatar.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import SettingsIcon from '$lib/icons/SettingsIcon.svelte'
  import type { User } from '$types'

  export let user: User
</script>

<nav class="flex items-center justify-between p-4">
  <div class="flex items-center">
    <IconButton Icon={BackIcon} />
    <!-- TODO: Animate (Fade) in on user page scroll & Ellipsis the text on overflow -->
    <div class="flex items-center ml-4">
      <Avatar uuid={user.uuid} />
      <h2 class="ml-2 font-semibold text-xl">{user.name}</h2>
    </div>
  </div>
  <IconButton Icon={SettingsIcon} />
</nav>
