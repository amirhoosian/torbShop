// Centralized project types
// Use: import type { Product, Banner, CartItem, Category, User } from "@/types";

export interface Banner {
  id: number;
  image: string;
  title?: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface CartItem {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
}

export interface Subcategory {
  id: number | string;
  name: string;
  slug: string;
  description?: string;
}

export interface Category {
  id: number | string;
  name: string;
  slug: string;
  image?: string;
  description?: string;
  subcategories?: Subcategory[];
}

export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface User {
  id: number | string;
  name: string;
  email: string;
  role?: "admin" | "customer" | "moderator";
  phone?: string;
  address?: Address;
  createdAt?: string;
  isActive?: boolean;
}

export interface CategoryCardProps {
  name: string;
  image: string;
}

export interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
}

export interface DealCarouselSectionProps {
  reverse?: boolean;
}

export interface BrandLogoTileProps {
  name: string;
  image: string;
  link: string;
}

export interface ProductPageProps {
  params: {
    id: string;
  };
}
