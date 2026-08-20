const SITE = 'https://www.legatum-internacional.com';
const LIST_ID = 3;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/subscribe' && request.method === 'POST') {
      return handleSubscribe(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function handleSubscribe(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Petición inválida' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().toLowerCase();
  if (!email || !email.includes('@')) {
    return Response.json({ error: 'Email inválido' }, { status: 400 });
  }

  const source = body.source ?? 'newsletter';

  // 1. Agregar contacto a Brevo
  const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': env.BREVO_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      listIds: [LIST_ID],
      updateEnabled: true,
      ...(body.nombre ? { attributes: { NOMBRE: body.nombre.trim() } } : {}),
    }),
  });

  const isNewContact =
    contactRes.status === 201 ||
    contactRes.status === 204 ||
    (await contactRes.json().catch(() => ({}))).code === 'duplicate_parameter';

  if (!isNewContact && contactRes.status !== 201 && contactRes.status !== 204) {
    return Response.json({ error: 'Error al suscribir' }, { status: 500 });
  }

  // 2. Si viene del popup DS-160, mandar la guía por correo
  if (source === 'popup_ds160') {
    await sendGuide(email, env);
  }

  return Response.json({ ok: true });
}

async function sendGuide(to, env) {
  await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': env.BREVO_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: 'Legatum Internacional',
        email: 'contacto@legatum-internacional.com',
      },
      to: [{ email: to }],
      subject: 'Tu guía: Los 7 errores del DS-160',
      htmlContent: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:32px 16px">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:6px;overflow:hidden;max-width:100%">
        <!-- Header -->
        <tr><td style="background:#0C182E;padding:32px 40px">
          <p style="margin:0;font-size:11px;letter-spacing:3px;color:#C9A96E;text-transform:uppercase">Legatum Internacional</p>
          <h1 style="margin:12px 0 0;font-size:22px;color:#fff;line-height:1.3">
            Los 7 errores más comunes en el DS-160
          </h1>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:36px 40px">
          <p style="margin:0 0 16px;color:#4A5568;font-size:15px;line-height:1.6">
            Gracias por solicitar la guía. La encontrarás adjunta a este correo en formato PDF.
          </p>
          <p style="margin:0 0 24px;color:#4A5568;font-size:15px;line-height:1.6">
            También puedes descargarla directamente desde aquí:
          </p>
          <table cellpadding="0" cellspacing="0">
            <tr><td style="background:#0C182E;border-radius:4px">
              <a href="${SITE}/guia-ds160.pdf" target="_blank"
                 style="display:inline-block;padding:12px 28px;color:#fff;font-size:14px;font-weight:bold;text-decoration:none">
                Descargar guía PDF →
              </a>
            </td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:32px 0">
          <p style="margin:0 0 8px;color:#4A5568;font-size:14px;line-height:1.6">
            ¿Tienes dudas sobre tu DS-160 o quieres que lo revisemos antes de tu entrevista?
          </p>
          <a href="${SITE}/contacto" style="color:#C9A96E;font-size:14px">Escríbenos aquí →</a>
        </td></tr>
        <!-- Footer -->
        <tr><td style="background:#f7f7f5;padding:20px 40px;text-align:center">
          <p style="margin:0;font-size:11px;color:#999">
            © ${new Date().getFullYear()} Legatum Internacional ·
            <a href="${SITE}" style="color:#999">legatum-internacional.com</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
      attachment: [
        {
          url: `${SITE}/guia-ds160.pdf`,
          name: 'Guia-DS160-Legatum.pdf',
        },
      ],
    }),
  });
}
