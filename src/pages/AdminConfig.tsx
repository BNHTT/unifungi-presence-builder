import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { contentService, SiteConfig, SectionVisibility } from '@/services/contentService';
import { Save } from 'lucide-react';

const AdminConfig = () => {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [visibility, setVisibility] = useState<SectionVisibility | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [configData, visibilityData] = await Promise.all([
        contentService.getConfig(),
        contentService.getSectionVisibility()
      ]);
      setConfig(configData);
      setVisibility(visibilityData);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudo cargar la configuración',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!config || !visibility) return;

    setIsSaving(true);
    try {
      await Promise.all([
        contentService.updateConfig(config),
        contentService.updateSectionVisibility(visibility)
      ]);
      toast({
        title: 'Cambios guardados',
        description: 'La configuración se actualizó correctamente'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudieron guardar los cambios',
        variant: 'destructive'
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading || !config || !visibility) {
    return (
      <AdminLayout currentSection="config">
        <div className="text-center py-12">Cargando...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout currentSection="config">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Configuración General</h1>
            <p className="text-foreground/70">Editá los textos principales y configuraciones de la landing</p>
          </div>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Save size={18} className="mr-2" />
            {isSaving ? 'Guardando...' : 'Guardar Cambios'}
          </Button>
        </div>

        <div className="space-y-6">
          {/* Hero Section */}
          <Card>
            <CardHeader>
              <CardTitle>Sección Principal (Hero)</CardTitle>
              <CardDescription>Configura el contenido de la sección principal de tu landing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="heroTitle">Título Principal</Label>
                <Input
                  id="heroTitle"
                  value={config.heroTitle}
                  onChange={(e) => setConfig({ ...config, heroTitle: e.target.value })}
                  placeholder="Ej: Bienestar Natural con Adaptógenos Unifungi"
                />
              </div>

              <div>
                <Label htmlFor="heroSubtitle">Subtítulo</Label>
                <Textarea
                  id="heroSubtitle"
                  value={config.heroSubtitle}
                  onChange={(e) => setConfig({ ...config, heroSubtitle: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="heroPrimaryButtonText">Texto Botón Principal</Label>
                  <Input
                    id="heroPrimaryButtonText"
                    value={config.heroPrimaryButtonText}
                    onChange={(e) => setConfig({ ...config, heroPrimaryButtonText: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="heroPrimaryButtonUrl">URL Botón Principal</Label>
                  <Input
                    id="heroPrimaryButtonUrl"
                    value={config.heroPrimaryButtonUrl}
                    onChange={(e) => setConfig({ ...config, heroPrimaryButtonUrl: e.target.value })}
                    placeholder="https://unifungi.ar/collections/all"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="heroSecondaryButtonText">Texto Botón Secundario</Label>
                <Input
                  id="heroSecondaryButtonText"
                  value={config.heroSecondaryButtonText}
                  onChange={(e) => setConfig({ ...config, heroSecondaryButtonText: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Sobre la Marca */}
          <Card>
            <CardHeader>
              <CardTitle>Sobre la Marca</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="aboutTitle">Título</Label>
                <Input
                  id="aboutTitle"
                  value={config.aboutTitle}
                  onChange={(e) => setConfig({ ...config, aboutTitle: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="aboutDescription">Descripción</Label>
                <Textarea
                  id="aboutDescription"
                  value={config.aboutDescription}
                  onChange={(e) => setConfig({ ...config, aboutDescription: e.target.value })}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Beneficios */}
          <Card>
            <CardHeader>
              <CardTitle>Sección de Beneficios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="benefitsTitle">Título</Label>
                <Input
                  id="benefitsTitle"
                  value={config.benefitsTitle}
                  onChange={(e) => setConfig({ ...config, benefitsTitle: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="benefitsDescription">Descripción</Label>
                <Textarea
                  id="benefitsDescription"
                  value={config.benefitsDescription}
                  onChange={(e) => setConfig({ ...config, benefitsDescription: e.target.value })}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card>
            <CardHeader>
              <CardTitle>Newsletter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="newsletterTitle">Título</Label>
                <Input
                  id="newsletterTitle"
                  value={config.newsletterTitle}
                  onChange={(e) => setConfig({ ...config, newsletterTitle: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="newsletterSubtitle">Subtítulo</Label>
                <Input
                  id="newsletterSubtitle"
                  value={config.newsletterSubtitle}
                  onChange={(e) => setConfig({ ...config, newsletterSubtitle: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="newsletterDiscountText">Texto de Descuento</Label>
                <Input
                  id="newsletterDiscountText"
                  value={config.newsletterDiscountText}
                  onChange={(e) => setConfig({ ...config, newsletterDiscountText: e.target.value })}
                  placeholder="Ej: 15% de descuento"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contacto y Redes */}
          <Card>
            <CardHeader>
              <CardTitle>Contacto y Redes Sociales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="whatsappNumber">Número de WhatsApp</Label>
                  <Input
                    id="whatsappNumber"
                    value={config.whatsappNumber}
                    onChange={(e) => setConfig({ ...config, whatsappNumber: e.target.value })}
                    placeholder="5491170637716"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Sin espacios ni guiones</p>
                </div>
                <div>
                  <Label htmlFor="email">Email de Contacto</Label>
                  <Input
                    id="email"
                    type="email"
                    value={config.email}
                    onChange={(e) => setConfig({ ...config, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Ubicación</Label>
                <Input
                  id="location"
                  value={config.location}
                  onChange={(e) => setConfig({ ...config, location: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="instagramUrl">Instagram URL</Label>
                  <Input
                    id="instagramUrl"
                    value={config.instagramUrl}
                    onChange={(e) => setConfig({ ...config, instagramUrl: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="facebookUrl">Facebook URL</Label>
                  <Input
                    id="facebookUrl"
                    value={config.facebookUrl}
                    onChange={(e) => setConfig({ ...config, facebookUrl: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="youtubeUrl">YouTube URL</Label>
                  <Input
                    id="youtubeUrl"
                    value={config.youtubeUrl}
                    onChange={(e) => setConfig({ ...config, youtubeUrl: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* URLs Generales */}
          <Card>
            <CardHeader>
              <CardTitle>URLs de Redirección</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="shopUrl">URL de la Tienda Principal</Label>
                <Input
                  id="shopUrl"
                  value={config.shopUrl}
                  onChange={(e) => setConfig({ ...config, shopUrl: e.target.value })}
                  placeholder="https://unifungi.ar"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Esta es la URL a la que redirige el botón "Ir a la Tienda" del header
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Visibilidad de Secciones */}
          <Card>
            <CardHeader>
              <CardTitle>Visibilidad de Secciones</CardTitle>
              <CardDescription>
                Activá o desactivá secciones completas de la landing page
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="showPromotions">Mostrar sección de Promociones</Label>
                <Switch
                  id="showPromotions"
                  checked={visibility.promotions}
                  onCheckedChange={(checked) => setVisibility({ ...visibility, promotions: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="showServices">Mostrar sección de Servicios</Label>
                <Switch
                  id="showServices"
                  checked={visibility.services}
                  onCheckedChange={(checked) => setVisibility({ ...visibility, services: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="showTestimonials">Mostrar sección de Testimonios</Label>
                <Switch
                  id="showTestimonials"
                  checked={visibility.testimonials}
                  onCheckedChange={(checked) => setVisibility({ ...visibility, testimonials: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="showFAQ">Mostrar sección de FAQ</Label>
                <Switch
                  id="showFAQ"
                  checked={visibility.faq}
                  onCheckedChange={(checked) => setVisibility({ ...visibility, faq: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <Card>
            <CardHeader>
              <CardTitle>Footer</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="copyrightText">Texto de Copyright</Label>
                <Input
                  id="copyrightText"
                  value={config.copyrightText}
                  onChange={(e) => setConfig({ ...config, copyrightText: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Botón de guardar al final */}
          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              disabled={isSaving}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Save size={18} className="mr-2" />
              {isSaving ? 'Guardando...' : 'Guardar Todos los Cambios'}
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminConfig;
