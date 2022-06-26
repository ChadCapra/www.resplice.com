<script lang="ts" context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ params }) {
    return {
      props: {
        id: parseInt(params.id, 10)
      }
    }
  }
</script>

<script lang="ts">
  import profileStore from '$stores/profile';
  import Header from '$lib/user/Header.svelte'
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <Header profile={$profileStore} />
  <main>Invite Detail</main>
</div>