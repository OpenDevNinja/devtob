import { useState, useEffect, useRef } from 'react';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon, FolderIcon, CodeIcon, SmartphoneIcon, ServerIcon } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Responsive',
      description: 'Une plateforme de commerce électronique avec paiement intégré et tableau de bord administrateur.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
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
      tags: ['React Native', 'Firebase', 'Redux'],
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
      tags: ['Vue.js', 'D3.js', 'MongoDB', 'Express'],
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
      tags: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
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
      tags: ['Flutter', 'Firebase', 'WebRTC'],
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
      tags: ['Express', 'MongoDB', 'JWT', 'Swagger'],
      demo: '#',
      github: '#',
      category: 'backend',
      featured: false
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories = [
    { id: 'all', name: 'Tous', icon: <FolderIcon className="h-4 w-4" /> },
    { id: 'web', name: 'Web', icon: <CodeIcon className="h-4 w-4" /> },
    { id: 'mobile', name: 'Mobile', icon: <SmartphoneIcon className="h-4 w-4" /> },
    { id: 'backend', name: 'Backend', icon: <ServerIcon className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-in-bottom');
                card.style.opacity = '1';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [filteredProjects]);

  const ProjectCard = ({ project }) => {
    return (
      <div className="project-card group relative h-96 overflow-hidden rounded-xl bg-dark-800 border border-light/10 transition-all duration-500 hover:shadow-hover opacity-0">
        {/* Badge pour les projets en vedette */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-30 px-3 py-1 bg-accent text-dark text-xs font-bold rounded-full">
            Featured
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark opacity-90 z-10"></div>
        
        {/* Image avec effet de zoom au survol */}
        <div className="absolute inset-0 h-full w-full">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
        
        {/* Contenu */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
          <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/30 text-primary backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-light mb-2">{project.title}</h3>
            
            <p className="text-light/80 text-sm mb-6 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 delay-100">
              {project.description}
            </p>
            
            <div className="flex space-x-4">
              <a 
                href={project.demo} 
                className="px-4 py-2 rounded-lg bg-primary text-light hover:bg-primary/90 transition-colors duration-300 flex items-center text-sm font-medium"
                aria-label="Voir la démo"
              >
                <span>Live Demo</span>
                <ExternalLinkIcon className="h-4 w-4 ml-2" />
              </a>
              <a 
                href={project.github} 
                className="px-4 py-2 rounded-lg bg-dark border border-light/20 text-light hover:bg-light/10 transition-colors duration-300 flex items-center text-sm font-medium"
                aria-label="Voir le code source"
              >
                <span>Code</span>
                <GithubIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark to-dark/95" ref={projectsRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">
            Mon travail
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Mes <span className="text-primary">Projets</span> Récents
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et les plus remarquables.
          </p>
        </div>

        {/* Filter buttons avec icônes */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeCategory === category.id
                  ? 'bg-gradient-tech text-light shadow-custom'
                  : 'bg-dark-800 text-light/70 hover:bg-dark-800/80 hover:text-light hover:shadow-custom'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects grid with masonry-like layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-light transition-all duration-300"
          >
            <span className="mr-2 font-medium">Voir tous les projets</span>
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .animate-slide-in-bottom {
          animation: slide-in-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        @keyframes slide-in-bottom {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;