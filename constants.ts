import { Product, Category, MegaMenuItem } from './types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    brand: 'Sony',
    name: 'Alpha a7 IV',
    price: 3199.99,
    rating: 4.9,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1624823183492-91eb7dd46654?auto=format&fit=crop&q=80&w=800',
    badge: 'Flagship'
  },
  {
    id: '2',
    brand: 'Canon',
    name: 'EOS R6 Mark II',
    price: 3299.00,
    rating: 4.8,
    reviewCount: 85,
    image: 'https://images.unsplash.com/photo-1616423664033-63518d2c604e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    brand: 'Nikon',
    name: 'Z8 Mirrorless',
    price: 5299.99,
    rating: 5.0,
    reviewCount: 42,
    image: 'https://images.unsplash.com/photo-1598414002636-64dc2545e8c1?auto=format&fit=crop&q=80&w=800',
    badge: 'Pro Choice'
  },
  {
    id: '4',
    brand: 'Fujifilm',
    name: 'X-T5 Body',
    price: 2250.00,
    rating: 4.7,
    reviewCount: 64,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
  }
];

// Expanded for Visual Mega Menu
export const MEGA_MENU_ITEMS = {
  cameras: [
    { name: 'Mirrorless', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300' },
    { name: 'DSLR', image: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?auto=format&fit=crop&q=80&w=300' },
    { name: 'Cinema', image: 'https://images.unsplash.com/photo-1589873426803-0897f7dfd3d4?auto=format&fit=crop&q=80&w=300' },
    { name: 'Action', image: 'https://images.unsplash.com/photo-1526402978125-f1d6df91cbac?auto=format&fit=crop&q=80&w=300' }
  ],
  lenses: [
    { name: 'Prime', image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=300' },
    { name: 'Zoom', image: 'https://images.unsplash.com/photo-1505670984910-c08191f6df06?auto=format&fit=crop&q=80&w=300' },
    { name: 'Macro', image: 'https://images.unsplash.com/photo-1595568578506-646e7f867499?auto=format&fit=crop&q=80&w=300' }
  ]
};

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    title: 'Camera Bodies',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cat-2',
    title: 'Professional Lenses',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cat-3',
    title: 'Studio & Lighting',
    image: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&q=80&w=800'
  }
];

export const MEGA_MENU_DATA: MegaMenuItem[] = [
  {
    category: 'Brands',
    links: ['Sony', 'Canon', 'Nikon', 'Fujifilm', 'Panasonic', 'Leica']
  },
  {
    category: 'Cameras',
    links: ['Mirrorless', 'DSLR', 'Medium Format', 'Point & Shoot', 'Film Cameras']
  },
  {
    category: 'Lenses',
    links: ['Zoom Lenses', 'Prime Lenses', 'Macro', 'Cinema Lenses', 'Lens Filters']
  },
  {
    category: 'Used Gear',
    links: ['Shop All Used', 'Trade-In Program', 'Condition Ratings', 'New Arrivals']
  }
];

export const BRAND_STORY_TEXT = `We believe that every photograph tells a story, and every story deserves to be captured with precision, clarity, and soul. Founded by a team of passionate photographers and engineers, Nolgo Cam exists at the intersection of technology and art. We curate tools that don't just record moments—they immortalize them.`;
