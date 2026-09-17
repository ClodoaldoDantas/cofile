import { defineConfig } from '@playwright/test'

const baseURL = 'http://localhost:4321/cofile'

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
