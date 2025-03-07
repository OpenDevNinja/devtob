import { useState, useEffect } from 'react';
import { CodeIcon, UsersIcon, ZapIcon, AwardIcon, DownloadIcon, ChevronRightIcon } from 'lucide-react';
import bona from "../assets/cap.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);
  
  const stats = [
    { id: 1, value: '7+', label: 'Années d\'expérience', icon: CodeIcon, delay: 100 },
    { id: 2, value: '50+', label: 'Projets réalisés', icon: ZapIcon, delay: 200 },
    { id: 3, value: '30+', label: 'Clients satisfaits', icon: UsersIcon, delay: 300 },
    { id: 4, value: '12+', label: 'Certifications', icon: AwardIcon, delay: 400 },
  ];

  const expertise = [
    "Architecture de solutions robustes",
    "Expérience utilisateur intuitive",
    "Performance & optimisation",
    "Sécurité & conformité RGPD"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-dark/95 to-dark/90 relative overflow-hidden">
      {/* Particules de fond animées */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4,
              filter: 'blur(40px)',
              animation: `float ${Math.random() * 8 + 12}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className={`max-w-lg mx-auto text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono border border-primary/30">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Découvrez mon parcours
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Passionné par l'<span className="bg-gradient-tech text-transparent bg-clip-text">Excellence Digitale</span>
          </h2>
          <p className="text-light/70 text-lg">
            Je transforme des idées complexes en solutions technologiques élégantes et performantes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image sans effet de hover */}
          <div className={`relative order-2 lg:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-12'}`}
               style={{ transition: 'all 0.8s ease-out' }}>
            <div className="absolute -top-8 -left-8 w-72 h-72 rounded-full bg-primary opacity-10 filter blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md border-2 border-primary/30 rounded-2xl transform rotate-6 scale-90"></div>
            <div className="relative overflow-hidden rounded-2xl border-4 border-primary/20 shadow-lg shadow-primary/5 transform perspective-1000 rotate-3">
              <img 
                src={bona} 
                alt="Bonaventure TOYI, Développeur Web & Mobile" 
                className="w-full h-auto filter saturate-50"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 rounded-full bg-secondary opacity-10 filter blur-3xl animate-pulse"></div>
          </div>
          
          {/* Contenu textuel */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-12'}`}
               style={{ transition: 'all 0.8s ease-out', transitionDelay: '0.2s' }}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Expert en <span className="text-primary">Développement</span> Web & Mobile
              </h3>
              
              <p className="text-light/80 leading-relaxed text-lg">
                Depuis plus de <span className="font-semibold text-primary">7 ans</span>, je conçois et développe des solutions digitales qui transforment les idées en expériences exceptionnelles. Mon expertise technique combinée à une vision stratégique me permet de créer des applications qui non seulement fonctionnent parfaitement, mais qui dépassent vos attentes.
              </p>
              
              <div className="space-y-2 pl-4 border-l-2 border-primary/30">
                {expertise.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 text-light/90 font-medium"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <ChevronRightIcon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                {stats.map((stat) => (
                  <div 
                    key={stat.id} 
                    className="flex items-center space-x-3 group"
                    style={{ 
                      opacity: isVisible ? 1 : 0, 
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.5s ease-out ${stat.delay}ms` 
                    }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-light group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                      <div className="text-light/60 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a 
                  href="#" 
                  download 
                  className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 group"
                >
                  <DownloadIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Télécharger mon CV
                </a>
                <a 
                  href="#skills" 
                  className="px-6 py-3 rounded-lg bg-transparent border border-light/20 text-light font-medium hover:bg-light/5 hover:border-primary/40 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  Découvrir mes compétences
                  <ChevronRightIcon className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;