import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/hooks/useLanguage';
import { trackEvent } from '@/lib/analytics';
import { ArrowLeft } from 'lucide-react';

interface Blog {
  id: number;
  slug: string;
  h1: string;
  keyword_principal: string;
  industria: string;
  frase_inicial: string;
  resumen_intro: string;
  contenido_html: string;
  cierre_html: string;
  meta_title: string;
  meta_description: string;
  imagen_portada: string | null;
  imagen_alt: string | null;
  autor: string | null;
  fecha_publicacion: string | null;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('publicado', true)
      .maybeSingle()
      .then(({ data }) => {
        const b = data as Blog | null;
        setBlog(b);
        setLoading(false);
        if (b) {
          document.title = b.meta_title || b.h1;
          let meta = document.querySelector('meta[name="description"]');
          if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', 'description');
            document.head.appendChild(meta);
          }
          meta.setAttribute('content', b.meta_description || b.resumen_intro);
          trackEvent({ name: 'blog_read', slug: b.slug });
        }
      });
  }, [slug]);

  const blogPath = lang === 'en' ? '/en/blog' : '/blog';

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-24 max-w-3xl">
        <div className="h-12 w-1/2 bg-muted rounded mb-6 animate-pulse" />
        <div className="h-64 w-full bg-muted rounded-2xl mb-6 animate-pulse" />
        <div className="space-y-3">
          <div className="h-4 bg-muted rounded animate-pulse" />
          <div className="h-4 bg-muted rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
        </div>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="container mx-auto px-4 py-24 max-w-3xl text-center">
        <h1 className="font-heading text-3xl font-bold mb-4">
          {lang === 'en' ? 'Article not found' : 'Artículo no encontrado'}
        </h1>
        <Link to={blogPath} className="text-secondary hover:underline font-body">
          {lang === 'en' ? '← Back to blog' : '← Ver todos los artículos'}
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-24 max-w-3xl">
      <Link
        to={blogPath}
        className="inline-flex items-center gap-2 text-sm font-heading text-muted-foreground hover:text-secondary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Blog
      </Link>

      {blog.imagen_portada && (
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-10 shadow-lg">
          <img
            src={blog.imagen_portada}
            alt={blog.imagen_alt || blog.h1}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none text-foreground">
        <h1 className="font-heading">{blog.h1}</h1>
        <p className="text-xl font-body font-semibold text-foreground/90">
          {blog.frase_inicial}
        </p>
        <p className="font-body text-muted-foreground">{blog.resumen_intro}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.contenido_html }} />
        <hr />
        <div dangerouslySetInnerHTML={{ __html: blog.cierre_html }} />
      </article>

      <footer className="mt-12 pt-6 border-t border-border text-sm font-body text-muted-foreground">
        {lang === 'en' ? 'By' : 'Por'} {blog.autor || 'Equipo Natan Commercial'}
        {blog.fecha_publicacion &&
          ` · ${new Date(blog.fecha_publicacion).toLocaleDateString(
            lang === 'en' ? 'en-US' : 'es-CO',
          )}`}
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: blog.h1,
            author: { '@type': 'Organization', name: blog.autor || 'Natan Commercial Agency' },
            datePublished: blog.fecha_publicacion,
            image: blog.imagen_portada,
            publisher: { '@type': 'Organization', name: 'Natan Commercial Agency' },
            description: blog.meta_description,
            keywords: blog.keyword_principal,
          }),
        }}
      />
    </main>
  );
}
