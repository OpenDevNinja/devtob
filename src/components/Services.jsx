import { useState } from 'react';
import { Code, Smartphone, Globe, Server, Database, PenTool } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Développement Web",
      description: "Sites web sur mesure, applications web progressives et plateformes e-commerce performantes avec les technologies modernes.",
      icon: Globe,
      color: "primary"
    },
    {
      id: 2,
      title: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android avec React Native ou Flutter.",
      icon: Smartphone,
      color: "secondary"
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Interfaces utilisateur réactives, accessibles et optimisées avec React, Vue.js ou Angular.",
      icon: Code,
      color: "accent"
    },
    {
      id: 4,
      title: "Backend Development",
      description: "APIs robustes, systèmes d'authentification sécurisés et architectures scalables.",
      icon: Server,
      color: "primary"
    },
    {
      id: 5,
      title: "Bases de données",
      description: "Conception et optimisation de bases de données relationnelles et NoSQL pour vos applications.",
      icon: Database,
      color: "secondary"
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Maquettes, prototypes et interfaces utilisateur intuitives et esthétiques pour vos projets.",
      icon: PenTool,
      color: "accent"
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
      primary: "bg-primary/20",
      secondary: "bg-secondary/20",
      accent: "bg-accent/20"
    };
    return bgClasses[colorName] || "bg-primary/20";
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark to-dark/95">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">
            Ce que je propose
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-light">
            Mes <span className="text-primary">Services</span>
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Je propose une gamme complète de services pour répondre à vos besoins en développement web et mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-xl bg-dark-800 border border-light/10 transition-all duration-500 hover:shadow-2xl p-6 ${
                hoveredService === service.id ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 ${getIconBgClass(service.color)}`}>
                <service.icon 
                  className={`h-8 w-8 ${getIconColorClass(service.color)}`} 
                />
              </div>
              <h3 className="text-xl font-bold text-light mb-3">{service.title}</h3>
              <p className="text-light/70 text-sm transform transition-all duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-lg bg-primary text-light font-medium hover:bg-primary/90 transition-all duration-300 shadow-custom hover:shadow-hover transform hover:-translate-y-1"
          >
            <span className="mr-2">Discutons de votre projet</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;