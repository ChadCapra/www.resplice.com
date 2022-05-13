<script lang="ts">
  import IconButton from '$lib/common/IconButton.svelte'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import ContactProviders from '$lib/invite/ContactProviders.svelte'
  import type { ProviderContact } from '$lib/invite/providers'

  let contacts: ProviderContact[]

  function onImport(e: CustomEvent<ProviderContact[]>) {
    contacts = e.detail
  }
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <nav class="flex-none flex items-center justify-start p-4">
    <IconButton Icon={BackIcon} on:click={() => window.history.back()} />
  </nav>
  {#if !!contacts}
    <main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto">
      Contact list
    </main>
  {:else}
    <main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto">
      <h1 class="text-2xl font-semibold mb-8">Import Contacts</h1>
      <p>Choose where you would like to import contacts from:</p>
      <ContactProviders on:import={onImport} />
    </main>
  {/if}
</div>
