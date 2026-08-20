export const site = {
  name: 'Legatum Internacional',
  legalName: 'LEGATUM INTERNACIONAL',
  shortName: 'Legatum',
  tagline: 'Movilidad internacional con la certeza de una institución',
  description:
    'Firma especializada en movilidad global, asesoría migratoria, visas, pasaportes y procesos internacionales para personas, familias y empresas desde México.',
  url: 'https://www.legatum-internacional.com',
  locale: 'es_MX',
  phone: '+526182706071',
  phoneDisplay: '618 270 6071',
  email: 'contacto@legatum-internacional.com',
  address: 'Durango, México',
  whatsapp:
    'https://wa.me/526182706071?text=Hola%2C%20me%20interesa%20una%20evaluaci%C3%B3n.%20Mi%20caso%20es%3A%20___%20%28visa%20americana%20%2F%20canadiense%20%2F%20pasaporte%20%2F%20otro%29.',
};

// Ofuscación de email contra cosechadores de spam (funciona sin JS).
const pctEncode = (s: string) =>
  s.split('').map((c) => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
const entityEncode = (s: string) =>
  s.split('').map((c) => '&#' + c.charCodeAt(0) + ';').join('');

export const emailHref = 'mailto:' + pctEncode(site.email);
export const emailEntity = entityEncode(site.email);

export const fees = {
  minMXN: 2000,
  maxMXN: 3000,
  minUSD: 110,
  maxUSD: 165,
  display: '$2,000 – $3,000 MXN',
  displayUSD: 'aprox. 110 – 165 USD',
  note: 'Honorarios profesionales de referencia. No incluyen derechos gubernamentales (DS-160, MRV, IRCC, SRE, etc.). El alcance y el monto exacto se confirman por escrito tras la evaluación inicial.',
};

export const founder = {
  name: 'Legatum Internacional',
  role: 'Firma especialista en movilidad internacional',
  image: '',
  shortBio:
    'Firma especializada en movilidad internacional dedicada a la preparación rigurosa de expedientes de visas, pasaportes y procesos consulares.',
  longBio:
    'En LEGATUM INTERNACIONAL cada caso es atendido por especialistas con una convicción simple: un trámite migratorio bien preparado no se improvisa. Por eso cada expediente se construye con criterio jurídico, honestidad sobre los riesgos reales y acompañamiento directo en cada etapa, sin intermediarios ni promesas que no dependan de nosotros.',
};

export const navItems = [
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Método', href: '/metodo/' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Preguntas', href: '/preguntas-frecuentes/' },
  { label: 'Casos', href: '/casos-de-exito/' },
  { label: 'Herramientas', href: '/herramientas/' },
  { label: 'Contacto', href: '/contacto/' },
];
