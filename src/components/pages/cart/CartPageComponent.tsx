// src/components/pages/cart/CartPageComponent.tsx
"use client";

import React, { useState, useMemo, useCallback } from "react";
import { mockCart } from "@/database/data/cart.constants";
import CartTable from "@/components/pages/cart/CartTable";
import CheckoutButton from "./CheckoutButton";

const CartPageComponent = () => {
  const [cartItems, setCartItems] = useState(mockCart.items);

  // 1. useCallback: Prevents function recreation on every render
  const handleUpdateQuantity = useCallback((variantId: string, newQuantity: number) => {
    // 🚀 Optimistic UI Update (Immediate visual feedback before API response)
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.variantId === variantId
          ? { ...item, quantity: newQuantity, lineTotal: item.finalPrice * newQuantity }
          : item
      )
    );
    // 🚀 FUTURE: await updateCartApi({ variantId, quantity: newQuantity });
  }, []);

  const handleRemoveItem = useCallback((variantId: string) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.product.variantId !== variantId)
    );
    // 🚀 FUTURE: await removeFromCartApi({ variantId });
  }, []);

  // 2. useMemo: Caches math logic. Only recalculates when `cartItems` array changes.
  const totals = useMemo(() => {
    let baseSub = 0;
    let currSub = 0;

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      baseSub += item.basePrice * item.quantity;
      currSub += item.finalPrice * item.quantity;
    }

    const discount = baseSub - currSub;
    const percentage = baseSub > 0 ? Math.round((discount / baseSub) * 100) : 0;
    const delivery = cartItems.length > 0 ? 15 : 0;

    return {
      baseSubtotal: baseSub,
      currentSubtotal: currSub,
      totalDiscount: discount,
      discountPercentage: percentage,
      deliveryFee: delivery,
      finalTotal: currSub + delivery,
    };
  }, [cartItems]);

  return (
    <div className="standard-width mt-5 lg:mt-8 mb-10 lg:mb-16">
      <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 lg:mb-6 text-black">
        Your Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
        <div className="w-full lg:w-[60%] xl:w-[65%]">
          <CartTable 
            cartItems={cartItems} 
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        </div>

        <div className="w-full lg:w-[40%] xl:w-[35%]">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white">
            <h2 className="text-xl font-bold mb-6 text-black">Order Summary</h2>

            <div className="space-y-4 text-base">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-bold text-black">
                  ${totals.baseSubtotal.toFixed(2)}
                </span>
              </div>
              
              {totals.totalDiscount > 0 && (
                <div className="flex justify-between text-gray-500">
                  <span>
                    Discount <span className="text-gray-400">(-{totals.discountPercentage}%)</span>
                  </span>
                  <span className="font-bold text-red-500">
                    -${totals.totalDiscount.toFixed(2)}
                  </span>
                </div>
              )}
              
              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span className="font-bold text-black">
                  ${totals.deliveryFee.toFixed(2)}
                </span>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg text-black">Total</span>
              <span className="text-2xl font-bold text-black">
                ${totals.finalTotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout button */}
            <CheckoutButton disabled={cartItems.length === 0}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageComponent;