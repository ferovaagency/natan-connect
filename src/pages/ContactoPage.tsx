import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/lib/supabase';
import { Phone, MessageCircle, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactoPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', country: '', email: '', phone: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('leads').insert([{
        name: form.name,
        company: form.company,
        country: form.country,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }]);

      if (error) throw error;

      toast({ title: t.contact.form.success });
      setForm({ name: '', company: '', country: '', email: '', phone: '', message: '' });
    } catch {
      toast({ title: t.contact.form.error, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-0 mt-0">
      {/* Hero */}
      <section className="py-16 gradient-primary relative overflow-hidden px-[64px]">
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <h1 className="text-primary-foreground mb-4 animate-fade-in-up">
            {t.contact.title}
          </h1>
          <p className="text-lg text-white/80 font-body animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 animate-on-scroll">
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder={t.contact.form.name} value={form.name} onChange={handleChange} required className="font-body bg-background/50 border-border/50 rounded-xl h-12" />
                  <Input name="company" placeholder={t.contact.form.company} value={form.company} onChange={handleChange} className="font-body bg-background/50 border-border/50 rounded-xl h-12" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="country" placeholder={t.contact.form.country} value={form.country} onChange={handleChange} className="font-body bg-background/50 border-border/50 rounded-xl h-12" />
                  <Input name="email" type="email" placeholder={t.contact.form.email} value={form.email} onChange={handleChange} required className="font-body bg-background/50 border-border/50 rounded-xl h-12" />
                </div>
                <Input name="phone" placeholder={t.contact.form.phone} value={form.phone} onChange={handleChange} className="font-body bg-background/50 border-border/50 rounded-xl h-12" />
                <Textarea name="message" placeholder={t.contact.form.message} value={form.message} onChange={handleChange} rows={5} className="font-body bg-background/50 border-border/50 rounded-xl" />
                <Button type="submit" disabled={loading} className="w-full gradient-teal text-primary-foreground font-heading text-lg h-14 rounded-xl btn-hover">
                  {loading ? t.contact.form.sending : t.contact.form.submit}
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-body">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  {t.contact.responseTime}
                </div>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-8 animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-6">{t.contact.info.title}</h2>
                <div className="space-y-5 font-body">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-muted-foreground pt-2">{t.contact.info.email}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <a href="https://wa.me/573105607188" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors pt-2">
                      WhatsApp: {t.contact.info.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              {/* Prefer to call */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">{t.contact.preferCall}</h3>
                <div className="space-y-3">
                  {t.contact.info.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-lg font-heading font-semibold text-primary hover:text-secondary transition-colors">
                      <Phone className="w-5 h-5" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  title="Natan Commercial Agency Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2!2d-74.05!3d4.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCra.+20+%23+137-67%2C+Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;
