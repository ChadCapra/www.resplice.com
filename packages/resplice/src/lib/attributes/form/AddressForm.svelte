<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import FormButtons from '$lib/attributes/form/FormButtons.svelte'
  import CountrySelect from '$lib/common/form/CountrySelect.svelte'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let address1 = ''
  export let address2 = ''
  export let locality = ''
  export let region = ''
  export let postalCode = ''
  export let country = 'US'

  let formErrs: any = {}

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!address1) formErrs.address1 = 'Please enter a valid address'

    if (!Object.keys(formErrs).length) {
      dispatch('save')
    }
  }
</script>

<form class="flex flex-col items-center justify-between my-4 px-2 flex-1">
  <div class="w-full flex flex-col space-y-6 mb-4">
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
      error={formErrs.address2}
    />
    <TextField
      name="locality"
      label="City"
      bind:value={locality}
      error={formErrs.locality}
    />
    <div class="w-full flex justify-between space-x-4">
      <TextField
        name="region"
        label="State"
        bind:value={region}
        error={formErrs.region}
      />
      <TextField
        name="postal-code"
        label="Postal Code"
        bind:value={postalCode}
        error={formErrs.postalCode}
      />
    </div>
    <CountrySelect
      name="country"
      label="Country"
      bind:value={country}
      error={formErrs.country}
    />
  </div>

  <FormButtons on:save={onSave} />
</form>
