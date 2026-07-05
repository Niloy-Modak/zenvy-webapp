// components/FavoriteButton.tsx
"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FavoriteButtonProps {
  productId: string | number;
  variant?: "inline" | "absolute";
  size?: "sm" | "md" | "lg";
}

export default function FavoriteButton({
  productId,
  variant = "inline",
  size = "md",
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsFavorite(!isFavorite);
    console.log(`Product ${productId} favorite state:`, !isFavorite);
  };

  const particles = Array.from({ length: 8 });

  // Size configurations
  const sizeConfig = {
    sm: { button: "w-7 h-7", icon: 16 },
    md: { button: "w-8 h-8 sm:w-9 sm:h-9", icon: 18 },
    lg: { button: "w-10 h-10 sm:w-11 sm:h-11", icon: 24 },
  };

  const config = sizeConfig[size];

  // Position based on variant
  const positionClass =
    variant === "absolute"
      ? "absolute top-3 right-3 sm:top-4 sm:right-4 z-10"
      : "relative";

  return (
    <div
      className={`${positionClass} flex items-center  justify-center overflow-visible`}
    >
      <motion.button
        onClick={toggleFavorite}
        type="button"
        className={`flex items-center cursor-pointer justify-center ${config.button} rounded-full shadow-sm shrink-0`}
        style={{
          backgroundColor: isFavorite ? "#FF4D4F" : "rgba(0, 0, 0, 0.3)",
          backdropFilter: isFavorite ? "none" : "blur(4px)",
        }}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        {/* Main heart icon with animation */}
        <motion.div
          key={isFavorite ? "favorite" : "not-favorite"}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <Heart
            size={config.icon}
            className={`transition-colors duration-300 ${
              isFavorite ? "fill-white stroke-white" : "fill-none stroke-white"
            }`}
            strokeWidth={2.5}
          />
        </motion.div>

        {/* Particle burst effect when favoriting */}
        <AnimatePresence>
          {isFavorite && (
            <>
              {/* Glow ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-red-400 pointer-events-none"
                initial={{ scale: 0.8, opacity: 0.6 }}
                animate={{ scale: 1.8, opacity: 0 }}
                exit={{ scale: 1.8, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />

              {/* Burst particles */}
              {particles.map((_, index) => {
                const angle = (index / particles.length) * Math.PI * 2;
                const velocity = 60;
                const x = Math.cos(angle) * velocity;
                const y = Math.sin(angle) * velocity;

                return (
                  <motion.div
                    key={`particle-${index}`}
                    className="absolute w-1 h-1 bg-red-400 rounded-full pointer-events-none"
                    initial={{
                      x: 0,
                      y: 0,
                      scale: 1,
                      opacity: 1,
                    }}
                    animate={{
                      x,
                      y,
                      scale: 0,
                      opacity: 0,
                    }}
                    exit={{
                      x,
                      y,
                      scale: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  />
                );
              })}

              {/* Pulse effect on the button itself */}
              <motion.div
                className="absolute inset-0 rounded-full bg-red-400 pointer-events-none"
                initial={{ scale: 0, opacity: 0.3 }}
                animate={{ scale: 0 }}
                exit={{ scale: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            </>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
