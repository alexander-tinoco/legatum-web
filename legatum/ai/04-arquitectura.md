# 04 · Arquitectura del Sitio

> La arquitectura técnica es **excelente y no necesita rehacerse**. Recomendaciones de ajuste, no de reconstrucción.

---

## Lo que ya está bien (mantener)

`/servicios/[slug]`, `/blog/[slug]`, schema centralizado (`src/seo/schema.ts`), sitemap dinámico, Core Web Vitals óptimos (CSS inlined, fuentes self-hosted, CLS ~0). **Esto es patrimonio; no tocar.**

---

## Brechas de arquitectura de CONVERSIÓN (no de SEO)

- **Falta una capa de landings de campaña** separada de las páginas SEO. Una landing para Google Ads debe tener **un solo CTA, sin navbar distractor, sin enlaces de salida**. La página de servicio actual es buena para SEO pero "fuga" tráfico pagado hacia el menú. → Crear variantes `/lp/visa-americana/` para Ads.
- **Hub local ausente:** crear `/cobertura/` o patrón `/visa-americana/[ciudad]/` escalable, con `areaServed` en schema por ciudad.
- **El blog enlaza débilmente al pillar transaccional.** Cada artículo debe cerrar con CTA contextual al servicio correspondiente, no solo a contacto genérico.

---

## Hallazgo técnico de seguridad

El formulario (`src/components/ContactForm.astro`) usa **Web3Forms con `access_key` pública en el HTML** (normal en Web3Forms, pero spammeable) + honeypot (`botcheck`) + cooldown de 1h en `localStorage`.

A medida que crezca el tráfico pagado, **añadir Cloudflare Turnstile** evitará que el ruido de bots contamine las métricas de conversión y el inbox.
- **Costo:** bajo.
- **Impacto:** protege la calidad de los datos sobre los que se basará toda la optimización de Ads y CRO.

---

## Mapa de arquitectura objetivo

```
HOME
├── /servicios/                         (hub)
│   ├── /servicios/visa-americana/      ★ PILLAR
│   │     └── /visa-americana-durango/   (local) ✅ → replicar por ciudad
│   ├── /servicios/renovacion-visa-americana/
│   ├── /servicios/visa-canadiense/
│   ├── /servicios/eta-canada/
│   ├── /servicios/pasaporte-mexicano/
│   └── /servicios/pasaporte-estadounidense/
├── /lp/[servicio]/                     (★ NUEVO: landings de Ads, 1 CTA)
├── /blog/                              (clusters editoriales)
├── /preguntas-frecuentes/  /casos-de-exito/  /metodo/  /nosotros/  /contacto/
└── legales: /aviso-de-privacidad/  /terminos/
```
