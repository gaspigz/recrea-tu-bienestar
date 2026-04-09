import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Importamos el cuadro de mensaje
import { useToast } from "@/hooks/use-toast";

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_jwcleph',
  PUBLIC_KEY: 'RihHVyelY6VmZ1AYI',
  USER_TEMPLATE_ID: 'template_mf9so3c',
  ADMIN_TEMPLATE_ID: 'template_ghdcsz8'
};

const Comunidad = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Comunidad", // Esto queda fijo para tu control
    message: "",      // Esto lo completará el usuario
    website: "",      // Antispam
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    setIsSubmitting(true);

    try {
      // 1. Mail para VOS (Admin) - Usamos los nombres exactos de Registration.tsx
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        {
          to_name: "Espacio Recrearte", // Agregamos esto por seguridad
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          plan: formData.plan,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // 2. Mail para el USUARIO
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
        title: "¡Solicitud enviada!",
        description: "Revisa tu correo. Ya puedes unirte al grupo.",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error EmailJS:", error);
      toast({
        title: "Error",
        description: "No pudimos enviar los correos. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="comunidad" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-primary/10">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">
              Únete a Nuestra Comunidad
            </h2>
            <p className="text-gray-600 text-center mb-8">
              {!isSubmitted 
                ? "Completa tus datos para recibir el acceso al grupo exclusivo de WhatsApp." 
                : "¡Bienvenido! Haz clic abajo para ingresar al grupo."}
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="website" value={formData.website} onChange={handleInputChange} className="hidden" />

                <div className="space-y-2">
                  <Label htmlFor="name">Nombre y Apellido</Label>
                  <Input id="name" name="name" required placeholder="Tu nombre completo" value={formData.name} onChange={handleInputChange} />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" name="email" type="email" required placeholder="tu@email.com" value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="phone">WhatsApp</Label>
                    <Input id="phone" name="phone" required placeholder="+54 9 341..." value={formData.phone} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">¿Por qué quieres unirte? (Opcional)</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Cuéntanos un poquito de ti..." 
                    value={formData.message} 
                    onChange={handleInputChange}
                    className="min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full text-lg h-12 bg-primary hover:bg-primary-glow" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando datos..." : "Obtener acceso al WhatsApp"}
                </Button>
              </form>
            ) : (
              <div className="mt-4 text-center animate-in fade-in zoom-in">
                <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-green-800 font-bold text-xl mb-4">✅ ¡Registro completado!</h3>
                  <p className="text-green-700 mb-6">Ya puedes ingresar al grupo oficial.</p>
                  <Button
                    type="button"
                    className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold shadow-lg"
                    onClick={() => window.open("https://chat.whatsapp.com/HeY10ZbEd348MyFFvydZLz", "_blank")}
                  >
                    📱 ENTRAR AL GRUPO AHORA
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