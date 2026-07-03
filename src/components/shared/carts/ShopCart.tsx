// components/ShopCart.tsx
import { ProductListItem } from "@/database/types";
import Image from "next/image";
import Link from "next/link";

interface ShopCartProps {
  product: ProductListItem;
}

export default function ShopCart({ product }: ShopCartProps) {
  const hasDiscount = product.discountPercentage > 0;

  return (
    <Link
      href={`/${product.slug}`}
      className="group flex flex-col w-full mx-auto cursor-pointer"
    >
      {/* Image Container - Corrected with square brackets [] */}
      <div className="relative w-full aspect-198/200 sm:aspect-295/298 bg-[#F2F2F2] rounded-[20px] overflow-hidden mb-3 flex items-center justify-center p-4">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 295px"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-0.5 sm:gap-1 px-1">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
          {product.name}
        </h3>

        {/* Pricing Logic - Added flex-wrap and responsive sizing */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 flex-wrap">
          {/* Final Price (Scales down gracefully on mobile screens) */}
          <span className="text-base sm:text-xl font-bold text-gray-900 whitespace-nowrap">
            ${product.finalPrice.toFixed(2)}
          </span>

          {/* Conditional Discount Display */}
          {hasDiscount && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs sm:text-base font-medium text-gray-400 line-through whitespace-nowrap">
                ${product.basePrice.toFixed(2)}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-red-500 bg-red-50 px-1.5 sm:px-2 py-0.5 rounded-full">
                -{product.discountPercentage}%
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
