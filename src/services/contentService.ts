/**
 * ContentService - Servicio para gestionar contenidos de la landing
 * 
 * INTEGRACIÓN FUTURA CON GOOGLE SHEETS + N8N:
 * - Reemplazar los objetos mock con llamadas HTTP a endpoints de n8n
 * - n8n se conectará a Google Sheets para leer/escribir datos
 * - Cada función async aquí podría hacer fetch() a:
 *   - GET /api/config
 *   - POST /api/config
 *   - GET /api/productos
 *   - etc.
 */

export interface SiteConfig {
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryButtonText: string;
  heroPrimaryButtonUrl: string;
  heroSecondaryButtonText: string;
  heroImageUrl: string;

  // Sobre la marca
  aboutTitle: string;
  aboutDescription: string;
  aboutImageUrl: string;

  // Beneficios
  benefitsTitle: string;
  benefitsDescription: string;

  // Newsletter
  newsletterTitle: string;
  newsletterSubtitle: string;
  newsletterDiscountText: string;

  // Contacto
  whatsappNumber: string;
  whatsappText: string;
  email: string;
  location: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;

  // URLs generales
  shopUrl: string;

  // Footer
  copyrightText: string;
  legalLinks: { text: string; url: string }[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  shopUrl: string;
  enabled: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  shopUrl: string;
  tags: string[];
  enabled: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  moreInfoUrl: string;
  enabled: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role?: string;
  enabled: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  enabled: boolean;
}

export interface SectionVisibility {
  promotions: boolean;
  services: boolean;
  testimonials: boolean;
  faq: boolean;
}

export interface Statistics {
  pageViews: number;
  shopClicks: number;
  newsletterSubmissions: number;
  whatsappClicks: number;
}

// MOCK DATA - En producción, esto vendría de Google Sheets via n8n
const mockConfig: SiteConfig = {
  heroTitle: "Bienestar Natural con Adaptógenos Unifungi",
  heroSubtitle: "Descubrí el poder de los hongos funcionales y adaptógenos para potenciar tu energía, foco y equilibrio. Productos naturales de máxima calidad.",
  heroPrimaryButtonText: "Ver Productos",
  heroPrimaryButtonUrl: "https://unifungi.ar/collections/all",
  heroSecondaryButtonText: "Conocé más sobre los adaptógenos",
  heroImageUrl: "/images/hero-background.jpg",
  
  aboutTitle: "¿Qué es Unifungi?",
  aboutDescription: "Somos una marca argentina dedicada a ofrecer adaptógenos y hongos funcionales de la más alta calidad. Nuestros productos utilizan tecnología de doble extracción para garantizar la máxima biodisponibilidad de los compuestos bioactivos. Creemos en el poder de la naturaleza para mejorar tu bienestar integral.",
  aboutImageUrl: "/images/about.jpg",
  
  benefitsTitle: "El Poder de los Adaptógenos",
  benefitsDescription: "Los adaptógenos son sustancias naturales que ayudan al cuerpo a adaptarse al estrés y mantener el equilibrio.",
  
  newsletterTitle: "¡Suscribite a nuestro newsletter!",
  newsletterSubtitle: "Recibí novedades, consejos sobre bienestar y promociones exclusivas",
  newsletterDiscountText: "15% de descuento en tu próxima compra",
  
  whatsappNumber: "5491170637716",
  whatsappText: "¡Hola! Me gustaría consultar sobre los productos Unifungi",
  email: "hola@unifungi.ar",
  location: "Vicente López, Buenos Aires, Argentina",
  instagramUrl: "https://instagram.com/unifungi.ar",
  facebookUrl: "https://facebook.com/unifungi",
  youtubeUrl: "https://youtube.com/@unifungi",
  
  shopUrl: "https://unifungi.ar",
  
  copyrightText: "© 2025 Unifungi. Todos los derechos reservados.",
  legalLinks: [
    { text: "Defensa del Consumidor", url: "https://www.argentina.gob.ar/produccion/defensadelconsumidor" },
    { text: "Botón de Arrepentimiento", url: "https://unifungi.ar/pages/arrepentimiento" }
  ]
};

const mockCategories: Category[] = [
  {
    id: "1",
    name: "Dobles Extractos (Goteros)",
    description: "Extractos líquidos de alta concentración con tecnología de doble extracción para máxima biodisponibilidad",
    imageUrl: "/images/categoria-extractos.jpg",
    shopUrl: "https://unifungi.ar/collections/extractos",
    enabled: true
  },
  {
    id: "2",
    name: "Doypacks",
    description: "Hongos funcionales en polvo, perfectos para agregar a tus bebidas y alimentos favoritos",
    imageUrl: "/images/categoria-doypacks.jpg",
    shopUrl: "https://unifungi.ar/collections/doypacks",
    enabled: true
  },
  {
    id: "3",
    name: "Combos",
    description: "Packs especiales con descuento para que descubras diferentes hongos funcionales",
    imageUrl: "/images/categoria-combos.jpg",
    shopUrl: "https://unifungi.ar/collections/combos",
    enabled: true
  },
  {
    id: "4",
    name: "Cosmética Natural",
    description: "Productos de cuidado personal con hongos funcionales y ingredientes naturales",
    imageUrl: "/images/categoria-cosmetica.jpg",
    shopUrl: "https://unifungi.ar/collections/cosmetica",
    enabled: true
  }
];

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Melena de León - Extracto",
    description: "Potencia tu claridad mental y memoria. Ideal para concentración y salud neuronal.",
    price: "$28.500",
    imageUrl: "/images/producto-melena.jpg",
    shopUrl: "https://unifungi.ar/products/melena-de-leon",
    tags: ["Nuevo", "Envío gratis"],
    enabled: true
  },
  {
    id: "2",
    name: "Reishi - Extracto",
    description: "El hongo de la calma y la longevidad. Perfecto para reducir estrés y mejorar el sueño.",
    price: "$28.500",
    imageUrl: "/images/producto-reishi.jpg",
    shopUrl: "https://unifungi.ar/products/reishi",
    tags: ["Envío gratis"],
    enabled: true
  },
  {
    id: "3",
    name: "Cordyceps - Extracto",
    description: "Incrementa tu energía y resistencia física de forma natural y sostenida.",
    price: "$28.500",
    imageUrl: "/images/producto-cordyceps.jpg",
    shopUrl: "https://unifungi.ar/products/cordyceps",
    tags: ["Envío gratis"],
    enabled: true
  },
  {
    id: "4",
    name: "Combo Inicio",
    description: "Pack perfecto para comenzar tu camino con los adaptógenos. Incluye 3 extractos.",
    price: "$75.000",
    imageUrl: "/images/producto-combo.jpg",
    shopUrl: "https://unifungi.ar/products/combo-inicio",
    tags: ["Promo", "15% OFF"],
    enabled: true
  }
];

const mockPromotions: Promotion[] = [
  {
    id: "1",
    title: "Envío Gratis",
    description: "En compras mayores a $111.000",
    enabled: true
  },
  {
    id: "2",
    title: "15% OFF con Transferencia",
    description: "Pagá con transferencia bancaria y obtené un descuento adicional",
    enabled: true
  },
  {
    id: "3",
    title: "3 y 6 Cuotas Sin Interés",
    description: "Con tarjetas de crédito seleccionadas",
    enabled: true
  }
];

const mockServices: Service[] = [
  {
    id: "1",
    name: "Atención Profesional",
    description: "Consultas personalizadas con profesionales de la salud especializados en medicina funcional y adaptógenos",
    imageUrl: "/images/servicio-profesional.jpg",
    moreInfoUrl: "https://unifungi.ar/pages/profesionales",
    enabled: true
  },
  {
    id: "2",
    name: "Eventos y Talleres",
    description: "Participá de nuestros eventos educativos sobre hongos funcionales, bienestar y salud integrativa",
    imageUrl: "/images/servicio-eventos.jpg",
    moreInfoUrl: "https://unifungi.ar/pages/eventos",
    enabled: true
  },
  {
    id: "3",
    name: "Acompañamiento Personalizado",
    description: "Programas de acompañamiento para integrar los adaptógenos en tu rutina de bienestar",
    imageUrl: "/images/servicio-acompanamiento.jpg",
    moreInfoUrl: "https://unifungi.ar/pages/acompanamiento",
    enabled: true
  }
];

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "María González",
    text: "Los extractos de Unifungi cambiaron mi vida. Tengo más energía y mi concentración mejoró notablemente. ¡Súper recomendados!",
    role: "Cliente desde 2023",
    enabled: true
  },
  {
    id: "2",
    name: "Pablo Rodríguez",
    text: "Empecé con el Reishi para dormir mejor y los resultados fueron increíbles. Ahora uso varios productos y me siento genial.",
    role: "Paciente de nutrición funcional",
    enabled: true
  },
  {
    id: "3",
    name: "Laura Fernández",
    text: "La calidad de los productos es excelente y el asesoramiento personalizado que recibí fue clave para elegir los adaptógenos correctos.",
    role: "Cliente desde 2024",
    enabled: true
  }
];

const mockFAQ: FAQ[] = [
  {
    id: "1",
    question: "¿Qué son los adaptógenos?",
    answer: "Los adaptógenos son sustancias naturales que ayudan al cuerpo a adaptarse mejor al estrés físico, químico y biológico. Los hongos funcionales son algunos de los adaptógenos más potentes de la naturaleza.",
    enabled: true
  },
  {
    id: "2",
    question: "¿Cómo tomo los extractos?",
    answer: "Los extractos líquidos se toman directamente debajo de la lengua (sublingual) o mezclados con agua, café, té o tu bebida favorita. La dosis recomendada es de 1-2 ml (aproximadamente un gotero completo) 1-2 veces al día.",
    enabled: true
  },
  {
    id: "3",
    question: "¿Cuánto tiempo tarda en hacer efecto?",
    answer: "Los efectos de los adaptógenos son acumulativos. Algunas personas notan cambios en las primeras semanas, pero recomendamos tomarlos consistentemente durante al menos 2-3 meses para experimentar todos los beneficios.",
    enabled: true
  },
  {
    id: "4",
    question: "¿Los productos tienen contraindicaciones?",
    answer: "Nuestros productos son seguros para la mayoría de las personas. Sin embargo, si estás embarazada, amamantando, tomando medicación o tenés alguna condición médica, te recomendamos consultar con tu médico antes de comenzar.",
    enabled: true
  },
  {
    id: "5",
    question: "¿Qué significa 'doble extracción'?",
    answer: "La doble extracción es un proceso que combina extracción con alcohol y agua caliente para obtener tanto los compuestos solubles en agua como en alcohol, garantizando la máxima biodisponibilidad de los principios activos.",
    enabled: true
  }
];

const mockSectionVisibility: SectionVisibility = {
  promotions: true,
  services: true,
  testimonials: true,
  faq: true
};

let mockStats: Statistics = {
  pageViews: 0,
  shopClicks: 0,
  newsletterSubmissions: 0,
  whatsappClicks: 0
};

// Funciones del servicio
export const contentService = {
  // Configuración general
  async getConfig(): Promise<SiteConfig> {
    // TODO: Reemplazar con fetch a n8n endpoint
    // return fetch('https://n8n.tu-dominio.com/webhook/config').then(r => r.json())
    return Promise.resolve(mockConfig);
  },

  async updateConfig(config: Partial<SiteConfig>): Promise<void> {
    // TODO: Reemplazar con POST a n8n
    // await fetch('https://n8n.tu-dominio.com/webhook/config', {
    //   method: 'POST',
    //   body: JSON.stringify(config)
    // })
    Object.assign(mockConfig, config);
    return Promise.resolve();
  },

  // Categorías
  async getCategories(): Promise<Category[]> {
    // TODO: fetch de Google Sheets via n8n
    return Promise.resolve(mockCategories.filter(c => c.enabled));
  },

  async getAllCategories(): Promise<Category[]> {
    return Promise.resolve(mockCategories);
  },

  async updateCategory(id: string, data: Partial<Category>): Promise<void> {
    const index = mockCategories.findIndex(c => c.id === id);
    if (index !== -1) {
      Object.assign(mockCategories[index], data);
    }
    return Promise.resolve();
  },

  // Productos
  async getProducts(): Promise<Product[]> {
    return Promise.resolve(mockProducts.filter(p => p.enabled));
  },

  async getAllProducts(): Promise<Product[]> {
    return Promise.resolve(mockProducts);
  },

  async updateProduct(id: string, data: Partial<Product>): Promise<void> {
    const index = mockProducts.findIndex(p => p.id === id);
    if (index !== -1) {
      Object.assign(mockProducts[index], data);
    }
    return Promise.resolve();
  },

  async addProduct(product: Omit<Product, 'id'>): Promise<void> {
    const newProduct = { ...product, id: String(Date.now()) };
    mockProducts.push(newProduct);
    return Promise.resolve();
  },

  async deleteProduct(id: string): Promise<void> {
    const index = mockProducts.findIndex(p => p.id === id);
    if (index !== -1) {
      mockProducts.splice(index, 1);
    }
    return Promise.resolve();
  },

  // Promociones
  async getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(mockPromotions.filter(p => p.enabled));
  },

  async getAllPromotions(): Promise<Promotion[]> {
    return Promise.resolve(mockPromotions);
  },

  async updatePromotion(id: string, data: Partial<Promotion>): Promise<void> {
    const index = mockPromotions.findIndex(p => p.id === id);
    if (index !== -1) {
      Object.assign(mockPromotions[index], data);
    }
    return Promise.resolve();
  },

  // Servicios
  async getServices(): Promise<Service[]> {
    return Promise.resolve(mockServices.filter(s => s.enabled));
  },

  async getAllServices(): Promise<Service[]> {
    return Promise.resolve(mockServices);
  },

  async updateService(id: string, data: Partial<Service>): Promise<void> {
    const index = mockServices.findIndex(s => s.id === id);
    if (index !== -1) {
      Object.assign(mockServices[index], data);
    }
    return Promise.resolve();
  },

  // Testimonios
  async getTestimonials(): Promise<Testimonial[]> {
    return Promise.resolve(mockTestimonials.filter(t => t.enabled));
  },

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Promise.resolve(mockTestimonials);
  },

  async updateTestimonial(id: string, data: Partial<Testimonial>): Promise<void> {
    const index = mockTestimonials.findIndex(t => t.id === id);
    if (index !== -1) {
      Object.assign(mockTestimonials[index], data);
    }
    return Promise.resolve();
  },

  async addTestimonial(testimonial: Omit<Testimonial, 'id'>): Promise<void> {
    const newTestimonial = { ...testimonial, id: String(Date.now()) };
    mockTestimonials.push(newTestimonial);
    return Promise.resolve();
  },

  async deleteTestimonial(id: string): Promise<void> {
    const index = mockTestimonials.findIndex(t => t.id === id);
    if (index !== -1) {
      mockTestimonials.splice(index, 1);
    }
    return Promise.resolve();
  },

  // FAQ
  async getFAQ(): Promise<FAQ[]> {
    return Promise.resolve(mockFAQ.filter(f => f.enabled));
  },

  async getAllFAQ(): Promise<FAQ[]> {
    return Promise.resolve(mockFAQ);
  },

  async updateFAQ(id: string, data: Partial<FAQ>): Promise<void> {
    const index = mockFAQ.findIndex(f => f.id === id);
    if (index !== -1) {
      Object.assign(mockFAQ[index], data);
    }
    return Promise.resolve();
  },

  async addFAQ(faq: Omit<FAQ, 'id'>): Promise<void> {
    const newFAQ = { ...faq, id: String(Date.now()) };
    mockFAQ.push(newFAQ);
    return Promise.resolve();
  },

  async deleteFAQ(id: string): Promise<void> {
    const index = mockFAQ.findIndex(f => f.id === id);
    if (index !== -1) {
      mockFAQ.splice(index, 1);
    }
    return Promise.resolve();
  },

  // Visibilidad de secciones
  async getSectionVisibility(): Promise<SectionVisibility> {
    return Promise.resolve(mockSectionVisibility);
  },

  async updateSectionVisibility(visibility: Partial<SectionVisibility>): Promise<void> {
    Object.assign(mockSectionVisibility, visibility);
    return Promise.resolve();
  },

  // Estadísticas
  async getStatistics(): Promise<Statistics> {
    // En producción, esto podría venir de Google Analytics via n8n
    // o de una hoja de Google Sheets donde n8n registra eventos
    return Promise.resolve(mockStats);
  },

  async trackEvent(event: keyof Statistics): Promise<void> {
    // TODO: Enviar a n8n webhook para registrar en Google Sheets
    // await fetch('https://n8n.tu-dominio.com/webhook/track', {
    //   method: 'POST',
    //   body: JSON.stringify({ event, timestamp: new Date() })
    // })
    mockStats[event]++;
    
    // También podría integrarse con Google Analytics
    // if (window.gtag) {
    //   window.gtag('event', event);
    // }
    
    return Promise.resolve();
  },

  // Newsletter
  async subscribeToNewsletter(email: string): Promise<void> {
    // TODO: Integrar con Mailchimp, Notion o Google Sheets via n8n
    // await fetch('https://n8n.tu-dominio.com/webhook/newsletter', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, timestamp: new Date() })
    // })
    
    console.log('Newsletter subscription:', email);
    await this.trackEvent('newsletterSubmissions');
    return Promise.resolve();
  }
};
