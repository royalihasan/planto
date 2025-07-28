export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  lightRequirement: 'Low' | 'Medium' | 'High';
  wateringFrequency: string;
  size: string;
  features: string[];
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  category: string;
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  plantCount: number;
}