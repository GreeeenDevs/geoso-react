import React from 'react';

function ContentSection({ imageUrl, title, description, imageRight = false }) {
  const contentOrder = imageRight ? 'order-1' : 'order-2';
  const imageOrder = imageRight ? 'order-2' : 'order-1';

  return (
    <section className="overflow-hidden p-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full ${imageOrder}`}>
          <img loading="lazy" src={imageUrl} alt="" className="object-contain grow w-full aspect-[1.7] max-md:mt-10 max-md:max-w-full" />
        </div>
        <div className={`flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full ${contentOrder}`}>
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-2xl font-bold tracking-tight text-black">
              {title}
            </h2>
            <p className="mt-9 text-lg tracking-tight leading-8 text-black text-opacity-80 max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;