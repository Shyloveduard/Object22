    import { test, expect } from '@playwright/test';
import { GetGrassPage } from './object/Objectpagecopy.ts'; // Імпортуємо Page Object

test('login to GetGrass', async ({ page }) => {
 
  const getGrassPage = new GetGrassPage(page);

  // 2. Відкриваємо головну сторінку GetGrass
  await getGrassPage.goto();

  // 3. Логуємось на сайт
  let username = 'I_reloaded'; // Замінити на реальний логін
let password = 'Red2018_2018'; // Замінити на реальний пароль
  await getGrassPage.getStarted(username, password);

  // 4. Перевіряємо, що після входу URL змінився на dashboard
  await expect(page).toHaveURL('https://app.getgrass.io/dashboard/');

});
