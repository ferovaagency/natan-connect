import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Target, BarChart3, Headphones, Clock } from 'lucide-react';
import servicesHero from '@/assets/services-hero.jpg';

const diffIcons = [CheckCircle, Target, BarChart3, Headphones];

const ServiciosPage = () => {
  const { t, lang } = useLanguage();
  useScrollAnimation();

  return (
    <div className="min-h-screen pt-0 mt-0">
      {/* Hero */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesHero} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={768} />
        </div>
        <div className="absolute top-10 right-20 w-40 h-40 border border-primary-foreground/5 rotate-45 animate-float-diamond-slow" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <h1 className="text-primary-foreground mb-6 animate-fade-in-up">
            {t.services.title}
          </h1>
          <p className="text-lg text-white/80 font-body animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Timeline Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/30 hidden md:block" />

            <div className="space-y-10">
              {t.services.steps.map((step, i) => (
                <div key={i} className="relative flex gap-6 md:gap-10 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="shrink-0 w-16 h-16 rounded-2xl gradient-teal flex items-center justify-center font-heading font-bold text-primary-foreground text-xl relative z-10 shadow-lg">
                    {i + 1}
                  </div>
                  <div className="flex-1 glass-card rounded-2xl p-6 card-hover">
                    <h3 className="font-heading font-bold text-foreground mb-2 text-xl">{step.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed mb-3">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-secondary font-heading font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{step.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-foreground text-center mb-12 animate-on-scroll">
            {t.services.faq.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {t.services.faq.items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-2xl px-6 border-none animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left py-5 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Valores Agregados */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-foreground text-center mb-12 animate-on-scroll">
            {lang === 'es' ? 'Valores agregados' : 'Added Value'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              lang === 'es'
                ? 'Conocimiento profundo del mercado y sector a tratar'
                : 'Deep knowledge of the target market and sector',
              lang === 'es'
                ? 'Relaciones preestablecidas en mercados objetivos, organismos oficiales y empresas públicas'
                : 'Pre-established relationships in target markets, official bodies and public companies',
              lang === 'es'
                ? 'Generamos estructuras empresariales de amplio crecimiento, no de mantenimiento'
                : 'We build high-growth business structures, not maintenance ones',
              lang === 'es'
                ? 'Gestión basada en minimizar riesgos y maximizar utilidades'
                : 'Management focused on minimizing risks and maximizing profits',
              lang === 'es'
                ? 'Enfocados: no pretendemos hacer más de lo que sabemos hacer'
                : 'Focused: we do not pretend to do more than what we know how to do',
              lang === 'es'
                ? 'Mantenemos las políticas e imagen de las marcas que representamos'
                : 'We maintain the policies and image of the brands we represent',
              lang === 'es'
                ? 'Generamos reducción de costos operativos por ser una empresa externa especializada'
                : 'We generate cost reduction by operating as an external specialized firm',
              lang === 'es'
                ? 'Orientamos de forma correcta y sustentada la decisión de inversión en un territorio determinado'
                : 'We correctly and substantively guide investment decisions in a given territory',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 glass-card rounded-xl p-5 card-hover animate-on-scroll"
                style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-secondary font-heading font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-foreground text-center mb-12 animate-on-scroll">
            {t.services.differentiators.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.services.differentiators.items.map((item, i) => {
              const Icon = diffIcons[i];
              return (
                <div key={i} className="glass-card rounded-2xl p-6 card-hover text-center animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;
