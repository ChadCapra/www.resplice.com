<script>
  import type { User } from '$types'
  import Avatar from '$lib/common/Avatar.svelte'

  export let user: User
</script>

<!-- TODO: Implement Avatar upload Modal -->
<div class="w-full flex flex-col items-center p-4">
  <Avatar uuid={user.uuid} size="2xl" />
  <h1 class="text-4xl font-bold mt-2">{user.name}</h1>
</div>
