import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import react from "@astrojs/react";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  
  site: 'https://dustin1q.github.io',
  base: '/',
  integrations: [react({
    experimentalReactChildren: true
  }), tunnel()],
  renderers: ['@astrojs/renderer-react'],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
  }
});