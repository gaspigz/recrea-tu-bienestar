import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Inicio", id: "hero" },
    { name: "Beneficios", id: "benefits" },
      { name: "Detalles", id: "WorkshopDetails" },
    { name: "Precios", id: "Pricing" },
    { name: "Comunidad", id: "comunidad" },
    { name: "Inscripción al Taller", id: "registration" }
  ];

  return (
    <>
      {/* 1. Menú de Navegación (Sticky) */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm">
        <div className="container mx-auto px-4 flex justify-center gap-4 md:gap-8">
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

      {/* 2. Gift Banner */}
      <div className="bg-success text-success-foreground px-5 py-6 text-center border-b-2 border-emerald-600 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter flex justify-center items-center gap-2 mb-2">
          <span>🎁</span> ¡Un regalo te espera!
        </h2>
        <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-tight italic mb-4">
          Unite a nuestra comunidad para mantener encendido tu bienestar diario y compartir este camino de transformación.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <span className="text-lg font-semibold">¿Te sumás?</span>
          <button 
            onClick={() => scrollToSection('comunidad')}
            className="px-6 py-2 rounded-full bg-white text-success font-black text-xl hover:bg-emerald-50 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] animate-bounce"
          >
            ¡SÍ, QUIERO MI REGALO!
          </button>
        </div>
      </div>

      {/* 3. Hero Section (Ajustada en ancho) */}
      <section id="hero" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Personas disfrutando de actividades de bienestar" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          {/* Se cambió de max-w-4xl a max-w-3xl para que sea más angosto */}
          <div className="max-w-3xl mx-auto text-center text-white animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Recreá tu
              <span className="block text-accent">Bienestar</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Un taller único que combina <strong>creatividad</strong>, <strong>buen humor</strong>, <strong>conexión</strong> y <strong>alivio del estrés</strong> a través de la risa y el juego. Incluye prácticas y dinámicas de relajación, observación consciente y aprendizaje vivencial. Un espacio para ejercitar el liderazgo personal, el autoconocimiento y un cambio vital que transformará tu relación con el estrés diario, garantizando tu bienestar integral.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary-foreground transition-smooth shadow-soft text-lg px-8 py-4" onClick={() => scrollToSection('registration')}>
                Inscribirme Ahora
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/40 text-white/70 hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 text-lg px-8 py-4" 
                onClick={() => scrollToSection('benefits')}
              >
                Conocer Más
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>
    </>
  );
};

export default Hero;