<script lang="ts">
	import authStore from '$common/auth.store'
	import useAuthProtocol from '$common/auth-protocol/useAuthProtocol'
	import AttributeItem from '$lib/attributes/Item.svelte'
	import TextField from '@resplice/components/package/form/TextField.svelte'
	import LockClosedIcon from '@resplice/components/package/icons/LockClosedIcon.svelte'
	import ShieldCheckmarkIcon from '@resplice/components/package/icons/ShieldCheckmarkIcon.svelte'
	import Spinner from '@resplice/components/package/skeleton/Spinner.svelte'
	import { SessionStatus } from '$types/session'
	import { AttributeType } from '$types/attribute'
	import type { Email, Phone } from '$types/attribute'

	const CODE_LENGTH = 6

	const protocol = useAuthProtocol()

	const email: Email = {
		id: 0,
		type: AttributeType.EMAIL,
		name: 'Email',
		value: { email: $authStore.email },
		sortOrder: 1
	}

	const phone: Phone = {
		id: 1,
		type: AttributeType.PHONE,
		name: 'Phone',
		value: $authStore.session.phone,
		sortOrder: 2
	}

	let emailCode = ''
	let emailPromise: Promise<boolean>
	$: emailVerified = $authStore.session.status === SessionStatus.PENDING_PHONE_VERIFICATION

	let phoneCode = ''
	let phonePromise: Promise<boolean>

	async function submitEmailCode(verificationToken: number): Promise<boolean> {
		const session = await protocol.verifyEmail({ verificationToken })
		if (session.status !== SessionStatus.PENDING_PHONE_VERIFICATION)
			throw Error('Verification code did not work')

		authStore.update((auth) => ({ ...auth, session }))
		return true
	}

	async function submitPhoneCode(verificationToken: number): Promise<boolean> {
		const session = await protocol.verifyPhone({ verificationToken })
		if (session.status !== SessionStatus.PENDING_USER_REGISRATION)
			throw Error('Verification code did not work')

		authStore.update((auth) => ({ ...auth, session }))
		return true
	}

	$: {
		emailCode = emailCode.toUpperCase().substring(0, CODE_LENGTH)
		if (emailCode.length >= CODE_LENGTH) {
			emailPromise = submitEmailCode(parseInt(emailCode, 10))
		}
	}
	$: {
		phoneCode = phoneCode.toUpperCase().substring(0, CODE_LENGTH)
		if (phoneCode.length >= CODE_LENGTH) {
			phonePromise = submitPhoneCode(parseInt(emailCode, 10))
		}
	}
</script>

<div class="flex-1 space-y-16">
	<div class="flex flex-col space-y-4 items-center">
		<AttributeItem attribute={email} itemType="disabled" showSecondAction={false} />
		<div class="w-full flex items-center">
			<div class="w-full mr-4">
				<TextField
					name="email-code"
					label="Enter Code"
					autoComplete="one-time-code"
					bind:value={emailCode}
					disabled={emailCode.length >= CODE_LENGTH}
					Icon={LockClosedIcon}
				/>
			</div>
			<span class="text-brand-primary w-7 h-full">
				{#await emailPromise}
					<Spinner />
				{:then codeIsValid}
					{#if codeIsValid}
						<ShieldCheckmarkIcon width={24} height={24} />
					{/if}
				{/await}
			</span>
		</div>
	</div>
	<div class="flex flex-col space-y-4 items-center">
		<AttributeItem attribute={phone} itemType="disabled" showSecondAction={false} />
		<div class="w-full flex items-center">
			<div class="w-full mr-4">
				<TextField
					name="phone-code"
					label={emailVerified ? 'Enter Code' : 'Verify Email'}
					autoComplete="one-time-code"
					bind:value={phoneCode}
					disabled={!emailVerified || phoneCode.length >= CODE_LENGTH}
					Icon={LockClosedIcon}
				/>
			</div>
			<span class="text-brand-primary w-7 h-full">
				{#await phonePromise}
					<Spinner />
				{:then codeIsValid}
					{#if codeIsValid}
						<ShieldCheckmarkIcon width={24} height={24} />
					{/if}
				{/await}
			</span>
		</div>
	</div>
</div>
