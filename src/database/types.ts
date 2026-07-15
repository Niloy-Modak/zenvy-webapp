// @/database/types.ts

// ─────────────────────────────────────────
// CATEGORY
// ─────────────────────────────────────────
export type CategoryName =
  | "shirt"
  | "t-shirt"
  | "jeans"
  | "hoodie"
  | "shorts"
  | "pants";

export type ClothingSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";
export type PantsSize = "28" | "30" | "32" | "34" | "36" | "38";
export type Size = ClothingSize | PantsSize;

export type SizeSystem = "clothing" | "pants";

export interface Category {
  id: string;
  name: CategoryName;
  slug: string;
  sizeSystem: SizeSystem;
  image: string | null;
}

// ─────────────────────────────────────────
// IMAGE
// ─────────────────────────────────────────
export interface ProductImage {
  url: string;
  color: string | null;
}

// ─────────────────────────────────────────
// VARIANTS GROUPED BY COLOR
// ─────────────────────────────────────────
export type VariantsByColor = Record<
  string,
  {
    hexCode: string;
    variants: {
      variantId: string;
      size: string;
      stock: number;
    }[];
  }
>;

// ─────────────────────────────────────────
// PRODUCT — List
// ─────────────────────────────────────────
export interface ProductListItem {
  id: string;
  name: string;
  slug: string;
  category: Category;
  basePrice: number;
  discountPercentage: number;
  finalPrice: number;
  thumbnail: string;
  colors: {
    name: string;
    hexCode: string;
  }[];
  inStock: boolean;
}

// ─────────────────────────────────────────
// PRODUCT — Detail
// ─────────────────────────────────────────
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

// ─────────────────────────────────────────
// FILTER & PAGINATION
// ─────────────────────────────────────────
export interface FilterOptions {
  categories: {
    name: string;
    slug: string;
    count: number;
  }[];
  sizes: string[];
  colors: {
    name: string;
    hexCode: string;
  }[];
  priceRange: {
    min: number;
    max: number;
  };
}

export interface Pagination {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface ProductListResponse {
  filters: FilterOptions;
  products: ProductListItem[];
  pagination: Pagination;
}

// ─────────────────────────────────────────
// QUERY PARAMS
// ─────────────────────────────────────────
export interface ProductQueryParams {
  category?: string;
  sizes?: string[];
  colors?: string[];
  minPrice?: number;
  maxPrice?: number;
  sort?: "newest" | "price_low" | "price_high" | "discount";
  page?: number;
  perPage?: number;
}
