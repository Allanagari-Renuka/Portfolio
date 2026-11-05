import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';

async function run() {
  console.log('Starting AI background removal using @imgly/background-removal-node...');
  const inputPath = path.resolve('public/passport.jpg');
  const outputPath = path.resolve('public/renuka-cutout.png');

  const fileData = fs.readFileSync(inputPath);
  const blob = new Blob([fileData], { type: 'image/jpeg' });

  console.log('Processing segmentation with neural network...');
  const resultBlob = await removeBackground(blob, {
    output: {
      format: 'image/png',
      quality: 1.0,
    },
  });

  const arrayBuffer = await resultBlob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(outputPath, buffer);

  console.log(`Saved clean alpha cutout to ${outputPath} (${buffer.length} bytes)`);
}

run().catch((err) => {
  console.error('Error running @imgly/background-removal-node:', err);
  process.exit(1);
});
