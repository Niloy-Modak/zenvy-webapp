// @/database/types.ts

// ─── Enums ────────────────────────────────────────────────────────────────────

export type CategoryName = "shirt" | "t-shirt" | "jeans" | "hoodie" | "shorts";

export type Size = "S" | "M" | "L" | "XL" | "XXL";

export type OrderStatus = "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export type AuthProvider = "PASSWORD" | "GOOGLE" | "BOTH";

// ─── Category ─────────────────────────────────────────────────────────────────

export interface Category {
  id: string;
  name: CategoryName;
  slug: string;
}

// ─── Product Image ─────────────────────────────────────────────────────────────

export interface ProductImage {
  url: string;
  color: string | null; // null = generic image not tied to a color
}

// ─── Product Variant ──────────────────────────────────────────────────────────

export interface ProductVariant {
  id: string;
  color: string;
  size: Size;
  sku: string;
  stock: number;
  price: number | null; // null = use product basePrice
}

// ─── Variants grouped by color ────────────────────────────────────────────────

export type VariantsByColor = Record<
  string,
  {
    variantId: string;
    size: Size;
    stock: number;
  }[]
>;

// ─── Product (list shape — lightweight for product cards) ─────────────────────

export interface ProductListItem {
  id: string;
  name: string;
  slug: string;
  category: Category;
  basePrice: number;
  discountPercentage: number; // 0–100
  finalPrice: number;         // computed: basePrice * (1 - discountPercentage / 100)
  thumbnail: string;
  colors: string[];           // distinct colors e.g. ["red", "blue"]
  inStock: boolean;           // true if any variant has stock > 0
}

// ─── Product (detail shape — for product detail page) ─────────────────────────

export interface ProductDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: Category;
  basePrice: number;
  discountPercentage: number;
  finalPrice: number;
  images: ProductImage[];
  variantsByColor: VariantsByColor;
}

// ─── Cart ─────────────────────────────────────────────────────────────────────

export interface CartItem {
  variantId: string;
  productId: string;
  productName: string;
  slug: string;
  color: string;
  size: Size;
  quantity: number;
  unitPrice: number;   // finalPrice at the time of adding to cart
  thumbnail: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// ─── Order ────────────────────────────────────────────────────────────────────

export interface OrderItem {
  id: string;
  variantId: string;
  productName: string;
  color: string;
  size: Size;
  quantity: number;
  price: number; // snapshot price at time of purchase
}

export interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
  createdAt: string;
}

// ─── User ─────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  authProvider: AuthProvider;
  emailVerified: string | null;
  createdAt: string;
}

// ─── API Response wrappers ────────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface ApiError {
  error: string;
  code?: string;
}