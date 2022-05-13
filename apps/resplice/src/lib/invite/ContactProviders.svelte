<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  // import AppleIcon from '$lib/icons/AppleIcon.svelte'
  import GoogleIcon from '$lib/icons/GoogleIcon.svelte'
  import { getGoogleContacts } from '$lib/invite/providers'

  const dispatch = createEventDispatcher()

  async function importGoogleContacts() {
    const contacts = await getGoogleContacts()
    console.log(contacts)
    dispatch('import', contacts)
  }
</script>

<div class="flex flex-col my-8 space-y-4">
  <button
    class="w-full flex space-x-4 rounded-full border-2 border-gray-700 px-8 py-4 duration-75 ease-in-out active:scale-95 focus:ring-4 focus:ring-green-200 focus:outline-none"
    on:click={importGoogleContacts}
  >
    <GoogleIcon width={24} height={24} />
    <p>Import from Google</p>
  </button>
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
