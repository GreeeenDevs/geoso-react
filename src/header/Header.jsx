import React from 'react';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import Button from './Button.jsx';

function Header() {
  return (
    <header className="flex gap-5 justify-between items-center py-4 pr-20 pl-9 max-w-full bg-white w-[1680px] max-md:px-5 max-md:mr-1">
      <Logo />
      <Navigation />
      <div className="flex gap-7 self-stretch my-auto text-sm font-medium tracking-tight text-center">
        <Button variant="outline" color="emerald">Área do Cliente</Button>
        <Button variant="solid" color="emerald">Entre em contato</Button>
      </div>
    </header>
  );
}

export default Header;