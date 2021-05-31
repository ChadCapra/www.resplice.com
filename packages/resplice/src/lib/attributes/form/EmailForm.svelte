<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let email = ''

  let formErrs: any = {}

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!email) formErrs.email = 'Please enter a valid email address'
    // TODO: Validate for valid email

    if (!Object.keys(formErrs).length) {
      dispatch('save')
    }
  }
</script>

<form class="flex flex-col items-center justify-between my-4 px-2 flex-1">
  <div class="w-full flex flex-col space-y-6">
    <TextField
      name="attribute-name"
      label="Name"
      bind:value={name}
      error={formErrs.name}
    />
    <TextField
      name="email"
      label="Email"
      bind:value={email}
      error={formErrs.email}
    />

    {#each Object.values(formErrs) as err}
      <p class="text-red-600 h-6 w-full" style={'margin-top: 0.25rem'}>
        {err}
      </p>
    {/each}
  </div>

  <div class="flex flex-col space-y-4">
    <Button color="danger-light" on:click={() => window.history.back()}>
      Cancel
    </Button>
    <Button on:click={onSave}>Save</Button>
  </div>
</form>
