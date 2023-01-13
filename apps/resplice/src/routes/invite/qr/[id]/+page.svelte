<script lang="ts" context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params }) {
		return {
			props: {
				b64QrUnlock: params.id
			}
		}
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import contactStores from '$stores/contacts'
	import useAppClient from '$lib/hooks/useAppClient'
	import Spinner from '$lib/common/skeleton/Spinner.svelte'

	const client = useAppClient()

	export let b64QrUnlock: string

	async function unlockQr() {
		const [id, code] = atob(b64QrUnlock).split('|')
		const qrInviteId = parseInt(id, 10)
		const accessCode = parseInt(code, 10)

		const pendingContact = await client.invites.openQr(qrInviteId, accessCode)
		contactStores.pendingContacts.update((pendingContacts) => {
			const newPendingContacts = new Map(pendingContacts)
			newPendingContacts.set(pendingContact.id, pendingContact)
			return newPendingContacts
		})

		goto(`/app/pending/contact/${pendingContact.id}`)
	}

	onMount(unlockQr)
</script>

<div class="h-full w-full flex justify-center items-center">
	<Spinner />
</div>
