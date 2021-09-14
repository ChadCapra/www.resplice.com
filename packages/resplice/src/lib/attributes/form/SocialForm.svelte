<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import FormButtons from '$lib/attributes/form/FormButtons.svelte'

  const dispatch = createEventDispatcher()

  export let name = ''
  export let handle = ''

  let formErrs: any = {}

  function onSave() {
    formErrs = {}
    if (!name) formErrs.name = 'A name is required'
    if (!handle) formErrs.handle = 'Please enter a social handle'

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
      name="handle"
      label="Social Handle"
      bind:value={handle}
      error={formErrs.handle}
    />

    {#each Object.values(formErrs) as err}
      <p class="text-red-600 h-6 w-full" style={'margin-top: 0.25rem'}>
        {err}
      </p>
    {/each}
  </div>

  <FormButtons on:save={onSave} />
</form>
