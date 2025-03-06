import { chromium, expect } from "@playwright/test";

class LoginPage {
    constructor(page) {
        this.page = page;
        this.userlog = page.locator('input[placeholder="Username or Email"]');
        this.userpass = page.locator('input[placeholder="Password"]');
        this.loginbtn = page.locator('button[type="submit"]');
    }

    async open() {
        await this.page.goto("https://app.getgrass.io/");
    }

    async login(username, password) {
        await this.userlog.fill(username);
        await this.userpass.fill(password);
        await this.loginbtn.click();
        await this.page.waitForURL('https://app.getgrass.io/dashboard/');
    }
}

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login("I_reloaded", "Red2018_2018");

    console.log("Тест пройден!");
    await browser.close();
})();