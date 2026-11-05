import { chromium } from 'playwright';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const TARGETS = [
  {
    slug: 'thyroid-diagnosis',
    url: 'https://diagnosis-of-a-thyroid-using-cnn-and-rnn-f7ku.onrender.com/',
  },
  {
    slug: 'sign-language',
    url: 'https://sign-language-recognition-1-ncse.onrender.com',
  },
  {
    slug: 'user-management',
    url: 'https://user-management-system-3-72hk.onrender.com/',
  },
  {
    slug: 'viz-dashboard',
    url: 'https://visualization-dashboard-2-p2tc.onrender.com/',
  },
];

const OUT_DIR = path.resolve(process.cwd(), 'public/projects');

async function capture() {
  console.log('Launching browser to capture awake Render apps...');
  const browser = await chromium.launch({ headless: true });

  for (const t of TARGETS) {
    const { slug, url } = t;
    const outPath = path.join(OUT_DIR, `${slug}.webp`);
    console.log(`\nNavigating to ${slug} (${url})...`);

    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForTimeout(4000); // Wait for client UI / React hydration

      const buffer = await page.screenshot({ type: 'png' });
      await sharp(buffer)
        .resize({ width: 1600 })
        .webp({ quality: 85 })
        .toFile(outPath);

      const stat = fs.statSync(outPath);
      console.log(`✓ Saved real screenshot for ${slug} (${Math.round(stat.size / 1024)} KB)`);
    } catch (e) {
      console.error(`Error capturing ${slug}:`, e.message);
    } finally {
      await context.close();
    }
  }

  await browser.close();
  console.log('\nFinished recapturing Render apps!');
}

capture().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
