import { test } from "node:test"
import { chromium, expect} from "@playwright/test"
import assert from "node:assert"

export class LoginPage {
    constructor(page) {
        this.page = page
       
        // Визначаємо правильні локатори для полів
        this.userlog = page.locator('placeholder="Username or Email"') // Локатор для поля логіну
        this.userpass = page.locator('placeholder="Password"') // Локатор для поля пароля
        this.loginbtn = page.locator('type="submit"') // Локатор для кнопки входу
        this.acceptCookiesBtn = page.locator('button', { name: 'ACCEPT ALL' }) // кнопка Accept all у вспливаючому вікні про прийняття кукі

    }
    
    async goto() {
            
        await this.page.goto("https://app.getgrass.io/");
     
        
     // Дочекаємося появи полів для вводу

     let cookiealert = await this.acceptCookiesBtn.isVisible(); // перевірка на те чи зьявилася кнопка Accept All
     if (cookiealert) {
         await this.acceptCookiesBtn.click();
     }
        await this.page.waitForSelector('input[name="login"]')
        await this.page.waitForSelector('input[name="password"]')
    }

    async login(userlog, userpass) {
        // Вводимо дані в поля
        await this.userlog.fill(userlog);
        await this.userpass.fill(userpass);

        // Натискаємо кнопку входу
        await this.loginbtn.click();

        // Чекаємо, поки сторінка зміниться на dashboard
        await this.page.waitForURL('https://app.getgrass.io/dashboard/');
    }
}

test("perevirka vhody", async () => {
    let browser = await chromium.launch({ headless: false })
    let page = await browser.newPage()
    let loginpage1 = new LoginPage(page)
    await loginpage1.goto()
    await loginpage1.login("I_reloaded", "Red2018_2018")
    await expect(page).toHaveURL('https://app.getgrass.io/dashboard/');
})
