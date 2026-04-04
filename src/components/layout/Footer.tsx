import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { t, getPath } = useLanguage();

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.services, path: '/servicios' },
    { label: t.nav.about, path: '/quienes-somos' },
    { label: t.nav.contact, path: '/contacto' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-2">NATAN</h3>
            <p className="text-sm text-secondary font-body mb-4">Commercial Agency</p>
            <p className="text-sm text-primary-foreground/70 font-body">
              {t.whatWeDo.description.slice(0, 120)}...
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{t.footer.links}</h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={getPath(item.path)}
                  className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors font-body"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{t.footer.contactInfo}</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70 font-body">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span>{t.contact.info.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>{t.contact.info.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>{t.contact.info.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm text-primary-foreground/50 font-body">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
