<script lang="ts">
  import authStore from '$stores/auth'
  import RespliceWide from '$lib/icons/RespliceWide.svelte'
  import VerifyForm from '$lib/auth/VerifyForm.svelte'

  $: session = $authStore?.session
</script>

<svelte:head>
  <title>Verify</title>
</svelte:head>

<main
  class="w-full h-full p-8 flex flex-col justify-between m-auto max-w-lg overflow-auto"
>
  <header class="flex-none w-full mb-8">
    <RespliceWide width="100%" />
    <p class="text-lg font-semibold mt-4">
      Verify your phone and email by entering the codes that were sent to you.
    </p>
  </header>

  {#if session}
    <VerifyForm />
  {/if}
</main>
