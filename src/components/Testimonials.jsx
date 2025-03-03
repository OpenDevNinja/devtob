import { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((activeIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-dark to-dark/95 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-2xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-2xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">
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
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="group relative overflow-hidden rounded-xl bg-dark-800 border border-light/10 p-8 transition-all duration-500 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark opacity-70 z-0"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-light/30'}`} 
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg italic text-light/90 mb-6">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary" 
                        />
                        <div>
                          <h4 className="font-bold text-light">{testimonial.name}</h4>
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
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 w-10 h-10 rounded-full bg-dark-800 border border-light/10 flex items-center justify-center text-light hover:bg-primary hover:text-light transition-colors duration-300 focus:outline-none z-20"
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-10 h-10 rounded-full bg-dark-800 border border-light/10 flex items-center justify-center text-light hover:bg-primary hover:text-light transition-colors duration-300 focus:outline-none z-20"
              aria-label="Next testimonial"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
          
          {/* Dots indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary' 
                    : 'bg-light/20 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;