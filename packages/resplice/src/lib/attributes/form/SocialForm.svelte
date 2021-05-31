<script>
  import { createEventDispatcher } from 'svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import Button from '$lib/common/Button.svelte'
  import { capitalize } from '$lib/utils'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let handle = ''

  let formErrs: any = {}
  let errorString = ''

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!handle) formErrs.handle = 'Please enter a social handle'

    if (!Object.keys(formErrs).length) {
      dispatch('save')
    }
  }

  $: {
    const keys = Object.keys(formErrs)
    // TODO: Get better error messaging
    if (keys.length) {
      errorString =
        keys.map((k) => capitalize(k)).join(' and ') +
        ' are missing or invalid.'
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
    name="handle"
    label="Social Handle"
    bind:value={handle}
    error={formErrs.handle}
  />
  <p class="text-red-600 h-6 w-full" style={'margin-top: 0.25rem'}>
    {errorString}
  </p>

  <Button color="danger-light" on:click={() => window.history.back()}>
    Cancel
  </Button>
  <Button on:click={onSave}>Save</Button>
</form>
