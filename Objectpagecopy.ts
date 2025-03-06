import { expect, type Locator, type Page } from '@playwright/test';

export class GetGrassPage {
  readonly page: Page;
  readonly getUserlog: Locator;
  readonly getUserpass: Locator;
  readonly ClickOnbtn: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.getUserlog = page.locator('input[placeholder="Username or Email"]');
    this.getUserpass = page.locator('input[placeholder="Password"]');
    this.ClickOnbtn = page.locator('button[type="submit"]')
  }

  async goto() {
    await this.page.goto("https://app.getgrass.io/");
    await this.page.waitForSelector('input[placeholder="Username or Email"]');// чекаємо запуск форми
  }

  async getStarted(username, password) {
    await this.getUserlog.fill(username);
    await this.getUserpass.fill(password);
    await this.ClickOnbtn.click();
    await this.page.waitForURL('https://app.getgrass.io/dashboard/');
  }
}
