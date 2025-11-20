import { Gift, CreditCard, Truck } from 'lucide-react';
import { Promotion } from '@/services/contentService';

interface PromotionsProps {
  promotions: Promotion[];
}

export const Promotions = ({ promotions }: PromotionsProps) => {
  if (promotions.length === 0) return null;

  const getIcon = (index: number) => {
    const icons = [Truck, CreditCard, Gift];
    return icons[index % icons.length];
  };

  return (
    <section id="promotions" className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Promociones Vigentes
            </h2>
            <p className="text-lg text-foreground/70">
              Aprovechá nuestras ofertas especiales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => {
              const Icon = getIcon(index);
              return (
                <div
                  key={promo.id}
                  className="p-6 rounded-2xl bg-card border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-foreground/70">
                    {promo.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
