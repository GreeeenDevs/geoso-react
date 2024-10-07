import React from 'react';

function SearchSection() {
  return (
    <section className="flex overflow-hidden flex-col w-full text-base tracking-tight bg-white text-black text-opacity-80 max-md:max-w-full">
      <div className="flex relative flex-col justify-center items-start px-20 py-56 w-full min-h-[960px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e028a329f2ba5510a71e9739cd605a862371a91a926cd8c19f178455f8bdfedb?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col px-16 pt-20 pb-32 -mb-11 max-w-full bg-white border border-solid border-black border-opacity-50 w-[622px] max-md:px-5 max-md:pb-24 max-md:mb-2.5">
          <h2 className="self-start text-2xl font-bold tracking-tight text-black">
            Pesquisa de Serviços
          </h2>
          <form>
            <label htmlFor="cepInput" className="sr-only">Pesquise por CEP</label>
            <input
              id="cepInput"
              type="text"
              placeholder="Pesquise por CEP"
              className="px-3.5 pt-2.5 pb-6 mt-16 leading-relaxed bg-white border border-solid border-black border-opacity-50 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full"
            />
            <label htmlFor="serviceList" className="sr-only">Lista de Serviços</label>
            <select
              id="serviceList"
              className="px-3.5 pt-2.5 pb-6 mt-7 leading-relaxed bg-white border border-solid border-black border-opacity-50 w-full max-md:pr-5 max-md:max-w-full"
            >
              <option value="">Lista de Serviços</option>
            </select>
            <button type="submit" className="self-start px-7 py-4 mt-14 mb-0 font-medium text-center text-white whitespace-nowrap bg-emerald-500 rounded-md max-md:px-5 max-md:mt-10 max-md:mb-2.5">
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;