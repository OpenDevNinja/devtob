import { useEffect, useRef } from 'react';
import { CheckCircleIcon, ZapIcon, BrainIcon, ShieldCheckIcon, RocketIcon, BarChartIcon, MedalIcon, LampIcon, SparklesIcon } from 'lucide-react';

const Services = () => {
  // Références pour les animations
  const servicesRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation d'apparition des éléments au défilement
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
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      
      if (servicesRef.current) {
        const serviceItems = servicesRef.current.querySelectorAll('.service-item');
        serviceItems.forEach((item) => observer.unobserve(item));
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
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-dark">
      {/* Background amélioré avec animations subtiles */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 opacity-10 bg-gradient-tech animate-gradient-shift"></div>
        {/* Cercles lumineux subtils */}
        <div className="absolute w-full h-full opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: 'radial-gradient(circle, rgba(0,123,255,0.15) 0%, rgba(0,123,255,0) 70%)',
                transform: 'translate(-50%, -50%)',
                animation: `pulse ${Math.random() * 8 + 15}s infinite alternate ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        {/* Lignes décoratives */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute h-px w-full bg-primary/30 top-1/4"></div>
          <div className="absolute h-px w-full bg-primary/30 top-2/4"></div>
          <div className="absolute h-px w-full bg-primary/30 top-3/4"></div>
          <div className="absolute w-px h-full bg-primary/30 left-1/4"></div>
          <div className="absolute w-px h-full bg-primary/30 left-2/4"></div>
          <div className="absolute w-px h-full bg-primary/30 left-3/4"></div>
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* En-tête de section avec style amélioré */}
        <div 
          ref={headingRef} 
          className="max-w-3xl mx-auto text-center mb-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          {/* Badge décoratif */}
          <div className="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm">
            <SparklesIcon className="h-4 w-4 mr-2" />
            <span>Services Exclusifs</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
            <span className="bg-gradient-tech text-transparent bg-clip-text">Pourquoi me choisir</span>
          </h2>
          <p className="text-light/80 text-lg md:text-xl mb-12 leading-relaxed">
            Je ne me contente pas de coder, je crée des <span className="text-primary font-medium">solutions digitales sur mesure</span> qui dépassent les attentes et génèrent un véritable <span className="bg-gradient-tech text-transparent bg-clip-text font-medium">impact pour votre activité</span>.
          </p>
          
          {/* Avantages clés avec design amélioré */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {keyAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl border border-light/10 backdrop-blur-sm bg-dark/50 hover:border-primary/30 transition-all duration-500 group hover:shadow-custom hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 text-primary rounded-full mb-5 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110 shadow-lg shadow-primary/10">
                    <advantage.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-light mb-3 group-hover:text-primary transition-colors duration-300">{advantage.title}</h4>
                  <p className="text-light/70">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ligne séparatrice décorative */}
        <div className="relative max-w-5xl mx-auto my-20 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark border border-primary/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
        </div>
        
        {/* Grille de services avec design amélioré */}
        <div ref={servicesRef} className="max-w-6xl mx-auto w-full">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-16 relative">
            <span className="relative inline-block">
              Services d'excellence
              <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 transform -translate-x-1/2 rounded-full"></span>
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-item opacity-0 translate-y-10 transition-all duration-700 delay-100 rounded-2xl border border-light/10 backdrop-blur-sm bg-gradient-to-b from-dark/90 to-dark/60 p-8 hover:border-primary/30 hover:shadow-custom group h-full flex flex-col transform hover:-translate-y-2 hover:shadow-2xl"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl mr-4 group-hover:bg-primary/20 transition-all duration-300 shadow-lg shadow-primary/5">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold text-light group-hover:text-primary transition-colors duration-300">{service.title}</h4>
                </div>
                <p className="text-light/80 mb-8 leading-relaxed">{service.description}</p>
                
                <div className="mt-auto pt-6 border-t border-light/5">
                  <p className="text-sm text-primary mb-4 font-medium tracking-wide uppercase">Avantages clés</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-light/80 text-sm">
                        <CheckCircleIcon className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Effet de survol stylisé */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
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

export default Services;