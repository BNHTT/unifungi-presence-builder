import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, ShoppingCart, Mail, MessageCircle } from 'lucide-react';
import { contentService, Statistics } from '@/services/contentService';

const AdminDashboard = () => {
  const [stats, setStats] = useState<Statistics | null>(null);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const data = await contentService.getStatistics();
    setStats(data);
  };

  const statCards = [
    {
      title: 'Visitas a la Landing',
      value: stats?.pageViews || 0,
      icon: Eye,
      description: 'Total de visitas registradas',
      color: 'text-primary'
    },
    {
      title: 'Clics en "Ir a Tienda"',
      value: stats?.shopClicks || 0,
      icon: ShoppingCart,
      description: 'Usuarios que fueron a la tienda',
      color: 'text-secondary'
    },
    {
      title: 'Suscripciones Newsletter',
      value: stats?.newsletterSubmissions || 0,
      icon: Mail,
      description: 'Emails registrados',
      color: 'text-accent'
    },
    {
      title: 'Clics en WhatsApp',
      value: stats?.whatsappClicks || 0,
      icon: MessageCircle,
      description: 'Consultas iniciadas',
      color: 'text-sage'
    }
  ];

  return (
    <AdminLayout currentSection="dashboard">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Panel Principal</h1>
          <p className="text-foreground/70">
            Bienvenido al panel de administración de Unifungi. Aquí podés gestionar todos los contenidos de tu landing page.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription>{stat.title}</CardDescription>
                    <Icon className={`${stat.color}`} size={20} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{stat.value.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Guía de Uso */}
        <Card>
          <CardHeader>
            <CardTitle>Guía de Uso</CardTitle>
            <CardDescription>
              Información importante sobre cómo usar el panel de administración
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-foreground/70">
            <div>
              <h3 className="font-semibold text-foreground mb-2">📝 Edición de Contenidos</h3>
              <p>
                Podés editar todos los textos, imágenes y enlaces de la landing page desde las diferentes
                secciones del menú lateral. Los cambios se guardan automáticamente.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">🖼️ Imágenes</h3>
              <p>
                Para las imágenes, subí tus archivos a Google Drive y copiá la URL pública. Luego pegá
                esa URL en los campos correspondientes del panel. Asegurate de que las imágenes sean públicas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">🔗 Enlaces</h3>
              <p>
                Los botones "Ver en tienda" y otros enlaces externos se configuran en las secciones de
                Configuración General, Categorías y Productos Destacados.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">👁️ Visibilidad de Secciones</h3>
              <p>
                En Configuración General podés activar o desactivar secciones completas de la landing
                (promociones, testimonios, FAQ, etc.) usando los interruptores.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">📊 Estadísticas</h3>
              <p>
                Las estadísticas que ves arriba son básicas. Para análisis más profundos, se recomienda
                integrar Google Analytics (próximamente).
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">⚠️ Importante sobre Integraciones</h3>
              <p className="mb-2">
                Este panel actualmente trabaja con datos locales (mock). Para conectar con Google Sheets
                y n8n, será necesario configurar los webhooks correspondientes en el código.
              </p>
              <p>
                Revisá los comentarios en el archivo <code className="text-xs bg-muted px-1 py-0.5 rounded">src/services/contentService.ts</code> para
                más detalles sobre cómo implementar estas integraciones.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
