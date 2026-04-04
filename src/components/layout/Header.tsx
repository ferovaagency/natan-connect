import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { t, lang, toggleLanguage, getPath } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.services, path: '/servicios' },
    { label: t.nav.about, path: '/quienes-somos' },
    { label: t.nav.contact, path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={getPath('/')} className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl font-heading font-bold text-primary-foreground tracking-tight">
              NATAN
            </span>
            <span className="text-xs font-body text-secondary ml-2 hidden sm:block">
              Commercial Agency
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={getPath(item.path)}
              className="text-sm font-body text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <Link to={getPath('/contacto')}>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading text-sm">
              {t.nav.cta}
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm text-primary-foreground/80"
          >
            <Globe className="w-4 h-4" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={getPath(item.path)}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-secondary py-2 font-body"
              >
                {item.label}
              </Link>
            ))}
            <Link to={getPath('/contacto')} onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading">
                {t.nav.cta}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
