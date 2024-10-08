import React from 'react';
import Header from './header/Header';
import Hero from './about/Hero';
import Footer from './footer/Footer';
import AboutSection1 from './about/AboutSection1';
import AboutSection2 from './about/AboutSection2';

function AboutPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <AboutSection1 />
      <AboutSection2 />
      <Footer />
    </div>
  );
}

export default AboutPage;