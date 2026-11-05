import { spawn } from 'child_process';
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const PREVIEWS_DIR = path.resolve(process.cwd(), 'public/previews');
if (!fs.existsSync(PREVIEWS_DIR)) {
  fs.mkdirSync(PREVIEWS_DIR, { recursive: true });
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status === 200 || res.status === 304) {
        console.log(`Server responded at ${url}`);
        return true;
      }
    } catch (e) {
      // console.log('Waiting...', e.message);
    }
    await new Promise((r) => setTimeout(r, 600));
  }
  throw new Error(`Server did not start at ${url} within ${timeoutMs}ms`);
}

async function run() {
  console.log('Starting Next.js production server on port 3009...');
  const nextServer = spawn('npx', ['next', 'start', '-p', '3009', '-H', '127.0.0.1'], {
    shell: true,
    stdio: 'inherit',
  });

  try {
    await waitForServer('http://127.0.0.1:3009');

    console.log('Launching Playwright browser...');
    const browser = await chromium.launch({ headless: true });

    // 1. Desktop Screenshot (1440px)
    console.log('Capturing Desktop preview (1440px)...');
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    });
    const desktopPage = await desktopContext.newPage();
    await desktopPage.goto('http://127.0.0.1:3009', { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(2000);

    const desktopPath = path.join(PREVIEWS_DIR, 'desktop.png');
    await desktopPage.screenshot({
      path: desktopPath,
      fullPage: false,
    });
    console.log(`Saved desktop preview to ${desktopPath}`);
    await desktopContext.close();

    // 2. Mobile Screenshot (390px)
    console.log('Capturing Mobile preview (390px)...');
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto('http://127.0.0.1:3009', { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(2000);

    const mobilePath = path.join(PREVIEWS_DIR, 'mobile.png');
    await mobilePage.screenshot({
      path: mobilePath,
      fullPage: false,
    });
    console.log(`Saved mobile preview to ${mobilePath}`);
    await mobileContext.close();

    await browser.close();
    console.log('Preview capture completed successfully!');
  } finally {
    console.log('Terminating Next.js server...');
    if (process.platform === 'win32') {
      spawn('taskkill', ['/pid', nextServer.pid.toString(), '/f', '/t'], { shell: true });
    } else {
      nextServer.kill('SIGINT');
    }
  }
}

run().catch((err) => {
  console.error('Failed to capture previews:', err);
  process.exit(1);
});
