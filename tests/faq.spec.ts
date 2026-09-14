import { test, expect } from '@playwright/test'
import type { Page } from '@playwright/test'

const faqItems = [
  {
    question: 'Is there any limitation for free plan?',
    answer: /real-time exchange rates and basic conversions/,
  },
  {
    question:
      'What is the minimum specification to run the apps on Android or iOS?',
    answer: /Cofile runs on Android 8\.0\+ and iOS 14\+/,
  },
  {
    question: 'Can I downgrade the plan?',
    answer: /you can downgrade your plan at any time/,
  },
]

const faqItem = (page: Page, question: string) =>
  page.locator('details.accordion-item', { hasText: question })

test.describe('FAQ section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('hides all answers by default', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Frequently Asked Questions' }),
    ).toBeVisible()

    for (const { question, answer } of faqItems) {
      const item = faqItem(page, question)
      await expect(item).not.toHaveAttribute('open', '')
      await expect(item.getByText(answer)).toBeHidden()
    }
  })

  test('toggles the answer when clicking a question', async ({ page }) => {
    const { question, answer } = faqItems[0]
    const item = faqItem(page, question)
    const trigger = item.locator('summary')

    // Click to open
    await trigger.click()
    await expect(item).toHaveAttribute('open', '')
    await expect(item.getByText(answer)).toBeVisible()

    // Click again to close
    await trigger.click()
    await expect(item).not.toHaveAttribute('open', '')
    await expect(item.getByText(answer)).toBeHidden()
  })

  test('each question toggles independently', async ({ page }) => {
    // Open all questions one by one
    for (const { question } of faqItems) {
      await faqItem(page, question).locator('summary').click()
    }

    // All answers must be visible at the same time
    for (const { question, answer } of faqItems) {
      const item = faqItem(page, question)
      await expect(item).toHaveAttribute('open', '')
      await expect(item.getByText(answer)).toBeVisible()
    }

    await faqItem(page, faqItems[1].question).locator('summary').click()

    await expect(faqItem(page, faqItems[0].question)).toHaveAttribute(
      'open',
      '',
    )
    await expect(faqItem(page, faqItems[1].question)).not.toHaveAttribute(
      'open',
      '',
    )
    await expect(faqItem(page, faqItems[2].question)).toHaveAttribute(
      'open',
      '',
    )
  })
})
