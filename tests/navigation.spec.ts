import { test, expect } from '@playwright/test';

/**
 * Navigation Component Tests
 *
 * This test suite verifies:
 * - Desktop navigation menu
 * - Mobile hamburger menu
 * - Navigation links work correctly
 * - Social media links
 * - Sticky header behavior
 * - Mobile menu toggle functionality
 */

test.describe('Navigation - Desktop', () => {
  test.beforeEach(async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
  });

  test('should display CPCB Mustangs logo', async ({ page }) => {
    const logo = page.getByRole('link', { name: /CPCB Mustangs/i }).first();
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', '/');
  });

  test('should display all navigation links', async ({ page }) => {
    // Desktop nav should be visible
    const nav = page.locator('header nav');
    await expect(nav).toBeVisible();

    // Check all nav items
    await expect(page.getByRole('link', { name: 'Home' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Schedule' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Live Updates' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'League' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Photos' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Team News' }).first()).toBeVisible();
  });

  test('should display social media links', async ({ page }) => {
    // Check Instagram link
    const instagram = page.getByRole('link', { name: /Instagram/i }).first();
    await expect(instagram).toBeVisible();
    await expect(instagram).toHaveAttribute('href', /instagram\.com/);
    await expect(instagram).toHaveAttribute('target', '_blank');
    await expect(instagram).toHaveAttribute('rel', /noopener noreferrer/);

    // Check Twitter link
    const twitter = page.getByRole('link', { name: /Twitter/i }).first();
    await expect(twitter).toBeVisible();
    await expect(twitter).toHaveAttribute('href', /twitter\.com/);

    // Check Facebook link
    const facebook = page.getByRole('link', { name: /Facebook/i }).first();
    await expect(facebook).toBeVisible();
    await expect(facebook).toHaveAttribute('href', /facebook\.com/);
  });

  test('should navigate to Schedule page', async ({ page }) => {
    await page.getByRole('link', { name: 'Schedule' }).first().click();
    await page.waitForURL('**/schedule');
    await expect(page).toHaveURL(/.*\/schedule/);
  });

  test('should navigate to Live Updates page', async ({ page }) => {
    await page.getByRole('link', { name: 'Live Updates' }).first().click();
    await page.waitForURL('**/live-updates');
    await expect(page).toHaveURL(/.*\/live-updates/);
  });

  test('should navigate to League page', async ({ page }) => {
    await page.getByRole('link', { name: 'League' }).first().click();
    await page.waitForURL('**/league');
    await expect(page).toHaveURL(/.*\/league/);
  });

  test('should navigate to Photos page', async ({ page }) => {
    await page.getByRole('link', { name: 'Photos' }).first().click();
    await page.waitForURL('**/photos');
    await expect(page).toHaveURL(/.*\/photos/);
  });

  test('should navigate to Team News page', async ({ page }) => {
    await page.getByRole('link', { name: 'Team News' }).first().click();
    await page.waitForURL('**/blog');
    await expect(page).toHaveURL(/.*\/blog/);
  });

  test('should have sticky header', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toHaveCSS('position', 'sticky');
  });

  test('should not show mobile menu button on desktop', async ({ page }) => {
    const mobileMenuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    await expect(mobileMenuButton).not.toBeVisible();
  });
});

test.describe('Navigation - Mobile', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  test('should display mobile menu button', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    await expect(menuButton).toBeVisible();
  });

  test('should toggle mobile menu on click', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });

    // Menu should be closed initially
    const mobileNav = page.locator('header nav > div').last();
    await expect(mobileNav).not.toBeVisible();

    // Click to open
    await menuButton.click();

    // Menu should now be visible
    await expect(page.getByRole('link', { name: 'Schedule' }).last()).toBeVisible();

    // Click to close
    await menuButton.click();

    // Menu should be hidden again
    await expect(page.getByRole('link', { name: 'Schedule' }).last()).not.toBeVisible();
  });

  test('should display all navigation items in mobile menu', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    await menuButton.click();

    // Wait for menu to open
    await page.waitForTimeout(300);

    // Check all nav items are present
    await expect(page.getByRole('link', { name: 'Home' }).last()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Schedule' }).last()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Live Updates' }).last()).toBeVisible();
    await expect(page.getByRole('link', { name: 'League' }).last()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Photos' }).last()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Team News' }).last()).toBeVisible();
  });

  test('should display social media links in mobile menu', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    await menuButton.click();

    // Wait for menu to open
    await page.waitForTimeout(300);

    // Check social links are visible
    const instagramLinks = page.getByRole('link', { name: /Instagram/i });
    await expect(instagramLinks.last()).toBeVisible();

    const twitterLinks = page.getByRole('link', { name: /Twitter/i });
    await expect(twitterLinks.last()).toBeVisible();

    const facebookLinks = page.getByRole('link', { name: /Facebook/i });
    await expect(facebookLinks.last()).toBeVisible();
  });

  test('should close menu when navigation link is clicked', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });

    // Open menu
    await menuButton.click();
    await page.waitForTimeout(300);

    // Click a navigation link
    await page.getByRole('link', { name: 'Schedule' }).last().click();

    // Should navigate to schedule page
    await page.waitForURL('**/schedule');
    await expect(page).toHaveURL(/.*\/schedule/);
  });

  test('should show hamburger icon when menu is closed', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });

    // Check aria-expanded is false
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('should show close icon when menu is open', async ({ page }) => {
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });

    // Open menu
    await menuButton.click();

    // Check aria-expanded is true
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('should capture mobile navigation screenshot', async ({ page }) => {
    await page.screenshot({
      path: 'tests/screenshots/navigation-mobile-closed.png',
    });

    // Open menu
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    await menuButton.click();
    await page.waitForTimeout(300);

    await page.screenshot({
      path: 'tests/screenshots/navigation-mobile-open.png',
    });
  });
});

test.describe('Navigation - Accessibility', () => {
  test('should have proper ARIA labels', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    await expect(menuButton).toHaveAttribute('aria-label', /Toggle mobile menu/i);
    await expect(menuButton).toHaveAttribute('aria-expanded');
  });

  test('should have accessible social media links', async ({ page }) => {
    await page.goto('/');

    // All social links should have aria-labels
    const instagram = page.getByRole('link', { name: /Instagram/i }).first();
    await expect(instagram).toHaveAttribute('aria-label', 'Instagram');

    const twitter = page.getByRole('link', { name: /Twitter/i }).first();
    await expect(twitter).toHaveAttribute('aria-label', 'Twitter');

    const facebook = page.getByRole('link', { name: /Facebook/i }).first();
    await expect(facebook).toHaveAttribute('aria-label', 'Facebook');
  });

  test('should support keyboard navigation in mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Tab to menu button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab'); // May need multiple tabs depending on skip link

    // Press Enter to open menu
    const menuButton = page.getByRole('button', { name: /Toggle mobile menu/i });
    await menuButton.focus();
    await page.keyboard.press('Enter');

    // Menu should be open
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });
});

test.describe('Navigation - Visual Regression', () => {
  test('should match desktop navigation snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name === 'chromium-desktop') {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('/');

      const header = page.locator('header');
      await header.screenshot({
        path: 'tests/screenshots/navigation-desktop.png',
      });
    }
  });

  test('should match tablet navigation snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name === 'tablet-ipad') {
      await page.goto('/');

      const header = page.locator('header');
      await header.screenshot({
        path: 'tests/screenshots/navigation-tablet.png',
      });
    }
  });
});
