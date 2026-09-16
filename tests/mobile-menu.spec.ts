import { test, expect } from '@playwright/test'

const menuItems = ['Home', 'About us', 'Pricing']

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('hides the mobile menu by default', async ({ page }) => {
    const header = page.getByRole('banner')
    const menuButton = header.getByRole('button', { name: 'Menu' })
    const mobileNav = header.getByRole('navigation', {
      name: 'Header navigation',
    })

    await expect(menuButton).toBeVisible()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await expect(mobileNav).toBeHidden()
  })

  test('toggles the menu when clicking the hamburger button', async ({
    page,
  }) => {
    const header = page.getByRole('banner')
    const menuButton = header.getByRole('button', { name: 'Menu' })
    const mobileNav = header.getByRole('navigation', {
      name: 'Header navigation',
    })

    // Click to open
    await menuButton.click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    await expect(mobileNav).toBeVisible()

    for (const item of menuItems) {
      await expect(mobileNav.getByRole('link', { name: item })).toBeVisible()
    }

    // Click again to close
    await menuButton.click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await expect(mobileNav).toBeHidden()
  })
})
