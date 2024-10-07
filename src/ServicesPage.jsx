import React from 'react';
import Header from './header/Header';
import Hero from './services/Hero';
import Services from './services/Services';
import Footer from './footer/Footer';

const ServicesPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;