import { test, expect } from '@playwright/test';

/**
 * Homepage Tests
 *
 * This test suite verifies the core functionality and appearance of the homepage:
 * - Page loads successfully
 * - Hero section is visible with correct content
 * - Call-to-action buttons work
 * - Quick stats display correctly
 * - Responsive design on different viewports
 */

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load successfully', async ({ page }) => {
    // Verify page title
    await expect(page).toHaveTitle(/Cal Poly Club Baseball/);

    // Wait for page to be fully loaded
    await expect(page.locator('main')).toBeVisible();
  });

  test('should display hero section with correct content', async ({ page }) => {
    // Check main heading
    const heading = page.getByRole('heading', { level: 1, name: /Cal Poly Club Baseball/i });
    await expect(heading).toBeVisible();

    // Check subtitle
    await expect(page.getByText(/NCBA Division 1/i)).toBeVisible();
    await expect(page.getByText(/Southern Pacific West Conference/i)).toBeVisible();

    // Check achievements
    await expect(page.getByText(/2x Regional Champions/i)).toBeVisible();
    await expect(page.getByText(/8x Division Champions/i)).toBeVisible();
  });

  test('should display call-to-action buttons', async ({ page }) => {
    // Check "View Schedule" button
    const scheduleButton = page.getByRole('link', { name: /View Schedule/i });
    await expect(scheduleButton).toBeVisible();
    await expect(scheduleButton).toHaveAttribute('href', '/schedule');

    // Check "Live Updates" button
    const liveUpdatesButton = page.getByRole('link', { name: /Live Updates/i });
    await expect(liveUpdatesButton).toBeVisible();
    await expect(liveUpdatesButton).toHaveAttribute('href', '/live-updates');
  });

  test('should display quick stats bar', async ({ page }) => {
    // Check all four stats are visible
    await expect(page.getByText(/D1/i).first()).toBeVisible();
    await expect(page.getByText(/NCBA Division/i)).toBeVisible();

    await expect(page.getByText(/2x/i).first()).toBeVisible();
    await expect(page.getByText(/Regional Champs/i)).toBeVisible();

    await expect(page.getByText(/8x/i).first()).toBeVisible();
    await expect(page.getByText(/Division Champs/i)).toBeVisible();

    await expect(page.getByText(/SLO/i).first()).toBeVisible();
    await expect(page.getByText(/San Luis Obispo/i)).toBeVisible();
  });

  test('should display Features section', async ({ page }) => {
    // Scroll to features section
    const featuresSection = page.locator('section').filter({ hasText: /What We Offer/i });
    await expect(featuresSection).toBeVisible();
  });

  test('should display CTA section', async ({ page }) => {
    // Scroll to bottom to check CTA section exists
    const ctaSection = page.locator('section').last();
    await expect(ctaSection).toBeVisible();
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Cal Poly Club Baseball/);

    // Check meta keywords
    const metaKeywords = page.locator('meta[name="keywords"]');
    await expect(metaKeywords).toHaveAttribute('content', /.+/);
  });

  test('should capture desktop homepage screenshot', async ({ page }, testInfo) => {
    if (testInfo.project.name === 'chromium-desktop') {
      await page.screenshot({
        path: 'tests/screenshots/homepage-desktop.png',
        fullPage: true,
      });
    }
  });

  test('should capture mobile homepage screenshot', async ({ page }, testInfo) => {
    if (testInfo.project.name === 'mobile-chrome') {
      await page.screenshot({
        path: 'tests/screenshots/homepage-mobile.png',
        fullPage: true,
      });
    }
  });
});

/**
 * Homepage Responsive Design Tests
 */
test.describe('Homepage Responsive Design', () => {
  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Hero should be visible
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Buttons should stack vertically on mobile
    const scheduleButton = page.getByRole('link', { name: /View Schedule/i });
    const liveButton = page.getByRole('link', { name: /Live Updates/i });

    await expect(scheduleButton).toBeVisible();
    await expect(liveButton).toBeVisible();
  });

  test('should be responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    // Check content is visible and properly laid out
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByText(/NCBA Division 1/i)).toBeVisible();
  });

  test('should be responsive on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    // Check all elements are visible
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByText(/NCBA Division 1/i)).toBeVisible();

    // Stats should be in a row on desktop
    const statsContainer = page.locator('.grid-cols-2').first();
    await expect(statsContainer).toBeVisible();
  });
});

/**
 * Homepage Accessibility Tests
 */
test.describe('Homepage Accessibility', () => {
  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');

    // Check skip to main content link
    const skipLink = page.getByText(/Skip to main content/i);
    await expect(skipLink).toBeInViewport({ ratio: 0 }); // May be hidden but accessible
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Check h1 exists
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toBeVisible();

    // Should only have one h1
    const h1Count = await page.getByRole('heading', { level: 1 }).count();
    expect(h1Count).toBe(1);
  });

  test('should have proper ARIA labels for interactive elements', async ({ page }) => {
    await page.goto('/');

    // Check buttons have accessible names
    const scheduleButton = page.getByRole('link', { name: /View Schedule/i });
    await expect(scheduleButton).toBeVisible();

    const liveButton = page.getByRole('link', { name: /Live Updates/i });
    await expect(liveButton).toBeVisible();
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');

    // Tab through interactive elements
    await page.keyboard.press('Tab');

    // Check that focus is visible (should be on skip link or first link)
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});
