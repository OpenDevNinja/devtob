// src/components/Projects.jsx
import { useState } from 'react';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Responsive',
      description: 'Une plateforme de commerce électronique avec paiement intégré et tableau de bord administrateur.',
      image: '/api/placeholder/600/400',
      tags: ['web', 'react', 'nodejs'],
      demo: '#',
      github: '#',
      category: 'web'
    },
    {
      id: 2,
      title: 'Application de Fitness',
      description: 'Application mobile pour suivre vos entraînements et votre alimentation quotidienne.',
      image: '/api/placeholder/600/400',
      tags: ['mobile', 'react-native', 'firebase'],
      demo: '#',
      github: '#',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'Tableau de Bord Analytics',
      description: 'Interface d\'analyse de données avec graphiques interactifs et rapports personnalisables.',
      image: '/api/placeholder/600/400',
      tags: ['web', 'vue', 'mongodb'],
      demo: '#',
      github: '#',
      category: 'web'
    },
    {
      id: 4,
      title: 'Portfolio Photographe',
      description: 'Site vitrine pour un photographe professionnel avec galerie de photos et gestion de contenus.',
      image: '/api/placeholder/600/400',
      tags: ['web', 'next', 'cms'],
      demo: '#',
      github: '#',
      category: 'web'
    },
    {
      id: 5,
      title: 'Application de Chat',
      description: 'Application mobile de messagerie instantanée avec chiffrement de bout en bout.',
      image: '/api/placeholder/600/400',
      tags: ['mobile', 'flutter', 'firebase'],
      demo: '#',
      github: '#',
      category: 'mobile'
    },
    {
      id: 6,
      title: 'API RESTful',
      description: 'API backend complète avec authentification JWT et documentation Swagger.',
      image: '/api/placeholder/600/400',
      tags: ['backend', 'express', 'mongodb'],
      demo: '#',
      github: '#',
      category: 'backend'
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'backend', name: 'Backend' },
  ];

  const ProjectCard = ({ project }) => {
    return (
      <div className="group relative overflow-hidden rounded-xl bg-dark-800 border border-light/10 transition-all duration-500 hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark opacity-70 z-10"></div>
        
        {/* Image avec effet de zoom au survol */}
        <div className="h-64 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
        
        {/* Contenu avec effet de translation au survol */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-2xs rounded-full bg-primary/30 text-primary">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
          
          <p className="text-light/70 text-sm mb-4 transform transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100">
            {project.description}
          </p>
          
          <div className="flex space-x-3">
            <a 
              href={project.demo} 
              className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-light transition-colors duration-300"
              aria-label="Voir la démo"
            >
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
            <a 
              href={project.github} 
              className="p-2 rounded-full bg-light/10 text-light hover:bg-light hover:text-dark transition-colors duration-300"
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
            Mes <span className="text-primary">Projets</span> Récents
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
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-light'
                  : 'bg-dark-800 text-light/70 hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
          >
            <span className="mr-2">Voir tous les projets</span>
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;