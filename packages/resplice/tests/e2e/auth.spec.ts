import Browser from './chrome'

const URL = 'http://localhost:3000'

const browser = new Browser()

beforeAll(async () => {
  await browser.launch()
})
beforeEach(async () => {
  await browser.createContext()
})
afterEach(async () => {
  await browser.closeContext()
})
afterAll(async () => {
  await browser.close()
})

describe('Auth Flow', () => {
  test('Login Renders', async () => {
    const page = await browser.newPage(URL + '/auth')
    expect(page).toBeDefined()
    await page.screenshot({ path: `auth.png` })
  })
})
