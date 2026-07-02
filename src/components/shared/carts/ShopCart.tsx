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
      className="group flex flex-col cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-198/200 sm:aspect-295/298 bg-[#F2F2F2] rounded-[20px] overflow-hidden mb-4 flex items-center justify-center p-4">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 198px, 295px"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-base font-semibold text-gray-900 truncate">
          {product.name}
        </h3>

        {/* Pricing Logic */}
        <div className="flex items-center gap-2 mt-1">
          {/* Final Price (Always shown, either discounted or regular) */}
          <span className="text-xl font-bold text-gray-900">
            ${product.finalPrice.toFixed(2)}
          </span>

          {/* Conditional Discount Display */}
          {hasDiscount && (
            <>
              <span className="text-base font-medium text-gray-400 line-through">
                ${product.basePrice.toFixed(2)}
              </span>
              <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full ml-1">
                -{product.discountPercentage}%
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}