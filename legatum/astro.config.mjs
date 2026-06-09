// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://legatum-internacional.com',
  integrations: [mdx()],
  adapter: cloudflare(),
});