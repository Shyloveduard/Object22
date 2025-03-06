"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('has title', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    yield (0, test_1.expect)(page).toHaveTitle(/Playwright/);
}));
(0, test_1.test)('get started link', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto('https://playwright.dev/');
    // Click the get started link.
    yield page.getByRole('link', { name: 'Get started' }).click();
    // Expects page to have a heading with the name of Installation.
    yield (0, test_1.expect)(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}));
(0, test_1.test)("Wikkipedia Test 1 ", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    // 1. Відкриваємо головну сторінку української Вікіпедії
    yield page.goto('https://uk.wikipedia.org/wiki/Головна_сторінка');
    // 2. Перевіряємо, що заголовок "Вікіпедія" видимий
    yield (0, test_1.expect)(page.getByRole('heading', { name: 'Вікіпедія' })).toBeVisible();
    // 3. Перевіряємо, що є кнопка "Особисті інструменти"
    yield (0, test_1.expect)(page.getByRole('button', { name: 'Особисті інструменти' })).toBeVisible();
    // 4. Перевіряємо, що є посилання "Переглянути код"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Переглянути код' })).toBeVisible();
    // 5. Перевіряємо, що є посилання "Навігація"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Навігація' })).toBeVisible();
    // 6. Перевіряємо, що є поле пошуку
    yield (0, test_1.expect)(page.getByRole('searchbox')).toBeVisible();
    // 7. Перевіряємо, що є кнопка пошуку "Знайти"
    yield (0, test_1.expect)(page.getByRole('button', { name: 'Знайти' })).toBeVisible();
    // 8. Перевіряємо, що є посилання "Про Вікіпедію"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Про Вікіпедію' })).toBeVisible();
    // 9. Перевіряємо, що є посилання "Читати"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Читати', exact: true })).toBeVisible();
    // 10. Перевіряємо, що є посилання "Завантажити як PDF"
    yield page.getByRole('button', { name: 'Інструменти', exact: true }).click();
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Завантажити як PDF' })).toBeVisible();
}));
(0, test_1.test)("Github Test 2 ", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    // 1. Відкриваємо головну сторінку github
    yield page.goto('https://github.com');
    // 2. Видимість заголовка "Build and ship software on a single, collaborative platform".
    yield (0, test_1.expect)(page.getByRole('heading', { name: 'Build and ship software on a' })).toBeVisible();
    // 3. Кнопку "Sign up"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
    // 4. Кнопку "Sign in".
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
    // 5. Кнопку "Get up and running in seconds".
    yield (0, test_1.expect)(page.getByRole('button', { name: 'Get up and running in seconds' })).toBeVisible();
    // 6. Перевіряємо, що є поле Ebooks & Whitepapers
    yield page.getByRole('button', { name: 'Resources', exact: true }).click();
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Ebooks & Whitepapers' })).toBeVisible();
    // 7. Меню навігації (наприклад, "Explore")
    yield page.getByRole('button', { name: 'Product', exact: true }).click();
    yield (0, test_1.expect)(page.locator('#product-explore-heading')).toBeVisible();
    // 8. Посилання на "Partners"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Partners' })).toBeVisible();
    // 9. Посилання на "Support".
    yield (0, test_1.expect)(page.getByRole('heading', { name: 'Support', exact: true })).toBeVisible();
    // 10. Посилання на "Docs".
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Docs' })).toBeVisible();
}));
(0, test_1.test)("Playwright Site Test 3 ", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    // 1. Відкриваємо головну сторінку Playwright
    yield page.goto('https://playwright.dev/docs/intro');
    // 2. Перевіряємо наявність заголовка "Running and debugging tests"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Running and debugging tests' })).toBeVisible();
    // 3. Перевіряємо наявність заголовка 'Running the Example Test in'
    yield (0, test_1.expect)(page.getByRole('heading', { name: 'Running the Example Test in' })).toBeVisible();
    // 4. Перевіряємо наявність  Installing Playwright
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Installing Playwright', exact: true })).toBeVisible();
    // 5. Перевіряємо наявність посилання на "Mock APIs"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Mock APIs' })).toBeVisible();
    // 6. Перевіряємо наявність посилання на "GitHub"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'GitHub', exact: true })).toBeVisible();
    // 7. Кнопка  "How to open the HTML test"
    yield page.getByRole('link', { name: 'How to open the HTML test' }).click();
    // 8. Перевіряємо наявність кнопки "Install Playwright" на сторінці
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Installing Playwright', exact: true })).toBeVisible();
    // 9. Перевіряємо, чи є розділ з документацією "Introduction"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Introduction', exact: true })).toBeVisible();
    // 10. Перевіряємо нажимання кнопки на "Support"
    yield page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
}));
(0, test_1.test)("Stack Overflow Home Test 4 ", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    // 1. Відкриваємо головну сторінку Stack Overflow
    yield page.goto('https://stackoverflow.com');
    // 2. Перевіряємо, що логотип Stack Overflow є видимим (як зображення з alt-текстом)
    yield (0, test_1.expect)(page.getByRole('banner').getByRole('link', { name: 'Stack Overflow' })).toBeVisible();
    // 3. Перевіряємо наявність поля пошуку
    yield (0, test_1.expect)(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
    // 4. Перевіряємо наявність посилання "Questions"
    yield (0, test_1.expect)(page.getByLabel('Primary').getByRole('link', { name: 'Questions' })).toBeVisible();
    // 5. Перевіряємо наявність посилання "Tags"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Tags', exact: true })).toBeVisible();
    // 6. Перевіряємо наявність посилання "Users"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Users', exact: true })).toBeVisible();
    // 7. Перевіряємо наявність посилання "Technology"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Technology' })).toBeVisible();
    // 8. Перевіряємо наявність посилання "Collectives"
    yield (0, test_1.expect)(page.getByRole('button', { name: 'Collectives' })).toBeVisible();
    // 9. Перевіряємо, що кнопка "Log in" є видимою
    yield (0, test_1.expect)(page.getByRole('menuitem', { name: 'Log in' })).toBeVisible();
    // 10. Перевіряємо, що кнопка "Sign up" є видимою
    yield (0, test_1.expect)(page.getByRole('menuitem', { name: 'Sign up' })).toBeVisible();
}));
(0, test_1.test)("MDN Home Test 5 ", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    // 1. Відкриваємо головну сторінку MDN
    yield page.goto('https://developer.mozilla.org/');
    // 2. Перевіряємо, що заголовок "MDN homepage" є видимим
    yield (0, test_1.expect)(page.getByRole('banner').getByRole('link', { name: 'MDN homepage' })).toBeVisible();
    // 3. Перевіряємо наявність пошукового поля
    yield (0, test_1.expect)(page.locator('#hp-search-input')).toBeVisible();
    // 4. Перевіряємо, що є посилання "Learn Web Development"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Learn Web Development' })).toBeVisible();
    // 5. Перевіряємо, що є посилання "HTML"
    yield page.getByRole('link', { name: 'References' }).click();
    yield (0, test_1.expect)(page.getByRole('link', { name: 'HTML Structure of content on' })).toBeVisible();
    // 6. Перевіряємо, що є посилання "CSS"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'CSS Code used to describe' })).toBeVisible();
    // 7. Перевіряємо, що є посилання "JavaScript"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'JavaScript General-purpose' })).toBeVisible();
    // 8. Перевіряємо наявність кнопки "Log in"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Log in' })).toBeVisible();
    // 9. Перевіряємо наявність кнопки "Sign up for free"
    yield (0, test_1.expect)(page.getByRole('link', { name: 'Sign up for free' })).toBeVisible();
    // 10. Перевіряємо, що містить текст "Mozilla"
    yield (0, test_1.expect)(page.getByText(/Mozilla/).first()).toBeVisible();
}));
