import React from 'react';
import Hero from './services/Hero';
import Services from './services/ServicesSection';

const ServicesPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
    </div>
  );
};

export default ServicesPage;