import { register, init, getLocaleFromNavigator } from 'svelte-i18n'

register('en-US', () => import('./locales/en-US.json'))

async function initialize() {
  await init({
    fallbackLocale: 'en-US',
    initialLocale: getLocaleFromNavigator()
  })
}

export default initialize
