import { capitalize } from '../../src/lib/utils'

describe('Utils', () => {
  test('Capitalize a word', () => {
    const word = 'lightsaber'
    const expected = 'Lightsaber'

    const result = capitalize(word)

    expect(result).toBe(expected)
  })
})
