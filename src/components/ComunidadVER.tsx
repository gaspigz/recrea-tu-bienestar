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
const templateParams = {
user_name: formData.name,
user_email: formData.email,
user_phone: formData.phone,
plan: "ser parte de la comunidad",
selected_plan: "ser parte de la comunidad",
user_message: formData.message || "Interés en unirse a la comunidad de Recrea tu Bienestar",
to_name: formData.name,
to_email: formData.email,
from_name: formData.name,
Código actualizado con sección de beneficios y CTA mejorado.

from_email: formData.email,
};
try {
await emailjs.send(
EMAILJS_CONFIG.SERVICE_ID,
EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
templateParams,
EMAILJS_CONFIG.PUBLIC_KEY
);
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
<h2 className="text-3xl font-bold mb-2 text-primary flex flex-col items-center text-center">
<span>Únete a Nuestra Comunidad</span>
<span>Recrea tu bienestar</span>
</h2>
<p className="text-center text-gray-600 mb-8 font-medium">
¡Decidí ser parte hoy mismo y llevate tu primer regalo!
</p>
{!isSubmitted ? (
<>
{/* Lista de Beneficios */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 bg-primary/5 p-6 rounded-2xl border border-primary/10 text-sm">
<div className="flex items-center gap-2">
<span className="text-green-500 font-bold text-lg"> </span>
<span>E-book "Bienestar en Juego" GRATIS</span>
</div>
<div className="flex items-center gap-2">
<span className="text-green-500 font-bold text-lg"> </span>
<span>Calendario 2026 de actividades</span>
</div>
<div className="flex items-center gap-2">
<span className="text-green-500 font-bold text-lg"> </span>

<span>Acompañamiento diario grupal</span>
</div>
<div className="flex items-center gap-2">
<span className="text-green-500 font-bold text-lg"> </span>
<span>Tips exclusivos para el taller intensivo</span>
</div>
</div>
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
<Label htmlFor="message">¿Por qué quieres sumarte a nuestra comunidad? (Opcional)</Label>
<Textarea
id="message"
name="message"
value={formData.message}
onChange={handleInputChange}
placeholder="Contanos brevemente qué te motiva..."
className="min-h-[80px]"
/>
</div>
<Button type="submit" className="w-full h-12 text-lg font-bold shadow-lg bg-primary hover:bg-primary/90" disabled={isSubmitting}>
{isSubmitting ? "Enviando..." : "SOLICITAR ACCESO Y MI REGALO"}
</Button>
</form>
</>
) : (
<div className="text-center bg-green-50 p-8 rounded-2xl border border-green-200 animate-in fade-in zoom-in">
<h3 className="text-green-800 font-bold text-xl mb-4"> ¡Bienvenido a la comunidad!</h3>
<p className="text-green-700 mb-6">Ya puedes entrar al grupo de WhatsApp y descargar tu material de regalo.</p>
<div className="flex flex-col space-y-4">
<a href="/E-BOOK-BienestarEnJuego.pdf" download="Tu E-BOOK de regalo" className="w-full">
<Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all h-12">
Baja Tu E-BOOK de regalo (PDF)
</Button>
</a>

<Button
className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg shadow-lg"
onClick={() => window.open("https://chat.whatsapp.com/HeY10ZbEd348MyFFvydZLz", "_blank")}
>
ENTRA AL GRUPO AHORA
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