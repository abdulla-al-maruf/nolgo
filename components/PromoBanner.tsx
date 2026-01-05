import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white text-xs md:text-sm py-2.5 text-center font-medium tracking-wide border-b border-gray-800">
      <span className="text-brand-orange font-bold mr-2">HOLIDAY DEAL:</span>
      Save up to $500 on Sony Alpha Kits. <span className="underline decoration-brand-orange decoration-2 underline-offset-4 ml-1 cursor-pointer">Shop Now</span>
    </div>
  );
};

export default PromoBanner;