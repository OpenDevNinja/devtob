import { useEffect, useRef } from 'react';
import { CheckCircleIcon, ZapIcon, BrainIcon, ShieldCheckIcon, RocketIcon, BarChartIcon, MedalIcon, LampIcon } from 'lucide-react';

const WhyMe = () => {
  // Référence pour l'animation des compétences
  const servicesRef = useRef(null);
  const headingRef = useRef(null);

  // Animation d'apparition des services au défilement
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll('.service-item');
      serviceItems.forEach((item) => {
        observer.observe(item);
      });
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      
      if (servicesRef.current) {
        const serviceItems = servicesRef.current.querySelectorAll('.service-item');
        serviceItems.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);

  

  const keyAdvantages = [
    {
      icon: LampIcon,
      title: "Approche Creative & Stratégique",
      description: "Je ne suis pas qu'un simple développeur, mais un partenaire stratégique qui vous aide à transformer vos idées en solutions digitales rentables."
    },
    {
      icon: ZapIcon,
      title: "Livraison 30% Plus Rapide",
      description: "Grâce à mon workflow optimisé et mon expertise technique, je livre des projets de qualité supérieure en moyenne 30% plus rapidement que les agences."
    },
    {
      icon: CheckCircleIcon,
      title: "Garantie de Satisfaction",
      description: "Je m'engage à travailler sur votre projet jusqu'à votre entière satisfaction, avec des révisions illimitées durant la phase de développement."
    }
  ];

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden bg-dark">
      {/* Background subtil */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 opacity-10 bg-gradient-tech"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* En-tête de section */}
        <div 
          ref={headingRef} 
          className="max-w-5xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-tech text-transparent bg-clip-text">Pourquoi me choisir</span>
          </h2>
          <p className="text-light/80 text-lg md:text-xl mb-8">
            Je ne me contente pas de coder, je crée des <span className="text-primary">solutions digitales sur mesure</span> qui dépassent les attentes et génèrent un véritable impact pour votre activité.
          </p>
          
          {/* Avantages clés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {keyAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                className="p-5 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 text-primary rounded-full mb-4 group-hover:bg-primary/20 transition-all duration-300">
                    <advantage.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-light mb-2 group-hover:text-primary transition-colors duration-300">{advantage.title}</h4>
                  <p className="text-light/70 text-sm">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      
      </div>
    </section>
  );
};

export default WhyMe;