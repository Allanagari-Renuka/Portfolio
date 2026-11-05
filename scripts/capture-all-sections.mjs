import { spawn } from 'child_process';
import { chromium } from 'playwright';
import path from 'path';

const PREVIEWS_DIR = path.resolve(process.cwd(), 'public/previews');

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status === 200 || res.status === 304) {
        return true;
      }
    } catch (_) {}
    await new Promise((r) => setTimeout(r, 600));
  }
  throw new Error(`Server did not start at ${url} within ${timeoutMs}ms`);
}

async function run() {
  const nextServer = spawn('npx', ['next', 'start', '-p', '3009', '-H', '127.0.0.1'], {
    shell: true,
  });

  try {
    await waitForServer('http://127.0.0.1:3009');
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();

    await page.goto('http://127.0.0.1:3009', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const sections = ['experience', 'projects', 'education', 'toolbox', 'certificates', 'contact'];
    for (const secId of sections) {
      const el = await page.$(`#${secId}`);
      if (el) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(600);
        await el.screenshot({ path: path.join(PREVIEWS_DIR, `${secId}.png`) });
        console.log(`Captured #${secId}`);
      }
    }

    await browser.close();
  } finally {
    spawn('taskkill', ['/pid', nextServer.pid.toString(), '/f', '/t'], { shell: true });
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
