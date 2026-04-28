import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToComunidad = () => {
    document.getElementById('comunidad')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return <>
      {/* Gift Banner */}
      

<div className="bg-success text-success-foreground px-5 py-6 text-center border-b-2 border-emerald-600 shadow-lg">
  {/* Título Principal */}
  <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter flex justify-center items-center gap-2 mb-2">
    <span>🎁</span> ¡Un regalo te espera!
  </h2>
  
  {/* Propósito sutil */}
  <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-tight italic mb-4">
    Unite a nuestra comunidad para mantener encendido tu bienestar diario y compartir este camino de transformación.
  </p>

  {/* Acción Destacada */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-3">
    <span className="text-lg font-semibold">¿Te sumás?</span>
    <button 
      onClick={scrollToComunidad}
      className="px-6 py-2 rounded-full bg-white text-success font-black text-xl hover:bg-emerald-50 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] animate-bounce"
    >
      ¡SÍ, QUIERO MI REGALO!
    </button>
  </div>
</div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Personas disfrutando de actividades de bienestar" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Recreá tu
              <span className="block text-accent">Bienestar</span>
            </h1>
            
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Un taller único que combina <strong>creatividad</strong>, <strong>buen humor</strong>, <strong>conexión</strong> y <strong>alivio del estrés</strong> a través de la risa y el juego. Incluye prácticas y dinámicas de relajación, observación consciente y aprendizaje vivencial. Un espacio para ejercitar el liderazgo personal, el autoconocimiento y un cambio vital que transformará tu relación con el estrés diario, garantizando tu bienestar integral.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary-foreground transition-smooth shadow-soft text-lg px-8 py-4" onClick={scrollToRegistration}>
                Inscribirme Ahora
              </Button>
              
              {/* Botón Conocer Más ajustado: más tenue y fuerte al pasar el mouse */}
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/40 text-success/50 hover:border-white hover:text-success hover:bg-white/10 transition-all duration-300 text-lg px-8 py-4" 
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
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
    </>;
};

export default Hero;