import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Home, LogOut, Settings, BarChart, FileText, Package, Sparkles, MessageSquare, HelpCircle, Mail, Users } from 'lucide-react';
import logo from '@/assets/unifungi-logo.png';

interface AdminLayoutProps {
  children: ReactNode;
  currentSection: string;
}

export const AdminLayout = ({ children, currentSection }: AdminLayoutProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Panel Principal', icon: Home },
    { id: 'config', label: 'Configuración General', icon: Settings },
    { id: 'categories', label: 'Categorías', icon: Package },
    { id: 'products', label: 'Productos Destacados', icon: Sparkles },
    { id: 'promotions', label: 'Promociones', icon: FileText },
    { id: 'services', label: 'Servicios', icon: Users },
    { id: 'testimonials', label: 'Testimonios', icon: MessageSquare },
    { id: 'faq', label: 'Preguntas Frecuentes', icon: HelpCircle },
    { id: 'newsletter', label: 'Newsletter', icon: Mail },
    { id: 'stats', label: 'Estadísticas', icon: BarChart },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <img src={logo} alt="Unifungi Admin" className="h-10 w-auto" />
          <p className="text-sm text-muted-foreground mt-2">Panel de Administración</p>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(`/admin/${item.id}`)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-border">
          <Button
            variant="outline"
            className="w-full"
            onClick={handleLogout}
          >
            <LogOut size={18} className="mr-2" />
            Cerrar Sesión
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
