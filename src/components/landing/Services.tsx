import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Service } from '@/services/contentService';

interface ServicesProps {
  services: Service[];
}

export const Services = ({ services }: ServicesProps) => {
  if (services.length === 0) return null;

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Más allá de los productos, te acompañamos en tu camino hacia el bienestar
            </p>
          </div>

          {/* Grid de Servicios */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Imagen */}
                <div className="aspect-video overflow-hidden bg-muted/50">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-300">
                    {/* Placeholder - reemplazar con imagen real */}
                    <div className="text-center p-6">
                      <div className="text-5xl mb-2">🌿</div>
                      <div className="text-sm opacity-50">Imagen pendiente</div>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full group/btn hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={service.moreInfoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Más información
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
