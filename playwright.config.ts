import { defineConfig } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({ path: './.env.test' })

const baseURL = process.env.BASE_URL || 'http://localhost:4321'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  use: {
    baseURL,
    headless: true,
  },
  webServer: {
    command: 'npm run dev',
    url: baseURL,
    // Reuse existing server if available
    reuseExistingServer: !process.env.CI,
  },
})
