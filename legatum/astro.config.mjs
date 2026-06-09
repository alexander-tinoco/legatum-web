// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig, sessionDrivers } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://legatum-internacional.com',
  output: 'static',
  integrations: [mdx()],
  adapter: cloudflare({
    // Optimiza las imágenes en build (estáticas), no en runtime vía /_image.
    imageService: 'compile',
  }),
  // El sitio no usa sesiones. Driver en memoria para evitar que el adapter
  // exija un KV namespace "SESSION" (que rompía el deploy con el provisioning).
  session: {
    driver: sessionDrivers.memory(),
  },
});
