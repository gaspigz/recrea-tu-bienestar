const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Profesora de Primaria",
      rating: 5,
      text: "Este taller transformó mi manera de enfrentar el estrés. Las herramientas de coaching y risoterapia me han permitido encontrar equilibrio en mi día a día. Ahora manejo mejor las situaciones difíciles y mis estudiantes también notan la diferencia.",
      avatar: "👩‍🏫"
    },
    {
      name: "Juan Martínez",
      role: "Empresario",
      rating: 5,
      text: "La combinación de creatividad y coaching es única. He descubierto aspectos de mí que no conocía y he mejorado mis relaciones laborales y personales. Mi equipo de trabajo también se beneficia de las técnicas que aplico.",
      avatar: "👨‍💼"
    },
    {
      name: "Ana Rodríguez",
      role: "Terapeuta",
      rating: 5,
      text: "La comunidad que se forma es increíble. Me siento acompañada en mi proceso de crecimiento y las herramientas son prácticas y efectivas. Como terapeuta, también incorporo algunas técnicas en mi práctica profesional.",
      avatar: "👩‍⚕️"
    },
    {
      name: "Carlos Mendoza",
      role: "Estudiante Universitario",
      rating: 5,
      text: "Llegué con mucha ansiedad por los estudios y el futuro. El taller me ayudó a cambiar mi perspectiva, manejar el estrés académico y conectar con mi propósito. La risoterapia es especialmente liberadora.",
      avatar: "👨‍🎓"
    },
    {
      name: "Isabel Fernández",
      role: "Madre y Ama de Casa",
      rating: 5,
      text: "Como madre de tres hijos, siempre me olvidaba de mí misma. Este espacio me devolvió la alegría y me enseñó a cuidarme mientras cuido a mi familia. Las herramientas de bienestar las aplicamos toda la familia.",
      avatar: "👩‍👧‍👦"
    },
    {
      name: "Roberto Silva",
      role: "Jubilado",
      rating: 5,
      text: "A los 65 años pensé que era tarde para cambios, pero este taller me demostró lo contrario. Redescubrí mi creatividad, hice nuevos amigos y encontré un propósito renovado para esta etapa de mi vida.",
      avatar: "👴"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index}
        className={`text-2xl ${index < rating ? 'text-secondary' : 'text-muted-foreground/30'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Experiencias de Participantes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce las transformaciones reales de personas que han vivido la experiencia de bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-hover transition-smooth hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-accent/20 font-serif">
                "
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <p className="text-muted-foreground">Personas Transformadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">4.9</div>
            <p className="text-muted-foreground">Valoración Promedio</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-2">85%</div>
            <p className="text-muted-foreground">Continúan Después</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Recomendarían</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;