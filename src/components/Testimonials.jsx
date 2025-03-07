import { useState, useEffect, useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "CEO, TechStart",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Jean a été un partenaire exceptionnel dans le développement de notre application mobile. Sa maîtrise technique et sa créativité ont permis de transformer notre concept en une solution robuste et intuitive qui dépasse nos attentes."
    },
    {
      id: 2,
      name: "Lucas Martin",
      role: "Directeur Marketing, E-Commerce Plus",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Le site e-commerce développé par Jean a considérablement amélioré nos performances. Notre taux de conversion a augmenté de 35% et l'interface est vraiment intuitive. Je recommande fortement ses services à toute entreprise cherchant à améliorer sa présence en ligne."
    },
    {
      id: 3,
      name: "Sophie Legrand",
      role: "Fondatrice, CreativeDesign",
      image: "/api/placeholder/100/100",
      rating: 4,
      text: "Collaborer avec Jean a été une expérience très positive. Il a su transformer ma vision en réalité numérique avec professionnalisme. Son expertise technique et sa communication claire tout au long du projet ont été très appréciées."
    },
    {
      id: 4,
      name: "Thomas Bernard",
      role: "CTO, InnovTech",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "La qualité du code et l'architecture des solutions proposées par Jean sont exceptionnelles. Son approche méthodique et sa capacité à anticiper les problèmes potentiels ont fait de lui un atout précieux pour notre équipe de développement."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000); // Increased slightly for better reading time
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Add touch support
  useEffect(() => {
    const slider = sliderRef.current;
    let startX;
    let isSwiping = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    };

    const handleTouchMove = (e) => {
      if (!isSwiping) return;
    };

    const handleTouchEnd = (e) => {
      if (!isSwiping) return;
      
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
      
      isSwiping = false;
    };

    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart);
      slider.addEventListener('touchmove', handleTouchMove);
      slider.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchmove', handleTouchMove);
        slider.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-dark to-dark/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-accent/5 blur-xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono backdrop-blur-sm">
            Ce qu'ils disent
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-light">
            <span className="text-primary">Témoignages</span> Clients
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Découvrez ce que mes clients pensent de mon travail et de ma collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl" ref={sliderRef}>
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4 py-2"
                >
                  <div className="group h-full relative overflow-hidden rounded-xl bg-dark-800/80 backdrop-blur-sm border border-light/10 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <Quote size={48} className="text-primary rotate-180" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18}
                            className={`${i < testimonial.rating ? 'text-accent fill-accent' : 'text-light/30'} transition-transform group-hover:scale-110`} 
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl italic text-light/90 mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex items-center mt-auto">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary/70 group-hover:border-primary transition-all duration-300 shadow-lg" 
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-light text-lg group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
                          <p className="text-light/60 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={goToPrev}
              className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-dark/80 backdrop-blur-sm border border-light/20 flex items-center justify-center text-light hover:bg-primary hover:text-light hover:border-primary transition-all duration-300 focus:outline-none z-20 opacity-70 hover:opacity-100 shadow-lg"
              aria-label="Témoignage précédent"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-dark/80 backdrop-blur-sm border border-light/20 flex items-center justify-center text-light hover:bg-primary hover:text-light hover:border-primary transition-all duration-300 focus:outline-none z-20 opacity-70 hover:opacity-100 shadow-lg"
              aria-label="Témoignage suivant"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
          
          {/* Dots indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary w-6' 
                    : 'bg-light/20 hover:bg-primary/50'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;