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
      

<div className="bg-success text-success-foreground px-5 py-4 text-center border-b-2 border-emerald-600 shadow-md">
  <span className="text-2xl mr-2">🎁</span>
  <span className="text-xl md:text-2xl font-bold uppercase tracking-wide">
    ¡Súmate a nuestra comunidad!
  </span>
  <span className="block text-lg md:text-xl mt-2">
    Haz clic en el 
    <button 
      onClick={scrollToComunidad}
      className="mx-2 px-3 py-1 rounded-full bg-white/20 hover:bg-white/40 border border-white/50 text-white font-black transition-all duration-300 animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
    >
      APARTADO COMUNIDAD
    </button> 
    y obtené un regalo sorpresa.
  </span>
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