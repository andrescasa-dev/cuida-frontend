import { test, expect } from '@playwright/test';

test('proper hero section', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toContainText('Transforma vidas animales');
  await expect(page.getByRole('link', { name: 'Descubre' })).toBeVisible();
  await expect(
    page.getByText(
      'Personas Aportando140+Personas Aportando140+Personas Aportando140+Personas',
    ),
  ).toBeVisible();
});
