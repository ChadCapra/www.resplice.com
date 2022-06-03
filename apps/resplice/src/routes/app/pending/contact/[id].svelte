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
  export let id: number
</script>

<div>{id} - Pending Contact</div>
