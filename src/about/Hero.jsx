import React from 'react';

function Hero() {
  return (
    <section className="flex overflow-hidden flex-col w-full text-5xl tracking-tighter text-black bg-white max-md:max-w-full max-md:text-4xl">
      <div className="flex relative flex-col px-16 pt-72 pb-52 w-full min-h-[600px] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7a411807a254f94aa42f3a62ef355fb30ec0b7baf728c8270991d1c3b8a071?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" alt="Background image for hero section" className="object-cover absolute inset-0 size-full" />
        <h1>Sobre Nós</h1>
      </div>
    </section>
  );
}

export default Hero;