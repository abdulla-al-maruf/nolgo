export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
}

export interface MegaMenuItem {
  category: string;
  links: string[];
}
