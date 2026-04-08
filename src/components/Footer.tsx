const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Recreá tu Bienestar</h3>
            <p className="text-background/80 max-w-2xl mx-auto">
              Transformando vidas a través de la creatividad, la risa y el liderazgo consciente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/*<div>
              <h4 className="font-bold text-lg mb-3">Fundamentos Científicos</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li>Rafael Echeverría - Coaching Ontológico</li>
                <li>Jacobo Moreno - Psicodrama y Risoterapia</li>
                <li>Humberto Maturana - Biología del Amor</li>
                <li>Psicología Positiva</li>
              </ul>
            </div>*/}

           {/*} <div>
              <h4 className="font-bold text-lg mb-3">Certificaciones</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li>Avalado por AACOP</li>
                <li>Estándares Internacionales</li>
                <li>Técnicas Validadas</li>
                <li>Metodología Científica</li>
              </ul>
            </div>*/}

            <div>
              <h4 className="font-bold text-lg text-center mb-3">Contacto</h4>
              <ul className="space-y-2 text-background/80 text-sm">
                <li>📧 espaciorecreartexxi@gmail.com</li>
                <li>📱 WhatsApp: +54 9 3413 128282</li>
                <li>📍 Rosario, Santa Fe, Argentina</li>
                <li>🕒 Viernes 18:30-20:30 hs. </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm">
              &copy; {new Date().getFullYear()} Recreá tu Bienestar. Todos los derechos reservados.
            </p>
            <p className="text-background/60 text-xs mt-2">
              Taller de bienestar integral basado en metodologías de crecimiento personal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
