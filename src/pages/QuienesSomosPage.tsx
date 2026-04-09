import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Heart, Star, Users, Award, Target } from 'lucide-react';

const valueIcons = [Shield, Heart, Star, Users, Award, Target];

const QuienesSomosPage = () => {
  const { t } = useLanguage();
  useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 border border-primary-foreground/5 rotate-45 animate-float-diamond-slow" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <h1 className="text-primary-foreground mb-4 animate-fade-in-up">
            {t.about.title}
          </h1>
          <p className="text-lg text-white/80 font-body animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-muted-foreground font-body leading-relaxed text-center animate-on-scroll">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Leader */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-foreground text-center mb-12 animate-on-scroll">
            {t.about.leader.title}
          </h2>
          <div className="glass-card rounded-3xl p-8 md:p-12 animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-secondary/20">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                    alt={t.about.leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{t.about.leader.name}</h3>
                <p className="text-secondary font-heading font-medium mb-4">{t.about.leader.role}</p>
                <p className="text-muted-foreground font-body leading-relaxed">{t.about.leader.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-foreground text-center mb-12 animate-on-scroll">
            {t.about.milestones.title}
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/30 hidden md:block" />
            <div className="space-y-8">
              {t.about.milestones.items.map((item, i) => (
                <div key={i} className="relative flex gap-6 md:gap-10 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="shrink-0 w-16 h-16 rounded-2xl gradient-teal flex items-center justify-center font-heading font-bold text-primary-foreground text-sm relative z-10 shadow-lg">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-foreground text-center mb-12 animate-on-scroll">
            {t.about.corporateValues.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.about.corporateValues.items.map((item, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={i} className="glass-card rounded-2xl p-6 card-hover animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-foreground text-center mb-12 animate-on-scroll">
            {t.about.hiring.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {t.about.hiring.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass-card rounded-2xl px-6 border-none animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
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
    </div>
  );
};

export default QuienesSomosPage;
