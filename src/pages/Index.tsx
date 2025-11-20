import { useEffect, useState } from 'react';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Benefits } from '@/components/landing/Benefits';
import { Categories } from '@/components/landing/Categories';
import { FeaturedProducts } from '@/components/landing/FeaturedProducts';
import { Promotions } from '@/components/landing/Promotions';
import { Services } from '@/components/landing/Services';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { Newsletter } from '@/components/landing/Newsletter';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';
import { contentService, SiteConfig, Category, Product, Promotion, Service, Testimonial, FAQ as FAQType, SectionVisibility } from '@/services/contentService';

const Index = () => {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<FAQType[]>([]);
  const [visibility, setVisibility] = useState<SectionVisibility | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadContent();
    
    // Track page view
    contentService.trackEvent('pageViews');
  }, []);

  const loadContent = async () => {
    try {
      const [
        configData,
        categoriesData,
        productsData,
        promotionsData,
        servicesData,
        testimonialsData,
        faqsData,
        visibilityData
      ] = await Promise.all([
        contentService.getConfig(),
        contentService.getCategories(),
        contentService.getProducts(),
        contentService.getPromotions(),
        contentService.getServices(),
        contentService.getTestimonials(),
        contentService.getFAQ(),
        contentService.getSectionVisibility()
      ]);

      setConfig(configData);
      setCategories(categoriesData);
      setProducts(productsData);
      setPromotions(promotionsData);
      setServices(servicesData);
      setTestimonials(testimonialsData);
      setFaqs(faqsData);
      setVisibility(visibilityData);
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShopClick = () => {
    contentService.trackEvent('shopClicks');
  };

  const handleNewsletterSubscribe = async (email: string) => {
    await contentService.subscribeToNewsletter(email);
  };

  const handleWhatsAppClick = () => {
    contentService.trackEvent('whatsappClicks');
  };

  if (isLoading || !config || !visibility) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground/70">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header shopUrl={config.shopUrl} />
      
      <Hero
        title={config.heroTitle}
        subtitle={config.heroSubtitle}
        primaryButtonText={config.heroPrimaryButtonText}
        primaryButtonUrl={config.heroPrimaryButtonUrl}
        secondaryButtonText={config.heroSecondaryButtonText}
        imageUrl={config.heroImageUrl}
        onShopClick={handleShopClick}
      />
      
      <About
        title={config.aboutTitle}
        description={config.aboutDescription}
      />
      
      <Benefits
        title={config.benefitsTitle}
        description={config.benefitsDescription}
      />
      
      <Categories categories={categories} />
      
      <FeaturedProducts
        products={products}
        onProductClick={handleShopClick}
      />
      
      {visibility.promotions && promotions.length > 0 && (
        <Promotions promotions={promotions} />
      )}
      
      {visibility.services && services.length > 0 && (
        <Services services={services} />
      )}
      
      {visibility.testimonials && testimonials.length > 0 && (
        <Testimonials testimonials={testimonials} />
      )}
      
      <Newsletter
        title={config.newsletterTitle}
        subtitle={config.newsletterSubtitle}
        discountText={config.newsletterDiscountText}
        onSubscribe={handleNewsletterSubscribe}
      />
      
      {visibility.faq && faqs.length > 0 && (
        <FAQ faqs={faqs} />
      )}
      
      <Contact
        whatsappNumber={config.whatsappNumber}
        whatsappText={config.whatsappText}
        email={config.email}
        location={config.location}
        instagramUrl={config.instagramUrl}
        facebookUrl={config.facebookUrl}
        youtubeUrl={config.youtubeUrl}
        onWhatsAppClick={handleWhatsAppClick}
      />
      
      <Footer
        copyrightText={config.copyrightText}
        legalLinks={config.legalLinks}
        instagramUrl={config.instagramUrl}
        facebookUrl={config.facebookUrl}
        youtubeUrl={config.youtubeUrl}
      />
    </div>
  );
};

export default Index;
