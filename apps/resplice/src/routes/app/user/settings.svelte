<script lang="ts">
  import Toggle from '$lib/common/form/Toggle.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import BackIcon from '$lib/icons/BackIcon.svelte'

  let appNotifications = true
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <nav class="flex-none flex items-center justify-start p-4">
    <IconButton Icon={BackIcon} on:click={() => window.history.back()} />
    <h1 class="ml-4 font-semibold text-xl">Settings</h1>
  </nav>
  <main class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto">
    <section class="border-b-2 border-gray-200 pb-4">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">General</h2>
      <div>
        <Toggle
          name="appNotifications"
          float="right"
          label="App Notifications"
          isActive={appNotifications}
          on:toggle={() => (appNotifications = !appNotifications)}
        />
      </div>
    </section>
    <section class="border-b-2 border-gray-200 pb-4">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">Resplice</h2>
      <div>
        <Toggle
          name="appNotifications"
          float="right"
          label="App Notifications"
          isActive={appNotifications}
          on:toggle={() => (appNotifications = !appNotifications)}
        />
      </div>
    </section>
  </main>
</div>
