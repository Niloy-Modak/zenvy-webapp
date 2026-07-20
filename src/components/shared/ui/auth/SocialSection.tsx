"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const SocialSection = () => {
  const [hovered, setHovered] = useState(false);

  const textVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const buttonVariants: Variants = {
    initial: {
      backgroundColor: "rgba(255,255,255,0)",
    },
    hover: {
      backgroundColor: "rgba(255,255,255,0.2)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full">
      <motion.button
        type="button"
        className="w-full py-3.5 px-4 text-sm font-semibold rounded-full border border-primary/30 md:border-white/60 text-gray-900 flex items-center justify-center gap-2.5 overflow-hidden relative cursor-pointer"
        initial="initial"
        whileHover="hover"
        variants={buttonVariants}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-white/10 via-white/5 to-transparent opacity-0 hover:opacity-100 pointer-events-none rounded-2xl"
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaGoogle className="w-4 h-4" />
        </motion.div>

        {/* Text */}
        <div className="relative z-10 overflow-hidden">
          <AnimatePresence mode="wait">
            {hovered ? (
              <motion.span
                key="full"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="block whitespace-nowrap"
              >
                Sign in with Google
              </motion.span>
            ) : (
              <motion.span
                key="short"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="block whitespace-nowrap"
              >
                Google
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.button>
    </div>
  );
};

export default SocialSection;
