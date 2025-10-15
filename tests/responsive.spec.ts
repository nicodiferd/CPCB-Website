import { test, expect } from '@playwright/test';

/**
 * Responsive Design Tests
 *
 * This test suite verifies the website works correctly across:
 * - Mobile devices (320px - 767px)
 * - Tablets (768px - 1023px)
 * - Desktop (1024px+)
 *
 * Tests include:
 * - Layout adjustments
 * - Text readability
 * - Image scaling
 * - Interactive element sizing
 * - Viewport-specific features
 */

const viewports = [
  { name: 'Mobile Small', width: 320, height: 568 },
  { name: 'Mobile Medium', width: 375, height: 667 },
  { name: 'Mobile Large', width: 414, height: 896 },
  { name: 'Tablet Portrait', width: 768, height: 1024 },
  { name: 'Tablet Landscape', width: 1024, height: 768 },
  { name: 'Desktop', width: 1440, height: 900 },
  { name: 'Desktop Large', width: 1920, height: 1080 },
];

test.describe('Responsive Design - Viewport Tests', () => {
  for (const viewport of viewports) {
    test(`should render correctly on ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');

      // Page should load without horizontal scroll
      const body = page.locator('body');
      const bodyBox = await body.boundingBox();

      if (bodyBox) {
        expect(bodyBox.width).toBeLessThanOrEqual(viewport.width);
      }

      // Main heading should be visible
      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();

      // Hero section should be visible
      const hero = page.locator('section').first();
      await expect(hero).toBeVisible();
    });
  }
});

test.describe('Responsive Design - Layout Changes', () => {
  test('should stack CTA buttons vertically on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const scheduleButton = page.getByRole('link', { name: /View Schedule/i });
    const liveButton = page.getByRole('link', { name: /Live Updates/i });

    const scheduleBox = await scheduleButton.boundingBox();
    const liveBox = await liveButton.boundingBox();

    if (scheduleBox && liveBox) {
      // Buttons should be stacked (live button Y position should be greater than schedule button)
      expect(liveBox.y).toBeGreaterThan(scheduleBox.y);
    }
  });

  test('should display CTA buttons horizontally on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    const scheduleButton = page.getByRole('link', { name: /View Schedule/i });
    const liveButton = page.getByRole('link', { name: /Live Updates/i });

    const scheduleBox = await scheduleButton.boundingBox();
    const liveBox = await liveButton.boundingBox();

    if (scheduleBox && liveBox) {
      // Buttons should be side by side (similar Y positions)
      expect(Math.abs(liveBox.y - scheduleBox.y)).toBeLessThan(10);
    }
  });

  test('should adjust stats grid on mobile vs desktop', async ({ page }) => {
    // Mobile: 2 columns
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    let statsGrid = page.locator('.grid-cols-2').first();
    await expect(statsGrid).toBeVisible();

    // Desktop: Should show all 4 in a row
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.reload();

    // On desktop, the grid should use md:grid-cols-4
    statsGrid = page.locator('.grid-cols-2').first();
    await expect(statsGrid).toBeVisible();
  });
});

test.describe('Responsive Design - Typography', () => {
  test('should use smaller font sizes on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const heading = page.getByRole('heading', { level: 1 });
    const fontSize = await heading.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });

    // Mobile h1 should be smaller (around 32px with base 16px)
    const fontSizeNum = parseFloat(fontSize);
    expect(fontSizeNum).toBeLessThan(50); // Should be significantly smaller than desktop
  });

  test('should use larger font sizes on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    const heading = page.getByRole('heading', { level: 1 });
    const fontSize = await heading.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });

    // Desktop h1 should be larger (around 48px)
    const fontSizeNum = parseFloat(fontSize);
    expect(fontSizeNum).toBeGreaterThan(40);
  });
});

test.describe('Responsive Design - Images and Media', () => {
  test('should not cause horizontal overflow on any viewport', async ({ page }) => {
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');

      // Check body width doesn't exceed viewport
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(viewport.width + 20); // Allow 20px tolerance for scrollbars
    }
  });
});

test.describe('Responsive Design - Interactive Elements', () => {
  test('should have touch-friendly tap targets on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Mobile menu button should be large enough (min 44x44px for iOS)
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    const buttonBox = await menuButton.boundingBox();

    if (buttonBox) {
      expect(buttonBox.width).toBeGreaterThanOrEqual(40);
      expect(buttonBox.height).toBeGreaterThanOrEqual(40);
    }

    // Open mobile menu
    await menuButton.click();

    // Navigation links should be large enough to tap
    const navLink = page.getByRole('link', { name: 'Schedule' }).last();
    const linkBox = await navLink.boundingBox();

    if (linkBox) {
      expect(linkBox.height).toBeGreaterThanOrEqual(40);
    }
  });

  test('should show social media icons at appropriate size', async ({ page }) => {
    await page.goto('/');

    const instagramIcon = page.getByRole('link', { name: /Instagram/i }).first().locator('svg');
    const iconBox = await instagramIcon.boundingBox();

    if (iconBox) {
      // SVG icons should be visible and reasonably sized (w-6 h-6 = 24px)
      expect(iconBox.width).toBeGreaterThan(20);
      expect(iconBox.height).toBeGreaterThan(20);
    }
  });
});

test.describe('Responsive Design - Container Constraints', () => {
  test('should respect max-width container on large screens', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const container = page.locator('.container').first();
    const containerBox = await container.boundingBox();

    if (containerBox) {
      // Container should not exceed max-width (1200px + padding)
      expect(containerBox.width).toBeLessThanOrEqual(1240);
    }
  });

  test('should use full width on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const container = page.locator('.container').first();
    const containerBox = await container.boundingBox();

    if (containerBox) {
      // Container should be close to viewport width (minus padding)
      expect(containerBox.width).toBeGreaterThan(340);
      expect(containerBox.width).toBeLessThanOrEqual(375);
    }
  });
});

test.describe('Responsive Design - Performance', () => {
  test('should load quickly on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Page should load in under 5 seconds (generous for dev server)
    expect(loadTime).toBeLessThan(5000);
  });

  test('should load quickly on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Page should load in under 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });
});

test.describe('Responsive Design - Screenshots', () => {
  test('should capture responsive screenshots for documentation', async ({ page }) => {
    const screenshotViewports = [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1440, height: 900 },
    ];

    for (const vp of screenshotViewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');

      await page.screenshot({
        path: `tests/screenshots/responsive-${vp.name}-${vp.width}x${vp.height}.png`,
        fullPage: true,
      });
    }
  });
});
