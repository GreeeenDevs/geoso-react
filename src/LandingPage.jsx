import React from 'react';
import Header from './header/Header';
import Hero from './home/Hero';
import ServiceSection from './home/ServiceSection';
import SearchSection from './home/SearchServices';
import Footer from './footer/Footer';

function LandingPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Hero />
        <ServiceSection />
        <SearchSection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;