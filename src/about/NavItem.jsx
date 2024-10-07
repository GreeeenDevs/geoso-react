import React from 'react';

function NavItem({ text, isActive }) {
  return (
    <div className={`basis-auto ${isActive ? 'text-emerald-500' : ''}`}>
      {text}
    </div>
  );
}

export default NavItem;