import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t, getPath } = useLanguage();

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.services, path: '/servicios' },
    { label: t.nav.about, path: '/quienes-somos' },
    { label: t.nav.contact, path: '/contacto' },
  ];

  return (
    <footer className="bg-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="NATAN Commercial Agency" 
                className="h-10 w-auto brightness-0 invert mb-4"
              />
            </div>
            <p className="text-sm text-primary-foreground/60 font-body leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-lg">{t.footer.links}</h4>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={getPath(item.path)}
                  className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors font-body"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-lg">{t.footer.contactInfo}</h4>
            <div className="flex flex-col gap-4 text-sm text-primary-foreground/60 font-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span>{t.contact.info.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>{t.contact.info.phones[0]}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>{t.contact.info.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator + copyright */}
        <div className="mt-12 pt-8 border-t border-secondary/20 text-center text-sm text-primary-foreground/40 font-body">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
