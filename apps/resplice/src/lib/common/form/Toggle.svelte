<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import cx from 'classnames'
  import { spring } from 'svelte/motion'

  const dispatch = createEventDispatcher()

  export let float: 'left' | 'right' = 'right'
  export let name: string
  export let label: string = ''
  export let isActive: boolean

  let toggleElement: HTMLInputElement

  let toggleX = spring(0, {
    damping: 0.75,
    stiffness: 0.15
  })

  $: {
    if (isActive) {
      toggleX.set(1.5)
    } else {
      toggleX.set(0)
    }
  }
</script>

<div
  class={cx('flex items-center justify-between cursor-pointer no-highlight', {
    'w-full': !!label,
    'flex-row-reverse': float === 'left'
  })}
  on:click={() => toggleElement.click()}
>
  {#if label}
    <label
      class={cx('text-gray-800 font-semibold cursor-pointer', {
        'mr-2': float === 'right',
        'ml-2': float === 'left'
      })}
      for={name}
    >
      {label}
    </label>
  {/if}

  <input
    type="checkbox"
    id={name}
    class="hidden"
    bind:this={toggleElement}
    {name}
    checked={isActive}
    on:change={() => dispatch('toggle')}
  />
  <div
    class={cx('rounded-full cursor-pointer p-1 w-12', {
      'bg-green-200': isActive,
      'bg-gray-200': !isActive
    })}
  >
    <div
      class={cx('rounded-full h-4 w-4', {
        'bg-green-600': isActive,
        'bg-gray-600': !isActive
      })}
      style="transform: translateX({$toggleX}rem)"
    />
  </div>
</div>
