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
  test('Auth Renders', async () => {
    const page = await browser.newPage(URL + '/auth')
    expect(page).toBeDefined()
    const welcomeText = page.locator('text=Welcome')
    await expect(welcomeText).toBeVisible()
    await page.screenshot({ path: './tests/e2e/screenshots/start.png' })
  })

  test('New User Flow', async () => {
    const page = await browser.newPage(URL + '/auth')
    const continueBtnLocator = page.locator('button:has-text("Continue")')

    // Auth Start
    const welcomeText = page.locator('text=Welcome')
    await expect(welcomeText).toBeVisible()

    await page.fill('#phone', '2185910657')
    await page.fill('#email', 'marcusvirg345@gmail.com')
    await page.click('label:has-text("Remember Me")')
    await continueBtnLocator.click()

    // Verify Attributes
    const verifyText = page.locator('text=Verify your phone and email')
    await expect(verifyText).toBeVisible()

    await page.fill('#email-code', 'TESTER')
    await page.fill('#phone-code', 'TESTER')

    // Create Account
    const createAccountText = page.locator('text=create your account')
    await expect(createAccountText).toBeVisible()

    await page.fill('#full-name', 'Marcus Virginia')
    await continueBtnLocator.click()

    // TODO: expect app page to be visible
  })
})
