import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Check, TreePine, Snowflake, Volume2, Lightbulb, MapPin, Star, Ruler } from 'lucide-react';

const WA_NUMBER = '573105607188';
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, quiero conocer más sobre el servicio de Árboles LED de Navidad')}`;

const specs = [
  { icon: <Ruler className="w-6 h-6" />, value: '12 M', labelEs: 'Altura del árbol LED', labelEn: 'LED tree height' },
  { icon: <MapPin className="w-6 h-6" />, value: '8 M', labelEs: 'Diámetro de base', labelEn: 'Base diameter' },
  { icon: <Lightbulb className="w-6 h-6" />, value: '79 m²', labelEs: 'Área requerida para instalación', labelEn: 'Required installation area' },
  { icon: <Volume2 className="w-6 h-6" />, value: '360°', labelEs: 'Audio envolvente con música navideña', labelEn: 'Surround audio with Christmas music' },
];

const experience = [
  { icon: <TreePine className="w-6 h-6" />, titleEs: 'Árbol LED 12 m', titleEn: '12m LED Tree', descEs: 'Estructura cónica con tiras LED programables y animaciones dinámicas', descEn: 'Conical structure with programmable LED strips and dynamic animations' },
  { icon: <Volume2 className="w-6 h-6" />, titleEs: 'Sonido 360°', titleEn: '360° Sound', descEs: 'Sistema de audio envolvente que ambienta toda la plaza con música navideña', descEn: 'Surround audio system that fills the entire plaza with Christmas music' },
  { icon: <Snowflake className="w-6 h-6" />, titleEs: 'Máquina de Nieve', titleEn: 'Snow Machine', descEs: 'Efecto de nieve artificial para una experiencia navideña completamente inmersiva', descEn: 'Artificial snow effect for a fully immersive Christmas experience' },
];

const whyLED = [
  { es: 'Tecnología LED de vanguardia — estructuras programables con animaciones y cambios de color en tiempo real', en: 'Cutting-edge LED technology — programmable structures with animations and real-time color changes' },
  { es: 'Elemento publicitario de gran impacto visual que posiciona marcas y destinos en la memoria colectiva', en: 'High visual impact advertising element that positions brands and destinations in collective memory' },
  { es: 'Sonido 360° — audio envolvente que complementa la experiencia visual con música navideña', en: '360° sound — surround audio that complements the visual experience with Christmas music' },
  { es: 'Máquina de nieve — nieve artificial que crea una atmósfera mágica e inolvidable', en: 'Snow machine — artificial snow that creates a magical, unforgettable atmosphere' },
  { es: 'Atracción turística — convierte la plaza en destino obligado durante la temporada navideña', en: 'Tourist attraction — turns the plaza into a must-visit destination during the Christmas season' },
  { es: 'Punto de encuentro navideño para familias y visitantes de cada municipio', en: 'Christmas meeting point for families and visitors in each municipality' },
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
          style={{ backgroundImage: 'url(/lovable-uploads/arboles-natan-5.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/70 to-[#0F172A]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 font-heading text-sm px-4 py-1.5 animate-on-scroll">
            <TreePine className="w-3.5 h-3.5 mr-1.5" />
            {isEs ? 'Servicios Navidad · Colombia' : 'Christmas Services · Colombia'}
          </Badge>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-on-scroll">
            {isEs
              ? 'Árbol LED de Navidad — Iluminación de Alto Impacto'
              : 'LED Christmas Tree — High-Impact Lighting'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-on-scroll">
            {isEs
              ? 'Instalaciones de alto impacto visual que transforman plazas y parques en destinos navideños memorables. Cada árbol es un elemento publicitario de gran impacto que atrae visitantes y genera recordación de marca.'
              : 'High visual impact installations that transform plazas and parks into memorable Christmas destinations. Each tree is a high-impact advertising element that attracts visitors and generates brand recall.'}
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
                <p className="font-heading font-bold text-3xl text-white mb-1">{s.value}</p>
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
              ? 'Cada instalación combina tecnología LED, audio envolvente y efectos especiales para una experiencia navideña completa e inmersiva.'
              : 'Each installation combines LED technology, surround audio and special effects for a complete, immersive Christmas experience.'}
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
            {isEs ? 'Galería de Proyectos' : 'Project Gallery'}
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-on-scroll">
            {isEs
              ? 'Instalaciones realizadas en parques principales y plazas públicas de Colombia.'
              : 'Installations completed in main parks and public plazas across Colombia.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <img
              src="/lovable-uploads/arboles-natan-1.jpg"
              alt={isEs ? 'Árbol LED parque principal' : 'LED tree main park'}
              className="w-full rounded-2xl object-cover aspect-[4/3] animate-on-scroll"
              loading="lazy"
            />
            <img
              src="/lovable-uploads/arboles-natan-gallery-1.jpg"
              alt={isEs ? 'Proyecciones navideñas' : 'Christmas projections'}
              className="w-full rounded-2xl object-cover aspect-[4/3] animate-on-scroll"
              loading="lazy"
            />
            <img
              src="/lovable-uploads/arboles-natan-gallery-2.jpg"
              alt={isEs ? 'Instalación navideña' : 'Christmas installation'}
              className="w-full rounded-2xl object-cover aspect-[4/3] animate-on-scroll"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <img
              src="/lovable-uploads/arboles-natan-2.jpg"
              alt={isEs ? 'Efecto de nieve' : 'Snow effect'}
              className="w-full rounded-2xl object-cover aspect-[4/3] animate-on-scroll"
              loading="lazy"
            />
            <img
              src="/lovable-uploads/arboles-natan-4.jpg"
              alt={isEs ? 'Plaza navideña' : 'Christmas plaza'}
              className="w-full rounded-2xl object-cover aspect-[4/3] animate-on-scroll"
              loading="lazy"
            />
            <img
              src="/lovable-uploads/arboles-natan-gallery-3.jpg"
              alt={isEs ? 'Árbol con proyecciones' : 'Tree with projections'}
              className="w-full rounded-2xl object-cover aspect-[4/3] animate-on-scroll"
              loading="lazy"
            />
          </div>
          {/* Video */}
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h3 className="font-heading font-bold text-xl text-white text-center mb-6">
              {isEs ? 'Video del Proyecto' : 'Project Video'}
            </h3>
            <video
              controls
              className="w-full rounded-2xl shadow-lg"
              poster="/lovable-uploads/arboles-natan-5.jpg"
            >
              <source src="/lovable-uploads/arboles-natan-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* WHY LED */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-12 animate-on-scroll">
            {isEs ? '¿Por qué tecnología LED?' : 'Why LED Technology?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl mx-auto">
            {whyLED.map((b, i) => (
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
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-8 md:p-12 animate-on-scroll">
            <h3 className="font-heading font-bold text-2xl text-white text-center mb-6">
              {isEs ? 'Caso de Éxito' : 'Success Story'}
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src="/lovable-uploads/arboles-natan-3.jpg"
                alt={isEs ? 'Árbol LED Parque Principal Cajicá' : 'LED Tree Main Park Cajicá'}
                className="w-full max-w-lg rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            <h4 className="font-heading font-bold text-xl text-white text-center mb-4">
              {isEs ? 'Árbol LED Parque Principal Cajicá' : 'LED Tree Main Park Cajicá'}
            </h4>
            <p className="text-slate-300 text-center leading-relaxed mb-4">
              {isEs
                ? 'Referente de nuestro trabajo: árbol de 12 metros de altura con figura de Santa Claus, iluminación de la iglesia en azul y decoración integral de la plaza.'
                : 'Showcase of our work: 12-meter tall tree with Santa Claus figure, blue church lighting and integral plaza decoration.'}
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-center">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-heading">
                Cajicá, Cundinamarca — Colombia
              </Badge>
            </div>
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
              { value: '8M', labelEs: 'Diámetro base — amplia presencia en el espacio público', labelEn: 'Base diameter — wide presence in public space' },
              { value: '79M²', labelEs: 'Metros cuadrados necesarios para instalación', labelEn: 'Square meters required for installation' },
              { value: '360°', labelEs: 'Experiencia auditiva completa en toda la plaza', labelEn: 'Complete audio experience across the plaza' },
            ].map((s, i) => (
              <div key={i} className="text-center animate-on-scroll">
                <p className="font-heading font-bold text-4xl text-secondary mb-2">{s.value}</p>
                <p className="text-slate-400 text-sm">{isEs ? s.labelEs : s.labelEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-4 bg-[#1E293B]">
        <div className="container mx-auto text-center animate-on-scroll">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6">
            {isEs ? 'Contacto' : 'Contact'}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-300 mb-8">
            <div>
              <p className="font-heading font-semibold text-white">Gonzalo Almanza</p>
              <p className="text-sm">310 560 71 88</p>
            </div>
            <div>
              <p className="font-heading font-semibold text-white">Ana María Osorio</p>
              <p className="text-sm">350 460 94 31</p>
            </div>
            <div>
              <p className="text-sm">info@natanca.com</p>
              <p className="text-sm">www.natanca.com</p>
            </div>
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
