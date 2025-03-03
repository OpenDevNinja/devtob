// src/components/Skills.jsx
import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  const frontendSkills = [
    { name: 'React', level: 95 },
    { name: 'Vue.js', level: 85 },
    { name: 'Next.js', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 90 },
    { name: 'Express', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Firebase', level: 85 },
    { name: 'RESTful API', level: 90 },
    { name: 'GraphQL', level: 80 },
    { name: 'SQL', level: 75 },
  ];

  const mobileSkills = [
    { name: 'React Native', level: 90 },
    { name: 'Flutter', level: 85 },
    { name: 'Swift', level: 70 },
    { name: 'Kotlin', level: 65 },
    { name: 'Expo', level: 85 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = document.querySelectorAll('.skill-progress-bar');
            bars.forEach((bar) => {
              bar.classList.add('animate-skill');
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const SkillCategory = ({ title, skills, bgClass }) => (
    <div className={`rounded-xl p-6 ${bgClass} backdrop-blur-lg transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg`}>
      <h3 className="text-xl font-bold mb-4 text-light">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-light/90 font-medium">{skill.name}</span>
              <span className="text-light/70 text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-dark/50 rounded-full overflow-hidden">
              <div
                className="skill-progress-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full opacity-0"
                style={{
                  width: `${skill.level}%`,
                  transition: 'width 1s ease-in-out, opacity 0.5s ease-in-out',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-dark" ref={skillsRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono">
            Ce que je maîtrise
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Mes <span className="text-primary">Compétences</span> Techniques
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Voici les technologies que j'utilise quotidiennement pour créer des expériences web et mobiles exceptionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Développement Frontend" skills={frontendSkills} bgClass="bg-primary/10 border border-primary/20" />
          <SkillCategory title="Développement Backend" skills={backendSkills} bgClass="bg-secondary/10 border border-secondary/20" />
          <SkillCategory title="Développement Mobile" skills={mobileSkills} bgClass="bg-accent/10 border border-accent/20" />
        </div>

        <div className="mt-16 text-center">
          <p className="text-light/70 mb-6">
            Et d'autres outils de développement que j'utilise régulièrement
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Figma', 'Webpack', 'Vite', 'SASS', 'Redux'].map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full bg-dark-800 border border-light/10 text-light/80 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-skill {
          opacity: 1;
          animation: progress 1.5s ease-out forwards;
        }
        @keyframes progress {
          0% {
            width: 0;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;