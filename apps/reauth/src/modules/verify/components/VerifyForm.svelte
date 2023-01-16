<script lang="ts">
	import { parsePhoneNumber } from 'libphonenumber-js'
	import authStore from '$common/auth.store'
	import useAuthProtocol from '$common/auth-protocol/useAuthProtocol'
	import AttributeItem from '@resplice/components/attribute/AttributeItem.svelte'
	import TextField from '@resplice/components/form/TextField.svelte'
	import LockClosedIcon from '@resplice/components/icons/LockClosedIcon.svelte'
	import ShieldCheckmarkIcon from '@resplice/components/icons/ShieldCheckmarkIcon.svelte'
	import Spinner from '@resplice/components/skeleton/Spinner.svelte'
	import { AuthStatus } from '$common/common.types'
	import { phoneNumberToValue } from '$common/attributes'
	import { AttributeType, type Email, type Phone } from '@resplice/utils'

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
		value: phoneNumberToValue(
			parsePhoneNumber($authStore.phone.value, $authStore.phone.countryCode)
		),
		sortOrder: 2
	}

	let emailCode = ''
	let emailPromise: Promise<boolean>
	$: emailVerified = $authStore.status === AuthStatus.PENDING_PHONE_VERIFICATION

	let phoneCode = ''
	let phonePromise: Promise<boolean>

	async function submitEmailCode(verificationToken: number): Promise<boolean> {
		const auth = await protocol.verifyEmail({ verificationToken })
		if (auth.status !== AuthStatus.PENDING_PHONE_VERIFICATION)
			throw Error('Verification code did not work')

		authStore.update((oldAuth) => ({ ...oldAuth, status: auth.status }))
		return true
	}

	async function submitPhoneCode(verificationToken: number): Promise<boolean> {
		const auth = await protocol.verifyPhone({ verificationToken })
		if (auth.status !== AuthStatus.PENDING_USER_REGISRATION)
			throw Error('Verification code did not work')

		authStore.update((oldAuth) => ({ ...oldAuth, status: auth.status }))
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
					autocomplete="one-time-code"
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
					autocomplete="one-time-code"
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
