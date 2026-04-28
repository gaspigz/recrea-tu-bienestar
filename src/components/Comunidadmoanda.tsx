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
  
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/HeY10ZbEd348MyFFvydZLz";

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

    const templateParams: Record<string, string> = {
      name: formData.name,      
      email: formData.email,    
      phone: formData.phone,    
      plan: "la Comunidad de Bienestar", 
      message: formData.message || "Interés en sumarse a la comunidad",
      to_name: formData.name,
      to_email: formData.email,
      from_name: formData.name,
      from_email: formData.email
    };

    try {
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.ADMIN_TEMPLATE_ID, templateParams, EMAILJS_CONFIG.PUBLIC_KEY);
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.USER_TEMPLATE_ID, templateParams, EMAILJS_CONFIG.PUBLIC_KEY);

      setIsSubmitted(true);
      toast({ title: "¡Datos enviados!", description: "Ya podés descargar tu regalo y unirte." });
    } catch (error) {
      console.error("Error EmailJS:", error);
      toast({ title: "Error", description: "No se pudo enviar el registro.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="comunidad" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-primary/10">
          <h2 className="text-3xl font-bold mb-6 text-primary flex flex-col items-center">
            <span>Únete a Nuestra Comunidad</span>
            <span className="text-2xl opacity-90 font-medium">Recreá tu bienestar y recibí un regalo.</span>
          </h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
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
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Contanos brevemente qué te motiva..." className="min-h-[100px]" />
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "🎁 Obtener mi regalo y Unirme"}
              </Button>
            </form>
          ) : (
            <div className="animate-in fade-in zoom-in duration-500">
              <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-green-800 font-bold text-xl mb-2">✅ ¡Registro completado!</h3>
                <p className="text-green-700 mb-6">Seguí estos pasos para obtener tu beneficio:</p>
                
                <div className="space-y-4">
                  {/* PASO 1: DESCARGAS */}
                  <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm flex flex-col gap-3">
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Paso 1: Tus Regalos</span>
                    
                    {/* Botón Ebook */}
                    <Button 
                      className="w-full h-12 bg-primary text-white font-bold"
                      onClick={() => window.open("/E-BOOK-BienestarEnJuego.pdf", "_blank")}
                    >
                      📥 DESCARGAR EBOOK
                    </Button>

                    {/* Botón Calendario */}
                    <a href="/2026HorariosRecreaTuBienestar.png" download="Calendario_2026.png" className="w-full">
                      <Button variant="outline" className="w-full h-12 border-primary text-primary hover:bg-primary/5 font-bold">
                        📅 DESCARGAR CALENDARIO 2026
                      </Button>
                    </a>
                  </div>

                  {/* PASO 2: WHATSAPP */}
                  <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm flex flex-col gap-3">
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Paso 2: Comunidad</span>
                    <Button 
                      className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold shadow-lg"
                      onClick={() => window.open(WHATSAPP_GROUP_LINK, "_blank")}
                    >
                      📱 ENTRAR AL GRUPO DE WHATSAPP
                    </Button>
                  </div>
                </div>

                <p className="mt-6 text-xs text-green-600 italic">
                  También enviamos una copia a tu mail. ¡Nos vemos en el grupo!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comunidad;