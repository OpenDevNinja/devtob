// src/components/Footer.jsx
import { ChevronUpIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark py-10 border-t border-light/10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-mono text-primary text-xl font-bold">&lt;DevTob<span className="text-accent">/</span>&gt;</span>
            <p className="text-light/60 mt-2 text-sm">
              Créateur d'expériences web et mobiles
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-light/60 text-sm">
              © {new Date().getFullYear()} Bonaventure TOYI. Tous droits réservés.
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-light transition-colors duration-300"
              aria-label="Retour en haut"
            >
              <ChevronUpIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;