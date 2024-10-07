import React from 'react';
import Button from '../header/Button';

function SearchSection() {
  return (
    <section className="flex overflow-hidden flex-col px-20 py-20 w-full bg-white max-md:px-5 max-md:mr-1 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start text-5xl font-bold tracking-tighter leading-9 text-black max-md:max-w-full max-md:text-4xl max-md:leading-8">
                Pesquisa de Serviços
              </h2>
              <p className="mt-3 text-4xl tracking-tight leading-[68px] text-black text-opacity-80 max-md:max-w-full">
                Vizualize os pontos de limpeza urbana próximo de você!
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c04504347e6115155efdc9d42f3140f2aecda75c6a6c4daaf00b786719da268?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
              alt="Map showing urban cleaning points" 
              className="object-contain grow w-full aspect-[1.66] max-md:mt-10 max-md:max-w-full" 
            />
          </div>
        </div>
      </div>
      <Button variant="solid" color="emerald" className="self-center mt-24 max-md:mt-10">
        Procure por serviços na sua região!
      </Button>
    </section>
  );
}

export default SearchSection;