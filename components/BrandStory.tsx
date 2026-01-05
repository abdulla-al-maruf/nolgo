import React from 'react';
import { BRAND_STORY_TEXT } from '../constants';
import { ArrowDown } from 'lucide-react';

const BrandStory: React.FC = () => {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Typography Section */}
          <div>
            <h2 className="text-6xl md:text-7xl font-display font-bold text-brand-dark leading-none mb-8">
              Who <br/>
              We are
            </h2>
            
            <div className="flex items-start gap-4 mb-8">
               <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white shrink-0 mt-1">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M12 5v14M5 12l7 7 7-7"/>
                 </svg>
               </div>
               <p className="text-xl text-gray-600 leading-relaxed font-light">
                 {BRAND_STORY_TEXT}
               </p>
            </div>

            {/* Geometric Art Element */}
            <div className="relative h-32 w-32">
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-brand-orange rounded-b-full"></div>
               <div className="absolute top-4 left-4 w-4 h-4 bg-black rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Feature Block */}
          <div className="relative">
             {/* Yellow Band */}
             <div className="absolute top-1/2 -translate-y-1/2 left-[-20%] w-[140%] h-64 bg-brand-yellow -z-10 rotate-[-2deg]"></div>
             
             {/* 3D Camera Illustration Placeholder */}
             <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100 relative">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="font-bold text-lg">Precision & Clarity</h4>
                    <p className="text-xs text-gray-500">High-regulation sensors</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1616423664033-63518d2c604e?auto=format&fit=crop&q=80&w=100" className="w-12 h-12 rounded-lg object-cover" />
                </div>
                
                <button className="w-full bg-brand-orange text-white py-3 rounded-full font-bold mb-6 hover:bg-orange-600 transition-colors">
                  Learn More &gt;
                </button>

                <div className="space-y-4">
                  <div className="flex justify-between items-center group cursor-pointer">
                    <span className="font-bold">Dynamic Range</span>
                    <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center group-hover:rotate-90 transition-transform">
                      <ArrowDown size={14} />
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                  <div className="flex justify-between items-center group cursor-pointer">
                    <span className="font-bold">Speed & Performance</span>
                    <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center group-hover:rotate-90 transition-transform">
                      <ArrowDown size={14} />
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;