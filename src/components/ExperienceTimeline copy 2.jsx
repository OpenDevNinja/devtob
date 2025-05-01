import { useEffect, useRef } from 'react';
import { 
  BriefcaseIcon, GraduationCapIcon, CodeIcon, AwardIcon, ChevronRightIcon, 
  GlobeIcon, CpuIcon, LayersIcon, UsersIcon, BookIcon, MapPinIcon,
  CalendarIcon, MailIcon, PhoneIcon, LanguagesIcon, MusicIcon, PlaneIcon,
  PuzzleIcon, GithubIcon, LinkedinIcon, StarIcon
} from 'lucide-react';

const ExperienceTimeline = () => {
  const timelineRef = useRef(null);
  const headingRef = useRef(null);
  const personalRef = useRef(null);

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

    [headingRef, timelineRef, personalRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [headingRef, timelineRef, personalRef].forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Toutes les données structurées depuis ton CV
  const personalInfo = {
    name: "BONAVENTURE TOYI",
    title: "Développeur Full Stack",
    about: "Passionné par le développement web depuis plus de cinq ans, je suis un développeur full stack déterminé à créer des expériences numériques exceptionnelles. Ma passion pour la technologie et mon expérience diversifiée dans la conception et la mise en œuvre de solutions innovantes ont façonné mon parcours professionnel.",
    contact: {
      email: "toybonadev@gmail.com",
      phone: "+229 66 47 67 60",
      location: "Abomey-Calavi, Bénin",
      birth: "Né le 01/01/1995",
      nationality: "Béninoise",
      workMode: "Télétravail ou présentiel",
      gender: "Masculin"
    },
    languages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Intermédiaire" }
    ],
    interests: ["Voyage", "Musique", "Innovation", "Jeux"],
    social: {
      linkedin: "@toyibanaventure"
    },
    references: [
      {
        name: "SOSSOU Eric",
        position: "Directeur de la Clientèle grande entreprise et institution",
        company: "Banque Internationale pour l'Industrie et le Commerce (BIIC)",
        contact: "+229 94125514, esossou81@gmail.com"
      },
      {
        name: "Dr MASSENON Rhodes",
        position: "Docteur en informatique",
        contact: "+229 51335040, contact@massenonrhodes.com"
      },
      {
        name: "SMITH Alan Oswlad",
        position: "DG Toras Tech",
        contact: "+229 67243085, alanoswaldsmith@gmail.com"
      }
    ]
  };

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
        "Conception et développement d'applications iOS et Android utilisant React Native",
        "Intégration de fonctionnalités avancées (géolocalisation, notifications push)",
        "Optimisation des performances et gestion d'état avec Redux/Context API",
        "Création d'interfaces utilisateur modernes avec React.js et Material-UI/Ant Design",
        "Intégration d'API RESTful avec Axios",
        "Collaboration avec Git/GitHub et revues de code"
      ],
      skills: ["React Native", "React.js", "Redux", "Context API", "Material-UI", "Ant Design", "Axios", "Git"],
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
        "Développement full-stack avec React.js/React Native (frontend) et Node.js (backend)",
        "Intégration de fonctionnalités avancées (authentification, paiement en ligne, géolocalisation)",
        "Conception et optimisation de bases de données MySQL et MongoDB",
        "Mise en place d'architectures scalables avec cache Redis",
        "Implémentation de workflows agiles avec tests unitaires et d'intégration",
        "Déploiement et maintenance sur multiples environnements"
      ],
      skills: ["React.js", "React Native", "Node.js", "Express.js", "MySQL", "MongoDB", "Redis", "Agile"],
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
        "Conception et développement d'APIs RESTful avec Node.js/Express.js",
        "Intégration de solutions de sécurité (JWT, OAuth)",
        "Mise en place d'architectures backend performantes",
        "Optimisation des requêtes et gestion des bases de données",
        "Implémentation de caching avec Redis"
      ],
      skills: ["Node.js", "Express.js", "REST API", "JWT", "OAuth", "Redis"],
      icon: <CpuIcon className="h-5 w-5" />
    },
    {
      id: 4,
      type: 'work',
      title: "Informaticien",
      company: "Bénin Fintech",
      location: "Cotonou",
      period: "Juin 2022 - Juillet 2022",
      description: "Support technique et formation utilisateurs.",
      tasks: [
        "Diagnostic et résolution de problèmes techniques",
        "Accompagnement personnalisé des utilisateurs",
        "Formation aux bonnes pratiques de sécurité",
        "Collaboration avec les équipes de développement"
      ],
      skills: ["Support technique", "Formation", "Résolution de problèmes"],
      icon: <UsersIcon className="h-5 w-5" />
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
        "Intégration des maquettes graphiques (HTML, CSS, JS)",
        "Développement des extensions spécifiques",
        "Mise en ligne des projets numériques",
        "Maintenance technique et formation du personnel"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Intégration web"],
      icon: <GlobeIcon className="h-5 w-5" />
    },
    {
      id: 6,
      type: 'work',
      title: "Développeur web (Stage Académique)",
      company: "PERO GROUPE",
      location: "Cotonou",
      period: "Mai 2019 - Juillet 2019",
      description: "Stage académique en développement web.",
      tasks: [
        "Intégration des maquettes graphiques (HTML, CSS, JS)",
        "Conception de la partie frontend et backend",
        "Mise en ligne du site"
      ],
      skills: ["HTML", "CSS", "JavaScript", "PHP"],
      icon: <CodeIcon className="h-5 w-5" />
    },
    {
      id: 7,
      type: 'work',
      title: "Formateur en Informatique",
      company: "SETECH-BENIN",
      location: "Cotonou",
      period: "Juin 2016 - Juin 2017",
      description: "Formation et maintenance informatique.",
      tasks: [
        "Gestion des projets informatiques",
        "Maintenance informatique",
        "Formation des informaticiens (Windows)"
      ],
      skills: ["Formation", "Maintenance", "Windows"],
      icon: <UsersIcon className="h-5 w-5" />
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Licence en Systèmes des Informations et Réseaux Informatiques",
      institution: "Institut de Formation et de Recherche en Informatique",
      location: "Abomey-Calavi",
      period: "Novembre 2019",
      status: "En instance de Soutenance"
    },
    {
      id: 2,
      degree: "BTS en Informatique de Gestion",
      institution: "ESCAE-BÉNIN",
      location: "Abomey-Calavi",
      period: "Octobre 2015 - Décembre 2017"
    },
    {
      id: 3,
      degree: "Licence 1 en Mathématique Informatique Appliquée",
      institution: "Fast-UAC",
      location: "Abomey-Calavi",
      period: "Octobre 2015"
    },
    {
      id: 4,
      degree: "Baccalauréat Série C",
      institution: "CEG 1 Ouidah",
      location: "Ouidah",
      period: "Juillet 2013"
    }
  ];

  const skills = {
    frontend: ["React.js (Redux, Context API, Hooks)", "React Native (IOS & Android)", "Next.js", "TypeScript/JavaScript", "HTML5/CSS3", "Tailwind CSS", "Material-UI"],
    backend: ["Node.js/Express.js", "API RESTful", "MongoDB", "MySQL", "JWT", "OAuth", "Redis (Cache)"],
    tools: ["Git/GitHub", "Tests unitaires & d'intégration", "Méthodologies Agiles", "Linux/Windows"],
    optimization: ["SEO", "Responsive Design", "Optimisation des performances web", "Debugging & Monitoring"],
    soft: ["Leadership d'équipe technique", "Communication client", "Résolution de problèmes complexes", "Mentorat développeurs juniors", "Veille technologique active"]
  };

  const projects = [
    { name: "E-commerce: digitonagency.net", url: "digitonagency.net", tech: ["React", "Node.js", "MongoDB"] },
    { name: "NEWSAFRIKA: newsafrika.bj", url: "newsafrika.bj", tech: ["Next.js", "TypeScript"] },
    { name: "MCR: mcrhema.org", url: "mcrhema.org", tech: ["React", "Firebase"] },
    { name: "CEDAF: stecedaf.com", url: "stecedaf.com", tech: ["React", "Node.js"] },
    { name: "EduBooks: edubooks-e.web.app", url: "edubooks-e.web.app", tech: ["React", "Firebase"] },
    { name: "MLM: cauris-vision.org", url: "cauris-vision.org", tech: ["React", "Node.js"] },
    { name: "USODEV: usodev.com", url: "usodev.com", tech: ["React", "Next.js"] },
    { name: "SCS WORKER (App Store)", tech: ["React Native"] },
    { name: "My Rhéma (Playstore)", tech: ["React Native"] }
  ];

  const personality = [
    "Créatif et Flexible",
    "Patient et efficace",
    "Discret et Déterminé",
    "Enthousiaste et curieux",
    "Autonomie et sens des priorités",
    "Fiable et rigoureux"
  ];

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
        {/* Section Personnelle */}
        <div 
          ref={personalRef}
          className="max-w-6xl mx-auto mb-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Photo et info de base */}
            <div className="lg:col-span-1">
              <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-primary/30 hover:shadow-custom transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="h-32 w-32 rounded-full bg-gradient-tech mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">BT</span>
                  </div>
                  <h1 className="text-2xl font-bold text-light">{personalInfo.name}</h1>
                  <p className="text-primary font-medium">{personalInfo.title}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MailIcon className="h-5 w-5 mr-3 mt-0.5 text-light/70" />
                    <span className="text-light/80">{personalInfo.contact.email}</span>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="h-5 w-5 mr-3 mt-0.5 text-light/70" />
                    <span className="text-light/80">{personalInfo.contact.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 mr-3 mt-0.5 text-light/70" />
                    <span className="text-light/80">{personalInfo.contact.location}</span>
                  </div>
                  <div className="flex items-start">
                    <CalendarIcon className="h-5 w-5 mr-3 mt-0.5 text-light/70" />
                    <span className="text-light/80">{personalInfo.contact.birth}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-light/10">
                  <h3 className="flex items-center text-lg font-semibold text-light mb-4">
                    <LanguagesIcon className="h-5 w-5 mr-2 text-secondary" />
                    <span>Langues</span>
                  </h3>
                  <div className="space-y-3">
                    {personalInfo.languages.map((lang, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-light/80">{lang.name}</span>
                        <span className="text-xs px-2 py-1 bg-light/5 rounded">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-light/10">
                  <h3 className="flex items-center text-lg font-semibold text-light mb-4">
                    <PuzzleIcon className="h-5 w-5 mr-2 text-accent" />
                    <span>Centres d'intérêt</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.interests.map((interest, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-light/5 text-light/70 rounded-full flex items-center">
                        {interest === "Voyage" && <PlaneIcon className="h-3 w-3 mr-1" />}
                        {interest === "Musique" && <MusicIcon className="h-3 w-3 mr-1" />}
                        {interest === "Innovation" && <StarIcon className="h-3 w-3 mr-1" />}
                        {interest === "Jeux" && <PuzzleIcon className="h-3 w-3 mr-1" />}
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-light/10">
                  <h3 className="flex items-center text-lg font-semibold text-light mb-4">
                    <LinkedinIcon className="h-5 w-5 mr-2 text-primary" />
                    <span>Réseaux sociaux</span>
                  </h3>
                  <a 
                    href={`https://linkedin.com/in/${personalInfo.social.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    @{personalInfo.social.linkedin}
                  </a>
                </div>
              </div>
            </div>

            {/* A propos et personnalité */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-secondary/30 hover:shadow-custom transition-all duration-300">
                <h2 className="text-2xl font-bold text-light mb-4">À propos</h2>
                <p className="text-light/80 leading-relaxed">{personalInfo.about}</p>
              </div>

              <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-accent/30 hover:shadow-custom transition-all duration-300">
                <h2 className="text-2xl font-bold text-light mb-4 flex items-center">
                  <UsersIcon className="h-5 w-5 mr-2 text-accent" />
                  <span>Personnalité</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personality.map((trait, i) => (
                    <div key={i} className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2 mt-2"></span>
                      <span className="text-light/80">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Références */}
              <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-primary/30 hover:shadow-custom transition-all duration-300">
                <h2 className="text-2xl font-bold text-light mb-4 flex items-center">
                  <StarIcon className="h-5 w-5 mr-2 text-primary" />
                  <span>Références</span>
                </h2>
                <div className="space-y-6">
                  {personalInfo.references.map((ref, i) => (
                    <div key={i} className="border-l-2 border-primary/50 pl-4">
                      <h4 className="text-lg font-semibold text-light">{ref.name}</h4>
                      <p className="text-light/70 text-sm">{ref.position}</p>
                      {ref.company && <p className="text-light/70 text-sm">{ref.company}</p>}
                      <p className="text-light/80 text-sm mt-1">{ref.contact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

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

            {/* Expériences professionnelles */}
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
                            EXPÉRIENCE
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

            {/* Formation */}
            <div className="pl-10 mt-16">
              <h3 className="text-2xl font-bold text-light mb-8 flex items-center">
                <GraduationCapIcon className="h-6 w-6 mr-2 text-secondary" />
                <span>Formation Académique</span>
              </h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={edu.id}
                    className={`timeline-item opacity-0 translate-y-10 transition-all duration-700 flex items-start w-full group`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    {/* Point sur la ligne */}
                    <div className={`absolute left-6 h-3 w-3 rounded-full ${getTypeColor('education')} transform -translate-x-1/2 mt-6 z-10 group-hover:scale-150 transition-transform`}></div>

                    {/* Carte de formation */}
                    <div className="w-full">
                      <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-secondary/30 hover:shadow-custom transition-all duration-300">
                        <div className="flex items-start mb-4">
                          <div className={`p-2 rounded-lg mr-4 ${getTypeColor('education')} group-hover:bg-opacity-20 transition-all`}>
                            <GraduationCapIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className={`text-xs font-mono font-medium px-2 py-1 rounded ${getTypeColor('education')} inline-block mb-1`}>
                              FORMATION
                            </div>
                            <h4 className="text-xl font-semibold text-light group-hover:text-secondary transition-colors">
                              {edu.degree}
                            </h4>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                              <p className="text-light/70 text-sm">{edu.institution}</p>
                              <span className="text-light/40 text-xs">•</span>
                              <p className="text-light/70 text-sm">{edu.location}</p>
                              <span className="text-light/40 text-xs">•</span>
                              <p className="text-secondary/80 text-sm font-medium">{edu.period}</p>
                            </div>
                            {edu.status && (
                              <p className="text-xs text-accent mt-1">{edu.status}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne latérale - Compétences et Projets */}
          <div className="space-y-8">
            {/* Compétences techniques */}
            <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-primary/30 hover:shadow-custom transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-6 flex items-center">
                <CpuIcon className="h-5 w-5 mr-2 text-primary" />
                <span>Compétences Techniques</span>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-light/70 mb-2 flex items-center">
                    <CodeIcon className="h-4 w-4 mr-1" /> FRONTEND
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-light/70 mb-2 flex items-center">
                    <LayersIcon className="h-4 w-4 mr-1" /> BACKEND
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-light/70 mb-2 flex items-center">
                    <BriefcaseIcon className="h-4 w-4 mr-1" /> OUTILS & MÉTHODOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-light/10 text-light/70 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-light/70 mb-2 flex items-center">
                    <StarIcon className="h-4 w-4 mr-1" /> PERFORMANCE & OPTIMISATION
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.optimization.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projets réalisés */}
            <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-secondary/30 hover:shadow-custom transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-6 flex items-center">
                <BookIcon className="h-5 w-5 mr-2 text-secondary" />
                <span>Projets Réalisés</span>
              </h3>
              
              <div className="space-y-4">
                {projects.map((project, i) => (
                  <a 
                    key={i} 
                    href={project.url ? `https://${project.url}` : '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="p-4 rounded-lg bg-light/5 hover:bg-light/10 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-light group-hover:text-secondary transition-colors">
                            {project.name.split(':')[0]}
                          </h4>
                          <p className="text-xs text-light/50">{project.name.split(':')[1]?.trim() || project.type || ''}</p>
                        </div>
                        <ChevronRightIcon className="h-4 w-4 text-light/30 group-hover:text-secondary transition-colors" />
                      </div>
                      {project.tech && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {project.tech.map((tech, j) => (
                            <span key={j} className="text-[0.6rem] px-2 py-0.5 bg-dark text-light/70 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-accent/30 hover:shadow-custom transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-6 flex items-center">
                <UsersIcon className="h-5 w-5 mr-2 text-accent" />
                <span>Soft Skills</span>
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {skills.soft.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                    <span className="text-sm text-light/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div className="p-6 rounded-xl border border-light/10 backdrop-blur-sm bg-dark/70 hover:border-primary/30 hover:shadow-custom transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-6 flex items-center">
                <AwardIcon className="h-5 w-5 mr-2 text-primary" />
                <span>Certification</span>
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="font-medium text-light">AWS Certified Developer</h4>
                  <p className="text-xs text-light/70 mt-1">Amazon Web Services - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;