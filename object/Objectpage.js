import { test } from "node:test"
import { chromium, expect } from "@playwright/test"
import assert from "node:assert"

export class LoginPage {

    constructor(page) {

        this.page = page       // Визначаємо правильні локатори для полів
        this.userlog = page.locator('input[placeholder="Username or Email"]') // Локатор для поля логіну
        this.userpass = page.locator('input[placeholder="Password"]') // Локатор для поля пароля
        this.loginbtn = page.locator('button[type="submit"]') // Локатор для кнопки входу
        this.acceptCookiesBtn = page.locator('text="ACCEPT ALL"') // кнопка Accept all у вспливаючому вікні про прийняття кукі

    }

    async open() {

        await this.page.goto("https://app.getgrass.io/");
        
    }

    async clickcookies(){
        await this.acceptCookiesBtn.click() 
    }

    async login(username , password) {
              
        await this.userlog.fill(username);            // Вводимо дані в поля
        await this.userpass.fill(password);
        
        await this.loginbtn.click();                         // Натискаємо кнопку входу
        
        await this.page.waitForURL('https://app.getgrass.io/dashboard/');         // Чекаємо, поки сторінка зміниться на dashboard
    }
}

test("perevirka vhody", async () => {
    let browser = await chromium.launch({ headless: false });
    let page = await browser.newPage();
    let loginpage1 = new LoginPage(page);

    await loginpage1.open()
    await loginpage1.clickcookies()
    await loginpage1.login("I_reloaded" , "Red2018_2018")

    await expect(page).toHaveURL('https://app.getgrass.io/dashboard4/');
})
