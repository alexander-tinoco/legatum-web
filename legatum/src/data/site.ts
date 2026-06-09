export const site = {
  name: 'LEGATUM INTERNACIONAL',
  shortName: 'Legatum',
  tagline: 'Movilidad internacional con la certeza de una institución',
  description:
    'Firma especializada en movilidad global, asesoría migratoria, visas, pasaportes y procesos internacionales para personas, familias y empresas desde México.',
  url: 'https://legatum-internacional.com',
  locale: 'es_MX',
  phone: '+526182706071',
  phoneDisplay: '618 270 6071',
  email: 'contacto@legatum-internacional.com',
  address: 'Durango, México',
  whatsapp:
    'https://wa.me/526182706071?text=Hola%2C%20deseo%20iniciar%20mi%20evaluaci%C3%B3n%20de%20movilidad%20internacional.',
};

// Honorarios de referencia. El alcance final se confirma por escrito tras la evaluación.
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
  name: 'Alexander Tinoco Sánchez',
  role: 'Especialista y fundador',
  shortBio:
    'Fundador de LEGATUM INTERNACIONAL. Especialista en movilidad internacional dedicado a la preparación rigurosa de expedientes de visas, pasaportes y trámites consulares.',
  longBio:
    'Alexander Tinoco Sánchez es el fundador y especialista responsable de cada caso en LEGATUM INTERNACIONAL. Su trabajo parte de una convicción simple: un trámite migratorio bien preparado no se improvisa. Por eso cada expediente se construye con criterio jurídico, honestidad sobre los riesgos reales y acompañamiento directo de principio a fin, sin intermediarios ni promesas que no dependan de nosotros.',
};

export const navItems = [
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Método', href: '#metodo' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Preguntas', href: '/preguntas-frecuentes/' },
  { label: 'Contacto', href: '#contacto' },
];

export const services = [
  {
    slug: 'visa-americana',
    flag: '🇺🇸',
    title: 'Visa Americana',
    summary:
      'Primera solicitud B1/B2: preparamos el DS-160, construimos el expediente de arraigo y lo preparamos para la entrevista consular.',
    megaDesc: 'Primera solicitud B1/B2, preparación completa',
    tags: ['Formulario DS-160', 'Demostrar arraigo', 'Preparación para entrevista'],
    metaTitle: 'Visa Americana B1/B2 en México | Preparación de expediente y entrevista',
    metaDescription:
      'Asesoría para la primera visa americana B1/B2 desde México: llenado del DS-160, expediente de arraigo y preparación para la entrevista consular. Trabajo serio, sin promesas falsas.',
    intro:
      'La visa de turista B1/B2 no se gana llenando un formulario: se gana demostrando que su vida está en México y que su viaje tiene un propósito claro. Preparamos su solicitud de primera vez de principio a fin, con el rigor de quien sabe qué evalúa realmente un oficial consular.',
    includes: [
      'Llenado correcto y completo del formulario DS-160',
      'Construcción del expediente de arraigo: vínculos laborales, familiares y patrimoniales',
      'Estrategia de respuestas y simulación de la entrevista consular',
      'Revisión de cada documento antes de su cita',
    ],
    requirements: [
      'Pasaporte mexicano vigente',
      'Información laboral, académica y de viajes previos',
      'Documentación que respalde sus vínculos con México',
    ],
    faqs: [
      {
        question: '¿Garantizan que me den la visa americana?',
        answer:
          'No. La decisión es exclusiva del oficial consular. Lo que garantizamos es que llegue con el DS-160 correcto, el expediente de arraigo bien construido y preparado para responder con seguridad.',
      },
      {
        question: '¿Necesito tener historial de viajes para que me la aprueben?',
        answer:
          'No es obligatorio. Muchas primeras visas se aprueban sin viajes previos cuando el arraigo a México está bien demostrado. Ahí está el verdadero trabajo.',
      },
    ],
  },
  {
    slug: 'renovacion-visa-americana',
    flag: '🇺🇸',
    title: 'Renovación de Visa',
    summary:
      'Evaluamos si califica para renovar sin entrevista, preparamos su documentación y gestionamos el proceso de principio a fin.',
    megaDesc: 'Con y sin entrevista, vigencia y elegibilidad',
    tags: ['Sin entrevista (Dropbox)', 'Evaluación de elegibilidad', 'Documentación nueva'],
    metaTitle: 'Renovación de Visa Americana sin Entrevista | Evaluación de elegibilidad',
    metaDescription:
      'Renueve su visa americana B1/B2 con o sin entrevista. Evaluamos si califica para el programa sin entrevista (Dropbox), preparamos su expediente y gestionamos el proceso.',
    intro:
      'Muchas personas agendan una entrevista completa sin saber que califican para renovar sin presentarse ante el oficial consular. Primero confirmamos su elegibilidad para el programa de renovación por mensajería; si aplica, le ahorramos tiempo y pasos innecesarios.',
    includes: [
      'Evaluación de elegibilidad para renovación sin entrevista (Dropbox)',
      'Actualización del DS-160 y verificación de vigencia',
      'Preparación de la documentación nueva requerida',
      'Acompañamiento durante todo el trámite y el envío del expediente',
    ],
    requirements: [
      'Visa anterior (aunque esté vencida dentro del plazo elegible)',
      'Pasaporte vigente',
      'Cumplir las condiciones del programa de renovación vigente',
    ],
    faqs: [
      {
        question: '¿Cómo sé si califico para renovar sin entrevista?',
        answer:
          'Depende de la vigencia de su visa anterior, su edad y las reglas vigentes del consulado. En la evaluación inicial lo confirmamos antes de que agende cualquier cita.',
      },
      {
        question: '¿Si renuevo sin entrevista tengo que ir al consulado?',
        answer:
          'En la mayoría de los casos solo acude al CAS a entregar fotografía y huellas; no se presenta ante un oficial. El expediente se envía por mensajería.',
      },
    ],
  },
  {
    slug: 'visa-canadiense',
    flag: '🇨🇦',
    title: 'Visa Canadiense',
    summary:
      'Visa de visitante y de estudios ante IRCC. Construimos su expediente para demostrar vínculos con México, solvencia y propósito claro de viaje.',
    megaDesc: 'Visitante (TRV), estudios, vínculos con México',
    tags: ['Visa de visitante TRV', 'Estudios', 'Formulario IRCC'],
    metaTitle: 'Visa Canadiense de Visitante (TRV) y Estudios | Expediente ante IRCC',
    metaDescription:
      'Asesoría para la visa canadiense de visitante (TRV) y de estudios ante IRCC desde México. Construimos el expediente de vínculos, solvencia y propósito de viaje.',
    intro:
      'IRCC evalúa su solicitud sobre papel: no hay entrevista donde explicarse. Por eso el expediente lo es todo. Preparamos su Temporary Resident Visa o su permiso de estudios para que cada documento comunique solvencia, vínculos con México y un propósito de viaje creíble.',
    includes: [
      'Llenado de formularios y aplicación en el portal de IRCC',
      'Carta de explicación y expediente de vínculos con México',
      'Demostración de solvencia económica y propósito de viaje',
      'Revisión integral antes del envío',
    ],
    requirements: [
      'Pasaporte vigente',
      'Comprobantes de solvencia económica',
      'Documentación de empleo, estudios o negocio en México',
    ],
    faqs: [
      {
        question: '¿La visa canadiense tiene entrevista?',
        answer:
          'Por regla general no. La evaluación es documental, lo que hace que la calidad del expediente sea determinante. Ahí concentramos el trabajo.',
      },
      {
        question: '¿Pueden ayudarme con la visa de estudios?',
        answer:
          'Sí. Preparamos tanto la TRV de visitante como el expediente para permiso de estudios, según su caso y su carta de aceptación.',
      },
    ],
  },
  {
    slug: 'eta-canada',
    flag: '🇨🇦',
    title: 'ETA Canadá',
    summary:
      'Solicitud electrónica con revisión previa. Nos aseguramos de que cada dato sea correcto antes de enviar y le informamos del estado en tiempo real.',
    megaDesc: 'Autorización electrónica, tiempos reales',
    tags: ['Aplicación electrónica', 'Revisión previa', 'Seguimiento de estado'],
    metaTitle: 'ETA Canadá para Mexicanos | Autorización electrónica de viaje',
    metaDescription:
      'Tramite su ETA (Autorización Electrónica de Viaje) para Canadá con revisión previa. Verificamos cada dato antes de enviar y damos seguimiento al estado de su solicitud.',
    intro:
      'La ETA parece simple, pero un dato mal capturado puede convertir un trámite de minutos en semanas de complicaciones. Revisamos cada campo antes de enviar y le informamos del estado real de su autorización en todo momento.',
    includes: [
      'Verificación de elegibilidad para ETA (vs. visa de visitante)',
      'Llenado y revisión previa de la solicitud electrónica',
      'Envío correcto y seguimiento del estado',
      'Orientación si su caso requiere visa en lugar de ETA',
    ],
    requirements: [
      'Pasaporte vigente',
      'Correo electrónico y medio de pago para el derecho gubernamental',
    ],
    faqs: [
      {
        question: '¿Todos los mexicanos pueden tramitar ETA?',
        answer:
          'No siempre. Según su historial y perfil, Canadá puede requerir una visa de visitante en lugar de ETA. Lo confirmamos antes de iniciar para no perder tiempo ni dinero.',
      },
      {
        question: '¿Cuánto tarda la ETA?',
        answer:
          'Muchas se aprueban en minutos, pero algunas quedan en revisión por días. Le damos seguimiento y le avisamos en cuanto haya respuesta.',
      },
    ],
  },
  {
    slug: 'pasaporte-mexicano',
    flag: '🇲🇽',
    title: 'Pasaporte Mexicano',
    summary:
      'Primera vez, renovación o caso urgente. Revisamos su documentación antes de la cita para que no haya sorpresas en la SRE.',
    megaDesc: 'Primera vez, renovación, casos urgentes',
    tags: ['Primera vez', 'Renovación', 'Casos urgentes'],
    metaTitle: 'Pasaporte Mexicano: Primera Vez, Renovación y Urgentes | Asesoría SRE',
    metaDescription:
      'Asesoría para el pasaporte mexicano: primera vez, renovación y casos urgentes. Revisamos su documentación antes de la cita en la SRE para evitar sorpresas.',
    intro:
      'Una cita en la SRE con documentación incompleta significa otra cita, otra espera y un viaje en riesgo. Revisamos su expediente antes de que se presente, detectamos errores documentales a tiempo y le decimos exactamente qué llevar.',
    includes: [
      'Orientación según su caso: primera vez, renovación o urgente',
      'Revisión documental previa a la cita',
      'Detección y corrección de errores de acta o identidad',
      'Orientación para citas urgentes y viajes próximos',
    ],
    requirements: [
      'Acta de nacimiento mexicana',
      'Identificación oficial vigente',
      'CURP y, en su caso, pasaporte anterior',
    ],
    faqs: [
      {
        question: '¿Pueden conseguir la cita en la SRE por mí?',
        answer:
          'La cita se agenda en el sistema oficial de la SRE. Lo que hacemos es prepararle el expediente y orientarle para que su cita salga bien a la primera, incluso en casos urgentes.',
      },
      {
        question: 'Mi acta tiene un error, ¿me afecta?',
        answer:
          'Sí, y es de los motivos más comunes de rechazo. Por eso revisamos su documentación antes de la cita y le orientamos sobre cómo corregirlo.',
      },
    ],
  },
  {
    slug: 'pasaporte-estadounidense',
    flag: '🇺🇸',
    title: 'Pasaporte Estadounidense',
    summary:
      'Renovación por correo (DS-82) y primera solicitud (DS-11) para ciudadanos americanos. Revisamos que su documentación esté completa antes de enviar.',
    megaDesc: 'DS-82, DS-11, documentación para ciudadanos',
    tags: ['Renovación DS-82', 'Primera solicitud DS-11', 'Ciudadanos americanos'],
    metaTitle: 'Pasaporte Estadounidense: DS-82 y DS-11 | Asesoría para ciudadanos',
    metaDescription:
      'Asesoría para el pasaporte estadounidense: renovación por correo (DS-82) y primera solicitud (DS-11). Revisamos su documentación completa antes de enviar.',
    intro:
      'Para ciudadanos estadounidenses, un formulario equivocado o una fotografía mal tomada retrasa semanas el pasaporte. Identificamos si le corresponde el DS-82 o el DS-11 y revisamos que su expediente salga completo y correcto.',
    includes: [
      'Determinación del formulario correcto (DS-82 o DS-11)',
      'Llenado y revisión de la solicitud',
      'Verificación de fotografía y documentos de ciudadanía',
      'Orientación sobre envío y tiempos',
    ],
    requirements: [
      'Prueba de ciudadanía estadounidense',
      'Pasaporte anterior (para renovación DS-82)',
      'Identificación válida y fotografía conforme a norma',
    ],
    faqs: [
      {
        question: '¿Cómo sé si me toca DS-82 o DS-11?',
        answer:
          'Depende de si tiene un pasaporte anterior elegible para renovación por correo o si solicita por primera vez. Lo determinamos en la evaluación inicial.',
      },
      {
        question: '¿Atienden a ciudadanos americanos que viven en México?',
        answer:
          'Sí. Orientamos el proceso y la documentación; el trámite se realiza ante las autoridades estadounidenses correspondientes.',
      },
    ],
  },
];

export const additionalDestinations = ['Visa Australia', 'Visa China'];

export const processSteps = [
  {
    title: 'Evaluación honesta',
    text: 'Analizamos su caso real y le decimos qué es posible, qué no y qué riesgos hay que considerar. Sin rodeos.',
  },
  {
    title: 'Estrategia documental',
    text: 'Definimos qué documentos necesita, cuánto cuesta y cuánto tarda. Le entregamos la ruta completa antes de empezar.',
  },
  {
    title: 'Preparación y ejecución',
    text: 'Preparamos formularios, reunimos el expediente y, si aplica, lo preparamos para la entrevista. Nada queda al azar.',
  },
  {
    title: 'Acompañamiento',
    text: 'Estamos con usted hasta que el proceso concluya. Y seguimos disponibles cuando necesite renovar o iniciar otro trámite.',
  },
];

export const trustItems = [
  {
    title: 'Transparencia total',
    text: 'El alcance y los honorarios se conocen antes de contratar. Sin cargos ocultos ni promesas ambiguas.',
  },
  {
    title: 'Proceso visible',
    text: 'Usted sabe en qué etapa está su expediente, qué sigue y quién responde por cada decisión.',
  },
  {
    title: 'Honestidad jurídica',
    text: 'No prometemos decisiones consulares. Preparamos el caso con rigor y explicamos los límites reales.',
  },
];

export const caseStudies = [
  {
    service: 'Visa Americana B1/B2',
    title: 'Primera visa, sin historial de viaje',
    situation: 'Solicitante de primera vez con dudas sobre cómo demostrar arraigo a México.',
    process: 'Preparamos el DS-160, construimos el expediente de arraigo con evidencia laboral, familiar y patrimonial, y simulamos la entrevista para que llegara sin sorpresas.',
    result: 'Entrevista preparada, respuestas claras y expediente ordenado. Visa otorgada por 10 años.',
    location: 'Durango',
  },
  {
    service: 'Renovación sin entrevista',
    title: '¿Necesito cita consular para renovar?',
    situation: 'Profesionista con visa próxima a vencer, convencida de que tendría que agendar una nueva cita en el consulado y pasar por el proceso completo otra vez.',
    process: 'Confirmamos que calificaba para el programa de renovación sin entrevista. Solo necesitó acudir a entregar nuevas huellas y foto, sin presentarse ante el oficial.',
    result: 'La visa fue renovada sin cita consular. El proceso se resolvió con una sola visita de biométricos y el envío del expediente por mensajería.',
    location: 'Profesionista',
  },
  {
    service: 'Pasaporte urgente',
    title: 'Pasaporte mexicano con viaje próximo',
    situation: 'Familia con viaje programado y documentación incompleta contra reloj.',
    process: 'Revisión previa, detección de error documental y orientación de corrección.',
    result: 'Documentación lista para la cita y pasaporte emitido en el plazo necesario.',
    location: 'Familia',
  },
];

export const testimonials = [
  {
    quote: 'Llegué a la entrevista sabiendo exactamente qué esperar. Nada me tomó por sorpresa.',
    author: 'Visa americana, familia',
    context: 'Durango, México',
  },
  {
    quote: 'Me explicaron con honestidad qué dependía de mí. Esa claridad me dio tranquilidad real.',
    author: 'Renovación de visa',
    context: 'Profesionista',
  },
  {
    quote: 'Trato de institución, atención de persona. No me sentí un trámite más en una fila.',
    author: 'ETA Canadá',
    context: 'Viajera frecuente',
  },
];

export const faqs = [
  {
    question: '¿En qué se diferencia Legatum de una gestoría?',
    answer:
      'Una gestoría hace el trámite. Nosotros analizamos su caso, definimos la estrategia, le explicamos cada paso y respondemos por el proceso de principio a fin.',
  },
  {
    question: '¿Pueden ayudarme si no soy empresario ni de alto perfil?',
    answer:
      'Sí. Atendemos personas, familias, profesionistas y empresas con el mismo nivel de seriedad y claridad, sin importar el perfil.',
  },
  {
    question: '¿Garantizan que me aprueben la visa?',
    answer:
      'No. La decisión final corresponde a la autoridad consular. Lo que sí garantizamos es que usted llegue preparado, con la documentación en orden y sabiendo qué esperar.',
  },
  {
    question: '¿Cómo conozco el costo antes de contratar?',
    answer:
      'Después de la evaluación inicial le presentamos por escrito el alcance del trabajo y el honorario. Usted decide con toda la información sobre la mesa.',
  },
  {
    question: '¿Atienden a todo México y desde el extranjero?',
    answer:
      'Sí. Todo el proceso puede realizarse por WhatsApp y correo, sin importar el estado o el país donde se encuentre.',
  },
  {
    question: '¿Cómo empiezo?',
    answer:
      'Cuéntenos su caso por WhatsApp. El mismo día hábil recibe una orientación honesta sobre su situación y los siguientes pasos.',
  },
];

export const resources = [
  { title: 'DS-160 paso a paso: por qué cada campo importa', slug: 'ds-160-paso-a-paso' },
  { title: 'ETA vs. visa de visitante: cuál le corresponde', slug: 'eta-vs-visa-canada' },
  { title: 'Demostrar arraigo: el factor que casi nadie prepara bien', slug: 'demostrar-arraigo' },
  { title: 'Qué esperar en la entrevista consular y cómo responder', slug: 'entrevista-consular' },
  { title: 'Renovación de pasaporte mexicano: requisitos 2026', slug: 'renovacion-pasaporte-mexicano' },
];

export const coverageStates = [
  'Durango',
  'CDMX',
  'Jalisco',
  'Nuevo León',
  'Chihuahua',
  'Coahuila',
  'Sinaloa',
  'Sonora',
  'Baja California',
  'Guanajuato',
  'Estado de México',
  'Zacatecas',
];
