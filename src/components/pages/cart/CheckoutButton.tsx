// src/components/pages/cart/CheckoutButton.tsx
"use client";

import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CheckoutButtonProps {
  disabled: boolean;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ disabled }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button 
      disabled={disabled}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative w-full bg-black text-white py-4 rounded-full font-medium overflow-hidden hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex justify-center items-center cursor-pointer"
    >
      <div className="flex items-center justify-center gap-2">
        {/* Text Animation */}
        <div className="relative h-6 overflow-hidden">
          <motion.div
            animate={{ y: hovered ? "-50%" : "0%" }}
            transition={{
              duration: 0.35,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="flex flex-col items-center"
          >
            <span className="h-6 block leading-6">Go to Checkout</span>
            <span className="h-6 block leading-6">Go to Checkout</span>
          </motion.div>
        </div>

        {/* Arrow Animation */}
        <div className="relative h-5 w-5 overflow-hidden">
          <motion.div
            animate={{ y: hovered ? "-50%" : "0%" }}
            transition={{
              duration: 0.35,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="flex flex-col"
          >
            <div className="flex h-5 items-center justify-center">
              <ArrowRight size={20} strokeWidth={2} />
            </div>
            <div className="flex h-5 items-center justify-center">
              <ArrowRight size={20} strokeWidth={2} />
            </div>
          </motion.div>
        </div>
      </div>
    </button>
  );
};

export default CheckoutButton;