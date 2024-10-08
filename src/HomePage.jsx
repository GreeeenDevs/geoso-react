import React from 'react';
import Hero from './home/Hero';
import ServiceSection from './home/ServiceSection';
import SearchSection from './home/SearchSection';

function HomePage() {
  return (
    <div className="flex flex-col">
      <main>
        <Hero />
        <ServiceSection />
        <SearchSection />
      </main>
    </div>
  );
}

export default HomePage;