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
  { label: 'Método', href: '/metodo/' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Preguntas', href: '/preguntas-frecuentes/' },
  { label: 'Casos', href: '/casos-de-exito/' },
  { label: 'Contacto', href: '/contacto/' },
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
    metaTitle: 'Visa Americana B1/B2 en México | Expediente y entrevista',
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
      {
        question: '¿Con cuánta anticipación debo iniciar el trámite antes de mi viaje?',
        answer:
          'Lo ideal es iniciar al menos tres meses antes. Los tiempos de cita consular varían según la ciudad y la temporada, y construir el expediente correctamente requiere tiempo. No recomendamos empezar con menos de seis semanas de anticipación.',
      },
      {
        question: '¿Qué pasa si me niegan la visa?',
        answer:
          'Una negativa no es definitiva. Antes de volver a solicitar, analizamos los motivos probables, fortalecemos el expediente y definimos el momento adecuado para intentarlo de nuevo. Presentar una segunda solicitud mal preparada puede complicar casos futuros.',
      },
      {
        question: '¿Cuánto cuesta la visa aparte de sus honorarios?',
        answer:
          'El derecho de solicitud (MRV fee) es aproximadamente 185 USD y se paga directamente al gobierno de EE.UU. antes de la cita. No está incluido en nuestros honorarios y no se reembolsa aunque la visa sea negada.',
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
    metaTitle: 'Renovación de Visa Americana sin Entrevista | Elegibilidad',
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
      {
        question: '¿Con cuánta anticipación debo renovar antes de que venza mi visa?',
        answer:
          'No es necesario esperar a que venza. Puede renovarla aunque aún tenga vigencia. Lo recomendable es iniciar al menos dos meses antes del viaje planeado, considerando que los tiempos del CAS y el procesamiento pueden variar.',
      },
      {
        question: '¿Qué pasa si mi visa ya lleva varios años vencida?',
        answer:
          'Dependiendo del tiempo transcurrido y su historial, puede seguir siendo elegible para el programa sin entrevista o bien necesitar una nueva solicitud completa. Lo evaluamos en la consulta inicial.',
      },
      {
        question: '¿Puedo renovar si tuve alguna situación migratoria irregular en EE.UU.?',
        answer:
          'Depende del tipo y tiempo de la irregularidad. Hay casos donde es posible renovar y otros donde no es recomendable intentarlo sin una estrategia clara. Antes de proceder, analizamos su historial con honestidad.',
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
    metaTitle: 'Visa Canadiense de Visitante (TRV) y Estudios | IRCC',
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
      {
        question: '¿Cuánto tiempo tarda IRCC en resolver la solicitud?',
        answer:
          'Los tiempos varían según la carga del sistema y el perfil del solicitante. En promedio oscilan entre dos y ocho semanas, aunque pueden extenderse. Le informamos el tiempo estimado al momento de iniciar y damos seguimiento al estado.',
      },
      {
        question: '¿Qué pasa si me niegan la visa canadiense?',
        answer:
          'IRCC emite una carta con los motivos de la negativa. Antes de reintentar, analizamos esa carta, identificamos qué falló en el expediente y definimos si tiene sentido volver a solicitar y cuándo.',
      },
      {
        question: '¿Tener visa americana ayuda a obtener la canadiense?',
        answer:
          'No garantiza nada, pero puede ser un elemento positivo en el contexto del expediente. Lo importante sigue siendo demostrar vínculos sólidos con México y un propósito de viaje claro. El expediente lo es todo ante IRCC.',
      },
    ],
  },
  {
    slug: 'eta-canada',
    flag: '🇨🇦',
    title: 'ETA Canadá',
    fee: { display: '$500 MXN', displayUSD: 'aprox. 28 USD' },
    summary:
      'Solicitud electrónica con revisión previa. Nos aseguramos de que cada dato sea correcto antes de enviar y le informamos del estado en tiempo real.',
    megaDesc: 'Autorización electrónica, tiempos reales',
    tags: ['Aplicación electrónica', 'Revisión previa', 'Seguimiento de estado'],
    metaTitle: 'ETA Canadá para Mexicanos | Autorización de viaje',
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
      {
        question: '¿Por cuánto tiempo es válida la ETA?',
        answer:
          'La ETA tiene una vigencia de hasta cinco años o hasta que venza su pasaporte, lo que ocurra primero. Cada entrada permite estancias de hasta seis meses.',
      },
      {
        question: '¿La ETA me permite trabajar o estudiar en Canadá?',
        answer:
          'No. La ETA es solo para visitas de turismo, tránsito o negocios cortos. Si su plan es estudiar o trabajar, necesita un permiso distinto y el proceso es diferente.',
      },
      {
        question: '¿Qué hago si mi ETA queda en revisión extendida?',
        answer:
          'Algunas solicitudes requieren documentación adicional o tardan más sin motivo aparente. Le acompañamos en ese proceso, revisamos si hay algo que aportar y le mantenemos informado hasta obtener respuesta.',
      },
    ],
  },
  {
    slug: 'pasaporte-mexicano',
    flag: '🇲🇽',
    title: 'Pasaporte Mexicano',
    fee: { display: '$500 MXN', displayUSD: 'aprox. 28 USD' },
    summary:
      'Primera vez, renovación o caso urgente. Revisamos su documentación antes de la cita para que no haya sorpresas en la SRE.',
    megaDesc: 'Primera vez, renovación, casos urgentes',
    tags: ['Primera vez', 'Renovación', 'Casos urgentes'],
    metaTitle: 'Pasaporte Mexicano: Primera Vez, Renovación y Urgentes',
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
      {
        question: '¿Cuánto tiempo tarda en emitirse el pasaporte?',
        answer:
          'En condiciones normales, entre tres y diez días hábiles después de la cita. En casos urgentes por viaje próximo, puede tramitarse en 24 a 72 horas según disponibilidad de la delegación SRE. Le orientamos sobre cómo solicitarlo.',
      },
      {
        question: '¿Puedo tramitar el pasaporte si soy de otro estado?',
        answer:
          'Sí. Puede acudir a cualquier delegación de la SRE en el país, no necesariamente en su estado de nacimiento. Le indicamos qué oficina conviene más según su ubicación y disponibilidad de citas.',
      },
      {
        question: '¿Qué pasa si mi pasaporte anterior venció hace muchos años?',
        answer:
          'No hay problema con eso. El proceso es el mismo que para renovación regular. Solo asegúrese de llevar el pasaporte anterior aunque esté muy vencido, ya que facilita el trámite.',
      },
    ],
  },
  {
    slug: 'pasaporte-estadounidense',
    flag: '🇺🇸',
    title: 'Pasaporte Estadounidense',
    fee: { display: '$500 MXN', displayUSD: 'aprox. 28 USD' },
    summary:
      'Renovación por correo (DS-82) y primera solicitud (DS-11) para ciudadanos americanos. Revisamos que su documentación esté completa antes de enviar.',
    megaDesc: 'DS-82, DS-11, documentación para ciudadanos',
    tags: ['Renovación DS-82', 'Primera solicitud DS-11', 'Ciudadanos americanos'],
    metaTitle: 'Pasaporte Estadounidense: DS-82 y DS-11 | Ciudadanos',
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
      {
        question: '¿Puedo tramitar el pasaporte americano estando en México?',
        answer:
          'Sí, pero el trámite debe hacerse ante una embajada o consulado de EE.UU. en México. Le orientamos sobre qué oficina corresponde según su ubicación y cómo preparar el expediente correctamente.',
      },
      {
        question: '¿Cuánto tiempo tarda el pasaporte estadounidense?',
        answer:
          'En tiempos normales, entre seis y doce semanas. Existe la opción de servicio acelerado que puede reducirlo a dos a tres semanas, con un costo adicional. Le explicamos las opciones según su urgencia.',
      },
      {
        question: '¿Qué pasa si perdí mi pasaporte anterior?',
        answer:
          'Debe reportar el pasaporte perdido antes de solicitar uno nuevo. El formulario aplicable cambia y se requiere documentación adicional. Le guiamos paso a paso para que el proceso no se complique.',
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

  // Visa americana
  {
    question: '¿Cuánto cuesta tramitar la visa americana B1/B2?',
    answer:
      'El pago de derechos consulares ante la Embajada de Estados Unidos es de $185 USD, no reembolsable independientemente del resultado. Ese monto no incluye los honorarios de asesoría. Tras la evaluación inicial le presentamos por escrito el costo total del servicio antes de que usted decida contratar.',
  },
  {
    question: '¿Cuánto tiempo hay que esperar para obtener cita en la Embajada de EE.UU.?',
    answer:
      'Los tiempos varían considerablemente según la sede. En 2025-2026, Ciudad de México y Guadalajara registran esperas de 5 a 13 meses para B1/B2. Monterrey y Hermosillo suelen ser más ágiles. Parte de nuestra labor es orientarle sobre la sede y el momento más conveniente para agendar.',
  },
  {
    question: '¿Qué documentos se necesitan para solicitar la visa B1/B2?',
    answer:
      'La lista base incluye: pasaporte vigente, formulario DS-160 completado, fotografía con las especificaciones del consulado, comprobante de pago de derechos y documentos que acrediten arraigo en México: empleo, propiedad, ingresos y vínculos familiares. La fortaleza del expediente depende de cómo se construye ese arraigo, no solo de tener los papeles.',
  },
  {
    question: '¿Qué preguntan en la entrevista de visa americana?',
    answer:
      'El oficial evalúa el propósito del viaje, los vínculos con México, la capacidad económica y la intención de retornar. Preguntas habituales: ¿Dónde trabaja? ¿Tiene familia en EE.UU.? ¿Quién paga el viaje? ¿Cuánto tiempo piensa quedarse? La preparación consiste en construir respuestas coherentes, no en memorizar frases.',
  },
  {
    question: '¿Por qué niegan la visa americana y qué puedo hacer?',
    answer:
      'Las causas más frecuentes son: arraigo insuficiente en México, inconsistencias en el DS-160, historial de visas violadas o antecedentes que generan dudas sobre la intención de retornar. Si le negaron la visa, evaluamos el expediente para determinar si conviene volver a solicitarla, cuándo y con qué mejoras, o si existe alguna otra alternativa.',
  },
  {
    question: '¿La visa americana de 10 años permite estar en EE.UU. 10 años?',
    answer:
      'No. La vigencia de la visa (generalmente 10 años) indica el periodo durante el cual puede solicitar entradas, pero la duración de cada estancia la determina el oficial de CBP en el puerto de entrada, normalmente hasta 180 días por visita. Son dos cosas distintas.',
  },
  {
    question: '¿Puedo trabajar en EE.UU. con visa de turista B1/B2?',
    answer:
      'No. La visa B1/B2 no autoriza empleo remunerado en territorio estadounidense. Hacerlo constituye una violación migratoria que puede derivar en deportación y veto de reingreso. Si su objetivo es trabajar o residir, existen visas específicas para ello que podemos evaluar con usted.',
  },
  {
    question: '¿Se puede renovar la visa americana sin entrevista?',
    answer:
      'En algunos casos sí. El programa de renovación sin entrevista aplica cuando la visa anterior es de la misma categoría, no ha expirado hace más de 48 meses en ciertos criterios y se cumplen otros requisitos. Le indicamos si usted califica durante la evaluación inicial.',
  },

  // Visa canadiense
  {
    question: '¿Los mexicanos necesitan visa para entrar a Canadá?',
    answer:
      'Depende del historial. Quienes hayan tenido una visa canadiense válida en los últimos 10 años o posean una visa estadounidense vigente pueden solicitar una eTA (autorización electrónica) para viajar por vía aérea. El resto de mexicanos requiere visa de visitante tradicional. Le indicamos cuál aplica a su situación.',
  },
  {
    question: '¿Cuánto cuesta y cuánto tarda la visa canadiense?',
    answer:
      'Los derechos consulares para la visa de visitante son de CAN$100, más CAN$85 adicionales si se requiere registro biométrico. Los tiempos de procesamiento oscilan entre 2 y 10 semanas. La eTA, en cambio, suele resolverse en minutos y cuesta CAN$7.',
  },
  {
    question: '¿Cuánto tiempo puedo permanecer en Canadá con visa de visitante?',
    answer:
      'El oficial de frontera determina la duración de la estancia al ingresar, generalmente hasta 6 meses. La visa de visitante no garantiza por sí sola ningún período: es la autoridad migratoria canadiense quien lo define en cada entrada.',
  },

  // Schengen y Europa
  {
    question: '¿Los mexicanos necesitan visa para viajar a Europa?',
    answer:
      'Para estancias de hasta 90 días dentro de cualquier período de 180 días, los ciudadanos mexicanos pueden ingresar al espacio Schengen sin visa. Sin embargo, a partir de la implementación del sistema ETIAS será obligatorio obtener una autorización previa en línea (costo aproximado €7, válida 3 años). Para estancias mayores o trabajo, se requiere visa nacional del país de destino.',
  },
  {
    question: '¿Qué es el ETIAS y cuándo entra en vigor?',
    answer:
      'ETIAS (Sistema Europeo de Información y Autorización de Viaje) es una autorización electrónica previa para viajeros exentos de visa al espacio Schengen. No es una visa, sino un registro obligatorio antes de viajar. La mayoría de las solicitudes se aprueban en pocos días. Le informamos sobre su estado de implementación actual al momento de planificar su viaje.',
  },
  {
    question: '¿Cuánto cuesta y qué requisitos tiene una visa Schengen?',
    answer:
      'Los derechos consulares oscilan entre €35 y €80 según el consulado. Se requiere: pasaporte con al menos 3 meses de validez tras la fecha de regreso, seguro de viaje con cobertura mínima de €30,000, itinerario, comprobante de hospedaje, medios económicos suficientes y documentación de arraigo en México. Los fondos no se devuelven si la solicitud es negada.',
  },

  // Pasaporte mexicano
  {
    question: '¿Qué documentos necesito para renovar mi pasaporte mexicano?',
    answer:
      'Pasaporte anterior (vigente o vencido), acta de nacimiento, identificación oficial vigente, CURP y fotografía reciente con las especificaciones de la SRE. En consulados en el extranjero puede solicitarse documentación adicional. Le orientamos sobre los requisitos exactos según su situación.',
  },
  {
    question: '¿Cuánto cuesta renovar el pasaporte mexicano?',
    answer:
      'En México, el pasaporte de 6 años tiene un costo de $2,440 MXN (aproximadamente). En consulados de Estados Unidos, los costos son alrededor de $99 USD (3 años), $133 USD (6 años) o $203 USD (10 años). Los montos se actualizan periódicamente; verifique con nosotros la tarifa vigente al momento de tramitar.',
  },
  {
    question: '¿Cuánto tiempo tarda la renovación del pasaporte mexicano?',
    answer:
      'Una vez presentada la solicitud con documentación completa, la emisión toma entre 1 y 4 semanas. El cuello de botella suele estar en conseguir la cita previa, que puede requerir de 2 a 5 meses según la oficina o el consulado. Planificar con antelación es fundamental.',
  },
  {
    question: '¿Se puede renovar el pasaporte mexicano sin cita?',
    answer:
      'En la mayoría de las delegaciones de la SRE y consulados no. La cita previa es obligatoria. Algunas oficinas habilitan módulos de atención urgente para casos justificados. Si tiene un viaje próximo y su pasaporte está vencido, coméntenos su situación para explorar las opciones disponibles.',
  },

  // Preguntas de proceso y perfil
  {
    question: '¿Qué es el "arraigo" y por qué es tan importante para obtener una visa?',
    answer:
      'El arraigo es el conjunto de vínculos que demuestran que usted tiene razones concretas para regresar a México: trabajo estable, bienes inmuebles, cónyuge o hijos, negocios. Los consulados lo evalúan para determinar si existe riesgo de que el visitante se quede en el extranjero más tiempo del permitido. Un expediente sólido de arraigo es frecuentemente la diferencia entre una aprobación y una negativa.',
  },
  {
    question: '¿Cuántas veces puedo solicitar una visa si me la niegan?',
    answer:
      'No existe un límite fijo de intentos, pero cada solicitud queda registrada. Presentar una nueva solicitud inmediatamente después de una negativa, sin haber resuelto la causa raíz, casi siempre resulta en otra negativa. El momento y las mejoras al expediente son claves; eso es lo que evaluamos antes de recomendar un nuevo intento.',
  },
  {
    question: '¿Qué pasa si mienten o cometen errores en el formulario de solicitud?',
    answer:
      'Las inconsistencias o falsedades en los formularios consulares, como el DS-160, pueden derivar en negativa inmediata y, en casos graves, en un veto permanente de ingreso al país. Parte de nuestra labor es revisar cada formulario en detalle antes de su presentación para evitar errores que puedan costar muy caro.',
  },
  {
    question: '¿Cuánto tiempo antes de mi viaje debo iniciar el trámite?',
    answer:
      'Depende del destino y la situación. Para la visa americana, los tiempos de cita en muchas sedes superan los 6 meses, por lo que iniciar con 9 a 12 meses de anticipación es prudente. Para Canadá, con 3 meses suele ser suficiente. Para la renovación de pasaporte, considere al menos 3 meses. Si ya tiene un viaje próximo, consúltenos cuanto antes.',
  },
  {
    question: '¿Pueden ayudarme si ya tuve una visa negada en otro consulado o país?',
    answer:
      'Sí. Muchos de nuestros casos involucran personas con negativas previas. El primer paso es entender por qué fue negada y si las circunstancias han cambiado. No siempre es conveniente reintentar de inmediato; a veces hay que fortalecer el expediente durante meses antes de volver a solicitar.',
  },
  {
    question: '¿Necesito hablar inglés para la entrevista consular en la Embajada de EE.UU.?',
    answer:
      'No es obligatorio. En los consulados de México hay intérpretes disponibles. Sin embargo, responder en inglés cuando se domina el idioma puede generar una impresión favorable. En cualquier caso, la preparación para la entrevista es parte del servicio que ofrecemos.',
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
  'Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Chiapas',
  'Chihuahua',
  'CDMX',
  'Coahuila',
  'Colima',
  'Durango',
  'Estado de México',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas',
];
