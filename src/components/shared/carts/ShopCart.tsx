// components/ShopCart.tsx
"use client";

import { ProductListItem } from "@/database/types/product.type";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../ui/FavoriteButton";
import { useState } from "react";

interface ShopCartProps {
  product: ProductListItem;
}

export default function ShopCart({ product }: ShopCartProps) {
  const hasDiscount = product.discountPercentage > 0;
  const [isClickingFav, setIsClickingFav] = useState(false);

  const handleContainerClick = (e: React.MouseEvent) => {
    // If clicking favorite button area, don't navigate
    if (isClickingFav) {
      e.preventDefault();
      setIsClickingFav(false);
      return;
    }
  };

  return (
    <Link
      href={`/${product.slug}`}
      className="group flex flex-col w-full mx-auto cursor-pointer"
      onClick={handleContainerClick}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-198/200 sm:aspect-295/298 bg-[#F2F2F2] rounded-[20px] overflow-hidden mb-3 flex items-center justify-center p-4 group">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 295px"
        />

        {/* Favorite Button Wrapper */}
        <div
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsClickingFav(true);
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsClickingFav(false);
          }}
        >
          <FavoriteButton productId={product.slug} variant="inline" size="md" />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-0.5 sm:gap-1 px-1">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
          {product.name}
        </h3>

        {/* Pricing Logic */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 flex-wrap">
          {/* Final Price */}
          <span className="text-base sm:text-xl font-medium text-gray-900 whitespace-nowrap">
            ${product.finalPrice.toFixed(2)}
          </span>

          {/* Conditional Discount Display */}
          {hasDiscount && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs sm:text-base font-medium text-gray-400 line-through whitespace-nowrap">
                ${product.basePrice.toFixed(2)}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-red-500 bg-red-50 px-1.5 sm:px-2 py-0.5 rounded-full">
                -{product.discountPercentage}%
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
