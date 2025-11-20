import { Brain, Battery, Shield, Sparkles } from 'lucide-react';

interface BenefitsProps {
  title: string;
  description: string;
}

export const Benefits = ({ title, description }: BenefitsProps) => {
  const benefits = [
    {
      icon: Brain,
      title: 'Claridad Mental',
      description: 'Mejora tu concentración, memoria y función cognitiva con hongos como Melena de León.',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: Battery,
      title: 'Energía Natural',
      description: 'Incrementa tu vitalidad y resistencia física de forma sostenida con Cordyceps.',
      color: 'from-secondary/20 to-secondary/5'
    },
    {
      icon: Shield,
      title: 'Sistema Inmune',
      description: 'Fortalece tus defensas naturales y mejora tu respuesta inmunológica.',
      color: 'from-accent/20 to-accent/5'
    },
    {
      icon: Sparkles,
      title: 'Equilibrio y Calma',
      description: 'Reduce el estrés y mejora la calidad del sueño con Reishi y otros adaptógenos.',
      color: 'from-warm/20 to-warm/5'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Grid de Beneficios */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${benefit.color} border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon size={28} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Científica */}
          <div className="p-8 rounded-2xl bg-card border border-border animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              La Ciencia Detrás de los Adaptógenos
            </h3>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Los adaptógenos son sustancias naturales que han sido utilizadas durante milenios
                en la medicina tradicional. La ciencia moderna ha validado muchos de sus beneficios,
                demostrando que ayudan al cuerpo a mantener la homeostasis (equilibrio interno) frente
                a diversos tipos de estrés.
              </p>
              <p>
                Nuestro proceso de <strong className="text-foreground">doble extracción</strong> combina
                extracción con alcohol y agua caliente para obtener tanto los compuestos hidrosolubles
                (polisacáridos) como los liposolubles (triterpenos), garantizando que obtengas el
                espectro completo de beneficios que estos hongos pueden ofrecer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
