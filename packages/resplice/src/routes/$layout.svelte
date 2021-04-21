<script context="module">
  // TODO: Setup i18n
  // import { waitLocale } from 'svelte-i18n'

  // /**
  //  * @type {import('@sveltejs/kit').Load}
  //  */
  // export async function load() {
  //   return await waitLocale()
  // }
</script>

<script>
  import '../global.css'
</script>

<svelte:head>
  <script>
    // Inlining in head to avoid FOUC (Flash of Unstyled Content)
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  </script>
</svelte:head>

<slot />
