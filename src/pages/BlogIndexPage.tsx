import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/hooks/useLanguage';

interface Blog {
  id: number;
  slug: string;
  h1: string;
  resumen_intro: string;
  imagen_portada: string | null;
  imagen_alt: string | null;
  industria: string;
  fecha_publicacion: string | null;
  autor: string | null;
}

const FALLBACK =
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80';

export default function BlogIndexPage() {
  const { lang } = useLanguage();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title =
      lang === 'en'
        ? 'Blog | Natan Commercial Agency'
        : 'Blog | Natan Commercial Agency';
    supabase
      .from('blogs')
      .select(
        'id, slug, h1, resumen_intro, imagen_portada, imagen_alt, industria, fecha_publicacion, autor',
      )
      .eq('publicado', true)
      .order('fecha_publicacion', { ascending: false })
      .then(({ data }) => {
        setBlogs((data as Blog[]) || []);
        setLoading(false);
      });
  }, [lang]);

  return (
    <main className="container mx-auto px-4 py-24 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Blog
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          {lang === 'en'
            ? 'Insights, guides and trends about international commercial expansion.'
            : 'Guías, análisis y tendencias sobre expansión comercial internacional.'}
        </p>
      </header>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-80 rounded-2xl bg-muted animate-pulse" />
          ))}
        </div>
      ) : blogs.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">
          {lang === 'en'
            ? 'No articles published yet.'
            : 'Aún no hay artículos publicados.'}
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b) => (
            <Link
              key={b.id}
              to={lang === 'en' ? `/en/blog/${b.slug}` : `/blog/${b.slug}`}
              className="group glass-card rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={b.imagen_portada || FALLBACK}
                  alt={b.imagen_alt || b.h1}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK;
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-heading uppercase tracking-wider text-secondary mb-2">
                  {b.industria}
                </span>
                <h2 className="font-heading text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {b.h1}
                </h2>
                <p className="font-body text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                  {b.resumen_intro}
                </p>
                <div className="text-xs font-body text-muted-foreground/70 pt-4 border-t border-border/50">
                  {b.autor || 'Equipo Natan Commercial'}
                  {b.fecha_publicacion &&
                    ` · ${new Date(b.fecha_publicacion).toLocaleDateString(
                      lang === 'en' ? 'en-US' : 'es-CO',
                    )}`}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
