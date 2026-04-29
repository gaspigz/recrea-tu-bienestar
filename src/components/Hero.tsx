import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Inicio", id: "hero" },
    { name: "Beneficios", id: "benefits" },
    { name: "Detalles", id: "workshop-details" }, // Sincronizado
    { name: "Precios", id: "pricing" },           // Sincronizado con Pricing.tsx
    { name: "Comunidad", id: "comunidad" },
    { name: "Inscripción", id: "registration" }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs md:text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-wider"
            >
              {link.name}
            </button>
          ))}
        </div>
      </nav>

      <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Wellness" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center text-white animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Recreá tu <span className="block text-accent">Bienestar</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Un taller único que combina <strong>creatividad</strong>, <strong>buen humor</strong> y <strong>alivio del estrés</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary-foreground text-lg px-8 py-4" onClick={() => scrollToSection('registration')}>
                Inscribirme Ahora
              </Button>
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 text-lg px-8 py-4" onClick={() => scrollToSection('benefits')}>
                Conocer Más
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;