// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Développeur Web & Mobile";
  
  useEffect(() => {
    let timer;
    let index = 0;
    
    if (isTyping) {
      timer = setInterval(() => {
        setText(fullText.substring(0, index + 1));
        index++;
        
        if (index === fullText.length) {
          clearInterval(timer);
          setTimeout(() => setIsTyping(false), 1000);
        }
      }, 100);
    } else {
      index = fullText.length;
      timer = setInterval(() => {
        setText(fullText.substring(0, index - 1));
        index--;
        
        if (index === 0) {
          clearInterval(timer);
          setTimeout(() => setIsTyping(true), 500);
        }
      }, 50);
    }
    
    return () => clearInterval(timer);
  }, [isTyping]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 opacity-20 bg-gradient-tech animate-gradient-shift"></div>
        <div className="absolute w-full h-full opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                transform: `scale(${Math.random() * 0.8 + 0.2})`,
                filter: 'blur(40px)',
                animation: `pulse ${Math.random() * 5 + 10}s infinite alternate`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mt-20 mx-auto text-center">
         {/*  <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">
            Expert en Développement
          </p> */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-light">Hello, je suis </span>
            <span className="bg-gradient-tech text-transparent bg-clip-text">TOYI Bonaventure </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-mono mb-8 h-8">
            <span className="text-secondary">&lt;</span>
            <span className="text-light">{text}</span>
            <span className="text-secondary inline-block animate-pulse">_</span>
            <span className="text-secondary">/&gt;</span>
          </h2>
          <p className="text-light/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Je transforme vos idées en solutions web et mobiles performantes et élégantes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-custom hover:shadow-hover transform hover:-translate-y-1">
              Me contacter
            </a>
            <a href="#projects" className="px-8 py-3 rounded-lg bg-transparent border border-light/20 text-light font-medium hover:bg-light/5 transition-all duration-300">
              Voir mes projets
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-20">
            {[
              { icon: GithubIcon, url: "#", label: "GitHub" },
              { icon: LinkedinIcon, url: "#", label: "LinkedIn" },
              { icon: TwitterIcon, url: "#", label: "Twitter" }
            ].map((social, index) => (
              <a key={index} href={social.url} aria-label={social.label} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-light/20 hover:border-primary hover:text-primary transition-colors duration-300">
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-light/60 hover:text-primary transition-colors duration-300"
      >
        <span className="text-sm mb-1">Découvrir</span>
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;