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
    website: "", // Honeypot
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    setIsSubmitting(true);

    // Mapeo exhaustivo para cubrir TODOS los nombres de etiquetas en tus plantillas
    const templateParams = {
      // 1. Campos que busca la plantilla de ADMIN (template_ghdcsz8)
      user_name: formData.name,      // <--- IMPORTANTE: Tu plantilla usa {{name}}
      user_email: formData.email,    // <--- IMPORTANTE: Tu plantilla usa {{email}}
      user_phone: formData.phone,    // <--- IMPORTANTE: Tu plantilla usa {{phone}}
      plan: "ser parte de la comunidad",   
      selected_plan: "ser parte de la comunidad",     // <--- IMPORTANTE: Tu plantilla usa {{plan}}
      user_message: formData.message || "Interés en unirse a la comunidad de Recrea tu Bienestar", // <--- IMPORTANTE: Tu plantilla usa {{message}}

      // 2. Campos que busca la plantilla de USUARIO (template_mf9so3c)
      to_name: formData.name,   // Tu plantilla usa {{to_name}}
      to_email: formData.email, // Tu plantilla usa {{to_email}}

      // 3. Extras por compatibilidad con el historial de EmailJS
      from_name: formData.name,
      from_email: formData.email,
    };

    try {
      // Envío al Admin (Vos)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Envío al Usuario (Bienvenida)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.USER_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({ title: "¡Registrado!", description: "Revisa tu mail, te dejamos una constancia de tu registración en la comunidad. Ya puedes ingresar a la misma." });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error EmailJS:", error);
      toast({ title: "Error", description: "No se pudo enviar el registro.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="comunidad" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary/10">
          {/* <h2 className="text-3xl font-bold text-center mb-6 text-primary">Únete a Nuestra Comunidad Recrea tu bienestar</h2> */}
          <h2 className="text-3xl font-bold mb-6 text-primary flex flex-col items-center text-center">
           <span>Únete a Nuestra Comunidad</span>
           <span>Recrea tu bienestar</span>
           </h2>
          
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
                <Label htmlFor="message">¿Por qué quieres sumarte a nuestra comunidad de Recrea tu Bienestar? (Opcional)</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Contanos brevemente qué te motiva..." 
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Solicitar Acceso"}
              </Button>
            </form>
          ) : (
            <div className="text-center bg-green-50 p-8 rounded-2xl border border-green-200 animate-in fade-in zoom-in">
              <h3 className="text-green-800 font-bold text-xl mb-4">✅ ¡Datos recibidos!</h3>
              <p className="text-green-700 mb-6">Ya puedes entrar al grupo de WhatsApp de Recrea tu Bienestar.</p>
              
              
              
              
               {/* Botón 1: Descargar Calendario */}
          <a href="/2026HorariosRecreaTuBienestar.png" download="Calendario_2026.png" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Calendario 2026 (PNG)
            </Button>
          </a>
              
              
              
              
              
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