// Render BELVR ad HTML files to PNG using Playwright Chromium.
// Run with: PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers NODE_PATH=/opt/node22/lib/node_modules node render.js
const { chromium } = require('playwright');
const path = require('path');

const ads = [
  { file: 'v1-pain-hook.html',  out: 'v1-pain-hook.png',  width: 1080, height: 1350 },
  { file: 'v2-manifesto.html',  out: 'v2-manifesto.png',  width: 1080, height: 1350 },
  { file: 'v3-diagnosis.html',  out: 'v3-diagnosis.png',  width: 1080, height: 1920 },
];

(async () => {
  const browser = await chromium.launch();
  for (const ad of ads) {
    const ctx = await browser.newContext({
      viewport: { width: ad.width, height: ad.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    const url = 'file://' + path.resolve(__dirname, ad.file);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    });
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.resolve(__dirname, ad.out),
      clip: { x: 0, y: 0, width: ad.width, height: ad.height },
      type: 'png',
    });
    console.log('Rendered', ad.out);
    await ctx.close();
  }
  await browser.close();
})();
