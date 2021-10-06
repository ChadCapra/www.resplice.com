<script lang="ts">
  import type { Phone } from '$types/attribute'
  import parsePhoneNumber from 'libphonenumber-js'

  export let attribute: Phone

  $: phone = parsePhoneNumber(
    `+${attribute.value.countryCallingCode}${attribute.value.number}${attribute.value.extension}`
  ).formatNational()
</script>

<span class="overflow-hidden overflow-ellipsis whitespace-pre-line h-6">
  {phone}
</span>
