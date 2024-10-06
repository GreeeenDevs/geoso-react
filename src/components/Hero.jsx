/**
 * This code was generated by Builder.io.
 */
import React from "react";

function Hero() {
  return (
    <section className="flex z-10 flex-col px-1 pb-2 w-full bg-white max-md:max-w-full">
      <div className="flex relative flex-col justify-center items-start px-20 py-64 min-h-[773px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c0975ebaa89545cf29204a99d999e78de54683c658d7b17be4413cd0803516e?placeholderIfAbsent=true&apiKey=50540d800e854c5199b8f44d34dba6f8"
          alt="Urban cleaning background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 max-w-full w-[648px] max-md:mb-2.5">
          <h1 className="z-10 mt-0 text-6xl tracking-tighter text-black leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[64px]">
            Geo-SO, especialista em limpeza urbana
          </h1>
          <button className="self-start px-12 py-4 mt-16 text-lg font-medium tracking-tight text-center text-white bg-emerald-500 rounded-md max-md:px-5 max-md:mt-10">
            Saiba Mais!
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;