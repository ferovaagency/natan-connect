import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Heart, Star, Users, Award, Target, User } from 'lucide-react';

const valueIcons = [Shield, Heart, Star, Users, Award, Target];

const QuienesSomosPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 border border-secondary rotate-45" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            {t.about.title}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-muted-foreground font-body leading-relaxed text-center">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Leader */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            {t.about.leader.title}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <User className="w-20 h-20 text-primary/40" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {t.about.leader.name}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {t.about.leader.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            {t.about.corporateValues.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.about.corporateValues.items.map((item, i) => {
              const Icon = valueIcons[i];
              return (
                <Card key={i} className="border-border bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            {t.about.hiring.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {t.about.hiring.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="font-heading font-medium text-foreground text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body">
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
