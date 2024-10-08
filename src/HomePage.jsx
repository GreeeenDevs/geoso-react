import React from 'react';
import Header from './header/Header';
import Hero from './home/Hero';
import ServiceSection from './home/ServiceSection';
import SearchSection from './home/SearchSection';
import Footer from './footer/Footer';

function HomePage() {
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

export default HomePage;