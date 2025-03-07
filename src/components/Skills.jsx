import React, { useEffect, useRef } from 'react';
import { 
  FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, 
  FaMobile, FaServer, FaDocker, FaGitAlt, FaAws, FaFigma
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, 
  SiFirebase, SiGraphql, SiRedux, SiJest, SiWebpack, SiVite, SiSass,
   SiFlutter, SiSwift, SiKotlin, SiExpo,
   SiNestjs,
   SiMysql,
   SiRedis,
   SiPostgresql,
   SiBootstrap,
   SiJaeger,
   SiOpentelemetry,
   SiGitlab
} from 'react-icons/si';

const Skills = () => {
  const skillsRef = useRef(null);

  const frontendSkills = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Vue.js', icon: <FaVuejs className="text-[#42B883]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#563D7C]" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#68A063]" /> },
    { name: 'Express', icon: <SiExpress className="text-white" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-[#E535AB]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: 'RESTful API', icon: <FaServer className="text-[#00D4FF]" /> },
    { name: 'GraphQL', icon: <SiGraphql className="text-[#E535AB]" /> },
    { name: 'SQL', icon: <FaDatabase className="text-[#00758F]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#0095A8]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#00758F]" /> },
    { name: 'Redis', icon: <SiRedis className="text-[#D82C20]" /> },
   
    
  ];

  const mobileSkills = [
    { name: 'React Native', icon: <FaReact className="text-[#02569B]" /> },
  /*   { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
    { name: 'Swift', icon: <SiSwift className="text-[#FA7343]" /> },
    { name: 'Kotlin', icon: <SiKotlin className="text-[#7F52FF]" /> }, */
    { name: 'Expo', icon: <SiExpo className="text-white" /> },
  ];

  const devTools = [
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: 'Gitlab', icon: <SiGitlab className="text-[#FC6D26]" /> },
    { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
    { name: 'AWS', icon: <FaAws className="text-[#FF9900]" /> },
    { name: 'Jest', icon: <SiJest className="text-[#C21325]" /> },
    { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
    { name: 'Webpack', icon: <SiWebpack className="text-[#8DD6F9]" /> },
    { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> },
    { name: 'SASS', icon: <SiSass className="text-[#CC6699]" /> },
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
    { name: 'Jaeger', icon: <SiJaeger className="text-[#000000]" /> },
    { name: 'OpenTelemetry', icon: <SiOpentelemetry className="text-[#000000]" /> },
 
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = document.querySelectorAll('.skill-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-in-bottom');
                item.style.opacity = '1';
              }, index * 50);
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
    <div className={`rounded-xl p-6 ${bgClass} backdrop-blur-lg transition-transform duration-300 hover:shadow-hover`}>
      <h3 className="text-xl font-bold mb-6 text-light">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="skill-item flex flex-col items-center justify-center p-3 bg-dark-800 rounded-lg border border-light/10 opacity-0 transition-all hover:transform hover:scale-105 hover:shadow-custom"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <span className="text-light/90 text-sm font-medium text-center">{skill.name}</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SkillCategory title="Développement Frontend" skills={frontendSkills} bgClass="bg-primary/10 border border-primary/20" />
          <SkillCategory title="Développement Backend" skills={backendSkills} bgClass="bg-secondary/10 border border-secondary/20" />
          <SkillCategory title="Développement Mobile" skills={mobileSkills} bgClass="bg-accent/10 border border-accent/20" />
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-light text-center">Outils de développement</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {devTools.map((tool) => (
              <div 
                key={tool.name} 
                className="skill-item flex flex-col items-center justify-center p-4 bg-dark-800 rounded-lg border border-light/10 opacity-0 transition-all hover:transform hover:scale-105 hover:shadow-custom"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <span className="text-light/80 text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;