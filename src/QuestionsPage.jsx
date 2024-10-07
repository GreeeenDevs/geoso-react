import React from 'react';
import Header from './header/Header';
import Hero from './faq/Hero';
import FAQList from './faq/FAQList';
import Footer from './footer/Footer';

function FrequentlyAskedQuestions() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <FAQList />
      <Footer />
    </div>
  );
}

export default FrequentlyAskedQuestions;