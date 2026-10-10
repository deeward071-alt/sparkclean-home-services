import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = resolve('dist');
const routes = ['services', 'about', 'contact', 'privacy'];

for (const route of routes) {
  const directory = resolve(output, route);
  await mkdir(directory, { recursive: true });
  await copyFile(resolve(output, 'index.html'), resolve(directory, 'index.html'));
}
