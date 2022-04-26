<script lang="ts">
  import { goto } from '$app/navigation'

  import useAppClient from '$lib/hooks/useAppClient'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import MailIcon from '$lib/icons/MailIcon.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import ShareContext from '$lib/sharing/ShareContext.svelte'
  import { validateEmail } from '$lib/utils'

  const client = useAppClient()

  let name: string
  let email: string
  let shares: Set<number>
  let formErrs: Record<string, string> = {}

  function onInvite(_e: Event) {
    formErrs = {}
    const errs: Record<string, string> = {}
    if (!name) errs.name = 'Please enter your full name'
    if (!validateEmail(email)) errs.email = 'Please enter a valid email address'
    if (!shares.size)
      errs.shares = 'Please share at least one attribute before inviting'
    if (Object.keys(errs).length) {
      formErrs = errs
      return
    }
    client.invites.inviteViaEmail(name, { email }, [...shares])
    // TODO: Dispatch Toast
    goto('/app/list/contacts', { replaceState: true })
  }
</script>

<form
  class="flex-1 flex flex-col justify-between items-center space-y-8"
  on:submit|preventDefault={onInvite}
>
  <div class="flex flex-col space-y-4 w-full">
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
  {#if formErrs.shares}
    <p class="text-sm text-red-600 h-4 my-1 mx-2">{formErrs.shares}</p>
  {/if}

  <Button class="w-48" type="submit">Send</Button>
</form>
