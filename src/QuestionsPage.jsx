import React from 'react';
import Hero from './faq/Hero';
import FAQList from './faq/FAQList';

function FrequentlyAskedQuestions() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FAQList />
    </div>
  );
}

export default FrequentlyAskedQuestions;