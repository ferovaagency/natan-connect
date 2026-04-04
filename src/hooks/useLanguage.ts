import { useLocation, useNavigate } from 'react-router-dom';
import { translations, type Language } from '@/lib/i18n';
import { useCallback, useMemo } from 'react';

export function useLanguage() {
  const location = useLocation();
  const navigate = useNavigate();

  const lang: Language = useMemo(() => {
    return location.pathname.startsWith('/en') ? 'en' : 'es';
  }, [location.pathname]);

  const t = useMemo(() => translations[lang], [lang]);

  const toggleLanguage = useCallback(() => {
    const path = location.pathname;
    if (lang === 'es') {
      const routeMap: Record<string, string> = {
        '/': '/en',
        '/servicios': '/en/services',
        '/quienes-somos': '/en/about',
        '/contacto': '/en/contact',
        '/admin': '/admin',
      };
      navigate(routeMap[path] || '/en');
    } else {
      const routeMap: Record<string, string> = {
        '/en': '/',
        '/en/services': '/servicios',
        '/en/about': '/quienes-somos',
        '/en/contact': '/contacto',
      };
      navigate(routeMap[path] || '/');
    }
  }, [lang, location.pathname, navigate]);

  const getPath = useCallback((route: string) => {
    if (lang === 'en') {
      const map: Record<string, string> = {
        '/': '/en',
        '/servicios': '/en/services',
        '/quienes-somos': '/en/about',
        '/contacto': '/en/contact',
      };
      return map[route] || route;
    }
    return route;
  }, [lang]);

  return { lang, t, toggleLanguage, getPath };
}
