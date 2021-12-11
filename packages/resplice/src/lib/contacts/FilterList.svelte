<script lang="ts">
  import cx from 'classnames'
  const filters: string[] = ['Recent', 'Contacts']
  export let selectedFilter: string
</script>

<div class="flex justify-evenly w-full overflow-auto px-2 py-1 space-x-4">
  {#each filters as filter}
    <div
      class={cx(
        'flex-1 rounded-lg px-4 py-2 text-center font-semibold cursor-pointer no-highlight transform transition duration-75 ease-in-out active:scale-90',
        {
          'bg-brand-primary bg-opacity-20 text-brand-primary':
            selectedFilter === filter,
          'bg-gray-200 text-gray-700': selectedFilter !== filter
        }
      )}
      on:click={() => (selectedFilter = filter)}
    >
      {filter}
    </div>
  {/each}
</div>
