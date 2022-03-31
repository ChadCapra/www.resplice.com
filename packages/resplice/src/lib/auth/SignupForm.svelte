<script lang="ts">
  import useAuthClient from '$lib/auth/useAuthClient'
  import UserAvatar from '$lib/user/UserAvatar.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import Button from '$lib/common/Button.svelte'
  import authStore from '$lib/auth/store'
  import Link from '$lib/common/Link.svelte'

  const client = useAuthClient()

  const RAND_UUID = Math.random().toString(36)

  let fullName = ''
  let avatar: Blob | null = null
  let formErrs: Record<string, string> = {}
  let networkErr: Error
  let isLoading = false

  type SubmitEvent = Event & {
    currentTarget: EventTarget & HTMLFormElement
  }
  async function onSubmit(_e: SubmitEvent) {
    const isValid = validate()
    if (!isValid) return

    isLoading = true

    createAccount()
  }

  async function createAccount() {
    try {
      isLoading = true
      const user = await client.createAccount({
        name: fullName,
        avatar,
        handle: ''
      })
      authStore.update((auth) => ({
        ...auth,
        session: { ...auth.session, user_uuid: user.uuid }
      }))
    } catch (err) {
      networkErr = err
      isLoading = false
    }
  }

  function validate(): boolean {
    formErrs = {}
    const errs: Record<string, string> = {}
    if (!fullName) errs.fullName = 'Full name is required'
    if (Object.keys(errs).length) {
      formErrs = errs
      return false
    }
    return true
  }
</script>

<div class="flex-1 space-y-6 flex flex-col justify-between overflow-auto">
  <div>
    <UserAvatar
      profile={{
        uuid: RAND_UUID,
        avatar: avatar ? URL.createObjectURL(avatar) : null
      }}
      on:crop={(e) => (avatar = e.detail)}
    />
    <form class="mt-8 px-2" on:submit|preventDefault={onSubmit}>
      <TextField
        name="full-name"
        label="Full Name"
        autoComplete="name"
        bind:value={fullName}
        Icon={PeopleIcon}
        error={formErrs.fullName}
      />
    </form>
  </div>

  <div class="flex-none flex flex-col items-center p-2">
    <Link class="mb-4" href="/auth/verify-existing">
      I already have an account
    </Link>
    <Button type="submit" {isLoading}>Continue</Button>
    {#if networkErr}
      <p>{networkErr.message}</p>
    {/if}
  </div>
</div>
