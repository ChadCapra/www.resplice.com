<script lang="ts">
	import cx from 'classnames'
	import { AsYouType } from 'libphonenumber-js'

	import type { CountryCode } from 'libphonenumber-js'
	import CountrySelectMini from '$common/components/form/CountrySelectMini.svelte'

	export let name: string
	export let label: string
	export let phone: { value: string; countryCode: CountryCode }
	export let error: string = ''
	// TODO: Type svelte component
	export let Icon: any = null
	let isTouched = !!phone.value

	function resetError() {
		if (error) error = ''
	}

	type InputEvent = Event & {
		currentTarget: EventTarget & HTMLInputElement
	}
	function onPhoneChange(e: InputEvent) {
		resetError()
		const fmt = new AsYouType(phone.countryCode)
		const fmtInput = fmt.input(e.currentTarget.value)
		const countryCode: CountryCode = (() => {
			const country = fmt.getCountry()
			if (country) return country
			if (fmt.getNumber()?.countryCallingCode === '1') return 'US'
			return phone.countryCode
		})()
		phone = {
			value: fmtInput,
			countryCode
		}
		// if (/^[a-zA-Z]/.test(phone)) {
		//   // TODO: Figure out how to rerender here
		//   // Setting value to empty string doesn't rerender component
		//   // which allows letters in the phone input
		//   value = ''
		// }
	}

	function onCountryChange(e: InputEvent) {
		const code = e.currentTarget.value as CountryCode
		if (code === phone.countryCode) return

		const fmt = new AsYouType(code)
		const fmtInput = fmt.input(phone.value)
		phone = {
			value: fmtInput,
			countryCode: fmt.getCountry() || code
		}
	}
</script>

<div class="w-full">
	<div
		class="relative rounded-2xl flex-1 text-left h-14 flex items-center"
		class:ring-2={error}
		class:ring-red-600={error}
	>
		{#if Icon}
			<div class="ml-4 text-gray-700">
				<svelte:component this={Icon} width={32} height={32} />
			</div>
		{:else}
			<div class="ml-4">
				<CountrySelectMini
					name="phone-country"
					bind:value={phone.countryCode}
					on:input={onCountryChange}
				/>
			</div>
		{/if}
		<label
			for={name}
			class={cx('text-gray-700 font-semibold absolute transform left-16', {
				'top-1 scale-90': isTouched,
				'top-4': !isTouched
			})}
		>
			{label}
		</label>
		<input
			type="text"
			id={name}
			class="appearance-none absolute top-0 left-0 w-full h-14 bg-transparent outline-none border-none rounded-2xl px-6 pt-5 pl-16 font-semibold text-lg text-gray-900 ring-2 focus:ring-gray-800"
			class:ring-gray-600={!error}
			class:ring-red-600={!!error}
			{name}
			autocomplete="tel"
			value={phone.value}
			on:input|preventDefault={onPhoneChange}
			on:focus={() => (isTouched = true)}
			on:blur={() => (!!phone.value ? (isTouched = true) : (isTouched = false))}
		/>
	</div>
	{#if error}
		<p class="text-sm text-red-600 h-4 my-1 mx-2">{error}</p>
	{/if}
</div>

<style>
	label {
		transform-origin: 0 0;
		transition: all 0.2s ease;
	}
</style>
