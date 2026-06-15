// @/database/types.ts
export interface Category {
  product: string;
  slug: string;
}

export interface ColorOption {
  color: string;
  colorHex: string;
}

export interface Product {
  id: string;
  productName: string;
  slug: string;
  category: Category;
  regularPrice: number;
  discountPercent: number;
  finalPrice: number;
  thumbnail: string;
  availableColors: ColorOption[];
  availableSizes: string[];
}