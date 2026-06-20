import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dir, '../public/guia-ds160.pdf');

// ── Colores de marca ────────────────────────────────────────────────────────
const NAVY  = '#0C182E';
const GOLD  = '#C9A96E';
const GRAY  = '#4A5568';
const LGRAY = '#F7F7F5';

const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 56, bottom: 56, left: 64, right: 64 },
  info: {
    Title: 'Los 7 errores más comunes en el DS-160 y cómo evitarlos',
    Author: 'Legatum Internacional',
    Subject: 'Guía de solicitud de visa americana',
  },
});

doc.pipe(createWriteStream(OUT));

const W = doc.page.width;
const M = { l: 64, r: 64, t: 56 };
const CONTENT_W = W - M.l - M.r;

// ── Helpers ─────────────────────────────────────────────────────────────────
function rule(color = GOLD, thickness = 1) {
  doc.moveTo(M.l, doc.y).lineTo(W - M.r, doc.y).lineWidth(thickness).strokeColor(color).stroke();
  doc.moveDown(0.5);
}

function sectionTitle(num, text) {
  doc.moveDown(1.2);
  const y = doc.y;
  // Número en gold
  doc.fontSize(28).fillColor(GOLD).font('Helvetica-Bold').text(`0${num}`, M.l, y, { continued: true });
  doc.fontSize(13).fillColor(NAVY).font('Helvetica-Bold').text(`  ${text}`, { lineBreak: true });
  doc.moveDown(0.3);
  rule(GOLD, 0.5);
}

function body(text) {
  doc.fontSize(10.5).fillColor(GRAY).font('Helvetica').text(text, M.l, doc.y, {
    width: CONTENT_W,
    lineGap: 3,
  });
  doc.moveDown(0.6);
}

function tip(text) {
  const bx = M.l;
  const by = doc.y;
  const bw = CONTENT_W;
  const bh = 36;
  doc.rect(bx, by, bw, bh).fill(LGRAY);
  doc.fontSize(9.5).fillColor(NAVY).font('Helvetica-Bold')
    .text('CONSEJO: ', bx + 10, by + 10, { continued: true })
    .font('Helvetica').fillColor(GRAY).text(text, { width: bw - 20, lineBreak: false });
  doc.y = by + bh + 8;
}

// ══════════════════════════════════════════════════════════════════════════════
// PORTADA
// ══════════════════════════════════════════════════════════════════════════════
doc.rect(0, 0, W, 200).fill(NAVY);
doc.fontSize(9).fillColor(GOLD).font('Helvetica-Bold')
  .text('LEGATUM INTERNACIONAL', M.l, 48, { tracking: 4 });
doc.moveDown(0.4);
doc.fontSize(24).fillColor('#FFFFFF').font('Helvetica-Bold')
  .text('Los 7 errores más comunes', M.l, doc.y, { width: CONTENT_W });
doc.fontSize(24).fillColor(GOLD).font('Helvetica-Bold')
  .text('en el DS-160', M.l, doc.y, { width: CONTENT_W });
doc.fontSize(11).fillColor('rgba(255,255,255,0.75)').font('Helvetica')
  .text('y cómo evitarlos para no poner en riesgo tu visa', M.l, doc.y + 6, { width: CONTENT_W });

doc.y = 220;

doc.fontSize(10.5).fillColor(GRAY).font('Helvetica')
  .text(
    'El DS-160 es el formulario de solicitud de visa de no inmigrante de los Estados Unidos. ' +
    'Un error, aunque sea menor, puede generar una negativa o retrasar meses el proceso. ' +
    'Esta guía reúne los siete errores que vemos con más frecuencia y cómo evitarlos.',
    M.l, doc.y, { width: CONTENT_W, lineGap: 3 }
  );
doc.moveDown(0.5);
rule();

// ══════════════════════════════════════════════════════════════════════════════
// ERROR 1
// ══════════════════════════════════════════════════════════════════════════════
sectionTitle(1, 'Nombre con errores ortográficos o diferente al pasaporte');
body(
  'El nombre completo debe coincidir exactamente con el pasaporte vigente: misma ortografía, ' +
  'mismo orden de apellidos, sin abreviaturas. Un acento de más o de menos puede generar ' +
  'inconsistencias que el oficial consular verá de inmediato.'
);
tip('Escribe tu nombre tal como aparece en la página de datos de tu pasaporte. Ni una coma diferente.');

// ERROR 2
sectionTitle(2, 'Historial de viajes incompleto o inexacto');
body(
  'El formulario pide los últimos cinco años de viajes internacionales. Omitir un país, ' +
  'poner fechas aproximadas o no declarar visitas anteriores a Estados Unidos son causas ' +
  'frecuentes de inconsistencias durante la entrevista.'
);
tip('Revisa los sellos de tu pasaporte anterior antes de empezar. Si no tienes registros exactos, anota el mes y año lo más preciso posible y sé consistente.');

// ERROR 3
sectionTitle(3, 'Información de empleo vaga o sin documentar');
body(
  'Escribir "empleado" o "negocio propio" sin detallar el nombre del empleador, dirección ' +
  'y teléfono de contacto levanta banderas. El oficial debe poder verificar que trabajas ' +
  'donde dices que trabajas.'
);
tip('Ten a la mano el RFC de tu empresa, el nombre legal completo y un número de teléfono que alguien pueda contestar si llaman a verificar.');

// ERROR 4
sectionTitle(4, 'Sección de vínculos familiares en Estados Unidos omitida o minimizada');
body(
  'Muchos solicitantes dejan en blanco o escriben "N/A" cuando tienen familiares en EE.UU. ' +
  'aunque sean ciudadanos o residentes. El consulado valora la honestidad: ocultar este dato ' +
  'es peor que declararlo correctamente.'
);
tip('Declara cualquier familiar en EE.UU. e indica el estatus migratorio que sepas. "No sé" es una respuesta válida y honesta.');

// ERROR 5
sectionTitle(5, 'Propósito del viaje inconsistente con el historial');
body(
  'Decir que vas de turismo cuando el historial muestra múltiples entradas de negocios, ' +
  'o declarar turismo y llevar una carta de invitación a una conferencia, crea una ' +
  'contradicción que el oficial notará.'
);
tip('El propósito en el DS-160 debe ser el propósito principal del viaje. Si es mixto, elige el predominante y prepárate para explicar los demás en la entrevista.');

// ERROR 6
sectionTitle(6, 'No guardar el número de confirmación (AA-)');
body(
  'Al completar el DS-160 el sistema genera un número de confirmación que empieza con "AA-". ' +
  'Sin ese número no puedes agendar tu cita, no puedes imprimir la confirmación y, en muchos ' +
  'casos, no puedes recuperar el formulario si cierras la sesión.'
);
tip('Guarda una captura de pantalla de la página de confirmación inmediatamente. Guárdala en la nube y envíatela por correo.');

// ERROR 7
sectionTitle(7, 'Respuestas de seguridad respondidas sin leer');
body(
  'La sección de preguntas de seguridad incluye preguntas sobre uso de drogas, afiliaciones ' +
  'políticas, crímenes de guerra y otras cuestiones serias. Muchos solicitantes marcan "No" ' +
  'rápidamente sin leer cada pregunta con cuidado, lo que puede generar problemas si la ' +
  'respuesta correcta era diferente.'
);
tip('Lee cada pregunta de seguridad detenidamente. Si tienes dudas sobre alguna, consulta a un gestor antes de responder: una respuesta incorrecta puede ser causa de inadmisibilidad permanente.');

// ══════════════════════════════════════════════════════════════════════════════
// CIERRE
// ══════════════════════════════════════════════════════════════════════════════
doc.moveDown(1.5);
rule(GOLD);
doc.moveDown(0.5);

doc.rect(M.l, doc.y, CONTENT_W, 80).fill(NAVY);
const closeY = doc.y;
doc.fontSize(12).fillColor('#FFFFFF').font('Helvetica-Bold')
  .text('¿Quieres que revisemos tu DS-160 antes de la entrevista?', M.l + 16, closeY + 14, {
    width: CONTENT_W - 32,
  });
doc.fontSize(10).fillColor(GOLD).font('Helvetica')
  .text('legatum-internacional.com  ·  contacto@legatum-internacional.com', M.l + 16, doc.y + 4, {
    width: CONTENT_W - 32,
  });

// Pie de página
const pageBottom = doc.page.height - 36;
doc.fontSize(8).fillColor('#AAAAAA').font('Helvetica')
  .text(
    `© ${new Date().getFullYear()} Legatum Internacional. Esta guía es informativa y no constituye asesoría legal.`,
    M.l, pageBottom, { width: CONTENT_W, align: 'center' }
  );

doc.end();
console.log('PDF generado en', OUT);
