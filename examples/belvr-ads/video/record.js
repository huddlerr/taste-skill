// Frame-by-frame deterministic render of spot.html.
// Pauses CSS animations and steps Animation.currentTime so the screenshot
// at each frame is reproducible. Outputs frames to /tmp/belvr-frames/.
//
// Run: PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers NODE_PATH=/opt/node22/lib/node_modules node record.js
//
// Then encode with ffmpeg (see encode.sh).

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const WIDTH = 1080;
const HEIGHT = 1920;
const FPS = 30;
const DURATION_MS = 28500;        // matches end of s8-mark animation
const TOTAL_FRAMES = Math.round((DURATION_MS / 1000) * FPS);
const FRAMES_DIR = '/tmp/belvr-frames';

(async () => {
  if (fs.existsSync(FRAMES_DIR)) fs.rmSync(FRAMES_DIR, { recursive: true, force: true });
  fs.mkdirSync(FRAMES_DIR, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  const url = 'file://' + path.resolve(__dirname, 'spot.html');
  await page.goto(url, { waitUntil: 'networkidle' });

  // Wait for fonts and ensure animations exist
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
  });
  await page.waitForTimeout(800);

  // Pause every animation so we can scrub manually
  await page.evaluate(() => {
    document.getAnimations().forEach(a => a.pause());
  });

  const t0 = Date.now();
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const ms = (i / FPS) * 1000;
    await page.evaluate((t) => {
      document.getAnimations().forEach(a => { a.currentTime = t; });
    }, ms);
    const filename = `frame-${String(i).padStart(4, '0')}.jpg`;
    await page.screenshot({
      path: path.join(FRAMES_DIR, filename),
      type: 'jpeg',
      quality: 92,
      clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
    });
    if (i % 50 === 0) {
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      process.stdout.write(`frame ${i}/${TOTAL_FRAMES}  (${elapsed}s elapsed)\n`);
    }
  }

  await ctx.close();
  await browser.close();
  console.log(`Done. ${TOTAL_FRAMES} frames in ${FRAMES_DIR}`);
})();
