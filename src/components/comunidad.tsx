import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
    message: "",
    website: "", 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    setIsSubmitting(true);

    // TRUCO UNIVERSAL: Enviamos la misma info con varios nombres 
    // para que coincida con lo que tengas en EmailJS
    const universalParams = {
      // Variaciones para el Nombre
      name: formData.name,
      from_name: formData.name,
      user_name: formData.name,
      
      // Variaciones para el Email
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      
      // Variaciones para el Teléfono
      phone: formData.phone,
      whatsapp: formData.phone,
      
      // El Plan (Fijo como pediste)
      plan: "Comunidad",
      tipo_plan: "Comunidad",
      
      // El Mensaje
      message: formData.message || "Interés en unirse a la comunidad",
      user_message: formData.message,
    };

    try {
      // 1. Envío al Admin (Vos)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        universalParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // 2. Envío al Usuario (Bienvenida)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.USER_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({ title: "¡Solicitud enviada!", description: "Datos registrados correctamente." });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      toast({ title: "Error", description: "No se pudo enviar.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="comunidad" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">Únete a Nuestra Comunidad</h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="website" value={formData.website} onChange={handleInputChange} className="hidden" />
              
              <div className="space-y-2">
                <Label htmlFor="name">Nombre y Apellido</Label>
                <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Tu nombre completo" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="tu@mail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+54 9..." />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">¿Por qué quieres sumarte? (Opcional)</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Contanos brevemente..." 
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Enviando datos..." : "Obtener acceso al WhatsApp"}
              </Button>
            </form>
          ) : (
            <div className="text-center bg-green-50 p-8 rounded-2xl border border-green-200 animate-in fade-in zoom-in">
              <h3 className="text-green-800 font-bold text-xl mb-4">✅ ¡Datos recibidos!</h3>
              <p className="text-green-700 mb-6">Ya puedes entrar al grupo de WhatsApp de Recrea tu Bienestar.</p>
              <Button 
                className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg shadow-lg"
                onClick={() => window.open("https://chat.whatsapp.com/HeY10ZbEd348MyFFvydZLz", "_blank")}
              >
                📱 ENTRAR AL GRUPO AHORA
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comunidad;