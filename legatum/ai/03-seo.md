# 03 · Estrategia SEO

> La firma ya tiene una auditoría SEO sólida (`docs/auditoria-seo.md`). Este documento prioriza **dónde está el dinero rápido** y lo que esa auditoría no enfatizó lo suficiente.

---

## El 80% del ROI orgánico de 6 meses está en 2 movimientos

### 1. SEO Local replicable
Hoy existe **1 sola landing local** (`visa-americana-durango`). El patrón es clonable. Cada landing local nueva (Torreón, Gómez Palacio, Mazatlán, Zacatecas, Culiacán) es: **KD 10–14, intención de compra altísima, competencia casi nula.**

> **5 landings locales bien hechas > 20 artículos de blog** en leads a 90 días.

### 2. Google Business Profile + Maps
No enfatizado con suficiente urgencia. Con base física en Durango, el **paquete local de Maps** (los 3 resultados con mapa) convierte mejor que cualquier resultado orgánico. NAP consistente (618 270 6071, Durango) + reseñas reales = dominio del "near me" local. **Costo cero, impacto enorme.**

---

## E-E-A-T como foso defensivo

El sector está lleno de webs anónimas. Legatum tiene un fundador con nombre, foto y bio. Hay que **exponerlo como `Person` schema + autoría en cada artículo**. Google premia experiencia demostrable en temas YMYL (Your Money Your Life — y migración lo es). Ventaja estructural que un coyote no puede copiar.

---

## Prioridad de contenido (cruzado con intención de compra, no volumen)

1. `visa americana negada qué hacer` → intención **altísima**, dolor agudo, convierte como ninguna.
2. `cuánto cobra un gestor de visa` → captura al comprador comparando, y tu transparencia gana.
3. `renovar visa sin entrevista ¿califico?` → alta intención + servicio existente.

---

## Higiene técnica (confirmar)

- Schema JSON-LD: `LocalBusiness` (con `areaServed`), `Service`, `FAQPage`, `BreadcrumbList`, `Person` (autor), `Article/BlogPosting` con `datePublished`/`dateModified`.
- Exponer como `FAQPage` las FAQs ya redactadas en `src/data/site.ts`.
- Search Console + Bing verificados, sitemap enviado, monitoreo de cobertura.
- Enlazado interno: cada artículo de blog → su pillar de servicio (anchor transaccional); cada pillar → sus 3–5 spokes.

> Detalle de clusters, arquitectura temática y volúmenes: ver `docs/auditoria-seo.md` §4–§6.
