import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const pricing = () => {
  // Función para scrolear a secciones específicas
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fecha actual para la comparación
  const today = new Date();
  const currentYear = 2026;

  // Diccionario para convertir meses a índices (0-11)
  const monthMap: { [key: string]: number } = {
    "abril": 3, "mayo": 4, "junio": 5, "julio": 6, "agosto": 7, 
    "septiembre": 8, "octubre": 9, "noviembre": 10, "diciembre": 11
  };

  const fechasCronograma = [
    { m: "abril", d: "24" }, { m: "mayo", d: "15 y 29" }, { m: "junio", d: "05 y 19" },
    { m: "julio", d: "03 y 24" }, { m: "agosto", d: "07 y 21" }, { m: "septiembre", d: "04 y 18" },
    { m: "octubre", d: "02 y 16" }, { m: "noviembre", d: "06 y 20" }, { m: "diciembre", d: "04 y 18" }
  ];

  const estaVencida = (mes: string, diaStr: string) => {
    const mesIndex = monthMap[mes.toLowerCase()];
    const dias = diaStr.match(/\d+/g);
    const ultimoDia = dias ? parseInt(dias[dias.length - 1]) : 0;
    const fechaEvento = new Date(currentYear, mesIndex, ultimoDia);
    return today > fechaEvento;
  };

  const pricingOptions = [
    {
      title: "Individual",
      price: "$50.000",
      period: "/mes",
      originalPrice: "$75.000",
      discount: "33.33% OFF",
      popular: false,
      features: [
        "Acceso para UNA persona a los DOS ENCUENTROS quincenales",
        "Material de apoyo digital",
        "Grupo de WhatsApp exclusivo",
        "Comunidad de bienestar",
        "Consultar precio por persona a un SOLO encuentro por mes"
      ],
      observation: "Ideal para quienes buscan una experiencia individual de crecimiento y bienestar",
      buttonText: "Inscribirme",
      color: "primary"
    },
    {
      title: "Promoción Dúo",
      price: "$40.000",
      period: "cada uno por mes",
      originalPrice: "$60.000",
      discount: "33.33% OFF",
      popular: true,
      features: [
        "Acceso para DOS personas a los DOS ENCUENTROS quincenales",
        "Material de apoyo digital",
        "Grupo de WhatsApp exclusivo",
        "Comunidad de bienestar",
        "Actividades especiales para parejas",
        "Consultar precio por PAREJAS a un SOLO encuentro por mes"
      ],
      observation: "Ideal para compartir el proceso con una pareja, amigo o familiar, potenciando la transformación a través del apoyo mutuo.",
      buttonText: "Inscribirnos",
      color: "secondary"
    },
    {
      title: "Pago Anual (Financiado)",
      price: "cuotas de $40.000",
      period: "por 12 meses - Tarjeta Visa",
      originalPrice: null,
      discount: null,
      popular: false,
      features: [
        "Acceso a todos los encuentros desde mayo a diciembre 2026",
        "Material de apoyo digital",
        "Grupo de WhatsApp exclusivo",
        "Comunidad de bienestar",
        "Pago anual para una persona, financiado en 12 cuotas"
      ],
      observation: "Ideal para quienes están decididos a sostener un compromiso a largo plazo con su crecimiento, asegurando su lugar todo el año.",
      buttonText: "Inscribirme",
      color: "success"
    }
  ];

  return (
    <section id="pricing" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cronograma 2026 - Elegí tu Forma de Participar
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mt-4">
            {fechasCronograma.map((fecha, index) => {
              const vencida = estaVencida(fecha.m, fecha.d);
              return (
                <span 
                  key={index} 
                  className={`relative px-3 py-1 rounded-full text-sm font-medium border transition-all flex items-center gap-1 ${
                    vencida 
                    ? "bg-green-100 text-green-700 border-green-200 opacity-80" 
                    : "bg-slate-100/50 text-slate-600 border-slate-200"
                  }`}
                >
                  {vencida && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                  <span className={vencida ? "line-through decoration-2" : ""}>
                    <strong className={vencida ? "text-green-800" : "text-slate-900"}>{fecha.d}</strong> de {fecha.m}
                  </span>
                </span>
              );
            })}
          </div>
          
          <p className="text-xl text-muted-foreground max-w-none mx-auto mt-6">
            Elige la opción que mejor se adapte a ti y comienza tu transformación hacia el bienestar
          </p>
        </div>

        <div className="mb-16 flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          <a href="/2026HorariosRecreaTuBienestar.png" download="Calendario_2026.png" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Calendario 2026 (PNG)
            </Button>
          </a>

          <a href="/2026InversiónRecreaTuBienestar.png" download="2026InversiónRecreaTuBienestar.png" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Precios y promociones (PNG)
            </Button>
          </a>

          <a href="https://wa.me/5493413128282" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full border-success text-success hover:bg-success hover:text-white transition-all">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Consultar por WhatsApp
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
                  <div className="bg-success text-success-foreground rounded-full w-16 h-16 flex items-center justify-center text-xs font-bold shadow-soft text-center leading-tight">
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
                      <span className="text-muted-foreground text-sm">{feature}</span>
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
                  onClick={() => scrollToId('registration')}
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