// @/database/constants.ts

import { ProductListItem, ProductDetail } from "./types";

const getFinalPrice = (basePrice: number, discountPercentage: number): number =>
  Math.round(basePrice * (1 - discountPercentage / 100) * 100) / 100;

// ─── Product Cards (list page) ────────────────────────────────────────────────

export const shortProductList: ProductListItem[] = [
  {
    id: "prod_1",
    name: "Oxford Classic Shirt",
    slug: "oxford-classic-shirt",
    category: { id: "cat_1", name: "shirt", slug: "shirt" },
    basePrice: 49.99,
    discountPercentage: 20,
    finalPrice: getFinalPrice(49.99, 20),
    thumbnail: "/products/product_image.png",
    colors: ["white", "blue", "olive"],
    inStock: true,
  },
  {
    id: "prod_2",
    name: "Urban Graphic Tee",
    slug: "urban-graphic-tee",
    category: { id: "cat_2", name: "t-shirt", slug: "t-shirt" },
    basePrice: 29.99,
    discountPercentage: 0,
    finalPrice: getFinalPrice(29.99, 0),
    thumbnail: "/products/product_image.png",
    colors: ["black", "white", "red"],
    inStock: true,
  },
  {
    id: "prod_3",
    name: "Slim Fit Denim Jeans",
    slug: "slim-fit-denim-jeans",
    category: { id: "cat_3", name: "jeans", slug: "jeans" },
    basePrice: 69.99,
    discountPercentage: 15,
    finalPrice: getFinalPrice(69.99, 15),
    thumbnail: "/products/product_image.png",
    colors: ["indigo", "black", "grey"],
    inStock: true,
  },
  {
    id: "prod_4",
    name: "Essential Pullover Hoodie",
    slug: "essential-pullover-hoodie",
    category: { id: "cat_4", name: "hoodie", slug: "hoodie" },
    basePrice: 59.99,
    discountPercentage: 10,
    finalPrice: getFinalPrice(59.99, 10),
    thumbnail: "/products/product_image.png",
    colors: ["charcoal", "navy", "sand"],
    inStock: true,
  },
];

// ─── Product Details (detail page) ───────────────────────────────────────────

export const shortProductDetailsList: ProductDetail[] = [
  {
    id: "prod_1",
    name: "Oxford Classic Shirt",
    slug: "oxford-classic-shirt",
    description:
      "A timeless Oxford shirt crafted from 100% breathable cotton. Slim fit with a button-down collar, perfect for both casual and semi-formal occasions.",
    category: { id: "cat_1", name: "shirt", slug: "shirt" },
    basePrice: 49.99,
    discountPercentage: 20,
    finalPrice: getFinalPrice(49.99, 20),
    images: [
      { url: "/products/product_image.png",  color: "white" },
      { url: "/products/product_image.png",   color: "blue"  },
      { url: "/products/product_image.png",  color: "olive" },
    ],
    variantsByColor: {
      white: [
        { variantId: "var_1",  size: "M",   stock: 5 },
        { variantId: "var_2",  size: "L",   stock: 3 },
        { variantId: "var_3",  size: "XL",  stock: 2 },
        { variantId: "var_4",  size: "XXL", stock: 0 },
      ],
      blue: [
        { variantId: "var_5",  size: "M",   stock: 4 },
        { variantId: "var_6",  size: "L",   stock: 6 },
        { variantId: "var_7",  size: "XL",  stock: 1 },
        { variantId: "var_8",  size: "XXL", stock: 0 },
      ],
      olive: [
        { variantId: "var_9",  size: "M",   stock: 3 },
        { variantId: "var_10", size: "L",   stock: 3 },
        { variantId: "var_11", size: "XL",  stock: 0 },
        { variantId: "var_12", size: "XXL", stock: 2 },
      ],
    },
  },

  {
    id: "prod_2",
    name: "Urban Graphic Tee",
    slug: "urban-graphic-tee",
    description:
      "A relaxed-fit graphic t-shirt made from soft 180gsm jersey cotton. Features a bold front print with a crew neck and dropped shoulders.",
    category: { id: "cat_2", name: "t-shirt", slug: "t-shirt" },
    basePrice: 29.99,
    discountPercentage: 0,
    finalPrice: getFinalPrice(29.99, 0),
    images: [
      { url: "/products/product_image.png", color: "black" },
      { url: "/products/product_image.png", color: "white" },
      { url: "/products/product_image.png",   color: "red"   },
    ],
    variantsByColor: {
      black: [
        { variantId: "var_13", size: "S",  stock: 8  },
        { variantId: "var_14", size: "M",  stock: 10 },
        { variantId: "var_15", size: "L",  stock: 7  },
        { variantId: "var_16", size: "XL", stock: 3  },
      ],
      white: [
        { variantId: "var_17", size: "S",  stock: 5 },
        { variantId: "var_18", size: "M",  stock: 4 },
        { variantId: "var_19", size: "L",  stock: 2 },
        { variantId: "var_20", size: "XL", stock: 0 },
      ],
      red: [
        { variantId: "var_21", size: "S",  stock: 3 },
        { variantId: "var_22", size: "M",  stock: 6 },
        { variantId: "var_23", size: "L",  stock: 4 },
        { variantId: "var_24", size: "XL", stock: 1 },
      ],
    },
  },

  {
    id: "prod_3",
    name: "Slim Fit Denim Jeans",
    slug: "slim-fit-denim-jeans",
    description:
      "Classic slim-fit jeans in premium stretch denim. Five-pocket styling with a mid-rise waist. Comfortable enough for all-day wear without sacrificing style.",
    category: { id: "cat_3", name: "jeans", slug: "jeans" },
    basePrice: 69.99,
    discountPercentage: 15,
    finalPrice: getFinalPrice(69.99, 15),
    images: [
      { url: "/products/product_image.png", color: "indigo" },
      { url: "/products/product_image.png",  color: "black"  },
      { url: "/products/product_image.png",   color: "grey"   },
    ],
    variantsByColor: {
      indigo: [
        { variantId: "var_25", size: "S",  stock: 4 },
        { variantId: "var_26", size: "M",  stock: 6 },
        { variantId: "var_27", size: "L",  stock: 5 },
        { variantId: "var_28", size: "XL", stock: 2 },
      ],
      black: [
        { variantId: "var_29", size: "S",  stock: 3 },
        { variantId: "var_30", size: "M",  stock: 7 },
        { variantId: "var_31", size: "L",  stock: 4 },
        { variantId: "var_32", size: "XL", stock: 0 },
      ],
      grey: [
        { variantId: "var_33", size: "S",  stock: 2 },
        { variantId: "var_34", size: "M",  stock: 3 },
        { variantId: "var_35", size: "L",  stock: 1 },
        { variantId: "var_36", size: "XL", stock: 0 },
      ],
    },
  },

  {
    id: "prod_4",
    name: "Essential Pullover Hoodie",
    slug: "essential-pullover-hoodie",
    description:
      "A heavyweight 320gsm fleece pullover hoodie with a kangaroo pocket and adjustable drawstring hood. Brushed interior for extra warmth.",
    category: { id: "cat_4", name: "hoodie", slug: "hoodie" },
    basePrice: 59.99,
    discountPercentage: 10,
    finalPrice: getFinalPrice(59.99, 10),
    images: [
      { url: "/products/product_image.png", color: "charcoal" },
      { url: "/products/product_image.png",     color: "navy"     },
      { url: "/products/product_image.png",     color: "sand"     },
    ],
    variantsByColor: {
      charcoal: [
        { variantId: "var_37", size: "S",   stock: 3 },
        { variantId: "var_38", size: "M",   stock: 5 },
        { variantId: "var_39", size: "L",   stock: 4 },
        { variantId: "var_40", size: "XL",  stock: 2 },
        { variantId: "var_41", size: "XXL", stock: 1 },
      ],
      navy: [
        { variantId: "var_42", size: "S",   stock: 2 },
        { variantId: "var_43", size: "M",   stock: 6 },
        { variantId: "var_44", size: "L",   stock: 5 },
        { variantId: "var_45", size: "XL",  stock: 0 },
        { variantId: "var_46", size: "XXL", stock: 0 },
      ],
      sand: [
        { variantId: "var_47", size: "S",   stock: 4 },
        { variantId: "var_48", size: "M",   stock: 3 },
        { variantId: "var_49", size: "L",   stock: 2 },
        { variantId: "var_50", size: "XL",  stock: 1 },
        { variantId: "var_51", size: "XXL", stock: 0 },
      ],
    },
  },
];