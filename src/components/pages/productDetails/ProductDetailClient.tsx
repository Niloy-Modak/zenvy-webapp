"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductDetail, Size } from "@/database/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <svg key={star} className="w-4 h-4" viewBox="0 0 20 20" fill="none">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${star}`}>
                    <stop offset="50%" stopColor="#FBBF24" />
                    <stop offset="50%" stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
                <path
                  d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z"
                  fill={`url(#half-${star})`}
                />
              </>
            ) : (
              <path
                d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z"
                fill={filled ? "#FBBF24" : "#D1D5DB"}
              />
            )}
          </svg>
        );
      })}
      <span className="text-sm text-gray-500 ml-1">{rating}/5</span>
    </div>
  );
}

const SIZE_LABELS: Record<Size, string> = {
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "X-Large",
  XXL: "XX-Large",
};

export default function ProductDetailClient({
  product,
}: {
  product: ProductDetail;
}) {
  const colorEntries = Object.entries(product.variantsByColor);
  const initialColor = colorEntries[0][0];

  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]?.url ?? "");

  const currentColorData = product.variantsByColor[selectedColor];

  // ── Color swatch clicked → update color + image + reset size ──────────────
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedSize(null);
    const match = product.images.find((img) => img.color === color);
    if (match) setMainImage(match.url);
  };

  // ── Thumbnail clicked → update image + sync color swatch + reset size ─────
  const handleThumbnailClick = (imgUrl: string, imgColor: string | null) => {
    setMainImage(imgUrl);
    if (imgColor && product.variantsByColor[imgColor]) {
      // Only sync color if this image maps to a known color variant
      setSelectedColor(imgColor);
      setSelectedSize(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* ── LEFT: Image Gallery ── */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 lg:w-[55%]">
            {/* Thumbnails */}
            <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {product.images.map((img, i) => {
                // Thumbnail is "active" if its color matches selectedColor
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
            <div className="relative flex-1 aspect-square rounded-3xl overflow-hidden bg-[#F5F5F5]">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-contain mix-blend-multiply p-8 transition-all duration-300"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>

          {/* ── RIGHT: Product Info ── */}
          <div className="flex flex-col gap-5 lg:w-[45%] lg:pt-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight uppercase tracking-tight">
              {product.name}
            </h1>

            <StarRating rating={4.5} />

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ${product.finalPrice.toFixed(2)}
              </span>
              {product.discountPercentage > 0 && (
                <>
                  <span className="text-xl font-medium text-gray-400 line-through">
                    ${product.basePrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-semibold text-red-500 bg-red-50 px-2.5 py-1 rounded-full">
                    -{product.discountPercentage}%
                  </span>
                </>
              )}
            </div>

            <hr className="border-gray-100" />

            <p className="text-sm text-gray-500 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Select Colors
              </p>
              <div className="flex gap-3">
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
                      className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200
                        ${
                          isSelected
                            ? "bg-gray-900 text-white border-gray-900"
                            : outOfStock
                              ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed line-through"
                              : "bg-white text-gray-700 border-gray-200 hover:border-gray-900 hover:text-gray-900"
                        }`}
                    >
                      {SIZE_LABELS[size]}
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
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
                className={`flex-1 py-3.5 rounded-full text-sm font-semibold transition-all duration-200
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
    </div>
  );
}
