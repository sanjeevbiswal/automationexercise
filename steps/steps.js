const { Given, When, Then, Before, After, setDefaultTimeout,Status} = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');


let browser, page;
// Set global timeout to 20 seconds
setDefaultTimeout(30 * 1000);


Given('I navigate to the website {string}', async function (string) {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
});


When('I enter the username {string}', async function (string) {

    await this.page.getByRole('textbox', { name: 'Username' }).fill('student');
});



When('I enter the password {string}', async function (string) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill('Password123');
});




When('I click the submit button', async function () {
    await this.page.getByRole('button', { name: 'Submit' }).click();
});



Then('I should see login success message', async function () {
    await expect(this.page.getByRole('heading')).toContainText('Logged In Successfully');
});


Then('I click the logout button', async function () {
    await this.page.getByRole('link', { name: 'Log out' }).click();
});


Then('I should see the login page again', async function () {
    await expect(this.page.locator('h2')).toContainText('Test login');
});