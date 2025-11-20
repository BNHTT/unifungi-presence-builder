import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/services/contentService';

interface FeaturedProductsProps {
  products: Product[];
  onProductClick: () => void;
}

export const FeaturedProducts = ({ products, onProductClick }: FeaturedProductsProps) => {
  if (products.length === 0) return null;

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Descubrí nuestros adaptógenos más populares y sus beneficios únicos
            </p>
          </div>

          {/* Grid de Productos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Imagen */}
                <div className="aspect-square overflow-hidden bg-muted/50 relative">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-300">
                    {/* Placeholder - reemplazar con imagen real */}
                    <div className="text-center p-6">
                      <div className="text-6xl mb-2">💧</div>
                      <div className="text-sm opacity-50">Imagen pendiente</div>
                    </div>
                  </div>

                  {/* Tags */}
                  {product.tags && product.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {product.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          className="bg-primary text-primary-foreground shadow-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3 line-clamp-2 min-h-[40px]">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                    asChild
                  >
                    <a
                      href={product.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onProductClick}
                    >
                      Ver en tienda
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
