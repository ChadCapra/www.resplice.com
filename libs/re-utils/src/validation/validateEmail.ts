export function validateEmail(email: string): boolean {
  /* eslint-disable no-control-regex, no-useless-escape */
  // prettier-ignore
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('validates email', () => {
    expect(validateEmail('marcus@resplice.com')).toBe(true)
    expect(validateEmail('marcus@re.com')).toBe(true)
  })
  test('invalidates email', () => {
    expect(validateEmail('')).toBe(false)
    expect(validateEmail('marcus')).toBe(false)
    expect(validateEmail('marcus@')).toBe(false)
    expect(validateEmail('marcus@resplice')).toBe(false)
  })
}
