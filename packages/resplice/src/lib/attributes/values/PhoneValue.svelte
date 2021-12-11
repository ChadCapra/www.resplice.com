<script lang="ts">
  import type { PhoneValue } from '$types/attribute'
  import parsePhoneNumber from 'libphonenumber-js'
  import type { CountryCode } from 'libphonenumber-js'

  export let value: PhoneValue

  function parsePhone(value: PhoneValue) {
    if (!value?.number) return ''

    const parsed = parsePhoneNumber(
      value.number,
      value.countryCallingCode as CountryCode
    )

    if (!parsed) return value.number
    return parsed.formatNational()
  }

  $: phone = parsePhone(value)
</script>

<span class="overflow-hidden text-ellipsis whitespace-pre-line h-6">
  {phone}
</span>
