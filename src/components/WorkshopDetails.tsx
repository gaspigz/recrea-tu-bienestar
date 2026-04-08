const WorkshopDetails = () => {
  const details = [
    {
      icon: "📅",
      title: "Fecha de Inicio",
      value: "Viernes 24 de Abril 2026",
      description: "Comienza tu transformación - ¡No te lo pierdas!"
    },
    {
      icon: "⏰",
      title: "Horario",
      value: "18:30 - 20:30 hrs",
      description: "2 horas de bienestar puro"
    },
    
    {
      icon: "🏢",
      title: "Lugar: 27 de Febrero 1718 - Rosario - Santa Fe - Argentina",
      value: "Presencial - VIERNES QUINCENALES",
      description: "Ambiente seguro y colaborativo"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Detalles del Taller
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todo lo que necesitas saber para comenzar tu viaje hacia el bienestar integral
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="bg-card border-l-4 border-primary rounded-2xl p-6 shadow-soft hover:shadow-hover transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-xl font-semibold text-foreground mb-1">
                    {detail.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {detail.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workshop Structure */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">
            Estructura de Cada Sesión
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-lg mb-2">Bienvenida</h4>
              <p className="text-muted-foreground text-sm">Conexión grupal y check-in emocional</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-lg mb-2">Activación</h4>
              <p className="text-muted-foreground text-sm">Ejercicios de conexión con tu alegría interior, a través de la risa y el movimiento</p>
            </div>
            
            <div className="text-center">
              <div className="bg-success text-success-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-lg mb-2">Creación</h4>
              <p className="text-muted-foreground text-sm">Actividades creativas y coaching</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold text-lg mb-2">Integración</h4>
              <p className="text-muted-foreground text-sm">Reflexión y compromiso personal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
