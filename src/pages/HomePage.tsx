import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Globe, TrendingUp, Users, Car, HeartPulse, GraduationCap, UtensilsCrossed, Landmark, Leaf } from 'lucide-react';

const sectorIcons = [Car, HeartPulse, Landmark, GraduationCap, UtensilsCrossed, Leaf];
const valueIcons = [Briefcase, Globe, TrendingUp, Users];

const HomePage = () => {
  const { t, getPath } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
        {/* Geometric decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 border-2 border-secondary rotate-45" />
          <div className="absolute bottom-32 right-20 w-60 h-60 border border-secondary rotate-12" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-secondary/20 rotate-45" />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary-foreground/20 rotate-45" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>
          <Link to={getPath('/contacto')}>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading text-lg px-8 py-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {t.hero.cta}
            </Button>
          </Link>
        </div>

        {/* Bottom diagonal */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-6">
            {t.whatWeDo.title}
          </h2>
          <p className="text-muted-foreground font-body max-w-3xl mx-auto text-center text-lg leading-relaxed">
            {t.whatWeDo.description}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            {t.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.items.map((item, i) => {
              const Icon = valueIcons[i];
              return (
                <Card key={i} className="border-border bg-card hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            {t.sectors.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.sectors.items.map((sector, i) => {
              const Icon = sectorIcons[i];
              return (
                <div key={i} className="flex flex-col items-center p-6 bg-card border border-border rounded-xl hover:border-secondary/50 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-secondary/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <span className="text-sm font-heading font-medium text-foreground text-center">{sector}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-secondary rotate-45" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary-foreground/20 rotate-12" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            {t.ctaSection.title}
          </h2>
          <p className="text-primary-foreground/70 font-body max-w-2xl mx-auto mb-8 text-lg">
            {t.ctaSection.subtitle}
          </p>
          <Link to={getPath('/contacto')}>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading text-lg px-8 py-6">
              {t.ctaSection.cta}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
