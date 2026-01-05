import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-dot-grid relative overflow-hidden pt-10 pb-20">
      <div className="container mx-auto px-6 relative">
        
        {/* Top Header Layout from reference */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-brand-yellow/30 text-brand-dark text-xs font-bold uppercase tracking-wider rounded-full border border-brand-yellow">New Arrival</span>
              <span className="text-xs font-mono text-gray-500">(01) — 2025</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-brand-dark leading-[0.9] tracking-tighter">
              Fujifilm <br />
              <span className="text-brand-orange">GFX 100S</span>
            </h1>
          </div>
          
          <div className="hidden lg:block max-w-xs mb-4">
             <p className="text-gray-600 font-medium leading-relaxed">
               The new standard in large format. 102MP sensor, in-body image stabilization, and 4K/30p video.
             </p>
          </div>
        </div>

        {/* Main Display Area */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-brand-dark rounded-[2rem] overflow-hidden flex items-center shadow-2xl">
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50"></div>
          
          {/* Content inside dark card */}
          <div className="relative z-10 w-full h-full p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
            
            {/* Left Info */}
            <div className="text-white space-y-6 md:w-1/3">
              <h3 className="text-3xl md:text-4xl font-display leading-tight">
                102 Megapixel <br/>
                <span className="font-light text-gray-400">Large Format</span>
              </h3>
              
              <div className="flex gap-4">
                <button className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center gap-2">
                  Pre-order <ArrowRight size={18} />
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Play size={18} fill="currentColor" />
                </button>
              </div>
            </div>

            {/* Product Image Floating */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[60%] lg:w-[50%] pointer-events-none">
              <img 
                src="https://pngimg.com/d/photo_camera_PNG101648.png" 
                alt="Fujifilm GFX 100S" 
                className="w-full h-auto drop-shadow-2xl animate-in fade-in zoom-in duration-1000"
              />
            </div>

            {/* Right Specs */}
            <div className="md:w-1/3 flex flex-col items-end text-right mt-8 md:mt-0">
               <div className="flex text-brand-yellow mb-4">
                 {'★★★★★'.split('').map((s, i) => <span key={i} className="text-xl">{s}</span>)}
               </div>
               <p className="text-gray-400 text-sm max-w-[200px] mb-8 italic">
                 "I couldn't be happier with my new Camera. The craftsmanship is impeccable."
               </p>
               
               <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-xs">
                 <h4 className="text-white font-bold mb-1">Video Specs</h4>
                 <p className="text-gray-400 text-xs">4K/30p 4:2:0 10-bit video recording internal.</p>
                 <a href="#" className="text-brand-orange text-xs font-bold mt-4 block hover:underline">Read Full Specs &gt;</a>
               </div>
            </div>

          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
               <img src="https://pngimg.com/d/photo_camera_PNG101648.png" className="w-8" />
            </button>
            <button className="w-12 h-12 rounded-xl border border-brand-orange bg-brand-orange/20 flex items-center justify-center">
               <img src="https://pngimg.com/d/photo_camera_PNG101648.png" className="w-8" />
            </button>
            <button className="w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
               <img src="https://pngimg.com/d/photo_camera_PNG101648.png" className="w-8" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;