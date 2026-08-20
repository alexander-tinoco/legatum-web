// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://www.legatum-internacional.com',
  // Sitio 100% estático (sin adapter): el formulario se envía desde el cliente.
  // Inlinea el CSS para sacarlo de la ruta crítica de render.
  build: { inlineStylesheets: 'always' },
  integrations: [mdx()],
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
