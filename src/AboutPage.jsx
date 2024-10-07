import React from 'react';
import Header from './header/Header';
import Hero from './about/Hero';
import ContentSection from './about/ContentSection';
import Footer from './footer/Footer';

function AboutPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <ContentSection
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/276bfe8f759dc0750a4771608535aba0baeeb0fc610afd1e05ae6e4dbabfc9b4?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d"
        title="Sed ut perspiciatis unde omnis"
        description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem."
      />
      <ContentSection
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6141348e3985796e012e880db5bbeb501d42991f692fe3cb4a023875eda057cd?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d"
        title="Sed ut perspiciatis unde omnis"
        description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem."
        imageRight={true}
      />
      <Footer />
    </div>
  );
}

export default AboutPage;