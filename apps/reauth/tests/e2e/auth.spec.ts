import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:5173'

test.describe('Auth Flow', () => {
	test('Auth Renders', async ({ page }) => {
		await page.goto(`${BASE_URL}/auth`)
		await expect(page).toHaveTitle('Login')

		const welcomeText = page.locator('text=Welcome')
		await expect(welcomeText).toBeVisible()
		await page.screenshot({ path: './tests/e2e/screenshots/start.png' })
	})

	test('New User Flow', async ({ page }) => {
		await page.goto(`${BASE_URL}/auth`)
		const continueBtnLocator = page.locator('button:has-text("Continue")')

		// Auth Start
		const welcomeText = page.locator('text=Welcome')
		await expect(welcomeText).toBeVisible()

		await page.fill('#phone', '2185910657')
		await page.fill('#email', 'marcus@resplice.com')
		await page.click('label:has-text("Remember Me")')
		await continueBtnLocator.click()

		// Verify Attributes
		const verifyText = page.locator('text=Verify your phone and email')
		await expect(verifyText).toBeVisible()

		await page.fill('#email-code', '012345')
		await page.fill('#phone-code', '012345')

		// Create Account
		const createAccountText = page.locator('text=create your account')
		await expect(createAccountText).toBeVisible()

		await page.fill('#full-name', 'Marcus Virginia')
		await page.fill('#handle', 'mvirg')
		await continueBtnLocator.click()

		// Check logged in
		// const contactsListHeader = page.locator('h2:has-text("Contacts")')
		// await expect(contactsListHeader).toBeVisible()
	})
})
