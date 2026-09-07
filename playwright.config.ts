import { defineConfig } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({ path: './.env.test' })

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
  },
  webServer: {
    command: 'npm run dev',
    url: process.env.BASE_URL,
    // Reuse existing server if available
    reuseExistingServer: !process.env.CI,
  },
})
