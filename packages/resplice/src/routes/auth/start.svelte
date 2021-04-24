<script>
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import RespliceWide from '$lib/icons/RespliceWide.svelte'
  import LoginForm from '$lib/auth/LoginForm.svelte'
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<main class="w-full h-full p-8 flex flex-col justify-between m-auto max-w-lg">
  <header class="flex-none w-full mb-8">
    <RespliceWide width="100%" />
    <p class="text-lg font-semibold mt-4">
      Welcome to the world's most up-to-date address book.
    </p>
  </header>
  <LoginForm />
</main>
