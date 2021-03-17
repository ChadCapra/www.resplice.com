<script>
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import RespliceWide from '$lib/icons/RespliceWide.svelte'

  let attribute = ''
</script>

<main
  class="w-full h-full p-8 flex flex-col justify-between items-center m-auto max-w-lg"
>
  <header>
    <RespliceWide width="100%" />
    <p class="text-lg font-semibold mt-4">
      Welcome to the world's most up-to-date address book.
    </p>
  </header>

  <TextField name="attribute" label="Phone or Email" value={attribute} />
  <div class="w-40 flex flex-col"><Button>Continue</Button></div>
</main>
