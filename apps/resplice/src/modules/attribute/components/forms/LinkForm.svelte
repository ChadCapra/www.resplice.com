<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import FormButtons from '$lib/attributes/form/FormButtons.svelte'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let url = ''

  let formErrs: any = {}

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!url) formErrs.url = 'Please enter a valid url'

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
      name="url"
      label="Paste your link"
      bind:value={url}
      error={formErrs.url}
    />
  </div>

  <FormButtons on:save={onSave} />
</form>
