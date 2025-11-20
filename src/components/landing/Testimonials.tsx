import { Quote } from 'lucide-react';
import { Testimonial } from '@/services/contentService';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Historias reales de personas que transformaron su bienestar con Unifungi
            </p>
          </div>

          {/* Grid de Testimonios */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Ícono de comillas */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Quote size={24} />
                </div>

                {/* Texto del testimonio */}
                <p className="text-foreground/80 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Autor */}
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  {testimonial.role && (
                    <div className="text-sm text-foreground/50 mt-1">
                      {testimonial.role}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
