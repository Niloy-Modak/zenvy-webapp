// src/component/pages/cart/CartTable.tsx
import React from "react";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { Cart } from "@/database/types/cart.type";

interface CartTableProps {
  cartItems: Cart["items"];
}

const CartTable: React.FC<CartTableProps> = ({ cartItems }) => {
  return (
    <div className="border border-gray-200 rounded-2xl md:p-4 bg-white w-full">
      {cartItems.map((item, index) => (
        <div
          key={item.product.id}
          className={`flex gap-4 md:gap-6 p-4 ${
            index !== cartItems.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          {/* Product Image */}
          <div className="w-22.5 h-22.5 md:w-30 md:h-30 bg-[#f2f2f2] rounded-xl shrink-0 relative overflow-hidden flex items-center justify-center">
            <Image
              src={item.product.image}
              alt={item.product.title}
              fill
              sizes="(max-width: 768px) 90px, 120px"
              className="object-cover mix-blend-multiply"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col grow justify-between">
            {/* Top Section: Title & Delete */}
            <div>
              <div className="flex justify-between items-start gap-3">
                <h3 className="font-bold text-base md:text-lg text-primary leading-tight">
                  {item.product.title}
                </h3>
                <button 
                  className="text-red-500 hover:text-red-700 transition-colors shrink-0 cursor-pointer hover:bg-red-300/10 p-2 rounded-full"
                  aria-label={`Remove ${item.product.title} from cart`}
                >
                  <Trash2 size={20} strokeWidth={2} />
                </button>
              </div>

              {/* Variations */}
              <div className="mt-1.5 space-y-0.5">
                <p className="text-sm text-gray-500">
                  Size: <span className="text-gray-400">{item.product.size}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Color:{" "}
                  <span className="text-gray-400 capitalize">
                    {item.product.color}
                  </span>
                </p>
              </div>
            </div>

            {/* Bottom Section: Price & Quantity */}
            <div className="flex justify-between items-center mt-4 md:mt-2">
              <p className="text-lg md:text-xl font-bold text-primary">
                ${item.finalPrice.toFixed(2)}
              </p>

              {/* Quantity Pill Section */}
              <div className="flex items-center bg-[#f2f2f2] rounded-full px-3 py-1.5 gap-4">

                {/* minus Button */}
                <button 
                  className="text-gray-900 hover:text-gray-500 transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={2.5} />
                </button>

                {/* Product Quantity  */}
                <span className="font-semibold text-sm w-4 text-center text-primary">
                  {item.quantity}
                </span>

                {/* Plus Button */}
                <button 
                  className="text-gray-900 hover:text-gray-500 transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartTable;