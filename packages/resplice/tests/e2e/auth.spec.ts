import { test, expect } from '@playwright/test'
import Browser from './chrome'

const URL = 'http://localhost:3000'

const browser = new Browser()

test.beforeAll(async () => {
  await browser.launch()
})
test.beforeEach(async () => {
  await browser.createContext()
})
test.afterEach(async () => {
  await browser.closeContext()
})
test.afterAll(async () => {
  await browser.close()
})

test.describe('Auth Flow', () => {
  test('Auth Start Renders', async () => {
    const page = await browser.newPage(URL + '/auth')
    expect(page).toBeDefined()
    const welcomeText = page.locator('text=Welcome')
    await expect(welcomeText).toBeVisible()
    await page.screenshot({ path: './screenshots/start.png' })
  })
})
