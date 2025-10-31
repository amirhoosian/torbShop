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
  productId: number;
  quantity: number;
}

export interface Category {
  id: number | string;
  name: string;
  slug: string;
  image?: string;
}

export interface User {
  id: number | string;
  name: string;
  email: string;
  role?: "admin" | "customer" | "moderator";
}
