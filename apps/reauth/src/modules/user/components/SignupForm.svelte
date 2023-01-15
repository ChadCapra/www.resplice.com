<script lang="ts">
	import useAuthProtocol from '$common/auth-protocol/useAuthProtocol'
	import UserAvatar from '@resplice/components/UserAvatar.svelte'
	import TextField from '@resplice/components/form/TextField.svelte'
	import PeopleIcon from '@resplice/components/icons/PeopleIcon.svelte'
	import Button from '@resplice/components/Button.svelte'
	import authStore from '$common/auth.store'
	import Link from '@resplice/components/Link.svelte'

	const protocol = useAuthProtocol()

	const RAND_ID = Math.random().toString(36)

	let fullName = ''
	let avatar: Blob | null = null
	let formErrs: Record<string, string> = {}
	let networkErr: Error
	let isLoading = false

	async function handleSubmit() {
		const isValid = validate()
		if (!isValid) return

		isLoading = true

		createAccount()
	}

	async function createAccount() {
		try {
			isLoading = true
			const session = await protocol.createAccount({
				name: fullName,
				avatar,
				handle: ''
			})
			authStore.update((auth) => ({
				...auth,
				session
			}))
		} catch (err) {
			networkErr = err
			isLoading = false
		}
	}

	function validate(): boolean {
		formErrs = {}
		const errs: Record<string, string> = {}
		if (!fullName) errs.fullName = 'Full name is required'
		if (Object.keys(errs).length) {
			formErrs = errs
			return false
		}
		return true
	}
</script>

<div class="flex-1 space-y-6 flex flex-col justify-between overflow-auto">
	<div>
		<UserAvatar
			profile={{
				uuid: RAND_ID,
				avatar: avatar ? URL.createObjectURL(avatar) : null
			}}
			on:crop={(e) => (avatar = e.detail)}
		/>
		<form class="mt-8 px-2" on:submit|preventDefault={handleSubmit}>
			<TextField
				name="full-name"
				label="Full Name"
				autoComplete="name"
				bind:value={fullName}
				Icon={PeopleIcon}
				error={formErrs.fullName}
			/>
		</form>
	</div>

	<div class="flex-none flex flex-col items-center p-2">
		<Link class="mb-4" href="/auth/verify-existing">I already have an account</Link>
		<Button {isLoading} on:click={() => handleSubmit()}>Continue</Button>
		{#if networkErr}
			<p>{networkErr.message}</p>
		{/if}
	</div>
</div>
