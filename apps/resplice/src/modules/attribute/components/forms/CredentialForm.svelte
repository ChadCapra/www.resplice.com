<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import PasswordField from '$lib/common/form/PasswordField.svelte'
  import FormButtons from '$lib/attributes/form/FormButtons.svelte'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let identity = ''
  export let passcode = ''

  let formErrs: any = {}

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!identity) formErrs.identity = 'An identity is required'
    if (!passcode) formErrs.passcode = 'A passcode is required'

    if (!Object.keys(formErrs).length) {
      dispatch('save')
    }
  }
</script>

<form class="flex flex-col items-center justify-between mt-4 px-2 flex-1">
  <div class="w-full flex flex-col space-y-6">
    <TextField
      name="attribute-name"
      label="Name"
      bind:value={name}
      error={formErrs.name}
    />
    <TextField
      name="identity"
      label="Identity"
      bind:value={identity}
      error={formErrs.identity}
    />
    <PasswordField
      name="passcode"
      label="Passcode"
      bind:value={passcode}
      error={formErrs.passcode}
    />
  </div>

  <FormButtons on:save={onSave} />
</form>
