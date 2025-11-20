import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Category } from '@/services/contentService';

interface CategoriesProps {
  categories: Category[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  if (categories.length === 0) return null;

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestras Categorías
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explorá nuestra gama completa de productos adaptógenos en diferentes formatos
            </p>
          </div>

          {/* Grid de Categorías */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Imagen */}
                <div className="aspect-square overflow-hidden bg-muted/50">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-300">
                    {/* Placeholder - reemplazar con imagen real */}
                    <div className="text-center p-6">
                      <div className="text-6xl mb-2">🍄</div>
                      <div className="text-sm opacity-50">Imagen pendiente</div>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full group/btn hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={category.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
