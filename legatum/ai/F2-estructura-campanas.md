# F2 · Estructura de Campañas Google Ads

> **Propósito:** Guía operativa para configurar campañas seguras y rentables. Basada en `01-google-ads.md` §5 y `02-keywords.md`.
> **Tipo:** OPS — requiere acceso a Google Ads + F0 (Advertiser Verification) completado.
> **Presupuesto sugerido:** $8,000–$15,000 MXN/mes (ver F4).

---

## Prerequisitos antes de activar cualquier campaña

- [ ] **F0 completado:** Advertiser Verification aprobada por Google.
- [ ] **Conversiones configuradas:** eventos `whatsapp_click` y `generate_lead` marcados como conversiones en GA4 y vinculados a Google Ads (tarea A4).
- [ ] **Landing pages listas:** `/lp/[servicio]/` activas y con disclaimer visible (ya implementadas).
- [ ] **Keywords negativas cargadas:** lista `F3-keywords-negativas.md` aplicada.

---

## Arquitectura de campañas

### Campaña A — Consultoría (🟢 Escalable · máximo presupuesto)

**Objetivo:** capturar intención transaccional de bajo riesgo de política.
**Red:** Search.
**Puja:** Maximizar conversiones (una vez con historial; CPC manual al inicio).

| Grupo de anuncios | Keywords principales |
|---|---|
| Entrevista consular | `preparación entrevista consular`, `qué preguntan en la entrevista de visa`, `cómo prepararme para entrevista consular` |
| Asesoría visa | `asesoría visa americana`, `asesoría visa canadiense`, `consultor de visas` |
| DS-160 | `ayuda para llenar ds-160`, `cómo llenar ds-160`, `asesoría formulario ds-160` |
| Movilidad | `consultoría movilidad internacional`, `asesoría migratoria`, `gestor de visas` |

**Copy de anuncio (ejemplo):**
```
Titular 1: Asesoría Visa Americana B1/B2
Titular 2: Expediente + Entrevista Preparados
Titular 3: Sin Garantías Falsas · Sin Promesas
Descripción 1: Preparamos su caso con rigor. DS-160, arraigo y simulacro de entrevista. Respuesta el mismo día.
Descripción 2: Servicio privado de consultoría. No somos entidad gubernamental. Honorarios desde $2,000 MXN.
```

---

### Campaña B — Local (🟢 Alta conversión · bajo CPC)

**Objetivo:** capturar búsquedas locales con intención de compra inmediata.
**Red:** Search + extensión de ubicación.
**Área de segmentación:** Durango, Torreón, Gómez Palacio, Mazatlán, Culiacán, Zacatecas (ajustar tras tener GBP activo).

| Grupo de anuncios | Keywords principales |
|---|---|
| Durango | `visa americana durango`, `asesoría visa durango`, `gestor de visas durango` |
| Torreón | `visa americana torreón`, `gestor de visas torreón` |
| Otros | `[servicio] + [ciudad]` (long-tail local) |

**Copy de anuncio:**
```
Titular 1: Visa Americana en Durango
Titular 2: Asesoría · Expediente · Entrevista
Titular 3: Respuesta el Mismo Día
Descripción: Firma de movilidad internacional. Atención personalizada desde Durango. Honorarios claros antes de iniciar.
```

---

### Campaña C — Marca (🟢 Defensa · bajo costo)

**Objetivo:** proteger el nombre de marca de competencia y capturar tráfico de retorno.
**Red:** Search.
**Keywords:** `legatum internacional`, `legatum visas`, `legatum durango`.
**Presupuesto:** mínimo ($500–$1,000 MXN/mes); el CPC de marca es muy bajo.

---

## Lo que NO se anuncia (🔴)

- Ningún anuncio con "tramitar", "garantizado", "rápido", "oficial", "obtén tu visa".
- Nada en la red de Display con diseños que imiten sellos, logos o colores gubernamentales.
- Keywords de volumen alto pero política alta: `tramitar visa americana`, `sacar pasaporte`, `visa garantizada`.

---

## F4 · Presupuesto y vigilancia

| Mes | Presupuesto sugerido | Foco |
|---|---|---|
| Mes 1 | $8,000 MXN | Solo Campaña A + C; aprender el CPL base |
| Mes 2 | $10,000 MXN | Añadir Campaña B local; pausar grupos de bajo rendimiento |
| Mes 3+ | $12,000–$15,000 MXN | Escalar lo que convierte; activar puja automática |

**Vigilancia diaria (15 min):** revisar Informe de términos de búsqueda, añadir negativas, verificar que no haya desaprobaciones de anuncios.

**KPI de corte:** si CPL supera $500 MXN en 30 días en un grupo, pausarlo y revisar copy + landing.

---

## Disclaimer obligatorio en todos los anuncios

Todo anuncio debe incluir en la descripción o en el texto extendido:

> *"Servicio privado de consultoría. No somos una entidad gubernamental."*

Y las landing pages de destino (`/lp/[servicio]/`) ya incluyen este aviso de forma visible.
