import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    experimentalReactChildren: true,
  })],
  renderers: ['@astrojs/renderer-react'],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAccessibleEmojis]
  }
});