import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Camera, Aperture, ArrowRight } from 'lucide-react';
import { MEGA_MENU_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white">
            <span className="font-display font-bold text-lg">N</span>
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-brand-dark">
            Nolgo<span className="text-brand-orange">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 h-full">
          {['Cameras', 'Lenses', 'Accessories'].map((item) => (
            <div 
              key={item}
              className="h-full flex items-center relative group"
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 font-medium text-sm text-gray-600 hover:text-brand-orange transition-colors py-2">
                {item} <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === item ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Creative Mega Menu */}
              {activeMenu === item && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 opacity-0 animate-in fade-in slide-in-from-top-2 duration-200 fill-mode-forwards">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>
                  
                  <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                    <h3 className="font-display font-bold text-xl text-brand-dark">Explore {item}</h3>
                    <a href="#" className="text-xs font-bold text-brand-orange flex items-center gap-1 hover:gap-2 transition-all">
                      VIEW ALL <ArrowRight size={14} />
                    </a>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {(item === 'Cameras' ? MEGA_MENU_ITEMS.cameras : item === 'Lenses' ? MEGA_MENU_ITEMS.lenses : MEGA_MENU_ITEMS.cameras).map((subItem, idx) => (
                      <div key={idx} className="group/card cursor-pointer">
                        <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-gray-100">
                          <img 
                            src={subItem.image} 
                            alt={subItem.name} 
                            className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors" />
                        </div>
                        <p className="text-center font-medium text-sm text-gray-800 group-hover/card:text-brand-orange transition-colors">{subItem.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">Studio</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">Used</a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex relative group">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-32 group-hover:w-64 bg-transparent border-b border-gray-300 py-1 text-sm focus:outline-none focus:border-brand-dark transition-all duration-300"
            />
            <Search className="absolute right-0 top-1 text-gray-400" size={18} />
          </div>

          <button className="text-gray-800 hover:text-brand-orange transition-colors">
            <User size={22} />
          </button>
          <button className="text-gray-800 hover:text-brand-orange transition-colors relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </button>
          
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu would go here */}
    </header>
  );
};

export default Header;