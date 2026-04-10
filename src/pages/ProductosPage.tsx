import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { products } from '@/lib/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

const formatCOP = (n: number) => '$ ' + n.toLocaleString('es-CO') + ' COP';
const formatUSD = (n: number) => '$ ' + n.toLocaleString('en-US') + ' USD';

const ProductosPage = () => {
  const { lang, t } = useLanguage();
  const [currency, setCurrency] = useState<'COP' | 'USD'>('COP');
  useScrollAnimation();

  const isEs = lang === 'es';

  const getProductPath = (p: typeof products[0]) => {
    if (lang === 'en') return `/en/products/nano-ceramic-tinting-autofilm`;
    return `/productos/${p.slug}`;
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="relative pt-20 pb-20 px-4 overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #00B4D8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 animate-on-scroll">
            {isEs
              ? 'Productos que representamos en Latinoamérica'
              : 'Products We Represent Across Latin America'}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto animate-on-scroll">
            {isEs
              ? 'Soluciones de clase mundial, disponibles con soporte local en Colombia y toda la región.'
              : 'World-class solutions, available with local support in Colombia and across the region.'}
          </p>
        </div>
      </section>

      {/* Currency toggle + Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-end mb-8 animate-on-scroll">
            <div className="inline-flex rounded-lg border border-slate-700 overflow-hidden">
              <button
                onClick={() => setCurrency('COP')}
                className={`px-4 py-2 text-sm font-heading font-semibold transition-colors ${
                  currency === 'COP'
                    ? 'bg-secondary text-white'
                    : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                COP
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2 text-sm font-heading font-semibold transition-colors ${
                  currency === 'USD'
                    ? 'bg-secondary text-white'
                    : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                USD
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,180,216,0.15)] animate-on-scroll"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.coverImage}
                    alt={isEs ? product.nameEs : product.nameEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-secondary/90 text-white border-0 font-heading text-xs uppercase tracking-wider">
                    {product.category}
                  </Badge>
                  {!product.available && (
                    <Badge className="absolute top-4 right-4 bg-amber-500/90 text-white border-0 font-heading text-xs">
                      {isEs ? 'Próximamente' : 'Coming Soon'}
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {isEs ? product.nameEs : product.nameEn}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {isEs ? product.taglineEs : product.taglineEn}
                  </p>
                  {product.available ? (
                    <Link to={getProductPath(product)}>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-heading gap-2">
                        {isEs ? 'Ver producto' : 'View product'}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full font-heading opacity-50">
                      {isEs ? 'Próximamente' : 'Coming Soon'}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto text-center animate-on-scroll">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white mb-4">
            {isEs
              ? '¿Tienes un producto para el mercado latinoamericano?'
              : 'Do you have a product for the Latin American market?'}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {isEs
              ? 'Podemos representarlo. Escríbenos.'
              : "We can represent it. Let's talk."}
          </p>
          <a
            href="https://wa.me/573105607188"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-primary hover:bg-white/90 font-heading text-lg px-8 py-6 gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductosPage;
