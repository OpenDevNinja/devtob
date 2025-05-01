import { useEffect, useRef } from 'react';
import { BriefcaseIcon, GraduationCapIcon, CodeIcon, AwardIcon, ChevronRightIcon, GlobeIcon, CpuIcon, LayersIcon, UsersIcon, BookIcon } from 'lucide-react';

const ExperienceTimeline = () => {
  const timelineRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        observer.observe(item);
      });
    }

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll('.timeline-item');
        items.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: "Développeur React/React Native",
      company: "Code Lab",
      location: "Abomey-Calavi",
      period: "Juin 2024 - Présent",
      description: "Développement d'applications mobiles multiplateformes avec React Native et création d'interfaces utilisateur modernes avec React.js.",
      tasks: [
        "Conception et développement d'applications iOS/Android",
        "Optimisation des performances et gestion d'état",
        "Intégration d'API RESTful avec Axios",
        "Collaboration avec Git/GitHub"
      ],
      skills: ["React Native", "React.js", "Redux", "Context API", "Material-UI"],
      icon: <CodeIcon className="h-5 w-5" />
    },
    {
      id: 2,
      type: 'work',
      title: "Développeur Full-Stack",
      company: "Digiton Services",
      location: "Cotonou",
      period: "Mai 2023 - Mars 2024",
      description: "Développement de solutions web et mobiles complètes avec React/Node.js et optimisation des bases de données.",
      tasks: [
        "Architecture backend avec Node.js/Express",
        "Optimisation MySQL/MongoDB",
        "Déploiement et monitoring",
        "Collaboration inter-équipes"
      ],
      skills: ["Node.js", "React.js", "MySQL", "MongoDB", "Redis"],
      icon: <LayersIcon className="h-5 w-5" />
    },
    {
      id: 3,
      type: 'work',
      title: "Développeur Backend",
      company: "3D Technology",
      location: "Cotonou",
      period: "Juillet 2022 - Août 2022",
      description: "Conception d'APIs RESTful sécurisées et architectures backend performantes.",
      tasks: [
        "Développement API avec Node.js/Express",
        "Intégration JWT/OAuth",
        "Optimisation requêtes",
        "Mise en place caching Redis"
      ],
      skills: ["Node.js", "Express.js", "JWT", "OAuth", "Redis"],
      icon: <CpuIcon className="h-5 w-5" />
    },
    {
      id: 4,
      type: 'education',
      title: "Licence en Systèmes d'Information",
      company: "Institut de Formation et Recherche en Informatique",
      location: "Abomey-Calavi",
      period: "Novembre 2019",
      description: "Formation en systèmes d'information et réseaux informatiques.",
      skills: ["Réseaux", "Systèmes d'information", "Développement", "Base de données"],
      icon: <GraduationCapIcon className="h-5 w-5" />
    },
    {
      id: 5,
      type: 'work',
      title: "Assistant Développeur Web",
      company: "Sook Services",
      location: "Abomey-Calavi",
      period: "Juillet 2019 - Juillet 2021",
      description: "Intégration de maquettes et développement frontend.",
      tasks: [
        "HTML/CSS/JS",
        "Développement extensions",
        "Mise en ligne projets",
        "Maintenance technique"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Laravel", "WordPress"],
      icon: <GlobeIcon className="h-5 w-5" />
    }
  ];

  const projects = [
    {
      name: "Digiton Agency",
      url: "www.digitonagency.net",
      tech: ["React", "Node.js", "MongoDB"],
      type: "E-commerce"
    },
    {
      name: "NewsAfrika",
      url: "www.newsafrika.bj",
      tech: ["Next.js", "TypeScript"],
      type: "Média"
    },
    {
      name: "My Rhéma",
      url: "Playstore",
      tech: ["React Native", "Firebase"],
      type: "Application Mobile"
    },
    {
      name: "EduBooks",
      url: "https://edubooks-e.web.app",
      tech: ["React", "Firebase"],
      type: "Éducation"
    }
  ];

  const skills = {
    frontend: ["React.js", "React Native", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "Redis"],
    tools: ["Git/GitHub", "Agile", "Linux", "Tests unitaires"]
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'work': return 'bg-primary/10 text-primary';
      case 'education': return 'bg-secondary/10 text-secondary';
      case 'achievement': return 'bg-accent/10 text-accent';
      default: return 'bg-light/10 text-light';
    }
  };

  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden bg-dark">
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary via-secondary to-accent"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* En-tête de section */}
        <div 
          ref={headingRef} 
          className="max-w-5xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-tech text-transparent bg-clip-text">Mon Parcours Professionnel</span>
          </h2>
          <p className="text-light/80 text-lg md:text-xl mb-8">
            5+ années d'expérience en développement web et mobile, avec une passion pour <span className="text-primary">React</span>, <span className="text-secondary">Node.js</span> et la création de <span className="text-accent">solutions innovantes</span>.
          </p>
        </div>

        {/* Grille de contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale - Timeline */}
          <div ref={timelineRef} className="lg:col-span-2 relative">
            {/* Ligne verticale */}
            <div className="absolute left-6 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Items de timeline */}
            <div className="space-y-12 pl-10">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`timeline-item opacity-0 translate-y-10 transition-all duration-700 flex items-start w-full group`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Point sur la ligne */}
                  <div className={`absolute left-6 h-3 w-3 rounded-full ${getTypeColor(exp.type)} transform -translate-x-1/2 mt-6 z-10 group-hover:scale-150 transition-transform`}></div>

                  {/* Carte d'expérience */}
                  <div className="w-full">
                    <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-primary/30 hover:shadow-custom transition-all duration-300">
                      {/* En-tête de carte */}
                      <div className="flex items-start mb-4">
                        <div className={`p-2 rounded-lg mr-4 ${getTypeColor(exp.type)} group-hover:bg-opacity-20 transition-all`}>
                          {exp.icon}
                        </div>
                        <div>
                          <div className={`text-xs font-mono font-medium px-2 py-1 rounded ${getTypeColor(exp.type)} inline-block mb-1`}>
                            {exp.type === 'work' ? 'EXPÉRIENCE' : 'FORMATION'}
                          </div>
                          <h4 className="text-xl font-semibold text-light group-hover:text-primary transition-colors">
                            {exp.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                            <p className="text-light/70 text-sm">{exp.company}</p>
                            <span className="text-light/40 text-xs">•</span>
                            <p className="text-light/70 text-sm">{exp.location}</p>
                            <span className="text-light/40 text-xs">•</span>
                            <p className="text-primary/80 text-sm font-medium">{exp.period}</p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-light/80 mb-4">{exp.description}</p>

                      {/* Tâches principales */}
                      {exp.tasks && (
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-light/70 mb-2">TÂCHES CLÉS :</h5>
                          <ul className="space-y-2 pl-4">
                            {exp.tasks.map((task, i) => (
                              <li key={i} className="flex items-start text-light/70 text-sm">
                                <span className="text-primary mr-2">▹</span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Compétences */}
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span 
                              key={i} 
                              className="text-xs font-mono px-2 py-1 bg-light/5 text-light/70 rounded hover:bg-primary/10 hover:text-primary transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne latérale - Compétences et Projets */}
          <div className="space-y-8">
            {/* Compétences */}
            <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-secondary/30 hover:shadow-custom transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-6 flex items-center">
                <CpuIcon className="h-5 w-5 mr-2 text-secondary" />
                <span>Mes Compétences</span>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-light/70 mb-2">FRONTEND</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-light/70 mb-2">BACKEND</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-light/70 mb-2">OUTILS</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projets récents */}
            <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-accent/30 hover:shadow-custom transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-6 flex items-center">
                <BookIcon className="h-5 w-5 mr-2 text-accent" />
                <span>Projets Réalisés</span>
              </h3>
              
              <div className="space-y-4">
                {projects.map((project, i) => (
                  <a 
                    key={i} 
                    href={`https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="p-4 rounded-lg bg-light/5 hover:bg-light/10 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-light group-hover:text-accent transition-colors">
                            {project.name}
                          </h4>
                          <p className="text-xs text-light/50">{project.type}</p>
                        </div>
                        <ChevronRightIcon className="h-4 w-4 text-light/30 group-hover:text-accent transition-colors" />
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {project.tech.map((tech, j) => (
                          <span key={j} className="text-[0.6rem] px-2 py-0.5 bg-dark text-light/70 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-primary/30 hover:shadow-custom transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-6 flex items-center">
                <UsersIcon className="h-5 w-5 mr-2 text-primary" />
                <span>Soft Skills</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Leadership technique",
                  "Résolution de problèmes",
                  "Communication client",
                  "Mentorat",
                  "Veille technologique",
                  "Travail d'équipe",
                  "Créativité",
                  "Adaptabilité"
                ].map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    <span className="text-sm text-light/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;