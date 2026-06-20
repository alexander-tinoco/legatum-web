# 11 · Roadmap Maestro de Ejecución

> **Propósito:** convertir los diagnósticos de la carpeta `ai/` en un plan de ejecución único, secuenciado y medible. Este documento no añade recomendaciones nuevas: **orquesta** las que ya existen en `01`–`10` y las traduce en tareas con responsable, esfuerzo, dependencia y KPI.
> **Fecha:** 2026-06-19

---

## 0. Principio rector (no negociable)

> **Sin medición, todo es hipótesis.** Lo repiten la auditoría CRO (`07`, #11), el funnel y el plan de crecimiento (`10`). **La primera semana se instrumenta la analítica; sin eso, ninguna optimización posterior puede evaluarse.**

**Secuencia lógica de toda la ejecución** (cada eslabón habilita el siguiente):

```
MEDIR  →  CONVERTIR (on-site)  →  ATRAER LOCAL (GBP+landings)  →  CONTENIDO  →  ADS  →  AUTORIDAD/ESCALA
```

El orden no es por gusto: optimizar conversión sin medir es a ciegas; pagar Ads sin la landing y el opener arreglados quema presupuesto; escalar contenido sin clusters locales primero es ROI bajo.

---

## 1. Cómo leer este roadmap

Cada tarea lleva:
- **Fuente** → de qué auditoría sale (`01`–`10`), para trazabilidad.
- **Tipo** → `DEV` (cambio en el código Astro), `OPS` (operativo/cuenta externa), `CONTENT` (redacción), `FUNDADOR` (decisión/insumo del dueño).
- **Impacto / Esfuerzo** → 🔥 escala de valor · 🟢🟡🔴 dificultad.
- **Depende de** → qué tarea debe existir antes.

---

## 2. Backlog consolidado por frente de trabajo

### A. Medición y analítica (habilitador de todo) LISTO
| Tarea | Fuente | Tipo | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|---|
| A1. GA4 + evento `whatsapp_click` en todos los botones WhatsApp | `07` #11, `10` | DEV | 🔥🔥🔥 | 🟡 | — |
| A2. Evento `form_submit` (éxito web3forms) y `scroll_to_contact` | `07` #11 | DEV | 🔥🔥 | 🟢 | A1 |
| A3. Search Console + Bing: verificar, enviar sitemap, monitoreo | `03`/SEO | OPS | 🔥🔥 | 🟢 | — |
| A4. Marcar eventos como **conversiones** en GA4 y vincular a Google Ads | `01`, `07` | OPS | 🔥🔥🔥 | 🟢 | A1, F0 |

### B. Conversión on-site (CRO · Copywriting · Psicología) — casi todo es DEV LISTO
| Tarea | Fuente | Tipo | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|---|
| B1. Opener de WhatsApp de bajo compromiso + **parametrizado por servicio** (`text=`) | `05`, `06`, `07` | DEV | 🔥🔥🔥 | 🟢 | — |
| B2. Micro-copy de reaseguro junto a cada botón WhatsApp ("Le responde el especialista · mismo día · sin compromiso") | `06`, `07` | DEV | 🔥🔥 | 🟢 | — |
| B3. Hero: subtítulo más específico (nombra visa americana/canadiense/eTA/pasaportes) + cerrar con "No tramitamos: respondemos por su caso" | `05`, `07` | DEV | 🔥🔥 | 🟢 | — |
| B4. Eliminar relleno y calcos ("A donde necesite llegar", "Servicios núcleo" → "Áreas de especialidad") | `05` | DEV | 🔥 | 🟢 | — |
| B5. Corregir contradicción de marca: reescribir destinos Australia/China (quitar "Gestionamos…") | `05` | DEV | 🔥🔥 | 🟢 | — |
| B6. Sustituir emojis de bandera por código de país en versalitas (AUS/CHN/MEX) | `05` | DEV | 🔥 | 🟡 | — |
| B7. Estandarizar texto de CTAs ("Conversar" → "Evaluar mi caso") | `07` | DEV | 🔥 | 🟢 | — |
| B8. Testimonios verificables: nombre+inicial, ciudad real, resultado concreto, (foto si hay) + contador "+X expedientes" | `06`, `09` | DEV+FUNDADOR | 🔥🔥🔥 | 🟡 | insumos del fundador |
| B9. Subir prueba social y precio en el orden de página (secuencia conductual de `06` §ESTRUCTURA) | `06`, `07` | DEV | 🔥🔥 | 🟡 | B8 |
| B10. Reencuadrar honorarios como protección (FAQ precio al top 3, framing loss-aversion) | `06` | DEV | 🔥🔥 | 🟢 | — |
| B11. Sección de objeciones explícita ("¿Me garantizan?", "¿Lo hago solo?", "¿Es legal?") | `07` | DEV+CONTENT | 🔥🔥 | 🟡 | — |
| B12. Aligerar formulario (mensaje opcional / teléfono *o* email) — test A/B | `07` | DEV | 🔥 | 🟡 | A2 |

### C. SEO técnico y on-page LISTO
| Tarea | Fuente | Tipo | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|---|
| C1. Confirmar/añadir schema: `LocalBusiness`(areaServed), `Service`, `FAQPage`, `BreadcrumbList`, `Person`(autor), `BlogPosting`(date) | `03` | DEV | 🔥🔥 | 🟡 | — |
| C2. Exponer las FAQs de `site.ts` como `FAQPage` JSON-LD | `03` | DEV | 🔥 | 🟢 | C1 |
| C3. On-page de los 6 servicios: H1/title/description hacia keywords transaccionales seguras | `02`, `03` | DEV+CONTENT | 🔥🔥 | 🟡 | — |
| C4. Enlazado interno: cada artículo → su pillar; cada pillar → 3-5 spokes; CTA contextual | `03`, `04` | DEV | 🔥 | 🟡 | — |
| C5. Hardening del formulario con Cloudflare Turnstile (proteger calidad de datos de A1/A2) | `04` | DEV | 🔥 | 🟢 | — |
| C6. Capa de landings de campaña `/lp/[servicio]/` (1 CTA, sin navbar) para Ads | `01`, `04` | DEV | 🔥🔥 | 🟡 | B1, F0 |

### D. SEO local + Google Business Profile (el mayor ROI) PENDIENTE HACERLO YO
| Tarea | Fuente | Tipo | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|---|
| D1. Crear y verificar **Google Business Profile** (Durango) + NAP consistente (618…) | `03`, `09` | OPS+FUNDADOR | 🔥🔥🔥 | 🟢 | — |
| D2. Sistema de **reseñas**: pedir por WhatsApp tras cada caso, enlace directo (meta 20-30 en 6m) | `09` | OPS | 🔥🔥🔥 | 🟢 | D1, B1 |
| D3. 5 landings locales clonando `visa-americana-durango` (Torreón, Gómez Palacio, Mazatlán, Zacatecas, Culiacán) | `02`, `03` | DEV+CONTENT | 🔥🔥🔥 | 🟡 | C3 |
| D4. `areaServed` por ciudad en schema de cada landing local | `03` | DEV | 🔥 | 🟢 | C1, D3 |

### E. Contenido (autoridad orgánica) LISTO
| Tarea | Fuente | Tipo | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|---|
| E1. Optimizar los 5 artículos existentes (enlace a pillar, CTA, `dateModified`, FAQ schema) | `03` | DEV+CONTENT | 🔥🔥 | 🟡 | C1 |
| E2. Lead magnet (checklist arraigo / "¿califico para renovar sin entrevista?") + captura email | `07`, `10` | DEV+CONTENT | 🔥🔥 | 🟡 | A2 |
| E3. 6-8 artículos de alta intención: *visa negada qué hacer*, *cuánto cobra un gestor*, *requisitos primera vez 2026*, *eTA si tengo visa americana*, etc. | `02`, `03` | CONTENT | 🔥🔥 | 🟡 | C4 |
| E4. Cuestionario de auto-diagnóstico ("¿Qué visa necesito?") como MOFU | `07` | DEV | 🔥🔥 | 🔴 | A2 |

### F. Google Ads (solo tras B+C+D listos) LISTO
| Tarea | Fuente | Tipo | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|---|
| F0. **Advertiser Verification** de Google (obligatorio antes de gastar) | `01` | OPS+FUNDADOR | 🔥🔥🔥 | 🟡 | — |
| F1. Disclaimer en landing/anuncio: "Servicio privado de consultoría. No somos entidad gubernamental." | `01` | DEV | 🔥🔥🔥 | 🟢 | C6 |
| F2. Estructura de campañas: Marca + Local + Transaccional-segura; **nada en 🔴** | `01`, `02` | OPS | 🔥🔥🔥 | 🟡 | F0, A4, C6 |
| F3. Lista de keywords negativas (gratis, oficial, gobierno, garantizado, tramitar, aplicar, urgente 24h…) | `01`, `02` | OPS | 🔥🔥 | 🟢 | F2 |
| F4. Presupuesto controlado $8-15k MXN/mes, vigilancia diaria de la campaña 🟡 | `01`, `10` | OPS | 🔥🔥 | 🟢 | F2 |

### G. WhatsApp y funnel operativo PENDIENTE DE QUE LO HAGA YO
| Tarea | Fuente | Tipo | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|---|
| G1. Migrar a **WhatsApp Business**: catálogo, bienvenida automática, respuestas rápidas, etiquetas de embudo | `07`, `08` | OPS | 🔥🔥 | 🟢 | — |
| G2. Guion de primera respuesta (saludo + 2 preguntas de calificación + expectativa de honorarios) | `07`, `08` | FUNDADOR | 🔥🔥 | 🟢 | — |
| G3. Enlaces WhatsApp con UTM/etiqueta por origen (Ads local / blog / marca) → atribución | `08` | DEV | 🔥 | 🟡 | A1 |
| G4. (Mediano) WhatsApp Business API + CRM con recordatorios de vigencia = **motor de recompra** | `08`, `07` | OPS | 🔥🔥 | 🔴 | G1, volumen >30/día |

### H. Autoridad y confianza
| Tarea | Fuente | Tipo | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|---|
| H1. `/nosotros/` como activo E-E-A-T: bio, credenciales, años, nº de casos del fundador | `03`, `06`, `09` | DEV+FUNDADOR | 🔥🔥 | 🟡 | insumos del fundador |
| H2. 8-10 casos de éxito con schema `Review` (ampliar los 3 actuales) | `03`, `09` | DEV+CONTENT | 🔥🔥 | 🟡 | C1 |
| H3. Link building: prensa local Durango, directorios, alianzas (agencias de viaje/universidades) | `03`, `09` | OPS | 🔥🔥 | 🔴 | — |
| H4. Redes con tono honesto (educativo corto) → marca + remarketing | `09` | CONTENT | 🔥 | 🟡 | — |

---

## 3. Secuencia por fases (mapeada al plan 3/6/12 de `10`)

### 🟢 SPRINT 0 — Semanas 1-2 · "Encender los instrumentos y cerrar fugas baratas"
**Meta: medir + quick wins de conversión de esfuerzo 🟢.**
- **A1, A2, A3** (medición) · **F0, D1** (arranques que tardan en verificarse, lanzarlos ya)
- **B1, B2, B3, B4, B7, B10** (todos los quick wins on-site de copy/CRO)
- **G1, G2** (WhatsApp Business)
- **C5** (Turnstile, protege los datos que A1/A2 empiezan a recoger)
> Resultado esperado: tracking vivo + primer salto de tasa visita→WhatsApp (CRO `07` estima +25-45% solo con B1/B2/B3).

### 🟡 SPRINT 1 — Semanas 3-6 · "Capturar lo local"
**Meta: abrir el canal de mayor ROI.**
- **D2** (reseñas en marcha) · **D3, D4** (5 landings locales) · **C3** (on-page servicios)
- **C1, C2** (schema) · **B5, B6, B8, B9, B11** (resto de CRO/copy/psicología)
- **H1** (about E-E-A-T)
> Resultado: paquete local de Maps activo, landings indexándose, leads locales entrando.

### 🟠 SPRINT 2 — Meses 2-3 · "Activar adquisición pagada y nurturing"
**Meta: dejar de depender solo de orgánico.**
- **C6, F1, F2, F3, F4** (Ads seguro y sostenible) · **A4** (conversiones vinculadas)
- **E1, E2** (optimizar artículos + lead magnet) · **G3** (atribución por origen)
> Resultado: Ads corriendo con CPL medible, leads fríos capturándose.

### 🔴 FASE 3 — Meses 3-6 · "Construir la máquina de demanda"
- **E3** (6-8 artículos alta intención) · **E4** (auto-diagnóstico) · **H2** (casos con schema) · **B12** (A/B formulario)
> KPI (de `10`): 60-120 leads/mes · 25-40 keywords top 10 · CPL local <$150 MXN.

### 🔵 FASE 4 — Meses 6-12 · "Escalar y consolidar autoridad"
- **H3** (link building) · **G4** (API+CRM, motor de recompra) · pillar pages largas · expansión a MTY/CDMX/GDL · actualización editorial anual.
> KPI (de `10`): 100-180 leads orgánicos/mes · 80-120 keywords top 10 · 5-8k visitas/mes.

---

## 4. Lo que se puede implementar **en el código ahora mismo** (DEV, sin esperar a nadie)

Estas tareas no dependen de cuentas externas ni de insumos del fundador — son ediciones directas en el repo Astro:

| Tarea | Archivo(s) probable(s) |
|---|---|
| B1 · WhatsApp opener + por servicio | `src/data/site.ts`, `src/components/WhatsAppFloat.astro`, `src/pages/servicios/[slug].astro` |
| B2 · Reaseguro junto a botones | `Hero.astro`, `WhatsAppFloat.astro`, `CTASection.astro`, `ContactSection.astro` |
| B3, B4 · Hero subtítulo + limpieza | `src/sections/Hero.astro` |
| B5, B6 · Destinos sin "Gestionamos" + sin emojis | `src/data/site.ts` (`additionalDestinations`), `ServicesSection.astro` |
| B7 · Estandarizar CTAs | `Navbar.astro`, secciones de CTA |
| B10 · FAQ precio reencuadrada | `src/data/site.ts` (`faqs`) |
| A1, A2 · Eventos GA4 | `BaseLayout.astro` + handlers en componentes de botón |
| C1, C2 · Schema | `src/seo/schema.ts`, `SEO.astro` |
| C5 · Turnstile | `ContactForm.astro` |
| D3 · Landings locales | clonar `src/pages/visa-americana-durango.astro` |

**Lo que NO es código** (requiere acción tuya / del fundador): GBP (D1), reseñas (D2), Advertiser Verification (F0), WhatsApp Business (G1-G2), credenciales para el about (H1), insumos de testimonios reales (B8), link building (H3).

---

## 5. Gobernanza (del Documento Fundacional: "cultura de resultados medibles")

- **Weekly 15 min:** revisar `whatsapp_click`, CPL, posiciones locales (cierra el loop de medición de §0).
- **Retro mensual de ejecución:** ¿qué tarea movió la aguja? Reasignar esfuerzo a lo que convierte.
- **Tablero de KPIs** (de `10` §KPIs transversales): keywords top 10, tráfico orgánico, leads/mes, CPL Ads, reseñas, backlinks.
- **Regla de oro:** ninguna tarea de Ads (frente F) arranca antes de que B+C+D de su servicio estén listas — anunciar sobre una landing sin arreglar quema presupuesto y arriesga la cuenta (`01`).

---

## 6. Las 5 cosas que, si solo se hicieran esas, moverían más la aguja

1. **A1 — Medir el clic de WhatsApp.** Sin esto, nada se puede optimizar ni justificar.
2. **B1 — Opener de WhatsApp por servicio y de bajo compromiso.** Toca la fuga #1 del funnel.
3. **D1+D2 — Google Business Profile + reseñas.** Máximo ROI, costo casi cero.
4. **D3 — 5 landings locales.** El canal menos competido y de mayor intención de compra.
5. **B8 — Testimonios verificables.** Convierte *todo* el tráfico mejor, simultáneamente.

> Todo lo demás amplifica; estas cinco son la base. Tres son DEV (las puedo ejecutar en el repo), dos son OPS del fundador.
