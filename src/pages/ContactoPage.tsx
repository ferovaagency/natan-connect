import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/lib/supabase';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactoPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
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
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-10 w-40 h-40 border border-secondary rotate-45" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            {t.contact.title}
          </h1>
          <p className="text-lg text-primary-foreground/70 font-body">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder={t.contact.form.name} value={form.name} onChange={handleChange} required className="font-body" />
              <Input name="company" placeholder={t.contact.form.company} value={form.company} onChange={handleChange} className="font-body" />
              <Input name="country" placeholder={t.contact.form.country} value={form.country} onChange={handleChange} className="font-body" />
              <Input name="email" type="email" placeholder={t.contact.form.email} value={form.email} onChange={handleChange} required className="font-body" />
              <Input name="phone" placeholder={t.contact.form.phone} value={form.phone} onChange={handleChange} className="font-body" />
              <Textarea name="message" placeholder={t.contact.form.message} value={form.message} onChange={handleChange} rows={5} className="font-body" />
              <Button type="submit" disabled={loading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading">
                {loading ? t.contact.form.sending : t.contact.form.submit}
              </Button>
            </form>

            {/* Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-heading font-bold text-foreground">{t.contact.info.title}</h2>
              <div className="space-y-4 font-body">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{t.contact.info.address}</span>
                </div>
                {t.contact.info.phones.map((phone, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-secondary transition-colors">
                      {phone}
                    </a>
                  </div>
                ))}
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-secondary shrink-0" />
                  <a href="https://wa.me/573105607188" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                    WhatsApp: {t.contact.info.whatsapp}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-muted-foreground">{t.contact.info.email}</span>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  title="Natan Commercial Agency Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2!2d-74.05!3d4.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCra.+20+%23+137-67%2C+Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                  width="100%"
                  height="300"
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
