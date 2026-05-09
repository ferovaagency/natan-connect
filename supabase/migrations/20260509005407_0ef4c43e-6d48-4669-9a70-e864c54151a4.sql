CREATE TABLE IF NOT EXISTS public.blogs (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  h1 TEXT NOT NULL,
  keyword_principal TEXT NOT NULL,
  keywords_secundarias TEXT[],
  industria TEXT NOT NULL,
  tipo TEXT NOT NULL DEFAULT 'informativo',
  frase_inicial TEXT NOT NULL,
  resumen_intro TEXT NOT NULL,
  contenido_html TEXT NOT NULL,
  cierre_html TEXT NOT NULL,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  imagen_portada TEXT,
  imagen_alt TEXT,
  autor TEXT DEFAULT 'Equipo Natan Comercial',
  publicado BOOLEAN NOT NULL DEFAULT FALSE,
  fecha_publicacion TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_publicado ON public.blogs(publicado);
CREATE INDEX IF NOT EXISTS idx_blogs_industria ON public.blogs(industria);

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "blogs_select_published" ON public.blogs FOR SELECT
  USING (publicado = true OR auth.role() = 'authenticated');

CREATE POLICY "blogs_select_anon_all" ON public.blogs FOR SELECT
  TO anon USING (publicado = true);

CREATE POLICY "blogs_insert_anon" ON public.blogs FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "blogs_update_anon" ON public.blogs FOR UPDATE
  TO anon USING (true);

CREATE POLICY "blogs_delete_anon" ON public.blogs FOR DELETE
  TO anon USING (true);

CREATE OR REPLACE FUNCTION public.update_blogs_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

DROP TRIGGER IF EXISTS trg_blogs_updated_at ON public.blogs;
CREATE TRIGGER trg_blogs_updated_at BEFORE UPDATE ON public.blogs
  FOR EACH ROW EXECUTE FUNCTION public.update_blogs_updated_at();