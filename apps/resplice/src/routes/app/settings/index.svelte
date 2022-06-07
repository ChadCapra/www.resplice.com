<script lang="ts">
  import Toggle from '$lib/common/form/Toggle.svelte'
  import IconButton from '$lib/common/IconButton.svelte'
  import BackIcon from '$lib/icons/BackIcon.svelte'
  import SettingsItem from '$lib/settings/Item.svelte'
  import SettingsToggle from '$lib/settings/Toggle.svelte'

  let darkMode = false
  let appNotifications = true
</script>

<div class="flex flex-col w-full h-full bg-gray-100">
  <nav class="flex-none flex items-center justify-start p-4">
    <IconButton Icon={BackIcon} on:click={() => window.history.back()} />
    <h1 class="ml-4 font-semibold text-xl">Settings</h1>
  </nav>
  <main
    class="bg-white rounded-t-3xl flex-1 flex flex-col p-8 overflow-auto space-y-8"
  >
    <section class="border-b-2 border-gray-200 pb-4">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">General</h2>
      <div class="flex flex-col space-y-4">
        <SettingsToggle>
          <Toggle
            name="darkMode"
            float="right"
            label="Dark Mode"
            isActive={darkMode}
            on:toggle={() => (darkMode = !darkMode)}
          />
        </SettingsToggle>
        <SettingsToggle>
          <Toggle
            name="appNotifications"
            float="right"
            label="App Notifications"
            isActive={appNotifications}
            on:toggle={() => (appNotifications = !appNotifications)}
          />
        </SettingsToggle>
        <SettingsItem linkTo="/app/settings/invites">
          Active Invites
        </SettingsItem>
        <SettingsItem linkTo="/app/settings/archived">
          Archived Contacts
        </SettingsItem>
      </div>
    </section>
    <section class="border-b-2 border-gray-200 pb-4">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">About</h2>
      <div class="flex flex-col space-y-4">
        <SettingsItem url="https://www.replice.com/about">
          About Resplice
        </SettingsItem>
        <SettingsItem url="https://www.replice.com/terms">
          Terms & Conditions
        </SettingsItem>
        <SettingsItem url="https://www.resplice.com/help">Help</SettingsItem>
      </div>
    </section>
    <section class="border-b-2 border-gray-200 pb-4">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">
        Privacy & Security
      </h2>
      <div class="flex flex-col space-y-4">
        <SettingsItem linkTo="/app/settings/download">
          Download Your Data
        </SettingsItem>
        <SettingsItem linkTo="/app/settings/sessions">
          View Sessions
        </SettingsItem>
        <SettingsItem linkTo="/app/settings/logout">Logout</SettingsItem>
      </div>
    </section>
  </main>
</div>
