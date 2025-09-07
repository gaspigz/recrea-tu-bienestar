import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const pricingOptions = [
    {
      title: "Individual",
      price: "$20.000",
      period: "/mes",
      originalPrice: null,
      discount: null,
      popular: false,
      features: [
        "Acceso a todas las sesiones semanales",
        "Material de apoyo digital",
        "Grupo de WhatsApp exclusivo",
        "Comunidad de bienestar",
      /*  "Primera clase GRATIS", */
    /*    "Seguimiento personalizado" */
      ],
      buttonText: "Inscribirme",
      color: "primary"
    },
    {
      title: "Promoción Dúo",
      price: "$10.000",
      period: "/cada uno",
      originalPrice: "$20.000",
      discount: "50% OFF",
      popular: true,
      features: [
        "Acceso para DOS personas",
        "Material de apoyo digital",
        "Grupo de WhatsApp exclusivo",
        "Comunidad de bienestar",
      /*  "Primera clase GRATIS", */
     /*   "Seguimiento personalizado", */
        "Actividades especiales para parejas"
      ],
      buttonText: "Inscribirnos",
      color: "secondary"
    },
    {
      title: "Pago Adelantado",
      price: "$15.000",
      period: "/mes",
      originalPrice: "$20.000",
      discount: "25% OFF",
      popular: false,
      features: [
        "Acceso a todas las sesiones semanales",
        "Material de apoyo digital",
        "Grupo de WhatsApp exclusivo",
        "Comunidad de bienestar",
     /*   "Primera clase GRATIS", */
    /*    "Seguimiento personalizado", */
        "Descuento por pago adelantado"
      ],
      buttonText: "Inscribirme",
      color: "success"
    }
  ];

  return (
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Opciones de Participación
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elige la opción que mejor se adapte a ti y comienza tu transformación hacia el bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-3xl shadow-soft hover:shadow-hover transition-smooth animate-slide-up ${
                option.popular ? 'scale-105 ring-2 ring-secondary shadow-glow' : 'hover:-translate-y-2'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground px-6 py-2 text-sm font-bold shadow-soft">
                    MÁS POPULAR
                  </Badge>
                </div>
              )}

              {option.discount && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-success text-success-foreground rounded-full w-16 h-16 flex items-center justify-center text-xs font-bold shadow-soft">
                    {option.discount}
                  </div>
                </div>
              )}

              <div className={`p-8 rounded-t-3xl ${option.popular ? 'gradient-hero text-white' : `bg-${option.color}/5`}`}>
                <h3 className={`text-2xl font-bold mb-4 ${option.popular ? 'text-white' : `text-${option.color}`}`}>
                  {option.title}
                </h3>
                
                <div className="mb-6">
                  {option.originalPrice && (
                    <p className={`text-lg line-through ${option.popular ? 'text-white/70' : 'text-muted-foreground'} mb-1`}>
                      {option.originalPrice}
                    </p>
                  )}
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${option.popular ? 'text-white' : `text-${option.color}`}`}>
                      {option.price}
                    </span>
                    <span className={`text-lg ml-1 ${option.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {option.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-${option.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    option.popular 
                      ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground' 
                      : `bg-${option.color} hover:bg-${option.color}/90 text-${option.color}-foreground`
                  } transition-smooth shadow-soft hover:shadow-hover`}
                  size="lg"
                  onClick={scrollToRegistration}
                >
                  {option.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

      /*  {/* Additional Info */} */
      /*  <div className="mt-16 text-center max-w-4xl mx-auto"> */
        /*  <div className="bg-card rounded-3xl p-8 shadow-soft"> */
         /*   <h3 className="text-2xl font-bold text-primary mb-4">¿Qué incluye tu inversión?</h3> */
       /*     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"> */
              <div> */
         /*       <h4 className="font-semibold text-lg mb-2">📚 Recursos Incluidos</h4>
            /*    <ul className="text-muted-foreground space-y-1"> */
            /*      <li>• Workbook digital personalizado</li> */
            /*      <li>• Videos de técnicas para practicar</li> */
           /*       <li>• Audios de relajación y meditación</li> */
            /*      <li>• Herramientas de autocoaching</li> */
            /*    </ul> */
        /*      </div> */
          /*    <div> */
          /*      <h4 className="font-semibold text-lg mb-2">🎁 Beneficios Extra</h4> */
         /*       <ul className="text-muted-foreground space-y-1"> */ 
         /*         <li>• Primera sesión completamente gratis</li> */
         /*         <li>• Invitación a eventos especiales</li> */ 
         /*         <li>• Descuentos en talleres futuros</li> */
         /*         <li>• Comunidad online permanente</li> */
           /*     </ul> */
        /*      </div> */
        /*    </div> */
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
