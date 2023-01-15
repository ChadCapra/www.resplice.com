<script lang="ts">
	import type { Contact } from '$modules/user/user.types'
	import Avatar from '@resplice/components/Avatar.svelte'
	export let contact: Pick<Contact, 'name' | 'id'>
</script>

<button class="flex items-center space-x-2 w-full py-2" on:click>
	<Avatar size="sm" uuid={contact.id.toString()} />
	<div class="flex flex-col">
		<h4 class="font-bold text-gray-900">{contact.name}</h4>
	</div>
</button>
