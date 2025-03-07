import { useEffect, useRef } from 'react';
import { CheckCircleIcon, ZapIcon, BrainIcon, ShieldCheckIcon, RocketIcon, BarChartIcon, MedalIcon, LampIcon } from 'lucide-react';

const ServiceSection = () => {
  // Référence pour l'animation des compétences
  const servicesRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

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
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      
      
      if (servicesRef.current) {
        const serviceItems = servicesRef.current.querySelectorAll('.service-item');
        serviceItems.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);

  const services = [
    {
      icon: RocketIcon,
      title: "Sites Haute Performance",
      description: "Boostez votre conversion avec des sites jusqu'à 3x plus rapides que la moyenne. Mes optimisations avancées garantissent une expérience fluide sur tous les appareils.",
      benefits: [
        "Temps de chargement <1 seconde",
        "Amélioration du taux de conversion de 15-30%",
        "SEO optimisé pour dominer les résultats de recherche"
      ]
    },
    {
      icon: BrainIcon,
      title: "Interfaces Intelligentes",
      description: "Captivez vos utilisateurs avec des interfaces dynamiques qui s'adaptent à leurs comportements. Chaque interaction est pensée pour maximiser l'engagement.",
      benefits: [
        "Expérience utilisateur fluide et intuitive",
        "Réduction du taux de rebond de 25%",
        "Design adapté à votre identité de marque"
      ]
    },
    {
      icon: ZapIcon,
      title: "Applications React & Next.js",
      description: "Transformez votre vision en réalité avec des applications web modernes et réactives qui surpassent vos concurrents en termes de fonctionnalités et d'expérience.",
      benefits: [
        "Applications légères et performantes",
        "Fonctionnalités interactives avancées",
        "Maintenance simplifiée et évolutive"
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "Backend Sécurisé & Évolutif",
      description: "Construisez sur des fondations solides avec une architecture backend qui vous protège et évolue avec votre succès, sans ralentissement ni compromis.",
      benefits: [
        "Protection contre les vulnérabilités courantes",
        "Scalabilité pour gérer des millions d'utilisateurs",
        "APIs optimisées pour des temps de réponse minimaux"
      ]
    },
    {
      icon: BarChartIcon,
      title: "Solutions e-Commerce",
      description: "Transformez votre boutique en machine à vendre avec des fonctionnalités e-commerce optimisées pour augmenter le panier moyen et faciliter les achats.",
      benefits: [
        "Augmentation du taux de conversion de 35%",
        "Intégration simplifiée des paiements",
        "Tableaux de bord analytics personnalisés"
      ]
    },
    {
      icon: MedalIcon,
      title: "Expertise Technique Éprouvée",
      description: "Bénéficiez de 8+ années d'expérience en développement web et mobile avec plus de 50 projets livrés avec succès pour des clients dans 12 pays.",
      benefits: [
        "Maîtrise de l'écosystème moderne (React, Node.js, AWS)",
        "Solutions personnalisées à vos besoins spécifiques",
        "Méthode de travail transparente et collaborative"
      ]
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
            <span className="bg-gradient-tech text-transparent bg-clip-text">Ce que je propose</span>
          </h2>
          <p className="text-light/80 text-lg md:text-xl mb-8">
          Je propose une gamme complète de services pour répondre à vos besoins en <span className="text-primary">développement web et mobile.</span> .
          </p>
          
        
        </div>
        
        {/* Grille de services */}
        <div ref={servicesRef} className="max-w-8xl mx-auto w-full mt-24">
     
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-item opacity-0 translate-y-10 transition-all duration-700 delay-100 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 p-6 hover:border-primary/30 hover:shadow-custom group h-full flex flex-col"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4 group-hover:bg-primary/20 transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-light group-hover:text-primary transition-colors duration-300">{service.title}</h4>
                </div>
                <p className="text-light/70 ml-16 mb-6">{service.description}</p>
                
                <div className="mt-auto ml-16">
                  <p className="text-sm text-primary/80 mb-3 font-medium">Avantages clés:</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex text-light/70 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
            {/* CTA amélioré avec style distinctif */}
            <div 
            ref={ctaRef} 
            className="text-center mt-24 opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <div className="inline-flex flex-col items-center p-8 border border-light/10 rounded-2xl bg-gradient-to-b from-primary/10 to-dark/80 backdrop-blur-sm max-w-3xl mx-auto">
              <h4 className="text-2xl md:text-3xl font-display font-bold mb-4 bg-gradient-tech text-transparent bg-clip-text">
                Prêt à concrétiser votre vision digitale?
              </h4>
              <p className="text-light/70 mb-8 max-w-2xl">
                Discutons de votre projet et découvrez comment mes services peuvent vous aider à atteindre vos objectifs d'affaires.
              </p>
              <a 
                href="#contact" 
                className="group px-10 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-custom hover:shadow-hover transform hover:-translate-y-1 flex items-center"
              >
                <span>Démarrer votre projet</span>
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;