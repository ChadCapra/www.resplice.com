<script>
  import { createEventDispatcher } from 'svelte'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import { capitalize } from '$lib/utils'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let address1 = ''
  export let address2 = ''
  export let city = ''
  export let state = ''
  export let postalCode = ''
  export let country = ''

  let formErrs: any = {}
  let errorString = ''

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!address1) formErrs.address1 = 'Please enter a valid address'

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
    name="address1"
    label="Address 1"
    bind:value={address1}
    error={formErrs.address1}
  />
  <TextField
    name="address2"
    label="Address 2"
    bind:value={address2}
    error={formErrs.address1}
  />
  <TextField name="city" label="City" bind:value={city} error={formErrs.city} />
  <div class="w-full flex justify-between space-x-4">
    <TextField
      name="state"
      label="State"
      bind:value={state}
      error={formErrs.state}
    />
    <TextField
      name="postal-code"
      label="Postal Code"
      bind:value={postalCode}
      error={formErrs.postalCode}
    />
  </div>
  <TextField
    name="country"
    label="Country"
    bind:value={country}
    error={formErrs.country}
  />
  <p class="text-red-600 h-6 w-full" style={'margin-top: 0.25rem'}>
    {errorString}
  </p>
  <Button on:click={onSave}>Save</Button>
</form>
