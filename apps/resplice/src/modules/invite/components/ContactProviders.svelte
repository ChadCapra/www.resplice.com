<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { isSupported } from '@resplice/utils'
  import { getGoogleContacts } from '$lib/invite/providers'
  // import AppleIcon from '$lib/icons/AppleIcon.svelte'
  import GoogleIcon from '$lib/icons/GoogleIcon.svelte'
  import PhonePortraitIcon from '$lib/icons/PhonePortraitIcon.svelte'
  import ProviderButton from '$lib/invite/ProviderButton.svelte'
  import ServerIcon from '$lib/icons/ServerIcon.svelte'
  import Modal from '$lib/common/Modal.svelte'

  const dispatch = createEventDispatcher()

  const [isContactPickerSupported] = isSupported([
    'contacts',
    'ContactsManager'
  ])

  let showCsvModal = false

  async function importGoogleContacts() {
    const contacts = await getGoogleContacts()
    console.log(contacts)
    dispatch('import', contacts)
  }
</script>

<div class="flex flex-col my-8 space-y-4">
  <ProviderButton on:click={importGoogleContacts}>
    <GoogleIcon width={24} height={24} />
    <p>Import from Google</p>
  </ProviderButton>
  {#if isContactPickerSupported}
    <ProviderButton>
      <PhonePortraitIcon width={24} height={24} />
      <p>Import from contacts</p>
    </ProviderButton>
  {/if}
  <ProviderButton on:click={() => (showCsvModal = true)}>
    <ServerIcon width={24} height={24} />
    <p>Import from CSV</p>
  </ProviderButton>

  <!-- <button
    class="w-full flex space-x-4 rounded-full border-2 border-gray-700 px-8 py-4 duration-75 ease-in-out active:scale-95 focus:ring-4 focus:ring-green-200 focus:outline-none"
  >
    <AppleIcon width={24} height={24} />
    <p>Import from Apple</p>
  </button> -->
</div>
<div>
  <p class="text-sm text-gray-600">Contact provider not shown?</p>
  <p class="text-sm text-gray-600">
    Invite someone via
    <a
      class="underline underline-offset-4 decoration-brand-primary decoration-2"
      href="/app/invite/create/phone"
    >
      phone
    </a>
    or
    <a
      class="underline underline-offset-4 decoration-brand-primary decoration-2"
      href="/app/invite/create/email"
    >
      email
    </a>
  </p>
</div>

{#if showCsvModal}
  <Modal on:close={() => (showCsvModal = false)} let:close>
    <h4>Import contacts with CSV</h4>

    <p>
      Please make sure to upload a csv that is comma delimited and the first row
      contains headers
    </p>
    <p>
      Please include a <code>name</code> header and a <code>phone</code> or
      <code>email</code> header
    </p>
  </Modal>
{/if}
