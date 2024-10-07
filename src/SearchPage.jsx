import React from 'react';
import Header from './header/Header';
import SearchSection from './search/SearchSection';
import Footer from './footer/Footer';

function SerachPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <SearchSection />
      </main>
      <Footer />
    </div>
  );
}

export default SerachPage;