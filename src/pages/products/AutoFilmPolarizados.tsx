import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircle, Phone, CreditCard, MapPin, Check, Sun, Eye, Shield, Star, Building2 } from 'lucide-react';

const WA_NUMBER = '573229596258';
const WA_QUOTE = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, quiero cotizar un polarizado nanocerámico')}`;
const WA_ARCH = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, quiero cotizar polarizado arquitectónico')}`;

const formatCOP = (n: number) => '$ ' + n.toLocaleString('es-CO');
const formatUSD = (n: number) => '$ ' + Math.round(n / 4200).toLocaleString('en-US');

interface Variant {
  nameEs: string;
  nameEn: string;
  priceCOP: number;
}

interface Gama {
  stars: number;
  badgeEs: string;
  badgeEn: string;
  badgeColor: string;
  nameEs: string;
  nameEn: string;
  descEs: string;
  descEn: string;
  variants: Variant[];
}

const gamas: Gama[] = [
  {
    stars: 5,
    badgeEs: 'GAMA PREMIUM',
    badgeEn: 'PREMIUM TIER',
    badgeColor: 'bg-secondary',
    nameEs: 'Lámina Antirrobo Nanosecurity',
    nameEn: 'Nanosecurity Anti-Theft Film',
    descEs: 'Protección 3 en 1: soporta bujías, bates y arma traumática. La lámina más resistente del mercado.',
    descEn: '3-in-1 protection: withstands spark plugs, bats and trauma weapons. The most resistant film on the market.',
    variants: [
      { nameEs: '330 micras (13 milésimas)', nameEn: '330 microns (13 mil)', priceCOP: 1180000 },
      { nameEs: '432 micras (17 milésimas)', nameEn: '432 microns (17 mil)', priceCOP: 1650000 },
      { nameEs: '635 micras (25 milésimas)', nameEn: '635 microns (25 mil)', priceCOP: 2250000 },
    ],
  },
  {
    stars: 4,
    badgeEs: 'GAMA ALTA',
    badgeEn: 'HIGH TIER',
    badgeColor: 'bg-primary',
    nameEs: 'Seguridad Anti Esquirla',
    nameEn: 'Anti-Shatter Security Film',
    descEs: 'Polarizado nanocerámico premium con película de seguridad. Reduce calor, bloquea UV 100%.',
    descEn: 'Premium nano ceramic tint with security film. Reduces heat, blocks 100% UV rays.',
    variants: [
      { nameEs: 'Polarizado nanocerámico premium', nameEn: 'Premium nano ceramic tint', priceCOP: 680000 },
      { nameEs: 'Con película seguridad 127 micras', nameEn: 'With 127 micron security film', priceCOP: 780000 },
    ],
  },
  {
    stars: 3,
    badgeEs: 'GAMA MEDIA',
    badgeEn: 'MID TIER',
    badgeColor: 'bg-slate-600',
    nameEs: 'Polarizado Nanocerámico HD (Unix)',
    nameEn: 'HD Nano Ceramic Tint (Unix)',
    descEs: 'Tecnología de vanguardia. Reduce deslumbramiento, bloquea UV 100%, rayos IR 20-40%.',
    descEn: 'Cutting-edge technology. Reduces glare, blocks 100% UV, 20-40% IR rays.',
    variants: [
      { nameEs: 'Nanocerámico HD', nameEn: 'HD Nano Ceramic', priceCOP: 520000 },
      { nameEs: 'Con película seguridad 127 micras', nameEn: 'With 127 micron security film', priceCOP: 610000 },
    ],
  },
  {
    stars: 2,
    badgeEs: 'GAMA BASE',
    badgeEn: 'BASE TIER',
    badgeColor: 'bg-slate-500',
    nameEs: 'Polarizado Nano Cerámico (SpeedMax)',
    nameEn: 'Nano Ceramic Tint (SpeedMax)',
    descEs: 'Tecnología nano cerámica coreana. Garantía 1-2 años. Bloquea UV 100%, rayos IR 20-40%.',
    descEn: 'Korean nano ceramic technology. 1-2 year warranty. Blocks 100% UV, 20-40% IR rays.',
    variants: [
      { nameEs: 'Nanocerámico', nameEn: 'Nano Ceramic', priceCOP: 380000 },
      { nameEs: 'Con película seguridad', nameEn: 'With security film', priceCOP: 450000 },
    ],
  },
];

const features = [
  { es: 'Experiencia en la instalación', en: 'Expert installation' },
  { es: 'Garantía ilimitada sobre producto y material', en: 'Unlimited product & material warranty' },
  { es: 'No altera la estructura original del vidrio', en: 'Preserves original glass structure' },
  { es: 'Tecnología nanocerámica — protección UV completa', en: 'Nano ceramic tech — full UV protection' },
  { es: 'Reducción de calor hasta 80%', en: 'Heat reduction up to 80%' },
  { es: 'Privacidad desde 5% hasta 70% de opacidad', en: 'Privacy from 5% to 70% opacity' },
  { es: 'Menor deslumbramiento al conducir', en: 'Reduced driving glare' },
  { es: 'Alta resistencia a abrasión y desgaste', en: 'High abrasion and wear resistance' },
  { es: 'Sin distorsiones ópticas', en: 'No optical distortions' },
  { es: 'Peritaje del vehículo o superficie antes de instalar', en: 'Vehicle or surface inspection before installation' },
  { es: 'Aplicable a vehículos, apartamentos, edificios, oficinas y locales comerciales', en: 'Applicable to vehicles, apartments, buildings, offices and commercial spaces' },
  { es: 'Control térmico del 70-80% en ventanales y fachadas', en: '70-80% thermal control on windows and facades' },
];

const faqItems = [
  {
    qEs: '¿Cuánto tiempo dura la instalación?',
    qEn: 'How long does installation take?',
    aEs: 'Dependiendo de la gama y el tipo de vehículo o superficie, entre 4 horas y 2 días. Te informamos el tiempo exacto al agendar.',
    aEn: 'Depending on the tier and vehicle or surface type, between 4 hours and 2 days. We inform you of the exact time when scheduling.',
  },
  {
    qEs: '¿Qué garantía tienen los polarizados?',
    qEn: 'What warranty do the tints have?',
    aEs: 'Garantía ilimitada sobre el producto y el material. Si el material se despega o genera burbujas, se reemplaza sin costo, siempre que no haya sido por mala manipulación del cliente.',
    aEn: 'Unlimited warranty on the product and material. If the material peels or bubbles, it is replaced at no cost, as long as it was not due to customer mishandling.',
  },
  {
    qEs: '¿Puedo bajar los vidrios después de instalar?',
    qEn: 'Can I roll down the windows after installation?',
    aEs: 'No durante las primeras 48 horas. El vehículo debe quedar expuesto al sol el mayor tiempo posible durante 2 a 8 semanas para completar el proceso de curado.',
    aEn: 'Not during the first 48 hours. The vehicle should be exposed to sunlight as much as possible for 2 to 8 weeks to complete the curing process.',
  },
  {
    qEs: '¿Las láminas antirrobo son blindaje?',
    qEn: 'Are anti-theft films bulletproof?',
    aEs: 'No. Las láminas antirrobo reducen significativamente el riesgo de robo manteniendo el vidrio unido ante impactos, pero no son blindaje certificado.',
    aEn: 'No. Anti-theft films significantly reduce the risk of theft by keeping the glass together upon impact, but they are not certified bulletproofing.',
  },
  {
    qEs: '¿Hacen polarizado arquitectónico para edificios enteros?',
    qEn: 'Do you do architectural tinting for entire buildings?',
    aEs: 'Sí. Trabajamos proyectos residenciales, comerciales e industriales en Bogotá y Colombia. Cotización por m².',
    aEn: 'Yes. We work on residential, commercial and industrial projects in Bogotá and Colombia. Quote per m².',
  },
  {
    qEs: '¿Se puede instalar en apartamentos y residencias?',
    qEn: 'Can it be installed in apartments and residences?',
    aEs: 'Sí. Instalamos láminas nanocerámicas en ventanas de apartamentos, casas, oficinas y locales comerciales. El polarizado arquitectónico reduce calor, mejora privacidad y protege muebles del deterioro por rayos UV.',
    aEn: 'Yes. We install nano ceramic films on apartment, house, office and commercial space windows. Architectural tinting reduces heat, improves privacy and protects furniture from UV damage.',
  },
  {
    qEs: '¿Qué pasa si el vidrio ya tiene rayas antes de instalar?',
    qEn: 'What if the glass already has scratches before installation?',
    aEs: 'Hacemos un peritaje completo antes de cada instalación. Los daños preexistentes quedan registrados y no son responsabilidad de Auto Film.',
    aEn: 'We perform a complete inspection before each installation. Pre-existing damage is documented and is not the responsibility of Auto Film.',
  },
];

const AutoFilmPolarizados = () => {
  const { lang } = useLanguage();
  const [currency, setCurrency] = useState<'COP' | 'USD'>('COP');
  useScrollAnimation();

  const isEs = lang === 'es';
  const price = (cop: number) => {
    if (currency === 'COP') return formatCOP(cop) + ' + IVA';
    return formatUSD(cop) + ' USD + tax';
  };

  const scrollToPrecios = () => {
    document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/70 to-[#0F172A]" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 font-heading text-sm px-4 py-1.5 animate-on-scroll">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            {isEs ? 'Disponible en Colombia · Bogotá D.C.' : 'Available in Colombia · Bogotá D.C.'}
          </Badge>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-on-scroll">
            {isEs
              ? 'Polarizados Nanocerámicos — Protección real para vehículos, edificios y espacios'
              : 'Nano Ceramic Tinting — Real Protection for Vehicles, Buildings & Spaces'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-on-scroll">
            {isEs
              ? 'Tecnología nanocerámica de vanguardia para autos, apartamentos, oficinas, locales comerciales y fachadas. Garantía ilimitada. Instalación boutique.'
              : 'Cutting-edge nano ceramic technology for cars, apartments, offices, commercial spaces and facades. Unlimited warranty. Boutique installation.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <a href={WA_QUOTE} target="_blank" rel="noopener noreferrer">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-heading text-lg px-8 py-6 gap-2 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                {isEs ? 'Cotizar ahora por WhatsApp' : 'Get a quote via WhatsApp'}
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={scrollToPrecios}
              className="border-white/30 text-white hover:bg-white/10 font-heading text-lg px-8 py-6 w-full sm:w-auto"
            >
              {isEs ? 'Ver planes y precios' : 'See plans & pricing'}
            </Button>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-20 px-4 bg-[#1E293B]">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-4 animate-on-scroll">
            {isEs ? 'Soluciones para cada superficie de vidrio' : 'Solutions for every glass surface'}
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto animate-on-scroll">
            {isEs
              ? 'No solo protegemos vehículos — instalamos polarizado nanocerámico en cualquier superficie de vidrio.'
              : "We don't just protect vehicles — we install nano ceramic tinting on any glass surface."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
                titleEs: 'Vehículos',
                titleEn: 'Vehicles',
                descEs: 'Autos, camionetas, motos — protección UV, calor y privacidad',
                descEn: 'Cars, SUVs, motorcycles — UV, heat protection and privacy',
              },
              {
                img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
                titleEs: 'Apartamentos y Residencias',
                titleEn: 'Apartments & Residences',
                descEs: 'Ventanas residenciales con control térmico y privacidad',
                descEn: 'Residential windows with thermal control and privacy',
              },
              {
                img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
                titleEs: 'Edificios y Fachadas',
                titleEn: 'Buildings & Facades',
                descEs: 'Ventanales y fachadas con reducción de calor del 70-80%',
                descEn: 'Windows and facades with 70-80% heat reduction',
              },
              {
                img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
                titleEs: 'Oficinas y Locales Comerciales',
                titleEn: 'Offices & Commercial Spaces',
                descEs: 'Espacios de trabajo con mejor confort térmico y visual',
                descEn: 'Workspaces with better thermal and visual comfort',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-secondary/50 animate-on-scroll">
                <img src={item.img} alt={isEs ? item.titleEs : item.titleEn} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{isEs ? item.titleEs : item.titleEn}</h3>
                  <p className="text-slate-400 text-sm">{isEs ? item.descEs : item.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-12 animate-on-scroll">
            {isEs ? 'Tus vidrios sufren más de lo que crees' : 'Your glass suffers more than you think'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Sun className="w-8 h-8" />,
                titleEs: 'El calor destruye interiores',
                titleEn: 'Heat destroys interiors',
                descEs: 'Los rayos UV e infrarrojos degradan tapicería, muebles, pisos y electrónicos en vehículos, hogares y oficinas.',
                descEn: 'UV and infrared rays degrade upholstery, furniture, floors and electronics in vehicles, homes and offices.',
              },
              {
                icon: <Eye className="w-8 h-8" />,
                titleEs: 'Sin privacidad en tus espacios',
                titleEn: 'No privacy in your spaces',
                descEs: 'Cualquiera puede ver el interior de tu vehículo, apartamento u oficina desde afuera.',
                descEn: 'Anyone can see inside your vehicle, apartment or office from outside.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                titleEs: 'Vidrios sin protección ante impactos',
                titleEn: 'Unprotected glass against impacts',
                descEs: 'Un vidrio sin lámina se hace añicos al romperse, poniendo en riesgo a todos dentro — en vehículos o edificios.',
                descEn: 'Glass without film shatters when broken, putting everyone inside at risk — in vehicles or buildings.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-8 text-center animate-on-scroll"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 text-amber-400 mb-5">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-3">
                  {isEs ? item.titleEs : item.titleEn}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {isEs ? item.descEs : item.descEn}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-secondary font-heading font-semibold text-lg animate-on-scroll">
            {isEs
              ? 'Auto Film tiene la solución nanocerámica exacta para cada necesidad — vehículos, hogares, edificios y más.'
              : 'Auto Film has the exact nano ceramic solution for every need — vehicles, homes, buildings and more.'}
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" className="py-20 px-4 bg-[#1E293B]">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-white animate-on-scroll">
              {isEs ? 'Gamas y Precios — Vehículos' : 'Tiers & Pricing — Vehicles'}
            </h2>
            <div className="inline-flex rounded-lg border border-slate-700 overflow-hidden animate-on-scroll">
              <button
                onClick={() => setCurrency('COP')}
                className={`px-4 py-2 text-sm font-heading font-semibold transition-colors ${
                  currency === 'COP' ? 'bg-secondary text-white' : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                COP
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2 text-sm font-heading font-semibold transition-colors ${
                  currency === 'USD' ? 'bg-secondary text-white' : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                USD
              </button>
            </div>
          </div>
          <p className="text-slate-400 mb-12 animate-on-scroll">
            {isEs
              ? 'Precios para vehículos particulares. Cotización personalizada para proyectos arquitectónicos, residenciales y comerciales.'
              : 'Prices for private vehicles. Custom quotes for architectural, residential and commercial projects.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {gamas.map((gama, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(0,180,216,0.1)] animate-on-scroll"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={`${gama.badgeColor} text-white border-0 font-heading text-xs tracking-wider`}>
                    {isEs ? gama.badgeEs : gama.badgeEn}
                  </Badge>
                  <span className="text-amber-400 text-sm">
                    {Array(gama.stars).fill('★').join('')}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {isEs ? gama.nameEs : gama.nameEn}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {isEs ? gama.descEs : gama.descEn}
                </p>
                <div className="space-y-3 mb-6">
                  {gama.variants.map((v, j) => (
                    <div key={j} className="flex items-center justify-between border-b border-slate-700/50 pb-3">
                      <span className="text-slate-300 text-sm">{isEs ? v.nameEs : v.nameEn}</span>
                      <span className="font-heading font-bold text-white text-sm">{price(v.priceCOP)}</span>
                    </div>
                  ))}
                </div>
                <a href={WA_QUOTE} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-heading gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {isEs ? 'Cotizar esta gama' : 'Quote this tier'}
                  </Button>
                </a>
              </div>
            ))}
          </div>

          {/* Architectural */}
          <div className="rounded-2xl border border-primary/30 bg-primary/20 backdrop-blur-sm p-8 md:p-12 animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-secondary" />
              <h3 className="font-heading font-bold text-2xl text-white">
                {isEs
                  ? 'Polarizado Arquitectónico — Edificios, Apartamentos, Oficinas y Locales'
                  : 'Architectural Tinting — Buildings, Apartments, Offices & Commercial Spaces'}
              </h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-3xl">
              {isEs
                ? 'Solución nanocerámica para ventanas de edificios, apartamentos, casas, oficinas y locales comerciales. Control térmico del 70-80%. Opciones reflectivas, decorativas y antirrobo. Ideal para cualquier superficie de vidrio.'
                : 'Nano ceramic solution for building, apartment, house, office and commercial space windows. 70-80% thermal control. Reflective, decorative and anti-theft options. Ideal for any glass surface.'}
            </p>
            <p className="font-heading font-bold text-white text-lg mb-6">
              {isEs
                ? 'Desde $85.000 hasta $150.000 por m² + IVA'
                : 'From $20 to $36 per m² + tax'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" alt={isEs ? 'Apartamento' : 'Apartment'} className="rounded-xl h-32 w-full object-cover" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" alt={isEs ? 'Edificio' : 'Building'} className="rounded-xl h-32 w-full object-cover" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt={isEs ? 'Oficina' : 'Office'} className="rounded-xl h-32 w-full object-cover" loading="lazy" />
            </div>
            <a href={WA_ARCH} target="_blank" rel="noopener noreferrer">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-heading gap-2">
                <MessageCircle className="w-4 h-4" />
                {isEs ? 'Cotizar proyecto arquitectónico' : 'Quote architectural project'}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-12 animate-on-scroll">
            {isEs ? 'Características clave' : 'Key Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 animate-on-scroll">
                <Check className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm leading-relaxed">{isEs ? f.es : f.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 px-4 bg-[#1E293B]">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-8 md:p-12 text-center animate-on-scroll">
            <div className="flex justify-center gap-1 mb-6">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
              {isEs
                ? '"Instalé el polarizado Nanosecurity en mi camioneta y tres meses después sigue perfecto. El equipo hizo un peritaje antes de empezar y eso me dio mucha confianza."'
                : '"I installed the Nanosecurity tint on my SUV and three months later it still looks perfect. The team did an inspection before starting and that gave me a lot of confidence."'}
            </blockquote>
            <p className="text-secondary font-heading font-semibold">Carlos M.</p>
            <p className="text-slate-400 text-sm">Bogotá, Colombia</p>
            <p className="text-slate-500 text-xs mt-2 italic">
              {isEs
                ? 'Experiencia representativa de cliente de Auto Film Polarizados Boutique'
                : 'Representative customer experience from Auto Film Polarizados Boutique'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white text-center mb-12 animate-on-scroll">
            {isEs ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-slate-700/50 rounded-xl bg-slate-800/40 px-6 animate-on-scroll"
              >
                <AccordionTrigger className="text-white font-heading font-semibold text-left hover:no-underline">
                  {isEs ? item.qEs : item.qEn}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed">
                  {isEs ? item.aEs : item.aEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto text-center animate-on-scroll">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-white mb-4">
            {isEs ? '¿Listo para proteger tus vidrios?' : 'Ready to protect your glass?'}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            {isEs
              ? 'Vehículos, apartamentos, edificios u oficinas — agenda tu instalación hoy. Atención en Bogotá, Carrera 53A N° 128C-30.'
              : 'Vehicles, apartments, buildings or offices — schedule your installation today. Located in Bogotá, Carrera 53A N° 128C-30.'}
          </p>
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-primary hover:bg-white/90 font-heading text-lg px-8 py-6 gap-2 mb-8">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +57 322 959 6258
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Carrera 53A N° 128C-30, Bogotá
            </span>
            <span className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Visa & Mastercard
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoFilmPolarizados;
