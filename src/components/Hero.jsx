import { useState, useEffect } from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Hero = () => {
  // Animation de texte avec effet de frappe
  const [text, setText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = [
    "Développeur Web Full Stack",
    "Expert React & Node.js",
    "Intégrateur Mobile React Native",
    "Consultant UI/UX Design",
    "Architecte Solutions Cloud"
  ];
  
  // Animation du texte de titre
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1500;
    let timer;
    
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && text === currentPhrase) {
      // Pause après avoir complété le texte
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      // Passer à la phrase suivante après suppression
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      // Animation de frappe/suppression
      timer = setTimeout(() => {
        setText(prev => 
          isDeleting 
            ? prev.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [text, currentPhraseIndex, isDeleting, phrases]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background avec animation améliorée */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 opacity-30 bg-gradient-tech animate-gradient-shift"></div>
        <div className="absolute w-full h-full opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                top: `${Math.random() * 120 - 10}%`,
                left: `${Math.random() * 120 - 10}%`,
                opacity: Math.random() * 0.6,
                transform: `scale(${Math.random() * 0.8 + 0.3})`,
                filter: 'blur(60px)',
                animation: `pulse ${Math.random() * 8 + 10}s infinite alternate ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10 flex-1 flex flex-col">
        {/* Section principale */}
        <div className="max-w-5xl mx-auto text-center pt-16 md:pt-24 lg:pt-28 pb-8 flex-1 flex flex-col justify-center">
         {/*  <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-mono border border-primary/30 backdrop-blur-sm">
            <span className="animate-pulse">●</span> Disponible pour nouveaux projets
          </div> */}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="text-light">Hello, je suis </span>
            <span className="bg-gradient-tech text-transparent bg-clip-text relative">
              TOYI Bonaventure
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-tech opacity-30 rounded-full"></span>
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-mono mb-10 h-10 md:h-12">
            <span className="text-secondary">&lt;</span>
            <span className="text-light">{text}</span>
            <span className="text-secondary inline-block animate-pulse">_</span>
            <span className="text-secondary">/&gt;</span>
          </h2>
          
          <p className="text-light/80 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Je transforme vos <span className="text-primary font-semibold">idées innovantes</span> en 
            <span className="bg-gradient-tech text-transparent bg-clip-text font-semibold"> solutions digitales</span> performantes, 
            élégantes et évolutives pour propulser votre activité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <a 
              href="#contact" 
              className="group px-8 py-4 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-custom hover:shadow-hover transform hover:-translate-y-1 flex items-center justify-center"
            >
              Me contacter
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-lg bg-transparent border border-light/20 text-light font-medium hover:bg-light/5 transition-all duration-300 hover:border-primary/50 backdrop-blur-sm"
            >
              Voir mes projets
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: GithubIcon, url: "#", label: "GitHub" },
              { icon: LinkedinIcon, url: "#", label: "LinkedIn" },
              { icon: TwitterIcon, url: "#", label: "Twitter" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                aria-label={social.label} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-full border border-light/20 hover:border-primary hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-custom"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-light/60 hover:text-primary transition-colors duration-300 group"
      >
        <span className="text-sm mb-1 group-hover:opacity-100 opacity-70">Découvrir mes services</span>
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;