'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaGoogle} from 'react-icons/fa';

const SocialSection = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const textVariants : Variants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const buttonVariants : Variants = {
    initial: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0.6)',
    },
    hover: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const socialButtons = [
    {
      id: 'google',
      icon: FaGoogle,
      label: 'Google',
      fullLabel: 'Sign in with Google',
    }
  ];

  return (
    <div className="w-full">
      

      {/* Social Buttons */}
      <div className="flex gap-3 w-full">
        {socialButtons.map(({ id, icon: Icon, label, fullLabel }) => (
          <motion.button
            key={id}
            type="button"
            className="flex-1 relative py-3.5 px-4 text-sm font-semibold rounded-2xl border border-white/60 text-gray-900 flex items-center justify-center gap-2.5 overflow-hidden group/btn cursor-pointer"
            initial="initial"
            whileHover="hover"
            variants={buttonVariants}
            onMouseEnter={() => setHoveredButton(id)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* Background gradient overlay on hover (desktop only) */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 pointer-events-none rounded-2xl"
              transition={{ duration: 0.3 }}
            />

            {/* Icon */}
            <motion.div
              className="relative z-10 flex items-center justify-center"
              animate={{
                scale: hoveredButton === id ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-4 h-4" />
            </motion.div>

            {/* Text - Mobile shows simple label, Desktop shows animated full label on hover */}
            <div className="relative z-10 overflow-hidden">
              {/* Mobile - always shows label */}
              <div className="hidden md:block">
                <AnimatePresence mode="wait">
                  {hoveredButton === id ? (
                    <motion.span
                      key={`${id}-full`}
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="block whitespace-nowrap"
                    >
                      {fullLabel}
                    </motion.span>
                  ) : (
                    <motion.span
                      key={`${id}-short`}
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="block whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Small devices - always show label */}
              <div className="md:hidden">
                <span className="block">{label}</span>
              </div>
            </div>

            {/* Shine effect on hover (desktop only) */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 pointer-events-none hidden md:block"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default SocialSection;