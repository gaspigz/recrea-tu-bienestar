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
    plan: "Comunidad", // Esto viajará como {{plan}}
    message: "",      // Esto viajará como {{message}}
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

    // Estos nombres (from_name, plan, etc) deben ser IGUALES a los de tu plantilla en EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      plan: formData.plan,
      message: formData.message || "Interés en unirse a la comunidad",
    };

    try {
      // 1. Envío al Administrador (Recrearte)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        templateParams,
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

      toast({ title: "¡Datos enviados!", description: "Revisa tu correo y únete al grupo." });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error EmailJS:", error);
      toast({ title: "Error", description: "No se pudo enviar el mail.", variant: "destructive" });
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
                <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Tu nombre" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="tu@mail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+54 9..." />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">¿Algo que quieras contarnos?</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Opcional..." />
              </div>
              <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Obtener acceso al WhatsApp"}
              </Button>
            </form>
          ) : (
            <div className="text-center animate-in fade-in zoom-in">
              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-green-800 font-bold text-xl mb-4">✅ ¡Registro completado!</h3>
                <Button 
                  className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg"
                  onClick={() => window.open("https://chat.whatsapp.com/HeY10ZbEd348MyFFvydZLz", "_blank")}
                >
                  📱 ENTRAR AL GRUPO AHORA
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comunidad;