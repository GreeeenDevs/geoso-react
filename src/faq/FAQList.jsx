import React from 'react';
import FAQItem from './FAQItem';

function FAQList() {
  const questions = [
    "Pergunta ?",
    "Pergunta ?",
    "Pergunta ?",
    "Pergunta ?"
  ];

  return (
    <section className="flex overflow-hidden gap-2.5 items-start px-2.5 py-24 leading-snug bg-white font-[number:var(--sds-typography-body-font-weight-strong)] min-h-[476px] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)]">
      <div className="flex flex-col pr-9 pb-6 min-w-[240px] w-[1496px]">
        {questions.map((question, index) => (
          <FAQItem key={index} question={question} />
        ))}
      </div>
    </section>
  );
}

export default FAQList;