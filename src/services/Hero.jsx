import React from 'react';

const Hero = () => {
  return (
    <section className="flex overflow-hidden flex-col w-full text-5xl tracking-tighter text-black bg-white max-md:max-w-full max-md:text-4xl">
      <div className="flex relative flex-col px-16 pt-72 pb-52 w-full min-h-[600px] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/17a27aba776330ba6b585dcd93c80e72a151d0771ceebe7d62d78c03bbda1319?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
          alt="Background image of services" 
          className="object-cover absolute inset-0 size-full" 
        />
        <h1>Serviços Prestados</h1>
      </div>
    </section>
  );
};

export default Hero;