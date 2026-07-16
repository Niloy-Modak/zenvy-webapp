"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductDetail } from "@/database/types/product.type";
import FavoriteButton from "@/components/shared/ui/FavoriteButton";

// ─── Size display label ───────────────────────────────────────────────────────
// Clothing sizes get full labels, pants sizes (numbers) display as-is
const CLOTHING_SIZE_LABELS: Record<string, string> = {
  XS: "X-Small",
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "X-Large",
  XXL: "XX-Large",
};

function getSizeLabel(size: string, sizeSystem: "clothing" | "pants"): string {
  if (sizeSystem === "pants") return size; // "30", "32", "34" — show as-is
  return CLOTHING_SIZE_LABELS[size] ?? size; // fallback to raw value if unknown
}

// ─────────────────────────────────────────────────────────────────────────────

export default function ProductDetailClient({
  product,
}: {
  product: ProductDetail;
}) {
  const colorEntries = Object.entries(product.variantsByColor);
  const initialColor = colorEntries[0][0];

  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // ← string, not Size
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]?.url ?? "");

  const currentColorData = product.variantsByColor[selectedColor];
  const sizeSystem = product.category.sizeSystem; // "clothing" | "pants"

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedSize(null);
    const match = product.images.find((img) => img.color === color);
    if (match) setMainImage(match.url);
  };

  const handleThumbnailClick = (imgUrl: string, imgColor: string | null) => {
    setMainImage(imgUrl);
    if (imgColor && product.variantsByColor[imgColor]) {
      setSelectedColor(imgColor);
      setSelectedSize(null);
    }
  };

  return (
    <section className="overflow-x-hidden">
      <div className="py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 standard-width min-w-0">
          {/* ── LEFT: Image Gallery ── */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 lg:w-[55%] w-full min-w-0">
            {/* Thumbnails */}
            <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-visible w-full sm:w-auto pb-2 sm:pb-0">
              {product.images.map((img, i) => {
                const isActive =
                  img.color !== null
                    ? img.color === selectedColor
                    : mainImage === img.url;

                return (
                  <button
                    key={i}
                    onClick={() => handleThumbnailClick(img.url, img.color)}
                    className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-200 bg-[#F5F5F5]
                      ${
                        isActive
                          ? "border-gray-900 shadow-sm"
                          : "border-transparent hover:border-gray-300"
                      }`}
                  >
                    <Image
                      src={img.url}
                      alt={`${product.name} ${img.color ?? ""}`}
                      fill
                      className="object-contain mix-blend-multiply p-2"
                    />
                  </button>
                );
              })}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-square rounded-4xl overflow-hidden w-full min-w-0">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-contain mix-blend-multiply sm:p-8 lg:p-0 transition-all duration-300"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div className="flex flex-col gap-5 lg:w-[45%] lg:pt-2 w-full min-w-0">
            {/* Title + Favorite */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight uppercase tracking-tight flex-1">
                {product.name}
              </h1>
              <FavoriteButton
                productId={product.slug}
                variant="inline"
                size="lg"
              />
            </div>

            {/* Price + Discount */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-medium text-gray-900">
                ${product.finalPrice.toFixed(2)}
              </span>
              {product.discountPercentage > 0 && (
                <>
                  <span className="text-xl font-medium text-primary/30 line-through">
                    ${product.basePrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-medium text-red-500 bg-red-50 px-2.5 py-1 rounded-full">
                    -{product.discountPercentage}%
                  </span>
                </>
              )}
            </div>

            <hr className="border-gray-100" />

            {/* Description */}
            <p className="text-paragraph">{product.description}</p>

            {/* Color Selector */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Select Color
                {/* Show selected color name next to label */}
                {selectedColor && (
                  <span className="ml-2 font-normal text-gray-400 capitalize">
                    — {selectedColor}
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                {colorEntries.map(([colorName, colorData]) => (
                  <button
                    key={colorName}
                    onClick={() => handleColorChange(colorName)}
                    title={colorName}
                    className={`w-9 h-9 rounded-full border-2 transition-all duration-200 flex items-center justify-center
                      ${
                        selectedColor === colorName
                          ? "border-gray-900 scale-110 shadow"
                          : "border-transparent hover:border-gray-400"
                      }`}
                    style={{ backgroundColor: colorData.hexCode }}
                  >
                    {selectedColor === colorName && (
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8l3.5 3.5L13 5"
                          stroke="#fff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Choose Size
                {/* Hint: waist size for pants */}
                {sizeSystem === "pants" && (
                  <span className="ml-2 font-normal text-gray-400">
                    (waist in inches)
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentColorData.variants.map(({ variantId, size, stock }) => {
                  const outOfStock = stock === 0;
                  const isSelected = selectedSize === size;

                  return (
                    <button
                      key={variantId}
                      onClick={() => !outOfStock && setSelectedSize(size)}
                      disabled={outOfStock}
                      title={outOfStock ? "Out of stock" : size}
                      className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200
                        ${
                          isSelected
                            ? "bg-gray-900 text-white border-gray-900"
                            : outOfStock
                              ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed line-through"
                              : "bg-white text-gray-700 border-gray-200 hover:border-gray-900 hover:text-gray-900"
                        }`}
                    >
                      {getSizeLabel(size, sizeSystem)}{" "}
                      {/* ← uses helper, no crash */}
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Quantity + Add to Cart */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              <div className="flex items-center gap-4 bg-gray-100 rounded-full px-5 py-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-gray-700 hover:text-gray-900 transition-colors text-lg leading-none"
                >
                  −
                </button>
                <span className="text-sm font-semibold text-gray-900 w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-gray-700 hover:text-gray-900 transition-colors text-lg leading-none"
                >
                  +
                </button>
              </div>

              <button
                disabled={!selectedSize}
                className={`flex-1 w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-200
                  ${
                    selectedSize
                      ? "bg-gray-900 text-white hover:bg-gray-700 active:scale-95"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
              >
                {selectedSize ? "Add to Cart" : "Select a Size"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
