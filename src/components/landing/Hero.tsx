import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText: string;
  imageUrl: string;
  onShopClick: () => void;
}

export const Hero = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  imageUrl,
  onShopClick
}: HeroProps) => {
  const handleSecondaryClick = () => {
    const benefitsSection = document.querySelector('#benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-background to-muted"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Adaptógenos Naturales</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            {title}
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-in">
            {subtitle}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all group"
              asChild
            >
              <a
                href={primaryButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onShopClick}
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:bg-primary/5"
              onClick={handleSecondaryClick}
            >
              {secondaryButtonText}
            </Button>
          </div>

          {/* Beneficios rápidos */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Doble Extracción', desc: 'Máxima biodisponibilidad' },
              { label: '100% Natural', desc: 'Sin aditivos químicos' },
              { label: 'Calidad Premium', desc: 'Productos certificados' }
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
