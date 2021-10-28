<script lang="ts">
  import useRespliceClient from '$lib/hooks/respliceClient'
  import UserAvatar from '$lib/user/UserAvatar.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import Button from '$lib/common/Button.svelte'
  import authStore from '$stores/auth'

  const client = useRespliceClient()

  const RAND_UUID = Math.random().toString(36)

  let fullName = ''
  let avatar: Blob | null = null
  let formErrs: Record<string, string> = {}
  let isLoading = false

  async function createUser() {
    formErrs = {}
    const errs: Record<string, string> = {}
    if (!fullName) errs.fullName = 'Full name is required'
    if (Object.keys(errs).length) {
      formErrs = errs
      return
    }
    try {
      isLoading = true
      const user = await client.user.create({ name: fullName, avatar })
      authStore.update((auth) => ({
        ...auth,
        session: { ...auth.session, user_uuid: user.uuid }
      }))
    } catch (err) {
      console.log(err)
      isLoading = false
    }
  }
</script>

<div class="flex-1 space-y-6 flex flex-col justify-between overflow-scroll">
  <div>
    <UserAvatar
      user={{
        uuid: RAND_UUID,
        avatar: avatar ? URL.createObjectURL(avatar) : null
      }}
      on:crop={(e) => (avatar = e.detail)}
    />
    <div class="mt-8 px-2">
      <TextField
        name="full-name"
        label="Full Name"
        bind:value={fullName}
        Icon={PeopleIcon}
        error={formErrs.fullName}
      />
    </div>
  </div>

  <div class="flex-none flex flex-col items-center p-2">
    <a class="text-brand-primary underline mb-2" href="/auth/verify-existing">
      I already have an account
    </a>
    <Button color="brand" {isLoading} on:click={createUser}>Continue</Button>
  </div>
</div>
