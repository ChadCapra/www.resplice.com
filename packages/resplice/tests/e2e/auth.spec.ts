import Browser from './chrome'

const URL = 'http://localhost:3000'

const browser = new Browser()

describe('Auth Flow', () => {
  beforeAll(async () => {
    await browser.launch()
  })
  beforeEach(async () => {
    await browser.createContext()
  })
  test('Login Renders', async () => {
    const page = await browser.newPage()
    await page.goto(URL + '/auth')
    await page.screenshot({ path: `example.png` })
    await browser.close()
  })
})
