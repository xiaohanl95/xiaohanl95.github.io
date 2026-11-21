import { mkdir, readFile, writeFile, cp, readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve('dist/client');
const origin = 'https://xiaohanl95.github.io';
const routes = ['', 'research', 'approach', 'publications', 'about', 'cv', 'cv-settings'];
for (const route of routes) {
  const input = path.join(output, route ? `${route}.html` : 'index.html');
  let html = await readFile(input, 'utf8');
  // Plain links use directory URLs, which work on any static web host.
  html = html.replace(/href="\/(research|approach|publications|about|cv|cv-settings)(#[^"]*)?"/g, (_, slug, hash = '') => `href="/${slug}/${hash}"`);
  html = html.replace('</head>', `<link rel="canonical" href="${origin}/${route ? route + '/' : ''}"/></head>`);
  if (html.includes('chatgpt.site')) throw new Error(`Previous host remains in ${route || '/'}`);
  const dir = path.join(output, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), html);
  if (route) await writeFile(input, html);
}
await writeFile(path.join(output, '.nojekyll'), '');
// Keep the original Jekyll CV URL working for bookmarks and older links.
await cp(path.join(output, 'files/Xiaohan-Li-CV.pdf'), path.join(output, 'CV_XL_web.pdf'));
console.log('GitHub Pages export ready: all seven routes, assets, fonts, and CV.');
