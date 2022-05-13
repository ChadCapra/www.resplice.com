<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import FormButtons from '$lib/attributes/form/FormButtons.svelte'
  import { validateEmail } from '@resplice/utils'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let email = ''

  let formErrs: any = {}

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!validateEmail(email))
      formErrs.email = 'Please enter a valid email address'

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
      name="email"
      label="Email"
      autoComplete="email"
      bind:value={email}
      error={formErrs.email}
    />
  </div>

  <FormButtons on:save={onSave} />
</form>
