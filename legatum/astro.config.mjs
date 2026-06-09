// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig, fontProviders, sessionDrivers } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://legatum-internacional.com',
  output: 'static',
  // Inlinea el CSS para sacarlo de la ruta crítica de render (no más request bloqueante).
  build: { inlineStylesheets: 'always' },
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
  // Fonts API: self-host + preload + fallbacks con métricas ajustadas (CLS ~0).
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-serif',
      weights: [500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Jost',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Avenir Next', 'Segoe UI', 'system-ui', 'sans-serif'],
    },
  ],
});
