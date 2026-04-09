import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const { t, lang, toggleLanguage, getPath } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.services, path: '/servicios' },
    { label: t.nav.products, path: '/productos' },
    { label: t.nav.about, path: '/quienes-somos' },
    { label: t.nav.contact, path: '/contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={getPath('/')} className="flex items-center">
          <img 
            src="/logo.png" 
            alt="NATAN Commercial Agency" 
            className={`h-10 w-auto transition-all duration-300 ${
              scrolled ? 'brightness-100' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={getPath(item.path)}
              className={`text-sm font-heading font-medium nav-link transition-colors ${
                scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 text-sm font-heading font-medium transition-colors ${
              scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
            }`}
          >
            <Globe className="w-4 h-4" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <Link to={getPath('/contacto')}>
            <Button className="gradient-teal text-primary-foreground font-heading text-sm px-6 btn-hover shadow-md">
              {t.nav.cta}
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-sm font-heading transition-colors ${
              scrolled ? 'text-foreground/70' : 'text-primary-foreground/80'
            }`}
          >
            <Globe className="w-4 h-4" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-foreground' : 'text-primary-foreground'}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={getPath(item.path)}
                onClick={() => setIsOpen(false)}
                className="text-foreground/70 hover:text-secondary py-2 font-heading font-medium text-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link to={getPath('/contacto')} onClick={() => setIsOpen(false)}>
              <Button className="w-full gradient-teal text-primary-foreground font-heading mt-2">
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
