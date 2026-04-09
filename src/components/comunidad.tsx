import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Mantenemos tu configuración de EmailJS que ya funciona
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_jwcleph',
  PUBLIC_KEY: 'RihHVyelY6VmZ1AYI',
  USER_TEMPLATE_ID: 'template_mf9so3c',
  ADMIN_TEMPLATE_ID: 'template_ghdcsz8'
};

const Comunidad = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Para saber si ya envió los datos
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Comunidad", // Valor fijo para identificar el origen en el mail
    message: "Solicitud de ingreso al grupo de WhatsApp Recrea tu Bienestar",
    website: "", // Honeypot anti-spam
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Anti-spam rápido
    if (formData.website) return;

    setIsSubmitting(true);

    try {
      // Enviamos el correo al Administrador (Recrearte)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          plan: formData.plan,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Enviamos el correo de bienvenida al Usuario
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.USER_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({
        title: "¡Datos registrados con éxito!",
        description: "Ya puedes acceder al grupo de WhatsApp debajo.",
      });
      
      setIsSubmitted(true); // Cambia la vista para mostrar el botón de WhatsApp
    } catch (error) {
      console.error("Error enviando emails:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tus datos. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Comunidad" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-primary/10">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">
              Únete a Nuestra Comunidad
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {!isSubmitted 
                ? "Completa tus datos para recibir el acceso al grupo exclusivo de WhatsApp." 
                : "¡Gracias por registrarte! Haz clic en el botón de abajo para ingresar."}
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campo oculto anti-spam */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="hidden"
                />

                <div className="space-y-2">
                  <Label htmlFor="name">Nombre y Apellido</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Número de Celular</Label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    placeholder="+54 9 341 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg h-12 bg-primary hover:bg-primary-glow transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Procesando...</span>
                    </div>
                  ) : (
                    "Obtener acceso al WhatsApp"
                  )}
                </Button>
              </form>
            ) : (
              <div className="mt-4 text-center animate-in fade-in zoom-in duration-500">
                <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-green-800 font-bold text-xl mb-4">
                    ✅ ¡Registro completado!
                  </h3>
                  <p className="text-green-700 mb-6">
                    Ya puedes unirte al grupo de WhatsApp de Recrea tu Bienestar.
                  </p>
                  <Button
                    type="button"
                    className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold shadow-lg transition-transform hover:scale-105"
                    onClick={() =>
                      window.open(
                        "https://chat.whatsapp.com/HeY10ZbEd348MyFFvydZLz",
                        "_blank"
                      )
                    }
                  >
                    <span className="mr-2 text-2xl">📱</span>
                    ENTRAR AL GRUPO AHORA
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comunidad;