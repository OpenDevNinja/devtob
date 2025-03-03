// src/components/About.jsx
import { CodeIcon, UsersIcon, ZapIcon, AwardIcon } from 'lucide-react';
import bona from "../assets/cap.png"
const About = () => {
  const stats = [
    { id: 1, value: '7+', label: 'Années d\'expérience', icon: CodeIcon },
    { id: 2, value: '50+', label: 'Projets réalisés', icon: ZapIcon },
    { id: 3, value: '30+', label: 'Clients satisfaits', icon: UsersIcon },
    { id: 4, value: '12+', label: 'Certifications', icon: AwardIcon },
  ];

  return (
    <section id="about" className="py-20 bg-dark/95">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image avec animation et bordure */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-primary opacity-10 filter blur-3xl animate-pulse"></div>
            <div className="relative overflow-hidden rounded-2xl border-4 border-primary/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={bona} 
                alt="Bonaventure TOYI, Développeur Web & Mobile" 
                className="w-full h-auto filter saturate-0 hover:saturate-100 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-secondary opacity-10 filter blur-3xl animate-pulse"></div>
          </div>
          
          {/* Contenu textuel */}
          <div className="order-1 lg:order-2">
            <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">
              Découvrez qui je suis
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Expert en <span className="text-primary">Développement</span> Web & Mobile
            </h2>
            
            <p className="text-light/80 mb-4 leading-relaxed">
              Passionné par le développement web et mobile depuis plus de 7 ans, je me spécialise dans la création d'applications modernes, performantes et intuitives qui répondent aux besoins des utilisateurs.
            </p>
            <p className="text-light/80 mb-6 leading-relaxed">
              Mon approche combine expertise technique, design centré sur l'utilisateur et une attention méticuleuse aux détails pour livrer des solutions sur mesure qui dépassent les attentes.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.id} className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-light">{stat.value}</div>
                    <div className="text-light/60 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                download 
                className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
              >
                Télécharger mon CV
              </a>
              <a 
                href="#skills" 
                className="px-6 py-3 rounded-lg bg-transparent border border-light/20 text-light font-medium hover:bg-light/5 transition-all duration-300 flex items-center justify-center"
              >
                Voir mes compétences
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;