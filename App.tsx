import React from 'react';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 1. Promo Banner */}
      <PromoBanner />

      {/* 2. Sticky Header & Mega Menu */}
      <Header />

      <main className="flex-grow">
        {/* 3. Hero Banner */}
        <Hero />

        {/* 4. Product Categories Grid */}
        <CategoryGrid />

        {/* 5. Featured Products Grid */}
        <FeaturedProducts />

        {/* 6. SEO & Brand Story Section */}
        <BrandStory />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default App;
