import React from 'react';

function FAQItem({ question }) {
  return (
    <div className="flex items-center p-4 mt-4 rounded-lg border border-solid bg-neutral-100 border-zinc-300 min-h-[54px]">
      <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
          {question}
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f10e1d095a3de92b7e2cb7c7a6aece65f801c6828bb3a013de45400e47cae40d?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
      </div>
    </div>
  );
}

export default FAQItem;