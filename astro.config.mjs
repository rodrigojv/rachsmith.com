import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), svelte(), sitemap()],
  site: 'https://rachsmith.com',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'material-lighter',
    },
  },
});
