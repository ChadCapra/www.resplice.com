import { chromium } from 'playwright'

class Chrome {
  instance: import('playwright').Browser
  ctx: import('playwright').BrowserContext

  async launch(options?: import('playwright').LaunchOptions) {
    this.instance = await chromium.launch(options)
  }

  async createContext(options?: import('playwright').BrowserContextOptions) {
    this.ctx = await this.instance.newContext(options)
  }

  async newPage(url: string) {
    try {
      const page = await this.ctx.newPage()
      await page.goto(url)
      return page
    } catch (err) {
      if ((err as Error).message.includes('ERR_CONNECTION_REFUSED'))
        console.log(
          'Please start the app with `npm run dev` before running e2e tests.'
        )
      else console.log(err.message)
    }
  }

  async closeContext() {
    await this.ctx.close()
  }

  async close() {
    await this.instance.close()
  }
}

export default Chrome
