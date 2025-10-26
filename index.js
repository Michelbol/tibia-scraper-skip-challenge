const puppeteer = require('puppeteer');

(async () => {
    // se quiser usar o Chromium empacotado pelo Puppeteer, não passe executablePath
    const browser = await puppeteer.launch({
        headless: 'new', // headless moderno
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--single-process',
            '--disable-background-networking',
            '--window-size=1280,800'
        ],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // navega e espera a rede ficar ociosa
    await page.goto('https://www.tibia.com', { waitUntil: 'networkidle2', timeout: 60000 });

    // exemplo: salvar screenshot
    await page.screenshot({ path: '/tmp/example.png', fullPage: true });

    // exemplo: obter título
    const title = await page.title();
    console.log('title:', title);

    await browser.close();
})();