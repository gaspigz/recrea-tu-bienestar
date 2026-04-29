const WorkshopDetails = () => {
  const details = [
    {
      icon: "📅",
      title: "Fecha de Inicio",
      value: "Viernes 24 de Abril 2026",
      description: "O busca tu fecha ideal en el cronograma"
    },
    {
      icon: "⏰",
      title: "Horario",
      value: "18:30 - 20:30 hrs",
      description: "2 horas de bienestar puro"
    },
    {
      icon: "🏢",
      title: "Ubicación",
      value: "27 de Febrero 1718 - Rosario",
      description: "Presencial - Viernes Quincenales"
    }
  ];

  return (
    <section id="workshop-details" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Detalles del Taller
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todo lo que necesitas saber para comenzar tu viaje hacia el bienestar integral
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="bg-card border-l-4 border-primary rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{detail.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">{detail.title}</h3>
                  <p className="text-lg font-semibold text-foreground mb-1">{detail.value}</p>
                  <p className="text-muted-foreground text-sm">{detail.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-primary mb-10 text-center">Estructura de Cada Sesión</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Step number="1" title="Bienvenida" desc="Conexión grupal y check-in emocional" color="bg-primary" />
            <Step number="2" title="Activación" desc="Risa y movimiento consciente" color="bg-secondary" />
            <Step number="3" title="Creación" desc="Actividades creativas y coaching" color="bg-success" />
            <Step number="4" title="Integración" desc="Reflexión y compromiso personal" color="bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ number, title, desc, color }: { number: string, title: string, desc: string, color: string }) => (
  <div className="text-center group">
    <div className={`${color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-transform group-hover:scale-110`}>
      {number}
    </div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm">{desc}</p>
  </div>
);

export default WorkshopDetails;