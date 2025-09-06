const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch({
        headless: true, // pode trocar para false pra ver o navegador abrir
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();

    await page.goto('https://www.tibia.com/community/?subtopic=guilds&page=view&GuildName=Quelibraland', {
        waitUntil: 'networkidle2',
        timeout: 60000 // aumenta o timeout (60s)
    });

    const html = await page.content();
    console.log(html);

    await browser.close();
})();