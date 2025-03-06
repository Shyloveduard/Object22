import { test, expect } from '@playwright/test';
import exp from 'constants';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



test ("Wikkipedia Test 1 " , async ({page}) => {
  // 1. Відкриваємо головну сторінку української Вікіпедії
  await page.goto('https://uk.wikipedia.org/wiki/Головна_сторінка');

// 2. Перевіряємо, що заголовок "Вікіпедія" видимий
await expect(page.getByRole('heading', { name: 'Вікіпедія' })).toBeVisible();

// 3. Перевіряємо, що є кнопка "Особисті інструменти"
await expect(page.getByRole('button', { name: 'Особисті інструменти' })).toBeVisible();

// 4. Перевіряємо, що є посилання "Переглянути код"
await expect(page.getByRole('link', { name: 'Переглянути код' })).toBeVisible();

// 5. Перевіряємо, що є посилання "Навігація"
await expect(page.getByRole('link', { name: 'Навігація' })).toBeVisible();

// 6. Перевіряємо, що є поле пошуку
await expect(page.getByRole('searchbox')).toBeVisible();

// 7. Перевіряємо, що є кнопка пошуку "Знайти"
await expect(page.getByRole('button', { name: 'Знайти' })).toBeVisible();

// 8. Перевіряємо, що є посилання "Про Вікіпедію"
await expect(page.getByRole('link', { name: 'Про Вікіпедію' })).toBeVisible();

// 9. Перевіряємо, що є посилання "Читати"
await expect(page.getByRole('link', { name: 'Читати', exact: true })).toBeVisible();

// 10. Перевіряємо, що є посилання "Завантажити як PDF"
await page.getByRole('button', { name: 'Інструменти', exact: true }).click();
await expect(page.getByRole('link', { name: 'Завантажити як PDF' })).toBeVisible();
});


test ("Github Test 2 " , async ({page}) => {
  // 1. Відкриваємо головну сторінку github
  await page.goto('https://github.com');

// 2. Видимість заголовка "Build and ship software on a single, collaborative platform".
await expect(page.getByRole('heading', { name: 'Build and ship software on a' })).toBeVisible();

// 3. Кнопку "Sign up"
await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();

// 4. Кнопку "Sign in".
await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();

// 5. Кнопку "Get up and running in seconds".
await expect(page.getByRole('button', { name: 'Get up and running in seconds' })).toBeVisible();

// 6. Перевіряємо, що є поле Ebooks & Whitepapers
await page.getByRole('button', { name: 'Resources', exact: true }).click();
await expect(page.getByRole('link', { name: 'Ebooks & Whitepapers' })).toBeVisible();

// 7. Меню навігації (наприклад, "Explore")
await page.getByRole('button', {  name: 'Product' , exact: true }).click();
await expect(page.locator('#product-explore-heading')).toBeVisible();

// 8. Посилання на "Partners"
await expect(page.getByRole('link', { name: 'Partners' })).toBeVisible();

// 9. Посилання на "Support".
await expect(page.getByRole('heading', { name: 'Support', exact: true })).toBeVisible();

// 10. Посилання на "Docs".
await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
});




test("Playwright Site Test 3 ", async ({page}) => {
  // 1. Відкриваємо головну сторінку Playwright
  await page.goto('https://playwright.dev/docs/intro');

  // 2. Перевіряємо наявність заголовка "Running and debugging tests"
  await expect(page.getByRole('link', { name: 'Running and debugging tests' })).toBeVisible();

  // 3. Перевіряємо наявність заголовка 'Running the Example Test in'
  await expect(page.getByRole('heading', { name: 'Running the Example Test in' })).toBeVisible();

  // 4. Перевіряємо наявність  Installing Playwright
  await expect(page.getByRole('link', { name: 'Installing Playwright', exact: true })).toBeVisible();

  // 5. Перевіряємо наявність посилання на "Mock APIs"
  await expect(page.getByRole('link', { name: 'Mock APIs' })).toBeVisible();

  // 6. Перевіряємо наявність посилання на "GitHub"
  await expect(page.getByRole('link', { name: 'GitHub', exact: true })).toBeVisible();

  // 7. Кнопка  "How to open the HTML test"
  await page.getByRole('link', { name: 'How to open the HTML test' }).click();

  // 8. Перевіряємо наявність кнопки "Install Playwright" на сторінці
  await expect(page.getByRole('link', { name: 'Installing Playwright', exact: true })).toBeVisible();

  // 9. Перевіряємо, чи є розділ з документацією "Introduction"
  await expect(page.getByRole('link', { name: 'Introduction', exact: true })).toBeVisible();

  // 10. Перевіряємо нажимання кнопки на "Support"
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
});



test("Stack Overflow Home Test 4 ", async ({ page }) => {
  // 1. Відкриваємо головну сторінку Stack Overflow
  await page.goto('https://stackoverflow.com');

  // 2. Перевіряємо, що логотип Stack Overflow є видимим (як зображення з alt-текстом)
  await expect(page.getByRole('banner').getByRole('link', { name: 'Stack Overflow' })).toBeVisible();

  // 3. Перевіряємо наявність поля пошуку
  await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();

  // 4. Перевіряємо наявність посилання "Questions"
  await expect(page.getByLabel('Primary').getByRole('link', { name: 'Questions' })).toBeVisible();

  // 5. Перевіряємо наявність посилання "Tags"
  await expect(page.getByRole('link', { name: 'Tags', exact: true })).toBeVisible();

  // 6. Перевіряємо наявність посилання "Users"
  await expect(page.getByRole('link', { name: 'Users', exact: true })).toBeVisible();

  // 7. Перевіряємо наявність посилання "Technology"
  await expect(page.getByRole('link', { name: 'Technology' })).toBeVisible();

  // 8. Перевіряємо наявність посилання "Collectives"
  await expect(page.getByRole('button', { name: 'Collectives' })).toBeVisible();

  // 9. Перевіряємо, що кнопка "Log in" є видимою
  await expect(page.getByRole('menuitem', { name: 'Log in' })).toBeVisible();

  // 10. Перевіряємо, що кнопка "Sign up" є видимою
  await expect(page.getByRole('menuitem', { name: 'Sign up' })).toBeVisible();
});




test("MDN Home Test 5 ", async ({ page }) => {
  // 1. Відкриваємо головну сторінку MDN
  await page.goto('https://developer.mozilla.org/');

  // 2. Перевіряємо, що заголовок "MDN homepage" є видимим
  await expect(page.getByRole('banner').getByRole('link', { name: 'MDN homepage' })).toBeVisible();

  // 3. Перевіряємо наявність пошукового поля
  await expect(page.locator('#hp-search-input')).toBeVisible();

  // 4. Перевіряємо, що є посилання "Learn Web Development"
  await expect(page.getByRole('link', { name: 'Learn Web Development' })).toBeVisible();

  // 5. Перевіряємо, що є посилання "HTML"
  await page.getByRole('link', { name: 'References' }).click();
  await expect(page.getByRole('link', { name: 'HTML Structure of content on' })).toBeVisible();

  // 6. Перевіряємо, що є посилання "CSS"
 
  await expect(page.getByRole('link', { name: 'CSS Code used to describe' })).toBeVisible();

  // 7. Перевіряємо, що є посилання "JavaScript"
  await expect(page.getByRole('link', { name: 'JavaScript General-purpose' })).toBeVisible();

  // 8. Перевіряємо наявність кнопки "Log in"
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();

  // 9. Перевіряємо наявність кнопки "Sign up for free"
  await expect(page.getByRole('link', { name: 'Sign up for free' })).toBeVisible();

  // 10. Перевіряємо, що містить текст "Mozilla"
  await expect(page.getByText(/Mozilla/).first()).toBeVisible();
});
