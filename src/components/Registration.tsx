import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 👇 Estado con el campo oculto incluido (website)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
    website: "" // 👈 honeypot anti-spam
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 👇 Nuevo handleSubmit que envía al endpoint /api/registration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "No se pudo enviar el formulario.");
      }

      toast({
        title: "¡Inscripción Enviada! 🎉",
        description: `Gracias ${formData.name}! Te contactaremos a la brevedad.`,
        duration: 6000,
      });

      // limpiar campos
      setFormData({
        name: "",
        email: "",
        phone: "",
        plan: "",
        message: "",
        website: "",
      });
    } catch (err: any) {
      console.error("Error submitting form:", err);
      toast({
        title: "Error al enviar",
        description: err?.message || "Intentá de nuevo en unos minutos.",
        duration: 6000,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inscríbete Hoy
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Completa el formulario para reservar tu lugar. Te contactaremos a la brevedad 
            para confirmar tu inscripción y enviarte los detalles de pago.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-glow">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* 👇 Campo oculto anti-bots */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-semibold">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre y apellido"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-accent focus:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-semibold">
                    Correo Electrónico *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-semibold">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+54 9 11 1234-5678"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-accent focus:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan" className="text-white font-semibold">
                  Plan Elegido *
                </Label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-accent focus:ring-accent focus:outline-none"
                >
                  <option value="" className="text-gray-800">Selecciona una opción</option>
                  <option value="individual" className="text-gray-800">Individual - $20.000/mes</option>
                  <option value="duo" className="text-gray-800">Promoción Dúo - $10.000 cada uno</option>
                  <option value="adelantado" className="text-gray-800">Pago Adelantado - $15.000/mes</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white font-semibold">
                  Mensaje (Opcional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos qué te motiva a participar en el taller..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-accent focus:ring-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-4 transition-smooth shadow-soft hover:shadow-hover"
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  "Enviar Inscripción"
                )}
              </Button>
            </form>

            {/* WhatsApp Community */}
            <div className="mt-8 text-center">
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  🔗 Únete a Nuestra Comunidad
                </h3>
                <p className="text-white/80 mb-4">
                  Accede ahora a nuestro grupo de WhatsApp exclusivo
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary transition-smooth"
                  onClick={() => window.open('https://wa.me/group_link', '_blank')}
                >
                  <span className="mr-2">📱</span>
                  Unirse al Grupo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center text-white">
            <div className="text-3xl mb-2">✅</div>
            <h4 className="font-bold mb-2">Primera Clase Gratis</h4>
            <p className="text-white/80 text-sm">Conoce el taller sin compromiso</p>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl mb-2">🎁</div>
            <h4 className="font-bold mb-2">Regalo de Bienvenida</h4>
            <p className="text-white/80 text-sm">Material especial para comenzar</p>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl mb-2">🔐</div>
            <h4 className="font-bold mb-2">Garantía de Satisfacción</h4>
            <p className="text-white/80 text-sm">100% satisfecho o tu dinero de vuelta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
