import type { APIRoute } from 'astro';

// On-demand endpoint (runs on the Cloudflare Worker, not prerendered).
export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env as Record<string, string | undefined>;

  const formData = await request.formData();
  const token = formData.get('cf-turnstile-response');

  if (env.TURNSTILE_SECRET_KEY) {
    if (!token) {
      return Response.json(
        { success: false, message: 'Verificación de seguridad requerida.' },
        { status: 400 }
      );
    }
    const verification = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: String(token ?? ''),
          remoteip: request.headers.get('CF-Connecting-IP') ?? '',
        }),
      }
    );
    const result = (await verification.json()) as { success?: boolean };
    if (!result.success) {
      return Response.json(
        { success: false, message: 'Verificación de seguridad fallida. Intente de nuevo.' },
        { status: 400 }
      );
    }
  }

  formData.delete('cf-turnstile-response');

  if (env.WEB3FORMS_KEY) {
    formData.set('access_key', env.WEB3FORMS_KEY);
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return Response.json(data, { status: response.status });
};
