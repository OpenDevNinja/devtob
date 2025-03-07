import { useState, useEffect } from 'react';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon, EyeIcon } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Responsive',
      description: 'Une plateforme de commerce électronique avec paiement intégré et tableau de bord administrateur.',
      image: '/api/placeholder/600/400',
      tags: ['react', 'nodejs', 'stripe'],
      demo: '#',
      github: '#',
      category: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Application de Fitness',
      description: 'Application mobile pour suivre vos entraînements et votre alimentation quotidienne.',
      image: '/api/placeholder/600/400',
      tags: ['react-native', 'firebase', 'expo'],
      demo: '#',
      github: '#',
      category: 'mobile',
      featured: true
    },
    {
      id: 3,
      title: 'Tableau de Bord Analytics',
      description: 'Interface d\'analyse de données avec graphiques interactifs et rapports personnalisables.',
      image: '/api/placeholder/600/400',
      tags: ['vue', 'mongodb', 'chartjs'],
      demo: '#',
      github: '#',
      category: 'web',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Photographe',
      description: 'Site vitrine pour un photographe professionnel avec galerie de photos et gestion de contenus.',
      image: '/api/placeholder/600/400',
      tags: ['next', 'cms', 'tailwind'],
      demo: '#',
      github: '#',
      category: 'web',
      featured: false
    },
    {
      id: 5,
      title: 'Application de Chat',
      description: 'Application mobile de messagerie instantanée avec chiffrement de bout en bout.',
      image: '/api/placeholder/600/400',
      tags: ['flutter', 'firebase', 'websocket'],
      demo: '#',
      github: '#',
      category: 'mobile',
      featured: true
    },
    {
      id: 6,
      title: 'API RESTful',
      description: 'API backend complète avec authentification JWT et documentation Swagger.',
      image: '/api/placeholder/600/400',
      tags: ['express', 'mongodb', 'jwt'],
      demo: '#',
      github: '#',
      category: 'backend',
      featured: false
    },
  ];

  const categories = [
    { id: 'all', name: 'Tous', icon: <EyeIcon className="w-4 h-4 mr-2" /> },
    { id: 'web', name: 'Web', icon: <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 11.39 4.08 10.79 4.21 10.22L8 13.12V14C8 15.1 8.9 16 10 16H11V17.96C7.06 17.33 4 14.97 4 12ZM18.5 12C18.5 12.88 18.26 13.69 17.85 14.38L17.5 12L18.5 10.5C18.5 11 18.5 11.5 18.5 12ZM16.5 8.5L15 10.5L13.5 8.5H16.5ZM12 20C11.95 20 11.9 19.99 11.85 19.99C12.9 19.33 14 16 14 16V14C14 13.45 13.55 13 13 13H8V10C8 8.9 8.9 8 10 8H11V6.39C11.35 6.4 11.68 6.46 12 6.54V4.08C16.73 4.4 20 8 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
    </svg> },
    { id: 'mobile', name: 'Mobile', icon: <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19Z" fill="currentColor"/>
    </svg> },
    { id: 'backend', name: 'Backend', icon: <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM4 19V5H20V19H4Z" fill="currentColor"/>
      <path d="M6.5 7.5H9.5V10.5H6.5V7.5Z" fill="currentColor"/>
      <path d="M11.5 7.5H14.5V10.5H11.5V7.5Z" fill="currentColor"/>
      <path d="M6.5 12.5H9.5V15.5H6.5V12.5Z" fill="currentColor"/>
      <path d="M11.5 12.5H14.5V15.5H11.5V12.5Z" fill="currentColor"/>
    </svg> },
  ];

  useEffect(() => {
    setIsAnimating(true);
    
    const filtered = activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
    
    // Clear projects first
    setVisibleProjects([]);
    
    // Then add them back with animation delay
    const timer = setTimeout(() => {
      setVisibleProjects(filtered);
      setIsAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const ProjectCard = ({ project, index }) => {
    return (
      <div 
        className={`group relative overflow-hidden rounded-xl bg-gradient-to-b from-dark-800 to-dark-800/95 border border-light/10 
                  transition-all duration-500 hover:shadow-custom transform 
                  ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {project.featured && (
          <div className="absolute top-4 right-4 z-30 px-2 py-1 bg-accent text-dark text-xs font-bold rounded-md">
            Featured
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark opacity-80 z-10"></div>
        
        {/* Image avec effet de zoom et filtre au survol */}
        <div className="h-64 overflow-hidden">
          <div className="absolute inset-0 bg-primary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-30 z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110" 
          />
        </div>
        
        {/* Contenu avec effet de translation au survol */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-all duration-500">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-2 py-1 text-2xs rounded-full bg-primary/20 text-primary backdrop-blur-sm 
                         transition-all duration-300 group-hover:bg-primary/40"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-light mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-light/70 text-sm mb-4 line-clamp-2 transform transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100">
            {project.description}
          </p>
          
          <div className="flex space-x-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <a 
              href={project.demo} 
              className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-light transition-colors duration-300 flex items-center justify-center"
              aria-label="Voir la démo"
            >
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
            <a 
              href={project.github} 
              className="p-2 rounded-full bg-light/10 text-light hover:bg-light hover:text-dark transition-colors duration-300 flex items-center justify-center"
              aria-label="Voir le code source"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark to-dark/95">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">
            Mon travail
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Mes <span className="bg-gradient-tech text-transparent bg-clip-text">Projets</span> Récents
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et les plus remarquables.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center
                ${activeCategory === category.id
                  ? 'bg-primary text-light shadow-custom'
                  : 'bg-dark-800 text-light/70 hover:bg-primary/20 hover:text-primary'
                }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects grid with animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-300 group"
          >
            <span className="mr-2 group-hover:mr-3 transition-all duration-300">Voir tous les projets</span>
            <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;