import React from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import { Star, ShoppingCart, Heart, Plus } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const formatCAD = (price: number) => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(price);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-display font-bold text-brand-dark">Featured Arrivals</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:border-brand-dark transition-colors">
              &larr;
            </button>
            <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:border-brand-dark transition-colors">
              &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="group relative">
              
              {/* Image Container */}
              <div className="bg-brand-surface rounded-[2rem] p-6 mb-4 relative overflow-hidden transition-all duration-300 group-hover:bg-[#F0F0EB]">
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-brand-yellow text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-400 hover:text-brand-orange hover:shadow-md transition-all z-10">
                  <Heart size={16} />
                </button>
                
                <div className="aspect-square flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply filter contrast-105 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Quick Add Button showing on hover */}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  <Plus size={20} />
                </button>
              </div>

              {/* Info */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-brand-dark leading-tight group-hover:text-brand-orange transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold bg-gray-100 px-2 py-1 rounded-md">
                    <Star size={10} className="fill-brand-orange text-brand-orange" />
                    {product.rating}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-3">{product.brand}</p>
                <div className="text-xl font-display font-bold text-brand-dark">
                  {formatCAD(product.price)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;