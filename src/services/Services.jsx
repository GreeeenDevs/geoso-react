import React from 'react';
import ServiceList from './ServiceList';

const Services = () => {
  const servicesLeft = [
    "Lavagem especial de equipamentos públicos",
    "Limpeza e conservação de monumentos públicos",
    "Varrição manual e mecanizada de vias e logradouros públicos",
    "Varrição de vias públicas durante e pós feiras-livres",
    "Lavagem e desinfecção de vias públicas pós feiras-livres",
    "Coleta seletiva e transporte de resíduos sólidos orgânicos de feiras-livres",
    "Coleta e transporte de resíduos sólidos de varrição"
  ];

  const servicesRight = [
    "Limpeza e desobstrução de bueiros",
    "Bocas de lobo e bocas de leão",
    "Raspagem de terra e areia nas sarjetas",
    "Capinação de vias e logradouros públicos",
    "Pintura de meio fio, postes, muros e demais elementos",
    "Coleta programada e transporte de resíduos volumosos e entulhos",
    "Limpeza de áreas externas e internas de assentamentos urbanos informais"
  ];

  return (
    <section className="flex overflow-hidden flex-col items-start px-20 py-20 w-full bg-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <h2 className="text-2xl font-bold tracking-tight text-emerald-500">
        SERVIÇOS REALIZADOS
      </h2>
      <div className="mt-12 w-full max-w-[1308px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <ServiceList services={servicesLeft} />
          <ServiceList services={servicesRight} />
        </div>
      </div>
    </section>
  );
};

export default Services;