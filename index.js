const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

(async () => {
    // set up browser environment
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // navigate to a URL
    await page.goto('https://www.tibia.com', {
        waitUntil: 'load',
    });

    // take page screenshot
    await page.screenshot({ path: '/tmp/screenshot.png' });

    const title = await page.title();
    console.log('title:', title);

    // close the browser instance
    await browser.close();
})();