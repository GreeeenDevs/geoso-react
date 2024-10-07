import React from 'react';

function Button({ children, variant, color }) {
  const baseClasses = "flex flex-col justify-center p-px text-sm font-medium tracking-tight text-center";
  const variantClasses = {
    outline: `${baseClasses} border border-${color}-500 border-solid`,
    solid: `${baseClasses} bg-${color}-500 text-white`
  };
  const innerClasses = variant === 'outline' ? "px-4 py-2.5 bg-white rounded-md" : "px-3.5 py-2.5 rounded-md";

  return (
    <button className={variantClasses[variant]}>
      <div className={innerClasses}>
        {children}
      </div>
    </button>
  );
}

export default Button;