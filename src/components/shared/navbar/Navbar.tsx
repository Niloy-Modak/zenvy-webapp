"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Search,
  ShoppingCart,
  UserCircle,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

// 1. Dynamic Data Structure
const NavLinks = [
  {
    name: "Shop",
    link: "/shop",
    subLinks: ["shirt", "t-shirt", "jeans", "hoodie"],
  },
  {
    name: "On Sale",
    link: "/on-sale",
  },
  {
    name: "New Arrivals",
    link: "/new-arrivals",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
];

// 2. Framer Motion Variants for Staggered Animations
const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const drawerVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "100vh",
    transition: { duration: 0.4, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: [0.12, 0, 0.39, 1] },
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Toggle mobile accordion
  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* 3. Apple Liquid Glass Background Effect */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl saturate-150 border-b border-primary/5 shadow-sm -z-10" />

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4 lg:gap-10">
        {/* Mobile: Hamburger Menu & Logo Group */}
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-1 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center min-w-30">
            <Image
              src="/main_logo.png"
              alt="SHOP.CO Logo"
              width={160}
              height={22}
              className="w-auto h-5 md:h-6 object-contain"
              priority
            />
          </Link>
        </div>

        {/* 4. Desktop Navigation Links with Hover Dropdown */}
        <nav className="hidden md:flex text-xs lg:text-base items-center gap-8 text-primary font-medium whitespace-nowrap h-full">
          {NavLinks.map((item) => (
            <div
              key={item.name}
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.link}
                className="flex items-center gap-1 hover:text-gray-600 transition-colors py-8"
              >
                {item.name}
                {item.subLinks && (
                  <motion.div
                    animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                )}
              </Link>

              {/* Desktop SubLink Dropdown */}
              {item.subLinks && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 -mt-2.5 w-48 bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-3 overflow-hidden"
                    >
                      {item.subLinks.map((sub, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                          <Link
                            href={`${item.link}/${sub.toLowerCase()}`}
                            className="block px-4 py-2 rounded-lg text-sm capitalize hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {sub}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 max-w-125 relative items-center">
          <Search className="absolute left-4 h-5 w-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-primary/5 border border-transparent focus:border-primary/20 text-sm text-primary pl-12 pr-4 py-2.5 rounded-full outline-none transition-all duration-300 placeholder:text-gray-500"
          />
        </div>

        {/* 5. Utility Icons with Premium Hover Scales */}
        <div className="flex items-center gap-4 text-primary">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-1"
          >
            <Search className="h-6 w-6" />
          </motion.button>

          {/* Add cart icon */}
          <Link href="/cart">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-1 cursor-pointer"
            >
              <ShoppingCart className="h-6 w-6" />
            </motion.button>
          </Link>

          {/* User Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-1 hidden sm:block cursor-pointer"
          >
            <UserCircle className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      {/* 6. Mobile Navigation Drawer (Glassmorphism & Accordion) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden max-h-[calc(100vh-64px)] absolute top-full left-0 w-full bg-white/80 backdrop-blur-2xl border-t border-primary/5 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6 max-h-[calc(100vh-120px)] overflow-y-auto">
              {NavLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="border-b border-primary/10 pb-4 last:border-0"
                >
                  {item.subLinks ? (
                    <div>
                      <button
                        onClick={() => toggleAccordion(item.name)}
                        className="w-full flex items-center justify-between text-xl font-medium text-primary"
                      >
                        {item.name}
                        <motion.div
                          animate={{
                            rotate: openAccordion === item.name ? 180 : 0,
                          }}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.div>
                      </button>

                      {/* Mobile Accordion Sublinks */}
                      <AnimatePresence>
                        {openAccordion === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 pt-4 pl-4">
                              {item.subLinks.map((sub, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  <Link
                                    href={`${item.link}/${sub.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg text-gray-600 capitalize block"
                                  >
                                    {sub}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-xl font-medium text-primary"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
