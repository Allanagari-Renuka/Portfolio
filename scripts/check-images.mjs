import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const projectsFile = path.resolve(process.cwd(), 'src/data/projects.ts');
const projectsDir = path.resolve(process.cwd(), 'public/projects');

if (!fs.existsSync(projectsFile)) {
  console.error(`❌ Cannot find ${projectsFile}`);
  process.exit(1);
}

const fileContent = fs.readFileSync(projectsFile, 'utf8');
const idMatches = [...fileContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);

console.log(`Checking ${idMatches.length} projects against ${projectsDir}...\n`);

let hasError = false;
const seenHashes = new Map();
const MIN_SIZE_BYTES = 10 * 1024; // 10KB

for (const slug of idMatches) {
  const filePath = path.join(projectsDir, `${slug}.webp`);

  // Check 1: Existence
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing screenshot for project "${slug}" (expected at: ${filePath})`);
    hasError = true;
    continue;
  }

  // Check 2: Size > 10KB
  const stat = fs.statSync(filePath);
  if (stat.size < MIN_SIZE_BYTES) {
    console.error(`❌ Screenshot for "${slug}" is too small: ${stat.size} bytes (< 10KB requirement)`);
    hasError = true;
    continue;
  }

  // Check 3: Duplicate check via SHA-256
  const fileBuffer = fs.readFileSync(filePath);
  const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

  if (seenHashes.has(hash)) {
    console.error(`❌ Screenshot for "${slug}" is a duplicate of "${seenHashes.get(hash)}" (same sha256 hash)`);
    hasError = true;
  } else {
    seenHashes.set(hash, slug);
    console.log(`✓ [${slug}] - ${Math.round(stat.size / 1024)} KB - OK`);
  }
}

if (hasError) {
  console.error('\n❌ check:images FAILED.');
  process.exit(1);
} else {
  console.log(`\n✅ check:images PASSED! All ${idMatches.length} project images exist, are >10KB, and no duplicates.`);
}
