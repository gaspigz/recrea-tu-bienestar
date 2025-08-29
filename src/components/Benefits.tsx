const Benefits = () => {
  const benefits = [
    {
      icon: "🧠",
      title: "Liderazgo Consciente",
      description: "Basado en las enseñanzas de Rafael Echeverría, transformarás tus conversaciones internas para liderar con efectividad tu vida y alinearte con tu propósito.",
      color: "primary"
    },
    {
      icon: "😄",
      title: "Risoterapia",
      description: "Aplicando técnicas validadas, liberarás tensiones y activarás tu bioquímica de bienestar a través de la risa consciente y el humor terapéutico.",
      color: "secondary"
    },
    {
      icon: "🎨",
      title: "Creatividad Expresiva",
      description: "Inspirados en Jacobo Moreno y el psicodrama, descubrirás nuevas formas de expresión que conectan con tu esencia y potencian tu innovación.",
      color: "success"
    },
    {
      icon: "💝",
      title: "Biología del Amor",
      description: "Integrando los conceptos de Humberto Maturana, aprenderás a crear espacios de convivencia que nutren tu bienestar emocional y relacional.",
      color: "primary"
    },
    {
      icon: "🤝",
      title: "Comunidad de Apoyo",
      description: "Acceso a un grupo exclusivo de WhatsApp y una comunidad comprometida con el crecimiento personal y el bienestar colectivo.",
      color: "secondary"
    },
    {
      icon: "🎮",
      title: "Juegos y Dinámicas",
      description: "Herramientas lúdicas y prácticas basadas en psicología positiva que podrás integrar en tu vida diaria para transformar el estrés en energía creativa.",
      color: "success"
    }
  ];

  return (
    <section id="benefits" className="py-20 gradient-joy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Beneficios de nuestro taller
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combina los mejores enfoques científicos del bienestar humano en una experiencia transformadora
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-border/50 rounded-3xl p-8 shadow-soft hover:shadow-hover transition-smooth hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-smooth">
                {benefit.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 text-${benefit.color}`}>
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              <div className={`mt-6 w-full h-1 bg-gradient-to-r from-${benefit.color} to-${benefit.color}/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-smooth origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Scientific Backing */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-3xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Respaldo Científico</h3>
            <p className="text-muted-foreground">
              Nuestro taller integra metodologías validadas por instituciones como <strong>AACOP</strong> y 
              está fundamentado en investigaciones de <strong>psicología positiva</strong>, neurociencia del bienestar 
              y técnicas terapéuticas reconocidas internacionalmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;