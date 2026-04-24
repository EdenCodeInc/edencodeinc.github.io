#!/usr/bin/env node
/**
 * Prerender static HTML shells for each client-side route.
 *
 * The site is an SPA. GitHub Pages otherwise returns HTTP 404 for any deep
 * link (e.g. /blog-graph-transformer), which (a) breaks OG preview fetchers
 * like LinkedIn / Twitter / Slack, and (b) forces users through the 404.html
 * sessionStorage redirect dance.
 *
 * This script copies the Vite-built index.html into per-route folders and
 * injects per-route <title> + Open Graph / Twitter Card meta so previews
 * render nicely when these URLs are shared.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const BUILD_DIR = path.join(ROOT, 'build');
const BASE_URL = 'https://www.edencode.ai';

/** @type {Record<string, { title: string; description: string; image: string; type?: string }>} */
const routes = {
  '/blogs': {
    title: 'System Log — EdenCode Research',
    description:
      "EdenCode's research blog on AI-powered quantum error correction, decoder architectures, and the path to fault-tolerant quantum computing.",
    image: '/favicon.png',
  },
  '/blog-graph-transformer': {
    title:
      'One Decoder for Every Quantum Code: EdenCode Releases the Graph Transformer Decoder',
    description:
      "EdenCode's first foundational model for quantum error correction. One neural network decodes surface codes across all distances with a 9.0% error threshold, following a neural scaling law (LER ∝ N⁻⁰·⁴³).",
    image: '/fig-gt-scaling.png',
    type: 'article',
  },
  '/blog-nvidia-ising': {
    title:
      'Scaling AI-Powered Quantum Error Correction with NVIDIA Ising and GPU Compute',
    description:
      "EdenCode extended NVIDIA Ising's 3D CNN pre-decoders, originally designed for the surface code, to operate on general Tanner graphs — showing the same model family can decode across arbitrary QEC codes.",
    image: '/fig-nvidia-ising-ecosystem.jpg',
    type: 'article',
  },
  '/blog-llm-accuracy': {
    title: 'How Focused Are LLMs? — EdenCode Research',
    description:
      'EdenCode research on large language model accuracy and focus.',
    image: '/favicon.png',
    type: 'article',
  },
  '/blog-ai-quantum-error-correction': {
    title: 'AI for Quantum Error Correction — EdenCode Research',
    description:
      'An introduction to AI-powered quantum error correction and the role of neural decoders in fault-tolerant quantum computing.',
    image: '/favicon.png',
    type: 'article',
  },
  '/careers': {
    title: 'Careers — EdenCode',
    description:
      "Join EdenCode. We are hiring across research and engineering to build real-time AI decoders for fault-tolerant quantum computing.",
    image: '/favicon.png',
  },
};

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildHead(route, meta) {
  const url = `${BASE_URL}${route}`;
  const image = `${BASE_URL}${meta.image}`;
  const type = meta.type ?? 'website';
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  return `<title>${title}</title>
      <meta name="description" content="${description}" />
      <link rel="canonical" href="${url}" />
      <meta property="og:type" content="${type}" />
      <meta property="og:url" content="${url}" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${image}" />
      <meta property="og:site_name" content="EdenCode" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${description}" />
      <meta name="twitter:image" content="${image}" />`;
}

const indexPath = path.join(BUILD_DIR, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error(
    `prerender: build/index.html not found — run \`vite build\` first.`,
  );
  process.exit(1);
}
const indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Sanity-check that the source has exactly one <title> we can swap.
if (!/<title>[\s\S]*?<\/title>/.test(indexHtml)) {
  console.error('prerender: no <title> tag found in build/index.html');
  process.exit(1);
}

let written = 0;
for (const [route, meta] of Object.entries(routes)) {
  const head = buildHead(route, meta);
  const html = indexHtml.replace(/<title>[\s\S]*?<\/title>/, head);
  const routeName = route.replace(/^\//, '');

  // 1. Flat file at build/<route>.html — lets GitHub Pages serve /<route>
  //    directly with HTTP 200 (no 301 to trailing slash). This keeps the
  //    URL the user shared stable and avoids a redirect hop that breaks
  //    some OG fetchers and strips query strings.
  const flatPath = path.join(BUILD_DIR, `${routeName}.html`);
  fs.writeFileSync(flatPath, html, 'utf-8');

  // 2. Also write build/<route>/index.html so /<route>/ (trailing slash)
  //    works too, e.g. when links get normalized by clients.
  const subDir = path.join(BUILD_DIR, routeName);
  fs.mkdirSync(subDir, { recursive: true });
  const subPath = path.join(subDir, 'index.html');
  fs.writeFileSync(subPath, html, 'utf-8');

  console.log(
    `prerender: ${route} → ${path.relative(ROOT, flatPath)} + ${path.relative(ROOT, subPath)}`,
  );
  written += 1;
}

console.log(`prerender: wrote ${written} route shells with per-page OG meta.`);
