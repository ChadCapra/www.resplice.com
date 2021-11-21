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

  async newPage() {
    return this.ctx.newPage()
  }

  async close() {
    await this.instance.close()
  }
}

export default Chrome
