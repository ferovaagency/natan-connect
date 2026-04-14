import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Check, TreePine, Snowflake, Volume2, Lightbulb, MapPin, Star, Ruler } from 'lucide-react';

const WA_NUMBER = '573105607188';
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, quiero conocer más sobre el proyecto Árboles Natan')}`;

const specs = [
  { icon: <Ruler className="w-6 h-6" />, valueEs: '12 M', valueEn: '12 M', labelEs: 'Altura del árbol LED', labelEn: 'LED tree height' },
  { icon: <MapPin className="w-6 h-6" />, valueEs: '8 M', valueEn: '8 M', labelEs: 'Diámetro de base', labelEn: 'Base diameter' },
  { icon: <Lightbulb className="w-6 h-6" />, valueEs: '79 m²', valueEn: '79 m²', labelEs: 'Área requerida', labelEn: 'Required area' },
  { icon: <Volume2 className="w-6 h-6" />, valueEs: '360°', valueEn: '360°', labelEs: 'Audio envolvente', labelEn: 'Surround sound' },
];

const experience = [
  { icon: <TreePine className="w-6 h-6" />, titleEs: 'Árbol LED 12 m', titleEn: '12m LED Tree', descEs: 'Estructura cónica con tiras LED programables y animaciones dinámicas', descEn: 'Conical structure with programmable LED strips and dynamic animations' },
  { icon: <Volume2 className="w-6 h-6" />, titleEs: 'Sonido 360°', titleEn: '360° Sound', descEs: 'Sistema de audio envolvente que ambienta toda la plaza con música navideña', descEn: 'Surround audio system that fills the entire plaza with Christmas music' },
  { icon: <Snowflake className="w-6 h-6" />, titleEs: 'Máquina de Nieve', titleEn: 'Snow Machine', descEs: 'Efecto de nieve artificial para una experiencia navideña completamente inmersiva', descEn: 'Artificial snow effect for a fully immersive Christmas experience' },
];

const benefits = [
  { es: 'Atracción turística — convierte la plaza en destino obligado', en: 'Tourist attraction — turns the plaza into a must-visit destination' },
  { es: 'Publicidad de gran impacto visual que posiciona marcas y destinos', en: 'High visual impact advertising that positions brands and destinations' },
  { es: 'Punto de encuentro navideño para familias y visitantes', en: 'Christmas meeting point for families and visitors' },
  { es: 'Tecnología LED de vanguardia — programable con animaciones y cambios de color', en: 'Cutting-edge LED technology — programmable with animations and color changes' },
  { es: 'Audio envolvente que complementa la experiencia visual', en: 'Surround audio that complements the visual experience' },
  { es: 'Nieve artificial que crea una atmósfera mágica e inolvidable', en: 'Artificial snow that creates a magical, unforgettable atmosphere' },
];

const ArbolesNatan = () => {
  const { lang } = useLanguage();
  useScrollAnimation();
  const isEs = lang === 'es';

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/70 to-[#0F172A]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 font-heading text-sm px-4 py-1.5 animate-on-scroll">
            <TreePine className="w-3.5 h-3.5 mr-1.5" />
            {isEs ? 'Servicios Navidad · Colombia' : 'Christmas Services · Colombia'}
          </Badge>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-on-scroll">
            {isEs
              ? 'Árboles Natan — Iluminación Navideña de Alto Impacto'
              : 'Árboles Natan — High-Impact Christmas Lighting'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-on-scroll">
            {isEs
              ? 'Soluciones de iluminación navideña de alto impacto para espacios públicos y privados. Transformamos plazas y parques en destinos navideños memorables.'
              : 'High-impact Christmas lighting solutions for public and private spaces. We transform plazas and parks into memorable Christmas destinations.'}
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-heading text-lg px-8 py-6 gap-2 animate-on-scroll">
              <MessageCircle className="w-5 h-5" />
              {isEs ? 'Cotizar ahora por WhatsApp' : 'Get a quote via WhatsApp'}
            </Button>
          </a>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-20 px-4 bg-[#1E293B]">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-12 animate-on-scroll">
            {isEs ? 'Especificaciones Técnicas' : 'Technical Specifications'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specs.map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-6 text-center animate-on-scroll">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-4">
                  {s.icon}
                </div>
                <p className="font-heading font-bold text-3xl text-white mb-1">{isEs ? s.valueEs : s.valueEn}</p>
                <p className="text-slate-400 text-sm">{isEs ? s.labelEs : s.labelEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE 360° */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-4 animate-on-scroll">
            {isEs ? 'Experiencia 360°' : '360° Experience'}
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-on-scroll">
            {isEs
              ? 'Cada instalación combina tecnología LED, audio envolvente y efectos especiales para una experiencia navideña completa.'
              : 'Each installation combines LED technology, surround audio and special effects for a complete Christmas experience.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experience.map((e, i) => (
              <div key={i} className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(0,180,216,0.1)] animate-on-scroll">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-5">
                  {e.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{isEs ? e.titleEs : e.titleEn}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{isEs ? e.descEs : e.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY + VIDEO */}
      <section className="py-20 px-4 bg-[#1E293B]">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-12 animate-on-scroll">
            {isEs ? 'Galería del Proyecto' : 'Project Gallery'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
              alt={isEs ? 'Naturaleza y sostenibilidad' : 'Nature and sustainability'}
              className="w-full rounded-2xl object-cover aspect-[4/3] animate-on-scroll"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80"
              alt={isEs ? 'Árboles' : 'Trees'}
              className="w-full rounded-2xl object-cover aspect-[4/3] animate-on-scroll"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80"
              alt={isEs ? 'Bosque Colombia' : 'Colombia Forest'}
              className="w-full rounded-2xl object-cover aspect-[4/3] animate-on-scroll"
              loading="lazy"
            />
          </div>
          {/* Video */}
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <video
              controls
              className="w-full rounded-2xl shadow-lg"
              poster="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
            >
              <source src="/lovable-uploads/arboles-natan-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* IMPACT / BENEFITS */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-12 animate-on-scroll">
            {isEs ? 'Impacto en la Comunidad' : 'Community Impact'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 animate-on-scroll">
                <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm leading-relaxed">{isEs ? b.es : b.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 px-4 bg-[#1E293B]">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-8 md:p-12 text-center animate-on-scroll">
            <div className="flex justify-center gap-1 mb-6">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              {isEs ? 'Caso de Éxito — Parque Principal Cajicá' : 'Success Story — Main Park Cajicá'}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              {isEs
                ? 'Referente de nuestro trabajo: árbol de 12 metros de altura con figura de Santa Claus, iluminación de la iglesia en azul y decoración integral de la plaza.'
                : 'Showcase of our work: 12-meter tall tree with Santa Claus figure, blue church lighting and integral plaza decoration.'}
            </p>
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-heading">
              Cajicá, Colombia
            </Badge>
          </div>
        </div>
      </section>

      {/* SERVICE SUMMARY */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-12 animate-on-scroll">
            {isEs ? 'Resumen del Servicio' : 'Service Summary'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '12M', labelEs: 'Estructura LED cónica de gran formato', labelEn: 'Large-format conical LED structure' },
              { value: '8M', labelEs: 'Diámetro base — amplia presencia', labelEn: 'Base diameter — wide presence' },
              { value: '79M²', labelEs: 'Metros cuadrados necesarios', labelEn: 'Square meters required' },
              { value: '360°', labelEs: 'Experiencia auditiva completa', labelEn: 'Complete audio experience' },
            ].map((s, i) => (
              <div key={i} className="text-center animate-on-scroll">
                <p className="font-heading font-bold text-4xl text-secondary mb-2">{s.value}</p>
                <p className="text-slate-400 text-sm">{isEs ? s.labelEs : s.labelEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto text-center animate-on-scroll">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white mb-4">
            {isEs ? '¡Hagamos Magia esta Navidad!' : "Let's Make Magic This Christmas!"}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            {isEs
              ? 'Contáctanos y lleva a tu municipio o evento el árbol LED de 12 metros, sonido 360° y máquina de nieve — la experiencia navideña más impactante y memorable.'
              : 'Contact us and bring to your municipality or event the 12-meter LED tree, 360° sound and snow machine — the most impactful and memorable Christmas experience.'}
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
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

export default ArbolesNatan;
