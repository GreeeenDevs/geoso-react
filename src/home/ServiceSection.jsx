import React from 'react';
import ServiceCard from './ServiceCard';
import Button from '../header/Button';

function ServiceSection() {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b565294b9c4ddd18268b3cd9beaefefd33268177d4238856df840b00dbf1913?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d",
      title: "Varrição",
      description: "Consulte as sarjetas de ruas e calçadas em áreas de alto movimento de pedestres."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddd32db859ba42a70e4a6502c728efb46a71c20b07e6807c49cb0321600b38f2?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d",
      title: "Cata-bagulho",
      description: "Consulte remoção de objetos volumosos descartados nas calçadas em dias e horários previamente agendados"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2da66bf12eb11286379fb6d8cf7e0920c314ed95bcd0d7bfd7e8b8d08aabf441?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d",
      title: "Grandes corredores",
      description: "Consulte serviços completos de manutenção urbana em importantes avenidas."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea1559a894be924f6947d141ad89d528071370a89c86e30cf3ea6db15cd1cb5?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d",
      title: "Feiras",
      description: "Consulte a realização da limpeza, lavagem e o transporte de resíduos orgânicos para o destino adequado."
    }
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 -mt-2 bg-white max-md:px-5 max-md:py-24 max-md:mr-1 max-md:max-w-full">
      <div className="flex flex-col mb-0 w-full max-w-[1372px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start px-10 pb-32 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <Button variant="solid" color="emerald" className="self-center mt-20 max-md:mt-10">
          Conheça Nossos Serviços
        </Button>
      </div>
    </section>
  );
}

export default ServiceSection;