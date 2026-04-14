import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AIChatWidget from "@/components/layout/AIChatWidget";
import HomePage from "@/pages/HomePage";
import ServiciosPage from "@/pages/ServiciosPage";
import ProjectsPage from "@/pages/ProjectsPage";
import AutoFilmPolarizados from "@/pages/products/AutoFilmPolarizados";
import ArbolesNatan from "@/pages/products/ArbolesNatan";
import QuienesSomosPage from "@/pages/QuienesSomosPage";
import ContactoPage from "@/pages/ContactoPage";
import AdminPage from "@/pages/AdminPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            {/* Spanish routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/proyectos/polarizados-nanocermicos-autofilm" element={<AutoFilmPolarizados />} />
            <Route path="/proyectos/arboles-natan" element={<ArbolesNatan />} />
            <Route path="/quienes-somos" element={<QuienesSomosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />

            {/* English routes */}
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/services" element={<ServiciosPage />} />
            <Route path="/en/projects" element={<ProjectsPage />} />
            <Route path="/en/projects/nano-ceramic-tinting-autofilm" element={<AutoFilmPolarizados />} />
            <Route path="/en/projects/arboles-natan" element={<ArbolesNatan />} />
            <Route path="/en/about" element={<QuienesSomosPage />} />
            <Route path="/en/contact" element={<ContactoPage />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <AIChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
