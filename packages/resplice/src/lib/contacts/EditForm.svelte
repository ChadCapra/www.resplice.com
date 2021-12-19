<script lang="ts">
  import useAppClient from '$lib/hooks/useAppClient'
  import Button from '$lib/common/Button.svelte'
  import TextArea from '$lib/common/form/TextArea.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import type { Contact } from '$types/contact'

  const appClient = useAppClient()

  export let contact: Contact

  let alias = contact.alias
  let description = contact.description

  function onSubmit() {
    appClient.contacts.update(contact.uuid, { alias, description })
  }
</script>

<form
  class="w-full flex flex-col space-y-4 items-center justify-between flex-1"
  on:submit|preventDefault={onSubmit}
>
  <div class="flex-1 w-full px-8 flex flex-col space-y-4">
    <p class="text-sm text-gray-600 text-center">
      This info is only visible to you.
    </p>
    <TextField name="alias" label="Nickname" bind:value={alias} />
    <TextArea name="description" label="Description" bind:value={description} />
  </div>
  <div class="flex-none flex flex-col p-8 space-y-4">
    <Button type="submit" class="w-40">Save</Button>
    <Button class="w-40" color="gray" on:click={() => window.history.back()}>
      Back
    </Button>
  </div>
</form>
