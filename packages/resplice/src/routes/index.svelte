<script context="module">
  import { goto } from '$app/navigation'
  /**
   * @param {import('@sveltejs/kit).LoadOptions} options
   * @returns {import('@sveltejs/kit').Loaded}
   */
  export async function load({ page, fetch, session, context }) {
    goto('/showcase')
  }
</script>
