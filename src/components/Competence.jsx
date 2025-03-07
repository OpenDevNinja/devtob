import { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Globe, Server, Database, PenTool, CheckCircle } from 'lucide-react';

const Competence = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [elementsVisible, setElementsVisible] = useState({
    heading: false,
    competences: new Array(6).fill(false),
    cta: false
  });
  
  // Références pour les animations
  const competencesRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation d'apparition des compétences au défilement
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Au lieu de modifier directement les classes, on met à jour l'état
            if (entry.target === headingRef.current) {
              setElementsVisible(prev => ({...prev, heading: true}));
            } else if (entry.target === ctaRef.current) {
              setElementsVisible(prev => ({...prev, cta: true}));
            } else {
              // Pour les compétences, on cherche l'index
              const competenceItems = competencesRef.current.querySelectorAll('.competence-item');
              competenceItems.forEach((item, idx) => {
                if (item === entry.target) {
                  setElementsVisible(prev => {
                    const newCompetences = [...prev.competences];
                    newCompetences[idx] = true;
                    return {...prev, competences: newCompetences};
                  });
                }
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    if (competencesRef.current) {
      const competenceItems = competencesRef.current.querySelectorAll('.competence-item');
      competenceItems.forEach((item) => {
        observer.observe(item);
      });
    }

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const competences = [
    {
      id: 1,
      title: "Développement Web",
      description: "Sites web sur mesure, applications web progressives et plateformes e-commerce performantes avec les technologies modernes.",
      icon: Globe,
      color: "primary",
      benefits: [
        "Sites web dynamiques et réactifs",
        "Applications web progressives (PWA)",
        "Solutions e-commerce optimisées"
      ]
    },
    {
      id: 2,
      title: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android avec React Native ou Flutter.",
      icon: Smartphone,
      color: "secondary",
      benefits: [
        "Applications iOS et Android",
        "Performance native optimisée",
        "Interfaces utilisateur fluides"
      ]
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Interfaces utilisateur réactives, accessibles et optimisées avec React, Vue.js ou Angular.",
      icon: Code,
      color: "accent",
      benefits: [
        "Composants React optimisés",
        "Développement Next.js",
        "Animations et transitions fluides"
      ]
    },
    {
      id: 4,
      title: "Backend Development",
      description: "APIs robustes, systèmes d'authentification sécurisés et architectures scalables.",
      icon: Server,
      color: "primary",
      benefits: [
        "API RESTful & GraphQL",
        "Authentification sécurisée",
        "Architecture microservices"
      ]
    },
    {
      id: 5,
      title: "Bases de données",
      description: "Conception et optimisation de bases de données relationnelles et NoSQL pour vos applications.",
      icon: Database,
      color: "secondary",
      benefits: [
        "SQL (PostgreSQL, MySQL)",
        "NoSQL (MongoDB, Firebase)",
        "Optimisation des requêtes"
      ]
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Maquettes, prototypes et interfaces utilisateur intuitives et esthétiques pour vos projets.",
      icon: PenTool,
      color: "accent",
      benefits: [
        "Prototypage avec Figma",
        "Design responsive adaptatif",
        "Tests d'utilisabilité"
      ]
    }
  ];

  // Fonction pour générer les classes d'icône en fonction de la couleur
  const getIconColorClass = (colorName) => {
    const colorClasses = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent"
    };
    return colorClasses[colorName] || "text-primary";
  };

  // Fonction pour générer les classes de fond d'icône en fonction de la couleur
  const getIconBgClass = (colorName) => {
    const bgClasses = {
      primary: "bg-primary/10",
      secondary: "bg-secondary/10",
      accent: "bg-accent/10"
    };
    return bgClasses[colorName] || "bg-primary/10";
  };

  // Fonction pour générer les classes de bordure en fonction de la couleur
  const getBorderHoverClass = (colorName) => {
    const borderClasses = {
      primary: "hover:border-primary/30",
      secondary: "hover:border-secondary/30",
      accent: "hover:border-accent/30"
    };
    return borderClasses[colorName] || "hover:border-primary/30";
  };

  return (
    <section id="competences" className="relative py-20 md:py-28 overflow-hidden bg-dark">
      {/* Background subtil */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 opacity-10 bg-gradient-tech"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* En-tête de section */}
        <div 
          ref={headingRef} 
          className={`max-w-5xl mx-auto text-center mb-16 transition-all duration-700 ${
            elementsVisible.heading 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">
            Ce que je sais faire
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Mes <span className="bg-gradient-tech text-transparent bg-clip-text">Compétences</span>
          </h2>
          <p className="text-light/80 text-lg md:text-xl mb-8">
            Mes expériences professionnelles me permettent d'être aujourd'hui <span className="text-primary">Autonome</span>, <span className="text-secondary">Polyvalent</span> et de disposer des compétences techniques suivantes :
          </p>
        </div>
        
        {/* Grille de compétences */}
        <div ref={competencesRef} className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {competences.map((competence, index) => (
              <div 
                key={competence.id} 
                className={`competence-item rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 p-6 ${getBorderHoverClass(competence.color)} hover:shadow-custom group h-full flex flex-col transition-all duration-500 ${
                  hoveredService === competence.id ? 'transform scale-105' : ''
                } ${
                  elementsVisible.competences[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredService(competence.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 ${getIconBgClass(competence.color)} ${getIconColorClass(competence.color)} rounded-lg mr-4 group-hover:bg-opacity-30 transition-all duration-300`}>
                    <competence.icon className="h-6 w-6" />
                  </div>
                  <h4 className={`text-xl font-semibold text-light group-hover:${getIconColorClass(competence.color)} transition-colors duration-300`}>
                    {competence.title}
                  </h4>
                </div>
                <p className="text-light/70 ml-16 mb-6">{competence.description}</p>
                
                <div className="mt-auto ml-16">
                  <p className={`text-sm ${getIconColorClass(competence.color)}/80 mb-3 font-medium`}>
                    Spécialités:
                  </p>
                  <ul className="space-y-2">
                    {competence.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex text-light/70 text-sm">
                        <CheckCircle className={`h-4 w-4 ${getIconColorClass(competence.color)} mr-2 flex-shrink-0 mt-0.5`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div 
            ref={ctaRef} 
            className={`text-center mt-24 transition-all duration-700 ${
              elementsVisible.cta 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex flex-col items-center p-8 border border-light/10 rounded-2xl bg-gradient-to-b from-primary/10 to-dark/80 backdrop-blur-sm max-w-3xl mx-auto">
              <h4 className="text-2xl md:text-3xl font-display font-bold mb-4 bg-gradient-tech text-transparent bg-clip-text">
                Prêt à collaborer ensemble ?
              </h4>
              <p className="text-light/70 mb-8 max-w-2xl">
                Avec mes compétences techniques variées, je peux vous accompagner dans tous les aspects de vos projets digitaux.
              </p>
              <a 
                href="#contact" 
                className="group px-10 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-custom hover:shadow-hover transform hover:-translate-y-1 flex items-center"
              >
                <span>Discutons de votre projet</span>
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competence;