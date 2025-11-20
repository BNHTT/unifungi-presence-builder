import { Leaf, Award, Heart } from 'lucide-react';

interface AboutProps {
  title: string;
  description: string;
}

export const About = ({ title, description }: AboutProps) => {
  const features = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'Ingredientes orgánicos de la más alta calidad'
    },
    {
      icon: Award,
      title: 'Doble Extracción',
      description: 'Proceso que garantiza máxima biodisponibilidad'
    },
    {
      icon: Heart,
      title: 'Bienestar Integral',
      description: 'Productos pensados para tu salud completa'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Valores */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 animate-fade-in">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nuestra Misión
              </h3>
              <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Creemos en el poder transformador de la naturaleza. Nuestro compromiso es brindarte
                acceso a los mejores adaptógenos del mundo, procesados con la más alta tecnología
                para preservar sus propiedades naturales y maximizar sus beneficios para tu salud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
