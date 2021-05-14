<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import { capitalize } from '$lib/utils'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let email = ''

  let formErrs: any = {}
  let errorString = ''

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!email) formErrs.email = 'Please enter a valid email address'

    if (!Object.keys(formErrs).length) {
      dispatch('save')
    }
  }

  $: {
    const keys = Object.keys(formErrs)
    if (keys.length) {
      errorString =
        keys.map((k) => capitalize(k)).join(', ') + ' are missing or invalid.'
    } else {
      errorString = ''
    }
  }
</script>

<form class="flex flex-col items-center my-4 space-y-6">
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
  <p class="text-red-600 h-6 w-full" style={'margin-top: 0.25rem'}>
    {errorString}
  </p>
  <Button on:click={onSave}>Save</Button>
</form>
