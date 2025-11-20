import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface NewsletterProps {
  title: string;
  subtitle: string;
  discountText: string;
  onSubscribe: (email: string) => Promise<void>;
}

export const Newsletter = ({ title, subtitle, discountText, onSubscribe }: NewsletterProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: 'Email inválido',
        description: 'Por favor ingresá un email válido',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    try {
      await onSubscribe(email);
      toast({
        title: '¡Suscripción exitosa!',
        description: `Revisá tu email para recibir tu cupón de ${discountText}`
      });
      setEmail('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un problema al procesar tu suscripción. Intentá nuevamente.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-card border-2 border-primary/20 shadow-xl animate-fade-in">
            {/* Icono */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={32} />
              </div>
            </div>

            {/* Textos */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {title}
              </h2>
              <p className="text-lg text-foreground/70 mb-2">
                {subtitle}
              </p>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                {discountText}
              </div>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-background"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8"
                disabled={isLoading}
              >
                {isLoading ? 'Procesando...' : 'Suscribirme'}
              </Button>
            </form>

            {/* Nota de privacidad */}
            <p className="text-xs text-center text-foreground/50 mt-4">
              No compartimos tu información. Podés darte de baja cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
