export function getNavigatorCountry(): string | null {
  let locale: string
  if (navigator.languages) {
    locale = navigator.languages[0]
  }
  if (navigator.language) {
    locale = navigator.language
  }
  if (Intl) {
    locale = Intl.DateTimeFormat().resolvedOptions().locale
  }

  if (!locale) return null

  if (locale.includes('-')) {
    return locale.split('-')[1]
  }

  return null
}
