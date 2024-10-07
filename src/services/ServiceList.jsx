import React from 'react';

const ServiceList = ({ services }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <ul className="self-stretch my-auto text-base font-medium leading-8 text-neutral-800 max-md:mt-10 max-md:max-w-full">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;