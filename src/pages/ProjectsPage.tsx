import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, Check, TreePine, Car, Snowflake, Shield, Sun, Eye } from 'lucide-react';

const ProjectsPage = () => {
  const { lang } = useLanguage();
  useScrollAnimation();

  const isEs = lang === 'es';

  const getProjectPath = (p: typeof products[0]) => {
    if (lang === 'en') return `/en/projects/${p.slugEn}`;
    return `/proyectos/${p.slug}`;
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-[#0F172A] to-[#0F172A]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--secondary)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 animate-on-scroll">
            {isEs ? 'Nuestros Proyectos' : 'Our Projects'}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto animate-on-scroll">
            {isEs
              ? 'Soluciones concretas que hemos desarrollado para conectar mercados y generar resultados reales.'
              : 'Concrete solutions we have developed to connect markets and generate real results.'}
          </p>
        </div>
      </section>

      {/* Project 1: Auto Film Polarizados */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            {/* Image left */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
                alt={isEs ? 'Auto con polarizado profesional' : 'Car with professional tinting'}
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
            </div>
            {/* Text right */}
            <div>
              <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
                {isEs ? 'Proyecto Activo' : 'Active Project'}
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-white mt-2 mb-4">
                {isEs ? 'Polarizados Nanocerámicos Auto Film' : 'Nano Ceramic Window Tinting Auto Film'}
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                {isEs
                  ? 'Protección, privacidad y tecnología nanocerámica para tu vehículo o edificio. Instalación boutique en Bogotá con garantía ilimitada.'
                  : 'Protection, privacy and nano ceramic technology for your vehicle or building. Boutique installation in Bogotá with unlimited warranty.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Sun className="w-5 h-5" />, es: 'Reducción de calor 80%', en: '80% heat reduction' },
                  { icon: <Shield className="w-5 h-5" />, es: 'Protección UV 100%', en: '100% UV protection' },
                  { icon: <Eye className="w-5 h-5" />, es: 'Privacidad total', en: 'Total privacy' },
                ].map((feat, i) => (
                  <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-4 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary mb-2">
                      {feat.icon}
                    </div>
                    <p className="text-slate-300 text-sm font-heading font-medium">{isEs ? feat.es : feat.en}</p>
                  </div>
                ))}
              </div>
              {/* Image grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=800&q=80"
                  alt={isEs ? 'Proceso de aplicación' : 'Application process'}
                  className="w-full rounded-xl object-cover aspect-[3/2]"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
                  alt={isEs ? 'Resultado final' : 'Final result'}
                  className="w-full rounded-xl object-cover aspect-[3/2]"
                  loading="lazy"
                />
              </div>
              <Link to={getProjectPath(products[0])}>
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-heading gap-2 text-lg px-8 py-6">
                  {isEs ? 'Conocer más sobre este proyecto' : 'Learn more about this project'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-slate-700/50" />
      </div>

      {/* Project 2: Árboles Natan */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            {/* Text left */}
            <div className="order-2 lg:order-1">
              <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
                {isEs ? 'Proyecto Activo · Servicios Navidad' : 'Active Project · Christmas Services'}
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-white mt-2 mb-4">
                {isEs ? 'Árboles Natan — Árbol LED de Navidad' : 'Árboles Natan — LED Christmas Tree'}
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                {isEs
                  ? 'Instalaciones de alto impacto visual que transforman plazas y parques en destinos navideños memorables. Árbol LED de 12 metros, sonido 360° y máquina de nieve.'
                  : 'High visual impact installations that transform plazas and parks into memorable Christmas destinations. 12-meter LED tree, 360° sound and snow machine.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <TreePine className="w-5 h-5" />, es: 'Árbol LED 12m', en: '12m LED Tree' },
                  { icon: <Snowflake className="w-5 h-5" />, es: 'Máquina de Nieve', en: 'Snow Machine' },
                  { icon: <Car className="w-5 h-5" />, es: 'Sonido 360°', en: '360° Sound' },
                ].map((feat, i) => (
                  <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-4 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary mb-2">
                      {feat.icon}
                    </div>
                    <p className="text-slate-300 text-sm font-heading font-medium">{isEs ? feat.es : feat.en}</p>
                  </div>
                ))}
              </div>
              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {[
                  { es: 'Atracción turística — convierte la plaza en destino obligado', en: 'Tourist attraction — turns the plaza into a must-visit destination' },
                  { es: 'Publicidad de alto impacto visual', en: 'High visual impact advertising' },
                  { es: 'Punto de encuentro navideño para familias', en: 'Christmas meeting point for families' },
                  { es: 'Tecnología LED programable con animaciones', en: 'Programmable LED technology with animations' },
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{isEs ? b.es : b.en}</span>
                  </div>
                ))}
              </div>
              <Link to={getProjectPath(products[1])}>
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-heading gap-2 text-lg px-8 py-6">
                  {isEs ? 'Conocer más sobre este proyecto' : 'Learn more about this project'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            {/* Image right */}
            <div className="order-1 lg:order-2 relative">
              <img
                src="/lovable-uploads/arboles-natan-5.jpg"
                alt={isEs ? 'Árbol LED de Navidad' : 'LED Christmas Tree'}
                className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
              {/* Image grid */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                  src="/lovable-uploads/arboles-natan-1.jpg"
                  alt={isEs ? 'Árbol LED parque' : 'LED tree park'}
                  className="w-full rounded-xl object-cover aspect-[3/2]"
                  loading="lazy"
                />
                <img
                  src="/lovable-uploads/arboles-natan-3.jpg"
                  alt={isEs ? 'Caso de éxito Cajicá' : 'Success story Cajicá'}
                  className="w-full rounded-xl object-cover aspect-[3/2]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto text-center animate-on-scroll">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white mb-4">
            {isEs
              ? '¿Tienes un proyecto para el mercado latinoamericano?'
              : 'Do you have a project for the Latin American market?'}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {isEs
              ? 'Podemos representarlo. Escríbenos.'
              : "We can represent it. Let's talk."}
          </p>
          <a href="https://wa.me/573105607188" target="_blank" rel="noopener noreferrer">
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

export default ProjectsPage;
