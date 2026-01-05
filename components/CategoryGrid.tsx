import React from 'react';
import { ArrowRight, Battery, Aperture, Zap } from 'lucide-react';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-dark mb-4">
              Our Product <br/>
              <span className="relative inline-block">
                 Details
                 <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                 </svg>
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-brand-dark"></div>
            <div className="w-10 h-10 rounded-full border border-brand-dark flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Large Image Feature */}
          <div className="md:col-span-8 bg-gray-200 rounded-3xl overflow-hidden relative group">
             <img 
               src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200" 
               alt="Camera Body" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-xl">
               <span className="text-xs font-bold text-gray-500 uppercase">Optical Zoom</span>
               <h3 className="text-xl font-bold text-brand-dark">Film Simulation Modes</h3>
             </div>
          </div>

          {/* Card 2: Technical Spec */}
          <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow">
             <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center mb-4">
               <Aperture size={24} className="text-brand-dark" />
             </div>
             <div>
               <h3 className="text-2xl font-bold mb-2">Film Lens</h3>
               <p className="text-gray-500 text-sm mb-4">Compatible with legacy glass for that vintage aesthetic.</p>
               <button className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold hover:bg-brand-dark hover:text-white transition-colors">Learn More &gt;</button>
             </div>
             <img 
               src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=400" 
               className="w-32 h-32 object-contain self-end -mb-4 mix-blend-multiply"
               alt="Lens"
             />
          </div>

          {/* Card 3: Battery/Power */}
          <div className="md:col-span-4 bg-brand-dark text-white rounded-3xl p-8 flex flex-col justify-center items-center relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-orange/20 to-transparent"></div>
             <Battery size={48} className="mb-4 relative z-10 text-brand-orange" />
             <h3 className="text-2xl font-bold relative z-10">All Day Power</h3>
             <p className="text-gray-400 text-center mt-2 relative z-10">USB-C PD Charging</p>
          </div>

          {/* Card 4: Action/Wide */}
          <div className="md:col-span-8 bg-[#E8E8E8] rounded-3xl p-8 flex items-center relative overflow-hidden">
             <div className="w-1/2 relative z-10">
               <h3 className="text-3xl font-display font-bold mb-4">Designed for Creatives</h3>
               <p className="text-gray-600 mb-6">Lens to the world. Capture sharp images and full HD video.</p>
               <button className="bg-brand-orange text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-brand-orange/30 hover:shadow-none transition-all">
                 Read More &gt;
               </button>
             </div>
             <div className="w-1/2 h-full absolute right-0 top-0">
               <img 
                 src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-full object-cover"
                 alt="Creative Studio"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;