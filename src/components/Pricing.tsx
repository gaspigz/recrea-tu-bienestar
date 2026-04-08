import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const pricingOptions = [
    {
      title: "Individual",
      price: "$60.000",
      period: "/mes ",
      originalPrice: null,
      discount: null,
      popular: false,
      features: [
        "Acceso a los dos encuentros quincenales",
        "Material de apoyo digital",
        "Grupo de WhatsApp exclusivo",
        "Comunidad de bienestar",
      /* "Primera clase GRATIS", */
    /* "Seguimiento personalizado" */
     "Consultar precio por un encuentro por mes "
      ],
      observation: "Ideal para quienes buscan una experiencia individual de crecimiento y bienestar",
      buttonText: "Inscribirme",
      color: "primary"
    },
    {
      title: "Promoción Dúo",
      price: "$50.000",
      period: "por mes/cada uno",
      originalPrice: "$60.000",
      discount: "20% OFF",
      popular: true,
      features: [
        "Acceso para dos personas a los dos encuentros quincenales",
        "Material de apoyo digital",
        "Grupo de WhatsApp exclusivo",
        "Comunidad de bienestar",
      /* "Primera clase GRATIS", */
     /* "Seguimiento personalizado", */
        "Actividades especiales para parejas",
        
         "Consultar precio por un encuentro por mes "
      ],
      observation: "Ideal para compartir el proceso con una pareja, amigo o familiar, potenciando la transformación a través del apoyo mutuo.",
      buttonText: "Inscribirnos",
      color: "secondary"
    },
    {
      title: "Pago Anual (Financiado)",
      price: "$30.000",
      period: "por 12 cuotas - Tarjeta de crédito Visa",
      originalPrice: null, /*"$60.000",*/
      discount: null, /* "25% OFF", */ 
      popular: false,
      features: [
        "Acceso a dos encuentros quincenales de mayo a diciembre 2026",
        "Material de apoyo digital",
        "Grupo de WhatsApp exclusivo",
        "Comunidad de bienestar",
       /* "Primera clase GRATIS",
        "Seguimiento personalizado", */
        "Pago anual financiado en 12 cuotas"

      ],
      observation: "Ideal para quienes están decididos a sostener un compromiso a largo plazo con su crecimiento, asegurando su lugar todo el año con la mayor comodidad de pago.",
      buttonText: "Inscribirme",
      color: "success"
    }
  ]; 

  return (
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cronograma 2026 - Elegí tu Forma de Participar
          </h2>
       
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mt-4">
            {[
              { m: "abril", d: "24" }, { m: "mayo", d: "15 y 29" }, { m: "junio", d: "05 y 19" },
              { m: "julio", d: "03 y 24" }, { m: "agosto", d: "07 y 21" }, { m: "septiembre", d: "04 y 18" },
              { m: "octubre", d: "02 y 16" }, { m: "noviembre", d: "06 y 20" }, { m: "diciembre", d: "04 y 18" }
            ].map((fecha, index) => (
              <span key={index} className="px-3 py-1 bg-slate-100/50 rounded-full text-sm font-medium text-slate-600 border border-slate-200">
                <strong className="text-slate-900">{fecha.d}</strong> de {fecha.m}
              </span>
            ))}
          </div>
          
          <p className="text-xl text-muted-foreground max-w-none mx-auto mt-6">
            Elige la opción que mejor se adapte a ti y comienza tu transformación hacia el bienestar
          </p>
        </div>









  {/* 👇 BOTÓN DE DESCARGA PDF 👇 */}
  <div className="mt-8 flex justify-center w-full">
  { /*<div className="mt-8"> */}
    <a 
      href="/2026HorariosRecreaTuBienestar.png" 
      download="2026HorariosRecreaTuBienestar.png"
    >
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Descargar xxx Programa Completo (PNG)
      </Button>
    </a>
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

                {/* OBSERVACIÓN INTEGRADA */}
                {option.observation && (
                  <p className={`text-sm italic leading-relaxed border-t pt-4 ${
                    option.popular ? 'border-white/20 text-white/90' : 'border-slate-200 text-muted-foreground'
                  }`}>
                    {option.observation}
                  </p>
                )}
                
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
      </div>   
    </section>
  );
};

export default Pricing;