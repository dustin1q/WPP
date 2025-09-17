import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://dustin1q.github.io',
  base: '/',
  integrations: [
    react()
  ],
  markdown: {
    remarkPlugins: [remarkToc],
  },
});