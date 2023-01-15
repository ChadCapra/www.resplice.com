<script lang="ts">
	import { onMount } from 'svelte'
	import appConfig from '$common/config'
	import authStore from '$common/auth.store'
	import { phoneNumberToValue } from '$common/attributes'
	import useAuthClient from '$common/auth-protocol/useAuthProtocol'
	import Button from '$common/components/Button.svelte'
	import PhoneField from '$common/components/form/PhoneField.svelte'
	import TextField from '$common/components/form/TextField.svelte'
	import Toggle from '$common/components/form/Toggle.svelte'
	import MailIcon from '$common/components/icons/MailIcon.svelte'
	import { getNavigatorCountry, validateEmail } from '@resplice/utils'
	import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'

	import type { CountryCode } from 'libphonenumber-js'

	const client = useAuthClient()

	let phone = {
		value: '',
		countryCode: 'US' as CountryCode
	}
	let email = ''
	let rememberMe = false
	let formErrs: Record<string, string> = {}
	let networkErr: Error
	let isLoading = false

	onMount(() => {
		phone.countryCode = (getNavigatorCountry() as CountryCode) || ('US' as CountryCode)
	})

	type SubmitEvent = Event & {
		currentTarget: EventTarget & HTMLFormElement
	}
	async function onSubmit(_e: SubmitEvent) {
		const isValid = validate()
		if (!isValid) return

		isLoading = true

		const isBot = await checkBot()
		if (isBot) return

		createSession()
	}

	function validate(): boolean {
		formErrs = {}
		const errs: Record<string, string> = {}
		if (!isValidPhoneNumber(phone.value, phone.countryCode)) errs.phone = 'Invalid Phone'
		if (!validateEmail(email)) errs.email = 'Invalid Email'
		if (Object.keys(errs).length) {
			formErrs = errs
			return false
		}
		return true
	}

	function checkBot(): Promise<boolean> {
		if (appConfig.env !== 'production') return Promise.resolve(false)
		const grecaptcha: any = (window as any).grecaptcha
		return new Promise((resolve) => {
			grecaptcha.ready(async () => {
				const token = await grecaptcha.execute(appConfig.recaptchaToken, {
					action: 'auth'
				})
				const isBot = await client.submitRecaptchaToken(token)
				if (isBot) {
					networkErr = new Error('We detected some bot behavior, you must be a robot?')
					resolve(true)
				} else {
					resolve(false)
				}
			})
		})
	}

	async function createSession() {
		try {
			const phoneNumber = parsePhoneNumber(phone.value, phone.countryCode)
			const auth = await client.createSession({
				phone: phoneNumberToValue(phoneNumber),
				email: { email },
				rememberMe
			})
			authStore.set(auth)
		} catch (err) {
			networkErr = err as Error
			isLoading = false
		}
	}
</script>

<svelte:head>
	{#if appConfig.env === 'production'}
		<script
			src={`https://www.google.com/recaptcha/api.js?render=${appConfig.recaptchaToken}`}
			async
			defer
		>
		</script>
	{/if}
</svelte:head>

<form
	class="flex-1 flex flex-col justify-between items-center w-full p-2 overflow-auto"
	on:submit|preventDefault={onSubmit}
>
	<div class="w-full flex flex-col space-y-6">
		<PhoneField name="phone" label="Enter Phone" bind:phone error={formErrs.phone} />
		<TextField
			name="email"
			label="Enter Email"
			autoComplete="email"
			bind:value={email}
			Icon={MailIcon}
			error={formErrs.email}
		/>
		<Toggle
			name="remember-me"
			label="Remember Me"
			isActive={rememberMe}
			on:toggle={() => (rememberMe = !rememberMe)}
		/>
	</div>

	<div class="flex flex-col items-center justify-center">
		<div class="w-40 flex flex-col">
			<Button type="submit" {isLoading}>Continue</Button>
			{#if networkErr}
				<p>{networkErr.message}</p>
			{/if}
		</div>
		<!-- We have to include this text according to google :( -->
		<!-- https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed -->
		<p class="text-xs text-gray-400 mt-4 w-full">
			This site is protected by reCAPTCHA and the Google
			<a class="underline text-brand-primary" href="https://policies.google.com/privacy"
				>Privacy Policy</a
			>
			and
			<a class="underline text-brand-primary" href="https://policies.google.com/terms"
				>Terms of Service</a
			> apply.
		</p>
	</div>
</form>

<style>
	:global(.grecaptcha-badge) {
		visibility: hidden;
	}
</style>
