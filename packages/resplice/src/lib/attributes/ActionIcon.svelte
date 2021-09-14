<script lang="ts">
  import { AttributeAction } from '$types'
  import CalendarIcon from '$lib/icons/CalendarIcon.svelte'
  import CallIcon from '$lib/icons/CallIcon.svelte'
  import ClipboardIcon from '$lib/icons/ClipboardIcon.svelte'
  import MailIcon from '$lib/icons/MailIcon.svelte'
  import LinkIcon from '$lib/icons/LinkIcon.svelte'
  import LocateIcon from '$lib/icons/LocateIcon.svelte'
  import NavigateIcon from '$lib/icons/NavigateIcon.svelte'
  import ChatboxIcon from '$lib/icons/ChatboxIcon.svelte'
  export let attributeAction: AttributeAction

  const width = 24
  const height = 24
</script>

{#if attributeAction === AttributeAction.Calendar}
  <CalendarIcon {width} {height} />
{:else if attributeAction === AttributeAction.Call}
  <CallIcon {width} {height} />
{:else if attributeAction === AttributeAction.Copy}
  <ClipboardIcon {width} {height} />
{:else if attributeAction === AttributeAction.Email}
  <MailIcon {width} {height} />
{:else if attributeAction === AttributeAction.Link}
  <LinkIcon {width} {height} />
{:else if attributeAction === AttributeAction.Locate}
  <LocateIcon {width} {height} />
{:else if attributeAction === AttributeAction.Navigate}
  <NavigateIcon {width} {height} />
{:else if attributeAction === AttributeAction.Sms}
  <ChatboxIcon {width} {height} />
{/if}
