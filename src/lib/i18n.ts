export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Quiénes Somos',
      contact: 'Contacto',
      cta: 'Contáctanos',
    },
    hero: {
      title: 'Conectamos tu marca con Latinoamérica',
      subtitle: 'Somos tu aliado estratégico para ingresar y consolidar tu empresa en el mercado colombiano y latinoamericano.',
      cta: 'Contáctanos',
    },
    whatWeDo: {
      title: '¿Qué hacemos?',
      description: 'Natan Commercial Agency es una agencia de intermediación comercial que conecta empresas norteamericanas con el mercado colombiano y latinoamericano. Ofrecemos un acompañamiento integral desde el estudio de factibilidad hasta la comercialización efectiva de tus productos o servicios.',
    },
    values: {
      title: 'Nuestro Valor Agregado',
      items: [
        { title: 'Experiencia B2B', description: 'Más de 15 años conectando empresas internacionales con mercados latinoamericanos.' },
        { title: 'Conocimiento Local', description: 'Entendemos la cultura de negocios, regulaciones y oportunidades del mercado colombiano.' },
        { title: 'Estrategia Integral', description: 'Desde el estudio de factibilidad hasta el cierre de ventas y seguimiento post-venta.' },
        { title: 'Red de Contactos', description: 'Amplia red de relaciones empresariales en múltiples sectores de la economía.' },
      ],
    },
    sectors: {
      title: 'Nuestros Sectores',
      items: ['Automotriz', 'Salud', 'Exequial', 'Educativo', 'Alimentos', 'Agrícola-Minero'],
    },
    ctaSection: {
      title: '¿Listo para expandir tu negocio en Latinoamérica?',
      subtitle: 'Hablemos sobre cómo podemos ayudarte a ingresar al mercado colombiano y latinoamericano.',
      cta: 'Ir a Contacto',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Un proceso completo de 5 pasos para llevar tu empresa al mercado latinoamericano.',
      steps: [
        {
          title: 'Estudio de Pre-factibilidad',
          description: 'Análisis preliminar del mercado objetivo, identificación de oportunidades y evaluación inicial de viabilidad para tu producto o servicio en el mercado latinoamericano.',
        },
        {
          title: 'Estudio de Factibilidad',
          description: 'Análisis completo que incluye: situación problemática, estudio de mercados, estudio técnico, estudio organizacional, estudio legal, estudio económico, estudio financiero, y estudio social y ambiental.',
        },
        {
          title: 'Estrategia Comercial',
          description: 'Diseño de la estrategia de entrada al mercado, definición de canales de distribución, pricing, posicionamiento y plan de marketing adaptado al mercado local.',
        },
        {
          title: 'Plan Comercial',
          description: 'Implementación que incluye: planeación comercial, lobby empresarial, venta consultiva, ventas con PNL, manejo de objeciones, negociación fuerte, cierre efectivo y seguimiento post-venta.',
        },
        {
          title: 'Comercialización',
          description: 'Ejecución del plan comercial, gestión de ventas directas, seguimiento de clientes, optimización de procesos y consolidación en el mercado.',
        },
      ],
      differentiators: {
        title: 'Lo que nos diferencia',
        items: [
          { title: 'Metodología Probada', description: 'Proceso estructurado en 5 fases que garantiza resultados medibles.' },
          { title: 'Equipo Bilingüe', description: 'Comunicación fluida en español e inglés para facilitar la intermediación.' },
          { title: 'Resultados Medibles', description: 'KPIs claros y reportes periódicos de avance en cada fase del proceso.' },
          { title: 'Acompañamiento Continuo', description: 'Soporte permanente desde la pre-factibilidad hasta la consolidación comercial.' },
        ],
      },
    },
    about: {
      title: 'Quiénes Somos',
      description: 'Natan Commercial Agency nace de la visión de crear un puente comercial sólido entre Norteamérica y Latinoamérica. Somos una agencia de intermediación comercial con sede en Bogotá, Colombia, especializada en conectar empresas con el mercado colombiano y latinoamericano.',
      leader: {
        title: 'Nuestro Líder',
        name: 'Gonzalo Almanza',
        description: 'Profesional con amplia experiencia en intermediación comercial internacional, negocios B2B y desarrollo de mercados en Latinoamérica. Ha liderado proyectos de entrada al mercado colombiano para empresas de diversos sectores, incluyendo automotriz, salud, educación y alimentos. Su enfoque combina el conocimiento profundo del mercado local con metodologías de venta consultiva y negociación internacional.',
      },
      corporateValues: {
        title: 'Valores Corporativos',
        items: [
          { title: 'Confiabilidad', description: 'Cumplimos nuestros compromisos y generamos relaciones de largo plazo.' },
          { title: 'Honestidad', description: 'Transparencia total en cada proceso y comunicación.' },
          { title: 'Lealtad', description: 'Fidelidad con nuestros clientes, socios y colaboradores.' },
          { title: 'Respeto', description: 'Valoramos la diversidad cultural y empresarial.' },
          { title: 'Profesionalismo', description: 'Excelencia en cada servicio que prestamos.' },
          { title: 'Orientación al Logro', description: 'Enfocados en resultados medibles y éxito compartido.' },
        ],
      },
      hiring: {
        title: 'Generalidades de Contratación',
        items: [
          { q: '¿Cómo se inicia el proceso de contratación?', a: 'El proceso inicia con una reunión de diagnóstico donde evaluamos las necesidades de tu empresa y definimos el alcance del proyecto. Posteriormente, presentamos una propuesta comercial detallada con tiempos, entregables y costos.' },
          { q: '¿Cuáles son las modalidades de contratación?', a: 'Ofrecemos contratación por proyecto (precio fijo por fase o proceso completo), contratación por retainer mensual para acompañamiento continuo, y modelos mixtos según las necesidades del cliente.' },
          { q: '¿Qué incluye la propuesta comercial?', a: 'La propuesta incluye diagnóstico inicial, plan de trabajo detallado, cronograma de actividades, entregables por fase, indicadores de gestión y estructura de costos.' },
          { q: '¿Cómo se manejan los pagos?', a: 'Los pagos se estructuran por hitos del proyecto o mensualidades según la modalidad acordada. Aceptamos transferencias bancarias internacionales y medios de pago locales.' },
        ],
      },
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Cuéntanos sobre tu proyecto y te contactaremos pronto.',
      form: {
        name: 'Nombre completo',
        company: 'Empresa',
        country: 'País de origen',
        email: 'Email',
        phone: 'Teléfono',
        message: 'Mensaje',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado! Te contactaremos pronto.',
        error: 'Error al enviar el mensaje. Intenta de nuevo.',
      },
      info: {
        title: 'Información de Contacto',
        address: 'Cra. 20 # 137-67, Bogotá, Colombia',
        phones: ['+57 1 8043262', '+57 310 560 7188'],
        whatsapp: '+57 310 560 7188',
        email: 'info@natancommercial.com',
      },
    },
    footer: {
      rights: '© 2025 Natan Commercial Agency. Todos los derechos reservados.',
      links: 'Enlaces',
      contactInfo: 'Contacto',
    },
    admin: {
      title: 'Panel de Administración',
      passwordLabel: 'Contraseña',
      login: 'Ingresar',
      wrongPassword: 'Contraseña incorrecta',
      leads: 'Leads',
      date: 'Fecha',
      name: 'Nombre',
      company: 'Empresa',
      country: 'País',
      email: 'Email',
      phone: 'Teléfono',
      message: 'Mensaje',
      status: 'Estado',
      markContacted: 'Marcar contactado',
      pending: 'Pendiente',
      contacted: 'Contactado',
      noLeads: 'No hay leads registrados.',
      logout: 'Cerrar sesión',
    },
    chat: {
      title: 'Natan',
      placeholder: 'Escribe un mensaje...',
      greeting: '¡Hola! Soy Natan, tu asistente virtual. ¿En qué puedo ayudarte?',
      fallback: 'Hola, soy Natan. Pronto estaré disponible para ayudarte.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      cta: 'Contact Us',
    },
    hero: {
      title: 'We Connect Your Brand with Latin America',
      subtitle: 'We are your strategic partner to enter and consolidate your company in the Colombian and Latin American market.',
      cta: 'Contact Us',
    },
    whatWeDo: {
      title: 'What We Do',
      description: 'Natan Commercial Agency is a commercial intermediation agency that connects North American companies with the Colombian and Latin American market. We offer comprehensive support from feasibility studies to effective commercialization of your products or services.',
    },
    values: {
      title: 'Our Added Value',
      items: [
        { title: 'B2B Expertise', description: 'Over 15 years connecting international companies with Latin American markets.' },
        { title: 'Local Knowledge', description: 'We understand business culture, regulations, and opportunities in the Colombian market.' },
        { title: 'Comprehensive Strategy', description: 'From feasibility studies to sales closure and post-sale follow-up.' },
        { title: 'Contact Network', description: 'Extensive network of business relationships across multiple economic sectors.' },
      ],
    },
    sectors: {
      title: 'Our Sectors',
      items: ['Automotive', 'Healthcare', 'Funeral Services', 'Education', 'Food & Beverage', 'Agriculture & Mining'],
    },
    ctaSection: {
      title: 'Ready to Expand Your Business in Latin America?',
      subtitle: "Let's talk about how we can help you enter the Colombian and Latin American market.",
      cta: 'Go to Contact',
    },
    services: {
      title: 'Our Services',
      subtitle: 'A complete 5-step process to take your company to the Latin American market.',
      steps: [
        {
          title: 'Pre-feasibility Study',
          description: 'Preliminary analysis of the target market, opportunity identification, and initial viability assessment for your product or service in the Latin American market.',
        },
        {
          title: 'Feasibility Study',
          description: 'Complete analysis including: problem situation, market study, technical study, organizational study, legal study, economic study, financial study, and social and environmental study.',
        },
        {
          title: 'Commercial Strategy',
          description: 'Market entry strategy design, distribution channel definition, pricing, positioning, and marketing plan adapted to the local market.',
        },
        {
          title: 'Commercial Plan',
          description: 'Implementation including: commercial planning, business lobbying, consultative selling, NLP sales, objection handling, strong negotiation, effective closing, and post-sale follow-up.',
        },
        {
          title: 'Commercialization',
          description: 'Execution of the commercial plan, direct sales management, client follow-up, process optimization, and market consolidation.',
        },
      ],
      differentiators: {
        title: 'What Sets Us Apart',
        items: [
          { title: 'Proven Methodology', description: 'Structured 5-phase process that guarantees measurable results.' },
          { title: 'Bilingual Team', description: 'Fluent communication in Spanish and English to facilitate intermediation.' },
          { title: 'Measurable Results', description: 'Clear KPIs and periodic progress reports at each stage of the process.' },
          { title: 'Continuous Support', description: 'Permanent support from pre-feasibility to commercial consolidation.' },
        ],
      },
    },
    about: {
      title: 'About Us',
      description: 'Natan Commercial Agency was born from the vision of creating a solid commercial bridge between North America and Latin America. We are a commercial intermediation agency based in Bogotá, Colombia, specializing in connecting companies with the Colombian and Latin American market.',
      leader: {
        title: 'Our Leader',
        name: 'Gonzalo Almanza',
        description: 'Professional with extensive experience in international commercial intermediation, B2B business, and market development in Latin America. He has led market entry projects in Colombia for companies in various sectors, including automotive, healthcare, education, and food. His approach combines deep local market knowledge with consultative selling and international negotiation methodologies.',
      },
      corporateValues: {
        title: 'Corporate Values',
        items: [
          { title: 'Reliability', description: 'We fulfill our commitments and build long-term relationships.' },
          { title: 'Honesty', description: 'Total transparency in every process and communication.' },
          { title: 'Loyalty', description: 'Fidelity to our clients, partners, and collaborators.' },
          { title: 'Respect', description: 'We value cultural and business diversity.' },
          { title: 'Professionalism', description: 'Excellence in every service we provide.' },
          { title: 'Achievement Orientation', description: 'Focused on measurable results and shared success.' },
        ],
      },
      hiring: {
        title: 'Hiring Overview',
        items: [
          { q: 'How does the contracting process begin?', a: 'The process begins with a diagnostic meeting where we evaluate your company\'s needs and define the project scope. We then present a detailed commercial proposal with timelines, deliverables, and costs.' },
          { q: 'What are the contracting modalities?', a: 'We offer project-based contracting (fixed price per phase or complete process), monthly retainer for continuous support, and mixed models according to client needs.' },
          { q: 'What does the commercial proposal include?', a: 'The proposal includes initial diagnosis, detailed work plan, activity schedule, deliverables per phase, management indicators, and cost structure.' },
          { q: 'How are payments handled?', a: 'Payments are structured by project milestones or monthly installments depending on the agreed modality. We accept international bank transfers and local payment methods.' },
        ],
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Tell us about your project and we will get back to you soon.',
      form: {
        name: 'Full name',
        company: 'Company',
        country: 'Country of origin',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Send message',
        sending: 'Sending...',
        success: 'Message sent! We will contact you soon.',
        error: 'Error sending message. Please try again.',
      },
      info: {
        title: 'Contact Information',
        address: 'Cra. 20 # 137-67, Bogotá, Colombia',
        phones: ['+57 1 8043262', '+57 310 560 7188'],
        whatsapp: '+57 310 560 7188',
        email: 'info@natancommercial.com',
      },
    },
    footer: {
      rights: '© 2025 Natan Commercial Agency. All rights reserved.',
      links: 'Links',
      contactInfo: 'Contact',
    },
    admin: {
      title: 'Admin Panel',
      passwordLabel: 'Password',
      login: 'Login',
      wrongPassword: 'Wrong password',
      leads: 'Leads',
      date: 'Date',
      name: 'Name',
      company: 'Company',
      country: 'Country',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      status: 'Status',
      markContacted: 'Mark contacted',
      pending: 'Pending',
      contacted: 'Contacted',
      noLeads: 'No leads registered.',
      logout: 'Log out',
    },
    chat: {
      title: 'Natan',
      placeholder: 'Type a message...',
      greeting: 'Hello! I am Natan, your virtual assistant. How can I help you?',
      fallback: "Hello, I'm Natan. I'll be available to help you soon.",
    },
  },
} as const;

export type TranslationKeys = typeof translations.es;
