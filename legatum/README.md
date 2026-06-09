# LEGATUM INTERNACIONAL

Sitio corporativo premium construido con Astro para movilidad global, asesoría migratoria, visas y procesos internacionales.

## Arquitectura

El contenido editable vive en `src/data/site.ts`.
Las secciones del home viven en `src/sections`.
Los componentes reutilizables viven en `src/components`.
SEO técnico y schema viven en `src/components/SEO.astro` y `src/seo/schema.ts`.

## Comandos

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
