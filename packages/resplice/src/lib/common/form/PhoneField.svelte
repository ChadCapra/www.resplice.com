<script>
  import cx from 'classnames'
  import { AsYouType } from 'libphonenumber-js'

  export let name: string
  export let label: string
  export let value: string
  export let error: string = ''
  // TODO: Figure out how to type svelte component prop
  export let Icon: any = null
  let isTouched = !!value

  type InputEvent = Event & {
    currentTarget: EventTarget & HTMLInputElement
  }
  function onPhoneChange(e: InputEvent) {
    const phone = e.currentTarget.value
    console.log(phone)
    value = new AsYouType('US').input(phone)
    // if (/^[a-zA-Z]/.test(phone)) {
    //   // TODO: Figure out how to rerender here
    //   // Setting value to empty string doesn't rerender component
    //   // which allows letters in the phone input
    //   value = ''
    // } else {

    // }
  }
</script>

<div class="w-full">
  <div
    class="relative rounded-2xl w-full text-left h-14 flex items-center"
    class:ring-2={error}
    class:ring-red-600={error}
  >
    {#if Icon}
      <div class="ml-4 text-gray-700">
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
      class="appearance-none absolute top-0 left-0 w-full h-14 bg-transparent outline-none border-none rounded-2xl px-6 pt-5 font-semibold text-lg text-gray-900 ring-2 focus:ring-gray-800"
      class:pl-16={!!Icon}
      class:ring-gray-600={!error}
      class:ring-red-600={!!error}
      {name}
      {value}
      on:input|preventDefault={onPhoneChange}
      on:focus={() => (isTouched = true)}
      on:blur={() => (!!value ? (isTouched = true) : (isTouched = false))}
    />
  </div>
  <!-- <p class="text-sm text-red-600 h-4 ml-5">
    {#if error}
      {error}
    {/if}
  </p> -->
</div>

<style>
  label {
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }
</style>
