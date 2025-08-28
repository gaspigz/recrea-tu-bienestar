import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";
const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <>
      {/* Gift Banner */}
      <div className="bg-success text-success-foreground px-4 py-3 text-center font-semibold animate-fade-in">
        <span className="text-lg">🎁</span> ¡Inscríbete esta semana y recibe tu primera clase GRATIS!
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Personas disfrutando de actividades de bienestar" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Recréate tu
              <span className="block text-accent">Bienestar</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Un taller único que combina <strong>creatividad</strong>, <strong>buen humor</strong>, <strong>conexión</strong> y <strong>alivio del estrés</strong> a través de la risa y el juego. Incluye prácticas y dinámicas de relajación, observación consciente y aprendizaje vivencial. Un espacio para ejercitar el liderazgo personal, el autoconocimiento y un cambio vital que transformará tu relación con el estrés diario, garantizando tu bienestar integral.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary-foreground transition-smooth shadow-soft text-lg px-8 py-4" onClick={scrollToRegistration}>
                Inscribirme Ahora
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary transition-smooth text-lg px-8 py-4" onClick={() => document.getElementById('benefits')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Conocer Más
              </Button>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-bounce-in">
                
                <p className="font-semibold">📆 Inicio: jueves 4 de septiembre de 2025 
🏛️ Modalidad: Presencial 
🕖 Horario: Todos los jueves, de 19:00 a 20:30 hs 
📍 Lugar: 27 de Febrero 1718, Rosario, Santa Fe</p>
                
                
                
                
              </div>
              
              
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </section>
    </>;
};
export default Hero;