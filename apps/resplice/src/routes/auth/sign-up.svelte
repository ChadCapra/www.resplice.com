<script lang="ts">
  import { _ as t } from 'svelte-i18n'
  import RespliceWide from '$lib/icons/RespliceWide.svelte'
  import SignupForm from '$lib/auth/SignupForm.svelte'
</script>

<svelte:head>
  <title>{$t('auth.Verify')}</title>
</svelte:head>

<main
  class="w-full h-full p-8 flex flex-col justify-between m-auto max-w-lg overflow-auto"
>
  <header class="flex-none w-full mb-8">
    <RespliceWide width="100%" />
    <p class="text-lg font-semibold mt-4">
      {$t('auth.upload')}
    </p>
  </header>

  <SignupForm />
</main>
