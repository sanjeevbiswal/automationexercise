const { Given, When, Then, Before, After, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

let browser, page;
// Set global timeout to 20 seconds
setDefaultTimeout(30 * 1000);

Before(async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    this.page = page;
});


After(async function ({ result, pickle }) {
    // Check if the scenario failed
    if (result?.status === Status.FAILED) {
        // Take the screenshot
        const image = await page.screenshot({
            path: `./test-results/screenshots/${pickle.name}.png`,
            type: 'png'
        });

        // Use Cucumber's 'this.attach' to embed it into the report
        await this.attach(image, 'image/png');
    }
    await browser.close();
});