"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type SecondaryButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function SecondaryButton({
  text,
  onClick,
  type,
}: SecondaryButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      type={type}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative w-auto overflow-hidden rounded-full backdrop-blur-md bg-background/20 border border-primary/30 hover:bg-background/30 transition-all duration-300 cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)]"
    >
      <div className="flex items-center justify-center md:justify-start gap-2  sm:py-3 py-2 px-4 sm:px-8">
        {/* text */}
        <div className="relative h-6 overflow-hidden">
          <motion.div
            animate={{ y: hovered ? "-50%" : "0%" }}
            transition={{
              duration: 0.35,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="flex flex-col items-center"
          >
            <span className="h-6 text-sm font-medium leading-6 tracking-[-0.01em] text-primary">
              {text}
            </span>
            <span className="h-6 text-sm font-medium leading-6 tracking-[-0.01em] text-primary">
              {text}
            </span>
          </motion.div>
        </div>

        {/* arrow */}
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
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </div>
            <div className="flex h-5 items-center justify-center">
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </button>
  );
}
