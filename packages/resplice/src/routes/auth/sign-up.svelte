<script>
  import RespliceWide from '$lib/icons/RespliceWide.svelte'
  import SignupForm from '$lib/auth/SignupForm.svelte'
  import type { Contact } from '$types'

  // TODO: Replace with cache/network call
  import contacts from '../../mocks/contacts'

  let pendingConnectionsAsync: Promise<Pick<Contact, 'name' | 'uuid'>[]> =
    Promise.resolve(contacts)
</script>

<svelte:head>
  <title>Verify</title>
</svelte:head>

<main
  class="w-full h-full p-8 flex flex-col justify-between m-auto max-w-lg overflow-auto"
>
  <header class="flex-none w-full mb-8">
    <RespliceWide width="100%" />
  </header>

  <SignupForm {pendingConnectionsAsync} />
</main>
