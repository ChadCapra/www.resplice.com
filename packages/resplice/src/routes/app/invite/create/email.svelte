<script lang="ts">
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import MailIcon from '$lib/icons/MailIcon.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import ShareContext from '$lib/sharing/ShareContext.svelte'
  import { validateEmail } from '$lib/utils'

  let name: string
  let email: string
  let shares: string[]
  let formErrs: Record<string, string> = {}

  function onInvite(_e: Event) {
    formErrs = {}
    const errs: Record<string, string> = {}
    if (!name) errs.name = 'Please enter your full name'
    if (!validateEmail(email)) errs.email = 'Please enter a valid email address'
    if (Object.keys(errs).length) {
      formErrs = errs
      return
    }
    console.log(email)
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
      name="email"
      label="Enter Email"
      bind:value={email}
      Icon={MailIcon}
      error={formErrs.email}
    />
  </div>

  <ShareContext bind:shares />

  <Button type="submit">Send</Button>
</form>
