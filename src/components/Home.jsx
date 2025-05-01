// src/components/Home.jsx
import React from 'react';
import Hero from './Hero';
import About from './About';
import WhyMe from './WhyMe';
import ServiceSection from './ServiceSection';
import Skills from './Skills';
import Services from './Competence';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyMe />
      <ServiceSection />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
