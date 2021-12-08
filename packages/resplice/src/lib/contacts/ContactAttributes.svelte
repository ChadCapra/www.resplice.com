<script lang="ts">
  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import SkeletonList from '$lib/common/skeleton/SkeletonList.svelte'
  import type { ContactDetail } from '$types/contact'

  export let contactDetail: ContactDetail | null
</script>

{#if contactDetail}
  <div class="flex-1 flex flex-col space-y-4 w-full p-8">
    {#each contactDetail.attributes as attribute}
      <AttributeItem itemType="contact" {attribute} />
    {/each}
  </div>
{:else}
  <SkeletonList count={8} height="3em" width="100%" />
{/if}
