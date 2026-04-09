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
    plan: "Comunidad", // <--- DATO FIJO
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

    // --- ESTA PARTE ES PARA QUE VOS VEAS EL DATO EN LA CONSOLA ---
    const datosAEnviar = {
      to_name: "Espacio Recrearte",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      plan: formData.plan, // Aquí verás "Comunidad"
      message: formData.message || "Quiero unirme a la comunidad",
    };
    
    console.log("Intentando enviar estos datos a EmailJS:", datosAEnviar);
    // -----------------------------------------------------------

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        datosAEnviar, // Enviamos el objeto verificado
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Respuesta de EmailJS:", response.status, response.text);

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.USER_TEMPLATE_ID,
        { to_name: formData.name, to_email: formData.email },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({ title: "¡Registrado!", description: "Ya puedes unirte al grupo." });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error detallado:", error);
      toast({ title: "Error", description: "Revisa la consola del navegador.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="comunidad" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary text-balance">Únete a Nuestra Comunidad</h2>
          
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
                <Label htmlFor="message">¿Algún comentario? (Opcional)</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Me gustaría sumarme para..." />
              </div>

              <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Quiero el acceso al WhatsApp"}
              </Button>
            </form>
          ) : (
            <div className="text-center bg-green-50 p-8 rounded-2xl border border-green-200">
              <h3 className="text-green-800 font-bold text-xl mb-4">✅ ¡Datos recibidos!</h3>
              <Button 
                className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold"
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