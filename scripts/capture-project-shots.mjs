import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PROJECTS = [
  {
    slug: 'boundless-horizons',
    title: 'Boundless Horizons — Traveller Blog',
    url: 'https://traveller-blog-kd3q.vercel.app/',
  },
  {
    slug: 'user-management',
    title: 'User Management System',
    url: 'https://user-management-system-3-72hk.onrender.com/',
  },
  {
    slug: 'tiny-short',
    title: 'Tiny-Short URL Generator',
    url: 'https://tiny-short-url-m7fb.vercel.app/',
  },
  {
    slug: 'pokedex-lite',
    title: 'Pokedex-Lite Encyclopaedia',
    url: 'https://pokedex-lite-livid.vercel.app/',
  },
  {
    slug: 'recipe-showcase',
    title: 'Restaurant Recipe & Menu Showcase',
    url: 'https://recipie-gold.vercel.app/',
  },
  {
    slug: 'viz-dashboard',
    title: 'Multi-Dimensional Visualization Dashboard',
    url: 'https://visualization-dashboard-2-p2tc.onrender.com/',
  },
  {
    slug: 'core-careers',
    title: 'Core Careers Platform',
    url: 'https://corecareers.in/',
  },
  {
    slug: 'thyroid-diagnosis',
    title: 'Diagnosis of a Thyroid Disease Using CNN & RNN',
    url: 'https://diagnosis-of-a-thyroid-using-cnn-and-rnn-f7ku.onrender.com/',
  },
  {
    slug: 'sign-language',
    title: 'Real-Time Sign Language Recognition System',
    url: 'https://sign-language-recognition-1-ncse.onrender.com',
  },
  {
    slug: 'landvista',
    title: 'Landvista Spatial Prototype & Design System',
    url: 'https://swirl-false-18170787.figma.site/',
  },
  {
    slug: 'skipp',
    title: 'Skipp — Food Pre-Order & Kitchen System',
    url: 'https://play.google.com/store/apps/details?id=com.skipp.customer',
    fallbackUrl: 'https://play.google.com/store/apps/details?id=com.corecareers.skipp',
  },
];

const OUT_DIR = path.resolve(process.cwd(), 'public/projects');
const SKIPP_DIR = path.resolve(OUT_DIR, 'skipp');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}
if (!fs.existsSync(SKIPP_DIR)) {
  fs.mkdirSync(SKIPP_DIR, { recursive: true });
}

async function createNeutralPlaceholder(slug, title, url, reason) {
  const svg = `
  <svg width="1600" height="1000" viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#151922"/>
        <stop offset="50%" stop-color="#1E2330"/>
        <stop offset="100%" stop-color="#0F1115"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FF5733"/>
        <stop offset="100%" stop-color="#FF7A59"/>
      </linearGradient>
    </defs>
    <rect width="1600" height="1000" fill="url(#bg)"/>
    <circle cx="800" cy="500" r="400" fill="#FF5733" opacity="0.06"/>
    
    <!-- Browser chrome bar representation -->
    <rect x="0" y="0" width="1600" height="60" fill="#0E1015"/>
    <circle cx="36" cy="30" r="8" fill="#FF5F56"/>
    <circle cx="64" cy="30" r="8" fill="#FFBD2E"/>
    <circle cx="92" cy="30" r="8" fill="#27C93F"/>
    
    <rect x="140" y="14" width="600" height="32" rx="6" fill="#1C212D"/>
    <text x="160" y="35" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#8892B0">${url.replace('https://', '')}</text>

    <!-- Center content -->
    <text x="800" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="bold" fill="#F8FAFC" text-anchor="middle">${title}</text>
    <text x="800" y="480" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#94A3B8" text-anchor="middle">Live Deployed System · ${url}</text>
    <rect x="700" y="520" width="200" height="4" rx="2" fill="url(#accent)"/>
    <text x="800" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#64748B" text-anchor="middle">${reason}</text>
  </svg>`;

  const outPath = path.join(OUT_DIR, `${slug}.webp`);
  await sharp(Buffer.from(svg))
    .webp({ quality: 82 })
    .toFile(outPath);
  console.log(`[Created Placeholder] ${slug}.webp (${outPath})`);
}

async function captureAll() {
  console.log('Launching browser...');
  const browser = await chromium.launch({
    headless: true,
  });

  const results = [];

  for (const proj of PROJECTS) {
    const { slug, title, url } = proj;
    const outPath = path.join(OUT_DIR, `${slug}.webp`);
    console.log(`\n========================================`);
    console.log(`Capturing: ${slug} (${url})`);

    let success = false;
    let lastError = null;

    for (let attempt = 1; attempt <= 3; attempt++) {
      console.log(` Attempt ${attempt}/3...`);
      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 1,
      });
      const page = await context.newPage();

      try {
        // Render apps can take up to 60s to wake up
        const targetUrl = attempt > 1 && proj.fallbackUrl ? proj.fallbackUrl : url;
        const response = await page.goto(targetUrl, {
          waitUntil: 'networkidle',
          timeout: 60000,
        });

        // Wait for document fonts if supported
        try {
          await page.evaluate(async () => {
            if (document.fonts && document.fonts.ready) {
              await document.fonts.ready;
            }
          });
        } catch (_) {}

        // Small wait for client-side hydration & transitions
        await page.waitForTimeout(2500);

        // Take 1440x900 screenshot
        const screenshotBuffer = await page.screenshot({
          fullPage: false,
          type: 'png',
        });

        // Convert to WebP 1600px width with quality 82
        await sharp(screenshotBuffer)
          .resize({ width: 1600 })
          .webp({ quality: 82 })
          .toFile(outPath);

        const stats = fs.statSync(outPath);
        console.log(` Successfully saved ${slug}.webp (${Math.round(stats.size / 1024)} KB)`);

        // If Skipp, check if we can save any Play Store screenshots
        if (slug === 'skipp') {
          try {
            const imgUrls = await page.$$eval('img[alt*="Screenshot"], img[src*="play-lh"]', (imgs) =>
              imgs.map((img) => img.src).filter(Boolean)
            );
            console.log(` Found ${imgUrls.length} Play Store screenshots for Skipp`);
            for (let i = 0; i < Math.min(imgUrls.length, 4); i++) {
              const shotPage = await context.newPage();
              const imgRes = await shotPage.goto(imgUrls[i]);
              if (imgRes && imgRes.ok()) {
                const imgBuf = await imgRes.body();
                const shotPath = path.join(SKIPP_DIR, `screenshot-${i + 1}.webp`);
                await sharp(imgBuf).webp({ quality: 82 }).toFile(shotPath);
                console.log(` Saved Skipp screenshot to ${shotPath}`);
              }
              await shotPage.close();
            }
          } catch (err) {
            console.log(' Could not extract individual Play Store screenshots:', err.message);
          }
        }

        success = true;
        results.push({ slug, status: 'SUCCESS', sizeKb: Math.round(stats.size / 1024), url });
        await context.close();
        break;
      } catch (err) {
        lastError = err.message;
        console.log(` Attempt ${attempt} failed: ${lastError}`);
        // If we got an error page or cold-start page rendered, attempt to capture it on last attempt
        if (attempt === 3) {
          try {
            console.log(' Capturing Render cold-start or HTTP error page...');
            const screenshotBuffer = await page.screenshot({ fullPage: false, type: 'png' });
            await sharp(screenshotBuffer)
              .resize({ width: 1600 })
              .webp({ quality: 82 })
              .toFile(outPath);
            const stats = fs.statSync(outPath);
            if (stats.size > 10240) {
              console.log(` Saved error/cold-start state for ${slug}.webp (${Math.round(stats.size / 1024)} KB)`);
              success = true;
              results.push({ slug, status: 'ERROR_PAGE_CAPTURED', sizeKb: Math.round(stats.size / 1024), url, error: lastError });
            }
          } catch (shotErr) {
            console.log(' Could not capture error page:', shotErr.message);
          }
        }
        await context.close();
      }
    }

    if (!success) {
      console.log(` Creating neutral placeholder for ${slug}...`);
      await createNeutralPlaceholder(slug, title, url, `Live deployment capture timed out: ${lastError}`);
      const stats = fs.statSync(outPath);
      results.push({ slug, status: 'PLACEHOLDER', sizeKb: Math.round(stats.size / 1024), url, error: lastError });
    }
  }

  await browser.close();
  console.log('\n================ SUMMARY ================');
  console.table(results);
}

captureAll().catch((err) => {
  console.error('Fatal capture error:', err);
  process.exit(1);
});
