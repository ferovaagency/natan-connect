// deno-lint-ignore-file
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
};

const WHATSAPP_NUMBER = '573105607188';

const SITE_CONTEXT = `
NATAN COMMERCIAL AGENCY — agencia de intermediación comercial B2B con 18 años de experiencia conectando empresas con mercados de Colombia, Latinoamérica y Norteamérica.

PROPUESTA DE VALOR:
- Llevamos empresas norteamericanas y latinoamericanas a nuevos mercados sin riesgos.
- Procesos comprobados, expansión en doble vía, ganamos sobre resultados.

SERVICIOS:
1. Estudio de Pre-factibilidad (1-3 semanas) — análisis preliminar del mercado objetivo.
2. Estudio de Factibilidad — validación profunda de viabilidad comercial y regulatoria.
3. Estrategia Comercial — plan a medida por sector y mercado objetivo.
4. Ejecución y Comercialización — acompañamiento integral hasta cierre y post-venta.

SECTORES: Salud, Tecnología, Automotriz, Solidario, Educativo y otros.

PROYECTOS PROPIOS COMERCIALIZADOS:
- Polarizados Nanocerámicos AutoFilm Boutique: para vehículos (autos, camionetas, motos), apartamentos y residencias, ventanales y fachadas, locales comerciales y oficinas. Reducción de calor, protección UV, privacidad, ahorro energético.
- Árboles Natan: árboles navideños y decorativos premium para hogares, empresas, centros comerciales, hoteles y eventos.

CONTACTO:
- WhatsApp: +57 310 560 7188
- Email del sitio (revisar página /contacto)
- Web: https://natanca.com

REGLAS DE EXPANSIÓN:
- Operamos en Colombia, Latam y Norteamérica.
- 18 años de experiencia, 5 sectores principales, 3 regiones.
`;

const SYSTEM_PROMPT_BASE = `Eres "NataIA", el asesor virtual oficial de Natan Commercial Agency.

REGLAS DE COMPORTAMIENTO:
- Tono: directo, profesional, cálido. Sin "¡Excelente pregunta!", sin rodeos, sin emojis decorativos excesivos.
- Educación antes que venta. Ayuda real al usuario.
- Responde SIEMPRE en el idioma del usuario (español o inglés).
- Respuestas concisas (máx 4-6 oraciones por respuesta) salvo que pidan detalle.
- Usa SOLO la información del CONTEXTO DEL SITIO y los blogs proporcionados. Si no sabes algo o el usuario pide algo fuera de tu alcance (cotización exacta, asesoría personalizada, hablar con humano, info no listada), ESCALA a WhatsApp.

CÓMO ESCALAR:
- Cuando detectes que necesitas escalar (usuario pide humano, cotización, info que no tienes, o lo solicita explícitamente), incluye al FINAL de tu respuesta el marcador exacto:
  [ESCALATE_WHATSAPP]
- Antes del marcador, da una respuesta breve y útil indicando que un asesor humano lo atenderá por WhatsApp con el contexto de la conversación.
- NUNCA inventes información, productos o precios que no estén en el contexto.

EJEMPLOS DE CUÁNDO ESCALAR:
- "Quiero hablar con un humano" → escalar
- "¿Cuánto cuesta?" / "precios" → escalar
- "Necesito asesoría para mi caso" → escalar
- Pregunta sobre algo no cubierto en el contexto → escalar
- "Quiero contratarlos" / "agendar reunión" → escalar`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, history } = await req.json();
    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Mensaje requerido' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY no configurada');

    // Cargar últimos 5 blogs publicados como contexto adicional
    let blogsContext = '';
    try {
      const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
      const SUPABASE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? Deno.env.get('SUPABASE_ANON_KEY');
      if (SUPABASE_URL && SUPABASE_KEY) {
        const sb = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { data: blogs } = await sb
          .from('blogs')
          .select('h1, slug, resumen_intro, keyword_principal, industria')
          .eq('publicado', true)
          .order('fecha_publicacion', { ascending: false })
          .limit(5);
        if (blogs && blogs.length) {
          blogsContext = `\n\nBLOGS PUBLICADOS RECIENTES (puedes referenciarlos con su URL /blog/{slug}):\n` +
            blogs.map((b: any) => `- "${b.h1}" (/blog/${b.slug}) — ${b.industria}: ${b.resumen_intro}`).join('\n');
        }
      }
    } catch (err) {
      console.warn('No se pudieron cargar blogs:', err);
    }

    const systemPrompt = `${SYSTEM_PROMPT_BASE}\n\n=== CONTEXTO DEL SITIO ===\n${SITE_CONTEXT}${blogsContext}`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...((history || []) as Array<{ role: string; content: string }>).slice(-12).map((m) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content,
      })),
      { role: 'user', content: message },
    ];

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages,
        max_tokens: 600,
        temperature: 0.5,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Demasiadas solicitudes. Intenta en un momento.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Créditos de IA agotados.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const t = await response.text();
      console.error('AI gateway error:', response.status, t);
      throw new Error(`AI Gateway: ${response.status}`);
    }

    const data = await response.json();
    let reply: string = data?.choices?.[0]?.message?.content ?? '';

    // Detectar escalado
    const shouldEscalate = reply.includes('[ESCALATE_WHATSAPP]');
    reply = reply.replace(/\[ESCALATE_WHATSAPP\]/g, '').trim();

    let whatsapp_url: string | null = null;
    if (shouldEscalate) {
      // Construir resumen con últimos 8 mensajes
      const recent = [...(history || []), { role: 'user', content: message }].slice(-8);
      const summary = recent
        .map((m: any) => `${m.role === 'user' ? 'Cliente' : 'NataIA'}: ${m.content}`)
        .join('\n');
      const waText = `Hola, vengo del chat de Natan Commercial Agency.\n\nResumen de la conversación:\n${summary}\n\n¿Pueden ayudarme?`;
      whatsapp_url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
    }

    return new Response(
      JSON.stringify({ reply, escalate: shouldEscalate, whatsapp_url }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (e) {
    console.error('natan-chat error:', e);
    return new Response(
      JSON.stringify({
        error: (e as Error).message,
        reply: 'Lo siento, tengo un problema técnico. Te conecto con un asesor por WhatsApp.',
        escalate: true,
        whatsapp_url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, vengo del chat de Natan Commercial Agency y necesito ayuda.')}`,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
