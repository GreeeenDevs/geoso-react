import React from 'react';

function Footer() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbb920c589084f08d137cfea907e1cc23329d062d6de8972ea54dd468d432de6?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/64b082cf2e9cdcfc0ce24c587a118398dabbe8fad2505b50e71adfec0ba5063b?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f3a42bf747c388cc061331b9ce9a9125b1c7267a873c118538bd9b71b4038?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d", alt: "Instagram" }
  ];

  return (
    <footer className="flex flex-wrap gap-5 justify-between p-10 max-w-full bg-emerald-500 w-[1680px] max-md:px-5 max-md:mr-1">
      <div className="text-xs font-medium leading-6 text-black">
        © 2024 Geo-SO. Todos os direitos reservados.
        <br />
        Desenvolvido por{" "}
      </div>
      <div className="flex flex-wrap gap-10 self-start max-md:max-w-full">
        <div className="flex gap-4 self-start text-xs font-medium leading-6 text-black">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf87ba0ccc05b8c0098751f1a1e20643700afeafed8ab63ccadd9c0c3a7bc8b6?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
            alt="Phone icon" 
            className="object-contain shrink-0 aspect-square w-[34px]" 
          />
          <div>(11) 000-000-000</div>
        </div>
        <div className="flex gap-10 items-start">
          {socialIcons.map((icon, index) => (
            <img 
              key={index}
              loading="lazy" 
              src={icon.src} 
              alt={icon.alt} 
              className="object-contain shrink-0 aspect-square w-[34px]" 
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;