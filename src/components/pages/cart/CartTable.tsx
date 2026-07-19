// src/components/pages/cart/CartTable.tsx
import React, { memo } from "react";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { Cart } from "@/database/types/cart.type";

interface CartTableProps {
  cartItems: Cart["items"];
  onUpdateQuantity: (variantId: string, quantity: number) => void;
  onRemoveItem: (variantId: string) => void;
}

// 3. React.memo: This row will ONLY re-render if its specific `item` object changes.
// If you update Item A, Item B's render cycle is completely skipped.
const CartItemRow = memo(({ 
  item, 
  isLast, 
  onUpdateQuantity, 
  onRemoveItem 
}: { 
  item: Cart["items"][0]; 
  isLast: boolean;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
}) => {
  const hasDiscount = item.discountPercentage > 0;
  const variantId = item.product.variantId;

  return (
    <div className={`flex gap-4 md:gap-6 p-4 ${!isLast ? "border-b border-gray-100" : ""}`}>
      <div className="w-22.5 h-22.5 md:w-30 md:h-30 bg-[#f2f2f2] rounded-xl shrink-0 relative overflow-hidden flex items-center justify-center">
        <Image
          src={item.product.image}
          alt={item.product.title}
          fill
          sizes="(max-width: 768px) 90px, 120px"
          className="object-cover mix-blend-multiply"
        />
      </div>

      <div className="flex flex-col grow justify-between">
        <div>
          <div className="flex justify-between items-start gap-3">
            <h3 className="font-bold text-base md:text-lg text-primary leading-tight">
              {item.product.title}
            </h3>
            <button
              onClick={() => onRemoveItem(variantId)}
              className="text-red-500 hover:text-red-700 transition-colors shrink-0 cursor-pointer hover:bg-red-300/10 p-2 rounded-full"
              aria-label={`Remove ${item.product.title}`}
            >
              <Trash2 size={20} strokeWidth={2} />
            </button>
          </div>

          <div className="mt-1.5 space-y-0.5">
            <p className="text-sm text-gray-500">
              Size: <span className="text-gray-400">{item.product.size}</span>
            </p>
            <p className="text-sm text-gray-500">
              Color: <span className="text-gray-400 capitalize">{item.product.color}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 md:mt-2">
          <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 flex-wrap">
            <span className="text-base sm:text-xl font-medium text-gray-900 whitespace-nowrap">
              ${item.finalPrice.toFixed(2)}
            </span>
            {hasDiscount && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs sm:text-base font-medium text-gray-400 line-through whitespace-nowrap">
                  ${item.basePrice.toFixed(2)}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-red-500 bg-red-50 px-1.5 sm:px-2 py-0.5 rounded-full">
                  -{item.discountPercentage}%
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center bg-[#f2f2f2] rounded-full px-3 py-1.5 gap-4">
            <button
              onClick={() => onUpdateQuantity(variantId, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="text-gray-900 hover:text-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center cursor-pointer"
            >
              <Minus size={14} strokeWidth={2.5} />
            </button>

            <span className="font-semibold text-sm w-4 text-center text-primary">
              {item.quantity}
            </span>

            <button
              onClick={() => onUpdateQuantity(variantId, item.quantity + 1)}
              className="text-gray-900 hover:text-gray-500 transition-colors flex items-center justify-center cursor-pointer"
            >
              <Plus size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

CartItemRow.displayName = "CartItemRow"; // Helps with React DevTools debugging

const CartTable: React.FC<CartTableProps> = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  if (cartItems.length === 0) {
    return (
      <div className="border border-gray-200 rounded-2xl p-10 bg-white w-full text-center text-gray-500">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-2xl md:p-4 bg-white w-full">
      {cartItems.map((item, index) => (
        <CartItemRow
          key={item.product.id}
          item={item}
          isLast={index === cartItems.length - 1}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </div>
  );
};

export default CartTable;