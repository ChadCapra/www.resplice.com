<script lang="ts">
  import cx from 'classnames'
  export let name: string
  export let label: string
  export let value: string
  // TODO: Figure out how to type svelte component prop
  export let Icon: any = null
  let isTouched = !!value
</script>

<div
  class="relative bg-gray-200 rounded-full w-full text-left my-1 h-14 flex items-center"
>
  {#if Icon}
    <div class="ml-4">
      <svelte:component this={Icon} width={32} height={32} />
    </div>
  {/if}
  <label
    for={name}
    class={cx('text-gray-700 font-semibold absolute left-6 transform', {
      'top-1 scale-90': isTouched,
      'top-4': !isTouched,
      'left-16': !!Icon
    })}
  >
    {label}
  </label>
  <input
    type="text"
    class="appearance-none absolute top-0 left-0 w-full h-14 bg-transparent outline-none border-none rounded-full px-6 pt-5 font-semibold text-lg text-gray-900 focus:ring-2 focus:ring-gray-600"
    class:pl-16={!!Icon}
    {name}
    bind:value
    on:focus={() => (isTouched = true)}
    on:blur={() => (!!value ? (isTouched = true) : (isTouched = false))}
  />
</div>

<style>
  label {
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }
</style>
