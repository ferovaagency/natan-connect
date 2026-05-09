import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Loader2, Sparkles, Save, Eye } from 'lucide-react';
import { toast } from 'sonner';

const INDUSTRIAS = [
  { value: 'expansion_internacional', label: 'Expansión internacional / Comercial B2B' },
  { value: 'tecnologia', label: 'Tecnología / SaaS / TIC' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'salud', label: 'Salud / Clínicas' },
  { value: 'educacion', label: 'Educación / Instituciones' },
  { value: 'construccion', label: 'Construcción / Inmobiliaria' },
  { value: 'legal_financiero', label: 'Legal / Financiero' },
  { value: 'retail_moda', label: 'Retail / Moda / Lifestyle' },
  { value: 'restaurantes', label: 'Restaurantes / Gastronomía' },
];

const TIPOS = [
  { value: 'rapido', label: 'Post rápido (600-900 palabras)' },
  { value: 'informativo', label: 'Informativo (800-1200 palabras)' },
  { value: 'autoridad', label: 'Autoridad (1200-2000 palabras)' },
  { value: 'guia', label: 'Guía completa (2000-3500 palabras)' },
];

interface BlogDraft {
  h1: string;
  slug: string;
  keyword_principal: string;
  keywords_secundarias: string[];
  industria: string;
  tipo: string;
  frase_inicial: string;
  resumen_intro: string;
  contenido_html: string;
  cierre_html: string;
  meta_title: string;
  meta_description: string;
  imagen_alt: string;
}

export default function GeneradorBlogs() {
  const [form, setForm] = useState({
    tema: '',
    keyword_principal: '',
    industria: 'expansion_internacional',
    tipo: 'informativo',
    audiencia_objetivo: '',
    notas_adicionales: '',
  });
  const [generando, setGenerando] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [blog, setBlog] = useState<BlogDraft | null>(null);
  const [imagenPortada, setImagenPortada] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  const generar = async () => {
    if (!form.tema || !form.keyword_principal) {
      toast.error('Tema y keyword son obligatorios');
      return;
    }
    setGenerando(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-blog-post', {
        body: form,
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setBlog(data as BlogDraft);
      toast.success('Artículo generado');
    } catch (e) {
      toast.error('Error: ' + (e as Error).message);
    } finally {
      setGenerando(false);
    }
  };

  const guardar = async (publicar: boolean) => {
    if (!blog) return;
    setGuardando(true);
    try {
      const payload = {
        slug: blog.slug,
        h1: blog.h1,
        keyword_principal: blog.keyword_principal,
        keywords_secundarias: blog.keywords_secundarias,
        industria: blog.industria,
        tipo: blog.tipo,
        frase_inicial: blog.frase_inicial,
        resumen_intro: blog.resumen_intro,
        contenido_html: blog.contenido_html,
        cierre_html: blog.cierre_html,
        meta_title: blog.meta_title,
        meta_description: blog.meta_description,
        imagen_portada: imagenPortada || null,
        imagen_alt: blog.imagen_alt,
        publicado: publicar,
        fecha_publicacion: publicar ? new Date().toISOString() : null,
      };
      const { error } = await supabase.from('blogs').upsert(payload, { onConflict: 'slug' });
      if (error) throw error;
      toast.success(publicar ? `Publicado en /blog/${blog.slug}` : 'Borrador guardado');
    } catch (e) {
      toast.error('Error guardando: ' + (e as Error).message);
    } finally {
      setGuardando(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-2">
        Generador de blogs con IA
      </h1>
      <p className="font-body text-muted-foreground mb-8">
        Sigue la Guía Editorial Ferova adaptada a Natan Commercial Agency
      </p>

      <Card className="p-6 mb-8">
        <h2 className="font-heading text-xl font-semibold mb-4">Brief del artículo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Label>Tema *</Label>
            <Input
              value={form.tema}
              onChange={(e) => setForm({ ...form, tema: e.target.value })}
              placeholder="Cómo expandir tu empresa de salud a Latinoamérica"
            />
          </div>
          <div>
            <Label>Keyword principal *</Label>
            <Input
              value={form.keyword_principal}
              onChange={(e) => setForm({ ...form, keyword_principal: e.target.value })}
              placeholder="expansión comercial Latinoamérica"
            />
          </div>
          <div>
            <Label>Industria</Label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={form.industria}
              onChange={(e) => setForm({ ...form, industria: e.target.value })}
            >
              {INDUSTRIAS.map((i) => (
                <option key={i.value} value={i.value}>
                  {i.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label>Tipo de artículo</Label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={form.tipo}
              onChange={(e) => setForm({ ...form, tipo: e.target.value })}
            >
              {TIPOS.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label>Audiencia objetivo</Label>
            <Input
              value={form.audiencia_objetivo}
              onChange={(e) => setForm({ ...form, audiencia_objetivo: e.target.value })}
              placeholder="CEOs y directores comerciales"
            />
          </div>
          <div className="md:col-span-2">
            <Label>Notas adicionales</Label>
            <Textarea
              rows={3}
              value={form.notas_adicionales}
              onChange={(e) => setForm({ ...form, notas_adicionales: e.target.value })}
              placeholder="Mencionar el modelo de doble vía, casos del sector salud, etc."
            />
          </div>
        </div>
        <Button onClick={generar} disabled={generando} className="mt-6" size="lg">
          {generando ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4 mr-2" />
          )}
          Generar con IA
        </Button>
      </Card>

      {blog && (
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-heading text-xl font-semibold">Artículo generado</h2>
            <Button variant="outline" size="sm" onClick={() => setPreviewMode(!previewMode)}>
              <Eye className="w-4 h-4 mr-2" />
              {previewMode ? 'Editar' : 'Vista previa'}
            </Button>
          </div>

          {previewMode ? (
            <article className="prose prose-lg max-w-none">
              <h1>{blog.h1}</h1>
              <p className="lead text-xl">
                <strong>{blog.frase_inicial}</strong>
              </p>
              <p>{blog.resumen_intro}</p>
              <div dangerouslySetInnerHTML={{ __html: blog.contenido_html }} />
              <hr />
              <div dangerouslySetInnerHTML={{ __html: blog.cierre_html }} />
            </article>
          ) : (
            <div className="space-y-4">
              <div>
                <Label>Título ({blog.h1.length}/65)</Label>
                <Input value={blog.h1} onChange={(e) => setBlog({ ...blog, h1: e.target.value })} />
              </div>
              <div>
                <Label>Slug</Label>
                <Input
                  value={blog.slug}
                  onChange={(e) => setBlog({ ...blog, slug: e.target.value })}
                />
              </div>
              <div>
                <Label>Frase inicial</Label>
                <Textarea
                  rows={2}
                  value={blog.frase_inicial}
                  onChange={(e) => setBlog({ ...blog, frase_inicial: e.target.value })}
                />
              </div>
              <div>
                <Label>Resumen introductorio</Label>
                <Textarea
                  rows={4}
                  value={blog.resumen_intro}
                  onChange={(e) => setBlog({ ...blog, resumen_intro: e.target.value })}
                />
              </div>
              <div>
                <Label>Contenido HTML</Label>
                <Textarea
                  rows={15}
                  className="font-mono text-xs"
                  value={blog.contenido_html}
                  onChange={(e) => setBlog({ ...blog, contenido_html: e.target.value })}
                />
              </div>
              <div>
                <Label>Cierre HTML</Label>
                <Textarea
                  rows={6}
                  className="font-mono text-xs"
                  value={blog.cierre_html}
                  onChange={(e) => setBlog({ ...blog, cierre_html: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Meta title ({blog.meta_title.length}/60)</Label>
                  <Input
                    value={blog.meta_title}
                    onChange={(e) => setBlog({ ...blog, meta_title: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Meta description ({blog.meta_description.length}/160)</Label>
                  <Input
                    value={blog.meta_description}
                    onChange={(e) => setBlog({ ...blog, meta_description: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label>URL imagen portada</Label>
                <Input
                  value={imagenPortada}
                  onChange={(e) => setImagenPortada(e.target.value)}
                  placeholder="https://..."
                />
              </div>
              <div>
                <Label>Alt imagen</Label>
                <Input
                  value={blog.imagen_alt}
                  onChange={(e) => setBlog({ ...blog, imagen_alt: e.target.value })}
                />
              </div>
            </div>
          )}

          <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={() => guardar(false)}
              disabled={guardando}
              size="lg"
              className="flex-1"
            >
              {guardando ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Guardar borrador
            </Button>
            <Button
              onClick={() => guardar(true)}
              disabled={guardando}
              size="lg"
              className="flex-1"
            >
              {guardando ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Publicar
            </Button>
          </div>
        </Card>
      )}
    </main>
  );
}
