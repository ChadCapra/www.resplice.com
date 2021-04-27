<script>
  import type { AttributeAction } from '$types'
  import CalendarIcon from '$lib/icons/CalendarIcon.svelte'
  import CallIcon from '$lib/icons/CallIcon.svelte'
  import ClipboardIcon from '$lib/icons/ClipboardIcon.svelte'
  import MailIcon from '$lib/icons/MailIcon.svelte'
  import LinkIcon from '$lib/icons/LinkIcon.svelte'
  import LocateIcon from '$lib/icons/LocateIcon.svelte'
  // import MapIcon from '$lib/icons/MapIcon.svelte'
  import NavigateIcon from '$lib/icons/NavigateIcon.svelte'
  import ChatboxIcon from '$lib/icons/ChatboxIcon.svelte'
  export let attributeAction: AttributeAction

  const width = 24
  const height = 24
</script>

{#if attributeAction === 'calendar'}
  <CalendarIcon {width} {height} />
{:else if attributeAction === 'call'}
  <CallIcon {width} {height} />
{:else if attributeAction === 'copy'}
  <ClipboardIcon {width} {height} />
{:else if attributeAction === 'email'}
  <MailIcon {width} {height} />
{:else if attributeAction === 'link'}
  <LinkIcon {width} {height} />
{:else if attributeAction === 'locate'}
  <LocateIcon {width} {height} />
{:else if attributeAction === 'navigate'}
  <NavigateIcon {width} {height} />
{:else if attributeAction === 'sms'}
  <ChatboxIcon {width} {height} />
{/if}
