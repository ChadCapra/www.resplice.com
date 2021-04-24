<script>
  import Header from '$lib/user/Header.svelte'
  // TODO: Remove after msw requst
  import user from '../../mocks/user'
</script>

<main>
  <Header {user} />
</main>
