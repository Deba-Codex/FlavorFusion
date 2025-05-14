import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Menu />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomePage;