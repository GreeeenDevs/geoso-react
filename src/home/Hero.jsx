import React from 'react';
import Button from '../header/Button';

function Hero() {
  return (
    <section className="flex z-10 flex-col px-1 pb-2 w-full bg-white max-md:max-w-full">
      <div className="flex relative flex-col justify-center items-start px-20 py-64 min-h-[773px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc8d2cf535b143471ca1c7c38209ea068458fa64d08fa84b422c2d8a78f9b4ac?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
          alt="Urban cleaning background" 
          className="object-cover absolute inset-0 size-full" 
        />
        <div className="flex relative flex-col mb-0 max-w-full w-[648px] max-md:mb-2.5">
          <h1 className="z-10 mt-0 text-6xl tracking-tighter text-black leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[64px]">
            Geo-SO, especialista em limpeza urbana
          </h1>
          <Button variant="solid" color="emerald" className="self-start mt-16 max-md:mt-10">
            Saiba Mais!
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;