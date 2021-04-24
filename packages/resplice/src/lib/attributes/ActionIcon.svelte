<script>
  import CalendarIcon from '$lib/icons/CalendarIcon.svelte'
  import CallIcon from '$lib/icons/CallIcon.svelte'
  import ClipboardIcon from '$lib/icons/ClipboardIcon.svelte'
  import MailIcon from '$lib/icons/MailIcon.svelte'
  import LinkIcon from '$lib/icons/LinkIcon.svelte'
  import LocateIcon from '$lib/icons/LocateIcon.svelte'
  import MapIcon from '$lib/icons/MapIcon.svelte'
  import NavigateIcon from '$lib/icons/NavigateIcon.svelte'
  import ChatboxIcon from '$lib/icons/ChatboxIcon.svelte'
  export let iconName: string

  const width = 24
  const height = 24
</script>

{#if iconName === 'calendar'}
  <CalendarIcon {width} {height} />
{:else if iconName === 'call'}
  <CallIcon {width} {height} />
{:else if iconName === 'clipboard'}
  <ClipboardIcon {width} {height} />
{:else if iconName === 'mail'}
  <MailIcon {width} {height} />
{:else if iconName === 'link'}
  <LinkIcon {width} {height} />
{:else if iconName === 'locate'}
  <LocateIcon {width} {height} />
{:else if iconName === 'map'}
  <MapIcon {width} {height} />
{:else if iconName === 'navigate'}
  <NavigateIcon {width} {height} />
{:else if iconName === 'chatbox'}
  <ChatboxIcon {width} {height} />
{/if}
