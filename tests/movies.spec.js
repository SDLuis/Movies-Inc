// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:5173')
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Movies Inc/);
});

test('Home return movies', async ({ page }) => {
  const FIRST_ITEM = page.locator('.nowPlayingMovie').first()
  await expect(FIRST_ITEM).toBeVisible()
});

test('Movie has details', async ({ page }) => {
  const FIRST_ITEM = page.locator('.nowPlayingMovie').first()
  await FIRST_ITEM.click()
  await expect(page.locator(".movieTitle")).toBeVisible()
  await expect(page.locator(".movieDescription")).toBeVisible()
  await expect(page.locator(".movieGenre").first()).toBeVisible()
  await expect(page.locator(".movieCast").first()).toBeVisible()
});

test('Movie has similar movies', async ({ page }) => {
  const FIRST_ITEM = page.locator('.nowPlayingMovie').first()
  await FIRST_ITEM.click()
  await expect(page.locator(".movie").first()).toBeVisible()
});

test('Rating movie', async ({ page }) => {
  const FIRST_ITEM = page.locator('.nowPlayingMovie').nth(8)
  await FIRST_ITEM.click()
  await page.locator('.rate').first().click();
  await expect(page.getByRole('status')).toContainText('uccess')
});

test('Adding, validating and removing movie from favorites', async ({ page }) => {
  const FIRST_ITEM = page.locator('.nowPlayingMovie').first()
  await FIRST_ITEM.click()
  const text = await page.locator('.movieTitle').first().textContent() || ''

  await page.locator('.favorite').click();
  await expect(page.getByRole('status').first()).toContainText('Agregado a tus favoritas')

  await page.locator('div').filter({ hasText: 'Movies Inc' }).getByRole('link').nth(1).click();
  await expect(page.locator(".movieTitle")).toHaveText(text)

  await page.locator(".movie").last().click()
  await page.locator('.favorite').click();
  await expect(page.getByRole('status').first()).toContainText('Eliminada de tus favoritas')
});