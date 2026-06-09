// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://legatum-internacional.com',
  integrations: [mdx()],
});
