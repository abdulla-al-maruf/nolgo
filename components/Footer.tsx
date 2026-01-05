import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 rounded-t-[3rem] mt-10">
      <div className="container mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div>
             <h2 className="text-5xl font-display font-bold mb-4">Let's create <br/> together.</h2>
             <p className="text-gray-400 max-w-md">Join our newsletter for exclusive drops, workshops, and photographer features.</p>
          </div>
          
          <div className="mt-8 md:mt-0 w-full md:w-auto">
            <div className="flex border-b border-gray-700 pb-2">
               <input 
                 type="email" 
                 placeholder="Enter your email address" 
                 className="bg-transparent text-white w-full md:w-64 focus:outline-none placeholder-gray-600"
               />
               <button className="text-brand-orange font-bold uppercase text-sm hover:text-white transition-colors flex items-center gap-2">
                 Join <ArrowRight size={16} />
               </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-gray-800 pt-12">
          
          <div>
            <h4 className="font-bold mb-6 text-brand-yellow">Explore</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Cameras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lenses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lighting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-yellow">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-yellow">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ambassadors</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-brand-yellow">Social</h4>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all">
                 <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all">
                 <Twitter size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all">
                 <Youtube size={18} />
               </a>
             </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-widest">
          <p>&copy; 2025 Nolgo Cam. All rights reserved.</p>
          <p>Designed for Creators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;