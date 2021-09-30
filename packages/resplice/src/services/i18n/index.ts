import { register, init, getLocaleFromNavigator } from 'svelte-i18n'

register('en-US', () => import('./en-US.json'))

const initialize = () =>
  init({
    fallbackLocale: 'en-US',
    initialLocale: getLocaleFromNavigator()
  })

export default initialize
