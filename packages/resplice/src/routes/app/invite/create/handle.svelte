<script lang="ts">
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import ShareContext from '$lib/sharing/ShareContext.svelte'

  let name: string
  let handle: string
  let shares: string[] = []
  let formErrs: Record<string, string> = {}

  function onInvite(_e: Event) {
    formErrs = {}
    const errs: Record<string, string> = {}
    if (!name) errs.name = 'Please enter your full name'
    if (!handle) errs.handle = 'Please enter a Resplice Handle'
    if (Object.keys(errs).length) {
      formErrs = errs
      return
    }
    console.log(handle)
  }
</script>

<form
  class="flex-1 flex flex-col justify-between"
  on:submit|preventDefault={onInvite}
>
  <div class="flex flex-col space-y-4">
    <TextField
      name="name"
      label="Full Name"
      bind:value={name}
      Icon={PeopleIcon}
      error={formErrs.name}
    />
    <TextField
      name="handle"
      label="Enter Handle"
      bind:value={handle}
      error={formErrs.handle}
    />
  </div>

  <ShareContext bind:shares />

  <Button type="submit">Send</Button>
</form>
