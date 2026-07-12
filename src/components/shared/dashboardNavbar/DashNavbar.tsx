"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X, Bell, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface DashNavbarProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

const DashNavbar: React.FC<DashNavbarProps> = ({
  onMenuClick,
  sidebarOpen,
}) => {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-40
        bg-white/85 backdrop-blur-xl
        border-b border-slate-100/50
        shadow-sm
      "
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          {/* Left Section - Logo & Menu Toggle - Slide from Left */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Menu Toggle - Mobile */}
            <motion.button
              onClick={onMenuClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                md:hidden p-2 rounded-lg
                text-slate-600 hover:text-primary cursor-pointer
                hover:bg-slate-100/50 transition-colors
              "
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>

            {/* Main Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="origin-left flex flex-col gap-1 items-center min-w-30"
              >
                <Link href={"/"}>
                  <Image
                    src="/main_logo.png"
                    alt="main logo"
                    width={160}
                    height={22}
                    className="w-auto h-5 md:h-6 object-contain"
                    priority
                  />
                </Link>

                <div className="hidden sm:block">
                  <p className="text-xs text-slate-500">Dashboard</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section - Notifications & Profile - Slide from Right */}
          <motion.div
            className="flex items-center gap-3 lg:gap-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {/* Notification Bell */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative p-2 rounded-lg
                text-slate-600 hover:text-slate-900
                hover:bg-slate-100/50 transition-colors
              "
            >
              <Bell className="w-5 h-5" />
              <motion.span
                className="
                  absolute top-1 right-1 w-2 h-2
                  bg-red-500 rounded-full
                "
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-slate-200" />

            {/* Profile Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" group
                flex items-center gap-2 px-3 py-2 
                text-primary/70 group-hover:text-primary cursor-pointer
                hover:bg-gray-300/10 transition-colors rounded-full
              "
            >
              <div
                className="
                  w-8 h-8 rounded-full
                  bg-linear-to-br from-primary/30  to-primary/60 group-hover:from-primary/40 group-hover:to-primary/70
                  flex items-center justify-center
                "
              >
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:inline text-sm font-medium">
                Account
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom border glow effect */}
      <motion.div
        className="
          absolute bottom-0 left-0 right-0 h-px
          bg-linear-to-r from-transparent via-primary/40 to-transparent
        "
      />
    </nav>
  );
};

export default DashNavbar;
