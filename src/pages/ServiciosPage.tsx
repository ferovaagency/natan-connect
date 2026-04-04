import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, BarChart3, Headphones } from 'lucide-react';

const diffIcons = [CheckCircle, Target, BarChart3, Headphones];

const ServiciosPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-40 h-40 border border-secondary rotate-45" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground/20 rotate-12" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            {t.services.title}
          </h1>
          <p className="text-lg text-primary-foreground/70 font-body max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {t.services.steps.map((step, i) => (
                <div key={i} className="relative flex gap-6 md:gap-8">
                  {/* Number */}
                  <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg md:text-2xl relative z-10">
                    {i + 1}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            {t.services.differentiators.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.differentiators.items.map((item, i) => {
              const Icon = diffIcons[i];
              return (
                <Card key={i} className="border-border bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
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
    </div>
  );
};

export default ServiciosPage;
