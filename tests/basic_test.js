const { webkit } = require('playwright'); // ['firefox', 'webkit', 'chromium']

(async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({ path: `./screenshots/googleHomePage.png` });
  await browser.close();
})();
