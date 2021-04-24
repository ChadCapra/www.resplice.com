<script>
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import Avatar from '$lib/common/Avatar.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import SettingsIcon from '$lib/common/icons/IconButton.svelte'
  import type { User } from '$types'

  export let user: User
</script>

<nav class="flex items-center justify-between">
  <div class="flex items-center">
    <BackIcon />
    <div class="flex items-center">
      <Avatar uuid={user.uuid} />
      <p>{user.name}</p>
    </div>
  </div>
  <IconButton Icon={SettingsIcon} />

</nav>
