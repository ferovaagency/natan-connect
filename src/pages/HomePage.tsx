import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { HeartPulse, Cpu, Car, HandHeart, GraduationCap, Plus, TrendingDown, FileWarning, Clock, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-business.jpg';

const sectorIcons = [HeartPulse, Cpu, Car, HandHeart, GraduationCap, Plus];
const painIcons = [TrendingDown, FileWarning, Clock];

const HomePage = () => {
  const { t, getPath } = useLanguage();
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center gradient-primary overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        </div>

        {/* Floating diamonds */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute top-[15%] left-[8%] w-24 h-24 border border-primary-foreground/10 rotate-45 animate-float-diamond" />
          <div className="absolute top-[60%] right-[12%] w-40 h-40 border border-primary-foreground/10 rotate-45 animate-float-diamond-slow" />
          <div className="absolute top-[30%] right-[30%] w-16 h-16 bg-primary-foreground/5 rotate-45 animate-float-diamond-fast" />
          <div className="absolute bottom-[20%] left-[25%] w-32 h-32 border border-secondary/10 rotate-45 animate-float-diamond-slow" />
          <div className="absolute top-[10%] right-[8%] w-20 h-20 bg-secondary/5 rotate-45 animate-float-diamond" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-20 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-primary-foreground mb-2 leading-tight animate-fade-in-up">
            {t.hero.title}
          </h1>
          <p className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-secondary mb-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {t.hero.titleHighlight}
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            <Link to={getPath('/contacto')}>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading text-lg px-8 py-6 btn-hover">
                {t.hero.cta}
              </Button>
            </Link>
            <Link to={getPath('/servicios')}>
              <Button variant="outline" className="border-white/60 text-white bg-white/10 hover:bg-white/20 font-heading text-lg px-8 py-6 btn-hover">
                {t.hero.ctaSecondary}
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L1440 80L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30L0 80Z" fill="hsl(210 40% 98%)" />
          </svg>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-foreground text-center mb-16 animate-on-scroll">
            {t.painPoints.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {t.painPoints.items.map((item, i) => {
              const Icon = painIcons[i];
              return (
                <div key={i} className="glass-card rounded-2xl p-8 card-hover animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="font-heading text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-lg font-body text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            {t.painPoints.resolution}
          </p>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Expansión regional" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 gradient-primary opacity-40" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 md:h-64 md:mt-8">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80"
                alt="Reunión de negocios" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 gradient-primary opacity-40" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                alt="Latam" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 gradient-primary opacity-40" />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 md:h-64 md:mt-8">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Equipo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 gradient-primary opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-foreground text-center mb-16 animate-on-scroll">
            {t.howWeHelp.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.howWeHelp.steps.map((step, i) => (
              <div key={i} className="relative animate-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="glass-card rounded-2xl p-8 card-hover h-full">
                  <span className="text-6xl font-heading font-bold text-secondary/15 absolute top-4 right-6">{step.number}</span>
                  <div className="relative z-10">
                    <h3 className="font-heading text-foreground mb-3 text-xl">{step.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 border border-primary-foreground/5 rotate-45 animate-float-diamond-slow" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-primary-foreground text-center mb-16 animate-on-scroll">
            {t.socialProof.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.socialProof.stats.map((stat, i) => (
              <div key={i} className="text-center bg-white/5 rounded-2xl p-6 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-2 leading-tight">
                  {stat.value}
                </p>
                <p className="text-white/70 font-body text-xs md:text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-foreground text-center mb-16 animate-on-scroll">
            {t.sectors.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.sectors.items.map((sector, i) => {
              const Icon = sectorIcons[i];
              return (
                <div key={i} className="glass-card rounded-2xl p-6 card-hover group animate-on-scroll h-full" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors shrink-0">
                      <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <div className="min-h-[4rem]">
                      <h3 className="font-heading font-semibold text-foreground text-lg">{sector.name}</h3>
                      <p className="text-sm text-muted-foreground font-body">{sector.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/10 rotate-45 animate-float-diamond-slow" />
          <div className="absolute bottom-10 right-20 w-24 h-24 border border-primary-foreground/10 rotate-45 animate-float-diamond" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-on-scroll">
          <h2 className="text-primary-foreground mb-4">
            {t.ctaSection.title}
          </h2>
          <p className="text-primary-foreground/80 font-body max-w-xl mx-auto mb-10 text-lg">
            {t.ctaSection.subtitle}
          </p>
          <Link to={getPath('/contacto')}>
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-heading text-lg px-10 py-6 btn-hover">
              {t.ctaSection.cta}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
