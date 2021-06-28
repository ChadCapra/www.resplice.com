<script>
  import type { Contact } from '$types'
  import UserAvatar from '$lib/user/UserAvatar.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import PendingConnections from '$lib/auth/PendingConnections.svelte'
  import Button from '$lib/common/Button.svelte'

  export let pendingConnectionsAsync: Promise<Pick<Contact, 'name' | 'uuid'>[]>
  let fullName = ''
  let formErrs: Record<string, string> = {}

  async function createUser() {
    formErrs = {}
    const errs: Record<string, string> = {}
    if (!fullName) errs.fullName = 'Full name is required'
    if (Object.keys(errs).length) {
      formErrs = errs
      return
    }
    console.log(fullName)
  }
</script>

<div class="flex-1 space-y-6 flex flex-col overflow-scroll">
  <UserAvatar user={{ uuid: '', avatar: null }} />
  <div class="px-2">
    <TextField
      name="full-name"
      label="Full Name"
      bind:value={fullName}
      Icon={PeopleIcon}
      error={formErrs.fullName}
    />
  </div>

  <PendingConnections {pendingConnectionsAsync} />

  <div class="flex-none flex flex-col items-center p-2">
    <a class="text-brand-primary underline mb-2" href="/auth/verify-existing">
      I already have an account
    </a>
    <Button color="brand" on:click={createUser}>Continue</Button>
  </div>
</div>
